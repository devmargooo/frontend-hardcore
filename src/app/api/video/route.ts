export async function GET() {
  const list = ['Item 1', 'Item 2', 'Item 3'];

  return Response.json(list);
}
