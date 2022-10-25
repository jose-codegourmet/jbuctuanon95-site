import { getUserHandlers } from './handlers/user';
import type { RestHandler } from 'msw';

export const getHandlers = (): RestHandler[] => [...getUserHandlers()];
