import type { CONTENTFUL_IMAGE_ASSET_TYPE, CONTENTFUL_JSON_TYPE } from 'src/types/contentful';

export interface CASE_STUDY_PAGE_INFO_TYPE {
  slug: string;
  sys: {
    id: number;
  };
}

export interface CASE_STUDY_SEARCHABLE_FIELDS_TYPE extends CASE_STUDY_PAGE_INFO_TYPE {
  title: string;
}

export interface CASE_STUDY_RESULTS_FIELDS_TYPE extends CASE_STUDY_SEARCHABLE_FIELDS_TYPE {
  excerpt: CONTENTFUL_JSON_TYPE;
  banner: CONTENTFUL_IMAGE_ASSET_TYPE;
  techStack: string[];
  roles: string[];
  dateCreated: string;
  client: string;
  websiteLink: string;
}

export interface CASE_STUDY_PAGE_FIELDS_TYPE extends CASE_STUDY_RESULTS_FIELDS_TYPE {
  overview: CONTENTFUL_JSON_TYPE;
  problem: CONTENTFUL_JSON_TYPE;
  solution: CONTENTFUL_JSON_TYPE;
  samplesOrImagesCollection: {
    items: CONTENTFUL_IMAGE_ASSET_TYPE[];
  };
}
