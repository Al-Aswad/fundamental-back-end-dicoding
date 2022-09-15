const InvariantError = require('../../exeptions/InvariantError');
const { ExportNotePayloadSchema } = require('./schema');

const ExportsValidator = {
    ValidateExportNotesPayload: (payload) => {
        const validateResult = ExportNotePayloadSchema.validate(payload);

        if (validateResult.error) {
            throw new InvariantError(validateResult.error);
        }
    },

};

module.exports = ExportsValidator;
