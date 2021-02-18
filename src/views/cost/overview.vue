<template>
   <Layout style="width: 100%; height: 800px">
      <LayoutPanel region="east" title="Eigenschaften" :collapsible="true" :collapsed="true" :expander="true" style="width:350px;">
        adasdasd
      </LayoutPanel>

      <LayoutPanel title="Test Übersicht" region="center" style="">
        <canvas id="myCanvas" width="400" height="200" style="border:1px solid #000000;">
        </canvas> 
        <button @click="draw" >Draw</button><br>
        <a href="https://codepen.io/adammertel/pen/xZyWxy" target="_blank">https://codepen.io/adammertel/pen/xZyWxy</a>
      </LayoutPanel>

   </Layout>
</template>

<script>
import LayoutDefault from '@/components/layout/Default.vue';



export default {
  name: 'ProjectsView',
  components: { 
  },
  data() {
    return {
      rectWidth: 200
    }
  },
  methods:{
      draw() {
      // clear canvas
      this.vueCanvas.clearRect(0, 0, 400, 200);
      
      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.rect(20, 20, this.rectWidth, 100);
      this.vueCanvas.stroke();      


      // create the off-screen canvas
      var canvasPattern = document.createElement("canvas");
      canvasPattern.width = 25;
      canvasPattern.height = 25;
      var contextPattern = canvasPattern.getContext("2d");

      // draw pattern to off-screen context
      contextPattern.beginPath();
      contextPattern.moveTo(0, 0);
      contextPattern.lineTo(50, 50);
      contextPattern.stroke();

      // now pattern will work with canvas element    
      
      var pattern = this.vueCanvas.createPattern(canvasPattern,"repeat");
      this.vueCanvas.fillStyle = pattern;
      this.vueCanvas.fillRect(20, 20, 520, 120);
      this.vueCanvas.fill();
      
    },
  },
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
  mounted(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");    
  this.vueCanvas = ctx;
  }
};
</script>