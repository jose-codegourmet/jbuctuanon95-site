// import { rest } from 'msw';
// import { CONTENTFUL_ENTITY_TO_SLUG } from 'src/constants/contentful';
// import { previewContentfulPost } from 'src/lib/previewer';

// http://localhost:3000/api/contentful-preview?secret=<SECRET>&slug={entry.linkedBy.fields.slug}&entity={entity}
export default async function previewPreview() {
  // const { secret, entity, slug } = req.query;
  // if (secret !== process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
  //   return res.status(401).json({ message: 'Invalid token' });
  // }
  // // console.log('test === ', { secret, entity, slug });
  // // Fetch the headless CMS to check if the provided `slug` exists
  // const post = await previewContentfulPost({ entity, slug });
  // // If the slug doesn't exist prevent preview mode from being enabled
  // if (!post) {
  //   return res.status(401).json({ message: 'Invalid slug' });
  // }
  // res.redirect(`/${CONTENTFUL_ENTITY_TO_SLUG[entity]}/${post.slug}`);
  // return res.send(post);
  // // Enable Preview Mode by setting the cookies
  // res.setPreviewData({})
  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `/posts/${post.slug}` })
  // const url = `/posts/${post.slug}`
  // res.setHeader('Content-Type', 'text/html')
  // res.write(
  //   `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
  //   <script>window.location.href = '${url}'</script>
  //   </head>
  //   </html>`
  // )
  // res.end();
}
