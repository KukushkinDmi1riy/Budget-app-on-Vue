<template>
  <div class="budget-list-wrap">
        <div class="list-item">
        <span class="budget-comment">{{ item.comment }}</span>
        <span class="budget-value" :style="onStyleValue">{{ item.value }}</span>
        <i class="icons" :class="onIconsClass"></i>
        <ElButton type="danger" size="mini" @click=" centerDialogVisible = true">Delete</ElButton>
          <el-dialog
            title="Warning"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span>Do you want to delete this item?</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="deleteItem">Confirm</el-button>
            </span>
          </el-dialog>



      </div>
   </div>
</template>

<script>
export default {
  name: 'BudgetListItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    // deletedItemId: null,
    id: null,
    centerDialogVisible: false,
  }),
  methods: {

    deleteItem(){
      this.$emit('deleteItem', this.item.id);
    }
  },
  computed: {
    onIconsClass(){
      if (this.item.type==="INCOME") {
        return 'el-icon-top'
      }
      else {
        return 'el-icon-bottom'
      }
    },
    onStyleValue(){
      if (this.item.type==="INCOME") {
        return {color: '#148008', fontSize: "18px", }
      }
      else {
        return {color: '#FF3D3D', fontSize: "18px", }
      }
    }
  }

}
</script>

<style scoped>
.budget-list-wrap{
  max-width: 500px;
  margin: auto;
}
.list-item{
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value{
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
.icons{
  margin-right: 20px;
}

</style>