/*
  Warnings:

  - The values [SUPER_USER,AVERAGE_USER] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `AcepteeId` on the `AcceptedOffer` table. All the data in the column will be lost.
  - You are about to drop the column `acepteeData` on the `AcceptedOffer` table. All the data in the column will be lost.
  - You are about to drop the column `offerData` on the `AcceptedOffer` table. All the data in the column will be lost.
  - You are about to drop the column `gameData` on the `CounterOffer` table. All the data in the column will be lost.
  - You are about to drop the column `offerData` on the `CounterOffer` table. All the data in the column will be lost.
  - You are about to drop the column `profileData` on the `CounterOffer` table. All the data in the column will be lost.
  - You are about to drop the column `profileData` on the `GameBuyer` table. All the data in the column will be lost.
  - You are about to drop the column `contactData` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profileData` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userGroupsId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `chatData` on the `UserChat` table. All the data in the column will be lost.
  - You are about to drop the column `threadData` on the `UserComment` table. All the data in the column will be lost.
  - You are about to drop the column `profileData` on the `UserFollower` table. All the data in the column will be lost.
  - You are about to drop the column `consoleData` on the `UserGame` table. All the data in the column will be lost.
  - You are about to drop the column `genreData` on the `UserGame` table. All the data in the column will be lost.
  - You are about to drop the column `offerData` on the `UserGameSwap` table. All the data in the column will be lost.
  - You are about to drop the column `profileData` on the `UserGameSwap` table. All the data in the column will be lost.
  - You are about to drop the column `threadData` on the `UserGameSwap` table. All the data in the column will be lost.
  - You are about to drop the column `profileData` on the `UserMention` table. All the data in the column will be lost.
  - You are about to drop the column `profileData` on the `UserMentioned` table. All the data in the column will be lost.
  - You are about to drop the column `profileData` on the `UserNotification` table. All the data in the column will be lost.
  - You are about to drop the column `offerData` on the `UserOfferQrCode` table. All the data in the column will be lost.
  - You are about to drop the column `AddUser` on the `UserPermissions` table. All the data in the column will be lost.
  - You are about to drop the column `DeleteUser` on the `UserPermissions` table. All the data in the column will be lost.
  - You are about to drop the column `RecieveMessage` on the `UserPermissions` table. All the data in the column will be lost.
  - You are about to drop the column `messageData` on the `UserReply` table. All the data in the column will be lost.
  - You are about to drop the column `GameData` on the `UserSale` table. All the data in the column will be lost.
  - You are about to drop the column `SalesChargeData` on the `UserSale` table. All the data in the column will be lost.
  - You are about to drop the column `profileData` on the `UserSale` table. All the data in the column will be lost.
  - You are about to drop the column `profileData` on the `UserSaleQrCode` table. All the data in the column will be lost.
  - You are about to drop the column `threadData` on the `UserSquare` table. All the data in the column will be lost.
  - You are about to drop the column `userProfileId` on the `UserSquare` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `UserWallet` table. All the data in the column will be lost.
  - You are about to drop the column `profileData` on the `UserWallet` table. All the data in the column will be lost.
  - You are about to drop the `UserBookmarkItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPayementMethod` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userProfileId]` on the table `UserContacts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[acceptedOfferId]` on the table `UserGameOffer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[handle]` on the table `UserHandle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `AccepteeId` to the `AcceptedOffer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userProfileId` to the `UserContacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acceptedOfferId` to the `UserGameOffer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UsersquareModId` to the `UserSquare` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currencyId` to the `UserWallet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PICKED_UP', 'IN_TRANSIT');

-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('CUSTOMER', 'ADMIN', 'AGENT', 'API');
ALTER TABLE "UserPermissions" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "Admin" ALTER COLUMN "tier" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TABLE "UserPermissions" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TABLE "Admin" ALTER COLUMN "tier" TYPE "UserRole_new" USING ("tier"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
ALTER TABLE "UserPermissions" ALTER COLUMN "role" SET DEFAULT 'CUSTOMER';
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'CUSTOMER';
ALTER TABLE "Admin" ALTER COLUMN "tier" SET DEFAULT 'ADMIN';
COMMIT;

-- DropForeignKey
ALTER TABLE "AcceptedOffer" DROP CONSTRAINT "AcceptedOffer_AcepteeId_fkey";

-- DropForeignKey
ALTER TABLE "AcceptedOffer" DROP CONSTRAINT "AcceptedOffer_OfferId_fkey";

-- DropForeignKey
ALTER TABLE "UserBookmarkItem" DROP CONSTRAINT "UserBookmarkItem_userBookmarkId_fkey";

-- DropForeignKey
ALTER TABLE "UserBookmarkItem" DROP CONSTRAINT "UserBookmarkItem_userCommentId_fkey";

-- DropForeignKey
ALTER TABLE "UserBookmarkItem" DROP CONSTRAINT "UserBookmarkItem_userMentionedId_fkey";

-- DropForeignKey
ALTER TABLE "UserBookmarkItem" DROP CONSTRAINT "UserBookmarkItem_userMentionsId_fkey";

-- DropForeignKey
ALTER TABLE "UserBookmarkItem" DROP CONSTRAINT "UserBookmarkItem_userOfferId_fkey";

-- DropForeignKey
ALTER TABLE "UserBookmarkItem" DROP CONSTRAINT "UserBookmarkItem_userSaleId_fkey";

-- DropForeignKey
ALTER TABLE "UserBookmarkItem" DROP CONSTRAINT "UserBookmarkItem_userThreadId_fkey";

-- DropForeignKey
ALTER TABLE "UserPayementMethod" DROP CONSTRAINT "UserPayementMethod_userProfileId_fkey";

-- DropForeignKey
ALTER TABLE "UserProfile" DROP CONSTRAINT "UserProfile_userContactsId_fkey";

-- DropIndex
DROP INDEX "UserSquare_userProfileId_key";

-- AlterTable
ALTER TABLE "AcceptedOffer" DROP COLUMN "AcepteeId",
DROP COLUMN "acepteeData",
DROP COLUMN "offerData",
ADD COLUMN     "AccepteeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "tier" SET DEFAULT 'ADMIN';

-- AlterTable
ALTER TABLE "CounterOffer" DROP COLUMN "gameData",
DROP COLUMN "offerData",
DROP COLUMN "profileData";

-- AlterTable
ALTER TABLE "GameBuyer" DROP COLUMN "profileData";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "contactData",
DROP COLUMN "profileData",
DROP COLUMN "userGroupsId",
ALTER COLUMN "role" SET DEFAULT 'CUSTOMER';

-- AlterTable
ALTER TABLE "UserChat" DROP COLUMN "chatData";

-- AlterTable
ALTER TABLE "UserComment" DROP COLUMN "threadData";

-- AlterTable
ALTER TABLE "UserContacts" ADD COLUMN     "userProfileId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserFollower" DROP COLUMN "profileData";

-- AlterTable
ALTER TABLE "UserGame" DROP COLUMN "consoleData",
DROP COLUMN "genreData";

-- AlterTable
ALTER TABLE "UserGameOffer" ADD COLUMN     "acceptedOfferId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserGameSwap" DROP COLUMN "offerData",
DROP COLUMN "profileData",
DROP COLUMN "threadData";

-- AlterTable
ALTER TABLE "UserMention" DROP COLUMN "profileData";

-- AlterTable
ALTER TABLE "UserMentioned" DROP COLUMN "profileData";

-- AlterTable
ALTER TABLE "UserNotification" DROP COLUMN "profileData";

-- AlterTable
ALTER TABLE "UserOfferQrCode" DROP COLUMN "offerData";

-- AlterTable
ALTER TABLE "UserPermissions" DROP COLUMN "AddUser",
DROP COLUMN "DeleteUser",
DROP COLUMN "RecieveMessage",
ADD COLUMN     "Currency" "PermissionState"[],
ADD COLUMN     "Pickup" "PermissionState"[],
ADD COLUMN     "ReceiveMessage" "PermissionState"[],
ALTER COLUMN "role" SET DEFAULT 'CUSTOMER';

-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "UsersquareModId" TEXT;

-- AlterTable
ALTER TABLE "UserReply" DROP COLUMN "messageData";

-- AlterTable
ALTER TABLE "UserSale" DROP COLUMN "GameData",
DROP COLUMN "SalesChargeData",
DROP COLUMN "profileData";

-- AlterTable
ALTER TABLE "UserSaleQrCode" DROP COLUMN "profileData";

-- AlterTable
ALTER TABLE "UserSquare" DROP COLUMN "threadData",
DROP COLUMN "userProfileId",
ADD COLUMN     "UsersquareModId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserWallet" DROP COLUMN "currency",
DROP COLUMN "profileData",
ADD COLUMN     "currencyId" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserBookmarkItem";

-- DropTable
DROP TABLE "UserPayementMethod";

-- DropEnum
DROP TYPE "Currency";

-- CreateTable
CREATE TABLE "UserSquareMod" (
    "id" TEXT NOT NULL,

    CONSTRAINT "UserSquareMod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookmarkable" (
    "id" TEXT NOT NULL,
    "userBookmarkId" TEXT NOT NULL,
    "userSaleId" TEXT,
    "userOfferId" TEXT,
    "userCommentId" TEXT,
    "userMentionsId" TEXT,
    "userThreadId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userMentionedId" TEXT,

    CONSTRAINT "Bookmarkable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Currency" (
    "id" TEXT NOT NULL,
    "Currencycode" TEXT NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPaymentMethod" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,
    "details" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPaymentMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boardman" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "location" JSONB NOT NULL DEFAULT '{}',
    "orderQueueId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Boardman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderTo" (
    "id" TEXT NOT NULL,
    "boardmanId" TEXT NOT NULL,

    CONSTRAINT "OrderTo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderFrom" (
    "id" TEXT NOT NULL,
    "boardmanId" TEXT NOT NULL,

    CONSTRAINT "OrderFrom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Referral" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderQueue" (
    "id" TEXT NOT NULL,

    CONSTRAINT "OrderQueue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pickup" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pickup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "orderToId" TEXT NOT NULL,
    "orderFromId" TEXT NOT NULL,
    "userGameSwapId" TEXT NOT NULL,
    "pickupId" TEXT,
    "userSaleId" TEXT NOT NULL,
    "orderQueueId" TEXT,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoardmanNotification" (
    "id" TEXT NOT NULL,
    "message" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "boardmanId" TEXT,

    CONSTRAINT "BoardmanNotification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoardmanLoginLog" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "boardmanId" TEXT,

    CONSTRAINT "BoardmanLoginLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Developer" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Developer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "developerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Request" (
    "id" TEXT NOT NULL,
    "applicationId" TEXT,
    "endpoint" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Key" (
    "id" TEXT NOT NULL,
    "developerId" TEXT NOT NULL,
    "keyPermissionsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Key_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KeyPermissions" (
    "id" TEXT NOT NULL,
    "Swap" "PermissionState"[],
    "Dispute" "PermissionState"[],
    "Game" "PermissionState"[],
    "Message" "PermissionState"[],
    "Reply" "PermissionState"[],
    "Comment" "PermissionState"[],
    "Inventory" "PermissionState"[],
    "Offer" "PermissionState"[],
    "CounterOffer" "PermissionState"[],
    "AcceptOffer" "PermissionState"[],
    "Square" "PermissionState"[],
    "SellGame" "PermissionState"[],
    "Wallet" "PermissionState"[],
    "Currency" "PermissionState"[],
    "Bookmark" "PermissionState"[],
    "BookmarkItem" "PermissionState"[],
    "BuyGame" "PermissionState"[],
    "Contacts" "PermissionState"[],
    "ReceiveMessage" "PermissionState"[],
    "Chat" "PermissionState"[],
    "Notification" "PermissionState"[],
    "Thread" "PermissionState"[],
    "Genre" "PermissionState"[],
    "Console" "PermissionState"[],
    "Mention" "PermissionState"[],
    "QrSale" "PermissionState"[],
    "QrOffer" "PermissionState"[],
    "ContactItem" "PermissionState"[],
    "SwapThread" "PermissionState"[],
    "Follower" "PermissionState"[],
    "EditPermissions" "PermissionState"[],
    "Pickup" "PermissionState"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KeyPermissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Boardman_email_key" ON "Boardman"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Boardman_orderQueueId_key" ON "Boardman"("orderQueueId");

-- CreateIndex
CREATE UNIQUE INDEX "UserContacts_userProfileId_key" ON "UserContacts"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "UserGameOffer_acceptedOfferId_key" ON "UserGameOffer"("acceptedOfferId");

-- CreateIndex
CREATE UNIQUE INDEX "UserHandle_handle_key" ON "UserHandle"("handle");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_UsersquareModId_fkey" FOREIGN KEY ("UsersquareModId") REFERENCES "UserSquareMod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSquare" ADD CONSTRAINT "UserSquare_UsersquareModId_fkey" FOREIGN KEY ("UsersquareModId") REFERENCES "UserSquareMod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserContacts" ADD CONSTRAINT "UserContacts_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGameOffer" ADD CONSTRAINT "UserGameOffer_acceptedOfferId_fkey" FOREIGN KEY ("acceptedOfferId") REFERENCES "AcceptedOffer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarkable" ADD CONSTRAINT "Bookmarkable_userBookmarkId_fkey" FOREIGN KEY ("userBookmarkId") REFERENCES "UserBookmark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarkable" ADD CONSTRAINT "Bookmarkable_userSaleId_fkey" FOREIGN KEY ("userSaleId") REFERENCES "UserSale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarkable" ADD CONSTRAINT "Bookmarkable_userOfferId_fkey" FOREIGN KEY ("userOfferId") REFERENCES "UserGameOffer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarkable" ADD CONSTRAINT "Bookmarkable_userCommentId_fkey" FOREIGN KEY ("userCommentId") REFERENCES "UserComment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarkable" ADD CONSTRAINT "Bookmarkable_userMentionsId_fkey" FOREIGN KEY ("userMentionsId") REFERENCES "UserMention"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarkable" ADD CONSTRAINT "Bookmarkable_userThreadId_fkey" FOREIGN KEY ("userThreadId") REFERENCES "GameSwapThread"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarkable" ADD CONSTRAINT "Bookmarkable_userMentionedId_fkey" FOREIGN KEY ("userMentionedId") REFERENCES "UserMentioned"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcceptedOffer" ADD CONSTRAINT "AcceptedOffer_OfferId_fkey" FOREIGN KEY ("OfferId") REFERENCES "CounterOffer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcceptedOffer" ADD CONSTRAINT "AcceptedOffer_AccepteeId_fkey" FOREIGN KEY ("AccepteeId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWallet" ADD CONSTRAINT "UserWallet_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPaymentMethod" ADD CONSTRAINT "UserPaymentMethod_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boardman" ADD CONSTRAINT "Boardman_orderQueueId_fkey" FOREIGN KEY ("orderQueueId") REFERENCES "OrderQueue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderTo" ADD CONSTRAINT "OrderTo_boardmanId_fkey" FOREIGN KEY ("boardmanId") REFERENCES "Boardman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderFrom" ADD CONSTRAINT "OrderFrom_boardmanId_fkey" FOREIGN KEY ("boardmanId") REFERENCES "Boardman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pickup" ADD CONSTRAINT "Pickup_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderToId_fkey" FOREIGN KEY ("orderToId") REFERENCES "OrderTo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderFromId_fkey" FOREIGN KEY ("orderFromId") REFERENCES "OrderFrom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userGameSwapId_fkey" FOREIGN KEY ("userGameSwapId") REFERENCES "UserGameSwap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_pickupId_fkey" FOREIGN KEY ("pickupId") REFERENCES "Pickup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userSaleId_fkey" FOREIGN KEY ("userSaleId") REFERENCES "UserSale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderQueueId_fkey" FOREIGN KEY ("orderQueueId") REFERENCES "OrderQueue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardmanNotification" ADD CONSTRAINT "BoardmanNotification_boardmanId_fkey" FOREIGN KEY ("boardmanId") REFERENCES "Boardman"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardmanLoginLog" ADD CONSTRAINT "BoardmanLoginLog_boardmanId_fkey" FOREIGN KEY ("boardmanId") REFERENCES "Boardman"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "Developer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Key" ADD CONSTRAINT "Key_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "Developer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Key" ADD CONSTRAINT "Key_keyPermissionsId_fkey" FOREIGN KEY ("keyPermissionsId") REFERENCES "KeyPermissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
