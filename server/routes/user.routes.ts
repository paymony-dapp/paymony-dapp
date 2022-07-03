import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { prismaClient } from '../../utils/prismaClient';
import { createRouter } from '../createRouter';
import { userCreateSchema } from '../schemas/userSchemas';
import * as trpc from '@trpc/server';

export const userRouter = createRouter()
  .mutation('add', {
    input: userCreateSchema,
    async resolve({ input }) {
      try {
        const { address } = input;
        const user = await prismaClient.user.create({
          data: {
            address,
          },
        });
        return user;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new trpc.TRPCError({
              message: 'Wallet already registered',
              code: 'CONFLICT',
            });
          }
        }
        throw new trpc.TRPCError({
          message: 'Something went wrong',
          code: 'INTERNAL_SERVER_ERROR',
        });
      }
    },
  })
  .query('find', {
    input: String,
    async resolve({ input }) {
      const user = await prismaClient.user.findFirst({
        cursor: { address: input },
      });
      return user;
    },
  });
