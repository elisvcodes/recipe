import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 5);
  return hashedPassword;
};

export const comparePasswords = async (
  providedPassword: string,
  storedPassword: string
) => {
  return await bcrypt.compare(providedPassword, storedPassword);
};
