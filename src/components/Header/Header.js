'use client';
import React from 'react';
import { Volume2, VolumeX } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './Header.module.css';
import { MuteContext } from '../MuteProvider/MuteProvider';


function Header() {
  const id = React.useId();
  const { isMuted,setIsMuted } = React.useContext(MuteContext)

  // TODO: Global state?
  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper
        className={styles.innerWrapper}
      >
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            // TODO: flip `soundEnabled`
            setIsMuted((prevVal) => {return !prevVal})
          }}
        >
          {!isMuted ? (
            <Volume2 />
          ) : (
            <VolumeX />
          )}
          <VisuallyHidden>
            {!isMuted
              ? 'Disable sound effects'
              : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
