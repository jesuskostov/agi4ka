export const state = () => ({
  products: [],
  productImages: [],
});

export const mutations = {
  addProduct(state, products) {
    state.products = products;
  },
  addProductImages(state, productImages) {
    state.productImages = productImages;
  },
};

export const actions = {
  // Make axios post request to add product to database
  async addProduct({ commit }, product) {
    try {
      await this.$axios.post("/api/products", product);
      const { data } = await this.$axios.get("/api/products");
      commit("addProduct", data);
    } catch (error) {
      console.log(error);
    }
  },
  // Make axios get request to get all products from database
  async getProducts({ commit }) {
    try {
      const { data } = await this.$axios.get("/api/products");
      commit("addProduct", data);
    } catch (error) {
      console.log(error);
    }
  },
  // Make axios delete request to delete product from database
  async deleteProduct({ commit }, id) {
    try {
      await this.$axios.delete(`/api/products/${id}`);
      const { data } = await this.$axios.get("/api/products");
      commit("addProduct", data);
    } catch (error) {
      console.log(error);
    }
  },
  // Make axios put request to update product in database
  async updateProduct({ commit }, product) {
    try {
      await this.$axios.put(`/api/products/${product.id}`, product);
      const { data } = await this.$axios.get("/api/products");
      commit("addProduct", data);
    } catch (error) {
      console.log(error);
    }
  },
  async getProductImages({ commit }, id) {
    try {
      const { data } = await this.$axios.get(`/api/product_images/${id}`);
      console.log(data);
      commit("addProductImages", data);
    } catch (error) {
      console.log(error);
    }
  },
};
