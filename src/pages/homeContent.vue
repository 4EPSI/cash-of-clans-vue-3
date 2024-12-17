<template>
  <SwiperSlider :items="items">
    <template v-slot:default="{ item }">
      <UserCard 
        :name="`${item.lvl} lvl`" 
        :title="item.title" 
        :link="`/${item.alias}`" 
        :imgUrl="item.img"
      >
        <template v-slot:body>{{ item.description }}</template>
        <template v-slot:footer>
          <div class="card-stats">
            <div v-for="(stat, index) in item.info" :key="index" class="one-third">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat">{{ stat.title }}</div>
            </div>
          </div>
        </template>
      </UserCard>
    </template>
  </SwiperSlider>
</template>

<script>
import SwiperSlider from "@/components/SwiperSlider.vue";
import UserCard from "@/components/UI/UserCard.vue";
import items from "@/seeders/items.js";

export default {
  components: {
    SwiperSlider,
    UserCard,
  },
  data() {
    return {
      items,
    };
  },
};
</script>
