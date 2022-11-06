import { fetchGraphQL } from '../api';
import { CASE_STUDY_PAGE_FIELDS, CASE_STUDY_PAGE_INFO, CASE_STUDY_RESULTS_FIELDS } from './queries';
import type { CASE_STUDY_PAGE_FIELDS_TYPE, CASE_STUDY_RESULTS_FIELDS_TYPE } from './types';

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

export type getCaseStudyReturnType = CASE_STUDY_PAGE_FIELDS_TYPE;
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

export type getNextCaseStudyReturnType = {
  total: number;
  items: CASE_STUDY_RESULTS_FIELDS_TYPE[];
};

export async function getNextCaseStudy(props: { limit?: number; exceptSlug: string }) {
  const { limit = 2, exceptSlug } = props;
  const entries = await fetchGraphQL(
    `query {
      caseStudyCollection(
        order: sys_publishedAt_DESC,
        where: { slug_not: "${exceptSlug}"},
        limit: ${limit}
      ) {
        total,
        items {
          ${CASE_STUDY_RESULTS_FIELDS}
        }
      }
    }`,
  );

  return entries?.data?.caseStudyCollection;
}
