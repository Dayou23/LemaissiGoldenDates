/*
  Warnings:

  - Made the column `descriptionArabic` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nameArabic` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "descriptionArabic" SET NOT NULL,
ALTER COLUMN "nameArabic" SET NOT NULL;
