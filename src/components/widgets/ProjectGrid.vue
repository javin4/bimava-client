<template>
    <div>
        <DataGrid style="height:100%"
                :virtualScroll="true"
                :data="projects"
                :total="total"
                :pageSize="pageSize"
                :filterable="true"
        >
            <GridColumn field="kennung" title="Proj. Kennung" align="left" :sortable="true" width="10%"></GridColumn>
            <GridColumn field="name" title="Projekt Bezeichnung" :sortable="true"></GridColumn>
            <GridColumn field="Gesamtkosten" title="GEK Gesamtkosten" align="right" :sortable="true"></GridColumn>
            <GridColumn field="id" title="Uuid" :sortable="true"></GridColumn>
            <GridColumn field="note" title="Anmerkungen"></GridColumn>
        </DataGrid>
    </div>
</template>
 
<script>
//import gql from 'graphql-tag'
import query from '@/graphql/project/all.gql'
export default {
    data() {
        return {
            total: 1000,
            data: [],
            pageSize: 20,
            query: null
        };
    },
    apollo:{
        projects: query
    }
};
</script>