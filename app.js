const cont1 = document.querySelector('#cont1')
const cont2 = document.querySelector('#cont2')
const cont3 = document.querySelector('#cont3')
const cont4 = document.querySelector('#cont4')

const frontEnd = [
    ['html', 'HTML'],
    ['css', 'CSS'],
    ['js', 'javascript'],
    ['ts', 'typescript'],
    ['php', 'php'],
    ['bootstrap', 'bootstrap'],
    ['tailwind', 'tailwind'],
    ['react', 'React'],
    ['vue', 'Vue'],
    ['svelte', 'Svelte'],
    ['angular', 'Angular'],
    ['jquery', 'jQuery'],
    ['three', 'Three.js'],
    ['webpack', 'webPack'],
    ['htmx', 'htmx'],
    ['preact', 'Preact'],
    // ['', ''],
]

const backEnd = [
    ['node', 'node.js'],
    ['express', 'express.js'],
    ['deno', 'deno'],
    ['nest', 'Nest.js'],
    ['mongodb', 'Mongodb'],
    ['django', 'Django'],
    ['rails', 'Ruby on rails'],
]

const fullStack = [
    ['next', 'Next.js'],
    ['nuxt', 'Nuxt.js'],
]

const stacks = [
    [
        'MERN',
        ['mongodb', 'mongodb'],
        ['express', 'express'],
        ['react', 'React'],
        ['node', 'node'],
    ],
    [
        'MEAN',
        ['mongodb', 'mongodb'],
        ['express', 'express'],
        ['angular', 'Angular'],
        ['node', 'node'],
    ]
]

frontEnd.forEach(el => {
    cont1.innerHTML += `
    <a class="card" href="./data/${el[1]}.html">
        <div class="img-cont">
            <img src="./src/${el[0]}.png">
        </div>
        <h2>${el[1]}</h2>
    </a>
    `
})

backEnd.forEach(el => {
    cont2.innerHTML += `
    <a class="card" href="">
        <div class="img-cont">
            <img src="./src/${el[0]}.png">
        </div>
        <h2>${el[1]}</h2>
    </a>
    `
})

fullStack.forEach(el => {
    cont4.innerHTML += `
    <a class="card" href="">
        <div class="img-cont">
            <img src="./src/${el[0]}.png">
        </div>
        <h2>${el[1]}</h2>
    </a>
    `
})

stacks.forEach(el => {
    cont3.innerHTML += `
        <div class="card2">
            <h1>${el[0]}</h1>
            <div class="card3" id=${el[0]}>
                
            </div>       
        </div>
    `
    const card3 = document.querySelector('#' + el[0])
    for(let i = 1; i < el.length; i++){
        const el1 = el[i]
        card3.innerHTML += `
        <a class="card w" href="">
            <div class="img-cont">
                <img src="./src/${el1[0]}.png">
            </div>
            <h2>${el1[1]}</h2>
        </a>  
        `
    }
})