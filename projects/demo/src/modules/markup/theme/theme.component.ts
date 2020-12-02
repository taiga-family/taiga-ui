import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'theme',
    templateUrl: './theme.template.html',
    styleUrls: ['./theme.style.less'],
    changeDetection,
})
export class ThemeComponent {
    readonly tabs = ['Taiga UI', 'Bootstrap', 'Material Design'];

    activeItem = 0;

    value = '';

    get isTinkoff(): boolean {
        return this.activeItem === 0;
    }

    get isBootstrap(): boolean {
        return this.activeItem === 1;
    }

    get isMaterial(): boolean {
        return this.activeItem === 2;
    }

    get size(): 'l' | 's' {
        return !this.isBootstrap ? 'l' : 's';
    }

    get placeholder(): string {
        return !this.isBootstrap ? 'Email' : 'you@example.com';
    }

    get label(): string {
        return !this.isBootstrap ? '' : 'Email';
    }
}
