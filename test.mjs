import simpleGit from 'simple-git'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const git = simpleGit(dirname(fileURLToPath(import.meta.url)))

export function getStatusFromShortCode(code) {
    switch (code.toUpperCase().trim()) {
      case "":
        return "";
      case "M":
        return "M";
      case "A":
        return "A";
      case "D":
        return "D";
      case "R":
        return "R";
      case "C":
        return "C";
      case "U":
        return "U";
      default:
        // "?" and just fallback to this...
        return "?";
    }
  }

export function parseGitFilepath(filepath) {
    if (filepath[0] === '"') {
      try {
        return JSON.parse(filepath);
      } catch (err) {
        // do nothing...
      }
    }
    return filepath;
  }


export function parseDiffStatusResult(
    output,
  ) {
    const lines = output.trim().split("\n");
    const mappedResult= [];

    lines.forEach((line) => {
      const changes = line.split('|')
      console.log(changes[0])
    })
     
    
    return mappedResult;
  }

const content = await git.raw(['diff','--compact-summary', 'origin/main', 'HEAD'])
  // const content = await git.diffSummary([`--stat`, `origin/main`,  'HEAD'])

// const content = readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'content.txt'))
const result = parseDiffStatusResult(content)
console.log(result)