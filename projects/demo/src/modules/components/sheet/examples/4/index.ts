import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElasticStickyDirective} from '@taiga-ui/addon-mobile';
import {TuiButtonDirective, TuiLink} from '@taiga-ui/core';
import type {TuiSheetOptions} from '@taiga-ui/legacy';
import {TuiSheetModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiSheetModule, TuiElasticStickyDirective, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected elastic = 1;

    protected readonly options: Partial<TuiSheetOptions> = {
        stops: ['12rem'],
    };

    protected get transform(): string {
        return `scale(${this.elastic * this.elastic})`;
    }

    protected toggle(): void {
        this.elastic = 1;
        this.open = !this.open;
    }

    protected onElastic(elastic: number): void {
        this.elastic = elastic;
    }
}
