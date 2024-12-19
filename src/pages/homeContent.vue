<template>
  <SwiperSlider 
    :items="items"
    :breakpoints="{
      320: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
      1440: { slidesPerView: 4, spaceBetween: 40 },
    }"
    >
    <template v-slot:default="{ item }">
      <UserCard 
        :name="`${item.lvl} lvl`" 
        :title="item.title" 
        :link="`/${item.alias}`" 
        :imgUrl="item.img"
      >
        <template v-slot:body>{{ item.description }}</template>
        <template v-slot:footer>
          <StatCard :stats="item.info" />
        </template>
      </UserCard>
    </template>
  </SwiperSlider>
</template>

<script>
import SwiperSlider from "@/components/SwiperSlider.vue";
import UserCard from "@/components/UI/UserCard.vue";
import items from "@/seeders/items.js";
import StatCard from '@/components/UI/StatCard.vue'

export default {
  components: {
    SwiperSlider,
    UserCard,
    StatCard
  },
  data() {
    return {
      items,
    };
  },
};
</script>
