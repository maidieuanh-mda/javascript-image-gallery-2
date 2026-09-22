function upDate(previewPic) {
    console.log("upDate event triggered!");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}


function undo() {
    console.log("undo event triggered!");

    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML =
        "Di chuột qua hình ảnh bên dưới để hiển thị tại đây.";
}


function tabFocus() {
    console.log("tabFocus event triggered!");

    var images = document.querySelectorAll(".preview");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
