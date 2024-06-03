import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import type {TuiFocusableElementAccessor} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
    TuiPrimitiveTextfieldModule,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-input-expire',
    imports: [TuiPrimitiveTextfieldModule, MaskitoDirective],
    templateUrl: './input-expire.template.html',
    styleUrls: ['./input-expire.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputExpireComponent),
        tuiAsControl(TuiInputExpireComponent),
    ],
})
export class TuiInputExpireComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly input?: TuiPrimitiveTextfieldComponent;

    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    protected readonly maskOptions = maskitoDateOptionsGenerator({
        mode: 'mm/yy',
        separator: '/',
    });

    @Input()
    public autocompleteEnabled = false;

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.input?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return !!this.input && this.input.focused;
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get autocomplete(): string {
        return this.autocompleteEnabled ? 'cc-exp' : 'off';
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected getFallbackValue(): string {
        return '';
    }
}
