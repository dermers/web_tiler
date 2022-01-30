export const loader = async ({ params }) => {
    const response = await fetch(params.url);
    const text = await response.text();
    return new Response(text, {
      status: 200,
      headers: {
        "Content-Type": "text/html"
      }
    });
  }