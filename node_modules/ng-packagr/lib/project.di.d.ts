import { InjectionToken, ValueProvider } from 'injection-js';
export declare const PROJECT_TOKEN: InjectionToken<string>;
export declare const provideProject: (project: string) => ValueProvider;
