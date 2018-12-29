var quotes = [
'You have as many hours in the day as Beyonce',
'All my friends are getting married, having kids and buying a house. I was like - what would I do as a single 26 year old if I had to spend money.  Instantly, I was like, "OH, tits." - Delanie Fischer',
'Perfection is not attainable, but if we chase perfection we can catch excellence. - Vince Lombardi',
'If you dont like how things are, change it.  You\'re not a tree -Jim Rohn',
'As I look back on my life, I realize that every time I thought I was being rejected from something good, I was actually being re-directed to something better.',
'If you love life, don\t waste time, for time is what life is made up of. - Bruce Lee',
'Sometimes you have to let go of the picture of what you thought life would be like and learn to find joy in the story you are actually living. -Rachel Marie Martin',
'The question of what you want to own, is actually the question of how you want to live your life. - Marie Kondo',
'A discovery is said to be an accident meeting a prepared mind. - Albert cent-Yorgi??',
'We are all broken.  That\s how the light gets in. -Ernest Hemingway'
]

function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}