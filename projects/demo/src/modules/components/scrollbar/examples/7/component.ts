import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

interface IItem {
    firstName: string;
    lastName: string;
    description: string;
}

@Component({
    selector: `tui-scrollbar-example-7`,
    templateUrl: `./template.html`,
    styleUrls: [`./style.less`],
    changeDetection,
    encapsulation,
})
export class TuiScrollbarExample7Component {
    readonly items: IItem[] = new Array(20).fill(null).map(() => ({
        firstName: `Ivan`,
        lastName: `Ivanov`,
        description: `Adipisci commodi consectetur id iure praesentium quam quisquam unde veniam. Corporis cum dicta distinctio error
            excepturi, impedit quidem veritatis? Cupiditate eos illum ipsum labore, modi omnis repudiandae velit veniam voluptatem.`,
    }));
}
