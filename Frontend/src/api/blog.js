import axios from "axios";

const API_URL = "https://localhost:7299/api/blogs";

export const getBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addBlog = async (blog) => {
  const response = await axios.post(API_URL, blog);
  return response.data;
};