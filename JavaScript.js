window.onload = function() {


    setTimeout(function() {
        let $content = document.querySelector("#container-after")
        $content.id = "container-final"

        let $line = document.querySelector("#bg-line-after")
        $line.id = "bg-line-final"
    }, 10);


    setTimeout(function() {
        let $opacityItems = document.querySelectorAll(".showOpacity")

        for (let key in $opacityItems) {
            $opacityItems[key].style.opacity = "1"
        }
    }, 500);

}