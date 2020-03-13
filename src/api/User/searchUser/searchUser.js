import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchUser: async (_, args) =>
      prisma.users({
        where: {
          OR: [
            { firstName_contains: args.term },
            { lastName_contains: args.term }
          ]
        }
      })
  }
};
