import { ParsedConfiguration } from '@angular/compiler-cli';
import { InjectionToken, Provider } from 'injection-js';
import { Transform } from '../../graph/transform';
import { TransformProvider } from '../../graph/transform.di';
export declare const provideTsConfig: (values?: string | ParsedConfiguration) => Provider;
export declare const DEFAULT_TS_CONFIG_TOKEN: InjectionToken<ParsedConfiguration>;
export declare const DEFAULT_TS_CONFIG_PROVIDER: Provider;
export declare const INIT_TS_CONFIG_TOKEN: InjectionToken<Transform>;
export declare const INIT_TS_CONFIG_TRANSFORM: TransformProvider;
