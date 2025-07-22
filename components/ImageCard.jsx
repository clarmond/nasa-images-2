import Image from "next/image";
import Link from "next/link";

const ImageCard = (props) => {
    const { altText, linkToDetails, imagePreview, title } = props.image;
    return (
        <div className="image-card">
            <div>
                <Link href={linkToDetails} target="_blank" rel="noreferrer">
                    <Image src={imagePreview.href} className="image" alt={altText} width={imagePreview.width} height={imagePreview.height} />
                </Link>
                <div className="image-title">
                    {title}
                </div>
            </div>
        </div>
    );
}

export default ImageCard;