import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';

export type PillsProps = {
  items: {
    label: string;
    url?: string;
    onClick?: () => void;
  }[];
};

const Pills: FC<PillsProps> = ({ items }) => {
  return (
    <ul className="pills-collection">
      {items.map((itemObj, k) => {
        return (
          <li
            key={k}
            className="pills-collection__item letter uppercase tracking-wide"
            {...(itemObj.onClick && {
              onClick: itemObj.onClick,
            })}
          >
            {itemObj.url ? (
              <Link passHref href={itemObj.url}>
                <a>{itemObj.label}</a>
              </Link>
            ) : (
              itemObj.label
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Pills;
