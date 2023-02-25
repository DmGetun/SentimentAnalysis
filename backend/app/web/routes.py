from aiohttp.web_app import Application
from app.sentiment.routes import setup_routes as sentiment_setup_routes


def setup_routes(app: Application):
    sentiment_setup_routes(app)