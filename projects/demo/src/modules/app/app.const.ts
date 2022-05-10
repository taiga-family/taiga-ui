import {InjectionToken} from '@angular/core';

export const SEE_ALSO_GROUPS: ReadonlyArray<readonly string[]> = [
    ['Tooltip', 'Hint', 'ManualHint'],
    [
        'TextArea',
        'InputDate',
        'InputCopy',
        'InputDateRange',
        'InputNumber',
        'InputPassword',
        'InputSecure',
        'InputPhone',
        'InputTag',
        'InputCount',
        'InputRange',
        'InputSlider',
        'Range',
        'Slider',
        'Group',
        'PrimitiveTextfield',
    ],
    ['LineChart', 'LineDaysChart'],
    ['InputNumber', 'Money'],
    ['Calendar', 'CalendarMonth', 'InputMonthRange'],
    ['InputPhone', 'InputPhoneInternational'],
    ['Button', 'IconButton', 'Action', 'Link'],
    ['CheckboxBlock', 'CheckboxLabeled', 'PrimitiveCheckbox', 'Toggle', 'Checkbox'],
    ['Error', 'FieldError'],
    ['Island', 'Carousel', 'Accordion', 'Expand'],
    ['Calendar', 'MobileCalendar', 'RangeCalendar'],
    ['Radio', 'RadioBlock', 'RadioLabeled', 'RadioList'],
    ['ComboBox', 'MultiSelect', 'Select'],
    ['Badge', 'Tag'],
    ['Notification', 'AlertService'],
    ['Scrollbar', 'ScrollService'],
    ['Dropdown', 'DropdownSelection', 'HostedDropdown'],
];

export const SEE_ALSO = new InjectionToken<ReadonlyArray<readonly string[]>>('SEE_ALSO', {
    factory: () => SEE_ALSO_GROUPS,
});
