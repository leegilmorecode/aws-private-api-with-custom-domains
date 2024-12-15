import { logger } from '@shared/logger';
import type { APIGatewayProxyResult } from 'aws-lambda';
import createError from 'http-errors';

export function errorHandler(error: Error | unknown): APIGatewayProxyResult {
  logger.error(`private error: ${error}`);

  let errorMessage = 'An error has occurred';
  let statusCode = 500;

  if (error instanceof Error) {
    switch (error.name) {
      case 'ValidationError':
        errorMessage = error.message;
        statusCode = 400;

        logger.error(errorMessage, {
          errorName: errorMessage,
          statusCode,
        });

        throw createError.BadRequest(errorMessage);
      case 'ResourceNotFound':
        errorMessage = error.message;
        statusCode = 404;

        logger.error(errorMessage, {
          errorName: errorMessage,
          statusCode,
        });

        throw createError.NotFound(errorMessage);
      default:
        errorMessage = 'An error has occurred';
        statusCode = 500;

        logger.error(errorMessage, {
          errorName: errorMessage,
          statusCode,
        });

        throw createError.InternalServerError(errorMessage);
    }
  }

  logger.error(errorMessage, {
    errorName: errorMessage,
    statusCode,
  });

  throw createError.InternalServerError(errorMessage);
}