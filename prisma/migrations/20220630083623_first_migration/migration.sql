-- CreateEnum
CREATE TYPE "PlanInterval" AS ENUM ('HOURLY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- CreateTable
CREATE TABLE "User" (
    "address" TEXT NOT NULL,
    "username" VARCHAR(20),
    "email" VARCHAR(50),
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("address")
);

-- CreateTable
CREATE TABLE "Subscriptions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "signingAddress" TEXT NOT NULL,
    "recievingAddress" TEXT NOT NULL,
    "billingCycle" "PlanInterval" NOT NULL,
    "extrinsicHex" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "remindMe" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "subscriberAddress" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "billingCycle" "PlanInterval" NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "accessUrl" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userWallet" TEXT NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Subscriptions" ADD CONSTRAINT "Subscriptions_subscriberAddress_fkey" FOREIGN KEY ("subscriberAddress") REFERENCES "User"("address") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_userWallet_fkey" FOREIGN KEY ("userWallet") REFERENCES "User"("address") ON DELETE RESTRICT ON UPDATE CASCADE;
