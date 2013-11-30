var ThingsExtravaganza = {};
(function () { 
          /* Topics */
ThingsExtravaganza.addTopic = function () {
                GDT.addTopics([
                  {
                    id: "Tower Defence",
                    name: "Tower Defence".localize("game topic"),
                    genreWeightings: [0.8, 0.6, 0.6, 0.8, 1, 0.9],
                    audienceWeightings: [0.8, 1, 0.6]
                }, {
                    id: "Hit And Run",
                    name: "Hit And Run".localize("game topic"),
                    genreWeightings: [1, 0.8, 0.6, 0.7, 0.6, 0.6],
                    audienceWeightings: [0.6, 0.7, 1]
                }, {    
                    id: "Hitman",
                    name: "Hitman".localize("game topic"),
                    genreWeightings: [1, 0.8, 0.7, 1, 0.6, 0.7],
                    audienceWeightings: [0.6, 0.7, 1]
                }, {
                    id: "Theft",
                    name: "Theft".localize("game topic"),
                    genreWeightings: [1, 0.8, 0.6, 0.8, 0.8, 0.7],
                    audienceWeightings: [0.6, 0.7, 1]
                }, {    
                    id: "Farming",
                    name: "Farming".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.7, 1, 0.9, 0.1],
                    audienceWeightings: [1, 1, 0.8]
                }, {
                    id: "Turn-Based Strategy",
                    name: "Turn-Based Strategy".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 1, 0.8],
                    audienceWeightings: [0.7, 0.8, 1]
                }, {
                    id: "Real-Time Strategy",
                    name: "Real-Time Strategy".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 1, 0.8],
                    audienceWeightings: [0.7, 0.8, 1]
                }, {       
                    id: "Management",
                    name: "Management".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 1, 0.9],
                    audienceWeightings: [1, 1, 0.9]
                }, {      
                    id: "Cooking",
                    name: "Cooking".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.8, 1, 1, 0.8],
                    audienceWeightings: [1, 1, 0.8]
                }, { 
                    id: "Airplane",
                    name: "Airplane".localize("game topic"),
                    genreWeightings: [0.9, 1, 0.7, 1, 1, 0.8],
                    audienceWeightings: [1, 1, 0.9]
                }, {
                    id:"Tower Building",
                    name: "Tower Building".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 0.9, 1],
                    audienceWeightings: [1, 1, 0.7]
                }, {
                    id:"Construction",
                    name: "Construction".localize("game topic"),
                    genreWeightings: [0.6, 0.7, 0.6, 1, 0.8, 1],
                    audienceWeightings: [0.8, 1, 0.7]
                }, {
                    id:"Playing God",
                    name: "God".localize("game topic"),
                    genreWeightings: [1, 0.8, 0.7, 1, 1, 1],
                    audienceWeightings: [0.6, 0.7, 1]
                }, {
                    id:"Mining",
                    name:"Mining".localize("game topic"),
                    genreWeightings: [0.7, 0.7, 0.6, 1, 1, 1],
                    audienceWeightings: [0.8, 1, 0.7]
                }, {
                    id:"Digging",
                    name:"Digging".localize("game topic"),
                    genreWeightings: [0.7, 0.7, 0.6, 1, 1, 1],
                    audienceWeightings: [0.8, 1, 0.7]
                }, {
                    id:"Tycoon Game",
                    name:"Tycoon".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 1, 1],
                    audienceWeightings: [0.9, 1, 0.9]
                }, {
                    id:"Crying", // Request by Wayss
                    name:"Crying".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 0.6, 1],
                    audienceWeightings: [0.7, 0.7, 0.7]
                }, {
                    id:"Guitar",
                    name:"Guitar".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 1, 1],
                    audienceWeightings: [1, 1, 0.8]
                }, {
                    id:"Heist",
                    name:"Heist".localize("game topic"),
                    genreWeightings: [1, 0.8, 0.9, 1, 1, 0.7],
                    audienceWeightings: [0.6, 0.6, 1]
                }, {
                    id:"Police",
                    name:"Police".localize("game topic"),
                    genreWeightings: [1, 0.8, 0.9, 1, 1, 0.7],
                    audienceWeightings: [0.7, 0.7, 1]
                }, {
                    id:"D&D Tabletop",
                    name:"D&D Tabletop".localize("game topic"),
                    genreWeightings: [0.8, 0.8, 1,],
                    audienceWeightings: [0.6, 0.6, 1]
                }, {
                    id:"Grand Theft",
                    name:"Grand Theft".localize("game topic"),
                    genreWeightings: [1, 0.9, 0.7, 1, 0.7, 1],
                    audienceWeightings: [0.6, 0.6, 1]
                }, {
                    id:"Arcade Game",
                    name:"Arcade".localize("game topic"),
                    genreWeightings: [0.8 ,0.8 ,0.8, 0.8, 0.8, 1],
                    audienceWeightings: [1, 1, 1]
                }, {
                           id:"Dungeon Crawler",
                           name:"Dungeon Crawler".localize("game topic"),
                           genreWeightings: [0.8, 0.9, 1, 1, 0.8, 0.9],
                           audienceWeightings: [0.7, 0.9, 0.9]
                }, {
                    id:"Time Travel",
                    name:"Time Travel".localize("game topic"),
                    genreWeightings: {0.8, 0.9, 0.8, 1, 0.7, 1],
                    audienceWeightings: [0.7, 1, 1]
                }, {
                    id:"Dinosaurs",
                    name:"Dinosaurs".localize("game topic"),
                    genreWeightings: [1, 0.9, 0.8, 0.9, 0.8, 1],
                    audienceWeightings: [1, 0.9, 0.9]
                }, {
                    id:"Dogfighting",
                    name:"Dogfighting".localize("game topic"),
                    genreWeightings: [1, 0.7, 0.7, 1, 1, 1],
                    audienceWeightings: [0.7, 0.8, 1]
                }, {
                    id:"Beat them up because they suck lotz lol", //The ID won't show, I'm making a different ID to fix potential compatability errors with Expansion Pack by DzjengisKhan.
                    name:"Beat em up".localize("game topic"),
                    genreWeightings: [1, 0.7, 0.8, 0.6, 0.6, 1],
                    audienceWeightings: [0.7, 1, 1]
                }, {
                    id:"College Sim", // Request by Venemous/turntablelover
                    name:"College Sim".localize("game topic"),
                    genreWeightings: [0.7, 0.8, 0.8, 1, 0.7, 1],
                    audienceWeightings: [0.8, 1, 0.8]
                }, {
                    id:"Hamster Sim", //Request by Venemous/turntablelover
                    name:"Hamster Sim".localize("game topic"),
                    genreWeightings: [0.7, 0.8, 0.8, 1, 0.7, 1],
                    audienceWeightings: [1, 1, 0.8]
                }, {
                    id:"World's End",
                    name:"World's End".localize("game topic"),
                    genreWeightings: [0.8, 0.9, 0.8, 1, 0.7, 1],
                    audienceWeightings: [0.6, 0.6, 1]
                }, {
                    id:"Magic",
                    name:"Magic".localize("game topic"),
                    genreWeightings: [0.9, 0.7, 1, 1, 0.7, 1],
                    audienceWeightings: [0.9, 1, 0.7]
                }, {
                    id:"Murder",
                    name:"Murder".localize("game topic"),
                    genreWeightings: [1, 0.9, 0.7, 1, 0.9, 0.6],
                    audienceWeightings: [0.6, 0.7, 1]
                }, {
                    id:"Parkour",
                    name:"Parkour".localize("game topic"),
                    genreWeightings: [0.8, 1, 0.7, 1, 0.7, 0.6],
                    audienceWeightings: [0.7, 0.8, 0.9]
                }, {
                    id:"Darts",
                    name:"Darts".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 0.8, 1],
                    audienceWeightings: [0.7, 1, 0.7]
                }, {
                    id:"Architect",
                    name:"Architect".localize("game topic"),
                    genreWeightings: [0.7, 0.6, 0.6, 1, 1, 0.7],
                    audienceWeightings: [0.6, 0.8, 0.8]
                }, {
                    id:"Colonization",
                    name:"Colonization".localize("game topic"),
                    genreWeightings: [0.8, 0.7, 0.8, 1, 1, 0.8],
                    audienceWeightings: [0.6, 0.8, 0.8]
                }, {
                    id:"Author",
                    name:"Author".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.7, 1, 0.8, 1],
                    audienceWeightings: [0.8, 0.8, 0.8]
                }, {
                    id:"Space Wars"
                    name:"Space Wars".localize("game topic"),
                    genreWeightings: [1, 0.9, 1, 0.7, 0.9, 0.6],
                    audienceWeightings: [0.7, 0.7, 1]
                }, {
                    id:"Fishing",
                    name:"Fishing".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 0.8, 1],
                           audienceWeightings: [0.6, 1, 0.7]
                }, {
                    id:"Zookeeping",
                    name:"Zookeeping".localize("game topic"),
                    genreWeightings: [0.7, 0.9, 0.6, 1, 0.7, 1],
                    audienceWeightings: [1, 0.9, 0.8]
                }, {
                    id:"Monsters",
                    name:"Monsters".localize("game topic"),
                    genreWeightings: [0.9, 0.9, 1, 0.7, 0.7, 1],
                    audienceWeightings: [0.8, 1, 0.8]
                }, {
                    id:"Edumacacional",
                    name:"Educational".localize("game topic"),
                    genreWeightings: [0.7, 0.7, 0.7 ,0.7 ,0.7, 1],
                    audienceWeightings: [1, 1, 0.7]
                }, {
                    id:"Christmas/X-mas",
                    name:"Christmas/X-mas".localize("game topic"),
                    genreWeightings: [0.7, 0.7, 0.7, 0.7 ,0.7, 1],
                    audienceWeightings: [1, 1, 0.7]
                }, {
                    id:"Cleaning",
                    name:"Cleaning".localize("game topic"),
                    genreWeightings: [0.7, 0.7, 0.7, 0.7, 0.7, 1],
                    audienceWeightings: [1, 1, 0.7]
                }, {
                    id:"Navy",
                    name:"Navy".localize("game topic"),
                    genreWeightings: [1, 0.8, 0.8, 0.7, 1, 0.6],
                    audienceWeightings: [0.7, 0.8, 1]
                }, {
                          id:"Tanks",
                          name:"Tanks".localize("game topic"),
                          genreWeightings: [1, 0.8, 0.7, 0.7, 0.6],
                          audienceWeightings: [0.7, 0.8, 1]
                }, {
                          id:"Marriage",
                          name:"Marriage".localize("game topic"),
                          genreWeightings: [0.6, 0.6, 0.7, 1, 0.8, 1],
                          audienceWeightings: [0.7, 1, 0.7]
                }, {
                          id:"Island Life",
                          name:"Island Life".localize("game topic"),
                          genreWeightings: [0.6, 0.8, 0.9, 1, 0.8, 1],
                          audienceWeightings: [0.8, 0.9, 0.9]
                }, {
                          id:"Fish",
                          name:"Fish".localize("game topic"),
                          genreWeightings: [0.6, 0.7, 0.6, 1, 0.7, 1],
                          audienceWeightings: [1, 0.9, 0.8]
                }, {
                          id:"Universe",
                          name:"Universe".localize("game topic"),
                          genreWeightings: [0.7, 0.7 ,0.7, 1, 1, 1],
                          audienceWeightings: [0.8, 0.8, 0.8]
                }, {
                          id:"Exploration",
                          name:"Exploration".localize("game topic"),
                          genreWeightings: [1, 1, 1, 0.7, 0.7, 1]
                          audienceWeightings: [0.8, 1, 1]
                }, {
                          id:"Blocks",
                          name:"Blocks".localize("game topic"),
                          genreWeightings: [0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
                          audienceWeightings: [0.8, 0.8 ,0.8]
                }, {
                          id:"Reading",
                          name:"Reading".localize("game topic"),
                          genreWeightings: [0.8, 0.8, 0.8, 0.8, 0.8, 1],
                          audienceWeightings: [1, 1, 0.7]
                }, {
                          id:"Tabletop",
                          name:"Tabletop".localize("game topic"),
                          genreWeightings: [1, 1, 1, 0.9, 0.7, 1],
                          audienceWeightings: [0.7, 1, 1]
                }, {
                        
                }]);
        };
           ThingsExtravaganza.addResearch = function () {
        /* Gameplay */        
        GDT.addResearchItem(
        {
                id: "Motion Control",
                name: "Motion Control".localize(),
                v: 8,
                canResearch: function (company) {
                        return LevelCalculator.getMissionLevel('Gameplay') > 5 //The Gameplay level has to 6 or higher.
                },
                category: "Gameplay",
                categoryDisplayName: "Gameplay".localize()
        });
         GDT.addResearchItem(
         {
                      id:"Basic Holographic Tech",
                      name: "Basic Holographic Tech".localize(),
                      v: 8,
                      canResearch: function (company) {
                              return LevelCalculator.getMissionLevel('Gameplay') > 5
                },
                      category: "Gameplay",
                      categoryDisplayName: "Gameplay".localize()
         });
          GDT.addResearchItem(
          {
                      id:"Advanced Holograpic Tech",
                      name: "Advanced Holographic Tech".localize(),
                      v: 10,
                      canResearch: function (company) {
                              return LevelCalculator.getMissionLevel('Gameplay') > 6
                      },
                      category: "Gameplay",
                      categoryDisplayName: "Gameplay".localize(),
         });
         /* Graphics */
         GDT.addResearchItem(
           {
                      id:"4D Graphics"
                      name: "4D Graphics".localize(),
                      v: 14,
                      canResearch: function (company) {
                              return LevelCalculator.getMissionLevel('Graphics') > 8
                      },
                      caregory: "Graphics",
                      categoryDisplayName: "Graphics".localize(),
            });
