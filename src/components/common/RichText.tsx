import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';
import { BLOCKS } from '@contentful/rich-text-types';
import type { ReactNode } from 'react';
import React from 'react';
import type { FC } from 'react';

export interface RichTextProps {
  content: Document;
}

const RichText: FC<RichTextProps> = (props) => {
  const { content } = props;

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (_: unknown, children: ReactNode) => <h1 className="text-lg">{children}</h1>,
      [BLOCKS.PARAGRAPH]: (_: unknown, children: ReactNode) => <p className="text-base">{children}</p>,
    },
  };

  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;
