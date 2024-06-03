import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiHostedDropdownModule,
        ReactiveFormsModule,
        TuiButtonDirective,
        TuiDataListWrapper,
        TuiMultiSelectModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly form = new FormGroup({
        control: new FormControl<string[]>([]),
    });

    protected open = false;

    protected readonly items = ['Drafts', 'In Progress', 'Completed'];

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
