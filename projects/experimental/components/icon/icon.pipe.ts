import {Inject, Pipe, PipeTransform, Provider} from '@angular/core';
import {tuiCreateTokenFromFactory, TuiStringHandler} from '@taiga-ui/cdk';

export const TUI_ICON_RESOLVER = tuiCreateTokenFromFactory<TuiStringHandler<string>>(
    () => icon => `/assets/taiga-ui/icons/${icon}.svg`,
);

export function tuiIconResolverProvider(useValue: TuiStringHandler<string>): Provider {
    return {
        provide: TUI_ICON_RESOLVER,
        useValue,
    };
}

@Pipe({
    name: `tuiIcon`,
})
export class TuiIconPipe implements PipeTransform {
    constructor(
        @Inject(TUI_ICON_RESOLVER) private readonly resolver: TuiStringHandler<string>,
    ) {}

    transform(icon: string): string {
        return this.resolver(icon);
    }
}
