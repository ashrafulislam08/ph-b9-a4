function password(obj) {
  if (
    obj.username === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined ||
    obj.birthYear.toString().length !== 4
  ) {
    return "Invalid";
  }

  let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  let passwordString =
    capitalSiteName + "#" + obj.username + "@" + obj.birthYear;
  return passwordString;
}

const person = {
  username: "ashraful",
  birthYear: 19,
  siteName: "facebook",
};

console.log(password(person));

console.log(
  password({ username: "toky", birthYear: 2002, siteName: "google" })
);

console.log(password("password"));
console.log(password(1923));
console.log(password([21]));
