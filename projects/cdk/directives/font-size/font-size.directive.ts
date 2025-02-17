import {isPlatformBrowser} from '@angular/common';
import {DestroyRef, Directive, inject, PLATFORM_ID} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import {tuiCreateToken, tuiFontSizeWatcher} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_FONT_SIZE_HANDLER =
    tuiCreateToken<(size: number) => void>(EMPTY_FUNCTION);

@Directive({
    standalone: true,
})
export class TuiFontSize {
    protected readonly nothing = inject(DestroyRef).onDestroy(
        isPlatformBrowser(inject(PLATFORM_ID)) && typeof ResizeObserver !== 'undefined'
            ? tuiFontSizeWatcher(inject(TUI_FONT_SIZE_HANDLER), inject(WA_WINDOW))
            : EMPTY_FUNCTION,
    );
}
