import axios from "axios";

export const getAllPosts = async () => {
  try {
    const response = await axios.get("/api/posts");
    if (response.status === 200 || response.status === 201) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get("/api/users");
    if (response.status === 200 || response.status === 201) {
      console.log(response.data.users);
    }
  } catch (error) {
    console.error(error);
  }
};
