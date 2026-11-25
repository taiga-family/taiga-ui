import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {
    TUI_HINT_DIRECTIONS,
    TuiHint,
    type TuiHintDirection,
    TuiRoot,
} from '@taiga-ui/core';

type HintHostShape = 'square' | 'tall' | 'wide';

@Component({
    selector: 'hint-placement-fixture',
    imports: [TuiHint, TuiRoot],
    template: `
        <tui-root>
            <div class="stage">
                <span
                    tuiHint="Long text for the hint that spans multiple lines so that we can see how it is placed around a host in all directions"
                    [attr.data-shape]="shape()"
                    [tuiHintCentered]="centered()"
                    [tuiHintDirection]="direction()"
                    [tuiHintManual]="true"
                ></span>
            </div>
        </tui-root>
    `,
    styles: `
        .stage {
            position: fixed;
            inset: 0;
            display: grid;
            place-items: center;
        }

        [data-shape] {
            inline-size: 1.5rem;
            block-size: 1.5rem;
            background: var(--tui-background-accent-1);
        }

        [data-shape='wide'] {
            inline-size: 5rem;
            block-size: 3rem;
        }

        [data-shape='tall'] {
            block-size: 5rem;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HintPlacementFixture {
    public readonly shape = input.required<HintHostShape>();
    public readonly direction = input.required<TuiHintDirection>();
    public readonly centered = input.required<boolean>();
}

describe('Hint placement', () => {
    const shapes: readonly HintHostShape[] = ['square', 'wide', 'tall'];

    beforeEach(() => cy.viewport(1000, 480));

    for (const shape of shapes) {
        for (const centered of [true, false]) {
            for (const direction of TUI_HINT_DIRECTIONS) {
                const name = `${shape}-${direction}-centered-${centered}`;

                it(name, () => {
                    cy.mount(HintPlacementFixture, {
                        componentProperties: {shape, centered, direction},
                    }).then(() => cy.compareSnapshot(name));
                });
            }
        }
    }
});
