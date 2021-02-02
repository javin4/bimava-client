<template>
  <div heigth="100%">
                <w-project-selector-combo-box-x />
        <Accordion>
            <AccordionPanel iconCls="icon-man" headerCls="hd">
                <template slot="header">
                    <div class="panel-title panel-with-icon">Projekt</div>
                    <div class="right">
                        <!--<span class="count">124</span>-->
                    </div>
                </template>
                <Tree :data="ProjectTreeData"></Tree>
            </AccordionPanel>
            <AccordionPanel iconCls="fas fa-archive" bodyCls="f-row">
                <template slot="header">
                    <div class="panel-title panel-with-icon">Vorlagen</div>
                    <div class="right">
                        <!--<span class="count">1,024</span>-->
                    </div>
                </template>
                 <Tree :data="SystemTreeData"></Tree>
               
            </AccordionPanel>
            <AccordionPanel :title="'System'" iconCls="fas fa-cog">
                <Tabs class="f-full" :border="false">
                    <TabPanel :title="'Java'">
                        <p>Java (Indonesian: Jawa) is an island of Indonesia. With a population of 135 million (excluding the 3.6 million on the island of Madura which is administered as part of the provinces of Java), Java is the world's most populous island, and one of the most densely populated places in the world.</p>
                    </TabPanel>
                    <TabPanel :title="'C#'">
                        <p>C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.</p>
                    </TabPanel>
                    <TabPanel :title="'Ruby'">
                        <p>A dynamic, reflective, general-purpose object-oriented programming language.</p>
                    </TabPanel>
                    <TabPanel :title="'Fortran'">
                        <p>Fortran (previously FORTRAN) is a general-purpose, imperative programming language that is especially suited to numeric computation and scientific computing.</p>
                    </TabPanel>
                </Tabs>
            </AccordionPanel>
        </Accordion>
  </div>
</template>
 
<script>
import WProjectSelectorComboBoxX from '../widgets/wProjectSelectorComboBoxX.vue';

export default {
  data() {
    return {
      ProjectTreeData: [
        {
          id: 1,
          text: "Projektdaten",
          children: [
            {
              id: 11,
              text: "Photos",
              children: [
                {
                  id: 111,
                  text: "Friend"
                },
                {
                  id: 112,
                  text: "Wife"
                },
                {
                  id: 113,
                  text: "Company"
                }
              ]
            },
            {
              id: 12,
              text: "Program Files",
              state: "closed",
              children: [
                {
                  id: 121,
                  text: "Intel"
                },
                {
                  id: 122,
                  text: "Java"
                },
                {
                  id: 123,
                  text: "Microsoft Office"
                },
                {
                  id: 124,
                  text: "Games"
                }
              ]
            },
            {
              id: 13,
              text: "index.html"
            },
            {
              id: 14,
              text: "about.html"
            },
            {
              id: 15,
              text: "welcome.html"
            }
          ]
        }
      ],
      VorlagenTreeData: [
        {
          id: 1,
          text: "My Documents",
          children: [
            {
              id: 11,
              text: "Photos",
              children: [
                {
                  id: 111,
                  text: "Friend"
                },
                {
                  id: 112,
                  text: "Wife"
                },
                {
                  id: 113,
                  text: "Company"
                }
              ]
            },
            {
              id: 12,
              text: "Program Files",
              state: "closed",
              children: [
                {
                  id: 121,
                  text: "Intel"
                },
                {
                  id: 122,
                  text: "Java"
                },
                {
                  id: 123,
                  text: "Microsoft Office"
                },
                {
                  id: 124,
                  text: "Games"
                }
              ]
            },
            {
              id: 13,
              text: "index.html"
            },
            {
              id: 14,
              text: "about.html"
            },
            {
              id: 15,
              text: "welcome.html"
            }
          ]
        }
      ],
      SystemTreeData: [
        {
          id: 1,
          text: "Projekte",
          iconCls:"icon-reload"
        
        },
                {
          id: 2,
          text: "Projekte",
        
        }
      ],
    };
  },
  components: {
        WProjectSelectorComboBoxX,
  }
};
</script>
<style>
.right {
  position: absolute;
  right: 24px;
  height: 30px;
  top: 5px;
}
.count {
  display: inline-block;
  border-radius: 6px;
  background: #666;
  color: #fff;
  padding: 0 6px;
  font-size: 12px;
  line-height: 16px;
  height: 16px;
}


.accordion {
     height: 550px;
}
</style>