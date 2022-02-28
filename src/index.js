document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(data => {
    for (const url of data.message){
      const image = document.createElement("img")
      image.src = url
      document.querySelector("#dog-image-container").appendChild(image)
    }
  })

  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    const breeds = Object.keys(data.message)
    for (const breed of breeds) {
      const item = document.createElement("li")
      item.textContent = breed
      item.style.cursor = 'pointer'
      item.addEventListener("click", () => item.style.color = "red")
      document.querySelector("#dog-breeds").appendChild(item)
    }

    const select = document.querySelector("select")
    select.addEventListener("change", () => {
      const letter = select.options[select.selectedIndex].value
      const dog = document.querySelectorAll("li")
      dog.forEach(element => {
        if (element.textContent.startsWith(letter)) {
          element.style.display = ""
        }
        else {element.style.display = "none"}
      })
    })
  })
})
