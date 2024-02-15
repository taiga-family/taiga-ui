import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {
    TUI_IS_IOS,
    tuiBlurNativeFocused,
    tuiIsNativeFocusedIn,
    tuiIsSafari,
} from '@taiga-ui/cdk';
import {tuiSizeBigger} from '@taiga-ui/core/utils/miscellaneous';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_LOADER_OPTIONS} from './loader.options';

@Component({
    selector: 'tui-loader',
    templateUrl: './loader.template.html',
    styleUrls: ['./loader.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLoaderComponent {
    private readonly doc = inject(DOCUMENT);
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly options = inject(TUI_LOADER_OPTIONS);

    @Input()
    @HostBinding('attr.data-size')
    size = this.options.size;

    @Input()
    inheritColor = this.options.inheritColor;

    @Input()
    overlay = this.options.overlay;

    @Input()
    textContent: PolymorpheusContent;

    @Input()
    set showLoader(value: boolean) {
        // @bad TODO: https://github.com/angular/angular/issues/32083 think of a better way
        if (value && this.focused) {
            tuiBlurNativeFocused(this.doc);
        }

        this.loading = value;
    }

    @HostBinding('class._loading')
    loading = true;

    readonly isApple = tuiIsSafari(this.el) || this.isIOS;

    get hasOverlay(): boolean {
        return this.overlay && this.loading;
    }

    get hasText(): boolean {
        return !!this.textContent;
    }

    get isHorizontal(): boolean {
        return !tuiSizeBigger(this.size);
    }

    get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }
}
