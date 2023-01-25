window.onload = function() {
    
    let quotes = ["СКОРО ВЕРНУСЬ, ОБЕЩАЮ!", "Я ТОЧНО ВЕРНУСЬ!", "Какая-то ещё сомнительная фраза"]

    let randNumber = Math.floor(Math.random() * quotes.length);
    console.log(randNumber)
    createAndInsertQuotesToParagraph(quotes, randNumber)
    
    //Add first random quote into paragraph.
    function createAndInsertQuotesToParagraph (quotesArray, randNumber) {
        let $quoteParagraph = document.querySelector("#quote")
        
        let quoteWithSpans = []

        for (let quotesArrayElementKey in quotesArray[randNumber]) {
            let spanWord = `<span class="opacityZero">${quotesArray[randNumber][quotesArrayElementKey]}</span>`
            
            quoteWithSpans.push(spanWord)
        }

        $quoteParagraph.innerHTML = quoteWithSpans.join("")
    }
    

    //From first to second animation frame.
    setTimeout(function() {
        let $content = document.querySelector("#container-first")
        $content.id = "container-second"

        let $line = document.querySelector("#bg-line-first")
        $line.id = "bg-line-second"
    }, 10);


    //From second to final animation frame.
    setTimeout(function() {
        let $line = document.querySelector("#bg-line-second")
        $line.id = "bg-line-final"
        
        let $content = document.querySelector("#container-second")
        $content.id = "container-final"
    }, 500);

    //Opacity animation for content.

    
    //    Line animation set position at the end.
    setTimeout(function() {
        let $line = document.querySelector("#line")
        $line.style.left = "960px"
    }, 3900);


    setTimeout(function() {
        //Animation for showing words letter by letter and icons
        let $quoteWords = document.querySelectorAll(".opacityZero")
        let timeOutTime = 10
        $quoteWords.forEach( (item) => {
            timeOutTime += 10
            setTimeout(function() {
                item.classList.remove("opacityZero")
                item.classList.add("opacityOne")
            }, timeOutTime);
        })
        
    //    Animation for showing icon bounce animation
        let $iconsSVG = document.querySelectorAll(".iconSVG")
        let iconTimeOut = 120
        $iconsSVG = [...$iconsSVG].reverse()
        $iconsSVG.forEach((item) => {
            iconTimeOut += 120
            setTimeout(function() {
                item.classList.remove("iconSVG")
                item.classList.add("icon")
            }, iconTimeOut);
        })
        
    }, 2500);

    let $opacityItems = document.querySelectorAll(".showOne")
    setTimeout(function() {
        
            for (let i = 0; i < $opacityItems.length;) {
                $opacityItems[i].style.opacity = "1"
                i++
            }
    }, 1000);
}


