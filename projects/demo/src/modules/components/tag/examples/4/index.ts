import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTagModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiTagModule, NgForOf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected tags: readonly string[] = [
        'Taiga UI',
        'is an open-source library',
        'for awesome people',
    ];

    protected handleTagEdited(newCaption: string, currentIndex: number): void {
        this.tags = this.tags
            .map((caption, index) => (index === currentIndex ? newCaption : caption))
            .filter(Boolean);
    }
}
