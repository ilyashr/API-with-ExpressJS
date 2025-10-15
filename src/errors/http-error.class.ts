export class HTTPError extends Error {
    statusCode: number;
    context?: string | undefined;

    constructor(statusCode: number, message: string, context?: string | undefined) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.context = context;
    }
}