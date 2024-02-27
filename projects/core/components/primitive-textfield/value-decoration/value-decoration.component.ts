import {
    ChangeDetectionStrategy,
    Component,
    DoCheck,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    ViewChild,
} from '@angular/core';
import {TUI_FOCUSABLE_ITEM_ACCESSOR, TUI_FONTS_READY} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {BehaviorSubject, delay, distinctUntilChanged, filter, map, merge} from 'rxjs';

import {TuiPrimitiveTextfield} from '../primitive-textfield-types';

@Component({
    selector: 'tui-value-decoration',
    templateUrl: './value-decoration.template.html',
    styleUrls: ['./value-decoration.style.less'],
    // It follows Change Detection of PrimitiveTextfield
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
})
export class TuiValueDecorationComponent implements DoCheck {
    @ViewChild('pre', {read: ElementRef, static: true})
    private readonly pre?: ElementRef<HTMLElement>;

    private readonly textfield = inject<TuiPrimitiveTextfield>(
        TUI_FOCUSABLE_ITEM_ACCESSOR,
    );

    private readonly fontsReady$ = inject(TUI_FONTS_READY);

    private readonly prefix$ = new BehaviorSubject('');

    public readonly pre$ = merge(this.fontsReady$, this.prefix$).pipe(
        delay(0),
        filter(() => !!this.pre?.nativeElement.isConnected),
        map(() => this.pre?.nativeElement.offsetWidth || 0),
        distinctUntilChanged(),
    );

    @HostBinding('class._table')
    protected get isContextTable(): boolean {
        return this.textfield.appearance === TuiAppearance.Table;
    }

    protected get value(): string {
        return this.textfield.value;
    }

    @HostBinding('class._filler')
    protected get filler(): string {
        const {focused, placeholder, exampleText, value, textfield} = this;

        if (placeholder && exampleText) {
            return '';
        }

        return focused ? exampleText || textfield.filler.slice(value.length) : '';
    }

    protected get prefix(): string {
        return this.decorationsVisible ? this.textfield.prefix : '';
    }

    protected get postfix(): string {
        return this.decorationsVisible ? this.computedPostfix : '';
    }

    @HostListener('animationstart')
    public ngDoCheck(): void {
        this.prefix$.next(this.prefix);
    }

    private get placeholder(): string {
        return this.textfield.nativeFocusableElement?.placeholder || '';
    }

    private get exampleText(): string {
        return !this.value && this.focused ? this.placeholder : '';
    }

    private get decorationsVisible(): boolean {
        return !!this.value || (this.focused && !this.placeholder);
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
