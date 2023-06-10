import Cookies from 'js-cookie';

export default function useCookies() {
  const setCookies = (key, value) => Cookies.set(key, value);

  const deleteCookies = (key) => Cookies.remove(key);

  const getCookies = (key) => Cookies.get(key);

  return {
    setCookies,
    deleteCookies,
    getCookies,
  };
}
