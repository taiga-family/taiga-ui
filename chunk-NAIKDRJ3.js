import"./chunk-HU6DUUP4.js";var e=`<section
    tuiCardLarge="compact"
    [tuiCardCollapsed]="collapsed()"
>
    <header tuiHeader="body-m">
        <hgroup tuiTitle>
            <h2>[31344] Error finding account number when executing the deal</h2>
            <p tuiSubtitle>
                Some clients could encounter an error \u201CAccount not found\u201D when selecting the account on the checkout
                screen
            </p>
        </hgroup>
        <aside tuiAccessories>
            <button
                appearance="action-grayscale"
                iconEnd="@tui.copy"
                tuiLink
                type="button"
            >
                237-123-42
            </button>
        </aside>
    </header>
    <div tuiCardRow>
        <div tuiTitle>
            <div tuiSubtitle>Status</div>
            <div>
                <tui-icon icon="@tui.clock" />
                Pending
            </div>
        </div>
        <div tuiTitle>
            <div tuiSubtitle>Unit</div>
            <a
                href="https://github.com/taiga-family/taiga-ui"
                rel="noreferrer"
                target="_blank"
                tuiLink
            >
                Taiga UI
            </a>
        </div>
        <div tuiTitle>
            <div tuiSubtitle>Category</div>
            <div>
                Angular
                <span
                    appearance="neutral"
                    size="s"
                    tuiBadge
                >
                    Open Source
                </span>
            </div>
        </div>
        <button
            appearance="secondary"
            size="s"
            tuiIconButton
            type="button"
            [tuiChevron]="!collapsed()"
            (click)="collapsed.set(!collapsed())"
        >
            Expand
        </button>
    </div>
    <tui-expand [expanded]="!collapsed()">
        <table tuiTable>
            <thead>
                <tr>
                    <th tuiTh>Project</th>
                    <th tuiTh>Version</th>
                    <th tuiTh>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td tuiTd><b>Taiga UI</b></td>
                    <td tuiTd>4.32.0</td>
                    <td tuiTd>Angular UI kit for awesome people</td>
                </tr>
                <tr>
                    <td tuiTd><b>Maskito</b></td>
                    <td tuiTd>3.5.0</td>
                    <td tuiTd>Holy Grail of input masking for the Web</td>
                </tr>
            </tbody>
        </table>
    </tui-expand>
</section>
<section tuiCardLarge="compact">I'm just another card</section>
`;export{e as default};
