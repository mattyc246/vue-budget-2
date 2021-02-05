<template>
  <h2>Transaction Table</h2>
</template>

<script>
export default {
  name: "TransactionTable",
  props: {
    transactions: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
    }
  },
}
</script>

<style lang="scss" scoped>

</style>