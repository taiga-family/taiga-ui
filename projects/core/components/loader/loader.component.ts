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
    public size = this.options.size;

    @Input()
    public inheritColor = this.options.inheritColor;

    @Input()
    public overlay = this.options.overlay;

    @Input()
    public textContent: PolymorpheusContent;

    @Input()
    public set showLoader(value: boolean) {
        // @bad TODO: https://github.com/angular/angular/issues/32083 think of a better way
        if (value && this.focused) {
            tuiBlurNativeFocused(this.doc);
        }

        this.loading = value;
    }

    @HostBinding('class._loading')
    protected loading = true;

    protected readonly isApple = tuiIsSafari(this.el) || this.isIOS;

    protected get hasOverlay(): boolean {
        return this.overlay && this.loading;
    }

    protected get hasText(): boolean {
        return !!this.textContent;
    }

    protected get isHorizontal(): boolean {
        return !tuiSizeBigger(this.size);
    }

    protected get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }
}
