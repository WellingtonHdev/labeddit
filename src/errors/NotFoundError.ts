import { BaseError } from "./baseError";

export class NotFoundError extends BaseError {
  constructor(
    message: string = "Recurso não encontrado"
  ) {
    super(404, message)
  }
}