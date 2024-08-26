async function toDataURL(url) {
    const blob = await fetch(url, { mode: 'no-cors' }).then(res => res.blob());
    return URL.createObjectURL(blob);
}

async function download() {
    const url = document.getElementById('imageUrl').value;
    const a = document.createElement("a");
    a.href = await toDataURL(url);
    a.download = "myImage.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
