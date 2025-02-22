
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const photos = [
  {
    id: 1,
    title: "Urban Landscapes",
    description: "Capturing the essence of city life",
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    title: "Nature's Beauty",
    description: "The raw power of natural landscapes",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 3,
    title: "Modern Workspace",
    description: "Clean and minimalist professional environments",
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
  },
];

interface Photo {
  id: number;
  title: string;
  description: string;
  src: string;
}

export default function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="min-h-screen p-8 lg:pl-72">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8 fade-in">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Photography
            </span>
            <h1 className="mt-4 text-4xl font-display font-bold tracking-tight">
              My Portfolio
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A collection of my best work, showcasing various styles and subjects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 scale-in"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 flex items-center justify-center text-white p-4">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">{photo.title}</h3>
                      <p className="mt-1 text-sm opacity-80">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="sm:max-w-3xl">
          {selectedPhoto && (
            <div className="space-y-4">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full rounded-lg"
              />
              <div>
                <h2 className="text-xl font-semibold">{selectedPhoto.title}</h2>
                <p className="mt-1 text-gray-600">{selectedPhoto.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
