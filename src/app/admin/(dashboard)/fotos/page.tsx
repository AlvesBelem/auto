import { requireAdminSession } from "@/lib/auth/session";
import { db } from "@/lib/prisma";

import GalleryManager from "../../components/gallery-manager";

const PhotosPage = async () => {
  const session = await requireAdminSession();
  const images = await db.restaurantGalleryImage.findMany({
    where: { restaurantId: session.restaurantId },
    orderBy: { sortOrder: "asc" },
  });
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">Fotos do restaurante</h1>
        <p className="text-sm text-slate-500">
          Faça upload ou cole URLs de imagens para destacar seu ambiente, pratos e experiencias.
        </p>
      </div>
      <GalleryManager
        images={images.map((image) => ({
          id: image.id,
          imageUrl: image.imageUrl,
          title: image.title,
          description: image.description,
        }))}
      />
    </div>
  );
};

export default PhotosPage;
