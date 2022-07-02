import { z } from 'zod';

export const userCreateSchema = z.object({
  address: z.string(),
});

export const userUpdateSchema = z.object({
  email: z.string().email('Please enter a valid email').optional(),
  username: z.string().max(20, 'Username is too long'),
});

export type CreateUserInput = z.TypeOf<typeof userCreateSchema>;
export type UpdateUserInput = z.TypeOf<typeof userUpdateSchema>;
