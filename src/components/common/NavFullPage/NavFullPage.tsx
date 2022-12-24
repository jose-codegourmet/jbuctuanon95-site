import NavFullPageContainer from './NavFullPageContainer';
import NavFullPageMenu from './NavFullPageMenu';
import NavFullSocials from './NavFullPageSocials';
import React from 'react';
import type { FC } from 'react';

export type NavMenuProps = {
  show: boolean;
};

const NavFullPage: FC<NavMenuProps> = (props) => {
  const { show } = props;

  return (
    <NavFullPageContainer show={show}>
      <div className="flex w-full flex-wrap">
        <div className="nav-full-page__menu">
          <NavFullPageMenu show={show} />
        </div>
        <div className="nav-full-page__socials">
          <NavFullSocials show={show} />
        </div>
      </div>
    </NavFullPageContainer>
  );
};

export default NavFullPage;
