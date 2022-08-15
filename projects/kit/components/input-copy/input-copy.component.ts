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
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_SIZE,
    TuiHintDirection,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldSizeDirective,
} from '@taiga-ui/core';
import {TUI_VALUE_ACCESSOR_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {merge, Observable, of, Subject, timer} from 'rxjs';
import {mapTo, startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: `tui-input-copy`,
    templateUrl: `./input-copy.template.html`,
    styleUrls: [`./input-copy.style.less`],
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
    @tuiDefaultProp()
    successMessage: PolymorpheusContent = ``;

    @Input()
    @tuiDefaultProp()
    messageDirection: TuiHintDirection = `bottom-left`;

    @Input()
    @tuiDefaultProp()
    messageAppearance = ``;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_COPY_TEXTS) private readonly copyTexts$: Observable<[string, string]>,
    ) {
        super(control, changeDetectorRef);
    }

    @HostBinding(`class._has-value`)
    get hasValue(): boolean {
        return !!this.value;
    }

    @tuiPure
    get hintText$(): Observable<PolymorpheusContent> {
        return this.copyTexts$.pipe(
            switchMap(texts =>
                this.copy$.pipe(
                    switchMap(() =>
                        merge(
                            of(this.successMessage || texts[1]),
                            timer(3000).pipe(mapTo(texts[0])),
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

    get icon(): string {
        return this.textfieldSize.size === `s` ? `tuiIconCopy` : `tuiIconCopyLarge`;
    }

    onValueChange(value: string): void {
        this.updateValue(value);
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    copy(): void {
        if (!this.textfield || !this.textfield.nativeFocusableElement) {
            return;
        }

        this.textfield.nativeFocusableElement.select();
        this.documentRef.execCommand(`copy`);
        this.copy$.next();
    }

    protected getFallbackValue(): string {
        return ``;
    }
}
