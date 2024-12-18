<template>
  <div class="slider-container">
    <!-- Кастомные кнопки навигации -->
    <div class="navigation-buttons" v-if="showNavigation">
      <button class="swiper-button-prev custom-button">
        <i class="fa-solid fa-circle-chevron-left"></i>
      </button>
      <button class="swiper-button-next custom-button">
        <i class="fa-solid fa-circle-chevron-right"></i>
      </button>
    </div>

    <swiper
      :slidesPerView="slidesPerView"
      :spaceBetween="spaceBetween"
      :breakpoints="breakpoints"
      :pagination="{
        clickable: paginationClickable,
      }"
      :modules="modules"
      :navigation="{
        prevEl: showNavigation ? '.swiper-button-prev' : null,
        nextEl: showNavigation ? '.swiper-button-next' : null,
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <slot :item="item"></slot>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default {
  name: "SwiperSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    slidesPerView: {
      type: Number,
      default: 4,
    },
    spaceBetween: {
      type: Number,
      default: 30,
    },
    paginationClickable: {
      type: Boolean,
      default: true,
    },
    showNavigation: {
      type: Boolean,
      default: true,
    },
    breakpoints: {
      type: Object,
      default: () => ({}),
    }
  },
  data() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.navigation-buttons {
  display: flex;
  height: 120px;
  width: 120px;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  border-radius: 100%;
  margin-left: auto;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.swiper-button-prev, .swiper-button-next {
  position: unset;
  margin-top: 0;
}
.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after,
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
  content: 'none';
}
.fa-circle-chevron-left, .fa-circle-chevron-right {
  color: #ec9b3b;
}
.swiper-button-prev, .swiper-button-next,
.fa-circle-chevron-left, .fa-circle-chevron-right {
  height: 35px;
  width: 35px;
}
.custom-button {
  border: none;
  cursor: pointer;
  background: none;
}
/* pagination */
:deep(.swiper-pagination) {
  position: unset;
  margin-top: 20px
}
:deep(.swiper-pagination-bullet-active) {
  background: #ec9b3b;
}
</style>