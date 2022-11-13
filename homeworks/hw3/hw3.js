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

    function pause() {
        clearInterval(intervalId)
        intervalId = null
    }

    function resume() {
        runIntervalAnimator()
    }

    function pauseResume() {
        if (intervalId) {
            pause()
        } else {
            resume()
        }

        document.getElementById('pause-resume-button').innerText = intervalId ? 'Pause' : 'Resume'
    }
    document.getElementById('pause-resume-button').addEventListener('click', pauseResume)

    function restart() {
        if (elementAtDom) {
            elementAtDom.remove()
        }
        currentRound = 0
    }
    document.getElementById('restart-button').addEventListener('click', restart)

    var intervalId
    var currentRound = 0
    var paddingSingleSidePx = 20;
    var paddingTotalPx = paddingSingleSidePx * 2;


    imgsDiv.style.marginTop = paddingSingleSidePx + 'px';
    imgsDiv.style.marginBottom = paddingSingleSidePx + 'px';

    function getSpriteWidth() {
        var screenwidth = window.innerWidth;
        var screenWidthSize = screenwidth - paddingTotalPx;
        var spriteWidth = screenWidthSize / spriteCount;

        return spriteWidth;
    }

    var elementAtDom
    function runIntervalAnimator() {

        intervalId = setInterval(function () {

            var spriteWidth = getSpriteWidth();

            imgsDiv.style.height = spriteWidth + 'px';

            // var prevId = 'sprite-img-' + (currentRound == 0 ? spriteCount - 1 : currentRound % spriteCount - 1);
            var currentId = 'sprite-img-' + (currentRound);

            if (elementAtDom) {
                elementAtDom.remove();
            }

            var img = document.createElement('img');
            img.src = imgs[currentRound];
            img.id = currentId;
            img.style.position = 'absolute';
            img.style.left = Math.floor(currentRound * spriteWidth + paddingSingleSidePx) + 'px';
            img.style.width = spriteWidth + 'px';
            img.style.height = spriteWidth + 'px';
            elementAtDom = img;
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