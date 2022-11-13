document.addEventListener("DOMContentLoaded", function (_) {
    document.getElementById('title').innerText = document.title;

    const spriteCount = 10;

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
        runIntervalAnimator()
    }
    document.getElementById('restart-button').addEventListener('click', restart)

    function stop() {
        clearInterval(intervalId)
        intervalId = null
        if (elementAtDom) {
            elementAtDom.remove()
        }
    }
    document.getElementById('stop-button').addEventListener('click', stop)

    function next() {
        if (elementAtDom) {
            elementAtDom.remove()
        }
        currentRound++
        drawFrameAt(currentRound)
    }
    document.getElementById('next-button').addEventListener('click', next)

    function previous() {
        if (elementAtDom) {
            elementAtDom.remove()
        }
        currentRound--
        drawFrameAt(currentRound)
    }
    document.getElementById('prev-button').addEventListener('click', previous)

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

    function drawFrameAt(index) {
        if (index < 0) {
            index = spriteCount + (index % spriteCount);
        }

        index = index % spriteCount

        var spriteWidth = getSpriteWidth();

        imgsDiv.style.height = spriteWidth + 'px';

        var currentId = 'sprite-img-' + (index);

        if (elementAtDom) {
            elementAtDom.remove();
        }

        var img = document.createElement('img');
        img.src = imgs[index];
        img.id = currentId;
        img.style.position = 'absolute';
        img.style.left = Math.floor(index * spriteWidth + paddingSingleSidePx) + 'px';
        img.style.width = spriteWidth + 'px';
        img.style.height = spriteWidth + 'px';
        elementAtDom = img;
        imgsDiv.appendChild(img);
    }

    var elementAtDom
    function runIntervalAnimator() {

        if (intervalId) {
            return
        }

        intervalId = setInterval(function () {

            drawFrameAt(currentRound)

            if (currentRound + 1 == spriteCount) {
                currentRound = 0;
            } else {
                currentRound++;
            }

        }, 300);
    }




});