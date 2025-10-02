import axios from "axios";

const API = "http://localhost:3000";
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get("http://localhost:3000" +url);
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return error;
  }
};



export const postData = async (category) => {
  try {
    const res = await axios.post(`${API}/api/categories/create`, category);
    return res.data;
  
  } catch (err) {
    console.error(err);
  }
};



export const editData = async (url, updatedData) => {
  const { res } = await axios.put(`http://localhost:3000${url}`, updatedData)
  return res;
}

export const deleteData =  async (url) => {
  const { res } = await axios.delete(`http://localhost:3000${url}`)
  return res;
}

// ✅ POST Product
export const postProduct = async (product) => {
  try {
    const res = await axios.post(`${API}/api/products/create`, product);
    return res.data;
  } catch (err) {
    console.error("POST Product Error:", err.response?.data || err.message);
    return err.response?.data;
  }
};
