export async function GET(req: Request) {
  const res = await fetch(
    `https://strapi.joondev.com/api/wordsets?filters[email][$eq]=sargadil@gmail.com&fields=email`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN_FOR_DATA_STRAPI}`,
      },
    },
  );

  const data = await res.json();
  return Response.json({ data });
}
