import { InjectionToken, Provider } from 'injection-js';
import { Transform } from '../graph/transform';
import { TransformProvider } from '../graph/transform.di';
export declare const PACKAGE_TRANSFORM_TOKEN: InjectionToken<Transform>;
export declare const PACKAGE_TRANSFORM: TransformProvider;
export declare const PACKAGE_PROVIDERS: Provider[];
