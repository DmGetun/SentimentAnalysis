import typing

if typing.TYPE_CHECKING:
    from app.web.app import Application


def setup_routes(app: "Application"):
    from app.sentiment.views import AnalysSentimentView

    app.router.add_view('/api/get_estimate', AnalysSentimentView)