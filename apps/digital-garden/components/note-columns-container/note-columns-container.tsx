import styles from './note-columns-container.module.css';

/* eslint-disable-next-line */
export interface NoteColumnsContainerProps {
  children?: React.ReactNode
}

export function NoteColumnsContainer({children}: NoteColumnsContainerProps) {
  return (
    <div className="overflow-x-auto overflow-y-hidden">
    <div className="w-192">
      {children}
    </div>
    </div>
  );
}

export default NoteColumnsContainer;
