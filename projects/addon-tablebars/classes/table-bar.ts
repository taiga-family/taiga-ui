import {TuiBrightness} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observer} from 'rxjs';

import {TuiTableBarOptions} from '../interfaces/table-bar-options';

export class TuiTableBar {
    readonly adaptive: boolean;

    readonly hasCloseButton: boolean;

    readonly mode: TuiBrightness;

    constructor(
        private readonly observer: Observer<never>,
        readonly content: PolymorpheusContent<Record<string, any>>,
        options: TuiTableBarOptions = {},
    ) {
        const {adaptive = false, hasCloseButton = false, mode = `onLight`} = options;

        this.mode = mode;
        this.hasCloseButton = hasCloseButton;
        this.adaptive = adaptive;
    }

    close(): void {
        this.observer.complete();
    }
}
