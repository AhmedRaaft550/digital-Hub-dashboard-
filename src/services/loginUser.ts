import { mockUsers } from "@/lib/mockUsers";

export const loginUser = async (email: string, password: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = mockUsers.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) throw new Error("Invalid email or password");

  return {
    user: { name: user.name, email: user.email, role: user.role },
    token: user.token,
  };
};
