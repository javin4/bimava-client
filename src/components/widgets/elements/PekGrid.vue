<template>
  <div>
    <DataGrid :data="pek" @rowExpand="onRowExpand($event)" :filterable="true" style="height:500px">
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
//import { mapGetters , mapActions} from 'vuex'
export default {
  name: 'pek',
  data () {
    return {
      pek: [
        {
          "kennung":" FB01",
          "name":" Wohn- Betriebs-Trenndecke Bestand - Linoleum",
          "id":"49584723-5550-4bbd-ac0b-cb07ca36652a",
          "p_components":[
              {"name":"Linoleum","kennung":" E1","p_component_id":"de57b730-5d82-4603-9051-6d0b901735fb"},
              {"name":"Calciumsulfatestrich mit Faserbewehrung (E300 \u2264 3kN m\u00b2)","kennung":" E2","p_component_id":"900e5cc7-629e-4277-ae28-2c94b6c54171"},
              {"name":"PE-Folie","kennung":" E3","p_component_id":"128285c2-bbd9-4202-8072-3f6fd504d77b"},
              {"name":"Trittschall-D\u00e4mmpl. 20 - ISOVER TDPT","kennung":" E4","p_component_id":"534fbcf6-b9c8-4cd8-b593-f553eb775f70"},
              {"name":"PE-Folie (sd>=120m)","kennung":" E5","p_component_id":"96509a21-9776-4985-864e-e4e02ebc9cad"}
          ]
        },
        {"kennung":" FB01-A1","name":" Wohn- Betriebs-Trenndecke Bestand - Linoleum","id":"81ce88d9-e93c-4821-8b67-f0b5a82a1df7","p_components":[]},
        {"kennung":" FB01-A2","name":" Wohn- Betriebs-Trenndecke Bestand - Linoleum","id":"c02e0869-604f-4632-83ad-e07446001385","p_components":[]},
        {"kennung":" FB01-B1","name":" Wohn- Betriebs-Trenndecke Bestand - Linoleum","id":"86db5f45-26c7-42e2-b53b-69fc0aad7a0e","p_components":[]},
        {"kennung":" FB01-B2","name":" Wohn- Betriebs-Trenndecke Bestand - Linoleum","id":"130853ea-2eea-4059-967b-33154faa3001","p_components":[]}
        ]
    }
  },
  components: { 
  },
  methods: {
    onRowExpand(row){
     console.log("Expand Row", row.id)
    },
    moveComponent(items,from, to){
      items.splice(to, 0, items.splice(from, 1)[0]);
    }
  },
  computed: {
  },
  created() {
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
