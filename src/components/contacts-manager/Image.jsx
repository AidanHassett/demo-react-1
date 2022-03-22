import "../../css/img.css"

const Image = ({image, imageAlt}) => {
  return (
    <img className="image" src={image} alt={imageAlt} />
  )
}

export default Image;
