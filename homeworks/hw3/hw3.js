document.addEventListener("DOMContentLoaded", function (_) {
    document.getElementById('title').innerText = document.title;

    const spriteCount = 10;
    var paddingPercent = 0.05;



    var imgsDiv = document.getElementById('imgs-div');

    var imagesAreFetched = false;

    var imgUrls = Array.from({ length: spriteCount },
        (_, i) => {
            var url = `https://adnanjpg.github.io/advanced-prog-2022/homeworks/hw3/assets/sprite/outputs/s${i + 1}.png`;
            return url;
        })

    var imgs = Array(spriteCount).fill(null)

    var fetchedCount = 0;


    for (let index = 0; index < spriteCount; index++) {
        var url = imgUrls[index];
        fetch(url)
            .then(res => res.blob()) // Gets the response and returns it as a blob
            .then(blob => {
                let objectURL = URL.createObjectURL(blob);
                imgs[index] = objectURL;
            });

        fetchedCount++
        if (fetchedCount == spriteCount) {
            imagesAreFetched = true;
            runIntervalAnimator();
        }
    }

    function getSpriteWidth() { }

    function runIntervalAnimator() {

        var currentRound = 0;
        setInterval(function () {

            var screenwidth = window.innerWidth;
            var paddingSingleSidePx = screenwidth * paddingPercent;
            var paddingTotalPx = paddingSingleSidePx * 2;

            var screenWidthSize = screenwidth - paddingTotalPx;

            var spriteWidth = screenWidthSize / spriteCount;

            var prevId = 'sprite-img-' + (currentRound == 0 ? spriteCount - 1 : currentRound % spriteCount - 1);
            var currentId = 'sprite-img-' + (currentRound);

            console.log(`prevId: ${prevId}, currentId: ${currentId}`)
            var prevImg = document.getElementById(prevId);
            if (prevImg != null) {
                prevImg.remove();
            }

            var img = document.createElement('img');
            img.src = imgs[currentRound];
            img.id = currentId;
            img.style.position = 'absolute';
            img.style.left = Math.floor(currentRound * spriteWidth + paddingSingleSidePx) + 'px';
            img.style.width = spriteWidth + 'px';
            img.style.height = spriteWidth + 'px';
            imgsDiv.appendChild(img);

            if (currentRound + 1 == spriteCount) {
                currentRound = 0;
            } else {
                currentRound++;
            }

        }, 300);


        // var imgSources = []

        // for (let index = 1; index <= spriteCount; index++) {
        //     imgSources.push(`assets/sprite/outputs/s${index}.png`)
        // }
        // document.getElementById('imgs-div').innerHTML = imgSources.map(src => `<img src="${src}">`).join('')
    }




});