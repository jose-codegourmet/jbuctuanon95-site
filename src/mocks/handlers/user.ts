import { StatusCodes } from 'http-status-codes';
import { rest } from 'msw';
import type { RestHandler } from 'msw';
import { MOCK_CURRENT_USER_PROFILE } from 'src/constants/mockData/user';

export const getUserHandlers = (): RestHandler[] => [
  rest.get(`/current-user`, (_, res, ctx) => {
    return res(ctx.status(StatusCodes.OK), ctx.json(MOCK_CURRENT_USER_PROFILE));
  }),
];
