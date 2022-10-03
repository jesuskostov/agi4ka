<template>
  <div>
    <div class="container flex flex-col mx-auto">
      <div class="w-full">
        <img
          class="mt-2 w-1/2 md:w-1/5 mx-auto logo"
          src="../static/logo.png"
          alt="logo"
        />
      </div>
      <div v-if="products.length > index">
        <div>
          <div class="fixed fixed--center" style="z-index: 3">
            <Vue2InteractDraggable
              v-if="isVisible && current"
              :interact-out-of-sight-x-coordinate="500"
              :interact-max-rotation="15"
              :interact-x-threshold="50"
              @draggedRight="right"
              @draggedLeft="left"
              class="relative rounded-borders card card--one overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end items-start p-4"
              >
                <span
                  v-if="current.discount"
                  class="absolute top-0 right-0 rounded-bl-full w-16 h-14 bg-red-500 text-white text-center text-sm animate-ping"
                ></span>
                <div
                  v-if="current.discount"
                  class="absolute top-0 right-0 rounded-bl-full w-16 h-14 bg-red-500 text-white text-center text-sm"
                >
                  <span class="relative top-3 -right-2"
                    >-{{ current.discount }}%</span
                  >
                </div>
                <h2 class="text-lg mb-0">{{ current.name }}</h2>
                <small class="relative -top-2"
                  >Sizes: {{ current.sizes }}</small
                >
                <div class="flex items-end justify-between w-full">
                  <small>{{ current.description }}</small>
                  <span class="bg-white rounded-full px-2 text-black h-6"
                    >{{ current.price }}лв</span
                  >
                </div>
              </div>
              <img
                class="w-full h-full object-cover"
                :src="`https://agi4ka.g-web.agency/storage/${current.image}`"
                alt=""
              />
            </Vue2InteractDraggable>
          </div>
          <div
            v-if="next"
            class="relative rounded-borders card card--two fixed fixed--center overflow-hidden"
            style="z-index: 2"
          >
            <div
              class="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end items-start p-4"
            >
              <span
                v-if="next.discount"
                class="absolute top-0 right-0 rounded-bl-full w-16 h-14 bg-red-500 text-white text-center text-sm animate-ping"
              ></span>
              <div
                v-if="next.discount"
                class="absolute top-0 right-0 rounded-bl-full w-16 h-14 bg-red-500 text-white text-center text-sm"
              >
                <span class="relative top-3 -right-2"
                  >-{{ next.discount }}%</span
                >
              </div>
              <h2 class="text-lg mb-0">{{ next.name }}</h2>
              <small class="relative -top-2">Sizes: {{ next.sizes }}</small>
              <div class="flex items-end justify-between w-full">
                <small>{{ next.description }}</small>
                <span class="bg-white rounded-full px-2 text-black h-4"
                  >{{ next.price }}лв</span
                >
              </div>
            </div>
            <img
              class="w-full h-full object-cover"
              :src="`https://agi4ka.g-web.agency/storage/${next.image}`"
              alt=""
            />
          </div>
          <div
            v-if="index + 2 < products.length"
            class="rounded-borders card card--three fixed fixed--center overflow-hidden"
            style="z-index: 1"
          >
            <img
              class="w-full h-full object-cover"
              :src="`https://agi4ka.g-web.agency/storage/${
                products.slice(-1).pop().image
              }`"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        v-else
        class="relative z-10 container flex flex-col items-center justify-center"
      >
        <img
          class="relative -mt-5 md:mt-0 w-1/2 md:w-1/4"
          src="../static/no-shoes.png"
          alt=""
        />
        <p class="text-sm font-bold relative -top-3">No more shoes...</p>
        <button
          @click="index = 0"
          class="bg-green-400 px-8 py-2 text-white rounded-full mt-4"
        >
          Browse again
        </button>
      </div>
      <div
        class="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex gap-x-6 z-10"
      >
        <a href="https://www.facebook.com/Agi4ka.Shop" target="_blank">
          <svg
            class="w-12 h-12 text-blue-600 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            />
          </svg>
        </a>
        <button
          class="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center relative -top-2"
        >
          <svg
            class="w-8 h-8"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <path
              d="M391,480c-19.52,0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91,298.77,93.61,267.79,61,208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82,73.38,58.16,62.65,74.11,52A176.3,176.3,0,0,1,102.75,36.8c1-.43,1.93-.84,2.76-1.21,4.95-2.23,12.45-5.6,21.95-2,6.34,2.38,12,7.25,20.86,16,18.17,17.92,43,57.83,52.16,77.43,6.15,13.21,10.22,21.93,10.23,31.71,0,11.45-5.76,20.28-12.75,29.81-1.31,1.79-2.61,3.5-3.87,5.16-7.61,10-9.28,12.89-8.18,18.05,2.23,10.37,18.86,41.24,46.19,68.51s57.31,42.85,67.72,45.07c5.38,1.15,8.33-.59,18.65-8.47,1.48-1.13,3-2.3,4.59-3.47,10.66-7.93,19.08-13.54,30.26-13.54h.06c9.73,0,18.06,4.22,31.86,11.18,18,9.08,59.11,33.59,77.14,51.78,8.77,8.84,13.66,14.48,16.05,20.81,3.6,9.53.21,17-2,22-.37.83-.78,1.74-1.21,2.75a176.49,176.49,0,0,1-15.29,28.58c-10.63,15.9-21.4,28.21-39.38,36.58A67.42,67.42,0,0,1,391,480Z"
            />
          </svg>
        </button>
        <a href="https://www.instagram.com/agi4kakicks/?hl=bg" target="_blank">
          <svg
            class="w-12 h-12"
            enable-background="new 0 0 128 128"
            height="128px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 128 128"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <linearGradient
                gradientTransform="matrix(1 0 0 -1 594 633)"
                gradientUnits="userSpaceOnUse"
                id="SVGID_1_"
                x1="-566.7114"
                x2="-493.2875"
                y1="516.5693"
                y2="621.4296"
              >
                <stop offset="0" style="stop-color: #ffb900" />
                <stop offset="1" style="stop-color: #9100eb" />
              </linearGradient>
              <circle cx="64" cy="64" fill="url(#SVGID_1_)" r="64" />
            </g>
            <g>
              <g>
                <path
                  d="M82.333,104H45.667C33.72,104,24,94.281,24,82.333V45.667C24,33.719,33.72,24,45.667,24h36.666    C94.281,24,104,33.719,104,45.667v36.667C104,94.281,94.281,104,82.333,104z M45.667,30.667c-8.271,0-15,6.729-15,15v36.667    c0,8.271,6.729,15,15,15h36.666c8.271,0,15-6.729,15-15V45.667c0-8.271-6.729-15-15-15H45.667z"
                  fill="#FFFFFF"
                />
              </g>
              <g>
                <path
                  d="M64,84c-11.028,0-20-8.973-20-20c0-11.029,8.972-20,20-20s20,8.971,20,20C84,75.027,75.028,84,64,84z     M64,50.667c-7.352,0-13.333,5.981-13.333,13.333c0,7.353,5.981,13.333,13.333,13.333S77.333,71.353,77.333,64    C77.333,56.648,71.353,50.667,64,50.667z"
                  fill="#FFFFFF"
                />
              </g>
              <g><circle cx="85.25" cy="42.75" fill="#FFFFFF" r="4.583" /></g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <ProductView :product="currentProduct" @clearSlot="currentProduct = null" />
  </div>
</template>
<script>
import { Vue2InteractDraggable } from "vue2-interact";
import ProductView from "../components/ProductView.vue";

export default {
  name: "SwipeableCards",
  components: {
    Vue2InteractDraggable,
    ProductView,
  },
  data() {
    return {
      isVisible: true,
      index: 0,
      currentProduct: null,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    current() {
      return this.products[this.index];
    },
    next() {
      return this.products[this.index + 1];
    },
  },
  methods: {
    right() {
      this.currentProduct = this.products[this.index];
      setTimeout(() => (this.isVisible = false), 200);
      setTimeout(() => {
        this.index++;
        this.isVisible = true;
      }, 300);
    },
    left() {
      setTimeout(() => (this.isVisible = false), 200);
      setTimeout(() => {
        this.index++;
        this.isVisible = true;
      }, 300);
    },
  },
  beforeCreate() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
body,
html {
  background: #eceff1;
}
body::after {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../static/bg-shoes.jpg");
  background-size: 25%;
  background-position: center;
  background-repeat: repeat;
  opacity: 0.16;
  z-index: 1;
  pointer-events: none;
}
.logo {
  position: relative;
  z-index: 999;
}
.container {
  width: 100%;
  height: 100vh;
  touch-action: none;
}
.flex {
  display: flex;
}
.flex--center {
  align-items: center;
  justify-items: center;
  justify-content: center;
}
.fixed {
  position: fixed;
}
.fixed--center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.rounded-borders {
  border-radius: 12px;
}
.card {
  width: 300px;
  height: 400px;
  color: white;
}
.card--one {
  background-color: pink;
}
.card--two {
  background-color: red;
  width: 280px;
  top: 51%;
}
.card--three {
  background-color: orange;
  width: 260px;
  top: 51.8%;
}
</style>
