window.onload = function() {
  document.getElementById("adviceSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let advice = json.slip.advice;
        let results = "<h2>"+"\""+advice+"\"" +"</h2>";
        console.log(json);
        document.getElementById("adviceResults").innerHTML = results;
      });

  });
}
