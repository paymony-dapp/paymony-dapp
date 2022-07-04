/**
 * Plans are payment pages that users create to let people create subscriptions to pay them
 *
 *
 * Plans have payment links which are returned to the user
 *
 */

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

    const { amount, billingCycle, category, description, userWallet, isPublic, name } = payload;

    const planCreated = await prismaClient.plan.create({
      data: {
        amount,
        billingCycle,
        category,
        accessUrl: link,
        description,
        userWallet,
        isPublic,
        name
      }
    })
   
    return planLink
  }
  // Disable/Enable a plan
  // Delete a plan
  //Get by id
  //get plans
}
