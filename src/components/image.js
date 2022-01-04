import ImagemTal from '../img/image.jpg'

class Image {
    
    createImage(){
        const img = document.createElement('img')
        img.src = ImagemTal;
        img.width = 200

        document.querySelector('body').appendChild(img)
    }
}

export default Image