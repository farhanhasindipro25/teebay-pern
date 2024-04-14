-- CreateTable
CREATE TABLE "MyProduct" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "categories" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "rent" TEXT NOT NULL,
    "rent_timeline" TEXT NOT NULL,

    CONSTRAINT "MyProduct_pkey" PRIMARY KEY ("id")
);
