const Joi = require('joi');

const ExportNotePayloadSchema = Joi.object({
    targetEmail: Joi.string().email({ tlds: true }).required(),
});

module.exports = { ExportNotePayloadSchema };
