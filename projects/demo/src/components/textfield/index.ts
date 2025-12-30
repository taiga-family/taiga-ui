import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {TuiDocAPIItem, TuiDocAPINumberItem} from '@taiga-ui/addon-doc';
import {
    TUI_TEXTFIELD_OPTIONS,
    type TuiSizeL,
    type TuiSizeS,
    type TuiTextfieldOptions,
    TuiTitle,
} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tbody[tuiDocTextfield]',
    imports: [TuiDocAPIItem, TuiDocAPINumberItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocTextfield {
    private readonly options = inject(TUI_TEXTFIELD_OPTIONS);

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    public readonly contentVariants = input<PolymorpheusContent[]>(['', 'TOP SECRET']);

    public readonly hiddenOptions = input<Array<string | keyof TuiTextfieldOptions>>([
        'rows',
    ]);

    public cleaner: boolean = this.options.cleaner();
    public size: TuiSizeL | TuiSizeS = this.options.size();
    public rows = 100;
    public content: PolymorpheusContent = '';
}
