var searchTerm = document.getElementsByClassName("searchTerm")[0];
var searchLocation = document.getElementsByClassName("searchLocation")[0];
var runFunc = document.getElementsByClassName("btn6")[0];
var results = document.getElementsByClassName("results")[0];

runFunc.addEventListener("click", function(){
results.innerHTML = " ";
    

$.ajax({
 url: "https://yelp-search.herokuapp.com/search",
 method: "GET",
 data: {
 	term: searchTerm.value,
	location: searchLocation.value
},
 success: function(response){
     console.log(response)
    response.businesses.forEach(function(business){
    yelpApi(business);
})

//  for(let i = 0; i < response.businesses.length ; i++){

// 	console.log(response.businesses[i]);
// 	console.log(response.businesses[i].location);

// 	yelpApi(response.businesses[i]);

// }
}
})

function yelpApi(business) {
    var searchResults = document.getElementsByClassName("results")[0];
    var resultDiv = "<a target='_blank' href = ' "+ business.url + "  '><div class='output'><img src='";
    resultDiv += business.image_url;
    resultDiv += "'> ";
            resultDiv += "<div class='name'>";
            resultDiv += business.name;
                resultDiv += "<div class='location'>";
                resultDiv += business.location.address + " " +"Philadelphia, PA";
                resultDiv += "</div>";
    			resultDiv += "</div></div>";
                resultDiv += "</a>"
                
    
    searchResults.innerHTML += resultDiv;

   
}
})


// Array.prototype.forEach.call(response.businesses, function(innerArrary){










