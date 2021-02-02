<template>
  <div>
    <Layout style="width: 100%; height: 800px">
      <LayoutPanel region="north" style="height: 100px">
        <panel-north />
      </LayoutPanel>
      
      <LayoutPanel region="south" style="height: 50px">
        <panel-south />
      </LayoutPanel>

       <LayoutPanel region="west" title="Navigation" :collapsible="true" :collapsed="false" :expander="true" style="width:300px;">   
        <panel-navigation />
      </LayoutPanel>
      
      <LayoutPanel region="east" title="Eigenschaften" :collapsible="true" :collapsed="true" :expander="true" style="width:350px;">
        <panel-east />
      </LayoutPanel>

      <LayoutPanel region="center" style="height: 500px">
        <slot />


      </LayoutPanel>
    </Layout>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
* {
    font-family: Roboto,Arial,Helvetica;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import PanelNavigation from '../Panel/Navigation.vue';
import PanelEast from '../Panel/East';
import PanelNorth from "../Panel/North";
import PanelSouth from '../Panel/South';

export default {
  data() {
    return {};
  },
  components: {
    PanelNorth,
    PanelSouth,
    PanelEast,
    PanelNavigation,

 /*     
      PanelEast,
  */
  },
};
</script>