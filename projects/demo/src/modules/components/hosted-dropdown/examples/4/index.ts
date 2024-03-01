import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_ARROW} from '@taiga-ui/kit';

@Component({
    selector: 'tui-hosted-dropdown-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiHostedDropdownExample4 {
    protected readonly form = new FormGroup({
        control: new FormControl<string[]>([]),
    });

    protected open = false;

    protected readonly items = ['Drafts', 'In Progress', 'Completed'];

    protected readonly arrow = TUI_ARROW;

    protected get appearance(): string {
        return this.length ? 'whiteblock-active' : 'whiteblock';
    }

    protected get length(): number {
        return this.value.length || 0;
    }

    protected get text(): string {
        switch (this.length) {
            case 0:
                return 'Select';
            case 1:
                return this.value[0];
            default:
                return `${this.length} selected`;
        }
    }

    private get value(): readonly string[] {
        return this.form.get('control')?.value || [];
    }
}
