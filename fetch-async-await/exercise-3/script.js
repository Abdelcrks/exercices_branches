const divPost= document.getElementById("post-container")
const loading = document.getElementById("loading")
// console.log(loading)

const post = async () => {
    loading.innerText="chargement en cours ... ⏳"

    const response = await fetch("https://dummyjson.com/posts")
    const data = await response.json()

    loading.style.display="none"

    data.posts.forEach(post => {
      const h2Title = document.createElement("h2")
      divPost.appendChild(h2Title)
      h2Title.innerText= post.title 
      
      const pBody= document.createElement("p")
      divPost.appendChild(pBody)
      pBody.innerText= post.body

      const pTags = document.createElement("p")
      divPost.appendChild(pTags)
      pTags.innerText = post.tags
    });

}   

post()
