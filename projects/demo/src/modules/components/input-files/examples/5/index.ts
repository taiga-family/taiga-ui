import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiLink} from '@taiga-ui/core';
import type {TuiFileLike} from '@taiga-ui/kit';
import {TuiAvatar, TuiFiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, TuiAvatar, TuiLink, TuiFiles, TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiFileLike | null>(null);

    protected readonly file: TuiFileLike = {
        name: 'custom.txt',
    };
}
