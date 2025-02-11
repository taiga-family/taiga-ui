/* eslint-disable @typescript-eslint/member-ordering */
import {isPlatformBrowser} from '@angular/common';
import {DestroyRef, Directive, inject, PLATFORM_ID} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    tuiCreateTokenFromFactory,
    tuiFontSizeWatcher,
} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_FONT_SIZE_HANDLER = tuiCreateTokenFromFactory<TuiStringHandler<number>>(
    () => (size) => `${Math.max(size, 16)}`,
);

@Directive({
    standalone: true,
})
export class TuiFontSize {
    private readonly el = tuiInjectElement();
    private readonly handler = inject(TUI_FONT_SIZE_HANDLER);
    private readonly callback = (size: number): void =>
        this.el.style.setProperty('--tui-font-size', this.handler(size));

    protected readonly nothing = inject(DestroyRef).onDestroy(
        isPlatformBrowser(inject(PLATFORM_ID)) && typeof ResizeObserver !== 'undefined'
            ? tuiFontSizeWatcher(this.callback, inject(WA_WINDOW))
            : EMPTY_FUNCTION,
    );
}
