// Create the Dog class here
import dogs from '/data.js'

class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    getDogHtml(){
        const {name, avatar, age, bio} = this
        const nope = this.getNopeHtml()
        const like = this.getLikeHtml()
        return `
        <img class="dog" 
         src="${avatar}")">
            <div>${nope} ${like}</div>
            <div class="text-box">
            <h1>${name}, ${age}</h1>
            <h2>${bio}</h2>
            </div>
        `
    }

    hasBeenSwiped(){
        this.hasBeenSwiped
    }

    hasBeenLiked(){
        this.hasBeenLiked
    }

    getNopeHtml(){
        return `<img id="badge-nope" class="badge-nope hide" src="images/badge-nope.png">`
    }

    getLikeHtml(){
        return `<img id="badge-like" class="badge-like hide" src="images/badge-like.png">`
    }

    renderDogHtml(){
        document.getElementById('dogs').innerHTML = this.getDogHtml()
    }
}

export default Dog