import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidthT,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-dropdown',
    templateUrl: './dropdown.template.html',
    styleUrls: ['./dropdown.style.less'],
    changeDetection,
})
export class ExampleTuiDropdownComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    tuiDropdownMinHeight = DEFAULT_MIN_HEIGHT;

    tuiDropdownMaxHeight = DEFAULT_MAX_HEIGHT;

    tuiDropdownSided = false;

    alignVariants: TuiHorizontalDirection[] = ['right', 'left'];

    tuiDropdownAlign = this.alignVariants[0];

    readonly dropdownDirectionVariants: readonly TuiVerticalDirection[] = [
        'top',
        'bottom',
    ];

    tuiDropdownDirection: TuiVerticalDirection | null = null;

    readonly tuiDropdownLimitWidthVariants: readonly TuiDropdownWidthT[] = [
        'fixed',
        'min',
        'auto',
    ];

    tuiDropdownLimitWidth: TuiDropdownWidthT = this.tuiDropdownLimitWidthVariants[0];

    open = false;

    onClick(): void {
        this.open = !this.open;
    }

    onObscured(obscured: boolean): void {
        if (obscured) {
            this.open = false;
        }
    }

    onActiveZone(active: boolean): void {
        this.open = active && this.open;
    }
}
