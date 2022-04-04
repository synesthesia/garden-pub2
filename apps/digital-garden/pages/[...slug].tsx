/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import { MDXPage, Params } from '@garden2/process-markdown'
import { getPaths, getPageProps } from '../process-markdown-config'
import site from '../site-config'

/* eslint-disable-next-line */

export function Note({ mdx, ...pageNode }: MDXPage) {
  const {
    frontmatter,
    meta: { mentionedIn }
  } = pageNode;
  const {
    author,
    tags,
    title
  }: { author: string; tags: string[]; title: string } = frontmatter;

  return (
    <div className="prose p-8 overflow-y-auto overflow-x-hidden">
    <div>
      <h1>{title}</h1>
    </div>
    <div>
      <MDXRemote {...mdx} />
    </div>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }: Params) {
  const props = await getPageProps(slug);
  return {
    props
  };
}

export async function getStaticPaths() {

  const paths = await getPaths(site.notePath);
  return {
    paths,
    fallback: false
  };
}

export default Note;
