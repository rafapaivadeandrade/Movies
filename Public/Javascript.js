"use strict";


function changeMe(){
            
    var m1 = '<div id="first">\
<div class="movie_img">\
        <div class="incredibles">\
    <img src="Public/Skyscraper.jpg" alt="Image" class="incredibles2"/>\
</div>\
<div class="movie_info">\
    <h3>Skyscraper <span>97 min</span></h3>\
    <p>12:40 pm     3:20 pm     6:40 pm</p>\
    </div>\
    <p class="description">\
        FBI Hostage Rescue Team leader and U.S. war veteran Will Sawyer now \
            assesses security for skyscrapers. On assignment in Hong Kong he finds \
            the tallest, safest building in the world suddenly ablaze, and hes been \
            framed for it.\
    </p>\
   </div>\
   </div>';
   
   var m2 = '<div id="second">\
    <div class="movie_img">\
            <div class="incredibles">\
        <img src="Public/Annabelle.jpg" alt="Image" class="incredibles2"/>\
    </div>\
    <div class="movie_info">\
        <h3>Annabelle <span>92 min</span></h3>\
        <p>13:40 pm     3:20 pm     6:00 pm</p>\
        </div>\
        <p class="description">\
        A couple begins to experience terrifying supernatural occurrences involving\
        a vintage doll shortly after their home is invaded by satanic cultists.\
        </p>\
       </div>\
       </div>';

       var m3 = '<div id="third">\
       <div class="movie_img">\
               <div class="incredibles">\
           <img src="Public/Avatar.jpg" alt="Image" class="incredibles2"/>\
       </div>\
       <div class="movie_info">\
           <h3>Avatar <span>102 min</span></h3>\
           <p>10:40 pm     2:20 pm     6:00 pm</p>\
           </div>\
           <p class="description">\
           A paraplegic marine dispatched to the moon\
           Pandora on a unique mission becomes torn between\
            following his orders and protecting the world he feels is his home.\
           </p>\
          </div>\
          </div>';

   if(document.getElementById("input").value=="Monday"){
  document.getElementById("first").innerHTML = m1;
  document.getElementById("second").innerHTML = m2;
  document.getElementById("third").innerHTML = m3
}
 var t1 = '<div id="first">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/BladeRunner.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>BladeRunner <span>156 min</span></h3>\
     <p>12:00 pm     1:45 pm     4:40 pm</p>\
     </div>\
     <p class="description">\
     A young blade runners discovery of a long-buried\
     secret leads him to track down former blade runner\
     Rick Deckard, whos been missing for thirty years.\
     </p>\
    </div>\
    </div>';
 var t2 = '<div id="second">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/Brave.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Brave <span>93 min</span></h3>\
     <p>9:00 am     12:45 pm     2:40 pm</p>\
     </div>\
     <p class="description">\
     Determined to make her own path in life.\
     Princess Merida defies a custom that brings chaos\
     to her kingdom. Granted one wish, Merida must rely\
     on her bravery and her archery skills to undo a beastly curse.\
     </p>\
    </div>\
    </div>';
 var t3 = '<div id="third">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/Equalizer.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Equalizer <span>106 min</span></h3>\
     <p>10:00 am     3:25 pm     5:40 pm</p>\
     </div>\
     <p class="description">\
     Robert McCall serves an unflinching justice\
     for the exploited and oppressed, but how far\
     will he go when that is someone he loves?\
     </p>\
    </div>\
    </div>';
 if(document.getElementById("input").value=="Tuesday"){
     document.getElementById("first").innerHTML = t1;
     document.getElementById("second").innerHTML = t2;
     document.getElementById("third").innerHTML = t3;
 }   
 var w1 = '<div id="first">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/fightclub.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Fight Club <span>120 min</span></h3>\
     <p>12:00 pm     3:25 pm     4:10 pm</p>\
     </div>\
     <p class="description">\
     An insomniac office worker, looking for a way to change his life,\
     crosses paths with a devil-may-care soapmaker, forming an underground\
     fight club that evolves into something much, much more.\
     </p>\
    </div>\
    </div>';
 var w2 = '<div id="second">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/Getout.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Get Out <span>100 min</span></h3>\
     <p>13:00 pm     3:00 pm     5:10 pm</p>\
     </div>\
     <p class="description">\
     A young African-American visits his white girlfriends parent\'s\
     for the weekend, where his simmering uneasiness about their reception\
     of him eventually reaches a boiling point.\
     </p>\
    </div>\
    </div>';
 var w3 ='<div id="third">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/Meg.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Meg <span>80 min</span></h3>\
     <p>12:00 pm     2:30 pm     7:10 pm</p>\
     </div>\
     <p class="description">\
     After escaping an attack by what he claims was a 70-foot shark,\
     Jonas Taylor must confront his fears to save those trapped in a\
     sunken submersible.\
     </p>\
    </div>\
    </div>';
 if(document.getElementById("input").value=="Wednesday"){
     document.getElementById("first").innerHTML = w1;
     document.getElementById("second").innerHTML = w2;
     document.getElementById("third").innerHTML = w3;
 }
 var th1 = '<div id="first">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/lalaland.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Lalaland <span>140 min</span></h3>\
     <p>1:00 pm     2:30 pm     5:10 pm</p>\
     </div>\
     <p class="description">\
     While navigating their careers in Los Angeles, a pianist and an actress\
     fall in love while attempting to reconcile their aspirations for the future.\
     </p>\
    </div>\
    </div>';
 var th2 = '<div id="second">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/madagascar.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Madagascar <span>80 min</span></h3>\
     <p>2:00 pm     5:30 pm     8:40 pm</p>\
     </div>\
     <p class="description">\
     Spoiled by their upbringing and unaware of what wildlife really is,\
     four animals from the New York Central Zoo escape, unwittingly assisted\
     by four absconding penguins, and find themselves in Madagascar.\
     </p>\
    </div>\
    </div>';
 var th3 = '<div id="third">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/Mission.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Mission Impossible <span>120 min</span></h3>\
     <p>2:00 pm     4:00 pm     7:10 pm</p>\
     </div>\
     <p class="description">\
     Ethan Hunt and his IMF team, along with some familiar allies,\
     race against time after a mission gone wrong.\
     </p>\
    </div>\
    </div>';
 if(document.getElementById("input").value=="Thursday"){
     document.getElementById("first").innerHTML = th1;
     document.getElementById("second").innerHTML = th2;
     document.getElementById("third").innerHTML = th3;
 }
 var f1 = '<div id="first">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/Mummy.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Mummy Impossible <span>135 min</span></h3>\
     <p>2:00 pm     4:00 pm     7:10 pm</p>\
     </div>\
     <p class="description">\
     An ancient Egyptian princess is awakened from her crypt beneath the desert,\
     bringing with her malevolence grown over millennia, and terrors that defy human comprehension.\
     </p>\
    </div>\
    </div>';
 var f2 = '<div id="second">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/Pulp.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Pulp Fiction <span>170 min</span></h3>\
     <p>1:20 pm     4:00 pm     6:20 pm</p>\
     </div>\
     <p class="description">\
     The lives of two mob hitmen, a boxer, a gangsters wife, and a pair\
     of diner bandits intertwine in four tales of violence and redemption.\
     </p>\
    </div>\
    </div>';
 var f3 = '<div id="third">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/ratattoulie.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Ratattoulie <span>110 min</span></h3>\
     <p>1:50 pm     4:30 pm     6:10 pm</p>\
     </div>\
     <p class="description">\
     A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.\
     </p>\
    </div>\
    </div>';
 if(document.getElementById("input").value =="Friday"){
     document.getElementById("first").innerHTML = f1;
     document.getElementById("second").innerHTML = f2;
     document.getElementById("third").innerHTML = f3;
 }
 var s1 = '<div id="first">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/Star.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Star Wars <span>180 min</span></h3>\
     <p>2:50 pm     4:30 pm     6:00 pm</p>\
     </div>\
     <p class="description">\
     Rey develops her newly discovered abilities with the guidance of Luke Skywalker,\
     who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares\
     for battle with the First Order.\
     </p>\
    </div>\
    </div>';
 var s2 = '<div id="second">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/Startrek.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Startrek <span>170 min</span></h3>\
     <p>1:50 pm     3:30 pm     4:00 pm</p>\
     </div>\
     <p class="description">\
     Ten years before Kirk, Spock and the Enterprise, the USS Discovery\
      discovers new worlds and lifeforms as one Starfleet officer learns to understand all things alien.\
     </p>\
    </div>\
    </div>';
 var s3 = '<div id="third">\
 <div class="movie_img">\
         <div class="incredibles">\
     <img src="Public/Venom.jpg" alt="Image" class="incredibles2"/>\
 </div>\
 <div class="movie_info">\
     <h3>Venom <span>130 min</span></h3>\
     <p>1:1o pm     2:30 pm     4:00 pm</p>\
     </div>\
     <p class="description">\
     When Eddie Brock acquires the powers of a symbiote,\
     he will have to release his alter-ego "Venom" to save his life.\
     </p>\
    </div>\
    </div>';
 if(document.getElementById("input").value =="Saturday"){
     document.getElementById("first").innerHTML = s1;
     document.getElementById("second").innerHTML = s2;
     document.getElementById("third").innerHTML = s3;
 }
}

function submitForm(){
 var x = document.getElementById('username').value;
 var y = document.getElementById('password').value;
 if(x=="" || y==""){
     alert("Please fill in all fields");    
 }
 else{
     alert("You are logged in");
     
 }
}
    function showLoginForm(){
        document.querySelector('.bg-modal').style.display = 'flex';    
};

    function closeLoginForm(){
        document.querySelector('.bg-modal').style.display = 'none';
    }
    
    