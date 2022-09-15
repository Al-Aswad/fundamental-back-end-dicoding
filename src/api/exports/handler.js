const ClientError = require('../../exeptions/ClientError');

/* eslint-disable no-underscore-dangle */
class ExportsHandler {
    constructor(service, validator) {
        this._sevice = service;
        this._validator = validator;

        this.postExportNotesHandler = this.postExportNotesHandler.bind(this);
    }

    async postExportNotesHandler(request, h) {
        try {
            this._validator.ValidateExportNotesPayload(request.payload);

            const message = {
                userId: request.auth.credentials.id,
                targetEmail: request.payload.targetEmail,
            };

            await this._sevice.sendMessages('export:notes', JSON.stringify(message));

            const response = h.response({
                status: 'success',
                message: 'Permintaan Anda dalam antrean',
            });
            response.code(201);
            return response;
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: error.message,
                });

                response.code(400);
                return response;
            }

            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }
}

module.exports = ExportsHandler;
