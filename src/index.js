import marked from 'marked';
import { createFilter, makeLegalIdentifier } from 'rollup-pluginutils';

const ext = /\.md$/;

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

export default function md ( options = {} ) {
    const filter = createFilter( options.include, options.exclude );

    return {
        name: 'md',

        transform ( md, id ) {
            if ( !ext.test( id ) ) return null;
            if ( !filter( id ) ) return null;

            const data = marked( md );
            let code = `var data = \`${data}\`;\n`;
            code = code + `export default data;`
            return {
                code: code,
                map: { mappings: '' }
            };
        }
    };
}
