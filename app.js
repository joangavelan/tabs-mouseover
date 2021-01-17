//tutorial
// const iconBox = document.querySelectorAll('.icon-box');
// const contentBox = document.querySelectorAll('.content-box');

// for(let i = 0; i < iconBox.length; i++) {
//     iconBox[i].addEventListener('mouseover', function() {
//         for(let i = 0; i < contentBox.length; i++) {
//             contentBox[i].className = 'content-box';
//         }
//         document.getElementById(this.dataset.id).className = 'content-box active';

//         for(let i = 0; i < iconBox.length; i++) {
//             iconBox[i].className = 'icon-box';
//         }

//         this.className = 'icon-box active'
//     })
// }

//understanding what just happened and making it more readable and shorter
const iconBoxes = document.querySelectorAll('.icon-box');
const contentBoxes = document.querySelectorAll('.content-box');

for(let iconBox of iconBoxes) {
    iconBox.addEventListener('mouseover', function() {
        //resets the initial class name for all the content boxes every time an icon box is hovered
        for(let contentBox of contentBoxes) contentBox.className = 'content-box';
        //uses the data-id attribute of each icon box to change the class name of the content box associated
        let associatedContent = document.getElementById(this.dataset.id);
        associatedContent.className = 'content-box active';
        //reset initial class name for all the icon boxes too
        for(let iconBox of iconBoxes) iconBox.className = 'icon-box';
        //add the class name active to the current hovered icon box
        this.className = 'icon-box active'
    })  
}