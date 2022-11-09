/* 
const redditAPI = document.querySelector("")
const marvelAPI = document.querySelector("")
const marvelInput = document.querySelector("")
*/
const marvelInput = "Tony"
async function marvel(){
    const response =await fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith="+marvelInput+"&ts=1&apikey=c6c410f564a7361717294de109f25d9a&hash=bb8d62d7bf94d0ca3c9a989e86a12dda");
    const data = await response.json()
    console.log(data)
    
}
//marvel()





async function reddit(){
    const response = await fetch ("https://oauth.reddit.com/r/marvel/hot.json?limit=100",{
      headers: {  
        Authorization: "bearer 675480154540-Nsc4sE1KjfQ5v57WDjDkVh-aiXhH1w"
      }
    })
    const data = await response.json()
    const children = (data.data.children.length)
    console.log(data)
    /*for (i=0; i < children; i++){
        const marvelTitle = (data.data.children[i].data.title)
        const marvelText = (data.data.children[i].data.selftext)
        if (marvelText===""){
            continue
        }
        if (marvelTitle.includes(marvelInput) || marvelText.includes(marvelInput)){
            console.log(marvelTitle)
        }
        else {
            console.log("No matches")
        } 
    }*/
}
reddit()

