<template>
    <div>
        <h2>LV Editing</h2>
    <LinkButton iconCls="icon-add" @click="addRow()" style="width:80px;margin-bottom:4px">Add</LinkButton>
        <DataGrid :data="currentProject" style="height:250px">
            <GridColumn field="kennung" title="Proj. Kennung" align="left" :sortable="true" width="10%"></GridColumn>
            <GridColumn field="name" title="Projekt Bezeichnung" :sortable="true"></GridColumn>
            <GridColumn field="Gesamtkosten" title="GEK Gesamtkosten" align="right" :sortable="true"></GridColumn>
            <GridColumn field="id" title="Uuid" :sortable="true"></GridColumn>
            <GridColumn field="note" title="Anmerkungen"></GridColumn>
            <GridColumn field="status" title="Status" align="center">
                <template slot="body" slot-scope="scope">
                {{scope.row.status ? 'T' : ''}}
                </template>
            </GridColumn>
            <GridColumn field="act" title="Actions" width="100px" align="center">
                 <template slot="body" slot-scope="scope">
                <ButtonGroup style="height:24px">
                    <LinkButton @click="editRow(scope.row)">Edit</LinkButton>
                    <LinkButton @click="deleteRow(scope.row)">Delete</LinkButton>
                </ButtonGroup>
                </template>
      </GridColumn>
        </DataGrid>
        <!--
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
        <div style="margin-bottom:20px">
          <Label for="listprice">List Price:</Label>
          <NumberBox inputId="listprice" name="listprice" :precision="1" v-model="model.listprice"></NumberBox>
        </div>
        <div style="margin-bottom:20px">
          <Label for="unitcost">Unit Cost:</Label>
          <NumberBox inputId="unitcost" name="unitcost" v-model="model.unitcost"></NumberBox>
        </div>
        <div style="margin-bottom:20px">
          <Label for="attr">Attribute:</Label>
          <TextBox inputId="attr" name="attr" v-model="model.attr"></TextBox>
        </div>
        <div style="margin-bottom:20px">
          <Label for="status">Status:</Label>
          <CheckBox inputId="status" name="status" v-model="model.status"></CheckBox>
        </div>
      </Form>
      </div>
      <div class="buttons f-noshrink">
        <LinkButton @click="saveRow()">Save</LinkButton>
        <LinkButton @click="$refs.dlg.close()">Cancel</LinkButton>
      </div>
    </Dialog>-->
    </div>
</template>
 
<script>
    import qGetCurrentProjects from '@/graphql/project/current.gql'
    export default {
      name:"test",
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
          $currentProjectid:'9a4208ba-27da-405c-b484-f386ba48f00b',
          currentProject:null
        }
      },
    created () {
      this.currentProjectid = "9a4208ba-27da-405c-b484-f386ba48f00b"
    },
    methods: {
       
      addRow(){
        this.model = {
          itemid: null,
          name: null,
          listprice: null,
          unitcost: null,
          attr: null,
          status: true
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
            if (this.editingRow){
              const index = this.data.indexOf(this.editingRow);
              this.data.splice(index,1,newRow);
              this.editingRow = null;
            } else {
              this.data.unshift(newRow)
            }
            this.$refs.dlg.close();
          }
        })
      },
      deleteRow(row){
        this.$messager.confirm({
          title: 'Confirm',
          msg: 'Are you sure you want to delete the row?',
          result: (r) => {
            if (r){
              const index = this.data.indexOf(row);
              this.data.splice(index,1);
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
      }
    },
    apollo:{
        
          currentProject: qGetCurrentProjects,
      
    }
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