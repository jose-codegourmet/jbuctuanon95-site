import { fetchGraphQL } from '../api';
import { CASE_STUDY_PAGE_FIELDS, CASE_STUDY_PAGE_INFO, CASE_STUDY_RESULTS_FIELDS } from './queries';
import type { CASE_STUDY_RESULTS_FIELDS_TYPE } from './types';

export async function getAllCaseStudiesPages() {
  const entries = await fetchGraphQL(
    `query {
      caseStudyCollection(order: sys_publishedAt_DESC) {
        items {
          ${CASE_STUDY_PAGE_INFO}
        }
      }
    }`,
  );

  return entries?.data?.caseStudyCollection?.items;
}

export type getAllCaseStudiesReturnType = {
  total: number;
  items: CASE_STUDY_RESULTS_FIELDS_TYPE[];
};

export async function getAllCaseStudies(props?: { limit?: number }) {
  const entries = await fetchGraphQL(
    `query {
      caseStudyCollection(order: sys_publishedAt_DESC ${props?.limit ? `, limit: ${props.limit}` : ''}) {
        total,
        items {
          ${CASE_STUDY_RESULTS_FIELDS}
        }
      }
    }`,
  );

  return entries?.data?.caseStudyCollection;
}

export async function getCaseStudy(slug: string) {
  const entries = await fetchGraphQL(
    `query {
      caseStudyCollection(where: { slug: "${slug}"}) {
        items {
          ${CASE_STUDY_PAGE_FIELDS}
        }
      }
    }`,
  );

  return entries?.data?.caseStudyCollection?.items[0];
}
