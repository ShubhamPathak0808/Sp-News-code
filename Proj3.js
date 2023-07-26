console.log("working");
//4e46444be2ea47c7bab772b6b4504e55
let container2 = document.getElementById("container2");
let req = new XMLHttpRequest();
req.open("GET", `https://newsapi.org/v2/top-headlines?country=us&apiKey=4e46444be2ea47c7bab772b6b4504e55`, true);
req.onload = function () {
    let str = "";
    if (this.status == 200) {
        let Newsresponse = JSON.parse(this.responseText);
        console.log(Newsresponse);
        let Newsarticles = Newsresponse.articles;
        console.log(Newsarticles);
        for (let i = 0; i < Newsarticles.length; i++) {
            const element = Newsarticles[i];
            let titl = Newsarticles[i].title;
            console.log(titl);
            let cont = Newsarticles[i].content;
            let imgUrl = Newsarticles[i].urlToImage;
            let moreUrl = Newsarticles[i].url;
            let dis = Newsarticles[i].description;
            str = str + `<div class="d-grid gap-2 my-2">
           <button
           class="btn"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#collapseExample${i}"
           aria-expanded="false"
           aria-controls="collapseExample"
           style="text-align: left; background-color: aliceblue"
            >
            → ${titl}
           </button>
           </div>
           <div class="collapse" id="collapseExample${i}">
           <div class="card card-body">
           <img style="float: left;" src="${imgUrl}" alt="img unable to load">
             ${cont}<a href="${moreUrl}">Read more</a> <br> ${dis}
           </div>
           </div>
           </div>`
        }
     
         //function for search
        let searchValue = document.getElementById("SearchText");
        searchValue.addEventListener("input", functionSearch);
        function functionSearch() {
        
        let strCont = "";
        for (let i = 0; i < Newsarticles.length; i++) {
            const element = Newsarticles[i];
            let titl = Newsarticles[i].title;
            console.log(titl);
            let cont = Newsarticles[i].content;
            let imgUrl = Newsarticles[i].urlToImage;
            let moreUrl = Newsarticles[i].url;
            let dis = Newsarticles[i].description;
            let textSearch = searchValue.value.toLowerCase();
        
        }

      }
    }
    container2.innerHTML = str;


   
}
req.send();



