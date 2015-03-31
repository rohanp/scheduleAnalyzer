var classes = new Bloodhound({
  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.word); },
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  limit: 4,
  local: [
        {word: "Foundations of CS" },
        {word: "Accelerated CS" },
        {word: "AP Computer Science" },
        {word: "Artificial Intelligence 1" },
        {word: "Artificial Intelligence 2" },
        {word: "Web App Dev" },
        {word: "Mobile App Dev" },
        {word: "Parallel Computing 1" },
        {word: "Parallel Computing 2" },
        {word: "English 9" },
        {word: "English 10" },
        {word: "English 11" },
        {word: "English 12" },
        {word: "AP Lit" },
        {word: "AP Lang" },
        {word: "Journalism " },
        {word: "Photojournalism " },
        {word: "Broadcast Journalism" },
        {word: "Film Study" },
        {word: "PE" },
        {word: "Sports Medicine" },
        {word: "Math 1" },
        {word: "Math 2" },
        {word: "Math 3" },
        {word: "Math 4" },
        {word: "Math 5" },
        {word: "Math 6" },
        {word: "Precalc" },
        {word: "AB Calculus" },
        {word: "BC Calculus" },
        {word: "Multivariable Calc" },
        {word: "Differential Equations" },
        {word: "Complex Variables" },
        {word: "Statistics 1" },
        {word: "Statistics 2" },
        {word: "AP Statistics" },
        {word: "Linear Algebra" },
        {word: "AMT" },
        {word: "Cryptography" },
        {word: "Mathematics of Finance" },
        {word: "Probability Theory" },
        {word: "Concrete Math" },
        {word: "Theater Arts" },
        {word: "Tech Theater" },
        {word: "AP Music Theory" },
        {word: "Symphonic Band" },
        {word: "Advanced Orchestra" },
        {word: "Jazz Band" },
        {word: "Chorus" },
        {word: "Geosystems" },
        {word: "Astronomy: The Solar System" },
        {word: "Astronomy: The Universe" },
        {word: "Biology 1" },
        {word: "Marine Biology" },
        {word: "DNA Science 1" },
        {word: "DNA Science 2" },
        {word: "Neurobiology" },
        {word: "AP Biology" },
        {word: "Chemistry 1" },
        {word: "Organic Chemistry" },
        {word: "AP Chemistry" },
        {word: "Physics 1" },
        {word: "Computational Physics" },
        {word: "Optics" },
        {word: "Quantum Mechanics" },
        {word: "AP Physics" },
        {word: "Physiology and the Arts" },
        {word: "Bionanotechnology" },
        {word: "Mobile and Web App Dev Lab" },
        {word: "Computer Systems Lab" },
        {word: "Astronomy Lab" },
        {word: "Biotech Lab" },
        {word: "Neuroscience Lab" },
        {word: "Chem Analysis Lab" },
        {word: "Quantum Physics Lab" },
        {word: "Oceanography Lab" },
        {word: "Microelectronics Lab" },
        {word: "Robotics Lab" },
        {word: "Energy Systems Lab" },
        {word: "Engineering Design Lab" },
        {word: "Prototyping Lab" },
        {word: "Ancient and Classical Civ" },
        {word: "APUSH" },
        {word: "20th Century World History" },
        {word: "US History" },
        {word: "AP European History" },
        {word: "Law and Society" },
        {word: "AP Gov" },
        {word: "Economic Theory" },
        {word: "AP Micro" },
        {word: "AP Macro" },
        {word: "Psychology" },
        {word: "AP Psychology" },
        {word: "Inquiry in Ideas" },
        {word: "Religious Studies" },
        {word: "History of Science" },
        {word: "America since 1989" },
        {word: "One Question" },
        {word: "Ethical Leadership" },
        {word: "Summer Chem" },
        {word: "Summer Econ" },
        {word: "Summer CS" },
        {word: "Summer World History" },
        {word: "CHUM" },
        {word: "Global Studies" },
        {word: "Senior Sem" },
        {word: "Adv Microprocessor Design" },
        {word: "Analog Electronics" },
        {word: "Digital Electronics" },
        {word: "Robotics 1" },
        {word: "Robotics 2" },
        {word: "Engineering Design" },
        {word: "Prototyping 1" },
        {word: "Prototyping 2" },
        {word: "CAD" },
        {word: "Energy Systems 1" },
        {word: "Energy Systems 2" },
        {word: "Design and Tech" },
        {word: "Art" },
        {word: "AP Studio Art" },
        {word: "AP Art History" },
        {word: "Art for Engineers" },
        {word: "Computer Graphics" },
        {word: "Photography" },
        {word: "French 1" },
        {word: "French 2" },
        {word: "French 3" },
        {word: "French 4" },
        {word: "French 5" },
        {word: "AP French" },
        {word: "German 1" },
        {word: "German 2" },
        {word: "German 3" },
        {word: "German 4" },
        {word: "German 5" },
        {word: "AP German" },
        {word: "Latin 1" },
        {word: "Latin 2" },
        {word: "Latin 3" },
        {word: "Latin 4" },
        {word: "Latin 5" },
        {word: "AP Latin" },
        {word: "Russian 1" },
        {word: "Russian 2" },
        {word: "Russian 3" },
        {word: "Russian 4" },
        {word: "Russian 5" },
        {word: "AP Russian" },
        {word: "Spanish 1" },
        {word: "Spanish 2" },
        {word: "Spanish 3" },
        {word: "Spanish 4" },
        {word: "Spanish 5" },
        {word: "AP Spanish" },
        {word: "Chinese 1" },
        {word: "Chinese 2" },
        {word: "Chinese 3" },
        {word: "Chinese 4" },
        {word: "Chinese 5" },
        {word: "AP Chinese" },
        {word: "Japanese 1" },
        {word: "Japanese 2" },
        {word: "Japanese 3" },
        {word: "Japanese 4" },
        {word: "Japanese 5" },
        {word: "AP Japanese" }
  ]
});

classes.initialize();



var teachers = new Bloodhound({
  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.word); },
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  limit: 4,
  local: [
  {
    "word": "Abdelhaq"
  },
  {
    "word": "Acio"
  },
  {
    "word": "Agyekum"
  },
  {
    "word": "Aninakwah"
  },
  {
    "word": "Appiah"
  },
  {
    "word": "Applin"
  },
  {
    "word": "Auerbach"
  },
  {
    "word": "Averill"
  },
  {
    "word": "Bailey"
  },
  {
    "word": "Behling"
  },
  {
    "word": "Bell"
  },
  {
    "word": "Billington"
  },
  {
    "word": "Bourjaily"
  },
  {
    "word": "Brown"
  },
  {
    "word": "Burch"
  },
  {
    "word": "Burden"
  },
  {
    "word": "Burdick-Zupancic"
  },
  {
    "word": "Burke"
  },
  {
    "word": "Burnett"
  },
  {
    "word": "Campbell"
  },
  {
    "word": "Carey"
  },
  {
    "word": "Carpenter"
  },
  {
    "word": "Castaldo"
  },
  {
    "word": "Chavez"
  },
  {
    "word": "Chhabra"
  },
  {
    "word": "Cobb"
  },
  {
    "word": "Coffey"
  },
  {
    "word": "Conklin"
  },
  {
    "word": "Cox"
  },
  {
    "word": "Culbertson"
  },
  {
    "word": "Cullen"
  },
  {
    "word": "Davis"
  },
  {
    "word": "Davis"
  },
  {
    "word": "D"
  },
  {
    "word": "De"
  },
  {
    "word": "DelaCuesta"
  },
  {
    "word": "Delfosse"
  },
  {
    "word": "Dell"
  },
  {
    "word": "Diggs"
  },
  {
    "word": "Donohue"
  },
  {
    "word": "Du"
  },
  {
    "word": "Dubin"
  },
  {
    "word": "Duong"
  },
  {
    "word": "Ero"
  },
  {
    "word": "Field"
  },
  {
    "word": "Forbes"
  },
  {
    "word": "Foreman"
  },
  {
    "word": "Forgash"
  },
  {
    "word": "Frank"
  },
  {
    "word": "Gabor"
  },
  {
    "word": "Gabriel"
  },
  {
    "word": "Galanos"
  },
  {
    "word": "Gardziel"
  },
  {
    "word": "Gendive"
  },
  {
    "word": "Ghodsinia"
  },
  {
    "word": "Gilbert"
  },
  {
    "word": "Glazer"
  },
  {
    "word": "Glotfelty"
  },
  {
    "word": "Glover"
  },
  {
    "word": "GrayMendes"
  },
  {
    "word": "Grzelkowski"
  },
  {
    "word": "Hamblin"
  },
  {
    "word": "Hannum"
  },
  {
    "word": "Hanson"
  },
  {
    "word": "Harris"
  },
  {
    "word": "Hennig"
  },
  {
    "word": "Henry"
  },
  {
    "word": "Hernandez"
  },
  {
    "word": "Hodges"
  },
  {
    "word": "Holman"
  },
  {
    "word": "Hurowitz"
  },
  {
    "word": "James"
  },
  {
    "word": "Jones"
  },
  {
    "word": "Jones"
  },
  {
    "word": "Kauffman"
  },
  {
    "word": "Kemp"
  },
  {
    "word": "Kennedy"
  },
  {
    "word": "Ketchem"
  },
  {
    "word": "Kim"
  },
  {
    "word": "Klein"
  },
  {
    "word": "Kobren"
  },
  {
    "word": "Kochman"
  },
  {
    "word": "Kosatka"
  },
  {
    "word": "Kosek"
  },
  {
    "word": "Kropf"
  },
  {
    "word": "Kyung"
  },
  {
    "word": "Lafever"
  },
  {
    "word": "Laffey"
  },
  {
    "word": "Lampazzi"
  },
  {
    "word": "Larson"
  },
  {
    "word": "Latham"
  },
  {
    "word": "Lauducci"
  },
  {
    "word": "Laursen"
  },
  {
    "word": "LebrykChao"
  },
  {
    "word": "Lee"
  },
  {
    "word": "Lee"
  },
  {
    "word": "Lee"
  },
  {
    "word": "Levine"
  },
  {
    "word": "Lewis"
  },
  {
    "word": "Lewis"
  },
  {
    "word": "<t"
  },
  {
    "word": ""
  },
  {
    "word": "Lister"
  },
  {
    "word": "Liu"
  },
  {
    "word": "Locklear"
  },
  {
    "word": "Loo"
  },
  {
    "word": "Love"
  },
  {
    "word": "Lowery"
  },
  {
    "word": "Luxenberg"
  },
  {
    "word": "Mateo"
  },
  {
    "word": "McAleer"
  },
  {
    "word": "McConnaughey"
  },
  {
    "word": "McCormick"
  },
  {
    "word": "McNichol"
  },
  {
    "word": "Miller"
  },
  {
    "word": "Monteverde"
  },
  {
    "word": "Moore"
  },
  {
    "word": "Morasca"
  },
  {
    "word": "Muir"
  },
  {
    "word": "Murphy"
  },
  {
    "word": "Myers"
  },
  {
    "word": "Obeng"
  },
  {
    "word": "Orser"
  },
  {
    "word": "Osborne"
  },
  {
    "word": "Oszko"
  },
  {
    "word": "Otani"
  },
  {
    "word": "Palmer"
  },
  {
    "word": "Piccione"
  },
  {
    "word": "Plescow"
  },
  {
    "word": "Pollet"
  },
  {
    "word": "Potoker"
  },
  {
    "word": "Pou"
  },
  {
    "word": "Powell"
  },
  {
    "word": "Priddy"
  },
  {
    "word": "Raya"
  },
  {
    "word": "Razzino"
  },
  {
    "word": "Reid"
  },
  {
    "word": "Rhee"
  },
  {
    "word": "Romeo"
  },
  {
    "word": "Rose"
  },
  {
    "word": "Rosenblum"
  },
  {
    "word": "Rudwick"
  },
  {
    "word": "Sacks"
  },
  {
    "word": "Sandstrom"
  },
  {
    "word": "Schgallis"
  },
  {
    "word": "Schmitt"
  },
  {
    "word": "Scholla"
  },
  {
    "word": "Scott"
  },
  {
    "word": "Seavey"
  },
  {
    "word": "Sheptyck"
  },
  {
    "word": "Smith"
  },
  {
    "word": "Smith"
  },
  {
    "word": "Smith"
  },
  {
    "word": "Sneed"
  },
  {
    "word": "Sondel"
  },
  {
    "word": "Spoden"
  },
  {
    "word": "Stickler"
  },
  {
    "word": "Struck"
  },
  {
    "word": "Stueben"
  },
  {
    "word": "Taylor"
  },
  {
    "word": "Tecuci"
  },
  {
    "word": "Tipton"
  },
  {
    "word": "Torbert"
  },
  {
    "word": "Tran"
  },
  {
    "word": "Va"
  },
  {
    "word": "Walker"
  },
  {
    "word": "Ware"
  },
  {
    "word": "Waters"
  },
  {
    "word": "Webb"
  },
  {
    "word": "Weber"
  },
  {
    "word": "West"
  },
  {
    "word": "Wickliff"
  },
  {
    "word": "Williams"
  },
  {
    "word": "Wong"
  },
  {
    "word": "Wood"
  },
  {
    "word": "Woodwell"
  },
  {
    "word": "Wu"
  },
  {
    "word": "Xu"
  },
  {
    "word": "Yi"
  },
  {
    "word": "Young"
  },
  {
    "word": "Yuan"
  },
  {
    "word": "Zack"
  }
]
});

teachers.initialize();

$('.teacherName').typeahead(null, {
  name: 'teachers',
  displayKey: 'word',
  source: teachers.ttAdapter()
});

$('.className').typeahead(null, {
  name: 'classes',
  displayKey: 'word',
  source: classes.ttAdapter()
});


$('.blueChildren').parent().children('span').addClass('blue');


