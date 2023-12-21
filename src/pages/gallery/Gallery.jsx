import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'


const Gallery = () => {
  
  const galleryLength = 15;
  const images = []

   for(let i =1; i <= galleryLength; i++) {
     images.push(require(`../../images/gallery${i}.jpg`))
   }



    return (
   <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Quod recusandae minima 
        vitae saepe doloribus nam, sunt facere
          at molestias eos?
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt="images" />
              </article>
            })
          }
        </div>
      </section>
   </>
  )
}

export default Gallery
