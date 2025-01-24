document.getElementById("send-request-button").addEventListener("click", function() {

    let clickId = ""
    clickId = new URLSearchParams(window.location.search).get("click_id");

    fetch("https://example.com", { method: "GET" })
      .then(function(response) {
        console.log("GET request successful");
      })
      .catch(function(error) {
        console.error("GET request failed:", error);
      });
  });
