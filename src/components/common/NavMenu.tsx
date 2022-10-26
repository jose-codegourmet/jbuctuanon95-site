import Link from 'next/link';
import React from 'react';
import type { FC } from 'react';
import { WEBSITE_NAV } from 'src/constants/project';

export type NavMenuProps = {
  className?: string;
};

const NavMenu: FC<NavMenuProps> = (props) => {
  const { className } = props;

  return (
    <ul className={`nav-menu ${className}`}>
      {[...WEBSITE_NAV].map((m, k) => (
        <li key={`${k}-${m.id}`} className="nav-menu__item">
          <Link href={m.link} passHref>
            <a {...(m.external && { target: '_blank' })}>{m.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
