import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';
import React from 'react';
import type { FC } from 'react';

export interface RichTextProps {
  content: Document;
}

const RichText: FC<RichTextProps> = (props) => {
  const { content } = props;

  return <>{documentToReactComponents(content)}</>;
};

export default RichText;
