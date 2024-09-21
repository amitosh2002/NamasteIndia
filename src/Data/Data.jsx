const data = [
  {
    id: 0,
    name: "Nubra Valley ",
    category: "explore",
    image:
      "https://www.fabhotels.com/blog/wp-content/uploads/2019/12/Ladakh-winter.jpg",

    description:
      "The barren rugged view of this valley, which lies between Kashmir and Tibet, will take your breath away. You can feast your eyes on charming monasteries, the Nubra and Shyok rivers, Bactrian camels, and sand dunes. A photographer’s delight, the valley is home to people of the Balti culture in Turtuk.",
    time: "Best time to visit – June to August",
    ideal: "Ideal duration – 2 days",
    reach:
      "How to reach –\nBy Air: Kushok Bakula Rimpochee Airport in Leh is the nearest airport (162 km), from where you can take a bus or taxi.\nBy Train: Or, you can travel by train to the Leh railway station from Jammu or Kashmir, and then take a taxi or bus.\nBy Road: You can take a taxi from Leh to reach the valley (160 km away)",
    location: "Kashmir",
  },
  {
    id: 1,
    image:
      "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Khajjiar1.jpg",
    name: "Khajjiar ",
    category: "explore",
    description:
      "Popularly known as Mini Switzerland, Khajjiar deserves your attention if you are looking for places in India for honeymoon . The combination of lush green meadows, lofty Himalayas encased in snow and dense forests make this place heavenly. Here, you can enjoy adventures like trekking, zorbing, jungle safari and paragliding.",
    time: "Best time to visit – March to October",
    reach:
      "How to reach –\nBy Air: You can fly to Kangra Airport (109 km from Khajjiar) and then take a taxi.\nBy Train: The closest station is Pathankot (96 km from Khajjiar), from where you can board a taxi.\nBy Road: You can take a taxi from Dalhousie or Chamba (24 km from Khajjiar).",
    ideal: "Ideal duration – 2-3 days",
    try: "Also Read about Skydiving in India",
    location: "punjab",
  },
  {
    id: 2,
    image:
      "https://www.fabhotels.com/blog/wp-content/uploads/2016/02/dal-lake.jpg",

    name: "Dal Lake ",
    category: "explore",

    description:
      "The serene Dal Lake is one of the mostbeautiful places in India to visit before you die. Also known as the Lake of Flowers or Srinagar’s Jewel, it is 1775 m above sea level, and a shikara ride on the lake can lift your spirits instantly.",

    time: "Best time to visit – May to November",

    ideal: "Ideal duration – 1 day (in a houseboat if possible)",
    duration: "1 days",

    reach:
      "How to reach –\nBy Air: You can reach Srinagar International Airport (22 km from Dal Lake) and then take a cab. Or, you can hire a cab to reach Lal Chowk and then board a bus.\nBy Train: The nearest railway station is in Jammu (272 km from Srinagar). You can take a bus or taxi from there.\nBy Road: Take a taxi or bus from Jammu. Srinagar can also be reached via road from Delhi or Chandigarh.",
    location: "punjab",
  },
  {
    id: 3,
    name: "Munnar ",
    category: "explore",
    image:
      "https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Munnar-Kerala-1.jpg",
    description:
      "This idyllic hill station, nestled in the Western Ghats, was once a favourite of the British. Verdant green and rolling hills, beautiful tea plantations, and charming towns make Munnar one of the peaceful and beautiful places in India",
    reach:
      "How to reach –\nBy Air: Fly to Cochin International Airport (104 km from Munnar) and then take a cab.\nBy Train: Take a train to reach the Cochin railway station (125 km from Munnar) and take a cab.\nBy Road: You will get private or location-run buses to Munnar from all important cities in Kerala.",
    time: "Best time to visit – October to November",
    ideal: "Ideal duration – 3 days",
    duration: "1-3 days",
    location: "kerala",
  },
  // -----------------------centuries-----------------------------
  {
    id: 4,
    category: "centuries",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/250ac858821617.Y3JvcCw5NTYsNzQ4LDE5NSww.png",
    name: "Jim Corbett National Park",
    description:
      "Jim Corbett National Park is India's oldest national park, known for its Bengal tigers, diverse wildlife, and beautiful landscapes.The oldest national park in India, Jim Corbett is famed for its healthy population of tigers and elephant safaris. Situated in the Himalayan foothills, it is blessed with a varied landscape of hills, marshy lowlands, rivers and grasslands.Jeep safaris in the park offer a chance to spot the magnificent Bengal tiger as well as leopards, sloth bears, wild elephants and over 600 species of birds",
    time: "November - June",
    location: "Uttarakhand",
    ideal: "Ideal duration – 3 days",
  },
  {
    id: 5,
    category: "centuries",
    name: "Ranthambore National Park",
    image: "https://i.ytimg.com/vi/sn_II75__jM/maxresdefault.jpg",
    description:
      "Ranthambore National Park is famous for its tiger population and historic Ranthambore Fort, offering a great wildlife safari experience.",
    time: "October - June",
    location: "Rajasthan",
    ideal: "Ideal duration – 3 days",
  },
  {
    id: 6,
    category: "centuries",
    name: "Kaziranga National Park",
    image:
      "https://www.newsx.com/wp-content/uploads/2024/03/WEBSITE-TEMPLATE-57-1.png",
    description:
      "Kaziranga National Park is a UNESCO World Heritage Site, home to the largest population of the Indian one-horned rhinoceros.A World Heritage Site, Kaziranga lies in the floodplains of the Brahmaputra River. Its lush forests, tall elephant grass and marshland are home to the world’s largest population of the Great Indian One-Horned Rhinoceros.Jeep and elephant safaris reveal these armor-plated giants along with tigers, swamp deer, wild water buffalo and over 500 species of birds. The park is also well-known for its conservation success story.",
    time: "November - April",
    location: "Assam",
    ideal: "Ideal duration – 3 days",
  },
  {
    id: 7,
    category: "centuries",
    name: "Sundarbans National Park",
    image:
      "https://content.jdmagicbox.com/comp/kolkata/d5/pwfl1510583348b5i8d5/catalogue/sundarban-wild-camp-kolkata-v2zzu.jpg",
    description:
      "Sundarbans National Park is known for its unique mangrove forests and as the habitat of the Bengal tiger.",
    time: "September - March",
    location: "West Bengal",
    ideal: "Ideal duration – 3 days",
  },
  {
    id: 8,
    category: "centuries",
    name: "Periyar Wildlife Sanctuary",
    image:
      "https://i.pinimg.com/736x/0a/c5/67/0ac56753cf8241d03c86fdcf19a4e70e.jpg",
    description:
      "Periyar Wildlife Sanctuary is famous for its elephants and picturesque Periyar Lake, offering boat safaris.",
    time: "October - June",
    location: "Kerala",
    ideal: "Ideal duration – 3 days",
  },
  {
    id: 9,
    category: "centuries",
    name: "Bandhavgarh National Park",
    image: "https://i.ytimg.com/vi/oUVrcJVSfJ4/maxresdefault.jpg",
    description:
      "Bandhavgarh National Park has one of the highest densities of Bengal tigers in India and is known for its rich biodiversity.One of the best managed national parks in India, Bandhavgarh boasts of the highest density of tigers in the country. Set among the Vindhya Hills, its landscape varies from dense sal forests to open grasslands.Along with tigers, regular sightings include leopards, gaur, chital, nilgai and chausingha as well as over 250 species of birds. Jeep safaris and elephant rides are available to spot the wildlife.",
    time: "October - June",
    location: "Madhya Pradesh",
    ideal: "Ideal duration – 3 days",
  },
  {
    id: 10,
    category: "centuries",
    name: "Gir National Park",
    description:
      "Gir National Park is the only place in the world where Asiatic lions can be seen in their natural habitat.The only place on earth where you can see Asiatic lions in the wild, Gir is home to over 500 of these regal big cats. Dry deciduous forests interspersed with grasslands and rocky hills make up the landscape.Along with lions, the park has thriving populations of leopards, nilgai, chital, chousingha, crocodiles and more. Go on a jeep safari and you may just spot a lion lounging under a tree or feasting on a fresh kill.",
    time: "December - March",
    location: "Gujarat",
    ideal: "Ideal duration – 3 days",
    image:
      "https://d307bj69336vgo.cloudfront.net/wp-content/w3-webp/uploads/2024/07/FaceForensics-Dataset-27.pngw3.webp",
  },
  {
    id: 11,
    category: "centuries",
    name: "Nagarhole National Park",
    description:
      "Nagarhole National Park, also known as Rajiv Gandhi National Park, is known for its rich wildlife, including tigers, elephants, and leopards.",
    time: "October - May",
    image:
      "https://i.ytimg.com/vi/acfyc6ZWVc4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDjDqDbB2NH17vusuWGSiUgvIss5w",
    location: "Karnataka",
    ideal: "Ideal duration – 3 days",
  },
  {
    id: 12,
    category: "centuries",
    name: "Keoladeo National Park",
    description:
      "Keoladeo National Park, formerly known as Bharatpur Bird Sanctuary, is a UNESCO World Heritage Site and a haven for bird watchers.",
    time: "October - March",
    location: "Rajasthan",
    image: "https://i.ytimg.com/vi/vyXoIiiNlkQ/hqdefault.jpg",
    ideal: "Ideal duration – 3 days",
  },
  {
    id: 13,
    category: "centuries",
    name: "Manas National Park",
    description:
      "Manas National Park is a UNESCO World Heritage Site, known for its rare and endangered species, including the Assam roofed turtle and pygmy hog.",
    time: "November - April",
    location: "Assam",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB7sIePwgkHlpKe2KzOdyfNHSUa3qbtWwgp696atN676cOo94S_nxj_8ifuO0PoMgrP6c&usqp=CAU",
    ideal: "Ideal duration – 3 days",
  },
  // -------------------------Eco-tourism--------------------------------
  {
    id: 14,
    name: "Thenmala",
    image:
      "https://static2.tripoto.com/media/filter/tst/img/308363/TripDocument/1496649086_thenmala1.jpg.webp",
    reach:
      "The nearest airport is in Trivandrum or Thiruvananthapuram. From there you can take a taxi to Thenmala.",
    description:
      "Thenmala in Kerala is India's first planned eco-tourism destination, offering activities like trekking, boating, and a musical fountain.",
    ideal_time_to_visit: "October - March",
    location: "Kerala",
    category: "eco-tourism",
  },
  {
    id: 15,
    name: "Coorg",
    image:
      "https://www.fabhotels.com/blog/wp-content/uploads/2020/01/Dubare-Elephant.jpg",
    reach:
      "The Scotland of India lies 252 km off Bangalore and is dense forested steep hill. Misty hills, blinding fog, lush forests, orange grooves and breathtaking views of the valley makes it a perfect eco-tourism destination.",
    description:
      "Coorg, also known as Kodagu, is famous for its coffee plantations, lush greenery, and eco-friendly homestays.",
    ideal: "October - March",
    location: "Karnataka",
    category: "eco-tourism",
  },
  {
    id: 16,
    name: "Sundarbans",
    image:
      "https://content.jdmagicbox.com/comp/kolkata/d5/pwfl1510583348b5i8d5/catalogue/sundarban-wild-camp-kolkata-v2zzu.jpg",
    description:
      "Sundarbans National Park is known for its unique mangrove forests and as the habitat of the Bengal tiger.",
    time: "September - March",
    location: "West Bengal",
    ideal: "Ideal duration – 3 days",
    category: "eco-tourism",
  },
  {
    id: 17,
    name: "Khasi Hills",
    image:
      "https://www.emeghalaya.com/uploads/articles/2021/09/khasi-hills.jpg",
    reach:
      "The nearest airport is in Trivandrum or Thiruvananthapuram. From there you can take a taxi to Thenmala.",
    description:
      " Khasi Hills of Meghalaya. Its almost offbeat unknown to the tourists visiting Meghalaya. From Hillside Highway Cottage Umniuh Tmar is approx 35km which take 1hr 15 mins by drive. One must visit to experience to have its authentic, local experience. Its one of the Oldest and big civilized villages of Meghalaya.",
    ideal: "October - April",
    category: "eco-tourism",
    location: "Meghalaya",
  },
  {
    id: 18,
    name: "Silent Valley National Park",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE0APIAuNlgfgbjsPPp92DzWiNu-jLepbr2uYspCyngspDVAMBMF_q30_BREAE9cej-tPi9IqBBkxw5j-y2U5dize2xuYBZl2TEp3kpblhzyKLw7OgZmm4rsJJd4BSILKm35bIKn_QKWg/s1600/Entrance_Silent_Valley.jpg",
    reach:
      "By air:The nearest airports are Coimbatore International Airport, which is about 77 km away, and Cochin International Airport, which is about 161 km away. By roadYou can take a bus from Palakkad to Mukkali via Manarkad. From Mukkali, you can arrange transportation to the park through the Forest Department. By jeep You can hire a jeep from Mukkali, which takes about 1.5 to 2 hours to reach the watch tower. You can inform the Forest office at Mukkali about your arrival in advance. ",
    description:
      "Silent Valley National Park in Kerala is a pristine rainforest, home to a variety of flora and fauna, and offers eco-friendly tourism.Silent Valley National Park is a national park in Kerala, India. It is located in the Nilgiri hills and has a core area of 89.52 km². It is surrounded by a buffer zone of 148 km². This national park has some rare species of flora and fauna. Silent Valley National Park was explored in 1847 by the botanist Robert Wight. ",
    ideal: "December - April",
    category: "eco-tourism",
    location: "Kerala",
  },
  {
    id: 19,
    name: "Mawlynnong",
    image:
      "https://nomadicweekends.com/blog/wp-content/uploads/2019/10/m-3.jpg",
    reach: "NH206, 72 kms from Shillong",
    description:
      "Mawlynnong has earned a reputation for being one of the cleanest villages in Asia, but a sobriquet that does more justice is that of God’s Own Garden. The fruit orchards, the rushing streams, the evergreen surroundings, the swaying palms, and the well-preserved traditions of the Khasis provide a picture-perfect stage on the edge of Meghalaya’s southern ranges.Arguably the most famous icon of Meghalaya is found here – the Nohwet Living Root Bridge. The bridge was created by weaving the roots of the Ficus Elastica tree around a framework and continuing this process for generations. These living root bridges are a staple of Khasi traditional architecture and were important for the villages in the steep valleys and mountains, helping the people connect with each other and travel to the plains to trade. These fascinating bridges are built in harmony with nature and get stronger as they grow older. After admiring the bridge, you can also take a dip in the gushing, cool waters of the river.",
    ideal:
      "All-year Destination, Post-monsoon and winter allow for more activities",
    category: "eco-tourism",

    location: "Meghalaya",
  },
  {
    id: 20,
    name: "Chilika Lake",
    image:
      "https://www.responsibletourismindia.com/public/uploads/article_images/178/Mangalajodi_ST.jpg",
    reach:
      "The best way to reach Chilika is by road from Bhubaneswar. We do have railway connectivity as well but you will miss out the beautiful road trip. Chilika is one of the largest lake in the world and can be accessed through many points like Barkul, Satapada etc which are very far from each other.",
    description:
      "Chilika Lake in Odisha is Asia's largest brackish water lagoon, known for its bird sanctuary and eco-friendly tourism initiatives.The best time to visit the Chilika Lake is the winter months of November to February, when the variety of migratory birds can be witnessed. Chilika Lake lives up to its reputation as the most picturesque spot and being Asia's largest salt-water lagoon.",
    category: "eco-tourism",
    ideal: "November - February",
    location: "Odisha",
  },
  {
    id: 21,
    name: "Agumbe",
    image:
      "https://www.trawell.in/admin/images/upload/852002238Agumbe_Main.jpg",
    reach:
      "By Train: Nearest railway station: Shimoga (90 km). Nearest airport: Mangalore (150 km).By Bus: Karnataka State Road Transport Corporation (KSRTC) runs overnight buses from Bengaluru. Agumbe can also be reached by taking a bus to Shimoga. There are plenty of local buses from Shimoga and Thirthahalli to Agumbe.",
    description:
      "Agumbe in Karnataka is known as the 'Cherrapunji of the South' and is famous for its rainforests, biodiversity, and eco-tourism.Agumbe is a high-altitude village in the southwest Indian state of Karnataka. Surrounded by the Western Ghats mountains and lush rainforest, it’s known its many waterfalls, such as Onake Abbi, Bakarna and Jogi Gundi falls. The Sunset View Point overlooks forested valleys. Nearby is Sri Venugopala Krishna Swamy Temple. To the south, tigers, leopards and king cobras live in Someshwara Wildlife Sanctuary.",
    category: "eco-tourism",
    ideal: "November - February",
    location: "Karnataka",
  },
  {
    id: 22,
    name: "Kanha National Park",
    image:
      "https://www.sscarrentalnagpur.com/wp-content/uploads/2024/07/Nagpur-to-kanha-national-park-taxi-scaled.jpg",
    reach:
      "By AirThe Nearest Airport for Kanha National Park are Jabalpur 160 Kms, Raipur Airport 250 Kms & Nagpur Airport 300 Kms.By TrainThe Nearest Railway Stations for accessing Kanha National Park is Gondia & Jabalpur. Gondia railway station is 145kms / 03:00 hrs drive from Kanha (Khatia Entrance Gate). Jabalpur railway station is 160kms / 04:00 hrs drive from Kanha (Mukki Entrance Gate)By RoadBy Road Kanha National Park is well connected from the major destinations of Madhya Pradesh, Maharashtra & Chhattisgarh.",
    description:
      "Kanha National Park in Madhya Pradesh is a well-preserved tiger reserve, promoting eco-tourism and conservation.",
    category: "eco-tourism",
    ideal: "October - June",
    location: "Madhya Pradesh",
  },
  {
    id: 23,
    name: "Wayanad",
    image:
      "https://www.tourismnewslive.com/wp-content/uploads/2021/06/wayanad-tourism.jpg",
    reach:
      "By airThe nearest airport to Wayanad is Karipur International Airport in Kozhikode, which is well connected to cities like Delhi, Mumbai, and Chennai. Taxis are available from the airport to Wayanad.By trainThe nearest railway station to Wayanad is Kozhikode, which is about 100 km away. Kozhikode is well connected to major cities in India. From Kozhikode, you can take a taxi or bus to Wayanad.By roadWayanad is accessible by road via several routes, including the Kozhikode-Mysore NH 212. State transport buses are available from cities like Bengaluru, Mysore, Kochi, and Trivandrum. You can also hire a private vehicle for a comfortable journey. ",
    description:
      "Wayanad in Kerala offers eco-friendly tourism with its lush forests, wildlife sanctuaries, and sustainable practices.",
    category: "eco-tourism",
    ideal: "October - May",
    location: "Kerala",
  },
];

export default data;
