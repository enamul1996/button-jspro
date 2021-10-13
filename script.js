let ol = document.querySelector('ol')
let listA = document.querySelectorAll('li')
let button = document.querySelector('#addButton')
let input = document.querySelector('input')

for(let i = 0; i < listA.length; i++){
    CreateButton(listA[i])
}

ol.addEventListener('click',function (e) {

    console.log(e.target)

    
    if(e.target.tagName == "BUTTON") 
    {
        if(e.target.classList == "remove") {
           let li = e.target.parentElement
           let ol = li.parentElement
           ol.removeChild(li)
        }

        if(e.target.classList == "down") {
            let li = e.target.parentElement
            let ol = li.parentElement
            let nextSibling = li.nextElementSibling
            if (nextSibling) {
                ol.insertBefore(nextSibling, li)
            }
        }    

        if(e.target.classList == "up") {
            let li = e.target.parentElement
            let ol = li.parentElement
            let previous = li.previousElementSibling
            if (previous) {
                ol.insertBefore(li, previous)
            }
        }
    }    
})


button.addEventListener('click', function() {

    let newE = document.createElement('li')
    newE.textContent = input.value
    CreateButton(newE)
    ol.appendChild(newE)
})

function CreateButton(li)
{
    let removeButton = document.createElement('button')
    removeButton.textContent = "Remove"
    removeButton.classList = "remove"
    li.appendChild(removeButton)

    let upButton = document.createElement('button')
    upButton.textContent = "Up"
    upButton.classList = "up"
    li.appendChild(upButton)

    let downButton = document.createElement('button')
    downButton.textContent = "Down"
    downButton.classList = "down"
    li.appendChild(downButton)
}