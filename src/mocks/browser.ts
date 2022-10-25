import { getHandlers } from './handlers';
import { setupWorker } from 'msw';

export const worker = setupWorker(...getHandlers());
