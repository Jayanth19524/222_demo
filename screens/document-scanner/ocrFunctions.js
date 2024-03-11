// ocrFunctions.js
import axios from 'axios';

const ocrSpaceApiKey = 'K85640561088957';

const performOCR = async imageUri => {
  try {
    const formData = new FormData();
    formData.append('apikey', ocrSpaceApiKey);
    formData.append('language', 'eng'); // Set the language code (e.g., 'eng' for English)
    formData.append('isOverlayRequired', 'false');
    formData.append('base64Image', imageUri);

    const response = await axios.post(
      'https://api.ocr.space/parse/image',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    if (response.data.ParsedResults && response.data.ParsedResults.length > 0) {
      const recognizedText = response.data.ParsedResults[0].ParsedText;
      return recognizedText;
    } else {
      console.error('OCR Error:', response.data.ErrorMessage);
      return null;
    }
  } catch (error) {
    console.error('OCR Error:', error);
    return null;
  }
};

export {performOCR};
