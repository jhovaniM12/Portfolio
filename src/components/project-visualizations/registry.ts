import ArchitectureVisual from "./ArchitectureVisual.astro";
import GraphVisual from "./GraphVisual.astro";
import GalleryVisual from "./GalleryVisual.astro";
import DefaultVisual from "./DefaultVisual.astro";

export const projectVisualizationRegistry = {
  architecture: ArchitectureVisual,
  graph: GraphVisual,
  gallery: GalleryVisual,
  default: DefaultVisual,
};
