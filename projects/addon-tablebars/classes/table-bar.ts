import {TuiBrightness} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observer} from 'rxjs';

import {TuiTableBarOptions} from '../interfaces/table-bar-options';

/**
 * @deprecated: use {@link TuiTableBar}
 * TODO: remove in v3.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export class TableBar {
    readonly adaptive: boolean;

    readonly hasCloseButton: boolean;

    readonly mode: TuiBrightness;

    constructor(
        private readonly observer: Observer<never>,
        readonly content: PolymorpheusContent<Record<string, any>>,
        options: TuiTableBarOptions = {},
    ) {
        const {mode = 'onLight', hasCloseButton = false, adaptive = false} = options;

        this.mode = mode;
        this.hasCloseButton = hasCloseButton;
        this.adaptive = adaptive;
    }

    close(): void {
        this.observer.complete();
    }
}

export class TuiTableBar extends TableBar {}
