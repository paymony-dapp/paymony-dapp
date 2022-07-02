/**
 * Plans are payment pages that users create to let people create subscriptions to pay them
 *
 *
 * Plans have payment links which are returned to the user
 *
 */

import { PUBLIC_URL } from '../../utils/config';
import { generateString } from '../../utils/generateString';

const baseUrl = `${PUBLIC_URL}/subscribe/`;

export class PlanService {
  // Create a plan
  async createPlan() {
    // Generate a link
    const link = generateString();
    const planLink = baseUrl + link;
  }
  // Disable/Enable a plan
  // Delete a plan
  //
}
