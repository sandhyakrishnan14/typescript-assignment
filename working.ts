let roles: string[] = ["User", "Editor", "Admin", "Moderator"];
const hasAdmin = roles.indexOf("Admin") !== -1;
const hasSuper = roles.some(role => role.substring(0, 5) === "Super");
console.log("Contains Admin:", hasAdmin);  
console.log("Has Super role:", hasSuper);  