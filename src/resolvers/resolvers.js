const axios = require("axios");

const resolvers = {
  Query: {
    getAllProducts: async () => {
      try {
        const response = await axios.get(
          "https://api-rest-julieth-donovan.onrender.com/products"
        );
        const data = response.data.data;
        return data.map((product) => ({
          id: product._id,
          name: product.name,
          description: product.description,
          price: product.price,
          stock: product.stock,
          category: product.category
            ? {
                id: product.category._id,
                name: product.category.name,
                description: product.category.description,
              }
            : null,
        }));
      } catch (error) {
        throw new Error("No se pudieron obtener los productos.");
      }
    },
    getProductById: async (_, { id }) => {
      try {
        const response = await axios.get(
          `https://api-rest-julieth-donovan.onrender.com/products/${id}`
        );
        const product = response.data.data;
        product.id = product._id;
        return product;
      } catch (error) {
        throw new Error("Error al obtener el producto por ID");
      }
    },
  },
  Mutation: {
    addProduct: async (_, { input }) => {
      try {
        const response = await axios.post(
          "https://api-rest-julieth-donovan.onrender.com/products",
          input
        );
        return response.data.data; // Suponiendo que la respuesta tiene un campo 'data' que contiene el producto guardado
      } catch (error) {
        throw new Error("Error al agregar el producto");
      }
    },
    updateProduct: async (_, { id, input }) => {
      try {
        const response = await axios.put(
          `https://api-rest-julieth-donovan.onrender.com/products/${id}`,
          input
        );
        return response.data.data; // Suponiendo que la respuesta tiene un campo 'data' que contiene el producto actualizado
      } catch (error) {
        throw new Error("Error al actualizar el producto");
      }
    },
    deleteProduct: async (_, { id }) => {
      try {
        await axios.delete(
          `https://api-rest-julieth-donovan.onrender.com/products/${id}`
        );
        return true;
      } catch (error) {
        throw new Error("Error al eliminar el producto");
      }
    },
  },
};

module.exports = resolvers;
