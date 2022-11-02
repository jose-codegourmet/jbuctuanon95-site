import type { Document } from '@contentful/rich-text-types';

export type CONTENTFUL_JSON_TYPE = {
  json: Document;
};

export type CONTENTFUL_IMAGE_ASSET_TYPE = {
  title: string;
  description: string;
  url: string;
};
