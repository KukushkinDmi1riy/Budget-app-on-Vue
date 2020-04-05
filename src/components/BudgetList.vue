<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <el-radio-group v-model="radio" @change='handleListFilter'>
        <el-radio  :label="1">All value</el-radio>
        <el-radio  :label="2">OUTCOME</el-radio>
        <el-radio  :label="3">INCOME</el-radio>
      </el-radio-group>

      <template v-if="isEmpty">
      <div class="list-item" v-for="(item, prop) in filteredList" :key="prop">
       <BudgetListItem :item="item" @deleteItem="deleteItem"/>
      </div>
      </template>
      <ElAlert v-else :title="emptyTitle" type="info" center
    show-icon :closable="false" effect="dark"> </ElAlert>

    </ElCard>
  </div>
</template>



<script>
import BudgetListItem from "./BudgetListItem";

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem
    },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'The list is empty',
    radio: 1,
    filter: 'ALL'
  }),
  computed: {
    isEmpty(){
      return Boolean(Object.keys(this.list).length);
    },
    filteredList(){
      if (this.filter=== 'ALL') return this.list;

      const filteredList = Object.entries(this.list).filter(([,val])=> val.type===this.filter)
      console.log(filteredList);

      return filteredList.reduce((acc,item) => {acc[item[0]]=item[1];
      return acc}, {});
    }
  },
  methods: {
    deleteItem(id){
      console.log(id);
      this.$emit('deleteItem', id);
    },
    handleListFilter(val){
      switch (val) {
        case 2: {
          this.filter='OUTCOME';
          break;
        }
        case 3: {
          this.filter='INCOME';
          break;
        }
        default: {
          this.filter = 'ALL';
          break;
        }
      }
    }
  }

}
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>
