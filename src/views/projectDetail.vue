<template>
  <div>
    <Panel title="Projekt Daten"  style="height:100em">
      <Tabs :plain="true" :narrow="false" :justified="false" style="height:100em" :selectedIndex="2">
        <TabPanel :title="'1. Projekt Dashboard'">
            <p>Übersicht des Projektes</p>
        </TabPanel>
        <TabPanel :title="'2. Projekt Kenndaten'">
          <pre>
            Projektkenndaten:
            Bezeichnung = Name 
            Beschreibung = Kurze Beschreibung
            Bild = jpg...
            Baumaßnahmen:>(Leer), Neubau, Altbau(Sanierung), Freianlagen, Sonstiges
            Projektart:> Nach Önorm ?
            Prjojektstatus:>?
            Objektdaten> Adresse, Liegenschaft, Vorhaben etc...
            Flächenprgramm.
          </pre>
        </TabPanel>
        <TabPanel :title="'3. Projekt Ziele'">
          <pre>
            Projektziele. Bedarfsermittlung
            Zielliste, SMART, 
            Kosten: Freigegebn, Prognose, Feststellung
            Projektzeitplan.
          </pre>
        </TabPanel>
        <TabPanel :title="'4. Projekt Gliederung'">
          <pre>
            Projektgliederung
            Kostengliederung. (Baugliederung, Elementegliederung, Leistungsgleiderung. Gewerke)
            Räumlichegliederung.
          </pre>
        </TabPanel>
        <TabPanel :title="'5. Projektbeteiligte'">
          <pre>
            Rollen > Aufraggeber, Vergebendestelle, PS, Bimmanager
            Planungskoordinator, Baukoordinator, Projektleiter gem. BauKg, zuständiger Arbeitsinspektor.
              -> Organigram erstellen...
            Planer, Ausführende etc... 
            >link zu allgemeinen Adressbuch (tel, Firma, adresse...)
          </pre>
        </TabPanel>
        <TabPanel :title="'6. Sonstiges'">
          <pre>
            Bild, Notizen, Projektbearbeiter, Projektteam, interner Projektkoordinator, 
          </pre>
        </TabPanel>
        <TabPanel :title="'7. Projektphasen'">
          <pre>
            Tab6 Projektphasen (lmVM)>Studenliste..  
          </pre>
        </TabPanel>
      </Tabs>
    </Panel>
  </div>
</template>

<script>
import LayoutDefault from '@/components/layout/Default.vue';
export default {
  name: 'ProjectDetailView',
  components: { 

  },

  created() {
    this.$emit('update:layout', LayoutDefault);
  },
};
</script>

<style scoped>
.panel-body .f-full{
padding: 20px;
}
</style>>
