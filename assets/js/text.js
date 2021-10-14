$(function () {
    var title = document.title
        , animSeq = ["/", "$", "\\", "|", "$"]
        , animIndex = 0
        , titleIndex = 0;

    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 3) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[animIndex];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 250);
});
$(function () {
    $(".typed").typed({
        strings: ['Triplixx', "Kto eto?", "Kostya", "15 y.o", "an1m3 t0p", "n3d0-p1kap3r"],
        typeSpeed: 100,
        loop: true,
        cursorChar: "|",
    });
});
