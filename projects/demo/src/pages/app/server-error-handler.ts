import {Location} from '@angular/common';
import {type ErrorHandler, inject, Injectable} from '@angular/core';
import {errorLog} from 'ng-morph';

// TODO
const KNOWN_ISSUES: string[] = [
    /**
     * ```
     * // example.ts
     * export default class Example {}
     *
     * // another-file.ts
     * import('./example.ts', {with: {loader: 'text'}})
     *     .then(x => x.default)
     * ```
     * During SERVER side rendering, `x.default` invalidly equals to `Example` class.
     * During CLIENT side rendering, `x.default` correctly equals to raw file content.
     *
     * TODO(v6): no more relevant for Angular >= 20
     */
    't.match is not a function',
    'Input data should be a String',
];

@Injectable()
export class ServerErrorHandler implements ErrorHandler {
    protected readonly location = inject(Location);

    public handleError(error: Error | string): void {
        const errorMessage = (typeof error === 'string' ? error : error.message) || '';

        if (KNOWN_ISSUES.some((issue) => errorMessage.includes(issue))) {
            return;
        }

        errorLog(this.location.path());
        console.error(errorMessage);

        if (
            // Default environment variables for GitHub CI
            process.env.CI // https://docs.github.com/en/actions/reference/workflows-and-actions/variables#default-environment-variables
        ) {
            process.exit(1);
        }
    }
}
