import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiDocAPIItem, TuiDocAPINumberItem} from '@taiga-ui/addon-doc';
import type {TuiLooseUnion} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS, TuiTextfieldOptions} from '@taiga-ui/core';
import {TUI_TEXTFIELD_OPTIONS, TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocTextfield]',
    imports: [NgIf, TuiDocAPIItem, TuiDocAPINumberItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocTextfield {
    private readonly options = inject(TUI_TEXTFIELD_OPTIONS);

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    @Input()
    public hiddenOptions: Array<TuiLooseUnion<keyof TuiTextfieldOptions>> = ['rows'];

    public cleaner: boolean = this.options.cleaner();
    public size: TuiSizeL | TuiSizeS = this.options.size();
    public rows = 100;
}
