import {Location} from '@angular/common';
import type {ErrorHandler} from '@angular/core';
import {inject, Injectable} from '@angular/core';
import {errorLog} from 'ng-morph';

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
