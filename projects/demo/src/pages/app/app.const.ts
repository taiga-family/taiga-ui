import {type TUI_USED_ICONS} from '../../../used-icons';

export const SEE_ALSO_GROUPS: ReadonlyArray<readonly string[]> = [
    ['Tooltip', 'Hint', 'HintManual', 'HintPointer'],
    ['LineChart', 'LineDaysChart'],
    ['Input', 'Textarea', 'InputChip'],
    ['InputDate', 'InputDateRange', 'InputMonth', 'InputDateTime', 'InputTime'],
    ['InputNumber', 'InputSlider', 'InputRange', 'Range', 'Slider'],
    ['InputCard', 'InputCardGroup'],
    ['Calendar', 'CalendarRange', 'MobileCalendar', 'CalendarMonth'],
    ['InputNumber', 'Money'],
    ['InputPhone', 'InputPhoneInternational'],
    ['Button', 'ButtonGroup', 'Link'],
    ['Checkbox', 'Radio', 'Switch', 'Block', 'Label'],
    ['Accordion', 'Expand'],
    ['ComboBox', 'InputChip', 'Select', 'ButtonSelect'],
    ['Badge', 'BadgedContent', 'Tag'],
    ['Dropdown', 'DropdownSelection', 'DropdownHover', 'DropdownContext', 'DropdownOpen'],
    ['ProgressBar', 'ProgressCircle', 'ProgressSegmented', 'Loader'],
    ['Preview', 'PdfViewer'],
    ['Table', 'TablePagination', 'TableFilters'],
    ['SheetDialog', 'Dialog', 'BottomSheet'],
];

export const DOC_PAGES_ICONS: Record<string, (typeof TUI_USED_ICONS)[number]> = {
    Information: '@tui.info',
    'Getting Started': '@tui.rocket',
    'AI tools': '@tui.sparkles',
    Documentation: '@tui.file-code-corner',
    Components: '@tui.puzzle',
    Form: '@tui.form',
    Layout: '@tui.layout-panel-left',
    Navigation: '@tui.compass',
    Charts: '@tui.chart-pie',
    Tools: '@tui.hammer',
};
