export const encryptPassword = (password: string) => {
  const simpleHash = password.split("").join("-");
  return simpleHash;
};
