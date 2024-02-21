import {ChangeDetectionStrategy, Component, ElementRef, inject} from '@angular/core';
import {TuiIdService} from '@taiga-ui/cdk';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
} from '@taiga-ui/core/directives';
import {TuiTextfieldHost} from '@taiga-ui/core/interfaces';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/core/tokens';

@Component({
    selector: 'input[tuiTextfield], textarea[tuiTextfield]',
    template: '',
    styleUrls: ['./textfield.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TEXTFIELD_CONTROLLER_PROVIDER],
    host: {
        type: 'text',
        '[attr.id]': 'id',
        '[attr.inputMode]': 'inputMode',
        '[attr.aria-invalid]': 'host.invalid',
        '[attr.disabled]': 'host.disabled || null',
        '[tabIndex]': 'host.focusable ? 0 : -1',
        '[readOnly]': 'host.readOnly',
        '[value]': 'host.value',
        '(input)': 'host.onValueChange($event.target.value)',
    },
})
export class TuiTextfieldComponent {
    private readonly el: HTMLInputElement = inject(ElementRef).nativeElement;
    private readonly idService = inject(TuiIdService);
    readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    readonly host = inject<TuiTextfieldHost>(TUI_TEXTFIELD_HOST);

    constructor() {
        this.host.process(this.el);
    }

    get id(): string {
        return this.el.id || this.idService.generate();
    }

    get inputMode(): string {
        return this.el.inputMode || this.host.inputMode;
    }
}
