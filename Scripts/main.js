let Items = document.getElementsByTagName("DIV");
for (let i = 0; i < Items.length; i++) {
    Items[i].onclick = function () {
        let someItem = Items[0];
        while (someItem) {
            if (someItem.tagName == "DIV") {
                someItem.classList.remove("onclickEffect");
            }
            someItem = someItem.nextElementSibling;
        }
        this.classList.add("onclickEffect");
    }
}

