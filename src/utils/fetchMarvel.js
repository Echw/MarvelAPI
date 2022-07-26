import MD5 from 'crypto-js/md5';

const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString();
};

let API_URL = 'https://gateway.marvel.com';

export const fetchHeros = async (name) => {
  let heroUrl = `${API_URL}/v1/public/characters`;

  let ts = Date.now().toString();
  let apiKey = process.env.REACT_APP_API_KEY;
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

export const fetchHero = async (id) => {
  let heroUrl = `${API_URL}/v1/public/characters/${id}`;

  let ts = Date.now().toString();
  let apiKey = process.env.REACT_APP_API_KEY;
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

export const fetchHeroComics = async (id) => {
  let comicUrl = `${API_URL}/v1/public/characters/${id}/comics`;
  let ts = Date.now().toString();
  let apiKey = process.env.REACT_APP_API_KEY;
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  let url = `${comicUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=12`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};
