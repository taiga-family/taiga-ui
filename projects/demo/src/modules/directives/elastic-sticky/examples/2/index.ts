import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiButton, TuiScrollbar} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgIf, TuiButton, TuiElasticSticky, TuiScrollbar],
    templateUrl: './index.html',
    styleUrls: ['../1/index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected show = false;
    protected scale1 = 1;
    protected scale2 = 1;

    protected onElastic1(scale: number): void {
        this.scale1 = tuiClamp(scale, 0.2, 1);
    }

    protected onElastic2(scale: number): void {
        this.scale2 = tuiClamp(scale, 0.2, 1);
    }
}
