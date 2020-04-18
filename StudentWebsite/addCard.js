var ID=0;
function addCard(myDiv)
{
  var child=myDiv+ID
  var tweet = $('<div class= "card" id= "'+child+'">\
  <img src="./twitter.jpg" alt="My Favorite Hobby" height="300px" width="350px">\
  <li class="list-group-item"> Tweet</li>\
  <button type="button" onclick="deleteCard('+child+')">-</button>\
  </div>');
  tweet.appendTo('#'+myDiv);
  ID++;
}
function deleteCard(cardID)
{
  cardID.remove();
}
