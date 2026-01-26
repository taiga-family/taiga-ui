# Import Map - Package Exports Reference

> **Critical**: Always import from the correct package. This is the #1 cause of compilation errors.

## @taiga-ui/core

**Components & Directives:**

```typescript
(TuiRoot,
  TuiButton,
  TuiLink,
  TuiIcon,
  TuiTitle,
  TuiSubtitle,
  TuiDropdown,
  TuiDataList,
  TuiOptGroup,
  TuiOption,
  TuiAppearance,
  TuiLabel,
  TuiError,
  TuiTextfield,
  TuiSelect,
  TuiMultiSelect,
  TuiGroup,
  TuiChip,
  TuiSurface,
  TuiTooltip,
  TuiHint,
  TuiDialog,
  TuiAlert,
  TuiLoader,
  TuiNotification,
  TuiExpand,
  TuiScrollbar);
```

**Services:**

```typescript
(TuiAlertService, TuiDialogService, TuiBreakpointService);
```

**Pipes:**

```typescript
(TuiFormatNumberPipe, TuiFormatDatePipe, TuiMapperPipe);
```

**Types:**

```typescript
(TuiHandler,
  TuiIdentityMatcher,
  TuiStringHandler,
  TuiContext,
  TuiSizeS,
  TuiSizeM,
  TuiSizeL,
  TuiSizeXL,
  TuiHorizontalDirection,
  TuiVerticalDirection,
  TuiOrientation);
```

---

## @taiga-ui/kit

**Components & Directives:**

```typescript
(TuiAvatar,
  TuiBadge,
  TuiBadgedContent,
  TuiCheckbox,
  TuiRadio,
  TuiSwitch,
  TuiFilter,
  TuiAccordion,
  TuiCarousel,
  TuiTabs,
  TuiTabsWithMore,
  TuiStepper,
  TuiCalendar,
  TuiCalendarRange,
  TuiCalendarMonth,
  TuiInputDate,
  TuiInputDateRange,
  TuiInputTime,
  TuiInputDateTime,
  TuiInputNumber,
  TuiInputPhone,
  TuiInputCard,
  TuiInputPassword,
  TuiInputTag,
  TuiInputSlider,
  TuiTextarea,
  TuiComboBox,
  TuiMultiSelectOption,
  TuiDataListWrapper,
  TuiSegmented,
  TuiPagination,
  TuiProgressBar,
  TuiProgressCircle,
  TuiProgressSegmented,
  TuiSlider,
  TuiRange,
  TuiRating,
  TuiToggle,
  TuiFade,
  TuiConnected,
  TuiElasticContainer,
  TuiLineClamp,
  TuiItemsWithMore,
  TuiFiles,
  TuiMarkerIcon,
  TuiPin,
  TuiBlock,
  TuiSensitive);
```

**Directives:**

```typescript
(TuiActionBar, TuiLet, TuiMedia);
```

**Pipes:**

```typescript
(TuiFilterByInputPipe, TuiStringifyPipe);
```

---

## @taiga-ui/cdk

**Types & Classes:**

```typescript
(TuiDay,
  TuiMonth,
  TuiYear,
  TuiTime,
  TuiDayRange,
  TuiDayOfWeek,
  TuiDayLike,
  TuiMonthLike,
  TuiTimeMode,
  TuiTimeLike,
  TuiKeySteps,
  TuiContextWithImplicit,
  TuiItem);
```

**Directives:**

```typescript
(TuiLet, TuiRepeatTimes, TuiFor, TuiAutoFocus, TuiActiveZone, TuiObscured, TuiSwipe, TuiPan, TuiZoom, TuiDragAndDrop);
```

**Services & Tokens:**

```typescript
(TuiDestroyService, TuiIdService);
```

**Functions:**

```typescript
(tuiArrayToggle,
  tuiPure,
  tuiIsPresent,
  tuiIsNumber,
  tuiIsString,
  tuiDefaultSort,
  tuiClamp,
  tuiInRange,
  tuiRound,
  tuiSum,
  tuiQuantize);
```

**Observables:**

```typescript
(tuiTypedFromEvent, tuiWatch, tuiControlValue, tuiQueryListChanges);
```

---

## @taiga-ui/experimental

**Components:**

```typescript
TuiAccordion (new version), TuiChevron, TuiNavigation, TuiComment,
TuiPin (new), TuiBadge (new), TuiCell (moved to layout)
```

---

## @taiga-ui/layout

**Components:**

```typescript
(TuiAppBar,
  TuiCell,
  TuiCardLarge,
  TuiCardMedium,
  TuiHeader,
  TuiNavigation,
  TuiBlockStatus,
  TuiComment,
  TuiDynamicHeader);
```

**Directives:**

```typescript
(TuiAppBarBack, TuiDynamicHeaderAnchor, TuiDynamicHeaderContainer);
```

---

## @taiga-ui/addon-commerce

**Components:**

```typescript
(TuiInputCard, TuiInputCVC, TuiInputExpire, TuiThumbnailCard, TuiMoney);
```

**Pipes:**

```typescript
(TuiAmountPipe, TuiCurrencyPipe, TuiFormatCardPipe);
```

**Types:**

```typescript
(TuiCurrencyVariants, TuiPaymentSystem);
```

---

## @taiga-ui/addon-charts

**Components:**

```typescript
(TuiAxes,
  TuiBarChart,
  TuiBarSet,
  TuiLineChart,
  TuiLineDaysChart,
  TuiPieChart,
  TuiRingChart,
  TuiArcChart,
  TuiLegendItem);
```

---

## @taiga-ui/addon-table

**Components:**

```typescript
(TuiTable, TuiThead, TuiTbody, TuiTr, TuiTh, TuiTd, TuiReorder);
```

**Directives:**

```typescript
(TuiHead, TuiCell, TuiRow, TuiSortable, TuiResizable);
```

---

## Angular Common

**Common Modules for Templates:**

```typescript
// Required for structural directives in templates
import {NgIf, NgFor, NgSwitch, NgClass, NgStyle} from '@angular/common';

// OR use Angular's built-in control flow (Angular 17+)
@if (condition) { }
@for (item of items; track item.id) { }
```

**Forms:**

```typescript
// Required for [(ngModel)]
import {FormsModule} from '@angular/forms';

// Required for reactive forms
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
```

---

## Common Import Mistakes

❌ **Wrong Package:**

```typescript
import {TuiButton} from '@taiga-ui/kit'; // ERROR!
```

✅ **Correct:**

```typescript
import {TuiButton} from '@taiga-ui/core';
```

---

❌ **Non-existent Export:**

```typescript
import {TuiOption} from '@taiga-ui/kit'; // ERROR! Doesn't exist
```

✅ **Correct:**

```typescript
import {TuiOption} from '@taiga-ui/core';
```

---

❌ **Missing FormsModule:**

```typescript
// Template has [(ngModel)] but no FormsModule in imports
@Component({
  imports: [TuiTextfield],  // ERROR!
})
```

✅ **Correct:**

```typescript
@Component({
  imports: [FormsModule, TuiTextfield],  // ✓
})
```
