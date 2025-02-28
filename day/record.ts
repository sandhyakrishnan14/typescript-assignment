interface User {
    id: number;
    name: string;
    email: string;
  }
  
  type UserRoles = Record<string, string>;

const userRoles: UserRoles = {
  "1": "admin",
  "2": "editor",
  "3": "viewer"
};

console.log(userRoles["1"]);