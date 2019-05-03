// Chama a DIV principal e dá o nome de app
const app = document.getElementById('root')

//Cria uma div container e atribuiu as classes criadas a ela
const container = document.createElement('div')
container.setAttribute('class', 'card')

//Cria uma div authors e atribuiu as classes criadas a ela
const authors = document.createElement('div')
authors.setAttribute('class', 'authors')

//Coloca a div authors dentro do container
container.appendChild(authors)

//Coloca o authors dentro do app
app.appendChild(authors)

const request = new XMLHttpRequest();

request.open('GET', 'https://randomuser.me/api/?results=10', true)

request.onload = function() {
    const data = JSON.parse(this.response)

    console.log(data)
    console.log(data.results[0])
    
    if(request.status >= 200 && request.status < 400){
        console.log('Muito bem')
        data.results.forEach(person => {
            //Cria o card e atribui os estilos
            const card = document.createElement('div')
            card.setAttribute('class', 'card')           

            //Cria o img e atribui os estilos
            const img = document.createElement('img')
            img.setAttribute('class', 'img')
            img.src = person.picture.large

            //Cria o h2 e atribui os estilos
            const h2 = document.createElement('h2')
            h2.setAttribute('class', 'h2')
            h2.innerHTML = person.name.first + person.name.last
            
            //Cria o h3 e atribui os estilos
            const h3 = document.createElement('h3')
            h3.setAttribute('class', 'h3')
            h3.innerHTML = person.email

            //Coloca o card dentro da divona authors, que está dentro do container
            authors.appendChild(card)

            //Coloca todas as dependencias do card, dentro do mesmo
            card.appendChild(img)
            card.appendChild(h2)
            card.appendChild(h3)

            
        })
    } else {
        console.log('Deu rum')
    }
}
request.send()