import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {
    blurNativeFocused,
    isNativeFocusedIn,
    isSafari,
    TUI_IS_IOS,
    tuiDefaultProp,
    tuiRequiredSetter,
} from '@taiga-ui/cdk';
import {sizeBigger} from '@taiga-ui/core/utils/miscellaneous';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_LOADER_OPTIONS, TuiLoaderOptions} from './loader-options';

// @dynamic
@Component({
    selector: 'tui-loader',
    templateUrl: './loader.template.html',
    styleUrls: ['./loader.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLoaderComponent {
    @Input()
    @tuiDefaultProp()
    size = this.options.size;

    @Input()
    @tuiDefaultProp()
    inheritColor = this.options.inheritColor;

    @Input()
    @tuiDefaultProp()
    overlay = this.options.overlay;

    // TODO: Remove null in 3.0
    @Input()
    @tuiDefaultProp()
    textContent: PolymorpheusContent | null = null;

    @Input()
    @tuiRequiredSetter()
    set showLoader(value: boolean) {
        // @bad TODO: https://github.com/angular/angular/issues/32083 think of a better way
        if (value && this.focused) {
            blurNativeFocused(this.documentRef);
        }

        this.loading = value;
    }

    @HostBinding('class._loading')
    loading = true;

    readonly isApple = isSafari(this.elementRef.nativeElement) || this.isIos;

    constructor(
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_IS_IOS) private readonly isIos: boolean,
        @Inject(TUI_LOADER_OPTIONS) private readonly options: TuiLoaderOptions,
    ) {}

    get hasOverlay(): boolean {
        return this.overlay && this.loading;
    }

    get hasText(): boolean {
        return !!this.textContent;
    }

    get isHorizontal(): boolean {
        return !sizeBigger(this.size);
    }

    get focused(): boolean {
        return isNativeFocusedIn(this.elementRef.nativeElement);
    }
}
