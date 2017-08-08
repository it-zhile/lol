/*
 *左海报轮播
 */
var leftBanner = document.getElementById('leftBanner');
var box = leftBanner.children[0];
var spans = leftBanner.children[1].children;

var imgWidth = box.children[0].children[0].offsetWidth;
//目标位置 = 图片当前位置*图片数*-1;
console.log(box)

for (var i = 0; i < spans.length; i++) {
    spans[i].index = i;
    spans[i].onmouseover = function () {
        clearInterval(box.timer);
        var step = 20;
        var target = imgWidth * this.index * -1;
        var currentBoxLeft = box.offsetLeft;
        box.timer = setInterval(function () {
            currentBoxLeft += target > currentBoxLeft ? step : -step;
            box.style.left = currentBoxLeft + 'px';
            if (Math.abs(target - currentBoxLeft) <= Math.abs(step)) {
                clearInterval(box.timer);
                box.style.left = target + 'px';
            }
        }, 1)
        for (var j = 0; j < spans.length; j++) {
            spans[j].children[0].removeAttribute('class');
        }
        this.children[0].className = 'redGreen';
    }
}