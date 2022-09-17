const InvariantError = require('../../exeptions/InvariantError');
const ImageHeaderSchema = require('./Schema');

const UploadsValidator = {
    validateImageHeaders: (header) => {
        const validationResult = ImageHeaderSchema.validate(header);

        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    },
};

module.exports = UploadsValidator;
