import { PrismaClient } from "@prisma/client";
import fs from "fs";
const prisma = new PrismaClient();
const candidateRepository = {
  createCandidate: async (can) => {
    const createCandidate = await prisma.candidtes.create({
      data: { ...can, vote_counter: 0, image: null },
    });

    if (!createCandidate) {
      return {
        status: 500,
        message: "Failed to create Candidate",
      };
    }
    return {
      status: 200,
      message: "Candidate created successfully",
      data: createCandidate,
    };
  },
};
export default candidateRepository;
