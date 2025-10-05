import "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username?: string;
      email: string;
      name?: string;
      image?: string;
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username?: string;
  }
}