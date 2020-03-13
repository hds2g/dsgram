import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { email, firstName = "", lastName = "", bio = "" } = args;
      const exists = await prisma.$exists.user({ email });
      if (exists) {
        throw Error("this email is already");
        return;
      }
      try {
        const user = await prisma.createUser({
          email,
          firstName,
          lastName,
          bio
        });
        console.log(user);
        return true;
      } catch {
        return false;
      }
    }
  }
};
