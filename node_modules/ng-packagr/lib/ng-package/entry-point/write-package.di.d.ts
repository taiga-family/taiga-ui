import { InjectionToken } from 'injection-js';
import { Transform } from '../../graph/transform';
import { TransformProvider } from '../../graph/transform.di';
export declare const WRITE_PACKAGE_TRANSFORM_TOKEN: InjectionToken<Transform>;
export declare const WRITE_PACKAGE_TRANSFORM: TransformProvider;
