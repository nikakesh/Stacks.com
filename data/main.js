import data from './data.js'

const title = document.title
const i = document.querySelector('i')
const tabs = document.querySelector('.tabs')
const div = document.querySelector('.tab')

const lang = data[title]
i.style.color = lang.color

const tab = new Array;

for(let i = 0; i < lang.tabNames.length; i++){
    tabs.innerHTML += `
        <div id='tab${i + 1}' class='tabName'> 
            <p>${lang.tabNames[i]}</p>
        </div>
    `

    tab.push(
        `#tab${i + 1}`
    )
    Select(document.querySelector('#tab1'))
    Check(document.querySelector('#tab1'))
}

tab.forEach(el => {
    const el1 = document.querySelector(el)
    el1.addEventListener('click', () => {
        Select(el1)
        Check(el1)
    })
})

function Select(el){
    el.classList.add('selected')
    tab.forEach(el1 => {
        const el2 = document.querySelector(el1)
        if(el1 != `#${el.id}`){
            el2.classList.remove('selected')
        }
    })
}

function Check(el){
    if(el.classList.contains('selected')) div.innerText = lang.tabValues[ tab.indexOf('#' + el.id) ]
}