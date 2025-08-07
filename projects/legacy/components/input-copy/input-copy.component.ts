import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiHintDirection} from '@taiga-ui/core/directives/hint';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {AbstractTuiControl, tuiAsControl} from '@taiga-ui/legacy/classes';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TUI_TEXTFIELD_SIZE,
    TUI_VALUE_ACCESSOR_PROVIDER,
} from '@taiga-ui/legacy/directives';
import {
    tuiAsFocusableItemAccessor,
    type TuiFocusableElementAccessor,
    type TuiNativeFocusableElement,
} from '@taiga-ui/legacy/tokens';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {BehaviorSubject, map, merge, type Observable, of, switchMap, timer} from 'rxjs';

import {TUI_INPUT_COPY_OPTIONS, type TuiInputCopyOptions} from './input-copy.options';

/**
 * @deprecated use {@link TuiCopy} with {@link TuiTextfield}
 */
@Component({
    standalone: false,
    selector: 'tui-input-copy',
    templateUrl: './input-copy.template.html',
    styleUrls: ['./input-copy.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TUI_VALUE_ACCESSOR_PROVIDER,
        tuiAsFocusableItemAccessor(TuiInputCopyComponent),
        tuiAsControl(TuiInputCopyComponent),
    ],
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiInputCopyComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly copied$ = new BehaviorSubject<boolean>(false);
    private readonly doc = inject(DOCUMENT);
    private readonly copyTexts$ = inject(TUI_COPY_TEXTS);
    private readonly options = inject(TUI_INPUT_COPY_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public successMessage = this.options.successMessage;

    @Input()
    public messageDirection: TuiHintDirection = this.options.messageDirection;

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

    @tuiPure
    protected get hintText$(): Observable<PolymorpheusContent> {
        return this.copyTexts$.pipe(
            switchMap((texts) =>
                this.copied$.pipe(
                    switchMap((copied) => {
                        if (!copied) {
                            return of(texts[0]);
                        }

                        this.copied$.next(false);

                        return merge(
                            of(this.successMessage || texts[1]),
                            timer(3000).pipe(map(() => texts[0])),
                        );
                    }),
                ),
            ),
        );
    }

    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
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
        this.copied$.next(true);
    }

    protected getFallbackValue(): string {
        return '';
    }
}
