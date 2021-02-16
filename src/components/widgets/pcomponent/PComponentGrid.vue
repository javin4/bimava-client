<template>
  <div v-on:keyup.esc="$refs.dlg.close()">
    <LinkButton iconCls="icon-add" @click="addRow()" style="width:80px;margin-bottom:4px">Add</LinkButton>
    <DataGrid :data="allPComponents" :columnResizing="true" style="height:500px"
                :filterable="true"                 
                :selectionMode="selectionMode"
                @selectionChange="MySelection($event)">
      <GridColumn field="kennung" title="Kennung" align="left" :sortable="true" width="10%"></GridColumn>
      <GridColumn field="name" title="Komponenten Bezeichnung" :sortable="true"></GridColumn>
      <GridColumn field="ehp_result" title="ehp_result" align="right" :sortable="true">
        <template slot="body" slot-scope="scope"> <div class="item EUR"> <div>{{ scope.row.ehp_result | toEUR}}</div></div></template>
      </GridColumn>
      <GridColumn field="act" title="Actions" width="80px" align="center">
        <template slot="body" slot-scope="scope">
          <ButtonGroup style="height:24px">
              <LinkButton @click="deleteRow(scope.row)"><i class="fas fa-trash"></i></LinkButton>
          </ButtonGroup>
        </template>
      </GridColumn>
    </DataGrid>
    <Dialog ref="dlg" bodyCls="f-column" :title="title" :modal="true" closed :dialogStyle="{height:'300px'}">
      <div class="f-full" style="overflow:auto">
        <Form ref="form" :model="model" :rules="rules" @validate="errors=$event" style="padding:20px 50px">
          <div style="margin-bottom:20px">
            <Label for="kennung">Projekt Kennung:</Label>
            <TextBox inputId="kennung" name="kennung" v-model="model.kennung"></TextBox>
            <div class="error">{{getError('kennung')}}</div>
          </div>
          <div style="margin-bottom:20px">
            <Label for="name">Name:</Label>
            <TextBox inputId="name" name="name" v-model="model.name"></TextBox>
            <div class="error">{{getError('name')}}</div>
          </div>
        </Form>
      </div>
      <div class="buttons f-noshrink">
        <LinkButton @click="saveRow()">Save</LinkButton>
        <LinkButton @click="$refs.dlg.close()">Cancel</LinkButton>
      </div>
    </Dialog>
  </div>
</template>
 
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        data: [],
        title: '',
        model: {
          kennung: null,
          name: null,
        },
        rules: {
          kennung: 'required',
          name: 'required'
        },
        errors: {},
        editingRow: null,
        selectionMode: "single",
        selection: null,
      }
    },
    methods: {
      ...mapActions(['fetchPComponents','deletePComponent','fetchPComponent','addPComponent']),
      addRow(){
        this.model = {
          kennung: null,
          name: null,
        };
        this.title = 'Add';
        this.$refs.dlg.open();
      },
      editRow(row){
        this.editingRow = row;
        this.model = Object.assign({}, row);
        this.title = 'Edit';
        this.$refs.dlg.open();
      },
      saveRow(){
        this.$refs.form.validate(errors => {
          if (!errors){
            const newRow = Object.assign({}, this.model);
            //edit an existing ...
            if (this.editingRow){ 
              const index = this.data.indexOf(this.editingRow);
              this.data.splice(index,1,newRow);
              this.editingRow = null;
              this.updateProject(this.model);
            } else { //add one new ...
              this.data.unshift(newRow)
              this.addPComponent(this.model);
            }
            this.$refs.dlg.close();
          }
        })
      },
      deleteRow(row){
        this.$messager.confirm({
          title: 'Confirm',
          msg: `Möchten Sie die Komponente ${row.kennung} - ${row.name} endgültig löschen?`,
          result: (r) => {
            if (r){
              this.deletePComponent(row.id)
            }
          }
        })
      },
      getError(name) {
        return this.errors[name] && this.errors[name].length
          ? this.errors[name][0]
          : null;
      },
      hasError(name) {
        return this.getError(name) != null;
      },
      MySelection($event){
        console.log($event.id)
        this.fetchPComponent($event.id)
      }
    },
    computed: {
      ...mapGetters(["allPComponents"])
    },
    created() {
      this.fetchPComponents(),
      this.unsubscribe = this.$store.subscribe((mutation) => {
        if (mutation.type === 'editPComponent') {
          console.log("ssschanged"),
          this.fetchPComponents()
        }
      });
       },
    beforeDestroy() {
      this.unsubscribe();
    },
  }
</script>
<style>
.buttons{
  text-align: right;
  padding: 10px;
}
.buttons .l-btn{
  width: 80px;
  margin-left: 5px;
}
.error {
  color: red;
  font-size: 12px;
  margin: 4px 0;
  margin-left: 80px;
}
</style>