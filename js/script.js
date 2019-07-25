//  The array of 10 quote objects 
let quotes = [
{ quote: 'Thought is powerful...things end up exactly how I visualize them.',
  source:"Nipsey Hussle",
  category: "(Power Of Thought)",
  image: '/../images/1-meditate.png' },
  
{ quote: "The most important thing, number one, is you gotta get rid of doubt.",
  source: "Nipsey Hussle",
  citation: "WestCoastRydaz.com Interview",
  year: "2009",
  category: "(Faith)",
  image: '../images/2-getRidOfDoubt.png'},

{ quote: "The company you keep has a large influence on the situations you bring to yourself.",
  source: "Nipsey Hussle",
  citation: "LVTV Interview",
  year: "2017",
  category: "(Relationships)",
  image: '../images/3-companyYouKeep.png'},


{ quote: "You gotta go hard, you gotta believe in yourself... just stick to the script, believe and have an overwhelming confidence.",
  source: "Nipsey Hussle",
  citation: "LVTV Interview",
  year: "2017",
  category: "(Faith)",
  image: '../images/4-goHard.png'},


{ quote: "Its not on you, its in you",
  source: "Nipsey Hussle",
  citation: `During Lauran London's eulogy of Nipsey Hussle`,
  year: `2019`,
  category: "(Inner Strength)",
  image: '../images/5-itsinyou.png'},



{ quote: "Be more fearless...Just have a bigger vision, have a higher expectation.",
  source:"Nipsey Hussle",
  category: "(Faith)", 
  image: '../images/6-fearless.png'},
  
  
{ quote: "The best thing you can do for a person is to inspire them.",
  source: "Nipsey Hussle",
  citation: "4TheCulture Interview",
  year: "2015",
  category: "(Relationships)",
  image: '../images/7-inspire.png' },


{ quote: "Everything gonna test you if it's worthwhile.",
  source: "Nipsey Hussle",
  citation: "HardBody Kiotti",
  year: "2018",
  category: "(Inner Strength)",
  image: '../images/8-worthwile.png'},


{ quote: "Define who you are and what you are, and be clear on that. Meditate on that and then, live and die by that.",
  source: "Nipsey Hussle",
  citation: "Self Made Tastes Better Interview",
  year: "2018",
  category: "(Inner Strength)",
  image: '../images/define.png'},
  

{ quote: `Sometimes you have to take two steps back to take ten forward.`,
  source: "Nipsey Hussle",
  category: "(Faith)",
  image: '../images/10-twoToTakeTen.png'}

];







//random # generator used to selcet a random quote object from the arrary
 function getRandomQuote() {
  let numberOfQuotes = quotes.length;
  let randomNumber = Math.floor(Math.random() * numberOfQuotes);
  return quotes[randomNumber];
  
}






// this function will print the randomly selected quote to the screen //& change the Backgound image
function printQuote() {
  let randomQuote = getRandomQuote();
  let message = '<p class="quote">' + randomQuote.quote + '</p>';
    message += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation && randomQuote.year && randomQuote.category) {
    message += '<span class="citation"> ' + randomQuote.citation + '</span>';
    message += '<span class="year"> ' + randomQuote.year + '</span>';
    message += '<span class="category"> ' + randomQuote.category + '</span></p>';
  } else if (randomQuote.category) {
    message += '<span class="category"> ' + randomQuote.category + '</span></p>';
  } 
  document.getElementById('quote-box').innerHTML = message;  
  
  
  
  let ranPic = randomQuote.image;
console.log(ranPic);
document.body.style.background = 'url(' + ranPic + ')';
  
 

}




/*
//timer for quote to switch after 10 seconds
setInterval(printQuote, 5000);  





//array of images for the automatic background image change
var bag = [
  '../images/1-meditate.png', 
  '../images/2-getRidOfDoubt.png', 
  '../images/3-companyYouKeep.png', 
  '../images/4-goHard.png', 
  '../images/5-itsinyou.png', 
  '../images/6-fearless.png', 
  '../images/7-inspire.png', 
  '../images/8-worthwile.png', 
  '../images/define.png', 
  '../images/10-twoToTakeTen.png', 
  '../images/fam.png' ],


  //timer for background image change; set to 5 seconds
timer = 1;

quotes.forEach(function(img){
    new Image().src = img; 
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < quotes.length; i++) {
		setTimeout(function(){ 
			document.documentElement.style.background = "url(" + quotes[k].image + ") no-repeat center center fixed";
			document.documentElement.style.backgroundSize ="cover";
		if ((k + 1) === quotes.length) { 
			setTimeout(function() { 
				backgroundSequence() 
			}, (timer * 5000))
		} 
		else {
			k++; 
			}			
		}, (timer * 5000) * i)	
	}
}
backgroundSequence();

*/



//The  event listener for new quote button, that calls  the "printQuote" 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



//product of the Being of Joshua Jiles: Peace, Love & Blessings