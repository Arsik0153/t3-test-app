import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
      include: {
        user: true,
      }
    });
  }),

  create: protectedProcedure
    .input(z.object({
      title: z.string(),
      content: z.string(),
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
          userId: ctx.session.user.id,
        }
      })
    })
});
