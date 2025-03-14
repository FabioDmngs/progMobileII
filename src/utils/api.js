export const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      return data.products; // Retorna os produtos
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
      return [];
    }
  };
  
  