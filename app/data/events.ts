export type EventType = "war" | "civil_war" | "slavery" | "conquest" | "genocide" | "colonialism";
export type Region = "europe" | "asia" | "africa" | "americas" | "middle_east" | "global";

export interface HistoricalEvent {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  type: EventType;
  region: Region;
  description: string;
  casualties?: string;
}

export const events: HistoricalEvent[] = [
  {
    id: "greco-persian",
    name: "Greco-Persian Wars",
    startYear: -499,
    endYear: -449,
    type: "war",
    region: "europe",
    description: "A series of conflicts between the Achaemenid Persian Empire and Greek city-states. Marked by battles at Marathon, Thermopylae, and Salamis.",
    casualties: "~300,000+"
  },
  {
    id: "alexander-conquests",
    name: "Alexander the Great Conquests",
    startYear: -336,
    endYear: -323,
    type: "conquest",
    region: "asia",
    description: "Alexander of Macedon conquered the Persian Empire, Egypt, and reached as far as India, destroying cities and enslaving populations along the way.",
    casualties: "~1 million+"
  },
  {
    id: "warring-states",
    name: "Warring States / Qin Unification",
    startYear: -475,
    endYear: -221,
    type: "war",
    region: "asia",
    description: "Centuries of warfare between Chinese states culminating in Qin conquest, unifying China under brutal authoritarian rule with mass executions.",
    casualties: "~1 million+"
  },
  {
    id: "punic-wars",
    name: "Punic Wars",
    startYear: -264,
    endYear: -146,
    type: "war",
    region: "europe",
    description: "Three wars between Rome and Carthage culminating in the complete destruction of Carthage and enslavement of its population.",
    casualties: "~1.5 million+"
  },
  {
    id: "roman-conquests",
    name: "Roman Imperial Conquests",
    startYear: -200,
    endYear: 117,
    type: "conquest",
    region: "europe",
    description: "Rome systematically conquered and enslaved populations across Europe, North Africa, and the Middle East, building an empire through sustained military violence.",
    casualties: "Millions"
  },
  {
    id: "roman-slavery",
    name: "Roman Slave System",
    startYear: -200,
    endYear: 400,
    type: "slavery",
    region: "europe",
    description: "At its height the Roman Empire held 4-5 million enslaved people (20-30% of population), sourced through conquest, breeding, and trade.",
    casualties: "Millions enslaved"
  },
  {
    id: "han-xiongnu",
    name: "Han-Xiongnu Wars",
    startYear: -200,
    endYear: 89,
    type: "war",
    region: "asia",
    description: "Prolonged conflict between the Han Dynasty and the nomadic Xiongnu confederation across the steppes of Central Asia.",
    casualties: "Hundreds of thousands"
  },
  {
    id: "roman-jewish",
    name: "Roman-Jewish Wars",
    startYear: 66,
    endYear: 135,
    type: "war",
    region: "middle_east",
    description: "Rome crushed Jewish revolts in Judea, destroying Jerusalem and the Second Temple and enslaving or dispersing the Jewish population.",
    casualties: "~1 million"
  },
  {
    id: "islamic-conquests",
    name: "Early Islamic Conquests",
    startYear: 632,
    endYear: 750,
    type: "conquest",
    region: "middle_east",
    description: "Rapid Arab Muslim expansion across the Middle East, North Africa, Persia, and into Central Asia and the Iberian Peninsula within a century.",
    casualties: "Millions"
  },
  {
    id: "arab-slave-trade",
    name: "Arab / Trans-Saharan Slave Trade",
    startYear: 650,
    endYear: 1900,
    type: "slavery",
    region: "africa",
    description: "Over 1,200 years, Arab and Swahili traders transported an estimated 10-18 million Africans across the Sahara and Indian Ocean into slavery.",
    casualties: "10-18 million enslaved"
  },
  {
    id: "viking-raids",
    name: "Viking Raids and Expansion",
    startYear: 793,
    endYear: 1100,
    type: "war",
    region: "europe",
    description: "Norse warriors raided and conquered across Europe from Ireland to Russia, pillaging monasteries, enslaving populations, and establishing settlements.",
    casualties: "Hundreds of thousands"
  },
  {
    id: "charlemagne",
    name: "Charlemagne Conquests",
    startYear: 768,
    endYear: 814,
    type: "conquest",
    region: "europe",
    description: "Frankish king forcibly Christianized and conquered Saxons and other Germanic peoples, with mass executions like the Massacre of Verden (4,500 killed).",
    casualties: "Hundreds of thousands"
  },
  {
    id: "crusades",
    name: "The Crusades",
    startYear: 1096,
    endYear: 1291,
    type: "war",
    region: "middle_east",
    description: "European Christian military campaigns to capture the Holy Land, marked by massacres of Muslims, Jews, and Eastern Christians, including the sack of Constantinople.",
    casualties: "1-3 million"
  },
  {
    id: "mongol-conquests",
    name: "Mongol Conquests",
    startYear: 1206,
    endYear: 1368,
    type: "conquest",
    region: "asia",
    description: "The Mongol Empire became the largest contiguous land empire in history through a campaign of unprecedented destruction, depopulating entire regions.",
    casualties: "40 million (est.)"
  },
  {
    id: "mongol-china",
    name: "Mongol Conquest of China",
    startYear: 1211,
    endYear: 1279,
    type: "conquest",
    region: "asia",
    description: "Genghis Khan and his successors conquered the Jin and Song dynasties. China population may have fallen by 35-40 million during this period.",
    casualties: "~30-40 million"
  },
  {
    id: "mongol-abbasid",
    name: "Mongol Destruction of Abbasid Caliphate",
    startYear: 1258,
    endYear: 1260,
    type: "conquest",
    region: "middle_east",
    description: "Hulagu Khan sacked Baghdad, ending the Islamic Golden Age. The city was burned and 100,000-800,000 people were killed.",
    casualties: "100,000-800,000"
  },
  {
    id: "hundred-years-war",
    name: "Hundred Years War",
    startYear: 1337,
    endYear: 1453,
    type: "war",
    region: "europe",
    description: "A prolonged conflict between England and France involving widespread devastation of the French countryside and civilian population.",
    casualties: "2-3 million"
  },
  {
    id: "black-death-conflicts",
    name: "Black Death Conflicts and Pogroms",
    startYear: 1347,
    endYear: 1400,
    type: "genocide",
    region: "europe",
    description: "As the plague spread across Europe, Jewish communities were massacred in hundreds of cities blamed for the epidemic.",
    casualties: "Tens of thousands massacred"
  },
  {
    id: "ottoman-expansion",
    name: "Ottoman Empire Expansion",
    startYear: 1299,
    endYear: 1683,
    type: "conquest",
    region: "middle_east",
    description: "The Ottoman Empire expanded across three continents through sustained military conquest, incorporating and subordinating diverse populations.",
    casualties: "Millions"
  },
  {
    id: "sengoku",
    name: "Japanese Sengoku Period",
    startYear: 1467,
    endYear: 1615,
    type: "war",
    region: "asia",
    description: "A century of near-constant civil war in Japan between feudal lords, featuring widespread siege warfare, famine, and population displacement.",
    casualties: "Hundreds of thousands"
  },
  {
    id: "spanish-conquest",
    name: "Spanish Conquest of the Americas",
    startYear: 1492,
    endYear: 1600,
    type: "conquest",
    region: "americas",
    description: "Spain conquered the Aztec and Inca empires and Caribbean islands through warfare, enslavement, and introduced disease that killed 90% of indigenous populations.",
    casualties: "25-50 million (disease + violence)"
  },
  {
    id: "transatlantic-slavery",
    name: "Transatlantic Slave Trade",
    startYear: 1501,
    endYear: 1867,
    type: "slavery",
    region: "americas",
    description: "An estimated 12.5 million Africans were forcibly transported to the Americas. Approximately 1.8 million died in transit. The trade funded European and American industrialization.",
    casualties: "12.5 million enslaved; 1.8 million died in transit"
  },
  {
    id: "mughal-conquests",
    name: "Mughal Empire Conquests",
    startYear: 1526,
    endYear: 1707,
    type: "conquest",
    region: "asia",
    description: "The Mughal Empire conquered and consolidated much of the Indian subcontinent through warfare, with sieges, executions, and massive destruction of Hindu temples.",
    casualties: "Millions"
  },
  {
    id: "thirty-years-war",
    name: "Thirty Years War",
    startYear: 1618,
    endYear: 1648,
    type: "war",
    region: "europe",
    description: "A devastating European religious-political conflict. Germany lost 25-40% of its population to war, famine, and disease.",
    casualties: "8 million"
  },
  {
    id: "american-chattel-slavery",
    name: "American Chattel Slavery",
    startYear: 1619,
    endYear: 1865,
    type: "slavery",
    region: "americas",
    description: "Hereditary race-based slavery in the American colonies and later United States. By 1860, nearly 4 million people were enslaved.",
    casualties: "4 million enslaved"
  },
  {
    id: "native-american-dispossession",
    name: "Dispossession of Native Americans",
    startYear: 1607,
    endYear: 1890,
    type: "genocide",
    region: "americas",
    description: "Systematic removal, forced marches, massacres, and biological warfare against Indigenous peoples of North America by European settlers and the U.S. government.",
    casualties: "Millions (disease + violence)"
  },
  {
    id: "british-india",
    name: "British Colonization of India",
    startYear: 1757,
    endYear: 1947,
    type: "colonialism",
    region: "asia",
    description: "Britain extracted vast wealth from India while causing famines (killing 12-29 million), suppressing revolts with mass executions, and dismantling local industries.",
    casualties: "12-29 million (famines)"
  },
  {
    id: "napoleonic-wars",
    name: "Napoleonic Wars",
    startYear: 1803,
    endYear: 1815,
    type: "war",
    region: "europe",
    description: "France under Napoleon fought most of Europe in a series of wars that transformed the continent and killed millions across multiple theatres.",
    casualties: "3.5-6 million"
  },
  {
    id: "indian-indenture",
    name: "Indian Indenture System",
    startYear: 1838,
    endYear: 1917,
    type: "slavery",
    region: "asia",
    description: "After emancipation, Britain transported 1.5 million Indians as indentured laborers to colonies worldwide under conditions resembling slavery.",
    casualties: "1.5 million indentured"
  },
  {
    id: "taiping-rebellion",
    name: "Taiping Rebellion",
    startYear: 1850,
    endYear: 1864,
    type: "civil_war",
    region: "asia",
    description: "The deadliest civil war in history. A quasi-Christian movement challenged Qing rule; the conflict killed an estimated 20-30 million people.",
    casualties: "20-30 million"
  },
  {
    id: "opium-wars",
    name: "Opium Wars",
    startYear: 1839,
    endYear: 1860,
    type: "war",
    region: "asia",
    description: "Britain and France forced China to legalize the opium trade through military force, dismantling Chinese sovereignty and causing widespread addiction.",
    casualties: "Tens of thousands"
  },
  {
    id: "crimean-war",
    name: "Crimean War",
    startYear: 1853,
    endYear: 1856,
    type: "war",
    region: "europe",
    description: "Britain, France, and the Ottoman Empire fought Russia over influence in the declining Ottoman Empire, with high casualty rates from disease.",
    casualties: "450,000-750,000"
  },
  {
    id: "american-civil-war",
    name: "American Civil War",
    startYear: 1861,
    endYear: 1865,
    type: "civil_war",
    region: "americas",
    description: "The United States fought itself over the question of slavery and secession, producing the deadliest conflict in American history.",
    casualties: "620,000-850,000"
  },
  {
    id: "french-colonial",
    name: "French Colonial Empire",
    startYear: 1830,
    endYear: 1962,
    type: "colonialism",
    region: "africa",
    description: "France conquered Algeria, West Africa, Indochina, and Madagascar through brutal military campaigns, using forced labor and mass executions.",
    casualties: "Millions"
  },
  {
    id: "anglo-zulu",
    name: "Anglo-Zulu War",
    startYear: 1879,
    endYear: 1902,
    type: "war",
    region: "africa",
    description: "British forces invaded Zululand and subsequently fought Boers in South Africa, with scorched earth campaigns and concentration camps killing tens of thousands.",
    casualties: "~50,000+"
  },
  {
    id: "scramble-africa",
    name: "European Scramble for Africa",
    startYear: 1881,
    endYear: 1914,
    type: "colonialism",
    region: "africa",
    description: "European powers divided Africa at the 1884 Berlin Conference and conquered the continent through military force, establishing exploitative colonial economies.",
    casualties: "Millions"
  },
  {
    id: "belgian-congo",
    name: "Belgian Congo Atrocities",
    startYear: 1885,
    endYear: 1908,
    type: "genocide",
    region: "africa",
    description: "King Leopold II ran the Congo as a private colony, using systematic mutilation, hostage-taking, and murder to force rubber production. Population fell by 10 million.",
    casualties: "~10 million"
  },
  {
    id: "ww1",
    name: "World War I",
    startYear: 1914,
    endYear: 1918,
    type: "war",
    region: "europe",
    description: "The Great War killed 20 million people in industrial-scale trench warfare. Empires collapsed and new national conflicts were seeded worldwide.",
    casualties: "20 million"
  },
  {
    id: "armenian-genocide",
    name: "Armenian Genocide",
    startYear: 1915,
    endYear: 1923,
    type: "genocide",
    region: "middle_east",
    description: "The Ottoman government systematically massacred and deported 1-1.5 million Armenians in the first genocide of the 20th century.",
    casualties: "1-1.5 million"
  },
  {
    id: "russian-civil-war",
    name: "Russian Civil War",
    startYear: 1917,
    endYear: 1922,
    type: "civil_war",
    region: "europe",
    description: "Bolsheviks fought multiple factions including White Army, foreign interventionists, and nationalist movements. Famine and disease killed millions.",
    casualties: "5-9 million"
  },
  {
    id: "soviet-gulag",
    name: "Soviet Gulag System",
    startYear: 1918,
    endYear: 1953,
    type: "slavery",
    region: "europe",
    description: "An estimated 18 million people passed through Soviet forced labor camps. At least 1.5-1.8 million died from execution, starvation, and overwork.",
    casualties: "1.5-1.8 million deaths; 18 million imprisoned"
  },
  {
    id: "chinese-civil-war",
    name: "Chinese Civil War",
    startYear: 1927,
    endYear: 1949,
    type: "civil_war",
    region: "asia",
    description: "Nationalists and Communists fought for control of China, interrupted by the Japanese invasion. Millions died in combat and associated famines.",
    casualties: "8 million+"
  },
  {
    id: "holodomor",
    name: "Holodomor",
    startYear: 1932,
    endYear: 1933,
    type: "genocide",
    region: "europe",
    description: "Stalin's forced collectivization caused a devastating famine in Ukraine, killing 3.5-7.5 million people. Many historians classify it as a deliberate genocide.",
    casualties: "3.5-7.5 million"
  },
  {
    id: "japan-china",
    name: "Japanese Invasion of China",
    startYear: 1937,
    endYear: 1945,
    type: "war",
    region: "asia",
    description: "Japan invaded and occupied large parts of China, committing atrocities including the Nanjing Massacre (200,000-300,000 killed) and widespread biological warfare.",
    casualties: "14-20 million Chinese deaths"
  },
  {
    id: "ww2",
    name: "World War II",
    startYear: 1939,
    endYear: 1945,
    type: "war",
    region: "global",
    description: "The deadliest conflict in human history, killing 70-85 million people across six continents through combat, bombing, famine, and genocide.",
    casualties: "70-85 million"
  },
  {
    id: "holocaust",
    name: "The Holocaust",
    startYear: 1941,
    endYear: 1945,
    type: "genocide",
    region: "europe",
    description: "Nazi Germany systematically murdered 6 million Jews and 5-6 million others including Roma, disabled people, gay men, and political prisoners.",
    casualties: "11-17 million"
  },
  {
    id: "partition-india",
    name: "Partition of India",
    startYear: 1947,
    endYear: 1948,
    type: "civil_war",
    region: "asia",
    description: "The British partition of India into India and Pakistan triggered the largest mass migration in history (14 million people) and communal violence killing 200,000-2 million.",
    casualties: "200,000-2 million"
  },
  {
    id: "apartheid",
    name: "Apartheid",
    startYear: 1948,
    endYear: 1994,
    type: "colonialism",
    region: "africa",
    description: "South Africa institutionalized racial segregation and white minority rule, dispossessing and brutalizing the Black majority population for 46 years.",
    casualties: "Systemic oppression of millions"
  },
  {
    id: "north-korea-camps",
    name: "North Korean Prison Camp System",
    startYear: 1948,
    endYear: 2024,
    type: "slavery",
    region: "asia",
    description: "An estimated 200,000 people are currently held in North Korean political prison camps (kwanliso) under conditions of forced labor, torture, and starvation.",
    casualties: "~400,000 deaths (est.)"
  },
  {
    id: "korean-war",
    name: "Korean War",
    startYear: 1950,
    endYear: 1953,
    type: "war",
    region: "asia",
    description: "A brutal conflict that divided Korea along the 38th parallel. U.S.-led bombing destroyed most North Korean cities. An armistice, not peace treaty, ended active combat.",
    casualties: "2.5-5 million"
  },
  {
    id: "great-leap-famine",
    name: "Mao Great Leap Forward Famine",
    startYear: 1959,
    endYear: 1961,
    type: "genocide",
    region: "asia",
    description: "Mao Zedong forced collectivization and unrealistic grain quotas caused the deadliest famine in history, killing 15-55 million Chinese people.",
    casualties: "15-55 million"
  },
  {
    id: "algerian-war",
    name: "Algerian War",
    startYear: 1954,
    endYear: 1962,
    type: "war",
    region: "africa",
    description: "France fought to retain Algeria as a colony, using systematic torture, mass executions, and internment camps. Over 1 million Algerians were killed.",
    casualties: "~1 million Algerians"
  },
  {
    id: "vietnam-war",
    name: "Vietnam War",
    startYear: 1955,
    endYear: 1975,
    type: "war",
    region: "asia",
    description: "The United States dropped more bombs on Vietnam than all of WWII combined. 2-3.5 million Vietnamese died alongside 58,000 Americans.",
    casualties: "2-3.5 million"
  },
  {
    id: "cambodian-genocide",
    name: "Cambodian Genocide",
    startYear: 1975,
    endYear: 1979,
    type: "genocide",
    region: "asia",
    description: "The Khmer Rouge under Pol Pot killed 1.5-2 million Cambodians (25% of the population) through execution, forced labor, and starvation.",
    casualties: "1.5-2 million"
  },
  {
    id: "iran-iraq-war",
    name: "Iran-Iraq War",
    startYear: 1980,
    endYear: 1988,
    type: "war",
    region: "middle_east",
    description: "Iraq invaded Iran, beginning an 8-year war of attrition featuring chemical weapons use. Both sides suffered catastrophic military and civilian losses.",
    casualties: "500,000-1 million"
  },
  {
    id: "iraqi-kurdish-genocide",
    name: "Iraqi Kurdish Genocide (Anfal)",
    startYear: 1986,
    endYear: 1989,
    type: "genocide",
    region: "middle_east",
    description: "Saddam Hussein conducted the Anfal campaign against Iraqi Kurds, using chemical weapons at Halabja and killing 50,000-182,000 people.",
    casualties: "50,000-182,000"
  },
  {
    id: "afghan-wars",
    name: "Afghan Wars",
    startYear: 1979,
    endYear: 2021,
    type: "war",
    region: "asia",
    description: "First the Soviet Union, then the United States and NATO waged decades of war in Afghanistan. An estimated 1-2 million Afghans died.",
    casualties: "1-2 million+"
  },
  {
    id: "rwandan-genocide",
    name: "Rwandan Genocide",
    startYear: 1994,
    endYear: 1994,
    type: "genocide",
    region: "africa",
    description: "In 100 days, Hutu extremists killed 500,000-800,000 Tutsi and moderate Hutu. The international community failed to intervene despite advance warning.",
    casualties: "500,000-800,000"
  },
  {
    id: "yugoslav-wars",
    name: "Yugoslav Wars / Bosnian Genocide",
    startYear: 1991,
    endYear: 2001,
    type: "war",
    region: "europe",
    description: "The breakup of Yugoslavia produced ethnic cleansing, the Sarajevo siege, and the Srebrenica massacre where 8,000 Bosniak men and boys were killed.",
    casualties: "130,000-140,000"
  },
  {
    id: "congo-wars",
    name: "Congo Wars",
    startYear: 1996,
    endYear: 2003,
    type: "war",
    region: "africa",
    description: "Two overlapping wars involving nine nations in the Democratic Republic of Congo produced the deadliest conflict since WWII with widespread atrocity.",
    casualties: "5.4 million"
  },
  {
    id: "syrian-civil-war",
    name: "Syrian Civil War",
    startYear: 2011,
    endYear: 2023,
    type: "civil_war",
    region: "middle_east",
    description: "Uprising against Assad became a multi-sided proxy war. 13 million Syrians were displaced and 300,000-500,000 killed in a conflict involving chemical weapon attacks.",
    casualties: "300,000-500,000"
  },
  {
    id: "yemeni-civil-war",
    name: "Yemeni Civil War",
    startYear: 2014,
    endYear: 2024,
    type: "civil_war",
    region: "middle_east",
    description: "A civil war between the Houthi movement and the Saudi-led coalition has created the worlds worst humanitarian crisis, killing 150,000+ and starving millions.",
    casualties: "150,000+ direct; 377,000 total (est.)"
  },
  {
    id: "uyghur-detention",
    name: "Uyghur Detention System",
    startYear: 2017,
    endYear: 2024,
    type: "genocide",
    region: "asia",
    description: "China has detained an estimated 1-1.8 million Uyghurs and other Muslims in Xinjiang in internment camps, with widespread evidence of forced labor and cultural destruction.",
    casualties: "1-1.8 million detained"
  }
];
