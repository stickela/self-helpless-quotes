var quotes = [
'You have as many hours in the day as Beyonce.',
'All my friends are getting married, having kids and buying a house. I was like - what would I do as a single 26 year old if I had to spend money.  Instantly, I was like, "OH, tits." - Delanie Fischer',
'Perfection is not attainable, but if we chase perfection we can catch excellence. - Vince Lombardi',
'If you dont like how things are, change it.  You\'re not a tree -Jim Rohn',
'As I look back on my life, I realize that every time I thought I was being rejected from something good, I was actually being re-directed to something better.',
'If you love life, don\t waste time, for time is what life is made up of. - Bruce Lee',
'Sometimes you have to let go of the picture of what you thought life would be like and learn to find joy in the story you are actually living. -Rachel Marie Martin',
'The question of what you want to own, is actually the question of how you want to live your life. - Marie Kondo',
'A discovery is said to be an accident meeting a prepared mind. - Albert cent-Yorgi??',
'You just spent 20 minutes looking at that chick from high school\'s ugly bangs, why are you doing this - Kelsey Cook',
'Our wounds are often the openings into the best and most beautiful parts of us.',
'No man can wear one face to themself and another to the multitude, without finally getting bewildered as to which may be true -Nathaniel Hawthorne',
'A discovery is said to be an accident meeting a prepared mind.',
'Apologizing doesn\'t mean you\'re wrong and the other person is right, it just means that you value your relationship more than your ego.',
'The question of what you want to own, is actually the question of how you want to live your life. -Marie Kondo',
'Go confidently in the direction of your dreams. Live the life you\'ve imagined. -Henry David Thoreau.',	
'How am I supposed to talk about how this quote resonates with my when Delanie is over here like \'I got my grandpa high and then I showed him my titties\' - Taylor Tomlinson',	
'No joke - I just got high with my grandma for Father\'s Day on Sunday. -Delanie Fischer',
'Great things are not done by impulse, but by a series of things brought together - Vince Van Gogh',
'Whether you think you can, or you thin you can\'t you\'re right.'
]

function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
