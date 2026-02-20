import"./chunk-HU6DUUP4.js";var i=`<p>Component with a static text...</p>
<tui-icon
    tuiHintDirection="end"
    tuiTooltip="Supports basic <strong>HTML</strong>"
/>
<p>
    ...or any custom HTML or logic with
    <code>PolymorpheusContent</code>
    :
</p>
<tui-icon
    tuiHintDirection="bottom-end"
    [tuiTooltip]="tooltip"
/>
<p class="wrapping-tooltip">
    Example of wrapping tooltip
    <tui-icon
        tuiHintDirection="bottom-end"
        [tuiTooltip]="tooltip"
    />
</p>

<ng-template #tooltip>
    @let isLoading = (isLoading$ | async)!;
    <tui-loader
        size="s"
        class="tooltip"
        [inheritColor]="true"
        [loading]="isLoading"
    >
        {{ isLoading ? '' : 'Error 502: Bad Gateway' }}
    </tui-loader>
</ng-template>
`;export{i as default};
