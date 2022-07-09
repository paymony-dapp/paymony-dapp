/**
 * Plans are payment pages that users create to let people create subscriptions to pay them
 *
 *
 * Plans have payment links which are returned to the user
 *
 */

import { Plan } from '@prisma/client';
import { PUBLIC_URL } from '../../utils/config';
import { generateString } from '../../utils/generateString';
import { prismaClient } from '../../utils/prismaClient';
import { PlanInterval } from '../../utils/types';
import { createPlanType } from '../schemas/planSchema';

const baseUrl = `${PUBLIC_URL}/subscribe/`;

export class PlanService {
  // Create a plan
  async createPlan(payload: createPlanType): Promise<string> {
    // Generate a link
    const link = generateString();
    const planLink = baseUrl + link;

    const {
      amount,
      billingCycle,
      category,
      description,
      userWallet,
      isPublic,
      name,
    } = payload;

    const planCreated = await prismaClient.plan.create({
      data: {
        amount,
        billingCycle: billingCycle as any,
        category,
        accessUrl: link,
        description,
        userWallet,
        isPublic,
        name,
      },
    });

    return planLink;
  }

  async togglePlanActivation(planId: string): Promise<boolean> {
    const plan = await prismaClient.plan.findFirst({
      where: {
        id: planId,
      },
    });

    if (plan == null || !plan || plan == undefined) {
      return false;
    }

    await prismaClient.plan.update({
      where: {
        id: planId,
      },
      data: {
        active: !plan.active,
        isPublic: !plan?.isPublic,
      },
    });

    return true;
  }

  async deletePlan(planId: string) {
    const plan = await prismaClient.plan.delete({
      where: {
        id: planId,
      },
    });
  }

  async getPlanById(planId: string): Promise<Plan | null> {
    return await prismaClient.plan.findFirst({
      where: {
        id: planId,
      },
    });
  }

  async getAllPlans(address?: string): Promise<Plan[]> {
    if (address) {
      return await prismaClient.plan.findMany({
        where: {
          userWallet: address,
        },
      });
    }
    return await prismaClient.plan.findMany();
  }
}
