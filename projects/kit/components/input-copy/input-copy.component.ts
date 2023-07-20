import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
    tuiPure,
} from '@taiga-ui/cdk';
import {TuiPrimitiveTextfieldComponent, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TUI_VALUE_ACCESSOR_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {merge, Observable, of, Subject, timer} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

import {TUI_INPUT_COPY_OPTIONS, TuiInputCopyOptions} from './input-copy.options';

@Component({
    selector: 'tui-input-copy',
    templateUrl: './input-copy.template.html',
    styleUrls: ['./input-copy.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TUI_VALUE_ACCESSOR_PROVIDER,
        tuiAsFocusableItemAccessor(TuiInputCopyComponent),
        tuiAsControl(TuiInputCopyComponent),
    ],
})
export class TuiInputCopyComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly copy$ = new Subject<void>();

    @Input()
    successMessage = this.options.successMessage;

    @Input()
    messageDirection = this.options.messageDirection;

    @Input()
    messageAppearance = this.options.messageAppearance;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(TUI_COPY_TEXTS) private readonly copyTexts$: Observable<[string, string]>,
        @Inject(TUI_INPUT_COPY_OPTIONS) private readonly options: TuiInputCopyOptions,
    ) {
        super(control, cdr);
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfield?.size || 'l';
    }

    @tuiPure
    get hintText$(): Observable<PolymorpheusContent> {
        return this.copyTexts$.pipe(
            switchMap(texts =>
                this.copy$.pipe(
                    switchMap(() =>
                        merge(
                            of(this.successMessage || texts[1]),
                            timer(3000).pipe(map(() => texts[0])),
                        ),
                    ),
                    startWith(texts[0]),
                ),
            ),
        );
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    get focused(): boolean {
        return !!this.textfield && this.textfield.focused;
    }

    get icon(): TuiInputCopyOptions['icon'] {
        return this.options.icon;
    }

    onValueChange(value: string): void {
        this.value = value;
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    copy(): void {
        if (!this.textfield?.nativeFocusableElement) {
            return;
        }

        this.textfield.nativeFocusableElement.select();
        this.doc.execCommand('copy');
        this.copy$.next();
    }

    protected getFallbackValue(): string {
        return '';
    }
}
