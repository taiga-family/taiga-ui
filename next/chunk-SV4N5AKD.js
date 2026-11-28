import"./chunk-LQ6M4NCU.js";var i=`<div>
    <div>
        Using
        <strong>TUI_DATE_FORMAT</strong>
        injection token you can customize numbers formatting.
    </div>
    <div>For example: 10.01.2024</div>
    <div>Can be customized as: 2024/01/10</div>

    <section>
        <h3>Description:</h3>
        <dl>
            <dt>
                <code>mode</code>
            </dt>
            <dd class="date-format">
                active date format (
                <code>'dd/mm/yyyy' | 'mm/dd/yyyy' | 'yyyy/mm/dd'</code>
                )
            </dd>
            <dt>
                <code>separator</code>
            </dt>
            <dd>single-character date's separator (dot, slash etc.)</dd>
        </dl>
    </section>

    <section>
        <h3>Defaults:</h3>
        <ul tuiList="s">
            <li>
                mode =
                <code>dd/mm/yyyy</code>
            </li>
            <li>
                separator =
                <code>.</code>
            </li>
        </ul>
    </section>

    <section>
        <h3>Components that are customizable:</h3>
        <ul tuiList="s">
            <li>
                <a
                    tuiLink
                    [routerLink]="routes.InputDate"
                >
                    TuiInputDate
                </a>
            </li>
            <li>
                <a
                    tuiLink
                    [routerLink]="routes.InputDateRange"
                >
                    TuiInputDateRange
                </a>
            </li>
            <li>
                <a
                    tuiLink
                    [routerLink]="routes.InputDateTime"
                >
                    TuiInputDateTime
                </a>
            </li>
            <li>
                <a
                    tuiLink
                    [routerLink]="routes.InputDateMulti"
                >
                    TuiInputDateMulti
                </a>
            </li>
        </ul>
    </section>
</div>
`;export{i as default};
