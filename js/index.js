const bg =document.querySelector('#bg')
const stone =document.querySelector('#stone')
const ele =document.querySelector('#ele')


const productList = document.querySelector('#productList')
const newsList = document.querySelector('#newsList')



const aboutTitle = document.querySelector('.about__title')
const weThinkTitle = document.querySelector('.we-think__title')
let scroll_position = 0;

window.addEventListener('scroll', function() {
  scroll_position = window.scrollY;

  // banner
  bg.style.top = scroll_position * 0.5 + 'px';
  stone.style.top = scroll_position * 2.8 + 'px';
  grass.style.top = scroll_position * 0.5 + 'px';
  ele.style.bottom = scroll_position * 0.5 + 'px';

  if(scroll_position>=210){
    ele.style.display="none"
  }else{
    ele.style.display="unset"
  }

  // 關於標題
  if(scroll_position>300){
    aboutTitle.classList.add('tracking-in-expand')
  }else{
    aboutTitle.classList.remove('tracking-in-expand')
  }

  // 理念標題
  if(scroll_position>1650){
    weThinkTitle.classList.add('tracking-in-expand')
  }else{
    weThinkTitle.classList.remove('tracking-in-expand')
  }

})

  // 產品資料
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

  // 消息資料
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