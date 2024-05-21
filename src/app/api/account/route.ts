export async function GET(email: string) {
  const res = await fetch(
    `https://strapi.joondev.com/api/wordsets?filters[email][$eq]=${email}&fields=email`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN_FOR_DATA_STRAPI}`,
      },
    },
  );

  const data = await res.json();
  return Response.json({ data });
}
