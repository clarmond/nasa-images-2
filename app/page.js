import ImageGrid from "@/components/ImageGrid";

export const metadata = {
  title: 'Popular NASA Images',
  description: 'A sample Next.js app that displays popular NASA images',
};

export default async function Home() {
  const resp = await fetch('https://images-assets.nasa.gov/popular.json');
  const results = await resp.json();
  const images = results.collection.items.map((item) => {
    const title = item.data[0].title.replace('Apollo_11_moonwalk_montage_720p', 'Apollo 11 Moonwalk Montage');
    return {
      altText: item.data[0].description_508,
      description: item.data[0].description,
      href: `https://images.nasa.gov/details/${item.data[0].nasa_id}`,
      imageURL: item.links[0].href,
      nasaID: item.data[0].nasa_id,
      title,
    }
  });
  const filteredImages = images.slice(0, 24);

  return (
    <div>
      <h1>Popular NASA Images</h1>
      <ImageGrid images={filteredImages} />
    </div>
  );
}
