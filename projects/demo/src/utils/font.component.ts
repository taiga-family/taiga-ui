import {ClipboardModule} from '@angular/cdk/clipboard';
import {isPlatformServer} from '@angular/common';
import {Component, computed, inject, input, PLATFORM_ID, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocCopy} from '@taiga-ui/addon-doc';
import {TuiTable} from '@taiga-ui/addon-table';
import {tuiInjectElement, TuiPlatform} from '@taiga-ui/cdk';

@Component({
    selector: 'tr[tuiFont]',
    imports: [ClipboardModule, TuiDocCopy, TuiTable],
    template: `
        <td tuiTd><ng-content /></td>
        <td tuiTd>
            <tui-doc-copy [cdkCopyToClipboard]="tuiFont()">
                {{ tuiFont() }}
            </tui-doc-copy>
        </td>
        <td tuiTd>{{ weight() }}</td>
        <td tuiTd>{{ styles().fontSize }}</td>
        <td tuiTd>{{ styles().lineHeight }} ({{ ratio() }})</td>
    `,
    styles: `
        [tuiTd]:first-child {
            font: inherit;
        }

        :host-context(tui-root._mobile) {
            display: grid;
            box-shadow: inset 0 0 0 1px var(--tui-border-normal);
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto 1fr 1fr;
            margin-bottom: -1px;
            clip-path: inset(0 0 1px 0);

            &:last-child {
                margin-bottom: 1rem;
                clip-path: none;
            }

            [tuiTd] {
                background: none;
                border: none;

                &:nth-child(1) {
                    block-size: auto;
                    grid-column: span 3;
                    background: var(--tui-background-neutral-1);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                &:nth-child(2) {
                    block-size: auto;
                    grid-column: span 3;
                    text-align: center;

                    --tui-background-base: var(--tui-background-base-alt);
                }
            }
        }
    `,
    changeDetection,
    host: {'[style.font]': '`var(${tuiFont()})`'},
})
export class TuiFont {
    public readonly tuiFont = input('');

    protected readonly el = tuiInjectElement();
    protected readonly platform = inject(TuiPlatform);
    protected readonly styles = isPlatformServer(inject(PLATFORM_ID))
        ? signal(this.el.style)
        : computed((_ = this.tuiFont(), __ = this.platform.tuiPlatform()) =>
              getComputedStyle(this.el),
          );

    protected readonly weight = computed((weight = this.styles().fontWeight) => {
        switch (weight) {
            case '400':
                return 'Regular';
            case '700':
                return 'Bold';
            default:
                return weight;
        }
    });

    protected readonly ratio = computed(({fontSize, lineHeight} = this.styles()) =>
        (Number.parseInt(lineHeight) / Number.parseInt(fontSize)).toFixed(2),
    );
}
