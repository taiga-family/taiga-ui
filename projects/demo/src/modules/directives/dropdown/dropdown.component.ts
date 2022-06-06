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
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.txt');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.txt');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
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
