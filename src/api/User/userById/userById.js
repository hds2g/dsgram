import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    userById: (_, args) => {
      const { id } = args;
      console.log(args);
      console.log(id);
      return prisma.user({ id });
    }
  }
};
