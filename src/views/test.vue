<template>
    <div>
        <h2>test DataGrid Sorting</h2>
        <DataGrid style="height:250px"
                :virtualScroll="true"
                :data="projects"
                :total="total"
                :pageSize="pageSize">
            <GridColumn field="inv" title="Inv No" :sortable="true"></GridColumn>
            <GridColumn field="name" title="Name" :sortable="true"></GridColumn>
            <GridColumn field="amount" title="Amount" align="right" :sortable="true"></GridColumn>
            <GridColumn field="price" title="Price" align="right" :sortable="true"></GridColumn>
            <GridColumn field="cost" title="Cost" align="right" :sortable="true"></GridColumn>
            <GridColumn field="note" title="Note"></GridColumn>
        </DataGrid>
    </div>
</template>
 
<script>
import gql from 'graphql-tag'
export default {
  data() {
    return {
      total: 1000,
      data: [],
      pageSize: 20
    };
  },
  apollo:{
            projects: gql`{ 
                projects{
                    id
                    name
                }
            }`,
        }
};
</script>