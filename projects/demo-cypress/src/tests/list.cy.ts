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
                    <li>
                        This inline list item is long enough to wrap onto multiple lines
                        without losing alignment
                    </li>
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
                            <li>
                                Second level with inline text long enough to wrap onto
                                multiple lines
                            </li>
                            <li><span>Second level</span>
                                <ol tuiList>
                                    <li>
                                        Third level
                                        <ol tuiList>
                                            <li>Fourth level</li>
                                        </ol>
                                    </li>
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
    it('aligns inline and block content at every nesting level', () => {
        cy.mount(TestList);

        cy.get('section').compareSnapshot('list-nested-content-alignment');
        cy.get('section')
            .invoke('attr', 'dir', 'rtl')
            .compareSnapshot('list-nested-content-alignment-rtl');
    });
});
