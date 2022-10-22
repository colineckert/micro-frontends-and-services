import { CustomError } from './custom-error';

// Added explicit type definitions as example
export class NotFoundError extends CustomError {
  statusCode: number = 404;

  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: 'Not found' }];
  }
}
