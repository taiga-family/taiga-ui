import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-color-picker-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiColorPickerExample1 {
    color = '#ffdd2d';

    readonly palette = new Map([
        ['color-black-300', '#333333'],
        ['color-black-200', '#666666'],
        ['color-black-100', '#909090'],
        ['color-yellow-100', '#FFDD2C'],
        ['color-yellow-200', '#FCC521'],
        ['color-yellow-300', '#FAB618'],
        ['color-gray-100', '#f5f5f6'],
        ['color-gray-200', '#e7e8ea'],
        ['color-gray-300', '#cbcfd3'],
        ['color-gray-400', '#959ba4'],
        ['color-gray-500', '#79818c'],
        ['color-gray-600', '#616871'],
        ['color-light-blue-100', '#ecf1f7'],
        ['color-light-blue-200', '#e4ebf3'],
        ['color-light-blue-300', '#dde4ed'],
        ['color-blue-100', '#1771e6'],
        ['color-blue-200', '#1464cc'],
        ['color-blue-300', '#0953b3'],
        ['color-green-100', '#39b54a'],
        ['color-green-200', '#2ca53a'],
        ['color-green-300', '#168a21'],
        ['color-red-100', '#e01f19'],
        ['color-red-200', '#d3120e'],
        ['color-red-300', '#c40b08'],
    ]);
}
