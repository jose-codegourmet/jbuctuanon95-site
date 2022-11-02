import { IMAGE_ASSET_QRY } from '../commonQueries';
import { GQL_LOCALE } from 'src/constants/contentful';

export const CASE_STUDY_PAGE_INFO = `
  slug,
  sys {
    id
  }
`;

export const CASE_STUDY_SEARCHABLE_FIELDS = `
  title,
  ${CASE_STUDY_PAGE_INFO}
`;

export const CASE_STUDY_RESULTS_FIELDS = `
  ${CASE_STUDY_SEARCHABLE_FIELDS}
  excerpt(locale: "${GQL_LOCALE}") {
      json
  },
  banner(locale: "${GQL_LOCALE}") {
    ${IMAGE_ASSET_QRY}
  },
  techStack,
  roles,
  dateCreated,
  client,
  websiteLink
`;

export const CASE_STUDY_PAGE_FIELDS = `
  ${CASE_STUDY_RESULTS_FIELDS}
  overview(locale: "${GQL_LOCALE}") {
      json
  },
  problem(locale: "${GQL_LOCALE}") {
    json
  },
  solution(locale: "${GQL_LOCALE}") {
    json
  },
  samplesOrImagesCollection(locale: "${GQL_LOCALE}") {
    items {
      ${IMAGE_ASSET_QRY}
    }
  },
`;
