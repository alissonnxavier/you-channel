/* eslint-disable @typescript-eslint/no-unused-vars */
import { createTRPCRouter } from '../init';
import { categoriesRouter } from '@/modules/categories/server/procedures';

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
});

export type AppRouter = typeof appRouter;