import type { Metadata } from "next";
import PortfolioClientPage from "./PortfolioClientPage";

export const metadata: Metadata = {
  title: "Portofolio Projek - Ryan Andreas",
  description: "Daftar projek terbaru Ryan Andreas, Web & Mobile Developer. Dapat diunduh sebagai PDF.",
};

export default function PortofolioPage() {
  return <PortfolioClientPage />;
}
