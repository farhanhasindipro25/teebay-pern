-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyProduct" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "rent" TEXT NOT NULL,
    "rent_timeline" TEXT NOT NULL,

    CONSTRAINT "MyProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToMyProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToMyProduct_AB_unique" ON "_CategoryToMyProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToMyProduct_B_index" ON "_CategoryToMyProduct"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToMyProduct" ADD CONSTRAINT "_CategoryToMyProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToMyProduct" ADD CONSTRAINT "_CategoryToMyProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "MyProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;
