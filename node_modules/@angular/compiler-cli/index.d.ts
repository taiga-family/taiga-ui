/// <amd-module name="@angular/compiler-cli" />
export { AotCompilerHost, AotCompilerHost as StaticReflectorHost, StaticReflector, StaticSymbol } from '@angular/compiler';
export { VERSION } from './src/version';
export * from './src/metadata';
export * from './src/transformers/api';
export * from './src/transformers/entry_points';
export * from './src/perform_compile';
export * from './src/tooling';
export { CompilerOptions as AngularCompilerOptions } from './src/transformers/api';
export { ngToTsDiagnostic } from './src/transformers/util';
export { NgTscPlugin } from './src/ngtsc/tsc_plugin';
