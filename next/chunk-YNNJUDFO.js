import"./chunk-42JZD6NG.js";var i=`<p>Change the viewport of this window to see changes in breakpoint</p>

<table class="tui-space_top-4">
    <thead>
        <tr>
            <th>CSS</th>
            <th>Service</th>
        </tr>
    </thead>
    <tbody>
        <td>
            <div class="mobile">Mobile</div>
            <div class="desktop-small">Desktop small</div>
            <div class="desktop-large">Desktop large</div>
        </td>
        @if (breakpoint$ | async; as breakpoint) {
            <td>
                @if (breakpoint === 'mobile') {
                    <div>Mobile</div>
                }
                @if (breakpoint === 'desktopSmall') {
                    <div>Desktop small</div>
                }
                @if (breakpoint === 'desktopLarge') {
                    <div>Desktop large</div>
                }
            </td>
        }
    </tbody>
</table>
`;export{i as default};
