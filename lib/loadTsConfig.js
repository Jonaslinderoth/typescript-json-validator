'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const tsconfig_loader_1 = __importDefault(require('tsconfig-loader'));
function loadTsConfig(cwd = process.cwd()) {
  const result = tsconfig_loader_1.default({cwd});
  const compilerOptions =
    (result === null || result === void 0
      ? void 0
      : result.tsConfig.compilerOptions) || {};
  if (
    compilerOptions.experimentalDecorators === false &&
    compilerOptions.emitDecoratorMetadata === undefined
  ) {
    // typescript-json-schema sets emitDecoratorMetadata by default
    // we need to disable it if experimentalDecorators support is off
    compilerOptions.emitDecoratorMetadata = false;
  }
  if (compilerOptions.composite) {
    // the composite setting adds a few constraints that cause us all manner of problems
    compilerOptions.composite = false;
  }
  compilerOptions.incremental = false;
  // since composite and incremental are false, Typescript will not accept tsBuildInfoFile
  // https://github.com/microsoft/TypeScript/blob/dcb763f62435ebb015e7fa405eb067de3254f217/src/compiler/program.ts#L2847
  delete compilerOptions.tsBuildInfoFile;
  return compilerOptions;
}
exports.default = loadTsConfig;
//# sourceMappingURL=loadTsConfig.js.map
