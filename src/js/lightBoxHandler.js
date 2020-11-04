
import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';

const lightBoxHandler = (event) => {
          event.preventDefault();
          if (event.target.nodeName !== "IMG") return
          let largeImgUrl = event.target.dataset.bigimg;
        
          const instance = basicLightbox.create(
            `<img src="${largeImgUrl}" width="800" height="600">`,
          );
          instance.show();
}
        
export default lightBoxHandler