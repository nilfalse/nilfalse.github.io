#!/usr/bin/env node

const fsPromises = require('fs').promises;

const { info, success, warning, error } = require('log-symbols');

require('dotenv').config();

async function main(args) {
  if (process.env.ANALYTICS) {
    process.exit(await processFilenames(args));
  } else {
    console.warn(`${info} No ANALYTICS environment variable has been set`);
    console.warn(`${warning} Skipping post-processing`);
  }
}

async function processFilenames(files) {
  const failures = [];

  await Promise.all(
    files.map(async (filename) => {
      try {
        const fileContent = await fsPromises.readFile(filename, 'utf-8');
        const patched = patchHtml(fileContent);
        await fsPromises.writeFile(filename, patched.content, 'utf-8');

        console.log(` ${success} ${patched.method} ${filename}`);
      } catch (err) {
        failures.push([filename, err]);

        console.error(` ${error} ${filename}`);
      }
    })
  );

  for (const [filename, failure] of failures) {
    console.error(filename + ':');
    console.error(failure);
  }

  return failures.length;
}

function patchHtml(html) {
  const snippet = process.env.ANALYTICS;
  const htmlLowerCase = html.toLocaleLowerCase();

  if (htmlLowerCase.indexOf('</head>') >= 0) {
    return {
      method: 'HEAD',
      content: html.replace('</head>', snippet + '\n</head>'),
    };
  } else if (htmlLowerCase.indexOf('</body>') >= 0) {
    return {
      method: 'BODY',
      content: html.replace('</body>', snippet + '\n</body>'),
    };
  } else if (htmlLowerCase.indexOf('</html>') >= 0) {
    return {
      method: 'HTML',
      content: html.replace('</html>', snippet + '\n</html>'),
    };
  } else {
    return {
      method: '_EOF',
      content: html + snippet,
    };
  }
}

if (!require.parent) {
  main(process.argv.slice(2));
}
