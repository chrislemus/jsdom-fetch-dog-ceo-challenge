console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 




window.addEventListener("load",  async () => {
  const dogImgs = await fetch(imgUrl).then(res => res.json()).then(json => json.message)
  const dogImgsWrapper = document.querySelector('#dog-image-container')
  dogImgs.forEach(imgLink => {
    dogImgsWrapper.innerHTML += `<img src="${imgLink}"  width="100px" height="100px">`
  });

  //breed list
  const breedList = document.querySelector('#dog-breeds')
  const breeds = await fetch(breedUrl).then(res => res.json()).then(json => json.message)
  for (const breed in breeds) breedList.innerHTML += `<li>${breed}</li>`;  

  //breed list color change
  breedList.addEventListener('click', e => {
    if (e.target.tagName == 'LI') e.target.style.color = 'red';
  })

  //breed filtering
  const breedDropdown = document.querySelector('#breed-dropdown')
  breedDropdown.addEventListener('change', e => {
    const letterSelected = e.target.value
    const breeds = breedList.querySelectorAll('LI')
    breeds.forEach(breed => {
      breed.hidden = breed.innerHTML[0] == letterSelected ? false : true;
    });
  })
})


