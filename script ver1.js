// Our variables
const key = "0537f2be8f284ba2ab3d38ec2baab2db"
const url = `https://newsapi.org/v2/everything?q=climate, Rockström&sortBy=relevancy&apiKey=${key}`

//const showAlert = () =>{
//    alert('text');
//}

// Our main function
const recievedNews = (newsdata) => {
		
	// For each article object from the API, we create a new div in HTML. 
    newsdata.articles.forEach((article) => { 
            
					//Here we create and add html elements to our html file
					document.querySelector(".allNews").innerHTML += 
            `<div class="news">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}"/>
            <p>"${article.description}"</p>
            <a mouseOver="showAlert()" class="linkButton" href="${article.url}"> Read full article</a>
            </div>` 
    })
}

//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data. 
fetch(url)
  .then(response => response.json())
  .then(recievedNews)


//const showAlert = () =>{
//    alert('text');
//}
  //<a onmouseover="showAlert()" class="linkButton" href="${article.url}"> Read full article</a>