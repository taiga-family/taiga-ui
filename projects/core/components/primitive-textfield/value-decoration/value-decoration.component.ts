import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    ViewChild,
} from '@angular/core';
import {MutationObserverDirective} from '@ng-web-apis/mutation-observer';
import {TuiResizeService} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    TuiTextfieldController,
} from '@taiga-ui/core/directives';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {defer, EMPTY, merge, Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

import {TuiPrimitiveTextfieldComponent} from '../primitive-textfield.component';

@Component({
    selector: 'tui-value-decoration',
    templateUrl: 'value-decoration.template.html',
    styleUrls: ['value-decoration.style.less'],
    providers: [TuiResizeService],
    // It follows Change Detection of PrimitiveTextfield
    changeDetection: ChangeDetectionStrategy.Default,
})
export class TuiValueDecorationComponent {
    @ViewChild('pre', {read: ElementRef, static: true})
    private readonly pre?: ElementRef<HTMLElement>;

    @ViewChild(MutationObserverDirective, {static: true})
    private readonly directive?: MutationObserverDirective;

    readonly pre$ = defer(() =>
        merge(this.directive?.waMutationObserver ?? EMPTY, this.resize$),
    ).pipe(
        map(() => this.pre?.nativeElement.offsetWidth ?? 0),
        startWith(0),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TuiPrimitiveTextfieldComponent)
        private readonly textfield: TuiPrimitiveTextfieldComponent,
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        private readonly controller: TuiTextfieldController,
        @Inject(TuiResizeService)
        readonly resize$: Observable<unknown>,
    ) {}

    @HostBinding('class._table')
    get isContextTable(): boolean {
        return this.textfield.appearance === TuiAppearance.Table;
    }

    get value(): string {
        return this.textfield.value;
    }

    get filler(): string {
        const {focused, placeholder, exampleText, value, textfield} = this;

        if (placeholder && exampleText) {
            return '';
        }

        return focused ? exampleText || textfield.filler.slice(value.length) : '';
    }

    get prefix(): string {
        return this.decorationsVisible ? this.textfield.prefix : '';
    }

    get postfix(): string {
        return this.decorationsVisible ? this.computedPostfix : '';
    }

    private get placeholder(): string {
        return this.textfield.nativeFocusableElement?.placeholder || '';
    }

    private get exampleText(): string {
        const exampleText = this.controller.exampleText || this.placeholder;

        return !this.value && this.focused ? exampleText : '';
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
