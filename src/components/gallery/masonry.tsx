import { ImageMasonryProp } from "@/common/types";

interface IGalleryMasonry {
  right: ImageMasonryProp[];
  left: ImageMasonryProp[];
}

export default function GalleryMasonry({ right, left }: IGalleryMasonry) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {left.map((item, index) => (
        <div key={index} className="grid gap-4">
          {item.gallery.map((galleryItem, index) => (
            <div key={index}>
              <img
                className="object-cover object-center h-auto w-full max-w-full rounded-md"
                src={galleryItem.Image}
                alt={galleryItem.alt}
              />
            </div>
          ))}
        </div>
      ))}

      {right.map((item, index) => (
        <div key={index} className="grid gap-4">
          {item.gallery.map((galleryItem, index) => (
            <div key={index}>
              <img
                className="object-cover object-center h-full w-full max-w-full rounded-md"
                src={galleryItem.Image}
                alt={galleryItem.alt}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
