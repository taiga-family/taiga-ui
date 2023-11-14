import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';

@Pipe({
    name: `tuiIcon`,
})
export class TuiIconPipe implements PipeTransform {
    constructor(
        @Inject(TUI_ICON_RESOLVER) private readonly resolver: TuiStringHandler<string>,
    ) {}

    transform(icon: string): string {
        return icon && this.resolver(icon);
    }
}
