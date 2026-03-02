import"./chunk-HU6DUUP4.js";var e=`<tui-accordion class="accordion">
    @for (group of operations | keyvalue: orderBy; track group) {
        <button
            appearance=""
            iconEnd=""
            tuiAccordion
            tuiCell
        >
            <span tuiTitle>
                <strong>{{ group.key }}</strong>
                <span tuiSubtitle>
                    @if (group.value.length) {
                        {{ group.value.length }} operations \u2022 Total:
                        {{ sum(group.value) | tuiAmount: '$' : 'start' }}
                    } @else {
                        No operations so far
                    }
                </span>
            </span>
        </button>
        <tui-expand [style.display]="group.value.length ? null : 'none'">
            @for (operation of group.value; track operation) {
                <div tuiCell>
                    <div
                        [appearance]="operation.sum && operation.sum > 0 ? '' : 'negative'"
                        [tuiAvatar]="getIcon(operation)"
                    ></div>
                    <span tuiTitle>
                        <strong>{{ operation.title }}</strong>
                        @if (operation.subtitle) {
                            <span tuiSubtitle>
                                {{ operation.subtitle }}
                            </span>
                        }
                    </span>
                    @if (operation.sum) {
                        <span
                            tuiTitle
                            [style.color]="operation.sum > 0 ? 'var(--tui-text-positive)' : null"
                        >
                            {{ operation.sum | tuiAmount: '$' : 'start' }}
                            <span tuiSubtitle>{{ operation.time }}</span>
                        </span>
                    } @else {
                        <button
                            appearance="secondary"
                            tuiButton
                            type="button"
                        >
                            Retry
                        </button>
                    }
                </div>
            }
        </tui-expand>
    }
</tui-accordion>
`;export{e as default};
