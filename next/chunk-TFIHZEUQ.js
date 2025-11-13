import"./chunk-42JZD6NG.js";var t=`<p class="tui-space_top-0">
    Use
    <code>TUI_FIRST_DAY_OF_WEEK</code>
    injection token to change start day of the week (Monday by default).
</p>

<tui-doc-code [code]="provideFirstDayOfWeekToken" />

<section>
    <h3>This token can customize the following components:</h3>
    <ul class="tui-list tui-list_small">
        @for (component of customizableComponentsViaThisToken; track component) {
            <li class="tui-list__item">
                <a
                    tuiLink
                    [fragment]="component.fragment"
                    [routerLink]="component.link"
                >
                    {{ component.name }}
                </a>
            </li>
        }
    </ul>
</section>
`;export{t as default};
