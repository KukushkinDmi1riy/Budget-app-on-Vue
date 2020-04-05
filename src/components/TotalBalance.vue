<template>
  <div class='total-wrap' :class="onColorClass">
    <div class="total-value"> Balance: {{total}}</div>
</div>
</template>

<script>


export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      dafault: 0,
    }
  },
  computed: {
    onColorClass: function () {
        if (this.total === 0) {
          return 'total-wrap-zero';

        }
        else if (this.total < 0) {
          return 'total-wrap-less';
        }
        else return "total-wrap-more"
      }

    }

  // }
  // computed: {
  //   addClass(){
  //     return this.total == 0 ? this.isActive=true

  //   }
  // }
}
</script>

<style scoped>
  .total-wrap{
   max-width: 500px;
   margin: auto;
   color:black;
  }
  .total-wrap-less{
   background-color:#FF3D3D;

  }
  .total-wrap-more{
   background-color: #33FFBB;
  }

  .total-wrap-zero{
  background-color: #e3e3ff;
  }

  .total-value {
    font-size: 26px;
    text-transform: uppercase;
    padding: 20px;
    text-align: center;


  }

</style>