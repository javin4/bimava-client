<template>
  <div>
    <DataGrid :data="allPek" @rowExpand="onRowExpand($event)" :filterable="true" style="height:500px">
      <GridColumn align="center" cellCss="datagrid-td-rownumber" width="30">
        <template slot="body" slot-scope="scope">
            {{scope.rowIndex + 1}}
        </template>
      </GridColumn>
      <GridColumn :expander="true" width="30"></GridColumn>
      <GridColumn field="kennung" title="Kennung" width="100"></GridColumn>
      <GridColumn field="name" title="Bezeichnung" width="400"></GridColumn>
      <GridColumn field="ehp_override" title="EHP" align="right"></GridColumn>
      <GridColumn field="ehp_result" title="Unit Cost" align="right"></GridColumn>
      <!--<GridColumn field="attr" title="Attribute" width="500"></GridColumn>
      <GridColumn field="id" title="id" align="right" width="350"></GridColumn>-->
        <template slot="detail" slot-scope="scope">
          <div style="padding:2px 2px 2px 160px">
            <div class="column side">
              <canvas id="myCanvas" width="250" height="100" style="border:1px solid #000000;">
              </canvas> 
            </div>
            <div class="column middle">
              <DataGrid :data="scope.row.p_components" :footerData="footerData" :showFooter="true">
                <GridColumn field="move" title="move" width="60px">
                  <template slot="body" slot-scope="scope3">
                  <div class="item">  
                    <button class="MoveUpDown" @click="moveComponent(scope.row.p_components, scope3.rowIndex, scope3.rowIndex-1)" :disabled="scope3.rowIndex==0">
                      <i class="fas fa-arrow-up"></i>       
                    </button>
                    <button class="MoveUpDown" @click="moveComponent(scope.row.p_components, scope3.rowIndex, scope3.rowIndex+1)" :disabled="scope3.rowIndex == scope.row.p_components.length-1">
                      <i class="fas fa-arrow-down"></i>
                    </button>
                  </div>
                  </template>               
                </GridColumn>
                <GridColumn field="kennung" title="Order ID" width="100px"></GridColumn>
                <GridColumn field="name" title="Bezeichnung"></GridColumn>
                <GridColumn field="ehp_result" title="ehp_result">
                  <template slot="body" slot-scope="scope">
                    <div class="item EUR">
                      <div>{{ scope.row.ehp_result | toEUR}}</div>
                    </div>
                  </template>
                  <template slot="footer" slot-scope="scope">
                    <div class="item EUR">
                      <div>{{ scope.row.ehp_result | toEUR}}</div>
                    </div>
                  </template>
                </GridColumn>
              </DataGrid>
            </div>
          </div>
        </template>
    </DataGrid>
  </div>
</template>

<script>
import { mapGetters , mapActions} from 'vuex'
export default {
  name: 'pek',
  data () {
    return {
      footerData:[{
        'ehp_result':100
      }]
    }
  },
  components: { 
  },
  methods: {
     ...mapActions(['fetchPek']),
    onRowExpand(row){
      var summe = 0;
      for (var i = 0; i < row.p_components.length; ++i) {
          summe += parseFloat(row.p_components[i].ehp_result);
      }
      this.updateFooter(summe)
    },
    moveComponent(items,from, to){
      items.splice(to, 0, items.splice(from, 1)[0]);
    },
    updateFooter(ehp_result){
      this.footerData = [{
        'ehp_result':ehp_result
      }]
    },
  },
  computed: {
      ...mapGetters(["allPek"]),
  },
  created() {
    this.fetchPek();
  }
};
</script>

<style scoped>
  :disabled {
    background-color:white;
  }

  .MoveUpDown {
    background-color:white;
    border: none;
  }
  .EUR {
    text-align: right;
  }


  .column {
  float: left;
  
}

/* Left and right column */
.column.side {
  width: 25%;
  background-color: brown;
}

/* Middle column */
.column.middle {
  width: 75%;
  background-color: green;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column.side, .column.middle {
    width: 100%;
  }
}
</style>
