import {TuiBrightness} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observer} from 'rxjs';

import {TuiTableBarOptions} from '../interfaces/table-bar-options';

export class TuiTableBar {
    public readonly adaptive: boolean;

    public readonly hasCloseButton: boolean;

    public readonly mode: TuiBrightness;

    constructor(
        private readonly observer: Observer<never>,
        public readonly content: PolymorpheusContent<Record<string, any>>,
        options: TuiTableBarOptions = {},
    ) {
        const {mode = 'onLight', hasCloseButton = false, adaptive = false} = options;

        this.mode = mode;
        this.hasCloseButton = hasCloseButton;
        this.adaptive = adaptive;
    }

    public close(): void {
        this.observer.complete();
    }
}
