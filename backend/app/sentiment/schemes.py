from marshmallow import Schema, fields

class ContentSchema(Schema):
    text = fields.Str(required=True)
    value = fields.Str(load_only=True)