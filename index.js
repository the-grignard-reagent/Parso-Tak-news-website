console.log("Getting started");
// 78fb1fead9584931a1c13e80d6b07111
let source = 'bbc-news';
let apiKey = '78fb1fead9584931a1c13e80d6b07111'

// Grab the news container
let newsaccordion = document.getElementById('newsaccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsaccordion.innerHTML = newsHtml;
    } else {
        console.log("Something error occured")
    }
}

xhr.send();





// console.log("This is my index js file");

// // Initialize the news api parameters
// let apiKey = '78fb1fead9584931a1c13e80d6b07111';
// let source = 'the-times-of-india';
// // Grab the news container
// let newsAccordion = document.getElementById('newsaccordion');

// // Create an ajax get request
// const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// // What to do when response is ready
// xhr.onload = function () {
//     if (this.status === 200) {
//         let json = JSON.parse(this.responseText);
//         let articles = json.articles;
//         console.log(articles);
//         let newsHtml = "";
//         articles.forEach(function(element, index) {
//             // console.log(element, index)
//             let news = `<div class="card">
//                             <div class="card-header" id="heading${index}">
//                                 <h2 class="mb-0">
//                                 <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
//                                     aria-expanded="false" aria-controls="collapse${index}">
//                                    <b>Breaking News ${index+1}:</b> ${element["title"]}
//                                 </button>
//                                 </h2>
//                             </div>

//                             <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
//                                 <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
//                             </div>
//                         </div>`;
//             newsHtml += news;
//         });
//         newsAccordion.innerHTML = newsHtml;
//     }
//     else {
//         console.log("Some error occured")
//     }
// }

// xhr.send()


