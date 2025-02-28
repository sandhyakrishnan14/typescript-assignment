interface UserProfile {
    id?: number;
    name?: string;
    age?: number;
  }
  
  type RequiredUserProfile = Required<UserProfile>;
  const userPro: RequiredUserProfile = { id: 1, name: "John Doe", age: 30 };
  console.log(userPro);