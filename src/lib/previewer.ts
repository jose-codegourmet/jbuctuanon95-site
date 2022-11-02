import { fetchGraphQL } from './api';
import { CASE_STUDY_SEARCHABLE_FIELDS } from './caseStudy/caseStudy';
import { CONTENTFUL_COLLECTIONS } from 'src/constants/contentful';

export async function previewContentfulPost({ entity, slug }: { entity: string; slug: string }) {
  const itemsQuery: string | unknown = {
    caseStudy: CASE_STUDY_SEARCHABLE_FIELDS,
  }[entity];

  const queryCollectionKey = CONTENTFUL_COLLECTIONS[entity];

  const query = `
    query {
      ${queryCollectionKey}(where: { slug : "${slug}" }, limit: 1, preview: true) {
        items {
          ${itemsQuery}
        }
      }
    }
  `;

  const entries = await fetchGraphQL(query, true);

  return entries.data[queryCollectionKey].items[0];
}
