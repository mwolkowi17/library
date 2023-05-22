import { scene } from './client';
import { panorama_form } from './panorama_create';
import { create_info_icon } from './info_icon';
import { invoDivClean } from './info_div_clean';
import { tytuly } from './tytuly';
import { teksty } from './teksty';
import { create_icon_right } from './navigation_icon_right';
import { panorama4,navicon6,navicon7,infoicon4 } from './panorama4';

//dodawanie panoramy
export const panorama5 = new panorama_form('./multimedia1.png').main;

//dodawanie ikony nawigacyjnej
export const navicon8 = new create_icon_right(20, -17, -25, 'nav8');

//event-click ikony nawigacyjnej
navicon8.element.addEventListener('pointerdown', () => {
    infoicon5.element.style.visibility = 'visible'
    panorama5.remove(navicon8.main)
    panorama5.remove(infoicon5.main)
    scene.remove(panorama5)
    scene.add(panorama4)
    panorama4.add(navicon6.main)
    panorama4.add(navicon7.main)
    panorama4.add(infoicon4.main)
    infodiv5.main.style.visibility = 'hidden'
    navicon8.reset_size()
    console.log('nav8')
})

//dodawanie obrazków
const infodiv5 = new invoDivClean("220px", tytuly[2], teksty[2]);

//dodawanie ikony-obrazek
export const infoicon5 = new create_info_icon(5, 9, -30, 'imageInfo5')

//event-click ikony-obrazek
infoicon5.element.addEventListener('pointerdown', () => {
    console.log('imageInfo5')
    document.body.appendChild(infodiv5.main)
    infodiv5.main.style.visibility = 'visible';
    infoicon5.element.style.visibility = 'hidden';

    infodiv5.offButton.addEventListener("click", function () {
        infodiv5.main.style.visibility = 'hidden';
        infoicon5.element.style.visibility = 'visible';
    })
})