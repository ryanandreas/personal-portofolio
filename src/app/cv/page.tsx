import type { Metadata } from "next";
import CvClientPage from "./CvClientPage";

export const metadata: Metadata = {
  title: "Curriculum Vitae - Ryan Andreas",
  description: "CV Resmi Ryan Andreas, Web & Mobile Developer.",
};

export default function CvPage() {
  return <CvClientPage />;
}
