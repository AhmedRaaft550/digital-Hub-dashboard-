export const usersData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/data.json`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await res.json();
  return data.users;
};
