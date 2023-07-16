
function quote(){
    var text = [`“Be yourself; everyone else is already taken.”
― Oscar Wilde`,

 `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
― Marilyn Monroe`,

`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,

`“We accept the love we think we deserve.”
― Stephen Chbosky, The Perks of Being a Wallflower`,

`“Always forgive your enemies; nothing annoys them so much.”
― Oscar Wilde`,

`“To live is the rarest thing in the world. Most people exist, that is all.”
― Oscar Wilde`,

`“If you tell the truth, you don't have to remember anything.”
― Mark Twain`,

`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
― J.K. Rowling, Harry Potter and the Goblet of Fire`,

`“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost`,

`“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,

`“You only live once, but if you do it right, once is enough.”
― Mae West`,

`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss`]

var num = Math.floor( Math.random() * text.length )

document.getElementById("uniqe").innerHTML = text[num]

}