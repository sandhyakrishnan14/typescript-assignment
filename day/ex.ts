interface User1{
    name : string;
    age : number;
    email : string;
   
  }
  interface User2{
    name?: string;
    email ?: string;
   
  }
  interface User3{
    name : string;
  age: number;
  }
  type marksRecord = Record<string,number>;
  interface User4{
    name : string,
    age : number,
    email : string,
    address : string,
   
  }
  const marks: marksRecord = {
    "Maths": 90,  
    "English": 80,
    "Science": 85,
  };
   
  const partialUser1:Partial<User1>= {
    name : "Swami Narayan",
    age : 30
  };
  const requiredUser2:Required<User2>= {
    name : "Swami Narayan",
    email : "sw@gmail.com"
  };
  const readOnlyUser3:Readonly<User3>= {
    name : "Swami Narayan",
  age : 30,};
   
  const userInfo:Pick<User4,"name"|"age"> = {
    name : "Ghanashyam",
    age : 35,
  }
  const userWithoutAddress: Omit<User4,"address"> = {
    name : "Ghanashyam",
    age : 35,
    email : "gh@gmail.com"
  }
   
  console.log("Partial User1",partialUser1);
  console.log("Required User2",requiredUser2);
  console.log("Readonly User3",readOnlyUser3);
  console.log("Marks Record",marks);
  console.log("Picked information of User",userInfo);
  console.log("User without Address",userWithoutAddress);
   