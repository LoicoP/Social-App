export async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  const preset = import.meta.env.VITE_CLOUDINARY_PRESET;
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  formData.append("upload_preset", preset);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();
  return data.secure_url;
}
