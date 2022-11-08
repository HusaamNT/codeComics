/* const redditAPI = document.querySelector("")
const marvelAPI = document.querySelector("")
*/



async function reddit(){
    const response = await fetch ("https://oauth.reddit.com/api/v1/me.json",{
      headers: {  
        Authorization: "bearer 675480154540-GyXQOLW_7uF8y7MS1dFIvvhMaxhZww"
      }
    })
    const data = await response.json()

    console.log(data)
}
reddit()

