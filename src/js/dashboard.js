
let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
let pane = document.querySelector('.profile-tab-pane');

let list = document.querySelectorAll('.list');
const sidePane = document.querySelectorAll('.profile-tab-pane');

navigation.classList.toggle('active');
sidePane[0].classList.remove('hidden');

menuToggle.onclick = function() {
    navigation.classList.toggle('active');
    // pane.classList.toggle('active');

};



function activeLink() {
    // list.forEach((item) =>
    // item.classList.remove('active'));
    // this.classList.add('active');
    // let index = 0;
    // let activeName = item.text
    // console.log(index);

    // if (list.classList.contain('active')) {

    // }

    // // activate the pane;
    // activePane(index);
};

function activePane(i) {
    if (i === 0) {
        sidePane[0].classList.remove('hidden');
        sidePane[1].classList.add('hidden');
        sidePane[2].classList.add('hidden');
        sidePane[3].classList.add('hidden');
        sidePane[4].classList.add('hidden');
        sidePane[5].classList.add('hidden');
    }
    else if (i === 1) {
        sidePane[1].classList.remove('hidden');
        sidePane[0].classList.add('hidden');
        sidePane[2].classList.add('hidden');
        sidePane[3].classList.add('hidden');
        sidePane[4].classList.add('hidden');
        sidePane[5].classList.add('hidden');
    }
    else if (i === 2) {
        sidePane[2].classList.remove('hidden');
        sidePane[0].classList.add('hidden');
        sidePane[1].classList.add('hidden');
        sidePane[3].classList.add('hidden');
        sidePane[4].classList.add('hidden');
        sidePane[5].classList.add('hidden');
    }
    else if (i === 3) {
        sidePane[3].classList.remove('hidden');
        sidePane[0].classList.add('hidden');
        sidePane[1].classList.add('hidden');
        sidePane[2].classList.add('hidden');
        sidePane[4].classList.add('hidden');
        sidePane[5].classList.add('hidden');
    }
    else if (i === 4) {
        sidePane[4].classList.remove('hidden');
        sidePane[0].classList.add('hidden');
        sidePane[1].classList.add('hidden');
        sidePane[2].classList.add('hidden');
        sidePane[3].classList.add('hidden');
        sidePane[5].classList.add('hidden');
    }
    else if (i === 5) {
        sidePane[5].classList.remove('hidden');
        sidePane[0].classList.add('hidden');
        sidePane[1].classList.add('hidden');
        sidePane[2].classList.add('hidden');
        sidePane[3].classList.add('hidden');
        sidePane[4].classList.add('hidden');
    }
};

const sideMenu = document.querySelectorAll('.list');

function checkSideMenu(i) {
    if (i === 0) {
        sideMenu[i].classList.remove('active');
        sideMenu[i].classList.add('active');

        sideMenu[1].classList.remove('active');
        sideMenu[2].classList.remove('active');
        sideMenu[3].classList.remove('active');
        sideMenu[4].classList.remove('active');
        sideMenu[5].classList.remove('active');
    } else if (i === 1) {
        sideMenu[i].classList.remove('active');
        sideMenu[i].classList.add('active');

        sideMenu[0].classList.remove('active');
        sideMenu[2].classList.remove('active');
        sideMenu[3].classList.remove('active');
        sideMenu[4].classList.remove('active');
        sideMenu[5].classList.remove('active');
    } else if (i === 2) {
        sideMenu[i].classList.remove('active');
        sideMenu[i].classList.add('active');

        sideMenu[0].classList.remove('active');
        sideMenu[1].classList.remove('active');
        sideMenu[3].classList.remove('active');
        sideMenu[4].classList.remove('active');
        sideMenu[5].classList.remove('active');
    } else if (i === 3) {
        sideMenu[i].classList.remove('active');
        sideMenu[i].classList.add('active');

        sideMenu[0].classList.remove('active');
        sideMenu[1].classList.remove('active');
        sideMenu[2].classList.remove('active');
        sideMenu[4].classList.remove('active');
        sideMenu[5].classList.remove('active');
    } else if (i === 4) {
        sideMenu[i].classList.remove('active');
        sideMenu[i].classList.add('active');

        sideMenu[0].classList.remove('active');
        sideMenu[1].classList.remove('active');
        sideMenu[2].classList.remove('active');
        sideMenu[3].classList.remove('active');
        sideMenu[5].classList.remove('active');
    } else if (i === 5) {
        sideMenu[i].classList.remove('active');
        sideMenu[i].classList.add('active');

        sideMenu[0].classList.remove('active');
        sideMenu[1].classList.remove('active');
        sideMenu[2].classList.remove('active');
        sideMenu[3].classList.remove('active');
        sideMenu[4].classList.remove('active');
    }
};

for (let i = 0; sideMenu.length; i++) {
    sideMenu[i].addEventListener('click', function() {
        // check active sideMenu;
        checkSideMenu(i)

        // activate the pane;
        activePane(i);

    });
}; 


