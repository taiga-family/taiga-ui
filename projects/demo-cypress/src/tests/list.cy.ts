import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiRoot} from '@taiga-ui/core';
import {TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiList, TuiRoot],
    template: `
        <tui-root>
            <section style="inline-size: 18rem; padding: 1rem">
                <ul
                    style="--tui-list-marker: #70b6f6"
                    tuiList
                >
                    <li>List item</li>
                    <li>Another list item</li>
                    <li>
                        <div>Block title</div>
                        <div>Block subtitle</div>
                    </li>
                    <li>
                        <p>
                            This item uses
                            <strong>nested tags</strong>
                            inside which should not break
                        </p>
                        <p>Subtitle</p>
                    </li>
                </ul>

                <ol tuiList>
                    <!-- prettier-ignore -->
                    <li>First level
                        <ol tuiList>
                            <li>Second level</li>
                            <li><span>Second level</span>
                                <ol tuiList>
                                    <li>Third level</li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <p>Numbered title</p>
                        <p>Numbered subtitle</p>
                    </li>
                    <li>List item</li>
                </ol>
            </section>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestList {}

describe('List', () => {
    it('supports block content without changing nested list spacing', () => {
        cy.mount(TestList);

        cy.get('section').compareSnapshot('list-with-block-content');
        cy.get('section')
            .invoke('attr', 'dir', 'rtl')
            .compareSnapshot('list-with-block-content-rtl');
    });
});
