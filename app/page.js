import ImageGrid from "@/components/ImageGrid";

import styles from "./page.module.css";

export default async function Home() {
  const resp = await fetch('https://images-assets.nasa.gov/popular.json');
  const results = await resp.json();
  const images = results.collection.items.map((item) => {
    return {
      altText: item.data[0].description_508,
      description: item.data[0].description,
      href: `https://images.nasa.gov/details/${item.data[0].nasa_id}`,
      imageURL: item.links[0].href,
      nasaID: item.data[0].nasa_id,
      title: item.data[0].title,
    }
  });
  const filteredImages = images.slice(0, 24);

  return (
    <div>
      <ImageGrid images={filteredImages} />
    </div>
  );
}
