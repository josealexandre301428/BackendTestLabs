export function filterByGreatPrice(products) {
  const sortedProducts = products.slice();
  return sortedProducts.sort((a, b) => b.price - a.price);
}

export function filterByMinorPrice(products) {
  const sortedProducts = products.slice();
  return sortedProducts.sort((a, b) => a.price - b.price);
}

export function filterByAlfabetic(products) {
  const sortedProducts = products.slice(); // Clona a lista de produtos
  return sortedProducts.sort((productX, productY) => {
    const nameX = productX.name.toLowerCase();
    const nameY = productY.name.toLowerCase();
    return nameX.localeCompare(nameY);
  });
}
