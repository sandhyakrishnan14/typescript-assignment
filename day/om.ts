interface User {
    id: number;
    name: string;
    email: string;
  }
  
  type UserWithoutEmail = Omit<User, "email">;
  const userWithoutEmail: UserWithoutEmail = { id: 1, name: "John Doe" };
  console.log(userWithoutEmail); 