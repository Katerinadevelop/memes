export const fetchData = async (url) => {
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log('error', error));
};
