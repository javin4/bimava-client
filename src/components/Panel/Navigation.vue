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
                <Tree :data="ProjectTreeData">
                    <template slot-scope="scope">
                      <router-link v-if="scope.node.Path" :to="scope.node.Path">{{scope.node.text}}</router-link> 
                      <span v-else>{{scope.node.text}}</span>
                    </template>
                </Tree>
            </AccordionPanel>
            <AccordionPanel iconCls="fas fa-archive" bodyCls="f-row">
                <template slot="header">
                    <div class="panel-title panel-with-icon">Vorlagen</div>
                    <div class="right">
                        <!--<span class="count">1,024</span>-->
                    </div>
                </template>
                <Tree 
                  :data="VorlagenTreeData"
                >
                    <template slot-scope="scope">
                      <router-link v-if="scope.node.Path" :to="scope.node.Path">{{scope.node.text}}</router-link> 
                        <span v-else>{{scope.node.id}} - {{scope.node.text}}</span>
                    </template>
                </Tree>
     

            </AccordionPanel>
            <AccordionPanel :title="'System'" iconCls="fas fa-cog">
                                <Tree 
                  :data="SystemTreeData"
                >
                    <template slot-scope="scope">
                      
                      <router-link v-if="scope.node.Path" :to="scope.node.Path">{{scope.node.text}}</router-link> 
                        <span v-else>{{scope.node.id}} - {{scope.node.text}}</span>
                    </template>
                </Tree>
     
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
              text: "Ausschreibungen",
              children: [
                {
                  id: 111,
                  text: "BM Baumeister",
                  Path:"LV"
                },
                {
                  id: 112,
                  text: "TB Trockenbau",
                  Path:"LV"
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
          Path:"/project"
        },
        {
          id: 2,
          text: "User",
          Path:"/"
        },
          {
          id: 3,
          text: "kein Link"
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

.tree-title a{
  text-decoration: none;
}
</style>