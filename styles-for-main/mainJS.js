window.onload = function (event) {
    
    let $chinaechiAfkBanner = document.querySelector("#afk-banner-chinaechi")

    $chinaechiAfkBanner.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            return
        }
        if ($chinaechiAfkBanner) {
            window.open("https://falomaly.github.io/stream-widgets-collection/Chinaechi-widgets/afk-banner-widget/", "_blank")
        }
    })


    let $rasputinAfkBanner = document.querySelector("#afk-banner-rasputin")

    $rasputinAfkBanner.addEventListener("click", (event) => {

        if (event.target.tagName === "A") {
            return
        }

        if ($rasputinAfkBanner) {
            window.open("https://falomaly.github.io/stream-widgets-collection/Rasputin322-widgets/afk-banner-widget/", "_blank")
        }
    })

}