<template>
    <div>
        <h2>Basic ComboBox</h2>
        <Label for="c1" align="top">Select a value:</Label>
        <ComboBox inputId="c1" v-model="value" :data="data"></ComboBox>
    <p v-if="value">Selected value: {{value}}</p>
    </div>
</template>
 
<script>
export default {
  data() {
    return {
      value: 11,
      data: this.getData()
    };
  },
  methods: {
    getData() {
      return [
        { value: 11, text: "Mr. Nice" },
        { value: 12, text: "Narco" },
        { value: 13, text: "Bombasto" },
        { value: 14, text: "Celeritas" },
        { value: 15, text: "Magneta" },
        { value: 16, text: "RubberMan" },
        { value: 17, text: "Dynama" },
        { value: 18, text: "Dr IQ" },
        { value: 19, text: "Magma" },
        { value: 20, text: "Tornado" }
      ];
    }
  }
};
</script>