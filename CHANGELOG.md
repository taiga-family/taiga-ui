# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.0.1](https://github.com/taiga-family/taiga-ui/compare/v4.0.0...v4.0.1) (2024-08-12)

### 🐞 Bug Fixes

- **cdk:** redundant assert log if hours are greater than 23
  ([#8448](https://github.com/taiga-family/taiga-ui/issues/8448))
  ([c3a7e49](https://github.com/taiga-family/taiga-ui/commit/c3a7e4923eb958154e90b6bef7bda582ba8427fd))
- **core:** `Root` fix background ([#8468](https://github.com/taiga-family/taiga-ui/issues/8468))
  ([bbbb82e](https://github.com/taiga-family/taiga-ui/commit/bbbb82ece14906531fc140a8063bf0fc0ba217de))
- **core:** add `type=button` to `textfield` for ignore submit event
  ([#8455](https://github.com/taiga-family/taiga-ui/issues/8455))
  ([4700e5d](https://github.com/taiga-family/taiga-ui/commit/4700e5d143f33ca5af175be40cffea3d55f8241d))
- **kit:** `TuiDataListGroupWrapperComponent` is not assignable to the same property in base type
  ([#8461](https://github.com/taiga-family/taiga-ui/issues/8461))
  ([933be65](https://github.com/taiga-family/taiga-ui/commit/933be658d84d426d5b71e6535d808aa3145a1293))

## [4.0.0](https://github.com/taiga-family/taiga-ui/compare/v4.0.0-rc.10...v4.0.0) (2024-08-09)

- Update to Angular 16 (https://github.com/taiga-family/taiga-ui/pull/6966).
- Update supported browser versions (https://github.com/taiga-family/taiga-ui/pull/6818).
- Rename **all** entities: drop `Module` / `Component` / `Directive` postfix.
- Use deep entrypoints in **all** imports paths inside packages for microfrontends tree-shaking support.
- **@taiga-ui/legacy** create new package ([#7501](https://github.com/taiga-family/taiga-ui/pull/7501)).
- **@taiga-ui/browserslist-config** create new package (https://github.com/taiga-family/taiga-ui/pull/5344).
- **@taiga-ui/core:**
  - `Textfield` add new component ([#6298](https://github.com/taiga-family/taiga-ui/pull/6298)).
  - `Icon` add new component ([#5872](https://github.com/taiga-family/taiga-ui/pull/5872)). `Icons` add new directive
    ([#6053](https://github.com/taiga-family/taiga-ui/pull/6053)) `Icon` add new pipe
    (https://github.com/taiga-family/taiga-ui/pull/7244).
  - `Icons` new approach **based on mask** ([#7752](https://github.com/taiga-family/taiga-ui/pull/7752),
    [#7658](https://github.com/taiga-family/taiga-ui/pull/7658),
    [#7714](https://github.com/taiga-family/taiga-ui/pull/7714)).
  - `Scrollbar` add mode (https://github.com/taiga-family/taiga-ui/pull/8246).
  - `Notification` simplify to directive (https://github.com/taiga-family/taiga-ui/pull/8168). Add interactive mode
    (https://github.com/taiga-family/taiga-ui/pull/6760).
  - `HintOverflow` add new directive (https://github.com/taiga-family/taiga-ui/pull/8111).
  - `DropdownContext` implement for `IOS` (https://github.com/taiga-family/taiga-ui/pull/7814).
  - `Root` use `Platform` directive (https://github.com/taiga-family/taiga-ui/pull/7931).
  - `Tooltip` are refactored from component to just directive (https://github.com/taiga-family/taiga-ui/pull/7810).
  - `Dropdown` nested no longer needs manual active zone (https://github.com/taiga-family/taiga-ui/pull/7744). BREAKING
    CHANGE: `ActiveZone` is removed from context in favor of close method.
  - `WithDataList` add host directive (https://github.com/taiga-family/taiga-ui/pull/7693).
  - `Appearance` switch to data-mode (https://github.com/taiga-family/taiga-ui/pull/7651).
  - `Maskito` instead `input[tuiMaskAccessor]` directive (https://github.com/taiga-family/taiga-ui/pull/7646).
  - `Alert`, `Dialog` no longer need module imports (https://github.com/taiga-family/taiga-ui/pull/6670).
  - `Loader` add new algorithm to calculate `stroke-width` (https://github.com/taiga-family/taiga-ui/pull/6550).
    `Loader` new animation (https://github.com/taiga-family/taiga-ui/pull/6538).
  - Use `TUI_ANIMATIONS_SPEED` instead `TUI_ANIMATIONS_DURATION` (https://github.com/taiga-family/taiga-ui/pull/6542).
- **@taiga-ui/kit:**
  - `Radio`, `Checkbox`, `Switch` new components based on directives
    ([#5319](https://github.com/taiga-family/taiga-ui/pull/5319),
    [#6929](https://github.com/taiga-family/taiga-ui/pull/6929)).
  - `Sensitive` add new directive ([#5425](https://github.com/taiga-family/taiga-ui/pull/5425),
    [#6491](https://github.com/taiga-family/taiga-ui/pull/6491),
    [#6960](https://github.com/taiga-family/taiga-ui/pull/6960)).
  - `Skeleton` add new directive ([#6934](https://github.com/taiga-family/taiga-ui/pull/6934)).
  - `Segmented` add new component ([#6527](https://github.com/taiga-family/taiga-ui/pull/6527),
    [#7192](https://github.com/taiga-family/taiga-ui/pull/7192)). Tabs refactor and drop `MobileTabs` in favor of
    `Segmented` ([#7047](https://github.com/taiga-family/taiga-ui/pull/7047)).
  - `Fade` add new directive ([#5169](https://github.com/taiga-family/taiga-ui/pull/5169)).
  - `Avatar` add colored icons mode ([#7806](https://github.com/taiga-family/taiga-ui/pull/7806)).
  - `Connected` add directive for `Cell` and `Stepper` ([#8025](https://github.com/taiga-family/taiga-ui/pull/8025)).
  - Use `@maskito/phone` ([#7580](https://github.com/taiga-family/taiga-ui/pull/7580)) in `InputPhoneInternational`.
  - `FluidTypography` add new directive (https://github.com/taiga-family/taiga-ui/pull/8316).
  - `Progress` add options with DI (https://github.com/taiga-family/taiga-ui/pull/8061).
  - `Status` add new component (https://github.com/taiga-family/taiga-ui/pull/8057).
  - `Emails` add pipe (https://github.com/taiga-family/taiga-ui/pull/7596).
  - `Pulse` add new component (https://github.com/taiga-family/taiga-ui/pull/7544).
  - `Chevron` add new directive (https://github.com/taiga-family/taiga-ui/pull/7153).
  - `AvatarOutline` add new directive (https://github.com/taiga-family/taiga-ui/pull/7087).
  - `NumberFormat` allow dynamic changes (https://github.com/taiga-family/taiga-ui/pull/6856). BREAKING CHANGES: remove
    `TUI_NUMBER_FORMAT_OBSERVABLE` in favour of `TUI_NUMBER_FORMAT`, `tuiFormatNumber` pipe requires async pipe now.
  - `Block` add new component (https://github.com/taiga-family/taiga-ui/pull/6892).
- **@taiga-ui/cdk:**
  - `Dialogs` refactor creation way (https://github.com/taiga-family/taiga-ui/pull/6660).
  - `Provide` add new util (https://github.com/taiga-family/taiga-ui/pull/7168).
  - `TakeUntilDestroyed` add helper (https://github.com/taiga-family/taiga-ui/pull/7381).
  - `NativeElement` add util (https://github.com/taiga-family/taiga-ui/pull/7393).
  - `ToArray` add util (https://github.com/taiga-family/taiga-ui/pull/7489).
  - `DirectiveBinding` / `DirectiveListener` add utils (https://github.com/taiga-family/taiga-ui/pull/7611).
  - `Control` add signal based abstraction (https://github.com/taiga-family/taiga-ui/pull/7650).
  - `ThemeColorService` add service (https://github.com/taiga-family/taiga-ui/pull/8240).
  - `Portal` refactor abstractions (https://github.com/taiga-family/taiga-ui/pull/6692).
  - Rename and remove some helper instances (https://github.com/taiga-family/taiga-ui/pull/7065).
  - Scroll controls visible only inside `tui-root` area (https://github.com/taiga-family/taiga-ui/pull/6623).
- **@taiga-ui/layout:**
  - `Title`, `BlockDetails`, `Comment` add new components ([#5743](https://github.com/taiga-family/taiga-ui/pull/5743),
    [#7010](https://github.com/taiga-family/taiga-ui/pull/7010)).
  - `CardMedium`, `CardLarge` add new components ([#7260](https://github.com/taiga-family/taiga-ui/pull/7260)).
  - `Cell` add new component ([#5460](https://github.com/taiga-family/taiga-ui/pull/5460),
    [#7235](https://github.com/taiga-family/taiga-ui/pull/7235)).
  - `Navigation` implement grid (https://github.com/taiga-family/taiga-ui/pull/8377). Simplify 2nd level aside
    (https://github.com/taiga-family/taiga-ui/pull/8141).
- **@taiga-ui/addon-commerce:**
  - `InputCard` migrate to new `Textfield` ([#7581](https://github.com/taiga-family/taiga-ui/pull/7581)).
- **@taiga-ui/addon-doc:**
  - `ThemeSwitcher` add new component (https://github.com/taiga-family/taiga-ui/pull/7966).
  - `Preview` lazy component support (https://github.com/taiga-family/taiga-ui/pull/7048).
  - Support target property for links (https://github.com/taiga-family/taiga-ui/pull/6874).
- **@taiga-ui/addon-mobile:**
  - `SwipeActions` add new component ([#6644](https://github.com/taiga-family/taiga-ui/pull/6644)).
  - `DropdownMobile` add new directive ([#7428](https://github.com/taiga-family/taiga-ui/pull/7428),
    [#8094](https://github.com/taiga-family/taiga-ui/pull/8094)).
- **@taiga-ui/addon-table:**
  - `Reorder` add possibility to transfer a template (https://github.com/taiga-family/taiga-ui/pull/6967).
  - `TableSort` support nullable values (https://github.com/taiga-family/taiga-ui/pull/7888).
- **@taiga-ui/i18n**:
  - `Hebrew` add support (https://github.com/taiga-family/taiga-ui/pull/8242).
  - `Belarusian` add support (https://github.com/taiga-family/taiga-ui/pull/6421).

<div id="migration"> </div>

### Migration guide

This release introduces a lot of breaking changes.<br/> Most of them can be solved automatically with the following
command:

**Angular CLI:**

```
ng update @taiga-ui/cdk
```

**Nx CLI:**

```
nx migrate @taiga-ui/cdk
nx migrate --run-migrations=migrations.json
```

# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.x CHANGELOG...](https://github.com/taiga-family/taiga-ui/blob/v3.x/CHANGELOG.md)

## [2.x CHANGELOG...](https://github.com/taiga-family/taiga-ui/blob/v2.x/CHANGELOG.md)
