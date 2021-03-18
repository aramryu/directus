/**
 * Sanitize query parameters.
 * This ensures that query params are formatted and ready to go for the services.
 */
import { RequestHandler } from 'express';
declare const sanitizeQueryMiddleware: RequestHandler;
export default sanitizeQueryMiddleware;
