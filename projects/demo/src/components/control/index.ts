import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import type {AbstractControl} from '@angular/forms';
import {DemoRoute} from '@demo/routes';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import type {TuiLooseUnion} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocControl]',
    imports: [NgIf, TuiDocAPIItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocControl {
    protected readonly routes = DemoRoute;

    @Input()
    public hiddenOptions: Array<TuiLooseUnion<keyof AbstractControl>> = [];

    public readonly = false;
    public disabled = false;
    public invalid = false;
}
