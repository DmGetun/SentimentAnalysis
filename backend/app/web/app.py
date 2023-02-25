from aiohttp.web import Application as AiohttpApplication, run_app as aiohttp_run_app, View as AiohttpView, Request as AiohttpRequest
from aiohttp_apispec import setup_aiohttp_apispec
from app.store import setup_accessors
from app.store.sentiment.accessor import SentimentAccessor
from app.web.config import Config, setup_config
from app.web.routes import setup_routes
from typing import Optional
from app.web.middlewares import setup_middlewares
import aiohttp_cors


class Application(AiohttpApplication):
    config: Optional[Config] = None
    database: dict = {}
    crm_accessor: Optional[SentimentAccessor] = None


class Request(AiohttpRequest):
    @property
    def app(self) -> "Application":
        return super().app()


class View(AiohttpView):
    @property
    def request(self) -> Request:
        return super().request

    @property
    def data(self) -> dict:
        return self.request.get("data", {})

    def database(self):
        return self.request.app.database


app = Application()


def run_app():
    setup_config(app)
    setup_routes(app)
    setup_aiohttp_apispec(app, title='CRM Application', url='/docs/json', swagger_path='/docs')
    setup_middlewares(app)
    setup_accessors(app)
    aiohttp_run_app(app)
    cors = aiohttp_cors.setup(app, defaults={
        "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*"
        )
    })

    for route in list(app.router.routes()):
        cors.add(route)
