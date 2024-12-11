<template>
  <div class="md-body">
    <h1>hello home</h1>
    <p>Edit me</p>
    <div v-for="item in items" :key="item.id" class="card_wrapper">
      <UserCard :name="`${item.lvl} lvl`" :title="item.title" :description="item.description" />
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
        title: 'Archer',
        description: 'archer archer archer',
        lvl: 4
      },
      {
        id: 2,
        title: 'Wizard',
        description: 'wizard wizard wizard',
        lvl: 5
      }
      ]
    }
  }
}
</script>