import {DOCUMENT} from '@angular/common';
import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-navigation-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiNavigationExample2 {
    color = false;

    readonly initial =
        this.doc.head
            .querySelector('meta[name="theme-color"]')
            ?.getAttribute('content') || '';

    constructor(@Inject(DOCUMENT) private readonly doc: Document) {}

    onColor(color: boolean): void {
        this.color = color;
        this.doc.body.style.setProperty('--tui-theme-color', color ? 'purple' : 'black');
        this.doc.head
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', color ? 'purple' : this.initial);
    }
}
