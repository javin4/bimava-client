<template>
  <div>
    <Panel title="Projektphasen"  style="height:100em">
      <Tabs :plain="true" :scrollable="true" :narrow="false" :justified="false" style="height:100em" :selectedIndex="selectedTab">
        
       <!-- <TabPanel v-model="allPPhases"  :title="'1. Projekt Dashboard'">
            <p>Projektphasen</p>
        </TabPanel>-->
        <TabPanel v-for="(tab,index) in allPPhases" :key="index" :title="tab.kennung+ ' ' + tab.name">
        <p>{{tab.content}}</p>
      </TabPanel>
      </Tabs>
    </Panel>
  </div>
</template>

<script>
import LayoutDefault from '@/components/layout/Default.vue';
import { mapGetters , mapActions} from 'vuex'
export default {
  name: 'ProjectDetailView',
  data () {
    return {
      selectedTab:0,
    }
  },
  components: { 

  },
  methods: {
  ...mapActions(['fetchPPhases']),
  },
  computed: {
    ...mapGetters(['allPPhases'])
  },
  created() {
    this.$emit('update:layout', LayoutDefault);

    this.fetchPPhases('7140c1f0-3f7e-4011-be89-de295a795201');      
  }
};
</script>

<style scoped>
.panel-body .f-full{
padding: 20px;
}
</style>>
