import { scene } from './client';
import { panorama_form } from './panorama_create';
import { create_info_icon } from './info_icon';
import { create_icon } from './navigation_icon';
import { create_icon_left } from './navigation_icon_left';
import { invoDivClean } from './info_div_clean';
import { tytuly } from './tytuly';
import { teksty } from './teksty';
import { create_icon_right } from './navigation_icon_right';
import { panorama4, navicon6, navicon7, infoicon4 } from './panorama4';
import { panorama2, navicon2, navicon3, navicon9 } from './panorama2';

//dodawanie panoramy
export const panorama6 = new panorama_form('./library1.png').main;
panorama6.rotateY(Math.PI)

//dodawanie ikony nawigacyjnej
export const navicon10 = new create_icon_right(20, -15, -25, 'nav10');

//event-click ikony nawigacyjnej
navicon10.element.addEventListener('pointerdown', () => {
    console.log("navicon10")
    infoicon6.element.style.visibility='visible'
    panorama6.remove(navicon10.main);
    panorama6.remove(infoicon6.main)
    scene.remove(panorama6)
    scene.add(panorama2)
    panorama2.add(navicon2.main)
    panorama2.add(navicon3.main)
    panorama2.add(navicon9.main)
    navicon10.reset_size();
    infodiv6.main.style.visibility='hidden'
})

//dodawanie obrazków
const infodiv6 = new invoDivClean("220px", tytuly[3], teksty[3]);

//dodawanie ikony-obrazek
export const infoicon6 = new create_info_icon(0, 2, 30, 'imageInfo6')

//event-click ikony-obrazek
infoicon6.element.addEventListener('pointerdown', () => {
    console.log('infonav6');
    document.body.appendChild(infodiv6.main)
    infodiv6.main.style.visibility = 'visible';
    infoicon6.element.style.visibility = 'hidden';

    infodiv6.offButton.addEventListener("click", function () {
        infodiv6.main.style.visibility = 'hidden';
        infoicon6.element.style.visibility = 'visible';
    })
})
