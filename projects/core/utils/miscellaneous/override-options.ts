import type {ProviderToken} from '@angular/core';
import {inject} from '@angular/core';

export function tuiOverrideOptions<T>(
    override: Partial<T>,
    fallback: T,
): (directive: T | null, options: T | null) => T {
    return (directive, options) => {
        const result: T = directive || {...(options || fallback)};

        Object.keys(override).forEach((key) => {
            // Update directive props with new defaults before inputs are processed
            (result as Record<string, unknown>)[key] = override[key as keyof T];
        });

        return result;
    };
}

export function tuiOverrideDefaultOptions<T>(
    key: ProviderToken<T>,
    options: Partial<T>,
): void {
    const defaultOptions = inject(key, {self: true});

    Object.keys(options).forEach((key) => {
        (defaultOptions as Record<string, unknown>)[key] = options[key as keyof T];
    });
}
