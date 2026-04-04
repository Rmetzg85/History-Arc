export type EventType =
  | "war"
  | "civil_war"
  | "slavery"
  | "conquest"
  | "genocide"
  | "colonialism"
  | "diaspora"
  | "ongoing";

export type Region =
  | "europe"
  | "british_isles"
  | "asia"
  | "east_asia"
  | "south_asia"
  | "southeast_asia"
  | "africa"
  | "west_africa"
  | "east_africa"
  | "north_africa"
  | "central_africa"
  | "southern_africa"
  | "americas"
  | "north_america"
  | "south_america"
  | "middle_east"
  | "oceania"
  | "global";

export interface HistoricalEvent {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  type: EventType;
  region: Region;
  sourceCoords: [number, number]; // [longitude, latitude]
  destCoords?: [number, number];
  description: string;
  casualties?: string;
  ongoing?: boolean;
}

export const events: HistoricalEvent[] = [
  // ── ANCIENT WORLD ────────────────────────────────────────────────────────
  {
    id: "assyrian-captivity",
    name: "Assyrian Conquest & Captivity of Israel",
    startYear: -740, endYear: -720,
    type: "diaspora", region: "middle_east",
    sourceCoords: [35.2, 32.0], destCoords: [43.2, 36.4],
    description: "The Assyrian Empire conquered the northern Kingdom of Israel and deported an estimated 27,000 Israelites to Assyria and Media — the origin of the 'Ten Lost Tribes.' The deportees were scattered across modern Iraq and Iran, assimilating over centuries.",
    casualties: "~27,000 deported"
  },
  {
    id: "babylonian-captivity",
    name: "Babylonian Captivity of Judah",
    startYear: -597, endYear: -539,
    type: "diaspora", region: "middle_east",
    sourceCoords: [35.2, 31.8], destCoords: [44.4, 32.5],
    description: "Nebuchadnezzar II destroyed the First Temple and deported the Jewish population of Jerusalem to Babylon in three waves. This event shaped Jewish identity profoundly — producing the Hebrew Bible in its near-final form and cementing diaspora as a defining Jewish experience.",
    casualties: "~10,000–20,000 deported"
  },
  {
    id: "greco-persian",
    name: "Greco-Persian Wars",
    startYear: -499, endYear: -449,
    type: "war", region: "europe",
    sourceCoords: [44.0, 32.0], destCoords: [26.0, 38.0],
    description: "A series of conflicts between the Achaemenid Persian Empire and Greek city-states. Marked by battles at Marathon, Thermopylae, and Salamis, these wars halted Persian expansion into Europe.",
    casualties: "~300,000+"
  },
  {
    id: "warring-states",
    name: "Warring States / Qin Unification",
    startYear: -475, endYear: -221,
    type: "war", region: "east_asia",
    sourceCoords: [113.0, 33.0],
    description: "Centuries of warfare between Chinese states culminating in Qin conquest, unifying China under brutal authoritarian rule with mass executions including the burial of 400,000 Zhao soldiers at Changping.",
    casualties: "~1 million+"
  },
  {
    id: "alexander-conquests",
    name: "Alexander the Great Conquests",
    startYear: -336, endYear: -323,
    type: "conquest", region: "asia",
    sourceCoords: [22.0, 41.0], destCoords: [68.0, 34.0],
    description: "Alexander of Macedon conquered the Persian Empire, Egypt, and reached as far as India, destroying cities and enslaving populations along the way. His campaigns spread Hellenistic culture from the Mediterranean to Central Asia.",
    casualties: "~1 million+"
  },
  {
    id: "punic-wars",
    name: "Punic Wars",
    startYear: -264, endYear: -146,
    type: "war", region: "europe",
    sourceCoords: [12.5, 41.9], destCoords: [10.2, 36.8],
    description: "Three wars between Rome and Carthage culminating in the complete destruction of Carthage and enslavement of its entire surviving population. Rome emerged as the dominant Mediterranean power.",
    casualties: "~1.5 million+"
  },
  {
    id: "roman-conquests",
    name: "Roman Imperial Conquests",
    startYear: -200, endYear: 117,
    type: "conquest", region: "europe",
    sourceCoords: [12.5, 41.9], destCoords: [8.0, 50.0],
    description: "Rome systematically conquered and enslaved populations across Europe, North Africa, and the Middle East, building an empire through sustained military violence.",
    casualties: "Millions"
  },
  {
    id: "roman-slavery",
    name: "Roman Slave System",
    startYear: -200, endYear: 400,
    type: "slavery", region: "europe",
    sourceCoords: [12.5, 41.9],
    description: "At its height the Roman Empire held 4–5 million enslaved people (20–30% of population), sourced through conquest, breeding, and trade across three continents.",
    casualties: "Millions enslaved"
  },
  {
    id: "han-xiongnu",
    name: "Han–Xiongnu Wars",
    startYear: -200, endYear: 89,
    type: "war", region: "east_asia",
    sourceCoords: [116.4, 39.9], destCoords: [106.9, 47.9],
    description: "Prolonged conflict between the Han Dynasty and the nomadic Xiongnu confederation. China built much of the Great Wall during this era to contain Xiongnu raids.",
    casualties: "Hundreds of thousands"
  },
  {
    id: "roman-jewish",
    name: "Roman–Jewish Wars & Diaspora",
    startYear: 66, endYear: 135,
    type: "war", region: "middle_east",
    sourceCoords: [12.5, 41.9], destCoords: [35.2, 31.8],
    description: "Rome crushed three Jewish revolts, destroying Jerusalem and the Second Temple in 70 CE, enslaving or dispersing over a million Jews across the empire. The Bar Kokhba revolt ended with Jews banned from Judea entirely.",
    casualties: "~1 million"
  },
  {
    id: "jewish-diaspora-rome",
    name: "Jewish Diaspora Across the Roman World",
    startYear: 70, endYear: 400,
    type: "diaspora", region: "middle_east",
    sourceCoords: [35.2, 31.8], destCoords: [12.5, 41.9],
    description: "Following the destruction of the Second Temple and the Bar Kokhba revolt, Jewish communities scattered across the Roman Empire — Alexandria, Rome, Antioch, Carthage, and into Persia and Arabia. This established the Rabbinic diaspora tradition.",
    casualties: "Millions displaced"
  },
  {
    id: "jewish-beta-israel",
    name: "Jewish Settlement in Ethiopia (Beta Israel)",
    startYear: 400, endYear: 600,
    type: "diaspora", region: "middle_east",
    sourceCoords: [35.2, 31.8], destCoords: [38.7, 9.0],
    description: "Ethiopian Jews (Beta Israel / Falasha) trace ancestry to ancient Israelite migration to Ethiopia, possibly during the Solomonic era or through Yemenite Jewish routes. Isolated for centuries, they maintained Torah observance without Talmudic tradition.",
    casualties: "Community of ~130,000 survived into 20th century"
  },
  {
    id: "cochin-jews",
    name: "Jewish Migration to India (Cochin Jews)",
    startYear: 70, endYear: 500,
    type: "diaspora", region: "middle_east",
    sourceCoords: [35.2, 31.8], destCoords: [76.3, 9.9],
    description: "Jewish traders and refugees settled in Kerala (Cochin) following the Roman destruction of Jerusalem. Given a copper-plate grant by local kings, they thrived for nearly 2,000 years as one of the world's most isolated Jewish communities.",
    casualties: "Small community, survived continuously"
  },
  // ── MEDIEVAL ─────────────────────────────────────────────────────────────
  {
    id: "islamic-conquests",
    name: "Early Islamic Conquests",
    startYear: 632, endYear: 750,
    type: "conquest", region: "middle_east",
    sourceCoords: [45.0, 24.0], destCoords: [55.0, 30.0],
    description: "Rapid Arab Muslim expansion across the Middle East, North Africa, Persia, and into Central Asia and the Iberian Peninsula within a century of Muhammad's death.",
    casualties: "Millions"
  },
  {
    id: "arab-slave-trade",
    name: "Arab / Trans-Saharan Slave Trade",
    startYear: 650, endYear: 1900,
    type: "slavery", region: "east_africa",
    sourceCoords: [39.2, -6.2], destCoords: [57.5, 23.6],
    description: "Over 1,200 years, Arab and Swahili traders transported an estimated 10–18 million Africans across the Sahara and Indian Ocean into slavery. The Zanzibar slave market was the largest in the world by the 19th century. Unlike the Atlantic trade, Arab slavery was multi-directional and deeply embedded in Islamic commerce.",
    casualties: "10–18 million enslaved"
  },
  {
    id: "roman-conquest-britain",
    name: "Roman Conquest of Britain",
    startYear: 43, endYear: 84,
    type: "conquest", region: "british_isles",
    sourceCoords: [12.5, 41.9], destCoords: [-2.0, 52.0],
    description: "Emperor Claudius launched the Roman invasion of Britain. Roman legions pacified Wales and much of England through sustained military campaigns, destroying the druid stronghold on Anglesey and crushing Boudicca's revolt (killing an estimated 70,000–80,000 Britons).",
    casualties: "Hundreds of thousands"
  },
  {
    id: "viking-raids",
    name: "Viking Raids and Conquest",
    startYear: 793, endYear: 1066,
    type: "conquest", region: "british_isles",
    sourceCoords: [10.0, 62.0], destCoords: [-3.0, 54.0],
    description: "Norse warriors raided Ireland, Scotland, England, and France from 793 onward, eventually settling and establishing the Danelaw across northern England. Viking Dublin became the largest slave market in the Irish Sea.",
    casualties: "Hundreds of thousands"
  },
  {
    id: "charlemagne",
    name: "Charlemagne's Conquests",
    startYear: 768, endYear: 814,
    type: "conquest", region: "europe",
    sourceCoords: [7.0, 49.0], destCoords: [12.0, 52.0],
    description: "Frankish king forcibly Christianized and conquered Saxons and other Germanic peoples, with mass executions including the Massacre of Verden (4,500 Saxons beheaded in one day). Created the Carolingian Empire through 30 years of nearly continuous warfare.",
    casualties: "Hundreds of thousands"
  },
  {
    id: "anglo-saxon-invasion",
    name: "Anglo-Saxon Invasion of Britain",
    startYear: 449, endYear: 600,
    type: "conquest", region: "british_isles",
    sourceCoords: [10.0, 53.5], destCoords: [-1.5, 52.0],
    description: "Germanic Angles, Saxons, and Jutes invaded post-Roman Britain, displacing or subjugating the Celtic Britons westward into Wales, Cornwall, and Scotland. The invaders established the kingdoms that became England.",
    casualties: "Hundreds of thousands"
  },
  {
    id: "crusades",
    name: "The Crusades",
    startYear: 1096, endYear: 1291,
    type: "war", region: "middle_east",
    sourceCoords: [12.0, 46.0], destCoords: [35.2, 31.8],
    description: "European Christian military campaigns to capture the Holy Land marked by the massacre of Jerusalem's Muslim and Jewish populations (1099), the sack of Constantinople (1204), and the destruction of entire communities. Eight major crusades over 200 years.",
    casualties: "1–3 million"
  },
  {
    id: "norman-conquest",
    name: "Norman Conquest of England",
    startYear: 1066, endYear: 1075,
    type: "conquest", region: "british_isles",
    sourceCoords: [1.0, 49.0], destCoords: [-1.5, 52.0],
    description: "William of Normandy defeated Harold II at Hastings and systematically subjugated England. The 'Harrying of the North' (1069–70) deliberately destroyed crops and livestock across Yorkshire, causing famine that killed an estimated 100,000 people.",
    casualties: "~100,000+ (Harrying of the North)"
  },
  {
    id: "mongol-conquests",
    name: "Mongol Conquests",
    startYear: 1206, endYear: 1368,
    type: "conquest", region: "asia",
    sourceCoords: [106.9, 47.9], destCoords: [44.0, 33.0],
    description: "The Mongol Empire became the largest contiguous land empire in history through a campaign of unprecedented destruction, depopulating entire regions of Central Asia, Persia, and China.",
    casualties: "40 million (est.)"
  },
  {
    id: "mongol-china",
    name: "Mongol Conquest of China",
    startYear: 1211, endYear: 1279,
    type: "conquest", region: "east_asia",
    sourceCoords: [106.9, 47.9], destCoords: [116.4, 35.0],
    description: "Genghis Khan and his successors conquered the Jin and Song dynasties over 70 years. China's population may have fallen by 35–40 million — roughly one-third of its total — through combat, famine, and disease.",
    casualties: "~30–40 million"
  },
  {
    id: "mongol-abbasid",
    name: "Mongol Destruction of Baghdad",
    startYear: 1258, endYear: 1260,
    type: "genocide", region: "middle_east",
    sourceCoords: [106.9, 47.9], destCoords: [44.4, 33.3],
    description: "Hulagu Khan sacked Baghdad, ending the Abbasid Caliphate and the Islamic Golden Age. The Grand Library of Baghdad was destroyed. Contemporary accounts describe the Tigris running black with ink and red with blood.",
    casualties: "100,000–800,000"
  },
  {
    id: "hundred-years-war",
    name: "Hundred Years War",
    startYear: 1337, endYear: 1453,
    type: "war", region: "europe",
    sourceCoords: [2.3, 47.0], destCoords: [-1.5, 52.0],
    description: "A prolonged conflict between England and France involving widespread devastation of the French countryside and civilian population. The Black Prince's chevauchées deliberately burned villages and massacred civilians.",
    casualties: "2–3 million"
  },
  {
    id: "black-death-pogroms",
    name: "Black Death Pogroms",
    startYear: 1347, endYear: 1352,
    type: "genocide", region: "europe",
    sourceCoords: [8.0, 48.0],
    description: "As the plague swept Europe, Jewish communities in hundreds of cities were massacred by populations who blamed them for poisoning wells. The Strasbourg massacre burned 2,000 Jews alive. Over 200 Jewish communities were destroyed.",
    casualties: "Tens of thousands massacred"
  },
  {
    id: "ottoman-expansion",
    name: "Ottoman Empire Expansion",
    startYear: 1299, endYear: 1683,
    type: "conquest", region: "middle_east",
    sourceCoords: [29.0, 41.0], destCoords: [18.0, 42.0],
    description: "The Ottoman Empire expanded across three continents through sustained military conquest, incorporating and subordinating diverse populations. The Devshirme system conscripted Christian boys as enslaved soldiers and servants.",
    casualties: "Millions"
  },
  {
    id: "scottish-wars-independence",
    name: "Scottish Wars of Independence",
    startYear: 1296, endYear: 1357,
    type: "war", region: "british_isles",
    sourceCoords: [-1.5, 52.0], destCoords: [-4.0, 57.0],
    description: "Edward I of England invaded Scotland, executing William Wallace and triggering decades of resistance led by Robert the Bruce. English forces used scorched-earth tactics; Scottish forces raided northern England repeatedly. Scotland retained independence.",
    casualties: "Hundreds of thousands"
  },
  {
    id: "sengoku",
    name: "Japanese Sengoku Period",
    startYear: 1467, endYear: 1615,
    type: "civil_war", region: "east_asia",
    sourceCoords: [136.0, 35.0],
    description: "A century of near-constant civil war in Japan between feudal lords, featuring widespread siege warfare, the Battle of Sekigahara (90,000 dead), famine, and population displacement before Tokugawa unification.",
    casualties: "Hundreds of thousands"
  },
  // ── EARLY MODERN ─────────────────────────────────────────────────────────
  {
    id: "jewish-expulsion-spain",
    name: "Spanish Inquisition & Jewish Expulsion",
    startYear: 1478, endYear: 1492,
    type: "diaspora", region: "europe",
    sourceCoords: [-3.7, 40.4], destCoords: [29.0, 41.0],
    description: "The Spanish Inquisition tortured and executed thousands of Jewish converts suspected of secretly practicing Judaism. The 1492 Alhambra Decree expelled all remaining Jews — an estimated 40,000–200,000 people — who fled primarily to the Ottoman Empire, North Africa, and the Netherlands.",
    casualties: "2,000+ executed; 100,000–200,000 expelled"
  },
  {
    id: "spanish-conquest-americas",
    name: "Spanish Conquest of the Americas",
    startYear: 1492, endYear: 1600,
    type: "conquest", region: "americas",
    sourceCoords: [-3.7, 40.4], destCoords: [-90.0, 15.0],
    description: "Spain conquered the Aztec and Inca empires through warfare, enslavement, and introduced disease that killed an estimated 90% of indigenous populations. The encomienda system enslaved millions for silver mining.",
    casualties: "25–50 million (disease + violence)"
  },
  {
    id: "conquest-inca",
    name: "Spanish Conquest of the Inca Empire",
    startYear: 1532, endYear: 1572,
    type: "conquest", region: "south_america",
    sourceCoords: [-3.7, 40.4], destCoords: [-76.0, -12.0],
    description: "Francisco Pizarro captured and executed Inca Emperor Atahualpa despite receiving a ransom room full of gold. Spanish forces systematically destroyed Inca infrastructure, religion, and political order. Forced labor in Potosí silver mines killed an estimated 8 million indigenous people.",
    casualties: "8 million (forced labor) + millions from disease"
  },
  {
    id: "transatlantic-slavery",
    name: "Transatlantic Slave Trade",
    startYear: 1501, endYear: 1867,
    type: "slavery", region: "west_africa",
    sourceCoords: [-5.0, 8.0], destCoords: [-65.0, 15.0],
    description: "An estimated 12.5 million Africans were forcibly transported to the Americas. Approximately 1.8 million died in transit during the Middle Passage. West African kingdoms including Dahomey and Ashanti participated actively as suppliers. The trade funded European and American industrialization.",
    casualties: "12.5 million enslaved; 1.8 million died in transit"
  },
  {
    id: "dahomey-slave-trade",
    name: "Dahomey Kingdom Slave Raids",
    startYear: 1600, endYear: 1894,
    type: "slavery", region: "west_africa",
    sourceCoords: [2.4, 6.4], destCoords: [-65.0, 15.0],
    description: "The Kingdom of Dahomey (modern Benin) built its economy on raiding neighboring peoples and selling them to European slave traders at the port of Ouidah. Annual raids captured thousands; the kingdom sold an estimated 1–3 million people over two centuries. The royal palace was decorated with skulls of defeated enemies.",
    casualties: "1–3 million sold into slavery"
  },
  {
    id: "ashanti-slave-trade",
    name: "Ashanti Empire Slave Trade",
    startYear: 1701, endYear: 1896,
    type: "slavery", region: "west_africa",
    sourceCoords: [-1.5, 6.7], destCoords: [-5.0, 8.0],
    description: "The Ashanti Empire (modern Ghana) was a major supplier to the Transatlantic trade, raiding northern neighbors and selling captives to European merchants at the coast. Domestic slavery within Ashanti was also widespread — an estimated 35% of the Ashanti population were enslaved.",
    casualties: "Hundreds of thousands"
  },
  {
    id: "colonization-brazil",
    name: "Portuguese Colonization of Brazil",
    startYear: 1500, endYear: 1822,
    type: "colonialism", region: "south_america",
    sourceCoords: [-9.1, 38.7], destCoords: [-52.0, -10.0],
    description: "Portugal colonized Brazil through systematic dispossession and enslavement of indigenous peoples, followed by the mass importation of African slaves. Brazil received nearly 5 million enslaved Africans — 40% of the entire transatlantic trade — and was the last country in the Western Hemisphere to abolish slavery (1888).",
    casualties: "Millions enslaved"
  },
  {
    id: "brazil-slave-trade",
    name: "African Slave Trade to Brazil",
    startYear: 1550, endYear: 1888,
    type: "slavery", region: "west_africa",
    sourceCoords: [-5.0, 8.0], destCoords: [-43.2, -22.9],
    description: "Brazil imported approximately 4.9 million enslaved Africans — more than any other country. The brutal sugar and coffee plantation economies had extremely high mortality rates, requiring constant importation. Slavery was not abolished until 1888, 23 years after the United States.",
    casualties: "~4.9 million enslaved"
  },
  {
    id: "mughal-conquests",
    name: "Mughal Empire Conquests",
    startYear: 1526, endYear: 1707,
    type: "conquest", region: "south_asia",
    sourceCoords: [68.0, 34.0], destCoords: [78.0, 23.0],
    description: "The Mughal Empire conquered much of the Indian subcontinent through warfare. Aurangzeb's campaigns destroyed thousands of Hindu temples and imposed the jizya tax on non-Muslims. The empire's later wars killed millions and weakened India before British colonization.",
    casualties: "Millions"
  },
  {
    id: "english-civil-war",
    name: "English Civil War",
    startYear: 1642, endYear: 1651,
    type: "civil_war", region: "british_isles",
    sourceCoords: [-1.5, 52.0],
    description: "Parliament versus Crown. The conflict resulted in the execution of King Charles I — the first judicial killing of a European monarch — and the temporary abolition of the monarchy. The war killed an estimated 190,000 combatants and 130,000 civilians across England, Scotland, and Ireland.",
    casualties: "~190,000 combatants; 130,000 civilian deaths"
  },
  {
    id: "cromwell-ireland",
    name: "Cromwell's Conquest of Ireland",
    startYear: 1649, endYear: 1653,
    type: "genocide", region: "british_isles",
    sourceCoords: [-0.1, 51.5], destCoords: [-8.0, 53.3],
    description: "Oliver Cromwell's New Model Army massacred the garrisons and civilian populations of Drogheda and Wexford, transported thousands to Barbados as indentured servants, and seized Catholic land across Ireland for Protestant settlers. Ireland's population fell by 20–40% through war, plague, and famine.",
    casualties: "~600,000 deaths (20–40% of Irish population)"
  },
  {
    id: "thirty-years-war",
    name: "Thirty Years War",
    startYear: 1618, endYear: 1648,
    type: "war", region: "europe",
    sourceCoords: [13.4, 52.5], destCoords: [5.0, 50.0],
    description: "A devastating European religious-political conflict fought primarily in the Holy Roman Empire. Germany lost 25–40% of its population to war, famine, and disease. The Sack of Magdeburg (1631) killed 20,000 civilians in a single day.",
    casualties: "8 million"
  },
  {
    id: "american-chattel-slavery",
    name: "American Chattel Slavery",
    startYear: 1619, endYear: 1865,
    type: "slavery", region: "north_america",
    sourceCoords: [-5.0, 8.0], destCoords: [-85.0, 33.0],
    description: "Hereditary race-based slavery in the American colonies and later United States. By 1860, nearly 4 million people were enslaved in a system that defined the economy of the South. The 'domestic slave trade' forcibly moved 1 million enslaved people from the Upper to Lower South between 1790–1860.",
    casualties: "4 million enslaved"
  },
  {
    id: "native-american-dispossession",
    name: "Dispossession of Native Americans",
    startYear: 1607, endYear: 1890,
    type: "genocide", region: "north_america",
    sourceCoords: [-70.0, 42.0], destCoords: [-100.0, 40.0],
    description: "Systematic removal, forced marches, massacres, and biological warfare against Indigenous peoples of North America. The Trail of Tears (1838–39) killed 4,000–8,000 Cherokee. The Wounded Knee massacre (1890) killed 250–300 Lakota. Total indigenous population fell from 5–15 million to under 250,000.",
    casualties: "Millions (disease + violence)"
  },
  // ── 18th–19th CENTURY ────────────────────────────────────────────────────
  {
    id: "british-india",
    name: "British Colonization of India",
    startYear: 1757, endYear: 1947,
    type: "colonialism", region: "south_asia",
    sourceCoords: [-0.1, 51.5], destCoords: [80.0, 22.0],
    description: "Britain extracted vast wealth from India while causing famines that killed 12–29 million. The Great Bengal Famine (1770) killed 10 million; the 1876–79 famine 5–10 million. The 1857 uprising was suppressed with mass executions. Britain dismantled India's textile industry, making it a raw-material exporter.",
    casualties: "12–29 million (famines)"
  },
  {
    id: "highland-clearances",
    name: "Highland Clearances",
    startYear: 1750, endYear: 1860,
    type: "colonialism", region: "british_isles",
    sourceCoords: [-4.2, 57.5], destCoords: [-75.0, 46.0],
    description: "Scottish Highland landlords forcibly evicted tens of thousands of Gaelic-speaking crofters to make way for sheep farming. Villages were burned; families placed on emigrant ships. Over 150,000 Highlanders were displaced, mostly to Canada, Australia, and New Zealand — destroying the Gaelic clan culture.",
    casualties: "~150,000 displaced"
  },
  {
    id: "napoleonic-wars",
    name: "Napoleonic Wars",
    startYear: 1803, endYear: 1815,
    type: "war", region: "europe",
    sourceCoords: [2.3, 48.8], destCoords: [20.0, 53.0],
    description: "France under Napoleon fought most of Europe. The Russian campaign alone killed 400,000 soldiers. Spain lost 215,000–375,000 civilians in the Peninsular War. Total deaths across all theatres reached 3.5–6 million.",
    casualties: "3.5–6 million"
  },
  {
    id: "british-colonization-australia",
    name: "British Colonization of Australia",
    startYear: 1788, endYear: 1901,
    type: "colonialism", region: "oceania",
    sourceCoords: [-0.1, 51.5], destCoords: [135.0, -26.0],
    description: "Britain established a penal colony in 1788 and steadily expanded across the continent, seizing Aboriginal land through terra nullius doctrine. Aboriginal Australians were systematically dispossessed, massacred, and subjected to forced child removal (the Stolen Generations).",
    casualties: "Millions displaced; population fell from ~750,000 to 93,000"
  },
  {
    id: "australian-frontier-wars",
    name: "Australian Frontier Wars",
    startYear: 1788, endYear: 1934,
    type: "genocide", region: "oceania",
    sourceCoords: [135.0, -26.0],
    description: "Over 150 years, British settlers and colonial/state forces massacred Aboriginal Australians in over 400 documented frontier conflicts. The Myall Creek Massacre (1838), Pinjarra (1834), and dozens of others killed thousands. Poison was used in at least some incidents. The Tasmanian Aboriginal population was effectively exterminated.",
    casualties: "~100,000+ killed"
  },
  {
    id: "british-colonization-nz",
    name: "British Colonization of New Zealand",
    startYear: 1840, endYear: 1907,
    type: "colonialism", region: "oceania",
    sourceCoords: [-0.1, 51.5], destCoords: [172.6, -41.3],
    description: "The Treaty of Waitangi (1840) was meant to protect Māori rights but was immediately violated. Over 3 million acres of Māori land were confiscated ('raupatu') following the New Zealand Wars. Māori population fell from ~100,000 to 42,000 by 1900.",
    casualties: "Māori population fell by ~60%"
  },
  {
    id: "maori-wars",
    name: "New Zealand Wars (Māori Wars)",
    startYear: 1845, endYear: 1872,
    type: "war", region: "oceania",
    sourceCoords: [175.0, -37.8],
    description: "A series of conflicts between Māori iwi and British colonial forces over land sovereignty. The Waikato War (1863–64) was the largest, with 14,000 imperial and colonial troops deployed. Māori resistance movements including the Kingitanga fought for two decades.",
    casualties: "~3,000 killed"
  },
  {
    id: "indian-indenture",
    name: "Indian Indenture System",
    startYear: 1838, endYear: 1917,
    type: "slavery", region: "south_asia",
    sourceCoords: [80.0, 22.0], destCoords: [-61.0, 10.0],
    description: "After emancipation, Britain transported 1.5 million Indians as indentured laborers to colonies worldwide — Trinidad, Guyana, Fiji, South Africa, Mauritius. Contracts were obtained through deception; conditions closely resembled slavery. Described by critics as 'a new system of slavery.'",
    casualties: "1.5 million indentured"
  },
  {
    id: "saharan-slave-trade",
    name: "Trans-Saharan Slave Trade",
    startYear: 700, endYear: 1900,
    type: "slavery", region: "north_africa",
    sourceCoords: [2.0, 14.0], destCoords: [13.0, 32.0],
    description: "Arab and Berber traders transported enslaved sub-Saharan Africans north across the Sahara for over 1,000 years. The trade moved an estimated 6–7 million people. Routes through Libya, Algeria, and Egypt supplied North African, Ottoman, and Middle Eastern markets with enslaved workers and concubines.",
    casualties: "~6–7 million enslaved"
  },
  {
    id: "taiping-rebellion",
    name: "Taiping Rebellion",
    startYear: 1850, endYear: 1864,
    type: "civil_war", region: "east_asia",
    sourceCoords: [110.0, 25.0],
    description: "The deadliest civil war in history. A quasi-Christian movement established the Heavenly Kingdom of Peace and challenged Qing rule. The conflict killed an estimated 20–30 million people and devastated southern China's economy for decades.",
    casualties: "20–30 million"
  },
  {
    id: "opium-wars",
    name: "Opium Wars",
    startYear: 1839, endYear: 1860,
    type: "war", region: "east_asia",
    sourceCoords: [-0.1, 51.5], destCoords: [121.5, 31.2],
    description: "Britain and France forced China to legalize the opium trade through military force, dismantling Chinese sovereignty and extracting treaty ports. Britain grew opium in India and flooded China with it — by 1900 an estimated 13 million Chinese were addicted.",
    casualties: "Tens of thousands"
  },
  {
    id: "american-civil-war",
    name: "American Civil War",
    startYear: 1861, endYear: 1865,
    type: "civil_war", region: "north_america",
    sourceCoords: [-85.0, 33.0], destCoords: [-77.0, 38.9],
    description: "The United States fought itself over slavery and secession. Total deaths of 620,000–850,000 made it the deadliest American conflict. The Emancipation Proclamation (1863) and 13th Amendment ended chattel slavery.",
    casualties: "620,000–850,000"
  },
  {
    id: "irish-famine",
    name: "Irish Famine & Mass Emigration",
    startYear: 1845, endYear: 1852,
    type: "genocide", region: "british_isles",
    sourceCoords: [-8.0, 53.3], destCoords: [-76.0, 40.0],
    description: "The potato blight caused catastrophic famine in Ireland, killing approximately 1 million and driving 2 million to emigrate — primarily to the US and Canada. The British government continued exporting food from Ireland throughout the famine. Ireland's population fell by 25% and never fully recovered.",
    casualties: "~1 million dead; 2 million emigrated"
  },
  {
    id: "french-colonial",
    name: "French Colonial Empire",
    startYear: 1830, endYear: 1962,
    type: "colonialism", region: "north_africa",
    sourceCoords: [2.3, 48.8], destCoords: [3.0, 20.0],
    description: "France conquered Algeria (killing 500,000–1 million in the pacification campaign), West Africa, Indochina, and Madagascar through brutal military campaigns, using forced labor, mass executions, and collective punishment. The Foreign Legion committed systematic atrocities.",
    casualties: "Millions"
  },
  {
    id: "anglo-zulu",
    name: "Anglo-Zulu & Anglo-Boer Wars",
    startYear: 1879, endYear: 1902,
    type: "war", region: "southern_africa",
    sourceCoords: [-0.1, 51.5], destCoords: [31.0, -28.0],
    description: "Britain invaded Zululand (1879) and subsequently fought the Boers in South Africa (1899–1902). The Second Boer War's concentration camps killed 27,000 Boer women and children and ~20,000 Black Africans through disease and starvation.",
    casualties: "~50,000+"
  },
  {
    id: "scramble-africa",
    name: "European Scramble for Africa",
    startYear: 1881, endYear: 1914,
    type: "colonialism", region: "africa",
    sourceCoords: [10.0, 50.0], destCoords: [20.0, 5.0],
    description: "European powers divided Africa at the 1884 Berlin Conference and conquered the continent through military force. Colonial resistance was met with overwhelming violence — Germany's genocide of the Herero and Nama (1904–08), France's massacres in Madagascar, and Italy's use of poison gas in Libya.",
    casualties: "Millions"
  },
  {
    id: "belgian-congo",
    name: "Belgian Congo Atrocities",
    startYear: 1885, endYear: 1908,
    type: "genocide", region: "central_africa",
    sourceCoords: [4.3, 50.8], destCoords: [24.0, -4.0],
    description: "King Leopold II ran the Congo as a private colony, using systematic mutilation (severing hands to prove bullets weren't wasted), hostage-taking, and murder to force rubber production. Population fell by an estimated 10 million through killing, disease, famine, and flight.",
    casualties: "~10 million"
  },
  {
    id: "paraguayan-war",
    name: "Paraguayan War (War of the Triple Alliance)",
    startYear: 1864, endYear: 1870,
    type: "war", region: "south_america",
    sourceCoords: [-57.6, -25.3],
    description: "Paraguay fought Brazil, Argentina, and Uruguay simultaneously. The most destructive war in Latin American history — Paraguay lost an estimated 60–69% of its total population, and 90% of its adult male population. Paraguay has never fully recovered demographically.",
    casualties: "~400,000 Paraguayans (60–69% of population)"
  },
  {
    id: "anglo-irish-war",
    name: "Irish War of Independence",
    startYear: 1919, endYear: 1921,
    type: "war", region: "british_isles",
    sourceCoords: [-0.1, 51.5], destCoords: [-7.5, 53.3],
    description: "The Irish Republican Army fought a guerrilla campaign against British rule. British forces (including the notorious 'Black and Tans') retaliated with massacres, burning of towns including Cork, and mass internment. Ended with the Anglo-Irish Treaty creating the Irish Free State.",
    casualties: "~2,000 killed"
  },
  // ── 20th CENTURY ─────────────────────────────────────────────────────────
  {
    id: "ww1",
    name: "World War I",
    startYear: 1914, endYear: 1918,
    type: "war", region: "europe",
    sourceCoords: [13.4, 52.5], destCoords: [5.0, 50.0],
    description: "The Great War killed 20 million people in industrial-scale trench warfare. Empires collapsed and new national conflicts were seeded worldwide. Chemical weapons — chlorine and mustard gas — were used on a mass scale for the first time.",
    casualties: "20 million"
  },
  {
    id: "armenian-genocide",
    name: "Armenian Genocide",
    startYear: 1915, endYear: 1923,
    type: "genocide", region: "middle_east",
    sourceCoords: [29.0, 41.0], destCoords: [44.0, 40.0],
    description: "The Ottoman government systematically massacred and deported 1–1.5 million Armenians in the first genocide of the 20th century. Death marches through the Syrian desert killed tens of thousands; survivors were scattered across the diaspora.",
    casualties: "1–1.5 million"
  },
  {
    id: "russian-civil-war",
    name: "Russian Civil War",
    startYear: 1917, endYear: 1922,
    type: "civil_war", region: "europe",
    sourceCoords: [37.6, 55.7],
    description: "Bolsheviks fought multiple factions including the White Army, foreign interventionists, and nationalist movements. Red Terror and White Terror killed hundreds of thousands; famine and disease killed millions more.",
    casualties: "5–9 million"
  },
  {
    id: "soviet-gulag",
    name: "Soviet Gulag System",
    startYear: 1918, endYear: 1953,
    type: "slavery", region: "europe",
    sourceCoords: [37.6, 55.7], destCoords: [62.0, 62.0],
    description: "An estimated 18 million people passed through Soviet forced labor camps in Siberia and Central Asia. At least 1.5–1.8 million died from execution, starvation, and overwork. The Gulag provided cheap labor for Soviet industrialization.",
    casualties: "1.5–1.8 million deaths; 18 million imprisoned"
  },
  {
    id: "holodomor",
    name: "Holodomor",
    startYear: 1932, endYear: 1933,
    type: "genocide", region: "europe",
    sourceCoords: [32.0, 49.0],
    description: "Stalin's forced collectivization caused a devastating famine in Ukraine, killing 3.5–7.5 million people. The Soviet government confiscated all food while peasants starved, and blocked emigration. Ukraine now legally recognizes this as genocide; Russia denies it.",
    casualties: "3.5–7.5 million"
  },
  {
    id: "chinese-civil-war",
    name: "Chinese Civil War",
    startYear: 1927, endYear: 1949,
    type: "civil_war", region: "east_asia",
    sourceCoords: [116.4, 35.0],
    description: "Nationalists and Communists fought for control of China, interrupted by the Japanese invasion. Millions died in combat and associated famines. The Communists won in 1949; the Nationalists retreated to Taiwan.",
    casualties: "8 million+"
  },
  {
    id: "japan-china",
    name: "Japanese Invasion of China",
    startYear: 1937, endYear: 1945,
    type: "war", region: "east_asia",
    sourceCoords: [139.7, 35.7], destCoords: [118.8, 32.1],
    description: "Japan invaded and occupied large parts of China, committing the Nanjing Massacre (200,000–300,000 killed in 6 weeks), widespread biological warfare (Unit 731), and systematic use of forced labor and sexual slavery ('comfort women').",
    casualties: "14–20 million Chinese deaths"
  },
  {
    id: "ww2",
    name: "World War II",
    startYear: 1939, endYear: 1945,
    type: "war", region: "europe",
    sourceCoords: [13.4, 52.5], destCoords: [30.0, 54.0],
    description: "The deadliest conflict in human history, killing 70–85 million people across six continents through combat, strategic bombing of civilians, famine, and genocide. The Pacific War, Eastern Front, and Holocaust were simultaneous apocalyptic events.",
    casualties: "70–85 million"
  },
  {
    id: "holocaust",
    name: "The Holocaust",
    startYear: 1941, endYear: 1945,
    type: "genocide", region: "europe",
    sourceCoords: [13.4, 52.5],
    description: "Nazi Germany systematically murdered 6 million Jews — two-thirds of European Jewry — along with 5–6 million others including Roma, disabled people, gay men, Soviet POWs, and political prisoners. Industrial death camps including Auschwitz-Birkenau killed 1.1 million people.",
    casualties: "11–17 million"
  },
  {
    id: "partition-india",
    name: "Partition of India",
    startYear: 1947, endYear: 1948,
    type: "civil_war", region: "south_asia",
    sourceCoords: [74.0, 31.0],
    description: "The British partition of India into India and Pakistan triggered the largest mass migration in history (14 million people) and communal violence between Hindus, Muslims, and Sikhs. Caravans of refugees were massacred on both sides of the border.",
    casualties: "200,000–2 million"
  },
  {
    id: "apartheid",
    name: "South African Apartheid",
    startYear: 1948, endYear: 1994,
    type: "colonialism", region: "southern_africa",
    sourceCoords: [18.4, -33.9],
    description: "South Africa institutionalized racial segregation and white minority rule, dispossessing and brutalizing the Black majority population for 46 years. The Sharpeville Massacre (1960), Soweto Uprising (1976), and systematic torture of political prisoners marked this era.",
    casualties: "Systemic oppression of millions"
  },
  {
    id: "north-korea-camps",
    name: "North Korean Prison Camp System",
    startYear: 1948, endYear: 2026,
    type: "slavery", region: "east_asia",
    sourceCoords: [126.0, 39.0],
    ongoing: true,
    description: "An estimated 80,000–120,000 people are currently held in North Korean political prison camps (kwanliso) under conditions of forced labor, torture, and starvation. Three generations of a family can be imprisoned for one member's 'crime.' The camps have operated continuously since the 1940s.",
    casualties: "~400,000 deaths (est.)"
  },
  {
    id: "korean-war",
    name: "Korean War",
    startYear: 1950, endYear: 1953,
    type: "war", region: "east_asia",
    sourceCoords: [-77.0, 38.9], destCoords: [127.0, 37.5],
    description: "A brutal conflict that divided Korea along the 38th parallel. US-led bombing destroyed most North Korean cities — more bombs were dropped on Korea than on Germany in WWII. An armistice, not peace treaty, ended active combat. Korea remains divided.",
    casualties: "2.5–5 million"
  },
  {
    id: "algerian-war",
    name: "Algerian War of Independence",
    startYear: 1954, endYear: 1962,
    type: "war", region: "north_africa",
    sourceCoords: [2.3, 48.8], destCoords: [3.0, 28.0],
    description: "France fought to retain Algeria as a colony, using systematic torture, mass executions, and internment camps. Over 1 million Algerians were killed. The FLN's use of terrorism was countered by French paratrooper 'enhanced interrogation' methods that became a manual for later regimes.",
    casualties: "~1 million Algerians"
  },
  {
    id: "great-leap-famine",
    name: "Mao's Great Leap Forward Famine",
    startYear: 1959, endYear: 1961,
    type: "genocide", region: "east_asia",
    sourceCoords: [116.4, 35.0],
    description: "Mao Zedong's forced collectivization, unrealistic grain quotas, and suppression of reports of starvation caused the deadliest famine in history. Grain was exported for foreign currency while peasants died. Local officials who reported death counts were punished.",
    casualties: "15–55 million"
  },
  {
    id: "vietnam-war",
    name: "Vietnam War",
    startYear: 1955, endYear: 1975,
    type: "war", region: "southeast_asia",
    sourceCoords: [-77.0, 38.9], destCoords: [106.0, 17.0],
    description: "The United States dropped more bombs on Vietnam, Laos, and Cambodia than on all of WWII combined. Agent Orange defoliated 4.5 million acres. 2–3.5 million Vietnamese died alongside 58,000 Americans. The My Lai Massacre killed 347–504 unarmed civilians.",
    casualties: "2–3.5 million"
  },
  {
    id: "cambodian-genocide",
    name: "Cambodian Genocide",
    startYear: 1975, endYear: 1979,
    type: "genocide", region: "southeast_asia",
    sourceCoords: [104.9, 11.6],
    description: "The Khmer Rouge under Pol Pot killed 1.5–2 million Cambodians (25% of the population) through execution, forced labor, and starvation. Cities were forcibly evacuated; intellectuals, ethnic minorities, and the educated were systematically eliminated.",
    casualties: "1.5–2 million"
  },
  {
    id: "iran-iraq-war",
    name: "Iran–Iraq War",
    startYear: 1980, endYear: 1988,
    type: "war", region: "middle_east",
    sourceCoords: [44.4, 33.3], destCoords: [51.4, 35.7],
    description: "Iraq invaded Iran, beginning an 8-year war of attrition featuring the first battlefield use of chemical weapons since WWI. Iraq gassed Iranian troops and Kurdish civilians at Halabja. Both sides suffered catastrophic losses for no territorial gain.",
    casualties: "500,000–1 million"
  },
  {
    id: "iraqi-kurdish-genocide",
    name: "Iraqi Kurdish Genocide (Anfal Campaign)",
    startYear: 1986, endYear: 1989,
    type: "genocide", region: "middle_east",
    sourceCoords: [44.4, 33.3], destCoords: [44.0, 36.5],
    description: "Saddam Hussein conducted the Anfal campaign against Iraqi Kurds, including the chemical weapons attack on Halabja (March 1988) that killed 3,000–5,000 civilians in hours. 4,000 Kurdish villages were destroyed; 50,000–182,000 people killed.",
    casualties: "50,000–182,000"
  },
  {
    id: "afghan-wars",
    name: "Afghan Wars (Soviet & US Occupations)",
    startYear: 1979, endYear: 2021,
    type: "war", region: "asia",
    sourceCoords: [37.6, 55.7], destCoords: [69.2, 34.5],
    description: "First the Soviet Union (1979–89) then the United States and NATO (2001–21) waged decades of war in Afghanistan. The Soviets killed 1–2 million Afghans and drove 6 million into exile. The US campaign displaced millions more and ended with the Taliban reconquering the country in 2021.",
    casualties: "1–2 million+"
  },
  {
    id: "argentina-dirty-war",
    name: "Argentine Dirty War",
    startYear: 1976, endYear: 1983,
    type: "genocide", region: "south_america",
    sourceCoords: [-64.2, -31.4],
    description: "Argentina's military junta systematically disappeared, tortured, and murdered 10,000–30,000 political opponents. Victims were thrown from aircraft into the Río de la Plata. Babies born to disappeared mothers were given to military families. The junta operated with US support during Operation Condor.",
    casualties: "10,000–30,000"
  },
  {
    id: "rwandan-genocide",
    name: "Rwandan Genocide",
    startYear: 1994, endYear: 1994,
    type: "genocide", region: "east_africa",
    sourceCoords: [30.1, -1.9],
    description: "In 100 days, Hutu extremists used radio broadcasts to orchestrate the killing of 500,000–800,000 Tutsi and moderate Hutu. Machetes were the primary weapon. The UN and international community refused to intervene despite advance warning and ignored the genocide as it unfolded.",
    casualties: "500,000–800,000"
  },
  {
    id: "yugoslav-wars",
    name: "Yugoslav Wars / Srebrenica Genocide",
    startYear: 1991, endYear: 2001,
    type: "war", region: "europe",
    sourceCoords: [16.4, 44.8], destCoords: [18.4, 43.8],
    description: "The breakup of Yugoslavia produced ethnic cleansing campaigns, the 1,425-day siege of Sarajevo, and the Srebrenica massacre (1995) where Bosnian Serb forces murdered 8,000 Bosniak men and boys in 5 days — the first genocide on European soil since the Holocaust.",
    casualties: "130,000–140,000"
  },
  {
    id: "congo-wars",
    name: "Congo Wars (1996–2003)",
    startYear: 1996, endYear: 2003,
    type: "war", region: "central_africa",
    sourceCoords: [24.0, -4.0],
    description: "Two overlapping wars involving nine nations in the Democratic Republic of Congo produced the deadliest conflict since WWII. Mass rape was used as a weapon of war; child soldiers were conscripted by all sides. Control of mineral wealth drove the conflict.",
    casualties: "5.4 million"
  },
  // ── RECENT & ONGOING (21st CENTURY / 2026) ───────────────────────────────
  {
    id: "darfur-genocide",
    name: "Darfur Genocide",
    startYear: 2003, endYear: 2020,
    type: "genocide", region: "africa",
    sourceCoords: [25.0, 14.0],
    description: "The Sudanese government and allied Janjaweed militias conducted a campaign of mass murder, rape, and destruction against non-Arab ethnic groups in Darfur. 200,000–400,000 people were killed and 2.5 million displaced. The International Criminal Court issued arrest warrants for President Omar al-Bashir.",
    casualties: "200,000–400,000"
  },
  {
    id: "syrian-civil-war",
    name: "Syrian Civil War",
    startYear: 2011, endYear: 2024,
    type: "civil_war", region: "middle_east",
    sourceCoords: [36.3, 33.5],
    description: "Uprising against Assad became a multi-sided proxy war involving Russia, Iran, Turkey, the US, and Gulf states. 13 million Syrians were displaced — the largest refugee crisis since WWII. Chemical weapon attacks on civilians (Ghouta, 2013; Douma, 2018) went unpunished.",
    casualties: "300,000–500,000"
  },
  {
    id: "uyghur-detention",
    name: "Uyghur Mass Detention (Xinjiang)",
    startYear: 2017, endYear: 2026,
    type: "genocide", region: "east_asia",
    sourceCoords: [87.6, 43.8],
    ongoing: true,
    description: "China has detained an estimated 1–1.8 million Uyghurs and other Muslims in Xinjiang in 'vocational education' internment camps. Evidence documents forced sterilization, torture, forced labor, and cultural destruction. China denies the characterization as genocide.",
    casualties: "1–1.8 million detained"
  },
  {
    id: "yemeni-civil-war",
    name: "Yemeni Civil War",
    startYear: 2014, endYear: 2026,
    type: "civil_war", region: "middle_east",
    sourceCoords: [44.2, 15.4],
    ongoing: true,
    description: "A civil war between the Houthi movement and the Saudi-led coalition (backed by US weapons and intelligence) has created one of the world's worst humanitarian crises. Saudi airstrikes have repeatedly hit hospitals, markets, and weddings. Over 21 million Yemenis require humanitarian assistance.",
    casualties: "150,000+ direct; 377,000 total (est.)"
  },
  {
    id: "ukraine-russia-war",
    name: "Russia–Ukraine War",
    startYear: 2022, endYear: 2026,
    type: "ongoing", region: "europe",
    sourceCoords: [37.6, 55.7], destCoords: [31.0, 50.5],
    ongoing: true,
    description: "Russia's full-scale invasion of Ukraine (Feb 24, 2022) has killed 50,000–200,000+ combatants on both sides and tens of thousands of Ukrainian civilians. Russian forces have bombed hospitals, apartment blocks, and energy infrastructure. The war represents the largest land conflict in Europe since WWII.",
    casualties: "50,000–200,000+ combatants; 10,000+ civilians"
  },
  {
    id: "gaza-conflict",
    name: "Gaza War (2023–present)",
    startYear: 2023, endYear: 2026,
    type: "ongoing", region: "middle_east",
    sourceCoords: [34.5, 31.5],
    ongoing: true,
    description: "Following the Hamas attacks of October 7, 2023 that killed ~1,200 Israelis, Israel launched a military campaign in Gaza that has killed over 40,000 Palestinians (majority civilians), displaced 1.9 million of Gaza's 2.3 million population, and created famine conditions. The ICJ is investigating genocide charges.",
    casualties: "~1,200 Israelis (Oct 7); 40,000+ Palestinians killed"
  },
  {
    id: "sudan-civil-war-2023",
    name: "Sudan Civil War (2023–present)",
    startYear: 2023, endYear: 2026,
    type: "ongoing", region: "africa",
    sourceCoords: [32.5, 15.6],
    ongoing: true,
    description: "War between the Sudanese Armed Forces and the Rapid Support Forces paramilitary broke out in April 2023. The RSF has committed mass atrocities in Darfur, including ethnic cleansing of the Masalit people. Over 10 million people have been displaced — the world's largest displacement crisis in 2024.",
    casualties: "10,000+ killed; 10 million+ displaced"
  },
  {
    id: "drc-ongoing",
    name: "DRC Conflict & M23 (Ongoing)",
    startYear: 2012, endYear: 2026,
    type: "ongoing", region: "central_africa",
    sourceCoords: [29.2, -1.5],
    ongoing: true,
    description: "Eastern DRC has experienced near-continuous armed conflict since the 1990s. The M23 rebel group (backed by Rwanda) captured Goma in 2024. Over 7 million people are internally displaced — the largest displacement crisis in Africa. Exploitation of coltan, gold, and other minerals drives continued fighting.",
    casualties: "Millions since 1990s; 7M+ displaced"
  },
  {
    id: "myanmar-civil-war",
    name: "Myanmar Civil War (2021–present)",
    startYear: 2021, endYear: 2026,
    type: "ongoing", region: "southeast_asia",
    sourceCoords: [96.1, 19.7],
    ongoing: true,
    description: "Following the military coup of February 2021, the Myanmar junta has waged war against the civilian population and resistance forces (PDFs). Airstrikes on villages, mass executions, and use of artillery against civilians. The junta has lost control of much of the country to resistance forces by 2024.",
    casualties: "5,000+ civilians killed; 2.6M displaced"
  },
  {
    id: "sahel-insurgency",
    name: "Sahel Jihadist Insurgency",
    startYear: 2012, endYear: 2026,
    type: "ongoing", region: "africa",
    sourceCoords: [-5.0, 14.0],
    ongoing: true,
    description: "Al-Qaeda and ISIS-affiliated groups have destabilized Mali, Burkina Faso, Niger, and Nigeria since 2012. Mass atrocities against civilians, displacement of 3+ million people, and the collapse of government control across vast areas of the Sahel. Military coups have swept the region as populations lose faith in governments.",
    casualties: "20,000+ killed; 3M+ displaced"
  },
  {
    id: "haiti-crisis",
    name: "Haiti Gang Crisis & State Collapse",
    startYear: 2021, endYear: 2026,
    type: "ongoing", region: "north_america",
    sourceCoords: [-72.3, 18.5],
    ongoing: true,
    description: "Following the assassination of President Moïse (2021), Haiti descended into gang control of 80%+ of Port-au-Prince. Mass killings, sexual violence, and kidnapping are endemic. 5 million Haitians face food insecurity. The state has functionally collapsed; a Kenyan-led international security mission deployed in 2024.",
    casualties: "5,000+ killed (2023–24); 580,000 displaced"
  },
  {
    id: "colombian-conflict",
    name: "Colombian Armed Conflict",
    startYear: 1964, endYear: 2026,
    type: "ongoing", region: "south_america",
    sourceCoords: [-74.1, 4.7],
    ongoing: true,
    description: "The world's longest-running guerrilla conflict. FARC, ELN, and paramilitary groups have fought the Colombian state for 60+ years. The 2016 peace deal with FARC partially ended that strand; dissident groups and ELN continue fighting. 9 million people are registered as victims of the conflict.",
    casualties: "220,000+ killed; 8M+ displaced"
  },
];
