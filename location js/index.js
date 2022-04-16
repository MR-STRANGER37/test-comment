// getting all required elements
const button = document.querySelector("#button");
const commentList = document.querySelector("#comment-list");

showComments();

function myFunction() {
  var name = document.getElementById("name").value; //getting value of input field
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;
  let storage = localStorage.getItem("New Comments"); //getting localstorage

  if (storage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(storage);
  }

  listArr.push(
    //pushing or adding new value in array
    "<span>" +
      "<img src = 'user.png'/>" +
      name +
      "<br/>" +
      email +
      "</span>" +
      "<br>" +
      comment
  );
  localStorage.setItem("New Comments", JSON.stringify(listArr));

  showComments(); //calling showComments function
}

function showComments() {
  let storage = localStorage.getItem("New Comments");

  if (storage == null) {
    listArr = []; //create a blank array
  } else {
    listArr = JSON.parse(storage); //transforming json string into a js object
  }

  let liTag = "";

  listArr.forEach((element, index) => {
    liTag += `<li> ${element} </li>`;
  });

  commentList.innerHTML = liTag;
}