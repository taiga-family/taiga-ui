import {isPlatformBrowser} from '@angular/common';
import {DestroyRef, Directive, inject, PLATFORM_ID} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import {tuiCreateToken, tuiFontSizeWatcher} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_FONT_SIZE_HANDLER = tuiCreateToken<(size: number) => void>();

@Directive({
    standalone: true,
})
export class TuiFontSize {
    private readonly handler = inject(TUI_FONT_SIZE_HANDLER, {optional: true});
    protected readonly nothing = inject(DestroyRef).onDestroy(
        this.handler &&
            isPlatformBrowser(inject(PLATFORM_ID)) &&
            typeof ResizeObserver !== 'undefined'
            ? tuiFontSizeWatcher(this.handler, inject(WA_WINDOW))
            : EMPTY_FUNCTION,
    );
}
