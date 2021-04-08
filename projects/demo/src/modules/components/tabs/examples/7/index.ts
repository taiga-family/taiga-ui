import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-tabs-example-7',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTabsExample7 {
    activeItemIndex = 0;

    items = [{ text: 'sales'}, { text: 'settings'}, { text: 'news'}, { text: 'test'}];

    constructor(
        @Inject(Router) private readonly router: Router,
    ) {}

    filter(_filter: string) {
        this.items = [{ text: 'sales'}, { text: 'news'}, { text: 'test'}];
        this.router.navigate(['navigation/tabs/news']);
        // setTimeout(() => {
        //     this.items = [{ text: 'sales'}, { text: 'news'}, { text: 'test'}];
        //     this.cdr.markForCheck()
        // }, 1000)
    }
}
