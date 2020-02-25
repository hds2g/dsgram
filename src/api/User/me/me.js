import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    me: async (_, __, { request, isAuthentiated }) => {
      isAuthentiated(request);
      const { user } = request;
      const userProfile = await prisma.user({ id: user.id });
      const posts = await prisma.user({ id: user.id }).posts();
      return {
        user: userProfile,
        posts
      };
      //return prisma.user({ id: user.id }).$fragment(USER_FRAGMENT);
    }
  }
};
