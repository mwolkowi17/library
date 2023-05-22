import { create_icon } from './navigation_icon';
import { panorama2,navicon2,navicon3, navicon9 } from './panorama2';
import { scene } from './client';
import { panorama_form } from './panorama_create';
import { create_info_icon } from './info_icon';
import { invoDivClean } from './info_div_clean';
import { teksty } from './teksty';
import { tytuly } from './tytuly'; 

//dodawanie panoramy
export const panorama1 = new panorama_form('./enter1.png').main;
panorama1.rotateY(Math.PI)

//dodawanie ikony nawigacyjnej
export const navicon1 = new create_icon(-3, -7, 30,'nav1');
setTimeout(() => {
    panorama1.add(navicon1.main);
  }, 1000)

//event-click ikony nawigacyjnej
navicon1.element.addEventListener('pointerdown', () => {
    infoicon1.element.style.visibility='visible'
    panorama1.remove(navicon1.main)
    panorama1.remove(infoicon1.main)
    scene.remove(panorama1);
    scene.add(panorama2);
    panorama2.add(navicon2.main)
    panorama2.add(navicon3.main)
    panorama2.add(navicon9.main)
    navicon1.reset_size();
    infodiv1.main.style.visibility='hidden'
    
})

//dodawanie obrazka
const infodiv1 = new invoDivClean("300px",tytuly[0], teksty[0]);

//dodawanie ikony-obrazek
export const infoicon1 = new create_info_icon(8, 5, 30, 'imageInfo1')
setTimeout(() => {
  panorama1.add(infoicon1.main)
}, 1000)

//event-click ikony-obrazek
infoicon1.element.addEventListener('pointerdown', () => {
  console.log('pointer clicked'); 
  document.body.appendChild(infodiv1.main)
  infodiv1.main.style.visibility = 'visible';
  infoicon1.element.style.visibility = 'hidden';

  infodiv1.offButton.addEventListener("click", function () {
      infodiv1.main.style.visibility = 'hidden';
      infoicon1.element.style.visibility = 'visible';
  })

})



