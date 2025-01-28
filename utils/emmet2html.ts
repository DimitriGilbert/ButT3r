#!bun

import { parseEmmet } from '../src/remmet';
import { program } from 'commander';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import chalk from 'chalk';

// Setup Commander
program
  .name('emmet-cli')
  .description('Convert Emmet syntax to JSX/HTML')
  .version('1.0.0');

program
  .command('parse')
  .description('Parse Emmet syntax and output JSX/HTML')
  .argument('<emmet>', 'Emmet syntax to parse')
  .option('-o, --output <file>', 'Output file (optional)')
  .option('--jsx', 'Output JSX format (default is HTML)', false)
  .option('-p, --pretty', 'Pretty print output', false)
  .action(async (emmet, options) => {
    try {
      let result = parseEmmet(emmet);

      // Pretty print if requested
      if (options.pretty) {
        result = prettyPrint(result);
      }

      // If JSX mode, wrap in component
      if (options.jsx) {
        result = wrapInReactComponent(result);
      }

      if (options.output) {
        const dir = getDirectoryFromPath(options.output);
        if (!existsSync(dir)) {
          mkdirSync(dir, { recursive: true });
        }
        writeFileSync(options.output, result);
        console.log(chalk.green(`✓ Output written to ${options.output}`));
      } else {
        console.log(result);
      }
    } catch (error: any) {
      console.error(chalk.red('Error:'), error.message);
      console.error(error);
      process.exit(1);
    }
  });

program
  .command('watch')
  .description('Watch a file for changes and convert Emmet syntax')
  .argument('<file>', 'File to watch')
  .option('-o, --output <file>', 'Output file')
  .option('--jsx', 'Output JSX format (default is HTML)', false)
  .option('-p, --pretty', 'Pretty print output', false)
  .action(async (file, options) => {
    try {
      const chokidar = await import('chokidar');
      const { readFileSync } = await import('fs');

      console.log(chalk.blue(`Watching ${file} for changes...`));

      chokidar.watch(file).on('change', (path) => {
        try {
          const content = readFileSync(path, 'utf8');
          let result = parseEmmet(content);

          if (options.pretty) {
            result = prettyPrint(result);
          }

          if (options.jsx) {
            result = wrapInReactComponent(result);
          }

          if (options.output) {
            writeFileSync(options.output, result);
            console.log(chalk.green(`✓ Updated ${options.output}`));
          } else {
            console.clear();
            console.log(result);
          }
        } catch (error: any) {
          console.error(chalk.red('Error:'), error.message);
        }
      });
    } catch (error: any) {
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  });

// Helper function to wrap output in React component
function wrapInReactComponent(jsx: string): string {
  return `import React from 'react';\n\nexport default function EmmetComponent() {\n  return (\n    ${jsx}\n  );\n}\n`;
}

// Helper function to pretty print HTML/JSX
function prettyPrint(code: string): string {
  let indent = 0;
  let result = '';
  let inTag = false;
  
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    
    if (char === '<' && code[i + 1] !== '/') {
      result += '\n' + '  '.repeat(indent) + char;
      indent++;
      inTag = true;
    } else if (char === '<' && code[i + 1] === '/') {
      indent--;
      result += '\n' + '  '.repeat(indent) + char;
      inTag = true;
    } else if (char === '>') {
      result += char;
      inTag = false;
    } else if (!inTag && char === ' ' && code[i - 1] === '>') {
      continue;
    } else {
      result += char;
    }
  }
  
  return result.trim();
}

// Helper function to get directory path from file path
function getDirectoryFromPath(filePath: string): string {
  return join(process.cwd(), filePath.split('/').slice(0, -1).join('/'));
}

// Parse command line arguments
program.parse();