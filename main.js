import { compilePseudoSelector } from 'css-select/lib/pseudo-selectors';
import Typed from 'typed.js';




// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

/* ***** Emoji Swap ***** */

const emojiArray = ['👋', '🕶', '☕', ' 🤟', ' 👻 ', ' 👾 ', '🤖', '🏄🏼'];
const emojiElement = document.getElementById('emoji-effect');

// on hover we need to change the element from the array, 

function changeEmoji() {
    emojiElement.innerHTML = emojiArray[Math.floor(Math.random() * emojiArray.length)]
    console.log('sadfasdf');
}

function checkMagic() {
    const toggler = document.querySelector('.toggler');
    const button = document.querySelector('.hamburg');

    if(toggler.checked == true) {
        button.classList.toggle('opened');
    }
    else {
        button.classList.remove('opened');
    }
}


function checkMagic2() {
    const svgMenu = document.querySelector('#svg-menu');
    const toggler = document.querySelector('.toggler');

    // if(svgMenu.classList.contains('opened')) {
    //     toggler.checked = true;
    // }
}
// CLose Menu 

function closeMenu() {

}
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    const toggler = document.querySelector('.toggler');
    toggler.onclick = checkMagic;
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
   // emojiElement.onmouseover = changeEmoji;
    const menuItems = document.querySelector('#menuLol');
    const b = Array.from(menuItems.children);
    b.forEach(function (e) {
        e.addEventListener('click', () => {
            toggler.checked = false;
            const button = document.querySelector('#svg-menu');
            button.classList.remove('active');
        })
    });
    //menu 2.0

    const svgMenu = document.querySelector('#svg-menu');
    svgMenu.addEventListener('click', () => {
        const toggler = document.querySelector('.toggler');
       // toggler.checked == false ? toggler.checked = true : toggler.checked = flase;
       toggler.checked = !toggler.checked;

    })
   // svgMenu.onclick = checkMagic2();

   // typed
   var options = {
    //strings: ["$ mkdir <em>new-project<em><br>","$ cd <em>new-project<em><br>","$ npm init -y<br>","$ touch index.html"],
    strings: ['$ mkdir <em>new_project</em>^1000<br>`$ cd <em>new_project</em><br>`$ npm init -y<br>`$ cd touch <em>index.html</em><br>`$' ],
    typeSpeed: 100,
    backSpeed: 0,
    loop: true,
  };
  // const typedElement = document.querySelector('#typed');
   var typed = new Typed('#typedJS', options);



   let bob = document.querySelector('#work-it');
   if(bob.classList.contains('active')) {
       console.log('sddfsdfas');
   }
   else {
       console.log('no no no');
   }
}


//strings: ['npm install^1000\n `installing components...` ^1000\n `Fetching from source...`'],
