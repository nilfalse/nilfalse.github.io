import prettier from 'prettier';
import { expect, it } from 'vitest';

import pkg from './package.json' with { type: 'json' };

const format = (source: string) =>
  prettier.format(source, { parser: 'typescript', ...pkg.prettier });

it('should sort imports', async () => {
  const source = [
    "import z from '~/z.css';",
    "import y from '~/y.ts';",
    "import type { Route } from './+types/root.ts';",
    "import { a } from './a.ts';",
    "import { isRouteErrorResponse } from 'react-router';",
    "import c from './c.css';",
  ].join('\n');

  const expected = [
    "import { isRouteErrorResponse } from 'react-router';",
    '',
    "import y from '~/y.ts';",
    '',
    "import { a } from './a.ts';",
    '',
    "import type { Route } from './+types/root.ts';",
    '',
    "import c from './c.css';",
    "import z from '~/z.css';",
  ].join('\n');

  expect(await format(source)).toBe(`${expected}\n`);
});
