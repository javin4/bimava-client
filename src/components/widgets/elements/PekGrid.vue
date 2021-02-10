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
      <GridColumn field="listprice" title="List Price" align="right"></GridColumn>
      <GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
      <GridColumn field="attr" title="Attribute" width="500"></GridColumn>
      <GridColumn field="id" title="id" align="right" width="350"></GridColumn>
        <template slot="detail" slot-scope="scope">
          <div style="padding:2px 2px 2px 130px">
            <DataGrid :data="scope.row.p_components">
              <GridColumn field="move" title="move" width="60">
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
              <GridColumn field="kennung" title="Order ID"></GridColumn>
              <GridColumn field="name" title="Bezeichnung"></GridColumn>
              <GridColumn field="unitprice" title="Unit Price"></GridColumn>
            </DataGrid>
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
    return {}
  },
  components: { 
  },
  methods: {
     ...mapActions(['fetchPek']),
    onRowExpand(row){
     console.log("Expand Row", row.id)
    },
    moveComponent(items,from, to){
      items.splice(to, 0, items.splice(from, 1)[0]);
    }
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
</style>
