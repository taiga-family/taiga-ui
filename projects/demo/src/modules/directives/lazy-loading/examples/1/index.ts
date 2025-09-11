import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiImgLazyLoading} from '@taiga-ui/kit';

@Component({
    imports: [NgForOf, TuiImgLazyLoading],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly array = Array.from(
        {length: 100},
        (_, i) => `https://picsum.photos/${250 + i}/200`,
    );
}
