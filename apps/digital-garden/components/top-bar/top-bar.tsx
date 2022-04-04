import styles from './top-bar.module.css';

/* eslint-disable-next-line */
export interface TopBarProps {
  title: string,
  children?: React.ReactNode

}

export function TopBar({title } :  TopBarProps) {
  return (
    <div className="w-full border-y border-solid h-14 px-8 py-3">
      <h3 className="prose">{title}</h3>
      <div className="flex">

      </div>
    </div>
  );
}

export default TopBar;
