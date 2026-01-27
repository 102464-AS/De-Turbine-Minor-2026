const websites = document.querySelectorAll(".website")

let index = 0

setInterval(() => {
    index++
    let div = document.getElementById(`site-${index}`)

    for(const website of websites){
        website.classList.add("hidden")
    }

    if(!div){
        index= 1;
    }

    div = document.getElementById(`site-${index}`)
    
    div.classList.remove("hidden")
}, 2000); 