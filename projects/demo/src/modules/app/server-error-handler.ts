import type {ErrorHandler} from '@angular/core';
import {Injectable} from '@angular/core';
import {hasFlag} from 'scripts/shared/argv.utils';

// TODO
const KNOWN_ISSUES: string[] = [
    'requestAnimationFrame is not defined', // hljs
    /**
     * TODO: drop it after update to @ng-web-apis/resize-observer@4.0.0
     * @see https://github.com/taiga-family/ng-web-apis/pull/350
     */
    'ResizeObserver is not supported in your browser',
    // TODO: drop all `Failed to parse URL from` errors after deletion of tui-svg component
    'TypeError: Failed to parse URL from assets/icons/android.svg',
    'TypeError: Failed to parse URL from assets/icons/ios.svg',
];

@Injectable()
export class ServerErrorHandler implements ErrorHandler {
    public handleError(error: Error | string): void {
        const errorMessage = (typeof error === 'string' ? error : error.message) || '';

        if (KNOWN_ISSUES.some(issue => errorMessage.includes(issue))) {
            return;
        }

        console.error(errorMessage);

        if (hasFlag('--ci')) {
            process.exit(1);
        }
    }
}
