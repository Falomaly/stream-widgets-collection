window.onload = function() {


    setTimeout(function() {
        let $content = document.getElementById("container-after")
        $content.id = "container-final"

        let $line = document.getElementById("bg-line-after")
        $line.id = "bg-line-final"
    }, 10);


    setTimeout(function() {
        let $opacityItems = document.getElementsByClassName("showOpacity")

        for (let key in $opacityItems) {
            $opacityItems[key].style.opacity = "1"
        }
    }, 500);

}