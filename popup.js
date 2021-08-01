let main2 = document.getElementById("main2");
let result = document.getElementById('result');
let fake_case = document.getElementById('fake_case');
let linkList = document.getElementById('linkList');
let site_array = [];
let innerLis = "";
main2.style.display = 'none';
let innerLi = "";
document.addEventListener("DOMContentLoaded", () => {
  let wrapper = document.getElementById("wrapper");
  let main = document.getElementById("main");
document.getElementById("sucess").addEventListener("click", async()=> {
  
    let toCheckArticle = document.getElementById("article").value;
    console.log(toCheckArticle);
    let data = [];
    if(toCheckArticle) {
    fetch(`http://127.0.0.1:5000/predict/${toCheckArticle}`)
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => {
      data = json.result;
      console.log(data.predict);
      console.log(data.verified_sites.items);
      for(let i = 0; i < 4 ; i++) {
        console.log(data.verified_sites.items[i].displayLink);
        console.log(data.verified_sites.items[i].link);
        site_array.push(data.verified_sites.items[i].link);
      } 
        main.style.display = 'none';  
        main2.style.display = 'block'; 
      result.innerHTML =  `This article is ${data.predict}`;
      const articleHTML = site_array.map(site => {   
        innerLi = `<li class = "article-link">
        <a class="btn" href="${site}" rel="noopener noreforrer"
        target="_blank">Visit</a>
        ${site}
        </li>`;
        innerLis = innerLis.concat(innerLi); 
      });
      console.log(innerLis);
      linkList.innerHTML = innerLis;
      if(data.predict === 'false') {
        fake_case.style.display = 'none';
      }
    })    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors
    }
   console.log(data);
    }) 
})
