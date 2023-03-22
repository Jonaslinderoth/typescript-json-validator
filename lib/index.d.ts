import {parseArgs} from './parseArgs';
import parse from './parse';
import {
  printSingleTypeValidator,
  printTypeCollectionValidator,
  printSchemaOnlyValidator,
} from './printValidator';
export {
  parse,
  parseArgs,
  printSingleTypeValidator,
  printTypeCollectionValidator,
  printSchemaOnlyValidator,
};
export default function run(args?: string[]): void;
