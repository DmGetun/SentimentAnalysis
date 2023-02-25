import json
import uuid


from aiohttp_apispec import docs, request_schema, response_schema, querystring_schema
from app.store.sentiment.manager import SentimentManager
from app.web.utils import json_response
from app.sentiment.schemes import ContentSchema
from app.web.app import View
from app.web.schemes import OkResponseSchema


class AnalysSentimentView(View):
    @docs(tags=['SentimentAnalys'], summary="Sentiment analyse of text", description='Calculate a emotional evaluation of the text')
    async def post(self):
        #text = self.request.get('data', {})['text']
        data = await self.request.json()
        text = data['text']
        sentiment_manager = SentimentManager(text=text)
        estimate = await sentiment_manager.get_estimate()
        return json_response(data={'text': text, 'estimate': estimate})
