
//klasa tworząca div - opis
export class invoDivClean {

    main: HTMLElement
    offButton: HTMLElement 
    valvleDetails: HTMLElement

    constructor(wysokosc:string, tytul:string, tekst: string) {
        //this.image_adress=plik
        this.main = document.createElement('div');
        this.main.className = 'display';
        this.main.id = 'display1';
        this.main.style.backgroundColor = 'rgba(255,255,255,0.5)';
        this.main.textContent = tytul;
        this.main.style.color = 'black'
        this.main.style.height = wysokosc;
        this.main.style.width = "480px";
        this.main.style.fontSize = "15px";
        this.main.style.fontFamily= "arial"
        this.main.style.textAlign = "center";
        this.main.style.fontWeight= "bold";
        this.main.style.lineHeight = "1.8";
        this.main.style.position = 'absolute';
        this.main.style.top = '40px';
        this.main.style.left = '40px';
      
        this.valvleDetails = document.createElement('div');
        this.valvleDetails.className = 'details_valve';
        this.valvleDetails.textContent = tekst
        this.valvleDetails.style.fontWeight= "normal"
        this.main.appendChild(this.valvleDetails);
        

        this.offButton = document.createElement('div')
        this.offButton.className = 'offButton'
        this.offButton.style.cursor='pointer'
        this.offButton.style.color='black'
        this.offButton.style.fontSize='12px'
        this.offButton.style.fontWeight='bold'
        this.offButton.textContent = '[Zamknij]'
        
        this.main.appendChild(this.offButton);
        

        
        
        
    }

    
}