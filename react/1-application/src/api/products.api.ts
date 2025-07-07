//* GET ALL
export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Errore nel fetch dei prodotti:", error);
    throw error;
  }
};

//* GET by SEARCH
export const searchProductsByName = async (query: string) => {
  const response = await fetch(
    `http://localhost:3000/products?name_like=${query}`
  );
  if (!response.ok) throw new Error("Errore caricamento prodotti");
  return response.json();
};

//* GET IF STOCK IS TRUE
