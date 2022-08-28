import React, { useEffect, useState } from 'react';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ImageViewer = ({isOpen, setIsOpen, images}) => {
  const [imgIndex, setImgIndex] = useState(0);
  
  useEffect(() => { 
    setTimeout(() => setImgIndex(imgIndex + 1))
    setTimeout(() => setImgIndex(0), 50)
  }, [isOpen]);

  return (
    <div className="image">
      {isOpen && (images.length > 1
        ?<Lightbox
            imageTitle={images[imgIndex].title}
            imageCaption={images[imgIndex].caption}
            mainSrc={images[imgIndex].url}
            onCloseRequest={() => setIsOpen(false)}
            nextSrc={images[(imgIndex + 1) % images.length].url}
            prevSrc={images[(imgIndex + images.length - 1) % images.length].url}
            onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
        />
        :<Lightbox
            imageTitle={images[imgIndex] ?images[imgIndex].title: ""}
            imageCaption={images[imgIndex] ?images[imgIndex].caption: ""}
            mainSrc={images[imgIndex] ?images[imgIndex].url : images[0].url}
            onCloseRequest={() => setIsOpen(false)}
        />)
      }
    </div>
  );
}

export default ImageViewer;