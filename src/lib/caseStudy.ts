import { fetchGraphQL } from './api';
import { GQL_LOCALE } from 'src/constants/contentful';
import type { CONTENTFUL_BANNER_TYPE, CONTENTFUL_JSON_TYPE } from 'src/types/contentful';

export interface CASE_STUDY_PAGE_INFO_TYPE {
  slug: string;
  sys: {
    id: number;
  };
}
export const CASE_STUDY_PAGE_INFO = `
  slug,
  sys {
    id
  }
`;

export interface CASE_STUDY_SEARCHABLE_FIELDS_TYPE extends CASE_STUDY_PAGE_INFO_TYPE {
  title: string;
}
export const CASE_STUDY_SEARCHABLE_FIELDS = `
  title,
  ${CASE_STUDY_PAGE_INFO}
`;

export interface CASE_STUDY_PAGE_FIELDS_TYPE extends CASE_STUDY_SEARCHABLE_FIELDS_TYPE {
  excerpt: CONTENTFUL_JSON_TYPE;
  overview: CONTENTFUL_JSON_TYPE;
  problem: CONTENTFUL_JSON_TYPE;
}

export const CASE_STUDY_PAGE_FIELDS = `
  ${CASE_STUDY_SEARCHABLE_FIELDS}
  excerpt(locale: "${GQL_LOCALE}") {
      json
  },
  overview(locale: "${GQL_LOCALE}") {
      json
  },
  problem(locale: "${GQL_LOCALE}") {
    json
  }
`;

export interface CASE_STUDY_RESULTS_FIELDS_TYPE extends CASE_STUDY_SEARCHABLE_FIELDS_TYPE {
  excerpt: CONTENTFUL_JSON_TYPE;
  banner: CONTENTFUL_BANNER_TYPE;
}

export const CASE_STUDY_RESULTS_FIELDS = `
  ${CASE_STUDY_SEARCHABLE_FIELDS}
  excerpt(locale: "${GQL_LOCALE}") {
      json
  },
  banner(locale: "${GQL_LOCALE}") {
    url
  }
`;

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

  // console.log('entries == ', entries);

  return entries?.data?.caseStudyCollection?.items;
}

export type getAllCaseStudiesReturnType = {
  total: number;
  items: CASE_STUDY_RESULTS_FIELDS_TYPE[];
};

export async function getAllCaseStudies() {
  const entries = await fetchGraphQL(
    `query {
      caseStudyCollection(order: sys_publishedAt_DESC) {
        total,
        items {
          ${CASE_STUDY_RESULTS_FIELDS}
        }
      }
    }`,
  );

  // console.log('entries == ', entries);

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
