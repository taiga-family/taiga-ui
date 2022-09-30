import {
    ChangeDetectionStrategy,
    Component,
    DoCheck,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    ViewChild,
} from '@angular/core';
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
export class TuiValueDecorationComponent implements DoCheck {
    @ViewChild(`pre`, {read: ElementRef, static: true})
    private readonly pre?: ElementRef<HTMLElement>;

    private readonly prefix$ = new BehaviorSubject(``);

    readonly pre$ = this.prefix$.pipe(
        delay(0),
        filter(() => !!this.pre?.nativeElement.isConnected),
        distinctUntilChanged(),
        map(() => this.pre?.nativeElement.offsetWidth || 0),
    );

    constructor(
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        private readonly textfield: TuiPrimitiveTextfield,
    ) {}

    @HostBinding(`class._table`)
    get isContextTable(): boolean {
        return this.textfield.appearance === TuiAppearance.Table;
    }

    get value(): string {
        return this.textfield.value;
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

    @HostListener(`animationstart`)
    ngDoCheck(): void {
        this.prefix$.next(this.prefix);
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
