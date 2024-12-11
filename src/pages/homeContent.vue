<template>
  <div class="md-body">
    <div v-for="item in items" :key="item.id" class="card__wrapper">
      <UserCard 
        :name="`${item.lvl} lvl`" 
        :title="item.title" 
        :imgUrl="item.img">
        {{ item.description }}
      </UserCard>
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UI/UserCard.vue';
export default {
  components: {
    UserCard
  },
  data() {
    return {
      items: [
      {
        id: 1,
        title: 'HTML',
        description: 'archer archer archer',
        img: require('@/assets/img/HTML5.webp'),
        lvl: 4
      },
      {
        id: 2,
        title: 'VUE',
        description: 'wizard wizard wizard',
        img: require('@/assets/img/Vue.js_Logo_2.svg.png'),
        lvl: 5
      }
      ]
    }
  }
}
</script>