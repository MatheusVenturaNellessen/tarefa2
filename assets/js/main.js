function start() {
    const days = document.querySelector('#day').value;
    const colors = document.querySelector('#color').value;
    const calendar = document.querySelector('#calendar');

    if(!days) alert('Selecione um dia.');

    if(days < 0 || days > 30) {
        alert('Selecione dia váilido.');
    } else {
        const td = document.getElementsByTagName('td')[Number(days) + 1];
        td.style.backgroundColor = colors;
    }

    const el = document.querySelectorAll('td');

    let counterBlue = 0;
    let counterGreen = 0;
    let counterPurple = 0;
    let counterPink = 0;

    el.forEach(value => {
        let style = window.getComputedStyle(value);
        let styleColor = style.backgroundColor;

        if(styleColor === 'rgb(173, 216, 230)' || styleColor === 'lightblue') {
            counterBlue++;
            console.log(counterBlue);
        }
        
        if(styleColor === 'rgb(152, 215, 152)' || styleColor === 'palegreen') {
            counterGreen++;
            console.log(counterGreen);            
        }

        if(styleColor === 'rgb(106, 90, 205)' || styleColor === 'slateblue') {
            counterPurple++;
            console.log(counterPurple);
        } 
            
        if(styleColor === 'rgb(255, 182, 193)' || styleColor === 'lightpink') {
            counterPink++;
            console.log(counterPink);
        } 
    });  
}
