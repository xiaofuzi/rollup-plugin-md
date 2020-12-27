import type { PluginImpl } from 'rollup';
import type { MarkedOptions } from 'marked';
import marked from 'marked';
import { createFilter } from '@rollup/pluginutils';

const ext = /\.md$/;

export type MdOptions = { marked?: MarkedOptions } & {
  include?: string | RegExp | (string | RegExp)[];
  exclude?: string | RegExp | (string | RegExp)[];
};

export const md: PluginImpl<MdOptions> = (options = {}) => {
  const filter = createFilter(options.include || ['**/*.md'], options.exclude);
  if (options.marked) {
    marked.setOptions(options.marked);
  }
  return {
    name: 'md',

    transform(md, id) {
      if (!ext.test(id)) {
        return null;
      }

      if (!filter(id)) {
        return null;
      }

      const data = marked(md);
      return {
        code: `export default ${JSON.stringify(data.toString())};`,
        map: { mappings: '' },
      };
    },
  };
};
