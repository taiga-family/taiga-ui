import"./chunk-HU6DUUP4.js";var r=`<tui-scrollbar>
    <cdk-virtual-scroll-viewport
        #viewport
        appendOnly
        tuiScrollable
        class="viewport tui-zero-scrollbar"
        [itemSize]="45"
        [maxBufferPx]="500"
        [minBufferPx]="400"
    >
        <table tuiTable>
            <thead>
                <tr [style.inset-block-start.px]="-(viewport.getOffsetToRenderedContentStart() || 0)">
                    <th
                        tuiTh
                        [sorter]="'name' | tuiSorter"
                        [sticky]="true"
                    >
                        Name
                    </th>
                    <th
                        tuiTh
                        [sorter]="'dob' | tuiSorter"
                        [sticky]="true"
                    >
                        Date of Birth
                    </th>
                    <th
                        tuiTh
                        [sorter]="ageSorter"
                        [sticky]="true"
                    >
                        Age
                    </th>
                </tr>
            </thead>
            <tbody tuiTbody>
                <tr *cdkVirtualFor="let item of data | tuiTableSort">
                    <td tuiTd>{{ item.name }}</td>
                    <td tuiTd>{{ item.dob }}</td>
                    <td tuiTd>{{ getAge(item) }}</td>
                </tr>
            </tbody>
        </table>
    </cdk-virtual-scroll-viewport>
</tui-scrollbar>
`;export{r as default};
