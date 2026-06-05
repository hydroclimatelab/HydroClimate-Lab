// ============================================================
//  HYDROCLIMATE LAB — EDIT ALL YOUR CONTENT HERE
//  Change text/links below and push to GitHub to update site.
// ============================================================

const LAB_DATA = {

  lab: {
    name: "HydroClimate Lab",
    institute: "IIT Kharagpur",
    department: "Agricultural & Food Engineering Department",
    tagline: "Understanding the science of monsoon, moisture transport, hydroclimate extremes across South Asia and Study the Crop Behaviour",
    established: "IIT Kharagpur",
    logo_initials: "HL",
  },

  pi: {
    name: "Prof. Amey Pathak",
    short_name: "Prof. Pathak",
    title: "Assistant Professor, Agricultural & Food Engineering Department",
    photo: "images/Professor.png",
    email: "amey@agfe.iitkgp.ac.in",
    phone: "+91-3222-283XXX",
    office: "Room No.:111, Agricultural & Food Engineering Dept., IIT Kharagpur — 721302, West Bengal, India",
    degree: "Ph.D., IIT Bombay (2017) · M.Tech, IIT Bombay (2010) · B.Tech, MPKV Rahuri (2008)",
    bio: `Prof. Amey Pathak is an Assistant Professor in the Department of Agricultural & Food Engineering at IIT Kharagpur. His research sits at the intersection of <strong>hydroclimatology, monsoon dynamics, and land-atmosphere interactions</strong>, with a focus on South Asia's complex water-climate system.<br/><br/>
    He completed his Ph.D. from IIT Bombay where he pioneered the use of <strong>Dynamic Recycling Models</strong> to quantify precipitation recycling during the Indian Summer Monsoon. His work has been cited over <strong>2,000 times</strong> and published in leading journals including <em>Nature Climate Change</em>, <em>Nature Communications</em>, <em>Journal of Hydrometeorology</em>, and <em>Geophysical Research Letters</em>.<br/><br/>
    Prof. Pathak leads the <strong>Hydroclimate Laboratory</strong> at IIT KGP where his team investigates moisture transport, extreme rainfall, atmospheric rivers, drought assessment, and AI/ML applications in climate and agriculture.`,
    google_scholar: "https://scholar.google.com/citations?user=do9u7u8AAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Amey-Pathak",
    orcid: "https://orcid.org/",
    cv_link: "images/cv.pdf",
    iitpage: "https://www.iitkgp.ac.in/department/AG/faculty/ag-amey",
  },

  stats: [
    { number: "2000+", label: "Citations" },
    { number: "25+",   label: "Publications" },
    { number: "3+",    label: "Research Scholars" },
    { number: "15+",   label: "Years of Research" },
    { number: "2+",    label: "Funded Projects" },
  ],

  research: [
    {
      icon: "🌧",
      color: "#e8f4fb",
      title: "Precipitation Recycling & Moisture Transport",
      desc: "Quantifying the role of evapotranspiration and land surface processes in generating monsoon precipitation using Dynamic Recycling Models and Lagrangian moisture tracking. Identifying oceanic and terrestrial moisture sources feeding Indian Summer Monsoon extremes.",
      tag: "Core Research",
    },
    {
      icon: "🌊",
      color: "#e1f5ee",
      title: "Atmospheric Rivers & Extreme Rainfall",
      desc: "Detection and characterization of atmospheric rivers linked to extreme precipitation events across the Indian subcontinent, especially in the core monsoon zone and Western Himalayas. Event-based 3D Lagrangian moisture tracking.",
      tag: "Ongoing",
    },
    {
      icon: "☀️",
      color: "#faeeda",
      title: "Drought Monitoring & Remote Sensing",
      desc: "Multi-index drought assessment using satellite remote sensing (MODIS, GRACE, GPM) across India.",
      tag: "Active",
    },
    {
      icon: "🌍",
      color: "#f0f4ff",
      title: "Land-Atmosphere Interactions",
      desc: "Investigating feedbacks between land use/land cover change and Indian Summer Monsoon rainfall. Using WRF regional climate model to quantify urbanization and irrigation impacts on monsoon intensity and distribution.",
      tag: "Active",
    },
    {
      icon: "🤖",
      color: "#eaf3de",
      title: "AI/ML in Climate & Agriculture",
      desc: "Application of machine learning, deep learning, and geoinformatics for climate prediction, crop water stress detection (spectral reflectance studies), and agro-informatics.",
      tag: "Growing",
    },
    {
      icon: "🏔",
      color: "#faece7",
      title: "Crop Monitoring & System Development",
      desc: "Studying Crop behaviour and capture the response to model it.",
      tag: "Active",
    },
  ],

  publications: [
    {
      year: "2025",
      title: "Tracing Moisture Flow from the Bay of Bengal and Arabian Sea with its Impact on Ganga Basin during Monsoonal Extremes",
      authors: "Ranjan Kumar, Amey Pathak",
      journal: "EGU General Assembly 2025",
      doi: "https://doi.org/10.5194/egusphere-egu25-4531",
    },
    {
      year: "2025",
      title: "Lagrangian quantification of atmospheric moisture sources for extreme rainfall events over India during the 2023 summer monsoon",
      authors: "Ranjan Kumar, Amey Pathak",
      journal: "Science of The Total Environment, DOI: 10.1016/j.scitotenv.2025.180389",
      doi: "https://doi.org/10.1016/j.scitotenv.2025.180389",
    },
    {
      year: "2024",
      title: "Identification of Atmospheric Rivers Linked to Extreme Precipitation in the Core Monsoon Zone of India",
      authors: "Kumar R., Chouhan P., Pathak A.",
      journal: "AGU Annual Fall Meeting 2024",
      doi: "",
    },
    {
      year: "2021",
      title: "Observing Tidal and Storm Generated Wave Height Impact on Groundwater Levels in a Tropical Delta (the Sundarbans)",
      authors: "Das K., Sarkar S., Mukherjee A., Das P., Pathak A.",
      journal: "Journal of Hydrology, 603",
      doi: "https://doi.org/10.1016/j.jhydrol.2021.127102",
    },
    {
      year: "2021",
      title: "Dual Response of Arabian Sea Cyclones and Strength of Indian Monsoon to Southern Atlantic Ocean",
      authors: "Hari V., Pathak A., Koppa A.",
      journal: "Climate Dynamics",
      doi: "",
    },
    {
      year: "2018",
      title: "Role of Oceanic and Terrestrial Atmospheric Moisture Sources in Intraseasonal Variability of Indian Summer Monsoon Rainfall",
      authors: "Pathak A., Ghosh S., Murtugudde R., Rajeevan M.",
      journal: "Journal of Hydrology, 566, 1–22",
      doi: "https://doi.org/10.1016/j.jhydrol.2018.09.016",
    },
    {
      year: "2017",
      title: "A Threefold Rise in Widespread Extreme Rain Events over Central India",
      authors: "Roxy M.K., Ghosh S., Pathak A., Athulya R., Mujumdar M., Murtugudde R., Terray P., Rajeevan M.",
      journal: "Nature Communications, 8, 708",
      doi: "https://doi.org/10.1038/s41467-017-00744-9",
    },
    {
      year: "2017",
      title: "Water Food Energy Nexus: Changing Scenarios in India during Recent Decades",
      authors: "Barik B., Ghosh S., Sahana A.S., Pathak A., Sekhar M.",
      journal: "Hydrology and Earth System Sciences, 21, 3041–3060",
      doi: "https://doi.org/10.5194/hess-21-3041-2017",
    },
    {
      year: "2016",
      title: "Role of Oceanic and Land Moisture Sources and Transport in the Seasonal and Interannual Variability of Summer Monsoon in India",
      authors: "Pathak A., Ghosh S., Martinez J.A., Dominguez F., Kumar P.",
      journal: "Journal of Climate, 29(12), 4447–4467",
      doi: "https://doi.org/10.1175/JCLI-D-15-0582.1",
    },
    {
      year: "2016",
      title: "Lack of Dependence of Indian Summer Monsoon Rainfall Extremes on Temperature: An Observational Evidence",
      authors: "Vittal H., Ghosh S., Karmakar S., Pathak A., Murtugudde R.",
      journal: "Scientific Reports, 6, 31039",
      doi: "https://doi.org/10.1038/srep31039",
    },
    {
      year: "2014",
      title: "Precipitation Recycling in the Indian Subcontinent during Summer Monsoon",
      authors: "Pathak A., Ghosh S., Kumar P.",
      journal: "Journal of Hydrometeorology, 15(5), 2050–2066",
      doi: "https://doi.org/10.1175/JHM-D-13-0172.1",
    },
  ],

  news: [
    {
      date: "Recently 2026",
      text: "Ranjan Kumar, Amey Pathak & Kulkarni Shashikanth have published a research article: </strong>Climatic and transient controls on Indian monsoon E-P variability using moisture-budget decomposition.</strong>",
      link: "https://iopscience.iop.org/article/10.1088/2515-7620/ae73ee/meta",
      linkText: "Read Article"},
      
    {
      date: "Recently 2026",
      text: "Ranjeet Singh Bais & Amey Pathak have published a research article: Extreme learning machine based sub-seasonal forecasting of Indian Monsoon rainfall over core monsoon zone.",
      link: "https://link.springer.com/article/10.1007/s00704-026-06274-z",
      linkText: "Read Article"
      
    },
    
    {
      date: "Early 2025",
      text: "Prof. Pathak's lab is recruiting! Postdoc position available under ANRF National Postdoc Fellowship in hydroclimate/AI-ML.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7423281799621132288/",
      linkText: "Read Article"
      
    },

  ],

  // ─────────────────────────────────────────────────────────
  //  TEAM MEMBERS — add new members by copying the template below
  //
  //  category options (controls which section they appear in):
  //    "Faculty"           → Principal Investigator section
  //    "Postdoc"           → Postdoctoral Researchers section
  //    "PhD Scholar"       → PhD Scholars section
  //    "MTech"             → M.Tech / Master's Students section
  //    "Master Students"   → M.Tech / Master's Students section (same as MTech)
  //    "Research Scholar"  → Research Scholars
  //    "Alumni"            → Alumni section
  // ─────────────────────────────────────────────────────────
  team: [
    {
      id: "amey-pathak",
      name: "Prof. Amey Pathak",
      role: "Faculty",
      category: "Faculty",
      research: "Hydroclimatology, Land Atmosphere Interaction, Monsoon Dynamics, Moisture Recycling, Digital Agriculture",
      photo: "images/Professor.png",
      initials: "AP",
      color: "#1a4a8a",
      email: "amey@agfe.iitkgp.ac.in",
      phone: "+91-3222-283XXX",
      joining_year: "2018",
      hometown: "Maharashtra, India",
      education: [
        "Ph.D., Civil Engineering, IIT Bombay (2017), India",
        "M.Tech, Natural Resources Engineering, IIT Bombay (2010), India",
        "B.Tech, Agricultural Engineering, Mahatma Phule Krishi Vidyapeeth, Rahuri (2008)",
      ],
      bio: "Prof. Amey Pathak is an Assistant Professor in the Department of Agricultural & Food Engineering at IIT Kharagpur. His research focuses on hydroclimatology, monsoon dynamics, land-atmosphere interactions and Digital agriculture to transform knowledge into the digital world. He has over 2,000 citations and has published in Nature Communications, Journal of Hydrometeorology, Journal of Climate, and other leading journals.",
      interests: ["Moisture Recycling", "Hydroclimatology", "Monsoon Dynamics", "Land Atmosphere Interaction", "Digital Agriculture", "Remote Sensing and GIS"],

      publications: ["Precipitation Recycling in the Indian Subcontinent (J. Hydromet. 2014)", "A Threefold Rise in Extreme Rain Events over Central India (Nature Comm. 2017)", "Role of Oceanic and Land Moisture Sources in Summer Monsoon (J. Climate 2016)"],

      google_scholar: "https://scholar.google.com/citations?user=do9u7u8AAAAJ&hl=en",
      researchgate: "https://www.researchgate.net/profile/Amey-Pathak",
      linkedin: "https://www.linkedin.com/in/amey-pathak-95128716/",
      website: "https://www.iitkgp.ac.in/department/AG/faculty/ag-amey",
    },
   {
      id: "ranjan-kumar",
      name: "Ranjan Kumar",
      role: "Research Scholar",
      category: "Research Scholar",
      research: "Precipitation Recycling,  Atmospheric Moisture Transport, Indian Summer Monsoon Rainfall",
      photo: "images/Ranjan.png",   // ← add images/ranjan.jpg
      initials: "RK",
      color: "#3a3a8b",
      email: "",
      phone: "",
      joining_year: "2020",
      hometown: "Bihar, India",
      education: [
        "PhD (ongoing), IIT Kharagpur, India (2020--)",
	"M.Tech, Anand Agricultural University, Gujarat, India (2019)", 
        "B.Tech, Agricultural Engineering,  Kerala Agricultural University, India (2017)",
      ],
      bio: "Ranjan Kumar is working in the areas of atmospheric moisture transport, precipitation recycling, and extreme rainfall dynamics associated with the Indian Summer Monsoon. His research focuses on understanding moisture pathways, land–atmosphere interactions, hydroclimatic extremes, and sustainable water resource systems using geospatial analysis, remote sensing, and environmental modelling. Ranjan's research focuses on the atmospheric moisture budget during ENSO years and its relationship to Indian Summer Monsoon rainfall variability. He uses reanalysis datasets and diagnostic tools to study evaporation-precipitation balance during contrasting climate years.",
      interests: ["Precipitation Recycling", "Atmospheric Moisture Transport", "Monsoon Variability", "Reanalysis Data", "Indian Summer Monsoon Rainfall"],
      publications: [
  {
    id: 1,
    title: "Lagrangian quantification of atmospheric moisture sources for extreme rainfall events over India during the 2023 summer monsoon",
    authors: "Kumar, R., & Pathak, A.",
    journal: "Science of The Total Environment",
    year: 2025,
    volume: "1000",
    pages: "180389",
    doi: "https://doi.org/10.1016/j.scitotenv.2025.180389",
    scholar: "https://scholar.google.com/citations?user=JwmdFqMAAAAJ&hl=en",
    type: "Journal Article"
  },
  {
    id: 2,
    title: "Climatic and transient controls on Indian monsoon E-P variability using moisture-budget decomposition",
    authors: "Ranjan Kumar, Amey Pathak, Kulkarni Shashikanth",
    journal: "Environmental Research Communications",
    year: 2026,
    volume: "",
    pages: "",
    doi: " https://doi.org/10.1088/2515-7620/ae73e",
    scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=do9u7u8AAAAJ&sortby=pubdate&citation_for_view=do9u7u8AAAAJ:ns9cj8rnVeAC",
    type: "Journal Article"
  }
],
      google_scholar: "https://scholar.google.com/citations?user=JwmdFqMAAAAJ&hl=en",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/ranjan-kumar-0527601b1/?skipRedirect=true",
      website: "",
    },
    {
      id: "ranjeet-bais",
      name: "Ranjeet S. Bais",
      role: "Research Scholar",
      category: "Research Scholar",
      research: "S2S Prediction, Reliability Indices",
      photo: "images/Ranjeet.jpg",   // ← add images/ranjeet.jpg
      initials: "RB",
      color: "#0f7b8c",
      email: "",
      phone: "",
      joining_year: "2020",
      hometown: "Madhya Pradesh, India",
      education: [
        "Ph.D. (ongoing), IIT Kharagpur, India (2020--)",
        "M.Tech,  IIT Kharagpur, India (2020)",
	"B.Tech, Agricultural Engineering, Tamil Nadu Agricultural University, India (2018)",
      ],
      bio: "Ranjeet is working on Seasonal-to-Subseasonal (S2S) weather prediction reliability indices for societal applications. His work focuses on improving the usability of S2S model forecasts for agriculture and disaster management.",
      interests: ["S2S Prediction", "Monsoon Forecasting", "Reliability Indices", "Climate Services"],
      publications: [  {
    id: 1,
    title: "Extreme learning machine based sub-seasonal forecasting of Indian Monsoon rainfall over core monsoon zone",
    authors: "Kumar, R., & Pathak, A.",
    journal: "Theoretical and Applied Climatology",
    year: 2026,
    volume: "157(5)",
    pages: "325",
    doi: "https://doi.org/10.1007/s00704-026-06274-z",
    scholar: "",
    type: "Journal Article"
  }],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/ranjeet-singh-bais-a7582b180/",
      website: "",
    },
    {
      id: "Alok-k",
      name: "Alok Kumar Maurya",
      role: "Research Scholar",
      category: "Research Scholar",
      research: "Digital Agriculture, RS and GIS, IoTs and AI application in Agriculture",
      photo: "images/Alok.jpg",   // ← add images/
      initials: "AK",
      color: "#1d6d3a",
      email: "akmaurya.iitkgp@gmail.com",
      phone: "",
      joining_year: "2021",
      hometown: "UP, India",
      education: [
	"Ph.D. (ongoing), IIT Kharagpur, India (2021--)",
        "M.Tech, IIT Kharagpur, India (2021)",
        "B.Tech, Agricultural Engineering, SHUATS Prayagraj, India (2019)",
      ],
      bio: "Alok is studying the response of crops under biotic and abiotic stress using remote sensing, AI and transforming all information in the digital world (digital agriculture).",
      interests: ["Digital Agriculture", "RS and GIS application in Agriculture", "IoTs", "AI in Agriculture"],
      publications: [{
    id: 1,
    title: "Leveraging the use of digital agriculture and machine learning for accurate prediction of Leaf Area Index (LAI)",
    authors: "Maurya, A. K., & Pathak, A. ",
    journal: "Computers and Electronics in Agriculture",
    year: 2025,
    volume: "239",
    pages: "110947",
    doi: "https://doi.org/10.1016/j.compag.2025.110947",
    scholar: "https://scholar.google.com/citations?user=TmQQe0sAAAAJ&hl=en",
    type: "Journal Article"
  }],
      google_scholar: "https://scholar.google.com/citations?user=TmQQe0sAAAAJ&hl=en",
      researchgate: "",
      linkedin: "https://www.linkedin.com/feed/",
      website: "",
    },
    {
      id: "Prasant-J",
      name: "Jarapla Prashanth",
      role: "Research Scholar",
      category: "Research Scholar",
      research: "Climate Modelling",
      photo: "images/Prashanth.jpeg",   // ← add images/
      initials: "JP",
      color: "#1d6d3a",
      email: "",
      phone: "",
      joining_year: "2026",
      hometown: "Telangana, India",
      education: [
	"Ph.D. (ongoing), IIT Kharagpur, India (2026--)",
        "M.Tech, Central Institute Of Agricultural Engineering, India (2025)",
        " B.Tech, Agricultural Engineering, Professor Jayashankar Telangana State Agricultural University, India (2018)",
      ],
      bio: "Prashanth is studying the impact of Land Surface Feedbacks in Climate Model Simulations over India.",
      interests: ["Climate Modelling", "Drones application in agriculture", "IoTs", "Robotics","Aeroponics"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/er-prashanth-pawar-jarapla-6aa687295/",
      website: "",
    },
    {
      id: "Nivedita",
      name: "Nivedita Dubey",
      role: "Alumni",
      category: "Alumni",
      research: "Climate Modelling",
      photo: "images/Nivedita.jpeg",   // ← add images/
      initials: "NV",
      color: "#1d6d3a",
      email: "",
      phone: "",
      joining_year: "2018-2020",
      hometown: "Uttar Pradesh, India",
      education: [
	"Ph.D. , IIT Bombay, India (2020-2025)",
        "M.Tech, IIT Kharagpur, India (2020)",
        " B.Tech, Agricultural Engineering, College of Technology & Engineering, Udaipur, India (2018)",
      ],
      bio: "Nivedita is currently working as Postdoctoral Researcher at Washington State University.",
      interests: ["Climate Change", "Eco-hydrology","Carbon cycle","Vegetation dynamics"],
      publications: [],
      google_scholar: "https://scholar.google.com/citations?hl=en&user=QdZUfK4AAAAJ&view_op=list_works&sortby=pubdate",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/dubeynivedita14/",
      website: "",
    },
    {
      id: "Sumit",
      name: "Sumit Vishwakarma",
      role: "Alumni",
      category: "Alumni",
      research: "Crop Monitoring",
      photo: "images/Sumit.jpg",   // ← add images/
      initials: "SV",
      color: "#1d6d3a",
      email: "",
      phone: "",
      joining_year: "2018-2020",
      hometown: "Uttar Pradesh, India",
      education: [
	"Ph.D. (Ongoing) , IIT Roorkee, India (2021--)",
        "M.Tech, IIT Kharagpur, India (2020)",
        " B.Tech, Agricultural Engineering, ",
      ],
      bio: "Sumit is currently working as a Research Scholar at WRDM Department, Indian Institute of Technology, Roorkee",
      interests: ["Remote Sensing and GIS", "Land and water resource assessment","Crop Monitoring","UAV application in Agriculture"],
      publications: [],
      google_scholar: "https://scholar.google.com/citations?hl=en&user=QdZUfK4AAAAJ&view_op=list_works&sortby=pubdate",
      researchgate: "https://www.researchgate.net/profile/Sumit-Vishwakarma-6",
      linkedin: "https://www.linkedin.com/in/sumit-vishwakarma-a82247366/",
      website: "",
    },
    {
      id: "Kshitij",
      name: "Kshitij",
      role: "Alumni",
      category: "Alumni",
      research: "Climate Modelling",
      photo: "images/kshitij.jpeg",   // ← add images/
      initials: "KT",
      color: "#1d6d3a",
      email: "",
      phone: "",
      joining_year: "2018-2020",
      hometown: "Orisaa, India",
      education: [
	
        "M.Tech, IIT Kharagpur, India (2020)",
        " B.Tech, Agricultural Engineering, Odisha University of Agriculture and Technology, India (2018)",
      ],
      bio: "Kshitij is currently working as an Assistant Soil Conservation Officer",
      interests: ["Climate Change", "Soil and Water Conservation"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "",
      website: "",
    },
    {
      id: "Basavaraj",
      name: "Basavaraj Bijali",
      role: "Alumni",
      category: "Alumni",
      research: "Data Science",
      photo: "images/Basavaraj.jpeg",   // ← add images/
      initials: "BS",
      color: "#1d6d3a",
      email: "",
      phone: "",
      joining_year: "2019-2021",
      hometown: "Karnataka, India",
      education: [
	
        "M.Tech, IIT Kharagpur, India (2021)",
        " B.Tech, Agricultural Engineering, University of Agricultural Science Bengaluru, India (2019)",
      ],
      bio: "Basavaraj is currently working as a Data Scientist  at TVS Credit Services Ltd.",
      interests: ["Data Science"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "",
      website: "",
    },
    {
      id: "anand-g",
      name: "Anand Gupta",
      role: "Alumni",
      category: "Alumni",
      research: "Atmospheric Rivers, Extreme Precipitation",
      photo: "images/Anand.png",   // ← add images/rohit.jpg
      initials: "AG",
      color: "#1d6d3a",
      email: "",
      phone: "",
      joining_year: "2020-2022",
      hometown: "Uttar Pradesh, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2022)",
        "B.Tech, Agricultural Engineering, SHUATS Prayagraj, India (2020)",
      ],
      bio: "Aanand Gupta is investigating atmospheric rivers (ARs) and their role in driving extreme precipitation events across the Indian subcontinent. His recent work includes event-based Lagrangian 3D moisture tracking for monsoon extremes, identifying the Western Indian Ocean as a dominant moisture source contributing up to 55% of extreme rainfall.",
      interests: ["Atmospheric Rivers", "Extreme Rainfall", "Moisture Tracking", "Lagrangian Analysis", "Ganga Basin Hydrology"],
      publications: ["Detection and Characterization of Atmospheric Rivers Linked to Extreme Precipitation (AGU 2024)", "Tracing Moisture Flow from Bay of Bengal and Arabian Sea (EGU 2025)"],
      google_scholar: "",
      researchgate: "",
      linkedin: "",
      website: "",
    },
    {
      id: "dilip-g",
      name: "Dilip Patidar",
      role: "Alumni",
      category: "Alumni",
      research: "",
      photo: "images/Dilip.jpeg",   // ← add images/rohit.jpg
      initials: "DP",
      color: "#1d6d3a",
      email: "",
      phone: "",
      joining_year: "2020-2022",
      hometown: "Madhya Pradesh, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2022)",
        "B.Tech, Agricultural Engineering, SHUATS Prayagraj, India (2020)",
      ],
      bio: "Dilip Patidar is currently working as a Lead - Product Manager@ Mati Carbon.",
      interests: ["Wastershed management", "Climate Action", "Data Analytics"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/dilippatidar/",
      website: "",
    },
    {
      id: "Pramod-k",
      name: "Pramod Chouhan",
      role: "Alumni",
      category: "Alumni",
      research: "",
      photo: "images/Pramod.jpeg",   // ← add images/rohit.jpg
      initials: "PC",
      color: "#1d6d3a",
      email: "",
      phone: "",
      joining_year: "2021-2023",
      hometown: "Madhya Pradesh, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2023)",
        " B.Tech,Agricultural Engineering, Mahatma Gandhi Chitrakoot Gramodaya Vishwavidyalaya (2020)",
      ],
      bio: "Pramod is currently working in Air India Limited as a Lead Engineer(Data Science). ",
      interests: ["Data Science","AI"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/pramod-chouhan-503965237/?skipRedirect=true",
      website: "",
    },
    {
      id: "rohit-kumar",
      name: "Rohit Rahangdale",
      role: "Alumni",
      category: "Alumni",
      research: "",
      photo: "images/Rohit.jpeg",   // ← add images/rohit.jpg
      initials: "RK",
      color: "#1d6d3a",
      email: "",
      phone: "",
      joining_year: "2021-2023",
      hometown: "Madhya Pradesh, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2023)",
        " B.Tech,Agricultural Engineering, Mahatma Gandhi Chitrakoot Gramodaya Vishwavidyalaya (2020)",

      ],
      bio: "Rohit is currently working as a data scientist in Zeominds IT Solutions Pvt Ltd. ",
      interests: ["Data Science", "AI/ML"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/rohitrahangdale/",
      website: "",
    },
    
    {
      id: "Tanusri",
      name: "Tanusri Baidya",
      role: "Alumni",
      category: "Alumni",
      research: "",
      photo: "images/Tanushri.jpeg",   // ← add images/rohit.jpg
      initials: "TN",
      color: "#1d6d3a",
      email: "",
      phone: "",
      joining_year: "2021-2023",
      hometown: "Assam, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2023)",
        " B.Tech, Agricultural Engineering, ..... (2020)",

      ],
      bio: "Tanushri is currently working as a DevOps Engineer at CNH.",
      interests: ["Data Science", "AI/ML"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/tanusri-baidya-b68946217/",
      website: "",
    },
    

    {
      id: "megha-p",
      name: "Megha P.",
      role: "Alumni",
      category: "Alumni",
      research: "Agro-Informatics, Geospatial Analysis",
      photo: "images/Megha.jpeg",   // ← add images/megha.jpg
      initials: "MP",
      color: "#a34a0f",
      email: "",
      phone: "",
      joining_year: "2022-2024",
      hometown: "Telangana, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2024)",
        "B.Tech, Agricultural Engineering, Kelappaji College of Agrl. Engineering & Technology, Tavanur (2022)",
      ],
      bio: "Megha is currently working in Vassar Labs as a Subject Matter Expert in Hydrological modelling.She has also worked in the domain of agro-informatics and geospatial data analysis. She contributed to IIT KGP's Advanced E-SDP Training Program on Agro-Informatics funded by the Ministry of MSME, and focuses on applying GIS and Python-based tools for agricultural and climate data analysis.",
      interests: ["Agro-Informatics", "RS & GIS", "Hydrological Modelling"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/megha-p-b44a4a245/",
      website: "",
    },
 
    {
      id: "ark-raj",
      name: "Ark Raj",
      role: "Alumni",
      category: "Alumni",
      research: "Climate Modeling, Land Surface",
      photo: "images/Ark.jpeg",   // ← add images/ark.jpg
      initials: "AR",
      color: "#5a8b1a",
      email: "",
      phone: "",
      joining_year: "2022-2024",
      hometown: "Jharakhand, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2024)",
        "B.Tech, Agricultural Engineering, Birsa Agricultural University (BAU), (2022)",
      ],
      bio: "Ark is currently working in HSBC as a manager (working in the field of Climate Risk Modelling and Monitoring. He has also worked on climate modelling and land surface processes, studying how land use changes and surface energy fluxes influence regional climate patterns over the Indian subcontinent. He is also involved in the lab's agro-informatics and Python training activities.",
      interests: ["Data Science", "Climate Risk Modelling and Monitoring"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/ark-raj-84a1481b1/",
      website: "",
    },
    {
      id: "bikash",
      name: "Bikash Ranjan Behera",
      role: "Alumni",
      category: "Alumni",
      research: "Climate Modelling, RS and GIS, WRF model",
      photo: "images/Bikash.jpeg",   // ← add images/ark.jpg
      initials: "BK",
      color: "#5a8b1a",
      email: "",
      phone: "",
      joining_year: "2023-2025",
      hometown: "Orissa, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2025)",
        "B.Tech, Agricultural Engineering, Orissa University of Agriculture and Technology, (2023)",
      ],
      bio: "Bikash is currently working in Ruvision Ventures as a Technical Engineer (working in the field of Climate Risk Modelling and Monitoring)",
      interests: ["Data Science", "Climate Risk Modelling and Monitoring","WRF model","RS and GIS", "AI/ML application in Agriculture"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/bikash4044/",
      website: "",
    },
    {
      id: "Nida",
      name: "Nida Fathima",
      role: "Alumni",
      category: "Alumni",
      research: "Design of Drippers, Computational fluid dynamics modelling",
      photo: "images/Nida.jpeg",   // ← add images/ark.jpg
      initials: "NF",
      color: "#5a8b1a",
      email: "",
      phone: "",
      joining_year: "2023-2025",
      hometown: "Kerala, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2025)",
        "B.Tech, Agricultural Engineering, Kelappaji College of Agrl. Engineering & Technology, Tavanur, India, (2023)",
      ],
      bio: "Nida is currently working as Junior Research Fellow at National Institute of Technology Calicut",
      interests: ["Design of Drippers", "Computational fluid dynamics modelling","RS and GIS"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/nida-fathima79/",
      website: "",
    },

    {
      id: "Chitta",
      name: "Chitranjan",
      role: "Alumni",
      category: "Alumni",
      research: "Climate modelling",
      photo: "images/Chitta.jpeg",   // ← add images/ark.jpg
      initials: "CH",
      color: "#5a8b1a",
      email: "",
      phone: "",
      joining_year: "2023-2025",
      hometown: "Orissa, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2025)",
        "B.Tech, Agricultural Engineering, Kelappaji College of Agrl. Engineering & Technology, Tavanur, India, (2023)",
      ],
      bio: "",
      interests: ["Climate modelling","RS and GIS"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "",
      website: "",
    },

    {
      id: "Babji-1",
      name: "Babji",
      role: "M.Tech",
      category: "Master Students",
      research: "Climate Modeling, Land Surface",
      photo: "images/Babji.jpg",   // ← add images/ark.jpg
      initials: "AR",
      color: "#5a8b1a",
      email: "",
      phone: "",
      joining_year: "2024",
      hometown: "Telangana, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2026)",
        "B.Tech, Agricultural Engineering, College of agricultural engineering madakasira,Andhra Pradesh, India (2024)",
      ],
      bio: "Babji works on climate modelling and land surface processes, studying how land use changes and surface energy fluxes influence regional climate patterns over the Indian subcontinent. He is also involved in the lab's agro-informatics and Python training activities.",
      interests: ["Climate Modeling", "Land Surface Processes", "WRF Model", "Surface Energy Balance", "Regional Climate"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/babji-sh-742b0126a/",
      website: "",
    },
    {
      id: "Jayant1",
      name: "Jayant Chand",
      role: "M.Tech",
      category: "Master Students",
      research: "Crop monitoring, AL/ML",
      photo: "images/Jayant.jpeg",   // ← add images/ark.jpg
      initials: "Jy",
      color: "#5a8b1a",
      email: "",
      phone: "",
      joining_year: "2024",
      hometown: "Jharakhand, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2026)",
        "B.Tech,Agricultural Engineering, Birsa Agricultural University (BAU), Ranchi, India (2023)",
      ],
      bio: "Jaynat is currently a member of Vassar Labs.",
      interests: ["Crop monitoring", "AL/ML", "Vision Language Model", "RS and GIS"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/jayant-chand-b03452255/",
      website: "",
    },
    {
      id: "Bibaswan",
      name: "Bibaswan Bhattacharya",
      role: "M.Tech",
      category: "Master Students",
      research: "Climate Modelling, WRF",
      photo: "images/Bibaswan.jpeg",   // ← add images/ark.jpg
      initials: "BB",
      color: "#5a8b1a",
      email: "",
      phone: "",
      joining_year: "2024",
      hometown: "West Bengal, India",
      education: [
        "M.Tech, IIT Kharagpur, India (2026)",
        "B.Tech,Agricultural Engineering, Uttar Banga Krishi Vishwavidyalaya, Cooch Behar, India (2024)",
      ],
      bio: "",
      interests: ["Climate Modelling", "WRF", "Atmospheric Science", "RS and GIS"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/bibaswan14/",
      website: "",
    },
    {
      id: "Ankit",
      name: "Ankit Kumar",
      role: "M.Tech",
      category: "Master Students",
      research: "Climate Modelling, WRF",
      photo: "images/Ankit.jpeg",   // ← add images/ark.jpg
      initials: "AK",
      color: "#5a8b1a",
      email: "",
      phone: "",
      joining_year: "2025",
      hometown: "Bihar, India",
      education: [
        "M.Tech, IIT Kharagpur, India (Ongoing)",
        "B.Tech, Agricultural Engineering, Anand Agricultural University, Anand, Gujarat, India (2025)",
      ],
      bio: "",
      interests: ["Climate Modelling", "WRF", "RS and GIS"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/ankit-kumar-9b3b06228/",
      website: "",
    },

    {
      id: "Aryan",
      name: "Aryan Patidar",
      role: "M.Tech",
      category: "Master Students",
      research: "Crop monitoring, Crop Phenology",
      photo: "images/Aryan.jpeg",   // ← add images/ark.jpg
      initials: "AP",
      color: "#5a8b1a",
      email: "",
      phone: "",
      joining_year: "2025",
      hometown: "Madhya Pradesh, India",
      education: [
        "M.Tech, IIT Kharagpur, India (Ongoing)",
        "B.Tech, Agricultural Engineering, Indhira Gandhi Krishi Vishwavidyalaya, Raipur, India (2025)",
      ],
      bio: "",
      interests: ["Crop monitoring", "Crop Phenology", "RS and GIS"],
      publications: [],
      google_scholar: "",
      researchgate: "",
      linkedin: "https://www.linkedin.com/in/aryan-patidar-720b70371/",
      website: "",
    },

    // ══════════════════════════════════════════════════════════
    // ➕ ADD NEW MEMBER — copy this block, uncomment, fill in
    // ══════════════════════════════════════════════════════════
    // {
    //   id: "firstname-lastname",
    //   name: "Full Name",
    //   role: "Postdoctoral Researcher",
    //   category: "Postdoc",      // ← Faculty / Postdoc / PhD Scholar / MTech / Masters / Research Scholar / Alumni
    //   research: "Research area (short)",
    //   photo: "images/filename.jpg",   // or "" for avatar
    //   initials: "FL",
    //   color: "#2e7bc4",
    //   email: "",
    //   phone: "",
    //   joining_year: "2024",
    //   hometown: "State, India",
    //   education: [
    //     "Ph.D., University (Year)",
    //     "M.Tech, University (Year)",
    //   ],
    //   bio: "2-3 sentences about this person.",
    //   interests: ["Topic 1", "Topic 2"],
    //   publications: ["Paper title (Journal, Year)"],
    //   google_scholar: "",
    //   researchgate: "",
    //   linkedin: "",
    //   website: "",
    // },
    // ══════════════════════════════════════════════════════════

  ],

  gallery: [
    { src: "images/lab1.jpg", caption: "Lab fieldwork — monsoon field campaign" },
    { src: "images/lab2.jpg", caption: "Annual lab retreat — IIT KGP campus" },
    { src: "images/lab3.jpg", caption: "AGU Fall Meeting 2024 — San Francisco" },
    { src: "images/lab4.jpg", caption: "EGU General Assembly 2025 — Vienna" },
    { src: "images/lab5.jpg", caption: "Agro-Informatics Workshop — IIT Kharagpur 2024" },
    { src: "images/lab6.jpg", caption: "Research group photo — 2024" },
  ],

publications: [

{
  year: 2025,
  type: "Journal",

  title: "Lagrangian quantification of atmospheric moisture sources for extreme rainfall events over India during the 2023 summer monsoon",

  authors: "Kumar, R., & Pathak, A.",

  venue: "Science of The Total Environment",

  doi: "https://doi.org/10.xxxx/xxxxx",

  pdf: "pdfs/Kumar_2025_STOTEN.pdf"
},

{
  year: 2025,
  type: "Conference",

  title: "Atmospheric Moisture Transport over India",

  authors: "Kumar, R.",

  venue: "EGU General Assembly 2025",

  doi: "",

  pdf: "pdfs/EGU2025.pdf"
}

],

activities: [
  
 {
    title: "EGU General Assembly 2026",
    date: "2026",
    role: "Presenter",
    description:
      "We have presented  two works at EGU General Assembly 2026 with the titles - Assessment of droughts and extremes over India using CMIP6 simulations (Author: Amey Pathak, Shashikanth Kulkarni, Kaustubh Salvi, Hima Saji, Harish Gupta, Banoth Tejaswi) and Evaluating SAM3 and Conventional Image Processing Method for Potato Canopy Cover Estimation as an Indicator of Crop Health (Author: Alok Kumar Maurya and Amey Pathak).",

    images: [
      "images/activities/egu261.jpeg",
      "images/activities/egu262.jpeg"
    ]
  },

{
    title: "Agro-Informatics Workshop",
    date: "2024",
    role: "Organizer",
    description:
      "Organized the Advanced ESDP Training Program on Agro-Informatics at IIT Kharagpur funded by MSME, Govt. of India.",

    images: [
      "images/activities/workshop1.jpg",
      "images/activities/workshop2.jpg",
      "images/activities/workshop3.jpg"
    ]
  },



  {
    title: "Field Spectral Campaign",
    date: "2025",
    role: "Research Volunteer",
    description:
      "Conducted field hyperspectral measurements for crop stress monitoring.",

    images: [
      "images/activities/field1.jpg",
      "images/activities/field2.jpg"
    ]
  }

],


contact: {
    address: "Agricultural & Food Engineering Department\nIIT Kharagpur, Kharagpur — 721302\nWest Bengal, India",
    email_pi: "amey@agfe.iitkgp.ac.in",
    email_lab: "hydroclimate.lab@iitkgp.ac.in",
    phone: "+91-3222-283XXX",
    office_hours: "Monday – Friday: 10:00 AM – 5:00 PM IST",
    google_maps: "https://maps.google.com/?q=IIT+Kharagpur",
    // ← PASTE YOUR GOOGLE FORM LINK HERE
    google_form: "https://docs.google.com/forms/d/e/1FAIpQLScvhJjdQ4rVCPiBvqMp5JIIF1_-kd3RFOr-WjErgejeMPJFZw/viewform?usp=dialog",
  },

};
