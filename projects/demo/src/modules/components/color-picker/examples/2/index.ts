import {Component, Inject} from '@angular/core';
import type {SafeStyle} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-color-picker-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiColorPickerExample2 {
    color = `#ffdd2d`;

    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}

    get background(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.color);
    }
}
