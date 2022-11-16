// Remember to import the data and Dog class!
import dogs from './data.js'
import Dog from './Dog.js'

const dogsArray = ["Rex", "Bella", "Teddy"]
// dogsArray.push(
//     ()=>{
//         for (let i=0; i<dogs.length; i++){
//             return dogs[i].name
//         }
//     }
// )
const rex = new Dog(dogs.filter((dog)=>dog.name === 'Rex')[0])
const bella = new Dog(dogs.filter((dog)=>dog.name === 'Bella')[0])
const teddy = new Dog(dogs.filter((dog)=>dog.name === 'Teddy')[0])

rex.renderDogHtml()

function getNextDog() {
    dogsArray.shift()
    const nextDog = dogs.filter((dog)=>dog.name === dogsArray[0])[0]
    return nextDog ? new Dog(nextDog) : endMessage()
}

document.getElementById('nope-btn').addEventListener('click', ()=>{
    document.getElementById("badge-nope").classList.remove("hide")
    dogs.filter((dog)=>dog.name === dogsArray[0])[0].hasBeenSwiped
    setTimeout(()=>{getNextDog().renderDogHtml()}, 1000)
})

document.getElementById('like-btn').addEventListener('click', ()=>{
    document.getElementById("badge-like").classList.remove("hide")
    setTimeout(()=>{getNextDog().renderDogHtml()}, 1000)
})

function endMessage() {
    document.getElementById('dogs').innerHTML = `<h1 class="end-message">You are out of matches 😅</h1>`
}