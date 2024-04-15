-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "is_bought" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_rented" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "renting_from" TIMESTAMP(3),
ADD COLUMN     "renting_till" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
