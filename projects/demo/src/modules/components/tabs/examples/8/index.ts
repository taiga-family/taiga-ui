import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {Routes} from '@angular/router';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'example-1',
    template: 'example-1',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Nav1 {}

@Component({
    standalone: true,
    selector: 'example-2',
    template: 'example-2',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Nav2 {}

@Component({
    standalone: true,
    selector: 'example-3',
    template: 'example-3',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Nav3 {}

@Component({
    standalone: true,
    selector: 'example-4',
    template: 'example-4',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Nav4 {}

@Component({
    standalone: true,
    selector: 'example-5',
    template: 'example-5',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Nav5 {}

export const routes: Routes = [
    {
        path: '',
        component: Nav1,
    },
    {
        path: 'nav-1',
        component: Nav1,
    },
    {
        path: 'nav-2',
        component: Nav2,
    },
    {
        path: 'nav-3',
        component: Nav3,
    },
    {
        path: 'nav-4',
        component: Nav4,
    },
    {
        path: 'nav-5',
        component: Nav5,
    },
];

@Component({
    standalone: true,
    imports: [NgForOf, RouterLink, RouterLinkActive, RouterOutlet, TuiTabs],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly urls = ['nav-1', 'nav-2', 'nav-3', 'nav-4', 'nav-5'];
}
