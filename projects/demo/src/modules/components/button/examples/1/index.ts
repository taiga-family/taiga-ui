import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-button-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiButtonExample1 {
    readonly avatarUrl = new URL(
        '../../../../../assets/images/avatar.jpg',
        import.meta.url,
    ).toString();

    onClick(event: MouseEvent): void {
        console.info('click', this.avatarUrl, event);
    }
}
