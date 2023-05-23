import { create_icon } from './navigation_icon';
import { create_icon_left } from './navigation_icon_left';
import { scene } from './client';
import { panorama1, navicon1, infoicon1 } from './panorama1';
import { panorama3, navicon4, navicon5 } from './panorama3';
import { panorama_form } from './panorama_create';
import { create_info_icon } from './info_icon';
import { infoicon6, navicon10, panorama6 } from './panorama6';


//dodawanie panoramy
export const panorama2 = new panorama_form('./hall1.png').main
panorama2.rotateY(Math.PI)

//dodawanie ikony nawigacyjnej
export const navicon2 = new create_icon_left(30, -20, -16, 'nav2');
export const navicon3 = new create_icon(-7, -15, -30, 'nav3');
export const navicon9 = new create_icon(10, -15, 30, 'nav9');

//event-click ikony nawigacyjnej
navicon2.element.addEventListener('pointerdown', () => {
    console.log('navicon2')
    infoicon2.element.style.visibility='visible'
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    panorama2.remove(navicon9.main)
    scene.remove(panorama2);
    scene.add(panorama3);
    panorama3.add(navicon4.main);
    panorama3.add(navicon5.main)
    navicon2.reset_size();
    navicon3.reset_size();
})

//event-click ikony nawigacyjnej
navicon3.element.addEventListener('pointerdown', () => {
    console.log("navicon3")
    infoicon2.element.style.visibility='visible'
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    panorama2.remove(navicon9.main)
    scene.remove(panorama2);
    scene.add(panorama1);
    panorama1.add(navicon1.main)
    panorama1.add(infoicon1.main)
    navicon1.reset_size(); 
})

//event-click ikony nawigacyjnej
navicon9.element.addEventListener('pointerdown', () => {
    console.log("navicon3")
    infoicon2.element.style.visibility='visible'
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    panorama2.remove(navicon9.main)
    scene.remove(panorama2);
    scene.add(panorama6);
    panorama6.add(navicon10.main)
    panorama6.add(infoicon6.main)
    navicon9.reset_size(); 
    console.log("navicon9")
})
//dodawanie ikony-obrazek
export const infoicon2 = new create_info_icon(17, -7, -30, 'imageInfo1')






