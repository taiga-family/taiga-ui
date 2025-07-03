import {isPlatformBrowser} from '@angular/common';
import {DestroyRef, Directive, inject, InjectionToken, PLATFORM_ID} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import {tuiFontSizeWatcher} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_FONT_SIZE_HANDLER = new InjectionToken<(size: number) => void>(
    ngDevMode ? 'TUI_FONT_SIZE_HANDLER' : '',
);

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
