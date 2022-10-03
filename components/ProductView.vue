<template>
  <div
    class="flex flex-col-reverse md:flex-row items-center justify-end md:justify-start fixed top-0 left-0 h-full w-full bg-gradient-to-r bg-white z-50 transform transition-all duration-300 overflow-y-auto pt-24 pb-4 md:p-0"
    :class="active === false ? '-translate-x-full' : 'translate-x-0'"
  >
    <button
      @click="closeSlot"
      class="w-10 h-16 md:w-20 md:h-40 bg-black absolute rounded-tl-full rounded-bl-full bottom-0 md:top-1/2 right-0 transform -translate-y-1/2"
    >
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 477.175 477.175"
        style="enable-background: new 0 0 477.175 477.175"
        xml:space="preserve"
        fill="#fff"
        class="h-6 md:h-10 ml-1 md:ml-4"
      >
        <g>
          <path
            d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
          />
        </g>
      </svg>
    </button>
    <div
      v-if="product"
      class="md:w-1/4 text-black md:ml-10 px-4 md:px-0 text-left w-full"
    >
      <h1 class="text-3xl font-bold">{{ product.name }}</h1>
      <p class="mb-2 relative -top-1">Sizes: {{ product.sizes }}</p>
      <p class="text-sm pr-8 md:pr-0">
        {{ product.description }}
      </p>
      <p class="text-xl font-bold mt-4 md:mt-8">Цена: {{ product.price }}лв.</p>
    </div>
    <div class="w-11/12 md:w-2/5 md:ml-14 my-6 md:my-0">
      <VueSlickCarousel v-if="productImages.length" v-bind="settings">
        <div
          v-for="image in productImages"
          :key="image.id"
          class="px-1 md:px-3"
        >
          <div class="rounded-2xl overflow-hidden">
            <img
              :src="`https://agi4ka.g-web.agency/storage/${image.image}`"
              alt=""
            />
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "ProductView",
  components: {
    VueSlickCarousel,
  },
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      settings: {
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1300,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplaySpeed: 2000,
            },
          },
        ],
      },
      active: false,
    };
  },
  watch: {
    async product(newProduct) {
      if (newProduct) {
        await this.$store.dispatch("getProductImages", newProduct.id);
        this.active = true;
      }
    },
  },
  computed: {
    productImages() {
      return this.$store.state.productImages;
    },
  },
  methods: {
    closeSlot() {
      this.$emit("clearSlot");
      this.active = false;
    },
  },
  beforeDestroy() {
    this.productImages = null;
  },
};
</script>
