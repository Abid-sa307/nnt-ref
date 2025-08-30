// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
import { createClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";


// 👉 Replace with your actual values from studio-nnt-ref/sanity.cli.ts
export const client = createClient({
  projectId: 'xxkp03sq',
  dataset: 'production',
  apiVersion: '2025-08-01',
  useCdn: true,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
