import {resetActiveProject} from 'ng-morph';

import {runMigration} from './utils';

describe('ng-update should migrate tuiCreateToken and tuiCreateTokenFromFactory to InjectionToken', () => {
    it('should migrate basic tokens without existing InjectionToken import', async () => {
        expect(
            await runMigration(
                `
import {tuiCreateToken, tuiCreateTokenFromFactory} from "@taiga-ui/cdk";

export const TOKEN_A = tuiCreateToken("default");
export const TOKEN_B = tuiCreateTokenFromFactory(() => "factory");
export const TOKEN_C = tuiCreateToken<number>(42);
export const TOKEN_D = tuiCreateTokenFromFactory(() => ({a: 1}));`,
            ),
        ).toEqual(
            `
import { InjectionToken } from "@angular/core";

export const TOKEN_A = new InjectionToken(ngDevMode ? 'TOKEN_A' : '', {
    factory: () => "default"
});
export const TOKEN_B = new InjectionToken(ngDevMode ? 'TOKEN_B' : '', {
    factory: () => "factory"
});
export const TOKEN_C = new InjectionToken<number>(ngDevMode ? 'TOKEN_C' : '', {
    factory: () => 42
});
export const TOKEN_D = new InjectionToken(ngDevMode ? 'TOKEN_D' : '', {
    factory: () => ({a: 1})
});`,
        );
    });

    it('should migrate tokens with existing InjectionToken import', async () => {
        expect(
            await runMigration(
                `
import {InjectionToken} from "@angular/core";
import {tuiCreateToken} from "@taiga-ui/cdk";

export const TOKEN_A = tuiCreateToken("default");
export const TOKEN_B = new InjectionToken("EXISTING");`,
            ),
        ).toEqual(
            `
import {InjectionToken} from "@angular/core";
export const TOKEN_A = new InjectionToken(ngDevMode ? 'TOKEN_A' : '', {
    factory: () => "default"
});
export const TOKEN_B = new InjectionToken("EXISTING");`,
        );
    });

    it('should migrate tokens with type-only import', async () => {
        expect(
            await runMigration(
                `
import {type InjectionToken} from "@angular/core";
import {tuiCreateToken, tuiCreateTokenFromFactory} from "@taiga-ui/cdk";

export const TOKEN_A = tuiCreateToken("default");
export const TOKEN_B = tuiCreateTokenFromFactory(() => "factory");`,
            ),
        ).toEqual(
            `
import { InjectionToken } from "@angular/core";

export const TOKEN_A = new InjectionToken(ngDevMode ? 'TOKEN_A' : '', {
    factory: () => "default"
});
export const TOKEN_B = new InjectionToken(ngDevMode ? 'TOKEN_B' : '', {
    factory: () => "factory"
});`,
        );
    });

    it('should migrate with complex factory functions', async () => {
        expect(
            await runMigration(
                `
import {tuiCreateTokenFromFactory} from "@taiga-ui/cdk";

const complexFactory = () => {
    const obj = {
        a: 1,
        b: [2, 3]
    };
    return obj;
};

export const TOKEN = tuiCreateTokenFromFactory(complexFactory);`,
            ),
        ).toEqual(
            `import { InjectionToken } from "@angular/core";

const complexFactory = () => {
    const obj = {
        a: 1,
        b: [2, 3]
    };
    return obj;
};

export const TOKEN = new InjectionToken(ngDevMode ? 'TOKEN' : '', {
    factory: complexFactory
});`,
        );
    });

    it('should preserve existing imports when migrating', async () => {
        expect(
            await runMigration(
                `
import {Component} from "@angular/core";
import {tuiCreateToken} from "@taiga-ui/cdk";
import {OtherService} from "./other.service";

export const TOKEN = tuiCreateToken("value");`,
            ),
        ).toEqual(
            `
import {Component} from "@angular/core";
import {OtherService} from "./other.service";
import { InjectionToken } from "@angular/core";

export const TOKEN = new InjectionToken(ngDevMode ? 'TOKEN' : '', {
    factory: () => "value"
});`,
        );
    });

    it('should handle tokens with type parameters', async () => {
        expect(
            await runMigration(
                `
import {tuiCreateToken} from "@taiga-ui/cdk";

export const TOKEN = tuiCreateToken<{a: number; b: string}>({a: 1, b: "test"});`,
            ),
        ).toEqual(
            `import { InjectionToken } from "@angular/core";

export const TOKEN = new InjectionToken<{a: number; b: string}>(ngDevMode ? 'TOKEN' : '', {
    factory: () => ({a: 1, b: "test"})
});`,
        );
    });

    it('should migrate tokens with type-only few @angular/core imports', async () => {
        expect(
            await runMigration(
                `
import type {FactoryProvider, InjectionToken, ProviderToken} from "@angular/core";
import {tuiCreateToken} from "@taiga-ui/cdk";

export function tuiCreateOptions<T>(
    defaults: T,
): [
    token: InjectionToken<T>,
    provider: (item: Partial<T> | ProviderToken<Partial<T>>) => FactoryProvider,
] {
    const token = tuiCreateToken(defaults);

    return [token, (options) => tuiProvideOptions(token, options, defaults)];
}`,
            ),
        ).toEqual(
            `
import type {FactoryProvider, ProviderToken} from "@angular/core";
import { InjectionToken } from "@angular/core";

export function tuiCreateOptions<T>(
    defaults: T,
): [
    token: InjectionToken<T>,
    provider: (item: Partial<T> | ProviderToken<Partial<T>>) => FactoryProvider,
] {
    const token = new InjectionToken(ngDevMode ? 'token' : '', {
        factory: () => defaults
    });

    return [token, (options) => tuiProvideOptions(token, options, defaults)];
}`,
        );
    });

    it('should migrate tokens with mixed type-only imports', async () => {
        expect(
            await runMigration(
                `
import {type InjectionToken} from "@angular/core";
import type {SomeType} from "@taiga-ui/cdk";
import {tuiCreateToken} from "@taiga-ui/cdk";

export const TOKEN = tuiCreateToken("value");`,
            ),
        ).toEqual(
            `
import type {SomeType} from "@taiga-ui/cdk";
import { InjectionToken } from "@angular/core";

export const TOKEN = new InjectionToken(ngDevMode ? 'TOKEN' : '', {
    factory: () => "value"
});`,
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});
