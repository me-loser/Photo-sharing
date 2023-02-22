const USER_ID_1 = "ry0Tt0yXCXXWMGR9WxMtLICadw03";
const USER_ID_2 = "jDHWTYP7uTOVBGHh5vTfbaNTUok1";
const USER_ID_3 = "CtwFDeR2W8Uh3a7coaIgZrWSVqd2";

module.exports.users = [
  {
    id: USER_ID_1,
    email: "brendabrown@gmail.com",
    fullName: "Brenda Brown",
  },
  {
    id: USER_ID_2,
    email: "jimsmith@gmail.com",
    fullName: "Jim Smith",
  },
  {
    id: USER_ID_3,
    email: "janejones@gmail.com",
    fullName: "Jane Jones",
  },
];

module.exports.photos = [
  {
    url: "/cat-photo.jpeg",
    title: "My Cat",
    ownerId: USER_ID_1,
    sharedWith: [USER_ID_2],
  },
  {
    url: "/car-photo.jpg",
    title: "My Car",
    ownerId: USER_ID_2,
    sharedWith: [USER_ID_1],
  },
];
