-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('NGN', 'USD', 'GBP', 'XAR', 'GHS', 'KES');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SUPER_USER', 'AVERAGE_USER');

-- CreateEnum
CREATE TYPE "OfferStatus" AS ENUM ('Accepted', 'Rejected', 'Pending');

-- CreateEnum
CREATE TYPE "Manufacturer" AS ENUM ('SONY', 'MICROSOFT', 'NINTENDO', 'SEGA');

-- CreateEnum
CREATE TYPE "SwapStatus" AS ENUM ('SWAPPED', 'PENDING', 'DISPUTED');

-- CreateEnum
CREATE TYPE "DisputeReason" AS ENUM ('NO_SHOW', 'FAULTY_DISC');

-- CreateEnum
CREATE TYPE "PermissionState" AS ENUM ('CREATE', 'DELETE', 'MODIFY', 'VIEW');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userProfileId" TEXT,
    "profileData" JSONB NOT NULL DEFAULT '{}',
    "contactItemId" TEXT,
    "contactData" JSON NOT NULL DEFAULT '{}',
    "role" "UserRole" NOT NULL DEFAULT 'AVERAGE_USER',
    "location" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userGroupsId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL,
    "profilePhoto" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "userHandleId" TEXT NOT NULL,
    "userContactsId" TEXT,
    "userInventoryId" TEXT,
    "userInboxId" TEXT NOT NULL,
    "userFeedId" TEXT,
    "squareId" TEXT,
    "userBookmarkId" TEXT,
    "ReportCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userAboutId" TEXT NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSquare" (
    "id" TEXT NOT NULL,
    "photoPath" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "About" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,
    "gameSwapThreadId" TEXT NOT NULL,
    "threadData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSquare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGame" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "photoPath" TEXT NOT NULL,
    "consoleId" TEXT NOT NULL,
    "consoleData" JSONB NOT NULL,
    "genreId" TEXT NOT NULL,
    "genreData" JSONB NOT NULL,
    "userInventoryId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSale" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,
    "profileData" JSONB NOT NULL,
    "buyerId" TEXT NOT NULL,
    "buyerdata" JSONB NOT NULL,
    "userFeedId" TEXT,
    "GameId" TEXT NOT NULL,
    "GameData" JSONB NOT NULL,
    "salesChargeId" TEXT NOT NULL,
    "SalesChargeData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userCartId" TEXT,

    CONSTRAINT "UserSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameBuyer" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,
    "profileData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GameBuyer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserContacts" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserContacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactItem" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "photoPath" TEXT NOT NULL,
    "userContactsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGameOffer" (
    "id" TEXT NOT NULL,
    "Window" TIMESTAMP(3) NOT NULL,
    "Title" TEXT NOT NULL,
    "userFeedId" TEXT,
    "userProfileId" TEXT,
    "userGameId" TEXT NOT NULL,
    "userThreadId" TEXT,
    "Status" "OfferStatus" NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserGameOffer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOfferQrCode" (
    "id" TEXT NOT NULL,
    "userOfferId" TEXT NOT NULL,
    "offerData" JSONB NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserOfferQrCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSaleQrCode" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,
    "profileData" JSONB NOT NULL,
    "userSaleId" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSaleQrCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGameSwap" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT,
    "profileData" JSONB NOT NULL,
    "userOfferId" TEXT NOT NULL,
    "offerData" JSONB NOT NULL,
    "gameSwapThreadId" TEXT NOT NULL,
    "threadData" JSONB NOT NULL,
    "Location" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserGameSwap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMessage" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "userChatId" TEXT NOT NULL,
    "RecipientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageRecipient" (
    "id" TEXT NOT NULL,
    "userInboxId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MessageRecipient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserReply" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "messageData" JSONB NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInbox" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserInbox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFeed" (
    "id" TEXT NOT NULL,
    "userProfileId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserFeed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBookmark" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserBookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBookmarkItem" (
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

    CONSTRAINT "UserBookmarkItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserChat" (
    "id" TEXT NOT NULL,
    "chatData" JSONB NOT NULL,
    "userInboxId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMention" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,
    "profileData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userMentionedId" TEXT,

    CONSTRAINT "UserMention_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMentioned" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT,
    "profileData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserMentioned_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserNotification" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT,
    "profileData" JSONB NOT NULL,
    "message" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserNotification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesCharge" (
    "id" TEXT NOT NULL,
    "percentCharge" DOUBLE PRECISION NOT NULL,
    "fixedCharge" DOUBLE PRECISION NOT NULL,
    "TotalCharge" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalesCharge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserComment" (
    "id" TEXT NOT NULL,
    "ThreadId" TEXT NOT NULL,
    "threadData" JSONB NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameSwapThread" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GameSwapThread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFollower" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,
    "profileData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserFollower_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInventory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcceptedOffer" (
    "id" TEXT NOT NULL,
    "OfferId" TEXT NOT NULL,
    "offerData" JSONB NOT NULL,
    "AcepteeId" TEXT NOT NULL,
    "acepteeData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AcceptedOffer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CounterOffer" (
    "id" TEXT NOT NULL,
    "GameId" TEXT NOT NULL,
    "gameData" JSONB NOT NULL,
    "profileId" TEXT NOT NULL,
    "profileData" JSONB NOT NULL,
    "OfferId" TEXT NOT NULL,
    "offerData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CounterOffer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWallet" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,
    "profileData" JSONB NOT NULL,
    "currency" "Currency" NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserWallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Console" (
    "id" TEXT NOT NULL,
    "consoleName" TEXT NOT NULL,
    "maker" "Manufacturer" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" TEXT,

    CONSTRAINT "Console_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserVirtualCard" (
    "id" TEXT NOT NULL,
    "details" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userProfileId" TEXT NOT NULL,

    CONSTRAINT "UserVirtualCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPayementMethod" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,
    "details" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPayementMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCart" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserCart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" TEXT,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDispute" (
    "id" TEXT NOT NULL,
    "Reason" "DisputeReason" NOT NULL,
    "userGameSwapId" TEXT NOT NULL,
    "swapDetails" JSONB NOT NULL,
    "Details" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserDispute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPermissions" (
    "id" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'AVERAGE_USER',
    "userProfileId" TEXT NOT NULL,
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
    "Bookmark" "PermissionState"[],
    "BookmarkItem" "PermissionState"[],
    "BuyGame" "PermissionState"[],
    "Contacts" "PermissionState"[],
    "RecieveMessage" "PermissionState"[],
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
    "AddUser" "PermissionState"[],
    "DeleteUser" "PermissionState"[],

    CONSTRAINT "UserPermissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLoginLog" (
    "id" TEXT NOT NULL,
    "data" JSONB[] DEFAULT ARRAY['{}']::JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserLoginLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAbout" (
    "id" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAbout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tier" "UserRole" NOT NULL DEFAULT 'SUPER_USER',
    "location" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminNotification" (
    "id" TEXT NOT NULL,
    "message" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" TEXT NOT NULL,

    CONSTRAINT "AdminNotification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminLoginLog" (
    "id" TEXT NOT NULL,
    "userProfileId" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "data" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminLoginLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserHandle" (
    "id" TEXT NOT NULL,
    "handle" TEXT NOT NULL DEFAULT '@',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserHandle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_userProfileId_key" ON "User"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userContactsId_key" ON "UserProfile"("userContactsId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userInventoryId_key" ON "UserProfile"("userInventoryId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userInboxId_key" ON "UserProfile"("userInboxId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userFeedId_key" ON "UserProfile"("userFeedId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_squareId_key" ON "UserProfile"("squareId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userBookmarkId_key" ON "UserProfile"("userBookmarkId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSquare_userProfileId_key" ON "UserSquare"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSquare_gameSwapThreadId_key" ON "UserSquare"("gameSwapThreadId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSale_userProfileId_key" ON "UserSale"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSale_buyerId_key" ON "UserSale"("buyerId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSale_salesChargeId_key" ON "UserSale"("salesChargeId");

-- CreateIndex
CREATE UNIQUE INDEX "GameBuyer_userProfileId_key" ON "GameBuyer"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "UserGameOffer_userProfileId_key" ON "UserGameOffer"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "UserOfferQrCode_userOfferId_key" ON "UserOfferQrCode"("userOfferId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSaleQrCode_userSaleId_key" ON "UserSaleQrCode"("userSaleId");

-- CreateIndex
CREATE UNIQUE INDEX "UserMessage_senderId_key" ON "UserMessage"("senderId");

-- CreateIndex
CREATE UNIQUE INDEX "UserMessage_userChatId_key" ON "UserMessage"("userChatId");

-- CreateIndex
CREATE UNIQUE INDEX "UserMessage_RecipientId_key" ON "UserMessage"("RecipientId");

-- CreateIndex
CREATE UNIQUE INDEX "MessageRecipient_userInboxId_key" ON "MessageRecipient"("userInboxId");

-- CreateIndex
CREATE UNIQUE INDEX "UserInbox_userProfileId_key" ON "UserInbox"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "UserFeed_userProfileId_key" ON "UserFeed"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "UserChat_userInboxId_key" ON "UserChat"("userInboxId");

-- CreateIndex
CREATE UNIQUE INDEX "UserMention_userProfileId_key" ON "UserMention"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "UserFollower_userProfileId_key" ON "UserFollower"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "AcceptedOffer_OfferId_key" ON "AcceptedOffer"("OfferId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCart_userProfileId_key" ON "UserCart"("userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_contactItemId_fkey" FOREIGN KEY ("contactItemId") REFERENCES "ContactItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userHandleId_fkey" FOREIGN KEY ("userHandleId") REFERENCES "UserHandle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userAboutId_fkey" FOREIGN KEY ("userAboutId") REFERENCES "UserAbout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userInventoryId_fkey" FOREIGN KEY ("userInventoryId") REFERENCES "UserInventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userInboxId_fkey" FOREIGN KEY ("userInboxId") REFERENCES "UserInbox"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userFeedId_fkey" FOREIGN KEY ("userFeedId") REFERENCES "UserFeed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_squareId_fkey" FOREIGN KEY ("squareId") REFERENCES "UserSquare"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userBookmarkId_fkey" FOREIGN KEY ("userBookmarkId") REFERENCES "UserBookmark"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userContactsId_fkey" FOREIGN KEY ("userContactsId") REFERENCES "UserContacts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSquare" ADD CONSTRAINT "UserSquare_gameSwapThreadId_fkey" FOREIGN KEY ("gameSwapThreadId") REFERENCES "GameSwapThread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGame" ADD CONSTRAINT "UserGame_consoleId_fkey" FOREIGN KEY ("consoleId") REFERENCES "Console"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGame" ADD CONSTRAINT "UserGame_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGame" ADD CONSTRAINT "UserGame_userInventoryId_fkey" FOREIGN KEY ("userInventoryId") REFERENCES "UserInventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSale" ADD CONSTRAINT "UserSale_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSale" ADD CONSTRAINT "UserSale_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "GameBuyer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSale" ADD CONSTRAINT "UserSale_userFeedId_fkey" FOREIGN KEY ("userFeedId") REFERENCES "UserFeed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSale" ADD CONSTRAINT "UserSale_GameId_fkey" FOREIGN KEY ("GameId") REFERENCES "UserGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSale" ADD CONSTRAINT "UserSale_salesChargeId_fkey" FOREIGN KEY ("salesChargeId") REFERENCES "SalesCharge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSale" ADD CONSTRAINT "UserSale_userCartId_fkey" FOREIGN KEY ("userCartId") REFERENCES "UserCart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameBuyer" ADD CONSTRAINT "GameBuyer_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactItem" ADD CONSTRAINT "ContactItem_userContactsId_fkey" FOREIGN KEY ("userContactsId") REFERENCES "UserContacts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGameOffer" ADD CONSTRAINT "UserGameOffer_userFeedId_fkey" FOREIGN KEY ("userFeedId") REFERENCES "UserFeed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGameOffer" ADD CONSTRAINT "UserGameOffer_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGameOffer" ADD CONSTRAINT "UserGameOffer_userGameId_fkey" FOREIGN KEY ("userGameId") REFERENCES "UserGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGameOffer" ADD CONSTRAINT "UserGameOffer_userThreadId_fkey" FOREIGN KEY ("userThreadId") REFERENCES "GameSwapThread"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOfferQrCode" ADD CONSTRAINT "UserOfferQrCode_userOfferId_fkey" FOREIGN KEY ("userOfferId") REFERENCES "UserGameOffer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSaleQrCode" ADD CONSTRAINT "UserSaleQrCode_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSaleQrCode" ADD CONSTRAINT "UserSaleQrCode_userSaleId_fkey" FOREIGN KEY ("userSaleId") REFERENCES "UserSale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGameSwap" ADD CONSTRAINT "UserGameSwap_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGameSwap" ADD CONSTRAINT "UserGameSwap_userOfferId_fkey" FOREIGN KEY ("userOfferId") REFERENCES "UserGameOffer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGameSwap" ADD CONSTRAINT "UserGameSwap_gameSwapThreadId_fkey" FOREIGN KEY ("gameSwapThreadId") REFERENCES "GameSwapThread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMessage" ADD CONSTRAINT "UserMessage_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMessage" ADD CONSTRAINT "UserMessage_RecipientId_fkey" FOREIGN KEY ("RecipientId") REFERENCES "MessageRecipient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMessage" ADD CONSTRAINT "UserMessage_userChatId_fkey" FOREIGN KEY ("userChatId") REFERENCES "UserChat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageRecipient" ADD CONSTRAINT "MessageRecipient_userInboxId_fkey" FOREIGN KEY ("userInboxId") REFERENCES "UserInbox"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReply" ADD CONSTRAINT "UserReply_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "UserMessage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBookmarkItem" ADD CONSTRAINT "UserBookmarkItem_userBookmarkId_fkey" FOREIGN KEY ("userBookmarkId") REFERENCES "UserBookmark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBookmarkItem" ADD CONSTRAINT "UserBookmarkItem_userSaleId_fkey" FOREIGN KEY ("userSaleId") REFERENCES "UserSale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBookmarkItem" ADD CONSTRAINT "UserBookmarkItem_userOfferId_fkey" FOREIGN KEY ("userOfferId") REFERENCES "UserGameOffer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBookmarkItem" ADD CONSTRAINT "UserBookmarkItem_userCommentId_fkey" FOREIGN KEY ("userCommentId") REFERENCES "UserComment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBookmarkItem" ADD CONSTRAINT "UserBookmarkItem_userMentionsId_fkey" FOREIGN KEY ("userMentionsId") REFERENCES "UserMention"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBookmarkItem" ADD CONSTRAINT "UserBookmarkItem_userThreadId_fkey" FOREIGN KEY ("userThreadId") REFERENCES "GameSwapThread"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBookmarkItem" ADD CONSTRAINT "UserBookmarkItem_userMentionedId_fkey" FOREIGN KEY ("userMentionedId") REFERENCES "UserMentioned"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChat" ADD CONSTRAINT "UserChat_userInboxId_fkey" FOREIGN KEY ("userInboxId") REFERENCES "UserInbox"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMention" ADD CONSTRAINT "UserMention_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMention" ADD CONSTRAINT "UserMention_userMentionedId_fkey" FOREIGN KEY ("userMentionedId") REFERENCES "UserMentioned"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMentioned" ADD CONSTRAINT "UserMentioned_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNotification" ADD CONSTRAINT "UserNotification_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserComment" ADD CONSTRAINT "UserComment_ThreadId_fkey" FOREIGN KEY ("ThreadId") REFERENCES "GameSwapThread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFollower" ADD CONSTRAINT "UserFollower_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcceptedOffer" ADD CONSTRAINT "AcceptedOffer_OfferId_fkey" FOREIGN KEY ("OfferId") REFERENCES "UserGameOffer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcceptedOffer" ADD CONSTRAINT "AcceptedOffer_AcepteeId_fkey" FOREIGN KEY ("AcepteeId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CounterOffer" ADD CONSTRAINT "CounterOffer_GameId_fkey" FOREIGN KEY ("GameId") REFERENCES "UserGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CounterOffer" ADD CONSTRAINT "CounterOffer_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CounterOffer" ADD CONSTRAINT "CounterOffer_OfferId_fkey" FOREIGN KEY ("OfferId") REFERENCES "UserGameOffer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWallet" ADD CONSTRAINT "UserWallet_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Console" ADD CONSTRAINT "Console_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVirtualCard" ADD CONSTRAINT "UserVirtualCard_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPayementMethod" ADD CONSTRAINT "UserPayementMethod_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCart" ADD CONSTRAINT "UserCart_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Genre" ADD CONSTRAINT "Genre_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDispute" ADD CONSTRAINT "UserDispute_userGameSwapId_fkey" FOREIGN KEY ("userGameSwapId") REFERENCES "UserGameSwap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermissions" ADD CONSTRAINT "UserPermissions_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminNotification" ADD CONSTRAINT "AdminNotification_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminLoginLog" ADD CONSTRAINT "AdminLoginLog_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminLoginLog" ADD CONSTRAINT "AdminLoginLog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
