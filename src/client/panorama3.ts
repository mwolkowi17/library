import { create_icon } from './navigation_icon';
import { create_icon_right } from './navigation_icon_right';
import { scene } from './client';
import { panorama2,navicon2,navicon3, navicon9 } from './panorama2';
import { panorama4, infoicon4, navicon7 } from './panorama4';
import { panorama_form } from './panorama_create';
import { navicon6 } from './panorama4';

//dodawanie panoramy
export const panorama3 = new panorama_form('./hall2.png').main;
panorama3.rotateY(Math.PI/180)

//dodawanie ikony nawigacyjnej
export const navicon4 = new create_icon(10, -13, 30,'nav4');
export const navicon5 =  new create_icon_right(20, -25, -35,'nav5');
//panorama3.add(navicon4.main)

//event-click ikony nawigacyjnej
navicon4.element.addEventListener('pointerdown', () => {
    panorama3.remove(navicon4.main);
    panorama3.remove(navicon5.main)
    scene.remove(panorama3);
    scene.add(panorama4);
    panorama4.add(navicon6.main)
    panorama4.add(navicon7.main)
    panorama4.add(infoicon4.main)
    navicon4.reset_size();
    console.log('nav4')
})

//event-click ikony nawigacyjnej
navicon5.element.addEventListener('pointerdown', () => {
    panorama3.remove(navicon4.main);
    panorama3.remove(navicon5.main)
    scene.remove(panorama3);
    scene.add(panorama2);
    panorama2.add(navicon2.main)
    panorama2.add(navicon3.main)
    panorama2.add(navicon9.main)
    navicon5.reset_size();
    console.log('nav5')
})


