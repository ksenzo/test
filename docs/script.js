const getData = () => {
   fetch('data.json', {
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
   })
      .then(response => response.json())
      .then(data => {

         data.sort((a, b) => (a.rating > b.rating ? -1 : 1))

         const page =
            `<div class="container all div">
               <div class="images all div">
               <div class="left-arrow all div">
                  <img class="all img" src="in/icons/back.svg" alt="Back" />
               </div>
               <div class="right-arrow all div">
                  <img class="all img" src="in/icons/next.svg" alt="next" />
               </div>
                  <h1 class="images_title all h1">FEATURED IMAGES</h1>
                  <div class="images_catalog all div">
                     <div class="big_image all div">
                        <img class="all img" src="in/${data[0].image}" alt="image">
                        <div class="imageStar div all"><img class="all img" src="in/icons/star-solid.svg" alt="star-regular" /></div>
                        <div class="description div all">
                           <span class="text_desc span all" max-width="230px" style="color: #fff">${data[0].title}</span>
                           <span class="hashtags span all" style="color: #fff">#${data[0].tags[0]} #${data[0].tags[1]} #${data[0].tags[2]}</span>
                        </div>
                     </div>
                     <div class="small_images all div">
                        <div class="small_image all div">
                           <img class="all img" src="in/${data[1].image}" alt="image">
                           <div class="description div all">
                              <span class="text_desc span all" max-width="230px" style="color: #fff">${data[1].title}</span>
                              <span class="hashtags span all" style="color: #fff">#${data[1].tags[0]} #${data[1].tags[1]}</span>
                           </div>
                        </div>
                        <div class="small_image all div">
                           <img class="all img" src="in/${data[2].image}" alt="image">
                           <div class="imageStar div all"><img class="all img" src="in/icons/star-solid.svg" alt="star-regular" /></div>
                           <div class="description div all">
                              <span class="text_desc span all" max-width="230px" style="color: #fff">${data[2].title}</span>
                              <span class="hashtags span all" style="color: #fff">#${data[2].tags[0]} #${data[2].tags[1]}</span>
                           </div>
                        </div>
                     </div>
                     <div class="small_images div smallimages2 all">
                        <div class="small_image div all">
                           <img class="all img" src="in/${data[3].image}" alt="image">
                           <div class="description div all">
                              <span class="text_desc span all" max-width="230px" style="color: #fff">${data[3].title}</span>
                              <span class="hashtags span all" style="color: #fff">#${data[3].tags[0]} #${data[3].tags[1]}</span>
                           </div>
                        </div>
                        <div class="small_image div all">
                           <img class="all img" src="in/${data[5].image}" alt="image">
                           <div class="description div all">
                              <span class="text_desc span all" max-width="230px" style="color: #fff">${data[5].title}</span>
                              <span class="hashtags span all" style="color: #fff">#${data[5].tags[0]} #${data[5].tags[1]}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="last_images div all">
               <h1 class="images_title h1 all">LAST IMAGES</h1>
               <div class="images_catalogLast div all">
                  <div class="small_imageLastWrap div all" style="display: flex; flex-direction: column;">

                     <div class="small_imageLast div all">
                           <img class="all img" src="in/${data[6].image}" alt="image">
                     </div>
                     <span class="descrip span all">
                        <span class="text_desc span all">${data[6].title}</span>
                        <span class="hashtags span all">#${data[6].tags[0]} #${data[6].tags[1]}</span>
                     </span>
                  </div>

                  <div class="small_imageLastWrap div all" style="display: flex; flex-direction: column;">
                     <div class="small_imageLast div all">
                        <img class="all img" src="in/${data[7].image}" alt="image">
                        <div class="imageStar div all"><img class="all img" src="in/icons/star-regular.svg" alt="star-regular" /></div>
                     </div>

                     <span class="descrip span all">
                        <span class="text_desc all span">${data[7].title}</span>
                        <span class="hashtags all span">#${data[7].tags} </span>
                     </span>

                  </div>

                  <div class="banner all div">
                     <img class="all img" src="in/${data[8].image}" alt="image">
                  </div>
               </div>
            </div>
            <div/>`

         document.querySelector('body').insertAdjacentHTML('afterbegin', page);

         var all = [...document.querySelectorAll(".all")];
         let allSort = all.sort(function(a, b){
            if(a < b) { return -1; }
            if(a > b) { return 1; }
            return 0;
         })

         console.log(allSort);
         console.log(`Загальна кількість елементів: ${all.length}`);

         var allDivs = [...document.querySelectorAll(".div")];
         var allImgs = document.querySelectorAll(".img");
         var allSpans = document.querySelectorAll(".span");
         var allH1 = document.querySelectorAll(".h1");
         let allElemsByLength = [];

         console.log(`Загальна кількість елементів div: ${allDivs.length}`);
         console.log(`Загальна кількість елементів img: ${allImgs.length}`);
         console.log(`Загальна кількість елементів span: ${allSpans.length}`);
         console.log(`Загальна кількість елементів h1: ${allH1.length}`);

         allDivs.forEach(function(div) {
            allElemsByLength.push(`${div.tagName} - ${div.tagName.length} елемента`);
         });

         allSpans.forEach(function(span) {
            allElemsByLength.push(`${span.tagName} - ${span.tagName.length} елемента`);
         });

         allImgs.forEach(function(img) {
            allElemsByLength.push(`${img.tagName} - ${img.tagName.length} елемента`);
         });

         allH1.forEach(function(h1) {
            allElemsByLength.push(`${h1.tagName} - ${h1.tagName.length} елемента`);
         });

         allElemsByLength.sort(function(a, b){
            return b.length - a.length;
          });

         console.log(allElemsByLength)
      })
      .catch(err => console.error(err));
}

window.onload = () => {
   getData();
}
