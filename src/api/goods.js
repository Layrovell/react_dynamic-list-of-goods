// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = () => fetch(API_URL)
  .then(response => response.json())
  .then(goods => goods);

export const get5First = () => {};

export const getRedGoods = () => {};
