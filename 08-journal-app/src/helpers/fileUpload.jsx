import { db, collection, getDocs } from "../firebase/firebase.config"

export const fileUpload = async (file) => {
  const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/bmagario/upload';

  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudinaryUrl, {
      method: 'post',
      body: formData
    });
    if(resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    throw error;
  }
}