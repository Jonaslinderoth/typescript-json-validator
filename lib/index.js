'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const fs_1 = require('fs');
const path_1 = require('path');
const parseArgs_1 = require('./parseArgs');
exports.parseArgs = parseArgs_1.parseArgs;
const parse_1 = __importDefault(require('./parse'));
exports.parse = parse_1.default;
const printValidator_1 = require('./printValidator');
exports.printSingleTypeValidator = printValidator_1.printSingleTypeValidator;
exports.printTypeCollectionValidator =
  printValidator_1.printTypeCollectionValidator;
exports.printSchemaOnlyValidator = printValidator_1.printSchemaOnlyValidator;
const prettierFile_1 = __importDefault(require('./prettierFile'));
const loadTsConfig_1 = __importDefault(require('./loadTsConfig'));
const normalizeSchema_1 = __importDefault(require('./normalizeSchema'));
function run(args) {
  const {files, options} = parseArgs_1.parseArgs(args);
  const tsConfig = loadTsConfig_1.default();
  const parsed = parse_1.default(
    files.map(f => f.fileName),
    tsConfig,
    options.schema,
  );
  files.forEach(({fileName, typeName}) => {
    let outputFileName = fileName.replace(/\.tsx?$/, '.validator.ts');
    let validator;
    if (typeName) {
      if (options.exportSchemaOnly) {
        const schema = parsed.getType(typeName);
        outputFileName = outputFileName.replace(/\.ts?$/, '.js');
        validator = printValidator_1.printSchemaOnlyValidator(
          typeName,
          normalizeSchema_1.default(schema),
        );
      } else {
        const schema = parsed.getType(typeName);
        validator = printValidator_1.printSingleTypeValidator(
          typeName,
          options.useNamedExport,
          normalizeSchema_1.default(schema),
          `./${path_1.basename(
            fileName,
            /\.ts$/.test(fileName) ? '.ts' : '.tsx',
          )}`,
          tsConfig,
          options.ajv,
        );
      }
    } else {
      const {symbols, schema} = parsed.getAllTypes();
      validator = printValidator_1.printTypeCollectionValidator(
        symbols,
        normalizeSchema_1.default(schema),
        `./${path_1.basename(
          fileName,
          /\.ts$/.test(fileName) ? '.ts' : '.tsx',
        )}`,
        tsConfig,
        options.ajv,
      );
    }
    fs_1.writeFileSync(outputFileName, validator);
    prettierFile_1.default(outputFileName);
  });
}
exports.default = run;
//# sourceMappingURL=index.js.map
