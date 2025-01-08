import { type Metadata } from "next";

export function getMetadata(): Metadata {
  return {
    title: "{{TITLE}}",
    description: "{{DESCRIPTION}}",
    openGraph: {
      title: "{{TITLE}}",
      description: "{{DESCRIPTION}}",
      siteName: "{{SITE_NAME}}",
    },
    twitter: {
      card: "summary_large_image",
      title: "{{TITLE}}",
      description: "{{DESCRIPTION}}",
    },
  };
} 