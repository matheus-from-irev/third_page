document.getElementById("send-request-button").addEventListener("click", function() {

    const clickId = new URLSearchParams(window.location.search).get("click_id");
    var postback = "https://demo-igaming.irev.com/backend/api/v3/goal-type-fire/15?hash=REPLACE"
    postback = postback.replace("REPLACE", clickId);
    fetch(postback)
    console.log(postback)

  });
