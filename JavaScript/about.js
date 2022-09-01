//About Javascript that iterates through the given photos and transitions over the photos
//based on the given time
//This code was inspired by code written on stackoverflow.com
slideShow("slideshow", 3000);
function slideShow(container, time) {
    container = document.getElementById(container);
    this.images = [];
    this.curImage = 0;
    for (i = 0; i < container.childElementCount; i++) {
      this.images.push(container.children[i]);
      this.images[i].style.opacity = 0;
    }
  
    function nextSlide() {
      for (var i = 0; i < this.images.length; i++) {
        if (i!=this.curImage) this.images[i].style.opacity = 0;
      }
      this.images[this.curImage].style.opacity = 1;
      this.curImage++;
      if (this.curImage>=this.images.length) this.curImage=0;
      window.setTimeout(nextSlide.bind(document.getElementById(this)), time);
    };

    nextSlide.call(this);
    
  };
  