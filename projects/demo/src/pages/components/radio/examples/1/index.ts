import {Component, type OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiRadio, type TuiSizeS} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiPlatform, TuiRadio],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example implements OnInit {
    protected readonly platforms: ReadonlyArray<'android' | 'ios' | 'web'> = [
        'web',
        'web',
        'ios',
        'android',
    ];

    protected readonly invalidTrue = new FormControl(true, () => ({invalid: true}));
    protected readonly invalidFalse = new FormControl(false, () => ({invalid: true}));

    public ngOnInit(): void {
        this.invalidTrue.markAsTouched();
        this.invalidFalse.markAsTouched();
    }

    protected getSize(first: boolean): TuiSizeS {
        return first ? 'm' : 's';
    }
}
