document.getElementById("form").addEventListener("submit", generateMeme);

function generateMeme() {
  var alertMsg = "";

  var url = document.getElementById("img_link").value;

  if(url=="") {
    alertMsg = "No URL provided!";
    changeAlert(alertMsg);
    event.preventDefault();
    return;
  }

  var fDiv = document.createElement("div");
  fDiv.classList.add("meme-div");

  var img = document.createElement("img");
  img.src = url;
  img.style.width = "100%";
  fDiv.appendChild(img);

  var t_t_t = document.getElementById("txt_top").value;
  if(t_t_t != ""){
    var t_top = document.createElement("p");
    t_top.innerText = t_t_t;
    t_top.classList.add("meme-text");
    t_top.style.top = "1%";
    fDiv.appendChild(t_top);
  } else {
    alertMsg += "<i>No top text provided.</i> <br><br>"
  }

  var t_b_t = document.getElementById("txt_bottom").value;
  if(t_b_t != ""){
    var t_bottom = document.createElement("p");
    t_bottom.innerText = t_b_t;
    t_bottom.classList.add("meme-text");
    t_bottom.style.bottom = "1%";
    fDiv.appendChild(t_bottom);
  } else {
    alertMsg += "<i>No bottom text provided.</i> <br><br>"
  }

  var delButton = document.createElement("button");
  delButton.classList.add("meme-delbutton");
  delButton.innerText = "X";
  delButton.addEventListener("click", deleteMe);
  fDiv.appendChild(delButton);

  var memelist = document.getElementById("meme-list");
  memelist.appendChild(fDiv);

  event.preventDefault();

  alertMsg += "Meme created successfully."

  changeAlert(alertMsg);
}

function deleteMe() {
  event.target.parentElement.remove();
  changeAlert("Meme deleted successfully.");
}

function changeAlert(msg) {
  document.getElementById('alert').innerHTML = msg;
}
