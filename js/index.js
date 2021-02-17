const productList = document.querySelector('#productList')
const newsList = document.querySelector('#newsList')

let aboutTitle = document.querySelector('.about__title')
let weThinkTitle = document.querySelector('.we-think__title')
let last_known_scroll_position = 0;

window.addEventListener('scroll', function() {
  last_known_scroll_position = window.scrollY;

    if(last_known_scroll_position>250){
      aboutTitle.classList.add('tracking-in-expand')
    }else{
      aboutTitle.classList.remove('tracking-in-expand')
    }

    if(last_known_scroll_position>1650){
      weThinkTitle.classList.add('tracking-in-expand')
    }else{
      weThinkTitle.classList.remove('tracking-in-expand')
    }

})

  function getProductInfo(){

    fetch('/mockData/products.json')
      .then(response => response.json())
      .then(
        function(products){

          products.forEach(el=>{
            const productType = el.productType
            const productName = el.productName
            const productPrice = el.productPrice
            const productDesc = el.productDesc
            const productPic = el.productPic

            productList.innerHTML +=`
            <img src="${productPic}" alt="">
            `
          })
        }
      )
  }

  getProductInfo()

  function getNewsInfo(){
    
    fetch('/mockData/news.json')
    .then(response => response.json())
    .then(
      function(newsData){

         newsData.forEach(el=>{
           const newsType = el.newsType
           const newsTitle = el.newsTitle

           newsList.innerHTML +=`
           <div class="section-news__newsArea-title">${newsType}</div>
           <div class="section-news__newsArea-contentArea">
               <div class="section-news__newsArea-contentArea-icon">
                   <img src="/img/logo.svg" alt="">
               </div>
               <div class="section-news__newsArea-contentArea-text">${newsTitle}</div>
           </div>
           `
         })
      }
    )
  }

  getNewsInfo()