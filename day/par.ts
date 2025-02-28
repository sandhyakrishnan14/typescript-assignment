interface User {
    id: number;
    name: string;
    email: string;
  }
  
  function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
  }
  const user: User = { id: 1, name: "John Doe", email: "john@example.com" };
const updates: Partial<User> = { name: "Jane Doe" };

const updatedUser = updateUser(user, updates);
console.log(updatedUser); 