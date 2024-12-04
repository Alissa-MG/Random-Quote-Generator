const quotes = ["Everyone has the right to do stupid things, but you’re abusing that privilege.",

    "Common sense is like deodorant. The people who need it most never use it.",
    
    "There are three kinds of people in this world: those who can count and those who can’t.",
    
    "Whoever said nothing is impossible never tried slamming a revolving door.",
    
    "I can’t brain today. I have the dumb.",
    
    "I would like to thank my arms for always being by my side, my legs for always supporting me, and my fingers because I can always count on them.",
    
    "If you can’t see the bright side of life, polish the dull side.",
    
    "In politics stupidity is not a handicap.",
    
    "If pro is the opposite of con, what would then be the opposite of progress?",
    
    "I am so clever that sometimes I don’t understand a single word of what I am saying.",
    
    "A wise man once told me to always listen carefully because…um…I can’t remember.",
    
    "My granddad started walking a few miles a day when he was 60. Now he’s 97 years old and we have no clue where he is.",
    
    "I walk around as though everything is fine, but deep down, on my right calf, my sock is sliding down.",
    
    "It is not my fault that I never learned to accept responsibility!",
    
    "Have you ever wondered why you can’t taste your tongue?"
    ];

    const usedIndexes = new Set();
    const quoteElement = document.getElementById("quote");

    function generateQuote() {
        if (usedIndexes.size >= quotes.length) {
            usedIndexes.clear()
        }

        while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)
        
        if (usedIndexes.has(randomIdx)) continue 

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
        }
    }