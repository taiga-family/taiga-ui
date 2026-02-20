import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

import Example1 from './1';
import Example2 from './2';
import Example3 from './3';

@Component({
    imports: [Example1, Example2, Example3, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly example1 = {
        HTML: import('./1/index.html'),
        Typescript: import('./1/index.ts?raw', {with: {loader: 'text'}}),
        Routes: import('./routes.ts?raw', {with: {loader: 'text'}}),
        Dialog: import('./1/dialog.component.ts?raw', {with: {loader: 'text'}}),
    };

    protected readonly example2 = {
        HTML: import('./2/index.html'),
        TypeScript: import('./2/index.ts?raw', {with: {loader: 'text'}}),
        Routes: import('./routes.ts?raw', {with: {loader: 'text'}}),
        Dialog: import('./2/dialog.component.ts?raw', {with: {loader: 'text'}}),
    };

    protected readonly example3 = {
        HTML: import('./3/index.html'),
        TypeScript: import('./3/index.ts?raw', {with: {loader: 'text'}}),
        Routes: import('./routes.ts?raw', {with: {loader: 'text'}}),
        Dialog: import('./3/dialog.component.ts?raw', {with: {loader: 'text'}}),
    };
}
`;export{o as default};
