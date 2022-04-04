import site  from './site-config'

import { join}  from 'path'
import markdownLinkExtractor from 'markdown-link-extractor'
import { createUtils } from '@garden2/process-markdown'
import  * as remarkDoubleBracketsLinks  from '@synesthesia/remark-double-brackets-link'

export const { getPages, getPaths, getPageProps } = createUtils({
  content: join(site.notePath),
  metaGenerators: {
    /*
    mentions: node =>
      markdownLinkExtractor(node.content).filter((l: string) => l[0] === '/')
      */
  },
  relationGenerators: {
    /*
    mentionedIn: nodes =>
      nodes.map(node => ({
        ...node,
        meta: {
          ...node.meta,
          mentionedIn: nodes.filter(n =>
            n?.meta?.mentions.includes(`/${node.params.slug.join('/')}`)
          )
        }
      }))
      */
  },
  mdxOptions: {
    remarkPlugins : [remarkDoubleBracketsLinks]
  }
});
