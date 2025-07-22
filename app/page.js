import ImageGrid from "@/components/ImageGrid";

export const metadata = {
  title: 'Popular NASA Images',
  description: 'A sample Next.js app that displays popular NASA images',
};

export default async function Home() {
  const resp = await fetch('https://images-assets.nasa.gov/popular.json');
  const results = await resp.json();
  const images = results.collection.items.map((item) => {
    const { data, links } = item;
    const { description_508: altText, description, nasa_id: nasaID, title: titleRaw } = data[0];
    const imagePreview = links[0];
    const title = titleRaw.replace('Apollo_11_moonwalk_montage_720p', 'Apollo 11 Moonwalk Montage');
    return {
      altText: altText || `NASA Image ${nasaID}`,
      description,
      linkToDetails: `https://images.nasa.gov/details/${nasaID}`,
      imagePreview,
      nasaID,
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
