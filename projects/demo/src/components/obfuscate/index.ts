import {CommonModule} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {TUI_OBFUSCATE_OPTION} from '@taiga-ui/cdk';
import {TuiLink, TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocObfuscate]',
    imports: [CommonModule, RouterLink, TuiDocAPIItem, TuiLink, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocObfuscate implements OnInit {
    protected readonly routes = DemoRoute;

    public readonly obfuscateOption = inject(TUI_OBFUSCATE_OPTION);

    public recipe = signal('city');
    public displayOption = signal({});

    public ngOnInit(): void {
        const recipes: any = this.obfuscateOption.recipes;
        const opt: any = {
            default: this.obfuscateOption.default.toString(),
            recipes: {},
        };

        Object.keys(recipes).forEach((item): void => {
            opt.recipes[item] = recipes[item].toString();
        });

        this.displayOption.set(opt);
    }
}
