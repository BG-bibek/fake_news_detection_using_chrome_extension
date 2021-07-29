let main2 = document.getElementById("main2");
let result = document.getElementById('result');
let fake_case = document.getElementById('fake_case');
main2.style.display = 'none';
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
      console.log(data.predict)
      
        main.style.display = 'none';
        main2.style.display = 'block';
       
      result.innerHTML =  `This article is ${data.predict}`;
      if(data.predict === 'false') {
        fake_case.style.display = 'none';
      }
    })    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors

    }
    
   
   console.log(data);
   
    }) 
})

//       // Example POST method implementation:
// async function postData(url = `http://127.0.0.1:5000/predict/hello`, data = {}) {
//   const response = await fetch(url, {
//     method: 'GET', 
//     mode: 'no-cors', 
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   //return response.json(); // parses JSON response into native JavaScript objects
// }

// postData(`http://127.0.0.1:5000/predict/hello`, { answer: 42 })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   }); 
//   }
// }); 
//  });

// // Future JavaScript will go here;
    //   fetch("http://127.0.0.1:5000/")











    // try to run python in js using sis
    // const test = require('child_process').spawn;
    // const process = test('python',['./backend.py','Lovato Announces 2018 North American Tour Dates With DJ Khaled']);
    // process.stdout.on('data', data => {
    // console.log(data.toString());
    // });



// asdf