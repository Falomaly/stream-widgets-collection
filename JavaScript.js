window.onload = function() {

    let quotes = ["СКОРО ВЕРНУСЬ, ОБЕЩАЮ!", "Я ТОЧНО ВЕРНУСЬ!", "ЖДИТЕ, ЖДИТЕ, УЖЕ ПОЧТИ"]
    
    let lastRandNumber = false
    let randNumber = Math.floor(Math.random() * quotes.length);
    lastRandNumber = randNumber
    let runKey = "first"
    
    createAndInsertQuotesToParagraph(quotes, randNumber, runKey)

    //Add first random quote into paragraph.
    function createAndInsertQuotesToParagraph(quotesArray, randNumber, runKey) {
        
        let $quoteParagraph = document.querySelector("#quote")

        let quoteWithSpans = []

        //Loop for add every letter in <span> tag based on request -> first request with 0 opacity next requests with 1 opacity
        for (let quotesArrayElementKey in quotesArray[randNumber]) {
            
                //Variable for temporary store a letter inside <span> tag
            let spanWord
            
            //    If for check is the request first or not.
            if (runKey === "first" && quotesArrayElementKey) {
                spanWord = `<span class="opacityZero">${quotesArray[randNumber][quotesArrayElementKey]}</span>`
            } else {
                spanWord = `<span class="opacityOne fandeInLetters">${quotesArray[randNumber][quotesArrayElementKey]}</span>`
            }
            
            quoteWithSpans.push(spanWord)
        }

        $quoteParagraph.innerHTML = quoteWithSpans.join("")
    }

        // Generate random number between 0 and quotes length for second request new number cannot be same as last number
    async function generateRandomNumberMaxOnQuotesLength(lastRandNumber) {
        if (lastRandNumber !== false) {
            let random = Math.floor(Math.random() * quotes.length);

            if (lastRandNumber === random) {

                return await generateRandomNumberMaxOnQuotesLength(lastRandNumber)
            } else {
                
                return random
            }

        } else {

            return Math.floor(Math.random() * quotes.length);
        }
    }

    
    //From first to second animation frame.
    setTimeout(function () {
        let $content = document.querySelector("#container-first")
        $content.id = "container-second"

        let $line = document.querySelector("#bg-line-first")
        $line.id = "bg-line-second"
    }, 10);


    //From second to final animation frame.
    setTimeout(function () {
        let $line = document.querySelector("#bg-line-second")
        $line.id = "bg-line-final"

        let $content = document.querySelector("#container-second")
        $content.id = "container-final"
    }, 500);

    
    //    Line animation set position at the end.
    setTimeout(function () {
        let $line = document.querySelector("#line")
        $line.style.left = "960px"
    }, 3900);


    setTimeout(function () {
        //Animation for showing words letter by letter and icons
        let $quoteWords = document.querySelectorAll(".opacityZero")
        let timeOutTime = 10
        $quoteWords.forEach((item) => {
            timeOutTime += 10
            setTimeout(function () {
                item.classList.remove("opacityZero")
                item.classList.add("opacityOne")
            }, timeOutTime);
        })

        //    Animation for showing icon bounce animation
        let $iconsSVG = document.querySelectorAll(".iconSVG")
        let iconTimeOut = 120
        //reverting read direction ==> from right to left
        $iconsSVG = [...$iconsSVG].reverse()
        $iconsSVG.forEach((item) => {
            iconTimeOut += 120
            setTimeout(function () {
                item.classList.remove("iconSVG")
                item.classList.add("icon")
            }, iconTimeOut);
        })

    }, 2500);
    
            // Change phrase every X seconds
                setInterval(async () => {
                    console.log("Initializing test code: ")
                    let newNumber = await generateRandomNumberMaxOnQuotesLength(lastRandNumber)
                    lastRandNumber = newNumber
                    runKey = "second"
                    createAndInsertQuotesToParagraph(quotes, newNumber, runKey)
                }, 60000)


}


