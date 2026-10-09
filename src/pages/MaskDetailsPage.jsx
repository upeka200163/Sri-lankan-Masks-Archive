import { useParams, Link } from "react-router-dom";
import { masksData } from "../data/masksData";
import { galleryArtifactsData } from "../data/galleryArtifactsData";
import MaskDetailView from "../components/masks/MaskDetailView";
import { ArrowLeft } from "lucide-react";

export default function MaskDetailsPage() {
  const { id } = useParams();
  const allMasks = [...masksData, ...galleryArtifactsData];
  const mask = allMasks.find((m) => m.id === id) || masksData[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link
        to="/explore"
        className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-amber-400 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> සියලු වෙස් මුහුණු වෙත ආපසු (Back to Catalog)
      </Link>

      <MaskDetailView mask={mask} />
    </div>
  );
}