export interface User {
  name: string;
  email: string;
  role: "Admin" | "ProjectManager" | "Developer";
}

export interface AuthStateTypes {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
