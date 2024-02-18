-- CreateTable
CREATE TABLE "pokemon" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "metadata" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_url_key" ON "pokemon"("url");
