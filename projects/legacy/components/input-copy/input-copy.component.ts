import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import type {TuiFocusableElementAccessor, TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiPure,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TUI_TEXTFIELD_SIZE, TuiPrimitiveTextfieldComponent} from '@taiga-ui/core';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit';
import {TUI_VALUE_ACCESSOR_PROVIDER} from '@taiga-ui/legacy/directives';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';
import {map, merge, of, startWith, Subject, switchMap, timer} from 'rxjs';

import type {TuiInputCopyOptions} from './input-copy.options';
import {TUI_INPUT_COPY_OPTIONS} from './input-copy.options';

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
    private readonly doc = inject(DOCUMENT);
    private readonly copyTexts$ = inject(TUI_COPY_TEXTS);
    private readonly options = inject(TUI_INPUT_COPY_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public successMessage = this.options.successMessage;

    @Input()
    public messageDirection = this.options.messageDirection;

    @Input()
    public messageAppearance = this.options.messageAppearance;

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public onValueChange(value: string): void {
        this.value = value;
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    @tuiPure
    protected get hintText$(): Observable<PolymorpheusContent> {
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

    protected get icon(): TuiInputCopyOptions['icon'] {
        return this.options.icon;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected copy(): void {
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
