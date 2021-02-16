<template>
    <div>
           <!--
                <TextBox style="width:100%" 
                        iconCls="icon-search" 
                        placeholder="Searching..."
                        @valueChange="$refs.tree.doFilter($event.currentValue)">
                </TextBox>-->
                <ComboTree :data="allBgls" v-model="selection" placeholder="Baugliederung auswählen" >
                    <Tree slot="tree"></Tree>
                </ComboTree>
            <!--<Tree ref="tree" :data="allBgls" @selectionChange="selection=$event"></Tree>-->
             <p v-if="selection">Selected: {{selection.id}}</p>
    </div>
</template>
 
<script>
import { mapGetters , mapActions} from 'vuex'
//import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      selection:null
    };
  },
  methods: {
    ...mapActions(['fetchBgls']),
  },
  computed: {
      ...mapGetters(['allBgls']),
  },
  created() {
    this.fetchBgls();
  },

};
</script>