/* eslint-disable @typescript-eslint/no-unused-vars */
import { studioRouter } from '@/modules/studio/server/procedures';
import { createTRPCRouter } from '../init';
import { categoriesRouter } from '@/modules/categories/server/procedures';

export const appRouter = createTRPCRouter({
  studio: studioRouter,
  categories: categoriesRouter,
});

export type AppRouter = typeof appRouter;