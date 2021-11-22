/* eslint-disable curly */
export function addComma(amount) {
  const numberlized = parseInt(amount, 10);
  if (isNaN(numberlized)) return amount;
  if (numberlized < 0) return amount;
  return numberlized.toLocaleString();
}
