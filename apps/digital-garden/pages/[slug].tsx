import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

/* eslint-disable-next-line */
export interface NoteProps extends ParsedUrlQuery  {
  slug: string
}

export function Note(props: NoteProps) {
  return (
    <div>
      <h1>Welcome to {props.slug}</h1>
    </div>
  );
}


export const getStaticProps: GetStaticProps<NoteProps> = async ({params} : {params: NoteProps}) => {
  return {
    props: {
      slug: params.slug
    }
  }
}

export const getStaticPaths: GetStaticPaths<NoteProps> = async () => {
  return {
    paths: [
      {
        params: {
          slug: 'page1'
        }
      }
    ],
    fallback: false

  }
}

export default Note;
