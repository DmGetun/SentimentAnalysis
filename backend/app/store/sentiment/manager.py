class SentimentManager:
    def __init__(self, text: str):
        self.text = text

    async def get_estimate(self):
        estimate = await self._calculate_estimate()
        return estimate 

    async def _calculate_estimate(self):
        return 2
