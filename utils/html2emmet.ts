#!/usr/bin/env bun
import { Command } from 'commander';
import { htmlStringToEmmet, htmlToEmmet } from '../src/html2emmet';
import { readFileSync } from 'fs';
import { parse } from 'node-html-parser';

const program = new Command();

async function fetchUrl(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    throw new Error(`Failed to fetch URL: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function isUrl(str: string): boolean {
  return /^https?:\/\//i.test(str);
}

program
  .name('html2emmet')
  .description('Convert HTML to Emmet abbreviations')
  .version('1.0.0')
  .argument('[html]', 'HTML string, file path, or URL starting with http(s)://')
  .option('-f, --file', 'Treat input as file path')
  .option('-s, --selector <selector>', 'CSS selector to extract specific element')
  .action(async (input, options) => {
    try {
      let html = input;
      
      if (!html) {
        // Read from stdin if no input provided
        process.stdin.setEncoding('utf8');
        html = await new Promise(resolve => {
          let data = '';
          process.stdin.on('data', chunk => data += chunk);
          process.stdin.on('end', () => resolve(data));
        });
      } else if (options.file) {
        html = readFileSync(input, 'utf8');
      } else if (isUrl(input)) {
        html = await fetchUrl(input);
      }

      let result;
      if (options.selector) {
        const root = parse(html, {
          lowerCaseTagName: false
        });
        const element = root.querySelector(options.selector);
        if (!element) {
          throw new Error(`No element found matching selector: ${options.selector}`);
        }
        result = htmlToEmmet(element);
      } else {
        result = htmlStringToEmmet(html);
      }

      console.log(result);
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : error);
      process.exit(1);
    }
  });

program.parse();