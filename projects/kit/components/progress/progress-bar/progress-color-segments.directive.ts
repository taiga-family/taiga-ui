import {computed, Directive, inject, input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    WA_MUTATION_OBSERVER_INIT,
    WaMutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {map} from 'rxjs';

@Directive({
    selector: 'progress[tuiProgressBar][tuiProgressColorSegments]',
    providers: [
        WaMutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {
                attributeOldValue: true,
            },
        },
    ],
    host: {'[style.--tui-progress-color]': 'color()'},
})
export class TuiProgressColorSegments {
    private readonly el = tuiInjectElement<HTMLProgressElement>();
    private readonly position = toSignal(
        inject(WaMutationObserverService, {self: true}).pipe(map(() => this.el.position)),
        {initialValue: this.el.position},
    );

    protected readonly color = computed(() => {
        const colors = this.colors();
        const position = this.position();

        if (!colors.length || position <= 0) {
            return null;
        }

        const colorsString = colors.reduce(
            (acc, color, i) =>
                `${acc}, ${color} calc(${i} / ${colors.length} * 100% / ${position}) calc(${i + 1} / ${colors.length} * 100% / ${position})`,
            '',
        );

        return `linear-gradient(to right${colorsString})`;
    });

    public readonly colors = input<readonly string[]>([], {
        alias: 'tuiProgressColorSegments',
    });
}
