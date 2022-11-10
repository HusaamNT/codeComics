/* 
const redditAPI = document.querySelector("")
const marvelAPI = document.querySelector("")
const marvelInput = document.querySelector("")
*/
const marvelInput = "iron Man"
async function marvel(){
    const response =await fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith="+marvelInput+"&ts=1&apikey=c6c410f564a7361717294de109f25d9a&hash=bb8d62d7bf94d0ca3c9a989e86a12dda");
    const data = await response.json()
    console.log(data)
    
}
//marvel()

const marvelInputNoS = marvelInput.replace(/\s+/g, '');
const marvelCharacter = marvelInputNoS.toLowerCase()

async function redditMarvel(){ //fetching 20 hot posts from the characters searched subreddit
    const response = await fetch ("https://oauth.reddit.com/r/marvel/hot.json?limit=20",{ //change to 100 if using the search for loop
      headers: {  
        Authorization: "bearer 675480154540-RRiPTLQ2q6qgcWVIFYxl8hjPimu-AQ"
        }

})};

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
reddit()

//const cardInfo = 
