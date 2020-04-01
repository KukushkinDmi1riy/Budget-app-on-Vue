<template>
  <div id="app">
    <Form @submitForm="onFormSubmit"/>
    <TotalBalance :total="totalBalance"/>
    <BudgetList :list="list" @deleteItem="onDeleteItem"/>
  </div>
</template>

<script>

import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form
  },
  data: () => ({
    list: {
      1: {
        type: 'INCOME',
        comment: 'Some income comment',
        value: 150,
        id: 1
      },
      2: {
        type: 'OUTCOME',
        comment: 'Some outcome comment',
        value: -63,
        id: 2
      }
    },


  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item)=> acc+item.value, 0)
    }

  },
  methods: {
    onDeleteItem(id){
      this.$delete(this.list, id);
    },
    onFormSubmit(data){
      const newObj = {
        ...data,
        id: String(Math.random())
      }
      this.$set(this.list, newObj.id, newObj)
      console.log(newObj);
    }
  }
}
</script>

<style>

</style>
