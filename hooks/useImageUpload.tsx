import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const useImageUpload = () => {
  const [imageUrl, setImageUrl] = useState<string>();
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/paymony/upload`;
    const formData = new FormData();
    const preset = `hspftiay`;
    formData.append('upload_preset', preset);
    formData.append('file', acceptedFiles[0]);
    const response = await fetch(cloudinaryUrl, {
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setImageUrl(data.url);
    // console.log(data.url);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg', '.webp'],
    },
  });

  return {
    getRootProps,
    getInputProps,
    onDrop,
    imageUrl,
  };
};

export default useImageUpload;
