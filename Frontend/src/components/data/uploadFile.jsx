import { getAuth } from "firebase/auth";

export const uploadFile = async (url, formData) => {
  const user = getAuth().currentUser;
  if (!user) {
    console.log("Error: trying to make an authed request while not signed in");
    return null;
  }

  const response = fetch(url, {
    method: "post",
    body: formData,
    headers: {
      AuthToken: await user.getIdToken(),
    },
  });

  return response;
};
