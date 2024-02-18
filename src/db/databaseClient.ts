import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchPokemonData(url: string) {
  try {
    const offlinePokemonData = await prisma.pokemon.findUnique({
      where: {
        url: url,
      },
    });
    await discardConnection();
    return offlinePokemonData?.metadata != null
      ? JSON.parse(offlinePokemonData?.metadata)
      : undefined;
  } catch (error) {
    await discardConnection();
    throw new Error(`Error fetching Pokemon data by URL: ${error}`);
  }
}

export async function updateOfflinePokemonData(name, url, metadata) {
  try {
    await prisma.pokemon.upsert({
      where: { url: url },
      update: { metadata: JSON.stringify(metadata) },
      create: { name: name, url: url, metadata: JSON.stringify(metadata) },
    });
    await discardConnection();
  } catch (error) {
    await discardConnection();
    throw new Error(`Error upserting Pokemon data by URL: ${error}`);
  }
}

async function discardConnection() {
  await prisma.$disconnect();
}
