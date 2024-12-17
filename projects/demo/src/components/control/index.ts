import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {TuiTitle} from '@taiga-ui/core';

@Directive({
    standalone: true,
    selector: 'input[tuiDisabled][formControl]',
})
export class TuiDocReactiveFormDisable {
    private readonly control = inject(NgControl);

    @Input()
    public set tuiDisabled(x: boolean) {
        this.control.control?.[x ? 'disable' : 'enable']();
    }
}

@Component({
    standalone: true,
    selector: 'tbody[tuiDocControl]',
    imports: [NgIf, TuiDocAPIItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocControlComponent {
    @Input()
    public hiddenOptions: ReadonlyArray<'disabled' | 'invalid' | 'readOnly'> = [];

    public readonly = false;
    public disabled = false;
    public invalid: boolean | null = null;
}

export const TuiDocControl = [TuiDocControlComponent, TuiDocReactiveFormDisable];
