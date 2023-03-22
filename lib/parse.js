'use strict';
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };
Object.defineProperty(exports, '__esModule', {value: true});
const path_1 = require('path');
const TJS = __importStar(require('typescript-json-schema'));
function parse(filenames, tsConfig, settings = {}) {
  filenames = filenames.map(f => path_1.resolve(f));
  const program = TJS.getProgramFromFiles(filenames, tsConfig);
  const generator = TJS.buildGenerator(program, {
    rejectDateType: true,
    aliasRef: true,
    required: true,
    topRef: true,
    strictNullChecks: true,
    ...settings,
  });
  if (!generator) {
    throw new Error('Did not expect generator to be null');
  }
  return {
    getAllTypes(includeReffedDefinitions = true, ...fns) {
      const symbols = generator.getMainFileSymbols(
        program,
        fns.length ? fns : filenames,
      );
      const schema = generator.getSchemaForSymbols(
        symbols,
        includeReffedDefinitions,
      );
      return {symbols, schema};
    },
    getType(name) {
      return generator.getSchemaForSymbol(name);
    },
  };
}
exports.default = parse;
//# sourceMappingURL=parse.js.map