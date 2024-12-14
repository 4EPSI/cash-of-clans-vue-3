<template>
  <div class="md-body">
    <div v-for="item in items" :key="item.id" class="card__wrapper">
      <UserCard 
        :name="`${item.lvl} lvl`" 
        :title="item.title" 
        :link="`/${item.alias}`"
        :imgUrl="item.img">
        <template v-slot:body>{{ item.description }}</template>
        <template v-slot:footer>
          <div class="card-stats">
            <div 
              v-for="(stat, index) in item.info" 
              :key="index" 
              class="one-third"
              >
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat">{{ stat.title }}</div>
            </div>
          </div>
        </template>
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