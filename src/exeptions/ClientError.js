class ClientError extends Error{
    counstuctor(message, statusCode=400){
        super(message);
        this.statusConde= statusCode;
        this.name= 'ClientError';
    }
}


module.exports= ClientError;