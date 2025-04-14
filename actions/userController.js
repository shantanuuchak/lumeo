"use server";

export const register = async function (prevState, formData) {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  // Step 1: Validate the incoming data
  console.log(data);

  // Step 2: Saving the user in our database

  // Step 3: Sending back a cookie

  return {
    success: true,
  };
};
