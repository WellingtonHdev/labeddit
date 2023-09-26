import { BaseError } from "./baseError";

export class UnauthorizedError extends BaseError {
    constructor(
        message: string = "Token inválido"
    ) {
        super(401, message)
    }
}