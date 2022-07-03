/*
  Warnings:

  - You are about to drop the column `extrinsicHex` on the `Subscriptions` table. All the data in the column will be lost.
  - Added the required column `txHash` to the `Subscriptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subscriptions" DROP COLUMN "extrinsicHex",
ADD COLUMN     "txHash" TEXT NOT NULL;
