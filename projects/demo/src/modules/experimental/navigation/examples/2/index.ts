import {DOCUMENT} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-navigation-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiNavigationExample2 {
    private readonly doc = inject(DOCUMENT);

    color = false;

    readonly initial =
        this.doc.head
            .querySelector('meta[name="theme-color"]')
            ?.getAttribute('content') || '';

    onColor(color: boolean): void {
        this.color = color;
        this.doc.body.style.setProperty('--tui-theme-color', color ? 'purple' : 'black');
        this.doc.head
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', color ? 'purple' : this.initial);
    }
}
