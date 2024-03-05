var cat = {
    "name" : "Kovu",
    "february" : [
      {"crime1" : "Ripping a garbage bag and eating the plastics."},
      {"crime2" : "Pooping on the mat right outside of the litter box."},
      {"crime3" : "Eating out of Oreo the Cat's food when it's the same food."},
      {"crime4" : "Trying to ingest fairy lights."}
    ],
    "march" : [
      {"crime5" : "Breaking roommate's mug.", "mugtype" : "Small Milk Pitcher"},
      {"crime6" : "Breaking my mug.", "mugType" : "Black Cat Mug"},
      {"crime7" : "Assault and battery."},
      {"crime8" : "Waking me up in 2hr intervals for no reason other than to annoy me."}
    ],
    "punishments": ["No treats", "No entry to bedroom for an hr."]
    
  };
  
  
  var line = cat.name+"'s Transgressions";
  var word1 = cat.february[0].crime1;
  var word2 = cat.february[1].crime2;
  var word3 = cat.february[2].crime3;
  var word4 = cat.february[3].crime4;
  var word5 = cat.march[0].crime5;
  var word6 = cat.march[1].crime6;
  var word7 = cat.march[2].crime7;
  var word8 = cat.march[3].crime8;
  
  
  document.getElementById("text").innerHTML = "<h1>"+line+"</h1>";
  
  document.getElementById("text2").innerHTML = "1. "+word1;
  document.getElementById("text3").innerHTML = "2. "+word2;
  document.getElementById("text4").innerHTML = "3. "+word3;
  document.getElementById("text5").innerHTML = "4. "+word4;
  document.getElementById("text6").innerHTML = "5. "+word5;
  document.getElementById("text7").innerHTML = "6. "+word6;
  document.getElementById("text8").innerHTML = "7. "+word7;
  document.getElementById("text9").innerHTML = "8. "+word8;
  
  
  