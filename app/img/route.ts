export async function GET(request: Request, response: Response) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const imageResponse = await fetch(
    url || "https://www.traveltrack.com/opengraph-image.jpg"
  );
  const imageBuffer = await imageResponse.arrayBuffer();

  return new Response(Buffer.from(imageBuffer), {
    status: 200,
    headers: { "Content-Type": `${imageResponse.headers.get("content-type")}` },
  });
}
