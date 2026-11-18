
import { prisma } from "./database.js";

async function testConnection() {
  try {
    const result = await prisma.$queryRaw<Array<{ result: number }>>`
      SELECT 1 AS result
    `;

    console.log("Ambag database client is working!");
    console.log(result);
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
