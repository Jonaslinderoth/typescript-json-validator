import Ajv from 'ajv';
import * as TJS from 'typescript-json-schema';
export declare function printTypeCollectionValidator(
  symbols: string[],
  schema: TJS.Definition,
  relativePath: string,
  tsConfig: any,
  options?: Ajv.Options,
): string;
export declare function printSingleTypeValidator(
  typeName: string,
  isNamedExport: boolean,
  schema: TJS.Definition,
  relativePath: string,
  tsConfig: any,
  options?: Ajv.Options,
): string;
export declare function printSchemaOnlyValidator(
  typeName: string,
  schema: TJS.Definition,
): string;
