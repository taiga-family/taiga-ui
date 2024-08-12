import {Location} from '@angular/common';
import type {ErrorHandler} from '@angular/core';
import {inject, Injectable} from '@angular/core';
// eslint-disable-next-line @taiga-ui/experience/no-deep-imports
import {errorLog} from '@taiga-ui/cdk/schematics/utils/colored-log';

// TODO
const KNOWN_ISSUES: string[] = [
    'requestAnimationFrame is not defined', // hljs
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
        process.abort();
    }
}
