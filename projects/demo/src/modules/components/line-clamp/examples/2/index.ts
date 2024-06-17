import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiLineClampComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiLineClampComponent, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected linesLimit = 2;

    protected toggle(): void {
        this.linesLimit = this.collapsed ? 12 : 2;
    }

    private get collapsed(): boolean {
        return this.linesLimit === 2;
    }
}
