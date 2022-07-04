-- AlterEnum
ALTER TYPE "PlanInterval" ADD VALUE 'DAILY';

-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "logoUrl" TEXT;
