import {NgForOf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiPlatform} from '@taiga-ui/cdk';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';
import {TuiRadioComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        FormsModule,
        ReactiveFormsModule,
        TuiPlatformModule,
        TuiRadioComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent implements OnInit {
    protected readonly platforms: readonly TuiPlatform[] = [
        'web',
        'web',
        'android',
        'ios',
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
