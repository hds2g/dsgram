export const isAuthentiated = request => {
  if (!request.user) {
    throw Error("You need to log in to perform this action");
  }
  return;
};
