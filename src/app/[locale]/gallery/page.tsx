import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default async function GalleryPage() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  let files: string[] = [];
  
  try {
    files = fs.readdirSync(imagesDir);
  } catch (e) {
    console.error("Could not read images directory", e);
  }

  const mediaFiles = files.filter(file => 
    file.toLowerCase().endsWith('.jpg') || 
    file.toLowerCase().endsWith('.png') || 
    file.toLowerCase().endsWith('.jpeg') ||
    file.toLowerCase().endsWith('.mp4')
  );

  return (
    <div className="min-h-screen p-8 bg-[#08150a] text-cream">
      <h1 className="text-4xl serif mb-8 text-gold">Image Gallery Preview</h1>
      <p className="mb-8 opacity-70">Use this page to see the filenames of the images you uploaded. Let me know which filename you want to use for which section!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaFiles.map((filename) => {
          const isVideo = filename.toLowerCase().endsWith('.mp4');
          return (
            <div key={filename} className="flex flex-col gap-2 border border-cream/10 p-4 rounded-xl glass">
              <div className="relative aspect-video w-full bg-black/50 rounded-lg overflow-hidden flex items-center justify-center">
                {isVideo ? (
                  <video src={`/images/${filename}`} controls className="w-full h-full object-contain" />
                ) : (
                  <Image 
                    src={`/images/${filename}`} 
                    alt={filename} 
                    fill 
                    className="object-contain"
                  />
                )}
              </div>
              <p className="text-xs font-mono break-all text-center text-gold/80 bg-black/30 py-2 rounded">
                {filename}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
