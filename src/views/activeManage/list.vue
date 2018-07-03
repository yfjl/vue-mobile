<template>
  <div>
   
  <div style="height:90vh;border:1px solid green;">
   <v-scroll-full ref="myscrollfull"  @load="loadData">
        <ul class="ul" v-for="(item,index) of datas" :key="index">
          <li>日期：{{item.type}}</li>
          <li>日期：{{item.createdAt}}</li>
          <li><img :src="item.url" alt=""></li>

        </ul>
    </v-scroll-full>
  </div>
   
  </div>
</template>


<script>
import vScrollFull from './vScrollFull.vue'
export default {
  
  data() {
    return {
      datas: [],
       list: [],
      limit:20
      
    };
  },
  components:{
      vScrollFull
  },
  mounted() {
 
  },
  methods: {
    async loadData(pageIndex){

      console.log(11111)

      if(pageIndex==1)this.datas=[]

       let {data} =  await this.$api.getList({ page: pageIndex })

      //  console.log(data)
          this.datas = this.datas.concat(data);

          let len = this.datas.length;

          if(data.length < this.limit){
            this.$refs.myscrollfull.endByPage(len,Math.ceil(len/this.limit))
          }else{
            this.$refs.myscrollfull.endByPage(len)
          }
      
     

    }
    

  }
};
</script>



<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0px;
}
.ul {
  border: 1px solid rgb(221, 220, 220);
  width: 90%;
  margin-left: 5%;
  border-radius: 5px;
  margin-top: 10px;
  
  li {
    list-style: none;
    
    img{
      width: 100px;
  
    }
  }
}
</style>


