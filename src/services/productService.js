// productService.js
export const getAllProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    // We return the parsed JSON directly
    return await response.json(); 
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};