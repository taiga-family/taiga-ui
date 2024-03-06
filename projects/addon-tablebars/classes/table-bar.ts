import type {TuiBrightness} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observer} from 'rxjs';

import type {TuiTableBarOptions} from '../interfaces/table-bar-options';

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
