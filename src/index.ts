import {writeFileSync} from 'fs';
import {basename} from 'path';
import {parseArgs} from './parseArgs';
import parse from './parse';
import {
  printSingleTypeValidator,
  printTypeCollectionValidator,
  printSchemaOnlyValidator,
} from './printValidator';
import prettierFile from './prettierFile';
import loadTsConfig from './loadTsConfig';
import normalizeSchema from './normalizeSchema';

export {
  parse,
  parseArgs,
  printSingleTypeValidator,
  printTypeCollectionValidator,
  printSchemaOnlyValidator,
};

export default function run(args?: string[]) {
  const {files, options} = parseArgs(args);
  const tsConfig = loadTsConfig();
  const parsed = parse(
    files.map(f => f.fileName),
    tsConfig,
    options.schema,
  );

  files.forEach(({fileName, typeName}) => {
    let outputFileName = fileName.replace(/\.tsx?$/, '.validator.ts');
    let validator: string;
    if (typeName) {
      if (options.exportSchemaOnly) {
        const schema = parsed.getType(typeName);
        outputFileName = fileName.replace(
          /\.validator\.ts?$/,
          '-' + typeName + '.validator.js',
        );
        validator = printSchemaOnlyValidator(typeName, normalizeSchema(schema));
      } else {
        const schema = parsed.getType(typeName);
        validator = printSingleTypeValidator(
          typeName,
          options.useNamedExport,
          normalizeSchema(schema),
          `./${basename(fileName, /\.ts$/.test(fileName) ? '.ts' : '.tsx')}`,
          tsConfig,
          options.ajv,
        );
      }
    } else {
      const {symbols, schema} = parsed.getAllTypes();
      validator = printTypeCollectionValidator(
        symbols,
        normalizeSchema(schema),
        `./${basename(fileName, /\.ts$/.test(fileName) ? '.ts' : '.tsx')}`,
        tsConfig,
        options.ajv,
      );
    }
    writeFileSync(outputFileName, validator);
    prettierFile(outputFileName);
  });
}
