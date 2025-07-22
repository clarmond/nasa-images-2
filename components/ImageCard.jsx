import Link from "next/link";

const ImageCard = (props) => {
    const { altText, href, imagePreview, title } = props.image;
    return (
        <div className="image-card">
            <div>
                <Link href={href} target="_blank" rel="noreferrer">
                    <img src={imagePreview.href} className="image" alt={altText} />
                </Link>
                <div className="image-title">
                    {title}
                </div>
            </div>
        </div>
    );
}

export default ImageCard;