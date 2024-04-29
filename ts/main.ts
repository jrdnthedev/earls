let isToggle = false;
const element = document.getElementById("hamburger_toggle");
const close_btn = document.getElementById("close_btn");
element?.addEventListener("click", toggle);
close_btn?.addEventListener("click", toggle);

function toggle() {
    isToggle = !isToggle;
    const body = document.getElementById('body');
    const nav = document.getElementById('hamburger_menu');
    const menu = document.getElementById('main_nav');

    if(isToggle) {
        body?.classList.add('scroll-lock');
        nav?.classList.add('active');
        menu?.classList.add('active');
    } else {
        body?.classList.remove('scroll-lock');
        nav?.classList.remove('active');
        menu?.classList.remove('active');
    }

}

class ImageNode {
    image: string;
    next: ImageNode | null;

    constructor(image: string) {
        this.image = image;
        this.next = null;
    }
}

class SlideItem {
    image: string;
    title: string;
    description: string;
    next: SlideItem | null;

    constructor(image: string,title: string,description: string) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.next = null;
    }
}

class LinkedList {
    head: SlideItem | null;
    tail: SlideItem | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(slideItem: any): void {
        const newNode = new SlideItem(slideItem.image,slideItem.title,slideItem.description);
        if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        } else {
        this.tail!.next = newNode;
        this.tail = newNode;
        }
    }

    moveBackward(): void {
        if (this.head && this.head.next) {
        const firstNode = this.head;
        this.head = firstNode.next;
        this.tail!.next = firstNode;
        this.tail = firstNode;
        this.tail.next = null;
        }
        this.updateCarousel();
    }

    moveForward(): void {
        if (this.head && this.tail) {
        let current = this.head;
        while (current.next && current.next !== this.tail) {
            current = current.next;
        }
        this.tail.next = this.head;
        this.head = this.tail;
        this.tail = current;
        this.tail.next = null;
        }
        this.updateCarousel();
    }

    updateCarousel(): void {
        const carousel = document.querySelector('.carousel') as HTMLElement;
        carousel.innerHTML = ''; 
        let current = this.head;
        while (current) {
            const figure = document.createElement('figure');
            const caption = document.createElement('figcaption');
            const img = document.createElement('img');
            const p = document.createElement('p');
            const h3 = document.createElement('h3');
            img.src = current.image;
            img.alt = 'Image';
            p.innerHTML = current.description;
            p.classList.add('paragraph')
            p.classList.add('text-left')
            h3.innerHTML = current.title;
            h3.classList.add('text-left')
            caption.append(h3);
            caption.append(p);
            figure.append(img);
            figure.append(caption);
            carousel.appendChild(figure);
            current = current.next;
        }
    }
}
  
  const carouselList = new LinkedList();
  carouselList.add({image:"img/small/avocado.jpg",title:"Avocado",description:"asfdsafsdfoj"});
  carouselList.add({image:"img/small/egg.jpg",title:"Egg",description:"asfdsafsdfoj"});
  carouselList.add({image:"img/small/avocado.jpg",title:"Avocado2",description:"asfdsafsdfoj"});
  
  function moveForward(): void {
    carouselList.moveForward();
  }
  
  function moveBackward(): void {
    carouselList.moveBackward();
  }
  
  window.onload = () => {
    carouselList.updateCarousel();
  };
  
  