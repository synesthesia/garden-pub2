import { ReactChild } from 'react';
import { NoteColumnsContainer } from '../note-columns-container';
import { NoteContainer } from '../note-container';
import { TopBar } from '../top-bar';
import styles from './layout.module.css';

/* eslint-disable-next-line */
export interface LayoutProps {
  siteTitle: string
  children?: React.ReactNode
}

export function Layout({siteTitle, children}: LayoutProps) {
  return (
    <div className="bg-white, w-full overflow-y-hidden">
      <TopBar title={siteTitle}/>
      <NoteColumnsContainer>
        <NoteContainer>
          { children }
        </NoteContainer>
      </NoteColumnsContainer>
    </div>
  );
}

export default Layout;
