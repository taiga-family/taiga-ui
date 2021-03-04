import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';
import {
    blurNativeFocused,
    isEdgeOlderThan,
    isIE,
    isNativeFocusedIn,
    isSafari,
    TUI_IS_IOS,
    tuiDefaultProp,
    tuiRequiredSetter,
} from '@taiga-ui/cdk';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core/types';
import {sizeBigger} from '@taiga-ui/core/utils/miscellaneous';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
    size: TuiSizeXS | TuiSizeXXL = 'm';

    @Input()
    @tuiDefaultProp()
    inheritColor = false;

    @Input()
    @tuiDefaultProp()
    overlay = false;

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

    @HostBinding('class._animated-with-js')
    animatedWithJs = isEdgeOlderThan(17, this.userAgent) || isIE(this.userAgent);

    readonly isApple = isSafari(this.elementRef.nativeElement) || this.isIos;

    constructor(
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(USER_AGENT) private readonly userAgent: string,
        @Inject(TUI_IS_IOS) private readonly isIos: boolean,
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
