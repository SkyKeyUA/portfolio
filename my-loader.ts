export default function cloudinaryLoader({ src }: { src: string }) {
  return `${process.env.NEXT_APP_API_URL}/${src}`;
}
