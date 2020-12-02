import { json } from '@angular-devkit/core';
import { Schema as RealTslintBuilderOptions } from './schema';
declare type TslintBuilderOptions = RealTslintBuilderOptions & json.JsonObject;
declare const _default: import("@angular-devkit/architect/src/internal").Builder<TslintBuilderOptions>;
export default _default;
