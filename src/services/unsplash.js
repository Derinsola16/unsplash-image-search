import axios from "axios";

const accessKey = "10XSLacUUhGmdZUVOm2IrZUaK3jCrSvZzDvXE0tMXWw";

const apiEndpoint = "https://api.unsplash.com/";
const photoEndpoint = `${apiEndpoint}photos`;
const searchPhotoEndpoint = `${apiEndpoint}search/photos`;

export const getPhoto = async () => {
  try {
    const res = await axios.get(photoEndpoint, {
      params: {
        client_id: accessKey,
        per_page: 15,
        // ...param
      },
    });
    console.log("hi", res);

    if (res.status == 200) return res.data;
    else return null;
  } catch (exc) {
    console.error(exc);
    return null;
  }
};

export const getRandomPhoto = async (param) => {
  try {
    const res = await axios.get(searchPhotoEndpoint, {
      params: {
        client_id: accessKey,
        per_page: 15,
        ...param,
      },
    });
    console.log("hello", res);

    if (res.status == 200) return res.data;
    else return null;
  } catch (exc) {
    console.error(exc);
    return null;
  }
};
