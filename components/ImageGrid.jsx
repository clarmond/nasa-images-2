import ImageCard from "./ImageCard";

const ImageGrid = ({ images }) => {
    return (
        <div className="image-grid">
        {
            images.map((image) => {
                return <ImageCard key={image.nasaID} image={image} />
            })
        }
        </div>
    );
}

export default ImageGrid;