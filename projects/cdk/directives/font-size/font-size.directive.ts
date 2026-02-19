import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {DestroyRef, Directive, inject, InjectionToken, PLATFORM_ID} from '@angular/core';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import {tuiFontSizeWatcher} from '@taiga-ui/font-watcher';

export const TUI_FONT_SIZE_HANDLER = new InjectionToken<(size: number) => void>(
    ngDevMode ? 'TUI_FONT_SIZE_HANDLER' : '',
);

@Directive()
export class TuiFontSize {
    private readonly handler = inject(TUI_FONT_SIZE_HANDLER, {optional: true});
    private readonly enabled =
        !inject(TuiFontSize, {optional: true, skipSelf: true}) &&
        isPlatformBrowser(inject(PLATFORM_ID)) &&
        typeof ResizeObserver !== 'undefined';

    protected readonly nothing = inject(DestroyRef).onDestroy(
        this.enabled && this.handler
            ? tuiFontSizeWatcher(this.handler, inject(DOCUMENT).createElement('iframe'))
            : EMPTY_FUNCTION,
    );
}
