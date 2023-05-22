/*
  Warnings:

  - The primary key for the `Admins` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Media` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Media_Cast` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WatchLists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Media" DROP CONSTRAINT "Media_watchListId_fkey";

-- DropForeignKey
ALTER TABLE "Media_Cast" DROP CONSTRAINT "Media_Cast_mediaId_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_mediaId_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_userId_fkey";

-- DropForeignKey
ALTER TABLE "WatchLists" DROP CONSTRAINT "WatchLists_userId_fkey";

-- AlterTable
ALTER TABLE "Admins" DROP CONSTRAINT "Admins_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "profilePicture" DROP NOT NULL,
ADD CONSTRAINT "Admins_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Admins_id_seq";

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Users_id_seq";

-- DropTable
DROP TABLE "Media";

-- DropTable
DROP TABLE "Media_Cast";

-- DropTable
DROP TABLE "Reviews";

-- DropTable
DROP TABLE "WatchLists";
