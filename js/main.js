let out = document.querySelector(".site-header__end")
let list = document.querySelector(".site-main__books")
let toggler = document.querySelector(".close")
let elModal = document.querySelector(".modal")


let url  = `https://www.googleapis.com/books/v1/volumes?q=search+terms`
async function result () {
    let promise = await fetch(url, {"method": "GET"})
    let data = await promise.json()

    data.items.forEach(element => {
        let item = document.createElement("li")
        item.className = "site-main__books-item"
        item.innerHTML = `
        <img src="${element.volumeInfo.imageLinks.smallThumbnail}" alt="photo of bok" class="site-main__books-image" width="200" height="200">
        <div class="site-main__item-box">
            <h3 class="site-main__item-heading">${element.volumeInfo.title}</h3>
            <p class="site-main__item-title">${element.volumeInfo.authors}</p>
            <div class="site-main__item-buttons">
                <button class="bookmark-btn">Bookmark</button>
                <button id=${element.id} class="more-info">More info</button>
            </div>
        </div>
        <a class="read" href="${element.volumeInfo.previewLink}">Read</a>
        `
        list.append(item)
    });
    
    modal (data)
    console.log(data);
}
result()
let a = ""
function modal (obj) {
    
    list.addEventListener("click", (evt) => {
        obj.items.forEach(el => {
            if(evt.target.id == el.id){

                let mBox = document.createElement("div")
                mBox.className = "modal-inner"
                mBox.innerHTML = `
                <div class="modal-inner">
                    <div class="container">
                        <div class="modal-header">
                            <h2 class="modal-heading">${el.volumeInfo.title}</h2>
                            <button class="close"></button>
                        </div>
                        <div class="modal-main">
                            <div class="modal-middle-part">
                                <img src="${el.volumeInfo.imageLinks.smallThumbnail}" alt="photo of modal" class="modal-img" width="230" height="300">
                                <p class="modal-title">${el.volumeInfo.description}</p>
                            </div>
                            <ul class="modal-list">
                                <li class="modal-item">
                                    <p class="modal-item-text">Author:</p>
                                    <span class="author">Jamal Kasper</span>
                                </li>
                                <li class="modal-item">
                                    <p class="modal-item-text">Author:</p>
                                    <span class="author">Jamal Kasper</span>
                                </li>
                                <li class="modal-item">
                                    <p class="modal-item-text">Author:</p>
                                    <span class="author">Jamal Kasper</span>
                                </li>
                                <li class="modal-item">
                                    <p class="modal-item-text">Author:</p>
                                    <span class="author">Jamal Kasper</span>
                                </li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <a href="${el.volumeInfo.previewLink}" class="read modal-read">Read</a>
                        </div>
                    </div>
                </div>
                `
                elModal.append(mBox)
                elModal.classList.remove("close-modal")
            }
            // evt.target.addEventListener("click", () => {
            //     console.log("uraa");
            // })
        })
    })
}





out.addEventListener("submit", () => {
    localStorage.removeItem("token")
})

if(!localStorage.getItem("token")){
    window.location.replace("./login.html")
}































// let elBurger = document.querySelector(".site-header__burger")
// let elNav = document.querySelector(".sitenav")
// let elClose = document.querySelector(".sitenav__close")
// let elbody = document.querySelector("body")


// elBurger.addEventListener("click", function(){
//     if(!elNav.classList.toString().includes("open")){
//         elNav.classList.add("open")
//         elBurger.classList.add("close")
//         elNav.classList.remove("back")

//     }else {
//         elNav.classList.add("back")
//         setTimeout(() => {
//             elNav.classList.remove("open")
//             elBurger.classList.remove("close")
//         }, 300);
//     }
//     console.log();
//     elbody.classList.toggle("overflow")
// })

