const navbar = document.querySelector('.header__navbar')
const m_btn = document.querySelector('.header__navbar-m-btn')
const m_list = document.querySelector('.header__navbar-m-list')

const bg =document.querySelector('#bg')
const stone =document.querySelector('#stone')
const ele =document.querySelector('#ele')
const heading =document.querySelector('#heading')
const headingTitle =document.querySelector('#headingTitle')
const headingSlogan =document.querySelector('#headingSlogan')
const headingLogo =document.querySelector('#headingLogo')

const productList = document.querySelector('#productList')
const newsList = document.querySelector('#newsList')

// 手機板導覽選單切換
m_btn.addEventListener('click',function () {
  if (m_list.style.display === 'block'){
    m_list.style.display='none'
  }else{
    m_list.style.display='block'
  }
})

let scroll_position = 0;

window.addEventListener('scroll', function() {
  scroll_position = window.scrollY;

  // 橫幅視差效果
  bg.style.top = scroll_position * 0.5 + 'px';
  stone.style.top = scroll_position * 2 + 'px';
  grass.style.top = scroll_position * 0.5 + 'px';
  heading.style.top = scroll_position * 1 + 'px';

  headingTitle.style.top = scroll_position * 1 + 'px';
  headingLogo.style.top = scroll_position * 1 + 'px';
  headingSlogan.style.top = scroll_position * 1 + 'px';
  ele.style.bottom = scroll_position * 0.5 + 'px';

  if(scroll_position>=80){
    stone.style.opacity="0"
  }else{
    stone.style.opacity="1"
  }

  if(scroll_position>=145){
    ele.style.opacity="0"
    headingSlogan.style.display="none"
  }else{
    ele.style.opacity="1"
    headingSlogan.style.display="unset"
  }

  if(scroll_position>=330){
    headingLogo.style.opacity="0"
  }else if(scroll_position>=230){
    headingLogo.style.opacity="0.5"
  }else{
    headingLogo.style.opacity="1"

  }
  
  if(scroll_position>530){
    headingTitle.style.opacity=0
  }else{
    headingTitle.style.opacity=1
  }

  // 導覽列顯示
  navbar.classList.toggle('sticky',window.scrollY>530)

})

// 卡片翻轉效果
const cards = document.querySelectorAll(".section-area__content-face");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

// 地圖動態效果
VanillaTilt.init(document.querySelector("#map"), {
  max: 25,
  speed: 100,
  glare: true,
  "max-glare":1
});


  // 抓取 Product資料
  function getProductInfo(){

    fetch('/mockData/products.json')

    .then(response => response.json())

    .then(
      function(products){
      products.forEach(el=>{
        const productId = el.productId
        const productType = el.productType
        const productName = el.productName
        const productPrice = el.productPrice
        const productDesc = el.productDesc
        const productPic = el.productPic

        // 產品圖
        productList.innerHTML +=`
        <div id="product" class="section-products__productsPhotoArea-photos-item" data-name="${productName}" data-desc="${productDesc}" data-price="${productPrice}"><img src="${productPic}" alt=""></div>
        <!-- The Modal -->
        <div id="Modal" class="section-products__productsPhotoArea-photos-modal">

        </div>
        `

        // 單獨產品顯示 modal
        const modal = document.querySelector('#Modal')

        const btns = document.querySelectorAll('#product')
        
        btns.forEach(function(btn){
          btn.addEventListener('click',function(){
            modal.style.display = 'block'
            modal.innerHTML =`
            <div class="section-products__productsPhotoArea-photos-modal-content">
            <span id="close" class="section-products__productsPhotoArea-photos-modal-content-close">&times;</span>
            <p class="section-products__productsPhotoArea-photos-modal-content-name">${btn.dataset.name}</p>
            <p class="section-products__productsPhotoArea-photos-modal-content-desc">${btn.dataset.desc}</p>
            <p class="section-products__productsPhotoArea-photos-modal-content-price">${btn.dataset.price}</p>
            </div>
            `

          // modal 按鈕關閉方法
          const span = document.querySelector('#close')

          span.addEventListener('click', function(){
            modal.style.display ='none'
          })
          })
        })

        // modal 點擊他處關閉方法
        window.addEventListener('click',function(event){
          if(event.target === modal){
            modal.style.display='none'
        }})
        
      })
    })
  }

  getProductInfo()

  // 抓取 News 資料
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