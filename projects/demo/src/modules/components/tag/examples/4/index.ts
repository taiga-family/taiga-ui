import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-tag-example-4`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiTagExample4 {
    tags: readonly string[] = [
        `Taiga UI`,
        `is an open-source library`,
        `for awesome people`,
    ];

    handleTagEdited(newCaption: string, currentIndex: number): void {
        this.tags = this.tags
            .map((caption, index) => (index === currentIndex ? newCaption : caption))
            .filter(Boolean);
    }
}
