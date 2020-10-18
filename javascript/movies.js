window.onload = function() {
  document.getElementById("movieSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("movieInput").value;
    console.log(value);
    const url = "https://www.omdbapi.com/?t=" + value + "&apikey=e71bec25";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let advice = "hello";
        let mol = "Bionicle: Mask of Light";
        let lmn = "Bionicle 2: Legends of Metru Nui";
        let ws = "Bionicle 3: Web of Shadows";
        let lr = "Bionicle: The Legend Reborn";
        let results = "<div id=\"movieContainer\">";
        if (json.Title === mol) {
          results += "<img class='poster' src='../images/mol.jpg' />";
        }
        else if (json.Title === lmn) {
          results += "<img class='poster' src='../images/lmn.jpg' />";
        }
        else if (json.Title === ws) {
          results += "<img class='poster' src='../images/ws.jpg' />";
        }
        else if (json.Title === lr) {
          results += "<img class='poster' src='../images/lr.png' />";
        }
        else {
          results += "<img class='poster' src='../images/boo.jpg' />";
        }

        results += "<div id='movieInfo'>";
        results += "<p style = 'margin-left: 15px; text-align: left; font-size: 30pt; font-weight: bold;'>     " + json.Title + " (" + json.Year + ")</p><hr/>";
        results += "<p style = 'font-size: 20pt; margin-left: 15px; text-align: left;'><b>Director:</b> " + json.Director + "</p>";
        results += "<p style = 'font-size: 20pt; margin-left: 15px; text-align: left;'><b>Writers:</b> " + json.Writer + "</p>";
        results += "<p style = 'font-size: 20pt; margin-left: 15px; text-align: left;'><b>Stars:</b> " + json.Actors + "</p>";
        results += "<p style = 'font-size: 20pt; margin-left: 15px; text-align: left;'><b>IMDb Rating:</b> " + json.imdbRating + "</p>";
        results += "<p style = 'font-size: 20pt; margin-left: 15px; text-align: left;'><b>Plot:</b> " + json.Plot + "</p>";
        results+="</div>";
        results+="</div>";
        results+= "<div style=\"height: 20px;\"></div>";

        if (json.Title === mol) {
          results += "<iframe style = 'display: block; margin: auto;' width=\"896\" height=\"504\" src=\"https://www.youtube.com/embed/ep7fZkUwqVg\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
        }
        else if (json.Title === lmn) {
          results += "<iframe style = 'display: block; margin: auto;' width=\"896\" height=\"504\" src=\"https://www.youtube.com/embed/sq4rykVtCjI\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
        }
        else if (json.Title === ws) {
          results += "<iframe style = 'display: block; margin: auto;' width=\"896\" height=\"504\" src=\"https://www.youtube.com/embed/ppsZn4RAs6s\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
        }
        else if (json.Title === lr) {
          results += "<iframe style = 'display: block; margin: auto;' width=\"896\" height=\"504\" src=\"https://www.youtube.com/embed/aknI4ZmN8kI\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
        }

        console.log(json);
        document.getElementById("movieResults").innerHTML = results;
      });

  });
}


let mol = "Bionicle: Mask of Light";
