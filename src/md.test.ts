import { rollup } from 'rollup';
import { md } from './md';
import so from 'source-map-support';

so.install();

process.chdir(__dirname);

describe('rollup-plugin-md', () => {
  it('converts md', async () => {
    const bundle = await rollup({
      input: 'samples/main.js',
      plugins: [
        md({
          marked: {
            gfm: true,
            breaks: false,
            pedantic: false,
            smartLists: true,
            smartypants: false,
          },
        }),
      ],
    });

    const result = await bundle.generate({
      format: 'es',
    });

    expect(result.output[0].code)
      .toContain(`var md = "<h2 id=\\"rollup-plugin-md\\">rollup-plugin-md</h2>\\n<p>a simple plugin</p>\\n";

console.log('md: ', md);`);
  });
});
