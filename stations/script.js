var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var primaryTheme = document.getElementsByName('primary_theme');
var title = document.getElementByName('addTitle');

for (var i = 0, length = primaryTheme.length; i < length; i++) {
  if(!(title === "")) {
    document.getElementById("dropdownStuff").innerHTML += "<a href='/stations/create-new-station" + "/" + title + "'>" + title + "</a>";
    
    if (primaryTheme[i].checked) {
      if (primaryTheme[i].value == 

      break;
    }
  }
}
