import { create_icon } from './navigation_icon';
import { scene } from './client';
import { panorama_form } from './panorama_create';
import { create_info_icon } from './info_icon';
import { panorama3, navicon4, navicon5 } from './panorama3';
import { invoDivClean } from './info_div_clean';
import { tytuly } from './tytuly';
import { teksty } from './teksty';
import { create_icon_left } from './navigation_icon_left';
import { infoicon5, navicon8, panorama5 } from './panorama5';

//dodawanie panoramy
export const panorama4 = new panorama_form('./corridor2.png').main;
panorama4.rotateY(Math.PI)

//dodawanie ikony nawigacyjnej
export const navicon6 = new create_icon_left(-50, -13, 15, 'nav6');


//event-click ikony nawigacyjnej
navicon6.element.addEventListener('pointerdown', () => {
    infoicon4.element.style.visibility = 'visible'
    panorama4.remove(navicon6.main)
    panorama4.remove(navicon7.main)
    panorama4.remove(infoicon4.main)
    scene.remove(panorama4)
    scene.add(panorama3)
    panorama3.add(navicon4.main)
    panorama3.add(navicon5.main)
    navicon6.reset_size()
    infodiv4.main.style.visibility = 'hidden'
    console.log('nav6')
})

//dodawanie ikony nawigacyjnej
export const navicon7 = new create_icon(-14, -17, 15, 'nav7');

//event-click ikony nawigacyjnej
navicon7.element.addEventListener('pointerdown', () => {
    infoicon4.element.style.visibility = 'visible'
    panorama4.remove(navicon6.main)
    panorama4.remove(navicon7.main)
    panorama4.remove(infoicon4.main)
    infodiv4.main.style.visibility = 'hidden'
    scene.remove(panorama4)
    scene.add(panorama5)
    panorama5.add(navicon8.main)
    panorama5.add(infoicon5.main)

    console.log('nav7')
})

//dodawanie obrazków
const infodiv4 = new invoDivClean("220px", tytuly[1], teksty[1]);

//dodawanie ikony-obrazek
export const infoicon4 = new create_info_icon(15, -3, -30, 'imageInfo4')

//event-click ikony-obrazek
infoicon4.element.addEventListener('pointerdown', () => {
    console.log('pointer clicked');
    document.body.appendChild(infodiv4.main)
    infodiv4.main.style.visibility = 'visible';
    infoicon4.element.style.visibility = 'hidden';

    infodiv4.offButton.addEventListener("click", function () {
        infodiv4.main.style.visibility = 'hidden';
        infoicon4.element.style.visibility = 'visible';
    })
})

