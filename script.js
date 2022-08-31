window.onload = function () {
    let key = document.querySelectorAll('.key');
    let input = document.querySelector('.input');
    let leftControl = document.querySelector('.lctrl');
    let rightControl = document.querySelector('.rctrl');
    let backspace = document.querySelector('.backspace');
    let capslock = document.querySelector('.caps');
    let shiftleft = document.querySelector('.shift');
    let shiftright = document.querySelector('.shift_little');
    let altleft = document.querySelector('.alt');
    let altright = document.querySelector('.alt_left');
    let window = document.querySelector('.window_div');
    let space = document.querySelector('.space');
    let contextmenu = document.querySelector('.context');
    let enter = document.querySelector('.enter');
         
    
    input.onkeyup = (event) => {
        console.log(event);
        let symbol = event.key.toUpperCase();
        console.log(symbol);
        for (let i = 0; i < key.length; i++) {
            key[i].onclick = () => {
                
            }
           key[i].classList.remove('active');
            if (key[i].innerHTML == symbol) {
                key[i].classList.add('active');
            } 
            if (event.code == 'ControlLeft') {
                leftControl.classList.add('active');
            }
            if (event.code == 'ControlRight') {
                rightControl.classList.add('active');
            }
            if (event.code == 'Backspace') {
                backspace.classList.add('active');
            }
            if (event.code == 'CapsLock') {
                capslock.classList.add('active');
            }
            if (event.code == 'ShiftLeft') {
                shiftleft.classList.add('active'); 
            }
            if (event.code == 'ShiftRight') {
                shiftright.classList.add('active');
            }
            if (event.code == 'AltLeft') {
                altleft.classList.add('active');
            }
            if (event.code == 'AltRight') {
                altright.classList.add('active');
            }
            if (event.code == 'MetaLeft') {
                window.classList.add('active');
            }
            if (event.code == 'Space') {
                space.classList.add('active');
            }
            if (event.code == 'ContextMenu') {
                contextmenu.classList.add('active');
            }
            if (event.code == 'Enter') {
                enter.classList.add('active');
            }
            
        }
    }

    

}