import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    ViewChild,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {BehaviorSubject} from 'rxjs';
import {delay, distinctUntilChanged, filter, map} from 'rxjs/operators';

import {TuiPrimitiveTextfield} from '../primitive-textfield-types';

@Component({
    selector: `tui-value-decoration`,
    templateUrl: `./value-decoration.template.html`,
    styleUrls: [`./value-decoration.style.less`],
    // It follows Change Detection of PrimitiveTextfield
    changeDetection: ChangeDetectionStrategy.Default,
})
export class TuiValueDecorationComponent {
    private readonly alignment$ = new BehaviorSubject(``);
    private readonly prefix$ = new BehaviorSubject(``);
    private readonly postfix$ = new BehaviorSubject(``);

    @ViewChild(`pre`, {read: ElementRef, static: true})
    readonly pre?: ElementRef<HTMLElement>;

    @ViewChild(`ghost`, {read: ElementRef, static: true})
    readonly ghost?: ElementRef<HTMLElement>;

    @ViewChild(`post`, {read: ElementRef, static: true})
    readonly post?: ElementRef<HTMLElement>;

    color = ``;

    readonly pre$ = this.prefix$.pipe(
        delay(0),
        filter(() => !!this.pre?.nativeElement.isConnected),
        distinctUntilChanged(),
        map(() => this.pre?.nativeElement.offsetWidth || 0),
    );

    readonly post$ = this.prefix$.pipe(
        delay(0),
        filter(() => !!this.post?.nativeElement.isConnected),
        distinctUntilChanged(),
        map(() => this.post?.nativeElement.offsetWidth || 0),
    );

    readonly align$ = this.alignment$.pipe(
        delay(0),
        filter(() => !!this.textfield.nativeFocusableElement),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        private readonly textfield: TuiPrimitiveTextfield,
        @Inject(WINDOW)
        private readonly windowRef: Window,
    ) {}

    @HostBinding(`class._table`)
    get isContextTable(): boolean {
        return this.textfield.appearance === TuiAppearance.Table;
    }

    get value(): string {
        const value = this.textfield.value?.toString() || ``;

        return this.textfield.nativeFocusableElement?.type === `password`
            ? value.replace(/./g, `•`)
            : value.replace(/^NaN$/, ``);
    }

    @HostListener(`animationstart`)
    ngDoCheck(): void {
        this.prefix$.next(this.prefix);
        this.postfix$.next(this.postfix);

        const element = this.textfield.nativeFocusableElement;

        if (element) {
            this.color = this.windowRef.getComputedStyle(element).color;
            this.alignment$.next(this.windowRef.getComputedStyle(element).textAlign);
        }
    }

    get filler(): string {
        const {focused, placeholder, exampleText, value, textfield} = this;

        if (placeholder && exampleText) {
            return ``;
        }

        return focused ? exampleText || textfield.filler.slice(value.length) : ``;
    }

    get prefix(): string {
        return this.decorationsVisible ? this.textfield.prefix : ``;
    }

    get postfix(): string {
        return this.decorationsVisible ? this.computedPostfix : ``;
    }

    private get placeholder(): string {
        return this.textfield.nativeFocusableElement?.placeholder || ``;
    }

    private get exampleText(): string {
        return !this.value && this.focused ? this.placeholder : ``;
    }

    private get decorationsVisible(): boolean {
        return !!this.value || this.focused;
    }

    private get focused(): boolean {
        return this.textfield.computedFocused && !this.textfield.readOnly;
    }

    private get computedPostfix(): string {
        return this.textfield.postfix && (this.filler || this.value)
            ? ` ${this.textfield.postfix}`
            : this.textfield.postfix;
    }
}
