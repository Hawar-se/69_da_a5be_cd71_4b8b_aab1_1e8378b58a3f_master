<template>
  <div class="layout-row wrap justify-content-center">
    <section v-for="(product, index) in products"
             :key="index"
             :data-testid="'product-item-' + index"
             class="w-30 product-item">
      <div class="card ma-16">
        <img :src="product.image" class="product-image" :alt="product.name"/>
        <div class="card-text pa-4">
          <h5 class="ma-0 text-center">{{ product.name }}</h5>
          <p class="ma-0 mt-8 text-center">${{ product.price }}</p>
        </div>
        <div class="card-actions justify-content-center pa-4">
          <button class="x-small outlined" data-testid="btn-item-add">
            Add To Cart
          </button>

        <button
            v-if="!product.addedToCart"
            class="x-small outlined"
            data-testid="btn-item-add"
            @click="addToCart(product)"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: "ProductList",
  props: {
    products: Array
  },
  methods: {
    addToCart(product) {
      product.addedToCart = true; // Set the addedToCart flag
      // You can perform any other actions like adding the item to the cart array
    },
    removeFromCart(product) {
      product.addedToCart = false; // Reset the addedToCart flag
      // You can perform any other actions like removing the item from the cart array
    }
  }
};
</script>

<template>
  <div>
    <product-list :products="products" />
  </div>
</template>

<script>



export default {
  components: {
    ProductList
  },
  data() {
    return {
      products: [
        { id: 1, name: "Item 1", price: 10, addedToCart: false },
        { id: 2, name: "Item 2", price: 20, addedToCart: false },
        // Add more products
      ]
    };
  }
};







</script>

<style scoped lang="scss">

.product-image {
  margin: 32px 30%;
  width: 40%;
  min-height: 90px;
}

</style>
