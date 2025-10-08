/*
  Warnings:

  - A unique constraint covering the columns `[stripeCustomerId]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stripeSubscriptionId]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('PENDING', 'TRIALING', 'ACTIVE', 'PAST_DUE', 'CANCELED');

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "accentColor" TEXT NOT NULL DEFAULT '#023047',
ADD COLUMN     "heroSubtitle" TEXT,
ADD COLUMN     "heroTitle" TEXT,
ADD COLUMN     "menuWelcomeMessage" TEXT,
ADD COLUMN     "menuWelcomeTitle" TEXT,
ADD COLUMN     "ownerEmail" TEXT,
ADD COLUMN     "ownerName" TEXT,
ADD COLUMN     "planActivatedAt" TIMESTAMP(3),
ADD COLUMN     "primaryColor" TEXT NOT NULL DEFAULT '#FFB703',
ADD COLUMN     "secondaryColor" TEXT NOT NULL DEFAULT '#FB8500',
ADD COLUMN     "stripeCustomerId" TEXT,
ADD COLUMN     "stripePriceId" TEXT,
ADD COLUMN     "stripeSubscriptionId" TEXT,
ADD COLUMN     "subscriptionStatus" "SubscriptionStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "surfaceColor" TEXT NOT NULL DEFAULT '#FFF8F0',
ADD COLUMN     "trialEndsAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "RestaurantAdmin" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "displayName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RestaurantAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestaurantGalleryImage" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RestaurantGalleryImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RestaurantAdmin_restaurantId_email_key" ON "RestaurantAdmin"("restaurantId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_stripeCustomerId_key" ON "Restaurant"("stripeCustomerId");

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_stripeSubscriptionId_key" ON "Restaurant"("stripeSubscriptionId");

-- AddForeignKey
ALTER TABLE "RestaurantAdmin" ADD CONSTRAINT "RestaurantAdmin_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantGalleryImage" ADD CONSTRAINT "RestaurantGalleryImage_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
