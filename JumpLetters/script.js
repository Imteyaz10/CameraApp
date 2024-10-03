const AllSpans = document.querySelectorAll("span");
console.log(AllSpans);

AllSpans.forEach((item) => {
    item.addEventListener("click",()=>{
        item.classList.toggle("active");
    })
})