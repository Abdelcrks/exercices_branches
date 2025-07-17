const divPost= document.getElementById("post-container")
const loading = document.getElementById("loading")
// console.log(loading)

const post = async () => {
    loading.innerText="chargement en cours ... ⏳"

    const response = await fetch("https://dummyjson.com/posts")
    const data = await response.json()

    loading.style.display="none"

    data.posts.forEach(post => {
      const h2 = document.createElement("h2")
      divPost.appendChild(h2)
      h2.innerText= post.title 
      
      const p = document.createElement("p")
      divPost.appendChild(p)
      p.innerText= post.body
    });

}   

post()

