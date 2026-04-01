import"./chunk-HU6DUUP4.js";var a=`<label
    tuiBlock
    tuiTheme="dark"
>
    <input
        tuiCheckbox
        type="checkbox"
        [(ngModel)]="show"
    />
    Show more content
</label>
<tui-bottom-sheet [stops]="['9.5rem', '18.5rem', '100%']">
    <header class="header">
        Taiga UI
        <a
            href="https://github.com/taiga-family/taiga-ui"
            iconStart="@tui.star"
            rel="noopener noreferrer"
            size="m"
            target="_blank"
            tuiButton
        >
            Give us a Star
        </a>
    </header>
    @if (show) {
        <img
            alt=""
            src="assets/images/taiga-family.png"
            [style.inline-size.%]="100"
            [style.margin-block-start.rem]="2"
        />
        @for (_ of '-'.repeat(20); track $index) {
            <p>All work and no play makes Jack a dull boy</p>
        }
        <tui-accordion>
            <button tuiAccordion>Show more</button>
            <tui-expand>All work and no play makes Jack a dull boy</tui-expand>
        </tui-accordion>
    }
</tui-bottom-sheet>
`;export{a as default};
