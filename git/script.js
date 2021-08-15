const input = document.getElementById("search");
input.addEventListener("keyup", search);


function search() {
    const inputVal = input.nodeValue;
    const li = document.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toLocaleLowerCase().includes(inputVal)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}