import Ajv = require('ajv');
import stringify = require('json-stable-stringify');
import * as TJS from 'typescript-json-schema';

export type GENERATED_COMMENT = `// generated by typescript-json-validator`;

export const IMPORT_INSPECT = `import {inspect} from 'util';`;
export const IMPORT_AJV = `import Ajv = require('ajv');`;
export const IMPORT_KOA_CONTEXT = `import {Context} from 'koa';`;

export const importNamedTypes = (names: string[], relativePath: string) =>
  `import {${names.join(', ')}} from '${relativePath}';`;
export const importDefaultType = (name: string, relativePath: string) =>
  `import ${name} from '${relativePath}';`;
export const importType = (
  name: string,
  relativePath: string,
  {isNamedExport}: {isNamedExport: boolean},
) =>
  isNamedExport
    ? importNamedTypes([name], relativePath)
    : importDefaultType(name, relativePath);

export const declareAJV = (options: Ajv.Options) =>
  `export const ajv = new Ajv(${stringify({
    coerceTypes: false,
    allErrors: true,
    ...options,
  })});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
`;

export const exportNamed = (names: string[]) => `export {${names.join(', ')}};`;

export const declareSchema = (name: string, schema: TJS.Definition) =>
  `export const ${name} = ${stringify(schema, {space: 2})};`;

export const addSchema = (name: string) => `ajv.addSchema(${name}, '${name}')`;

export const DECLARE_VALIDATE_TYPE = `export type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<Ajv.ValidateFunction, 'errors'>`;
export const validateType = (typeName: string) =>
  `ValidateFunction<${typeName}>`;

export const compileSchema = (schemaName: string, typeName: string) =>
  `ajv.compile(${schemaName}) as ${validateType(typeName)}`;

export const validateFn = (
  typeName: string,
  schemaName: string,
) => `const rawValidate${typeName} = ${compileSchema(schemaName, typeName)};
export default function validate(value: unknown): ${typeName} {
  if (rawValidate${typeName}(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(rawValidate${typeName}.errors, {dataVar: '${typeName}'}) +
      '\\n\\n' +
      inspect(value),
    );
  }
}`;

function typeOf(typeName: string, property: string, schema: TJS.Definition) {
  if (schema.definitions && schema.definitions[typeName]) {
    const typeSchema: TJS.Definition = schema.definitions[typeName];
    if (
      typeSchema.properties &&
      Object.keys(typeSchema.properties).includes(property)
    ) {
      return `${typeName}['${property}']`;
    }
  }
  return 'unknown';
}

export const validateKoaRequestOverload = (
  typeName: string,
  schema: TJS.Definition,
) =>
  `export function validateKoaRequest(typeName: '${typeName}'): (ctx: Context) => {
  params: ${typeOf(typeName, 'params', schema)},
  query: ${typeOf(typeName, 'query', schema)},
  body: ${typeOf(typeName, 'body', schema)},
};`;

export const VALIDATE_KOA_REQUEST_FALLBACK = `export function validateKoaRequest(typeName: string): (ctx: Context) => {
  params: unknown,
  query: unknown,
  body: unknown,
};`;

export const VALIDATE_KOA_REQUEST_IMPLEMENTATION = `export function validateKoaRequest(typeName: string): (ctx: Context) => {
  params: any,
  query: any,
  body: any,
} {
  const params = ajv.getSchema(\`Schema#/definitions/\${typeName}/properties/params\`);
  const query = ajv.getSchema(\`Schema#/definitions/\${typeName}/properties/query\`);
  const body = ajv.getSchema(\`Schema#/definitions/\${typeName}/properties/body\`);
  const validateProperty = (
    prop: string,
    validator: any,
    ctx: Context,
  ): any => {
    const data = prop === 'body' ? ctx.request && (ctx.request as any).body : (ctx as any)[prop];
    if (validator) {
      const valid = validator(data);
  
      if (!valid) {
        ctx.throw(
          400,
          'Invalid request: ' + ajv.errorsText(validator.errors, {dataVar: prop}) + '\\n\\n' + inspect({params: ctx.params, query: ctx.query, body: ctx.body}),
        );
      }
    }
    return data;
  };
  return (ctx) => {
    return {
      params: validateProperty('params', params, ctx),
      query: validateProperty('query', query, ctx),
      body: validateProperty('body', body, ctx),
    }
  };
}`;

export const validateOverload = (typeName: string) =>
  `export function validate(typeName: '${typeName}'): (value: unknown) => ${typeName};`;
export const VALIDATE_IMPLEMENTATION = `export function validate(typeName: string): (value: unknown) => any {
  const validator: any = ajv.getSchema(\`Schema#/definitions/\${typeName}\`);
  return (value: unknown): any => {
    if (!validator) {
      throw new Error(\`No validator defined for Schema#/definitions/\${typeName}\`)
    }
  
    const valid = validator(value);

    if (!valid) {
      throw new Error(
        'Invalid ' + typeName + ': ' + ajv.errorsText(validator.errors, {dataVar: typeName}),
      );
    }

    return value as any;
  };
}`;