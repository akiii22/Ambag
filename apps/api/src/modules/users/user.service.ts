
import { prisma } from "../../config/database.js";

type SyncUserInput = {
  id: string;
  email?: string;
  displayName?: string;
};

export async function syncUserProfile(input: SyncUserInput) {
  const displayName = input.displayName?.trim();

  return prisma.user.upsert({
    where: {
      id: input.id,
    },
    create: {
      id: input.id,
      displayName: displayName || null,
    },
    update: {
      ...(displayName ? { displayName } : {}),
    },
  });
}
