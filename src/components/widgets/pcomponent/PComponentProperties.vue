<template>
  <div>
        <div class="buttons f-noshrink">
            <LinkButton @click="saveRow()"><i class="fas fa-save"></i></LinkButton>
            <LinkButton @click="toggleEditmode"><i class="fas fa-pen"></i></LinkButton>
        </div>
        <Form ref="form" :model="ActivePComponent" :rules="rules" @validate="errors=$event" style="padding:5px 10px">
            <div style="margin-bottom:5px">
                <Label for="kennung">Kennung:</Label>
                <TextBox inputId="kennung" name="kennung" v-model="ActivePComponent.kennung" :disabled="editmode"></TextBox>
                <div class="error">{{getError('kennung')}}</div>
            </div>
            <div style="margin-bottom:5px">
                <Label for="name">Bezeichnung:</Label>
                <TextBox inputId="name" name="name" v-model="ActivePComponent.name" :disabled="editmode"></TextBox>
                <div class="error">{{getError('name')}}</div>
            </div>
            <div style="margin-bottom:5px">
                <Label for="name">id:</Label>
                <TextBox inputId="id" name="id" v-model="ActivePComponent.id" :disabled="true"></TextBox>
                <!--<div class="error">{{getError('name')}}</div>-->
            </div>
            
            <Tabs style="height:250px" plain="plain">
                <TabPanel :title="'Gliederung'">
                    <div style="margin-bottom:5px">
                        <Label for="name">Baugliederung:</Label>
                        <TextBox inputId="Baugliederung" name="Baugliederung" v-model="ActivePComponent.Baugliederung" :disabled="editmode"></TextBox>
                        <!--<div class="error">{{getError('name')}}</div>-->
                    </div>
                    <div style="margin-bottom:5px">
                        <Label for="name">Leistungsgliederung:</Label>
                        <TextBox inputId="Leistungsgliederung" name="Leistungsgliederung" v-model="ActivePComponent.Leistungsgliederung" :disabled="editmode"></TextBox>
                        <!--<div class="error">{{getError('name')}}</div>-->
                    </div>
                    <div style="margin-bottom:5px">
                        <Label for="name">Gewerk:</Label>
                        <TextBox inputId="Gewerk" name="Gewerk" v-model="ActivePComponent.Gewerk" :disabled="editmode"></TextBox>
                        <!--<div class="error">{{getError('name')}}</div>-->
                    </div>
                    <div style="margin-bottom:5px">
                        <Label for="name">freeClass:</Label>
                        <TextBox inputId="freeClass" name="freeClass" v-model="ActivePComponent.freeClass" :disabled="editmode"></TextBox>
                        <!--<div class="error">{{getError('name')}}</div>-->
                    </div>
                </TabPanel>
                <TabPanel :title="'Einheitspreis'">
                    <div style="margin-bottom:5px">
                        <Label for="name">ehp_result:</Label>
                        <TextBox inputId="ehp_result" name="ehp_result" v-model="ActivePComponent.ehp_result"  euro="ActivePComponent.ehp_result" :disabled="editmode"></TextBox>
                        <!--<div class="error">{{getError('name')}}</div>-->
                    </div>
                    <div style="margin-bottom:5px">
                        <Label for="name">ehp_override:</Label>
                        <TextBox inputId="ehp_override" name="ehp_override" v-model="ActivePComponent.ehp_override" :disabled="editmode"></TextBox>
                        <input type="radio" id="one" value=1 v-model="ActivePComponent.ehp_override_flag">
                    </div>
                    <div style="margin-bottom:5px">
                        <Label for="name">ehp_computed:</Label>
                        <TextBox inputId="ehp_computed" name="ehp_computed" v-model="ActivePComponent.ehp_computed" :disabled="editmode"></TextBox>
                        <input type="radio" id="two" value=0 v-model="ActivePComponent.ehp_override_flag">
                        <!--<div class="error">{{getError('name')}}</div>-->
                    </div>
                </TabPanel>
            </Tabs>
                        

            

        </Form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data () {
        return {
            selectionMode: null,
            selection: null,
            rules: {
                kennung: 'required',
                name: 'required'
            },
            errors: {},
            editmode:true,
        }
    },
    methods: {
        ...mapActions(['fetchPComponent','updatePComponent']),
        getError(name) {
            return this.errors[name] && this.errors[name].length
            ? this.errors[name][0]
            : null;
        },
        hasError(name) {
            return this.getError(name) != null;
        },
        saveRow(){
            if (this.editmode==true || this.ActivePComponent.id==1) {
                console.log("editmode disabled")
                return 0;
            }
            this.$refs.form.validate(errors => {
                if (!errors){
                    //const newRow = Object.assign({}, this.model);
                    //edit an existing ...
                    /*
                    if (this.editingRow){ 
                    const index = this.data.indexOf(this.editingRow);
                    this.data.splice(index,1,newRow);
                    this.editingRow = null;
                    this.updatePComponent(this.model);
                    } else { //add one new ...
                    //this.data.unshift(newRow)
                    this.addProject(this.model);
                    }
                    */
                   //console.log(this.ActivePComponent.ehp_override_flag)
                this.updatePComponent(this.ActivePComponent);
                    //this.$refs.dlg.close();
                }
            })
        },
        toggleEditmode(){
            this.editmode = !this.editmode;
        },
        toggleXEditmode(){
            this.editmode = !this.editmode;
        }
    },
    computed: {
      ...mapGetters(["ActivePComponent"])
    },
    created() {
      //this.fetchPComponent('128285c2-bbd9-4202-8072-3f6fd504d77b');
      this.unsubscribe = this.$store.subscribe((mutation) => {
        if (mutation.type === 'setActivePComponent') {
          console.log("changed");
          //this.fetchPComponent(this.ActivePComponent.id);
        }
      });
    },
    beforeDestroy() {
      this.unsubscribe();
    },
}
</script>

<style scoped>
label {
    width: 130px;
}
.f-field {
    width:20em;
}
input.ehp_result {

}
</style>