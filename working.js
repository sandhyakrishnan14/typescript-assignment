var roles = ["User", "Editor", "Admin", "Moderator"];
var hasAdmin = roles.indexOf("Admin") !== -1;
var hasSuper = roles.some(function (role) { return role.substring(0, 5) === "Super"; });
console.log("Contains Admin:", hasAdmin);
console.log("Has Super role:", hasSuper);
