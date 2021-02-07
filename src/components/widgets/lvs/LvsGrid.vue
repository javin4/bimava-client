<template>
    <div>
    <span v-if="activeProjectid==='1'">
    Bitte wählen sie zu erst ein Projekt aus</span>
    <span v-else>

    <LinkButton iconCls="icon-add" @click="addRow()" style="width:80px;margin-bottom:4px">Add</LinkButton>
        <DataGrid  :data="allLVs" :columnResizing="true" style="height:250px">
            <GridColumn field="kennung" title="LV Kennung" align="left" :sortable="true" width="10%"></GridColumn>
            <GridColumn field="name" title="LV Bezeichnung" :sortable="true"></GridColumn>
            <GridColumn field="Gesamtkosten" title="GEK Gesamtkosten" align="right" :sortable="true"></GridColumn>
            <GridColumn field="id" title="Uuid" :sortable="true"></GridColumn>
            <GridColumn field="project_id" title="project_id" align="left"></GridColumn>
            <GridColumn field="note" title="Anmerkungen"></GridColumn>
            <GridColumn field="act" title="Actions" width="100px" align="center">
                 <template slot="body" slot-scope="scope">
                <ButtonGroup style="height:24px">
                    <LinkButton @click="editRow(scope.row)">Edit</LinkButton>
                    <LinkButton @click="deleteRow(scope.row)">Delete</LinkButton>
                </ButtonGroup>
                </template>
            </GridColumn>
        </DataGrid>
        <div v-show="!allLVs"> Keine LVs</div>
    </span>
    
    <Dialog ref="dlg" bodyCls="f-column" :title="title" :modal="true" closed :dialogStyle="{height:'300px', width:'500px'}">
      <div class="f-full" style="overflow:auto">
      <Form ref="form" :model="model" :rules="rules" @validate="errors=$event" style="padding:20px 50px">
        <div style="margin-bottom:20px">
          <Label for="kennung">LV Kennung:</Label>
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
          project_id: null,
        },
        rules: {
          kennung: 'required',
          name: 'required'
        },
        errors: {},
        editingRow: null
            }
      },
    methods: {
      ...mapActions(['fetchAllLVs','fetchLVsByProject','deleteLV','addLV','updateLV']),
      addRow(){
        this.model = {
          kennung: null,
          name: null,
          project_id: this.activeProjectid,
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
              this.updateLV(this.model);
            } else {
              this.data.unshift(newRow)
              this.addLV(this.model);
            }
            //add one new ...
            this.$refs.dlg.close();
            /*console.log(this.model)
            console.log('id:',this.model.id)
            console.log('kennung',this.model.kennung)
            console.log('name',this.model.name)*/

          }
        })
      },
      deleteRow(row){
        this.$messager.confirm({
          title: 'Confirm',
          msg: 'Are you sure you want to delete the row?',
          result: (r) => {
            if (r){
              this.deleteLV(row.id)
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
    },
    computed: {
      ...mapGetters(['allLVs','activeProjectid'])
    },
    created() {
      this.fetchLVsByProject({
            project_id: this.activeProjectid
      });
      this.unsubscribe = this.$store.subscribe((mutation) => {
        if (mutation.type === 'setActiveProjectId') {
          this.fetchLVsByProject({
            project_id: this.activeProjectid
          });
        }
      });
    },
    beforeDestroy() {
      this.unsubscribe();
    },
   
  }
</script>
<style scoped>
  .f-field {
    width:16em;
  }

  .error {
    text-align: right;
  }

  .textbox-label {
    width: 150px;
  }
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