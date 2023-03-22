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
const t = __importStar(require('./template'));
function isKoaType(typeDefinition) {
  return (
    typeDefinition &&
    typeDefinition.properties &&
    KoaProperties.some(property => property in typeDefinition.properties) &&
    Object.keys(typeDefinition.properties).every(property =>
      KoaProperties.includes(property),
    )
  );
}
const KoaProperties = ['params', 'query', 'body'];
function printTypeCollectionValidator(
  symbols,
  schema,
  relativePath,
  tsConfig,
  options = {},
) {
  const koaTypes = symbols.filter(typeName => {
    return isKoaType(schema.definitions && schema.definitions[typeName]);
  });
  return [
    t.TSLINT_DISABLE,
    t.GENERATED_COMMENT,
    t.IMPORT_AJV(tsConfig),
    t.importNamedTypes(symbols, relativePath),
    ...(koaTypes.length ? [t.IMPORT_INSPECT, t.DECLARE_KOA_CONTEXT] : []),
    t.declareAJV(options),
    t.exportNamed(symbols),
    t.declareSchema('Schema', schema),
    t.addSchema('Schema'),
    ...koaTypes.map(s => t.validateKoaRequestOverload(s, schema)),
    ...(koaTypes.length
      ? [t.VALIDATE_KOA_REQUEST_FALLBACK, t.VALIDATE_KOA_REQUEST_IMPLEMENTATION]
      : []),
    ...symbols.map(s => t.validateOverload(s)),
    t.VALIDATE_IMPLEMENTATION,
  ].join('\n');
}
exports.printTypeCollectionValidator = printTypeCollectionValidator;
function printSingleTypeValidator(
  typeName,
  isNamedExport,
  schema,
  relativePath,
  tsConfig,
  options = {},
) {
  return [
    t.TSLINT_DISABLE,
    t.GENERATED_COMMENT,
    t.IMPORT_INSPECT,
    t.IMPORT_AJV(tsConfig),
    t.importType(typeName, relativePath, {isNamedExport}),
    t.declareAJV(options),
    t.exportNamed([typeName]),
    t.declareSchema(typeName + 'Schema', schema),
    // TODO: koa implementation
    t.DECLARE_VALIDATE_TYPE,
    t.validateFn(typeName, typeName + 'Schema'),
  ].join('\n');
}
exports.printSingleTypeValidator = printSingleTypeValidator;
function printSchemaOnlyValidator(typeName, schema) {
  return [t.declareSchema(typeName + 'Schema', schema)].join('\n');
}
exports.printSchemaOnlyValidator = printSchemaOnlyValidator;
//# sourceMappingURL=printValidator.js.map
