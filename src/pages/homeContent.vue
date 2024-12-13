<template>
  <div class="md-body">
    <div v-for="item in items" :key="item.id" class="card__wrapper">
      <UserCard 
        :name="`${item.lvl} lvl`" 
        :title="item.title" 
        :link="`/${item.alias}`"
        :imgUrl="item.img">
        {{ item.description }}
      </UserCard>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items.js'
import UserCard from '@/components/UI/UserCard.vue';
export default {
  components: {
    UserCard
  },
  data() {
    return {
      items
    }
  }
}
</script>