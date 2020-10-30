document.getElementById("form").addEventListener("submit", generateMeme);

function generateMeme() {
  var fDiv = document.createElement("div");
  fDiv.classList.add("meme-div");

  var img = document.createElement("img");
  img.src = document.getElementById("img_link").value;
  img.style.width = "100%";
  fDiv.appendChild(img);

  var t_top = document.createElement("p");
  t_top.innerText = document.getElementById("txt_top").value;
  t_top.classList.add("meme-text");
  t_top.style.top = "1%";
  fDiv.appendChild(t_top);

  var t_bottom = document.createElement("p");
  t_bottom.innerText = document.getElementById("txt_bottom").value;
  t_bottom.classList.add("meme-text");
  t_bottom.style.bottom = "1%";
  fDiv.appendChild(t_bottom);

  var delButton = document.createElement("button");
  delButton.classList.add("meme-delbutton");
  delButton.innerText = "X";
  delButton.addEventListener("click", deleteMe);
  fDiv.appendChild(delButton);

  var memelist = document.getElementById("meme-list");
  memelist.appendChild(fDiv);

  event.preventDefault();
}

function deleteMe() {
  event.target.parentElement.remove();
}
