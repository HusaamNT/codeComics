let characterName = document.getElementById("character-name");
let characterNameDisplay = "";
let characterDiscription = document.getElementById("character-description");
let characterDiscriptionDisplay = "";
let characterPhoto = document.getElementById("character-photo");
let characterPhotoLink = "";

let searchBtn = document.getElementById("search-button");
let characterInput = document.getElementById("search-box");


const search = function(){
  $("#card-container").empty();
  marvel()
  reddit()
}

// const marvelInput = characterInput.value

// console.log(marvelInput)

searchBtn.addEventListener("click", search)

//const marvelInput = "spid";

// const marvelInputNoS = marvelInput.replace(/\s+/g, "");
// const marvelInputNoD = marvelInputNoS.replace(/-/g, "");
// const marvelCharacter = marvelInputNoD.toLowerCase();

//alert("js starting point work")
// function search(event){
//     event.preventDefault()
//     console.log("searchBarInput: "+searchBarInput.value)

//     fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith="+searchBarInput.value+"&ts=1&apikey=c6c410f564a7361717294de109f25d9a&hash=bb8d62d7bf94d0ca3c9a989e86a12dda")
// .then(function (response){
//     return response.json()
// } )

//https://gateway.marvel.com/v1/public/characters?nameStartsWith="+marvelCharacter+"&ts=1&apikey=c6c410f564a7361717294de109f25d9a&hash=bb8d62d7bf94d0ca3c9a989e86a12dda")
//;/v1/public/characters/

async function marvelDefault() {
  const defaultCharacters = ["iron_man","moon_knight", "thanos", "doctor_strange"]
  const marvelFeatured = defaultCharacters.length
  let name_loop;
  for (i = 0; i < marvelFeatured; i++){
  const response = await fetch(
    "https://gateway.marvel.com/v1/public/characters?nameStartsWith=" +
      defaultCharacters[i] +
      "&limit=100&ts=1&apikey=c6c410f564a7361717294de109f25d9a&hash=bb8d62d7bf94d0ca3c9a989e86a12dda"
  );
  const data = await response.json();
  const name_loop = data.data.count;

  console.log(data);
  console.log("name_loop is " + name_loop);

  for (i = 0; i < name_loop - 1; i++) {
    const characterName = data.data.results[i].name;
    const characterImage = data.data.results[i].thumbnail.path + ".jpg";
    const characterDescription = data.data.results[i].description;
    if (characterDescription ===  ""){
      continue
    }
    const headingElement = $(`
        <div class="columns pt-6 is-flex-direction-row"
        <div class="columns pt-6">
        <div class="column">
          <div class="card">
          <div class="card-content">
            <div class="has-text-centered">
              <span class="is-size-1">
                <img src=${characterImage} width="300">
              </span>
            </div>
            <p class="title is-4">
              ${characterName}
            </p>
            <div class="content">
            ${characterDescription}
            </div>
          </div>
          <footer class="card-footer">
          
            <a href="#" class="card-footer-item">Learn more</a>
          </footer>
          </div>
        </div>
        </div>


`);
$("#card-container").append(headingElement);
}
return
}};


async function marvel() {
  const marvelInput = characterInput.value

  console.log(marvelInput)
  const marvelInputNoS = marvelInput.replace(/\s+/g, "");

  const response = await fetch(
    "https://gateway.marvel.com/v1/public/characters?nameStartsWith=" +
      marvelInputNoS +
      "&limit=100&ts=1&apikey=c6c410f564a7361717294de109f25d9a&hash=bb8d62d7bf94d0ca3c9a989e86a12dda"
  );
  const data = await response.json();
  const name_loop = data.data.count;
  console.log(data);
  console.log("name_loop is " + name_loop);
  for (i = 0; i < name_loop - 1; i++) {
    const characterName = data.data.results[i].name;
    const characterImage = data.data.results[i].thumbnail.path + ".jpg";
    const characterDescription = data.data.results[i].description;
    if (characterDescription ===  ""){
      continue
    }
    else{
    const headingElement = $(`
        
        <div class="columns pt-6">
        <div class="column">
          <div class="card">
          <div class="card-content">
            <div class="has-text-centered">
              <span class="is-size-1">
                <img src=${characterImage} width="300">
              </span>
            </div>
            <p class="title is-4">
              ${characterName}
            </p>
            <div class="content">
            ${characterDescription}
            </div>
          </div>
          <footer class="card-footer">
          
            <a href="#" class="card-footer-item">Learn more</a>
          </footer>
          </div>
        </div>
        </div>
        </div>

`);

    $("#card-container").append(headingElement);
  }}

  //console.log("name_for_loop runs normally")
  //console.log(data.data.results[i])

  // characterNameDisplay=[]
  // characterNameDisplay[i]=document.createElement("h1")
  // characterNameDisplay[i]=data.data.results[i].name
  // characterName.append(characterNameDisplay)

  // characterPhotoLink=[]
  // characterPhotoLink[0]=document.createElement("p")
  // characterPhotoLink[0]=data.data.results[0].thumbnail.path
  // photo1 =  window.location.href="characterPhotoLink[0]"
  // characterPhoto.append(characterPhotoLink)

  /*characterDiscriptionDisplay=[]
        characterDiscriptionDisplay[i]=document.createElement("h2")
        characterDiscriptionDisplay[i]=data.data.results[i].description
        characterDiscription.append(characterDiscriptionDisplay)*/

  // console.log("characterNameDisplay: "+characterNameDisplay)
  // console.log("name_for_loop runs normally")
}


async function redditMarvel() {
  //fetching 20 hot posts from the characters searched subreddit
  const response = await fetch(
    "https://oauth.reddit.com/r/marvel/hot.json?limit=20",
    {
      //change to 100 if using the search for loop
      headers: {
        Authorization: "bearer 675480154540-bdOolcI7Pbyzqlz0dyVINbzLaBHFaQ",
      },
    }
  );
  const data = await response.json();
  const children = data.data.children.length;
  console.log(data);
  for (i = 0; i < children; i++) {
    const marvelTitle = data.data.children[i].data.title;
    const marvelText = data.data.children[i].data.selftext;
    const marvelCommentCount = data.data.children[i].data.num_comments;
    const marvelImageURL = data.data.children[i].data.thumbnail;
    const marvelPerma = data.data.children[i].data.permalink;
    const marvelLink = "https://www.reddit.com" + marvelPerma;
    console.log(marvelTitle);
    console.log(marvelCommentCount);
    console.log(marvelText);
    console.log(marvelImageURL);
    console.log(marvelLink);
  }
}

async function reddit() {
  const marvelInput = characterInput.value

  const marvelInputNoS = marvelInput.replace(/\s+/g, "");
  const marvelInputNoD = marvelInputNoS.replace(/-/g, "");
  const marvelCharacter = marvelInputNoD.toLowerCase();

  //fetching 20 hot posts from the characters searched subreddit
  const response = await fetch(
    "https://oauth.reddit.com/r/" + marvelCharacter + "/hot.json?limit=20",
    {
      //change to 100 if using the search for loop
      headers: {
        Authorization: "bearer 675480154540-bdOolcI7Pbyzqlz0dyVINbzLaBHFaQ",
      },
    }
  );
  const data = await response.json();
  const children = data.data.children.length;
  console.log(data);
  for (i = 0; i < children; i++) {
    const characterTitleR = data.data.children[i].data.title;
    const characterTextR = data.data.children[i].data.selftext;
    const characterCommentCountR = data.data.children[i].data.num_comments;
    const characterImageURLR = data.data.children[i].data.thumbnail;
    const characterPermaR = data.data.children[i].data.permalink;
    const characterLinkR = "https://www.reddit.com" + characterPermaR;
    console.log(characterTitleR);
    console.log(characterCommentCountR);
    console.log(characterTextR);
    console.log(characterImageURLR);
    console.log(characterLinkR);

    const headingElement = $(`
        <article class="media" id="redditPost3">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="./assest/Images/profile-1.webp" width="128" height="128" alt="Profile-Picture">
          </p>
        </figure>
        <div class="media-content" id="post-1">
          <div class="content" id="post-1-content">
            <p>
              <strong>${characterTitleR}</strong> <small>${characterTitleR}</small> <small>31m</small>
              <br>
              ${characterTextR}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete"></button>
        </div>
      </article>
`);
    $("#reddit").append(headingElement);

    /*if (marvelText===""){
            continue
        }
        if (marvelTitle.includes(marvelCharacter) || marvelText.includes(marvelCharacter)){
            console.log(marvelTitle)
            console.log(marvelText)
        }
        else {
            console.log("No matches")
        }
    }*/
  }
}

//const cardInfo =

//reddit();
//marvel()

async function redditDefault() {
  //fetching 20 hot posts from the characters searched subreddit
  const response = await fetch(
    "https://oauth.reddit.com/r/marvel/hot.json?limit=20",
    {
      //change to 100 if using the search for loop
      headers: {
        Authorization: "bearer 675480154540-bdOolcI7Pbyzqlz0dyVINbzLaBHFaQ",
      },
    }
  );
  const data = await response.json();
  const children = data.data.children.length;
  console.log(data);
  for (i = 0; i < children; i++) {
    const characterTitleR = data.data.children[i].data.title;
    const characterTextR = data.data.children[i].data.selftext;
    const characterCommentCountR = data.data.children[i].data.num_comments;
    const characterImageURLR = data.data.children[i].data.thumbnail;
    const characterPermaR = data.data.children[i].data.permalink;
    const characterLinkR = "https://www.reddit.com" + characterPermaR;
    console.log(characterTitleR);
    console.log(characterCommentCountR);
    console.log(characterTextR);
    console.log(characterImageURLR);
    console.log(characterLinkR);

    const headingElement = $(`

        <article class="media" id="redditPost3">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="./assest/Images/profile-1.webp" width="128" height="128" alt="Profile-Picture">
          </p>
        </figure>
        <div class="media-content" id="post-1">
          <div class="content" id="post-1-content">
            <p>
              <strong>${characterTitleR}</strong> <small>${characterTitleR}</small> <small>31m</small>
              <br>
              ${characterTextR}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete"></button>
        </div>
      </article>
`);
    $("#reddit").append(headingElement);

    /*if (marvelText===""){
            continue
        }
        if (marvelTitle.includes(marvelCharacter) || marvelText.includes(marvelCharacter)){
            console.log(marvelTitle)
            console.log(marvelText)
        }
        else {
            console.log("No matches")
        }
    }*/
  }
}

//const cardInfo =

//reddit();
//marvel()

if (characterInput.value.length == 0){
  marvelDefault()
  redditDefault()
}
