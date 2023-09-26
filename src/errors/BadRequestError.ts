import { BaseError } from "./baseError";

export class BadRequestError extends BaseError {
    constructor(
        message: string = "Requisição inválida"
    ) {
        super(400, message)
    }
}