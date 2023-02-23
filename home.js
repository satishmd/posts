function createCard(post){
  var title = post.title.rendered
  var excerpt = post.excerpt
  var image = post.jetpack_featured_media_url
  var creator = post.parselyMeta["parsely-author"][0]
  var date = post.date

  var container = document.getElementById("main-containaer")

  var card = document.createElement("a")
  card.setAttribute("href", post.link)
  card.setAttribute("target", "_blank")
  card.classList.add("card")
  container.appendChild(card)

  var cardImage = document.createElement('img')
  cardImage.setAttribute('src',image)
  card.appendChild(cardImage)
  
  var cardDetails = document.createElement("div")
  card.appendChild(cardDetails)

  var cardTitle = document.createElement("h2")
  cardTitle.textContent = title
  cardDetails.appendChild(cardTitle)

  var cardDate = document.createElement("h3")
  cardDate.textContent = date
  cardDetails.appendChild(cardDate)

  var cardCrator = document.createElement("h4")
  cardCrator.textContent = "- " + creator
  cardDetails.appendChild(cardCrator)
}




axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed')
        .then(response => {
          var posts = response.data
          posts.sort((a, b) => a.date - b.date);
          posts.map((post) => createCard(post))
        })
        .catch(error => {
          console.error(error);
        });