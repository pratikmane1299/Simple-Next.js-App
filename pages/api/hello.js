export default async (req, res) => {

  const posts = await fetch('https://jsonplaceholder.typicode.com/posts/');

  res.statusCode = 200;
  res.json({ posts });
}
