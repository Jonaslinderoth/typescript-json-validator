export default function loadTsConfig(
  cwd?: string,
): {
  [k: string]: any;
  charset?: string | undefined;
  composite?: boolean | undefined;
  declaration?: boolean | undefined;
  declarationDir?: string | undefined;
  diagnostics?: boolean | undefined;
  emitBOM?: boolean | undefined;
  emitDeclarationOnly?: boolean | undefined;
  incremental?: boolean | undefined;
  tsBuildInfoFile?: string | undefined;
  inlineSourceMap?: boolean | undefined;
  inlineSources?: boolean | undefined;
  jsx?: 'preserve' | 'react' | 'react-native' | undefined;
  reactNamespace?: string | undefined;
  listFiles?: boolean | undefined;
  mapRoot?: string | undefined;
  module?:
    | 'CommonJS'
    | 'AMD'
    | 'System'
    | 'UMD'
    | 'ES6'
    | 'ES2015'
    | 'ES2020'
    | 'ESNext'
    | 'None'
    | {
        [k: string]: any;
      }
    | undefined;
  newLine?:
    | 'crlf'
    | 'lf'
    | {
        [k: string]: any;
      }
    | undefined;
  noEmit?: boolean | undefined;
  noEmitHelpers?: boolean | undefined;
  noEmitOnError?: boolean | undefined;
  noImplicitAny?: boolean | undefined;
  noImplicitThis?: boolean | undefined;
  noUnusedLocals?: boolean | undefined;
  noUnusedParameters?: boolean | undefined;
  noLib?: boolean | undefined;
  noResolve?: boolean | undefined;
  noStrictGenericChecks?: boolean | undefined;
  skipDefaultLibCheck?: boolean | undefined;
  skipLibCheck?: boolean | undefined;
  outFile?: string | undefined;
  outDir?: string | undefined;
  preserveConstEnums?: boolean | undefined;
  preserveSymlinks?: boolean | undefined;
  preserveWatchOutput?: boolean | undefined;
  pretty?: boolean | undefined;
  removeComments?: boolean | undefined;
  rootDir?: string | undefined;
  isolatedModules?: boolean | undefined;
  sourceMap?: boolean | undefined;
  sourceRoot?: string | undefined;
  suppressExcessPropertyErrors?: boolean | undefined;
  suppressImplicitAnyIndexErrors?: boolean | undefined;
  stripInternal?: boolean | undefined;
  target?:
    | 'ES6'
    | 'ES2015'
    | 'ES2020'
    | 'ESNext'
    | 'ES3'
    | 'ES5'
    | 'ES2016'
    | 'ES2017'
    | 'ES2018'
    | 'ES2019'
    | {
        [k: string]: any;
      }
    | undefined;
  watch?: boolean | undefined;
  experimentalDecorators?: boolean | undefined;
  emitDecoratorMetadata?: boolean | undefined;
  moduleResolution?:
    | 'Classic'
    | 'Node'
    | {
        [k: string]: any;
      }
    | undefined;
  allowUnusedLabels?: boolean | undefined;
  noImplicitReturns?: boolean | undefined;
  noFallthroughCasesInSwitch?: boolean | undefined;
  allowUnreachableCode?: boolean | undefined;
  forceConsistentCasingInFileNames?: boolean | undefined;
  baseUrl?: string | undefined;
  paths?:
    | {
        [k: string]: string[];
      }
    | undefined;
  plugins?:
    | {
        [k: string]: any;
        name?: string | undefined;
      }[]
    | undefined;
  rootDirs?: string[] | undefined;
  typeRoots?: string[] | undefined;
  types?: string[] | undefined;
  traceResolution?: boolean | undefined;
  allowJs?: boolean | undefined;
  noErrorTruncation?: boolean | undefined;
  allowSyntheticDefaultImports?: boolean | undefined;
  noImplicitUseStrict?: boolean | undefined;
  listEmittedFiles?: boolean | undefined;
  disableSizeLimit?: boolean | undefined;
  lib?:
    | (
        | 'ES6'
        | 'ES2015'
        | 'ES2020'
        | 'ESNext'
        | 'ES5'
        | 'ES2016'
        | 'ES2017'
        | 'ES2018'
        | 'ES2019'
        | 'ES7'
        | 'ES2015.Collection'
        | 'ES2015.Core'
        | 'ES2015.Generator'
        | 'ES2015.Iterable'
        | 'ES2015.Promise'
        | 'ES2015.Proxy'
        | 'ES2015.Reflect'
        | 'ES2015.Symbol.WellKnown'
        | 'ES2015.Symbol'
        | 'ES2016.Array.Include'
        | 'ES2017.Intl'
        | 'ES2017.Object'
        | 'ES2017.SharedMemory'
        | 'ES2017.String'
        | 'ES2017.TypedArrays'
        | 'ES2018.AsyncIterable'
        | 'ES2018.Intl'
        | 'ES2018.Promise'
        | 'ES2018.Regexp'
        | 'ES2019.Array'
        | 'ES2019.Object'
        | 'ES2019.String'
        | 'ES2019.Symbol'
        | 'ES2020.BigInt'
        | 'ES2020.Promise'
        | 'ES2020.String'
        | 'ES2020.Symbol.WellKnown'
        | 'ESNext.Array'
        | 'ESNext.AsyncIterable'
        | 'ESNext.BigInt'
        | 'ESNext.Intl'
        | 'ESNext.Symbol'
        | 'DOM'
        | 'DOM.Iterable'
        | 'ScriptHost'
        | 'WebWorker'
        | 'WebWorker.ImportScripts'
        | {
            [k: string]: any;
          }
        | {
            [k: string]: any;
          }
        | {
            [k: string]: any;
          }
        | {
            [k: string]: any;
          }
        | {
            [k: string]: any;
          }
        | {
            [k: string]: any;
          }
        | {
            [k: string]: any;
          }
        | {
            [k: string]: any;
          }
        | {
            [k: string]: any;
          }
        | {
            [k: string]: any;
          }
        | {
            [k: string]: any;
          }
      )[]
    | undefined;
  strictNullChecks?: boolean | undefined;
  maxNodeModuleJsDepth?: number | undefined;
  importHelpers?: boolean | undefined;
  importsNotUsedAsValues?: 'preserve' | 'remove' | 'error' | undefined;
  jsxFactory?: string | undefined;
  alwaysStrict?: boolean | undefined;
  strict?: boolean | undefined;
  strictBindCallApply?: boolean | undefined;
  downlevelIteration?: boolean | undefined;
  checkJs?: boolean | undefined;
  strictFunctionTypes?: boolean | undefined;
  strictPropertyInitialization?: boolean | undefined;
  esModuleInterop?: boolean | undefined;
  allowUmdGlobalAccess?: boolean | undefined;
  keyofStringsOnly?: boolean | undefined;
  useDefineForClassFields?: boolean | undefined;
  declarationMap?: boolean | undefined;
  resolveJsonModule?: boolean | undefined;
  assumeChangesOnlyAffectDirectDependencies?: boolean | undefined;
};
