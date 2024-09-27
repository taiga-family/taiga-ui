import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import type {TuiLooseUnion} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiLink,
    type TuiSizeL,
    type TuiSizeS,
    type TuiTextfieldOptions,
    TuiTitle,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocTextfield]',
    imports: [NgIf, RouterLink, TuiDocAPIItem, TuiLink, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocTextfield {
    private readonly options = inject(TUI_TEXTFIELD_OPTIONS);

    protected readonly routes = DemoRoute;

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];
    protected readonly customContentVariants = ['', '@tui.bell'];

    @Input()
    public tuiDocTextfield: readonly string[] | '' = '';

    @Input()
    public hiddenOptions: Array<TuiLooseUnion<keyof TuiTextfieldOptions>> = [];

    public cleaner: boolean = this.options.cleaner();
    public size: TuiSizeL | TuiSizeS = this.options.size();
    public labelOutside = false;
    public customContent = this.customContentVariants[0];
}
