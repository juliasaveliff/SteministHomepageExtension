window.onload = function () {
/*  Did not use ... 
    var startPos;
      var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(geoSuccess); */
    
    var rand= Math.floor(Math.random()*(quotes.length)); document.getElementById('quotedisplay').innerHTML=quotes[rand];
    
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toDateString();
    var p= new Date();
    document.getElementById("demo1").innerHTML = p.toLocaleTimeString();
};

var quotes= [
    'I used to not like being called a "woman architect." I am an architect, not just a woman architect. The guys used to tap me on the head and say "you are OK for a girl" But I see an incredible amount of need from other women for reassurance that it can be done, so I do not mind anymore. -Zaha Hadid',
    'Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained. -Marie Curie',
    'For whatever reason, I did not succumb to the stereotype that science was not for girls. I got encouragement from my parents. I never ran into a teacher or a counselor who told me that science was for boys. A lot of my friends did. -Sally Ride',
    'Do not be afraid of hard work. Nothing worthwhile comes easily. Do not let others discourage you or tell you that you can not do it. In my day I was told women did not go into chemistry. I saw no reason why we could not. -Gertrude B. Elion',
    'I have very personally felt the overwhelming loneliness, self-doubt, and frustration that often comes with the minority status of a woman in engineering. As much as I can help others get through or avoid those difficult stretches that I myself had to weather, I would like to. As a bonus, the more women (and minorities) that enter and do not leave the field, the better it all gets for everyone, including me! -Tracy Chou'
]

