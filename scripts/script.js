let characterName=document.getElementById("character-name")
let characterNameDisplay=""
let characterDiscription=document.getElementById("character-description")
let characterDiscriptionDisplay=""
let characterPhoto=document.getElementById("character-photo")
let characterPhotoLink=""

let searchBtn=document.getElementById("search-button")
let characterInput=document.getElementById("search-box");

//const searchBarInput2=searchBarInput.value
const marvelInput = "hulk"
const marvelInputNoS = marvelInput.replace(/\s+/g, '');
const marvelCharacter = marvelInputNoS.toLowerCase()

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

async function marvel(){
    const response =await fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith="+marvelCharacter+"&ts=1&apikey=c6c410f564a7361717294de109f25d9a&hash=bb8d62d7bf94d0ca3c9a989e86a12dda");
    const data = await response.json()  
    const name_loop=data.data.count
    console.log(data)
     console.log("name_loop is "+name_loop)
      for(i=0;i<name_loop-1;i++){
        const characterName = (data.data.results[i].name)
        const characterImage = (data.data.results[i].thumbnail.path+".jpg")
        const characterDescription = (data.data.results[i].description)
        console.log(characterImage)
        
        const headingElement = $(`

        <div class="column">
          <div class="card">
          <div class="card-content">
            <div class="has-text-centered">
              <span class="is-size-1">
                <img src=${characterImage} width="128">
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

`);

$("body").append(headingElement);

}

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
        
      
        
        

};
marvel()

async function redditMarvel(){ //fetching 20 hot posts from the characters searched subreddit
    const response = await fetch ("https://oauth.reddit.com/r/marvel/hot.json?limit=20",{ //change to 100 if using the search for loop
      headers: {  
        Authorization: "bearer 675480154540-RRiPTLQ2q6qgcWVIFYxl8hjPimu-AQ"
        }
})
const data = await response.json()
    const children = (data.data.children.length)
    console.log(data)
    for (i=0; i < children; i++){
        const marvelTitle = (data.data.children[i].data.title)
        const marvelText = (data.data.children[i].data.selftext)
        const marvelCommentCount = (data.data.children[i].data.num_comments)
        const marvelImageURL = (data.data.children[i].data.thumbnail)
        const marvelPerma = (data.data.children[i].data.permalink)
        const marvelLink = ("https://www.reddit.com"+marvelPerma)
        console.log(marvelTitle)
        console.log(marvelCommentCount)
        console.log(marvelText)
        console.log(marvelImageURL)
        console.log(marvelLink)
}
};

async function reddit(){ //fetching 20 hot posts from the characters searched subreddit
    const response = await fetch ("https://oauth.reddit.com/r/"+marvelCharacter+"/hot.json?limit=20",{ //change to 100 if using the search for loop
      headers: {  
        Authorization: "bearer 675480154540-RRiPTLQ2q6qgcWVIFYxl8hjPimu-AQ"
      }
    })
    const data = await response.json()
    const children = (data.data.children.length)
    console.log(data)
    for (i=0; i < children; i++){
        const characterTitleR = (data.data.children[i].data.title)
        const characterTextR = (data.data.children[i].data.selftext)
        const characterCommentCountR = (data.data.children[i].data.num_comments)
        const characterImageURLR = (data.data.children[i].data.thumbnail)
        const characterPermaR = (data.data.children[i].data.permalink)
        const characterLinkR = ("https://www.reddit.com"+characterPermaR)
        console.log(characterTitleR)
        console.log(characterCommentCountR)
        console.log(characterTextR)
        console.log(characterImageURLR)
        console.log(characterLinkR)
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
}}

//const cardInfo = 
