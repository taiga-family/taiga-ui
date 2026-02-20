import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarousel, TuiPagination} from '@taiga-ui/kit';

@Component({
    imports: [TuiCarousel, TuiPagination],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected index = 0;

    protected readonly itemsCount = 3;

    protected readonly items = [
        {title: 'First', content: 'First content'},
        {title: 'Title #2', content: 'Much more content here so the height is bigger'},
        {title: 'Title III', content: 'Small item again'},
        {title: 'Title four', content: 'Relatively ling content here'},
        {title: 'Fifth item', content: 'Tiny text'},
        {title: '6', content: "That one's short too"},
        {title: 'Lucky 7', content: 'This takes about two lines or so'},
        {title: 'Eighth card', content: 'Almost the last one'},
        {title: 'X', content: 'This is the longest item there is in this list'},
    ];

    protected get rounded(): number {
        return Math.floor(this.index / this.itemsCount);
    }

    protected onIndex(index: number): void {
        this.index = index * this.itemsCount;
    }
}
`;export{i as default};
