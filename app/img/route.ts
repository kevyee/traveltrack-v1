export async function GET(request: Request, response: Response) {
  const imageResponse = await fetch(
    "https://traveltrack-27e7f5.ingress-baronn.ewp.live/wp-content/uploads/2024/03/d0c86189-b849-4884-9dec-3ac47becf03d-1024x585.jpg"
  );
  const imageBuffer = await imageResponse.arrayBuffer();

  return new Response(Buffer.from(imageBuffer), {
    status: 200,
    headers: { "Content-Type": `${imageResponse.headers.get("content-type")}` },
  });
}
