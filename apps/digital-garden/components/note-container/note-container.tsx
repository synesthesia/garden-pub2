import styles from './note-container.module.css';

/* eslint-disable-next-line */
export interface NoteContainerProps {
  children?: React.ReactNode
}

export function NoteContainer({children}: NoteContainerProps) {
  return (
    <div className="left-0 right-[-585px] max-w-[600px] overflow-y-hidden   ">
      {children}
    </div>
  );
}

export default NoteContainer;
