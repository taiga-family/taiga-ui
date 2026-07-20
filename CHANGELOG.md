# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [5.16.0](https://github.com/taiga-family/taiga-ui/compare/v5.15.0...v5.16.0) (2026-07-20)

### 🐞 Bug Fixes

- **addon-mobile:** `SwipeActionsOnboarding` add missing version attribute
  ([#14590](https://github.com/taiga-family/taiga-ui/issues/14590))
  ([333e4ed](https://github.com/taiga-family/taiga-ui/commit/333e4ed920c19d7b28031b5c7ef359fa6d3ec540))
- **cdk:** expose "./schematics" subpath in package "exports"
  ([#14585](https://github.com/taiga-family/taiga-ui/issues/14585))
  ([618080f](https://github.com/taiga-family/taiga-ui/commit/618080f32178bf7a5867f1c3f439c51d3a95b194))
- **cdk:** InputColor and InputRange template migrations
  ([#14473](https://github.com/taiga-family/taiga-ui/issues/14473))
  ([e2199ba](https://github.com/taiga-family/taiga-ui/commit/e2199baa62a94ed924756dcdaf92e0462d1e9a36))
- **kit:** `Textarea` fix scroll on ios ([#14569](https://github.com/taiga-family/taiga-ui/issues/14569))
  ([d4b9da5](https://github.com/taiga-family/taiga-ui/commit/d4b9da5ad9d3eb02fb231e1b310fc23b4fa3b1fd))
- **styles:** `Skeleton` has visual black flicker artifact during deactivation
  ([#14581](https://github.com/taiga-family/taiga-ui/issues/14581))
  ([d3a3cfc](https://github.com/taiga-family/taiga-ui/commit/d3a3cfcd38fd3d9baddd50073c7839f619bc65cc))

### 🚀 Features

- **addon-mobile:** `DropdownSheet` add `tuiDropdownSheetOptions` input to customize sheet dialog
  ([#14558](https://github.com/taiga-family/taiga-ui/issues/14558))
  ([454321b](https://github.com/taiga-family/taiga-ui/commit/454321b2f6cd93eb5e07f3d6c8f8232ca40d892b))
- **core:** new `Close` directive ([#14560](https://github.com/taiga-family/taiga-ui/issues/14560))
  ([5d3230e](https://github.com/taiga-family/taiga-ui/commit/5d3230eeadd183aac03e022ae203ea0c6fb38470))

## [5.15.0](https://github.com/taiga-family/taiga-ui/compare/v5.14.0...v5.15.0) (2026-07-13)

### 🚀 Features

- **core:** `Hint` allow positioning non-centered hints
  ([#14491](https://github.com/taiga-family/taiga-ui/issues/14491))
  ([6493b98](https://github.com/taiga-family/taiga-ui/commit/6493b9851c31b2735983a317463283a6b9cd8376))
- **core:** `ScrollControls` automate use with virtual scroll, deprecate `Scrollable`
  ([#14546](https://github.com/taiga-family/taiga-ui/issues/14546))
  ([bef8127](https://github.com/taiga-family/taiga-ui/commit/bef8127f2771af70d1cb02449e406f963af1d2da))
- **core:** `Tooltip` improve a11y ([#14521](https://github.com/taiga-family/taiga-ui/issues/14521))
  ([3423e38](https://github.com/taiga-family/taiga-ui/commit/3423e38370367b16ba7d43bf7f255ab9e6ad2480))
- **layout:** add custom color for tuiList markers ([#14536](https://github.com/taiga-family/taiga-ui/issues/14536))
  ([05aa1ac](https://github.com/taiga-family/taiga-ui/commit/05aa1ac4e43d0df2b60d37350cd8c968a4ee21ab))

### 🐞 Bug Fixes

- **addon-doc:** correct tab order in `Example` after language switch
  ([#14376](https://github.com/taiga-family/taiga-ui/issues/14376))
  ([b4a8b99](https://github.com/taiga-family/taiga-ui/commit/b4a8b9908e23498c576236f168c5c918256b9407))
- **cdk:** `TuiPdfViewer` correct migration ([#14472](https://github.com/taiga-family/taiga-ui/issues/14472))
  ([8505820](https://github.com/taiga-family/taiga-ui/commit/850582049bba2f69a850d49034a9ddea1f29916a))
- **cdk:** flag removed dialog `header` option during v5 migration
  ([#14497](https://github.com/taiga-family/taiga-ui/issues/14497))
  ([bba1773](https://github.com/taiga-family/taiga-ui/commit/bba1773407b7df30911cfb43f93d00c0592e9582))
- **cdk:** flag SafeResourceUrl avatar `src` during v5 migration
  ([#14498](https://github.com/taiga-family/taiga-ui/issues/14498))
  ([cf0168f](https://github.com/taiga-family/taiga-ui/commit/cf0168f76dc9085002837774ef34b7d913b3a2e9))
- **cdk:** keep `tuiRepeatTimes` loop value numeric in [@for](https://github.com/for) blocks
  ([#14499](https://github.com/taiga-family/taiga-ui/issues/14499))
  ([63aaf7c](https://github.com/taiga-family/taiga-ui/commit/63aaf7cc886e2a6f4c3a42040b34f63911d6d18d))
- **core:** `Carousel` no longer duplicates slides during hydration
  ([#14539](https://github.com/taiga-family/taiga-ui/issues/14539))
  ([41d4be7](https://github.com/taiga-family/taiga-ui/commit/41d4be71322257e5ed13fb4d76b00f77093d425c))
- **core:** `HintPointer` fix initial position lag ([#14522](https://github.com/taiga-family/taiga-ui/issues/14522))
  ([579f5e4](https://github.com/taiga-family/taiga-ui/commit/579f5e42a5d40734a5839766607eaceaaa7810c1))
- **core:** `Popup` sync change detection ([#14502](https://github.com/taiga-family/taiga-ui/issues/14502))
  ([83a5e78](https://github.com/taiga-family/taiga-ui/commit/83a5e78be82bdbbf268533430a4f9ab9227997d2))
- **core:** loader fix content height overflow inside grid layout
  ([#14510](https://github.com/taiga-family/taiga-ui/issues/14510))
  ([d4e74c4](https://github.com/taiga-family/taiga-ui/commit/d4e74c4a35002341ca2fbf1a5e7f10a33d0e8209))
- **core:** prevent context rect from leaking into nested dropdowns
  ([#14505](https://github.com/taiga-family/taiga-ui/issues/14505))
  ([5c63027](https://github.com/taiga-family/taiga-ui/commit/5c630275935aa0e8a1d03ba2391c43be8db10317))
- **kit:** `Textarea` bump style specificity ([#14555](https://github.com/taiga-family/taiga-ui/issues/14555))
  ([03deea4](https://github.com/taiga-family/taiga-ui/commit/03deea49abcebf96d401638a5c6c7f12a8396563))
- **kit:** add fallback for dropdown calendar inside tui-drawer
  ([#14531](https://github.com/taiga-family/taiga-ui/issues/14531))
  ([b27b5b0](https://github.com/taiga-family/taiga-ui/commit/b27b5b0b7ba8a8b3b9016dccb3e958c24206c72f))
- **kit:** avoid off-zone textarea in `tuiCopy` ([#14529](https://github.com/taiga-family/taiga-ui/issues/14529))
  ([88324ea](https://github.com/taiga-family/taiga-ui/commit/88324eada255116f1bac5480b294f62d2dc8eabd))
- **kit:** prevent `InputYear` crash on out-of-range control value
  ([#14509](https://github.com/taiga-family/taiga-ui/issues/14509))
  ([cb196b9](https://github.com/taiga-family/taiga-ui/commit/cb196b9183d7011f4fa2770e06778a1de2f02489))
- **kit:** split edited input chip by separator ([#14347](https://github.com/taiga-family/taiga-ui/issues/14347))
  ([ff0829d](https://github.com/taiga-family/taiga-ui/commit/ff0829d86f36e1088d44760b88357e816204d342))

## [5.14.0](https://github.com/taiga-family/taiga-ui/compare/v5.13.0...v5.14.0) (2026-07-06)

### 🚀 Features

- **core:** `Alerts` allow custom portal placement ([#14474](https://github.com/taiga-family/taiga-ui/issues/14474))
  ([2d04454](https://github.com/taiga-family/taiga-ui/commit/2d044548000341ab5739ec2e533b5e9de6849ed8))
- **core:** update animations according to specs ([#14476](https://github.com/taiga-family/taiga-ui/issues/14476))
  ([1222c6e](https://github.com/taiga-family/taiga-ui/commit/1222c6eb91a2267873fb31bcfdfc7174d0866b29))
- **kit:** implement handling of negative values and update template for segments
  ([#14481](https://github.com/taiga-family/taiga-ui/issues/14481))
  ([fb81834](https://github.com/taiga-family/taiga-ui/commit/fb81834ce92a50d4adecb9fde45f42c0f8cef60c))

### 🐞 Bug Fixes

- **addon-doc:** show explicit null option in API table selects
  ([#14392](https://github.com/taiga-family/taiga-ui/issues/14392))
  ([86b300e](https://github.com/taiga-family/taiga-ui/commit/86b300e8bc77db518e2d918c7d24268999b0ea90))
- **addon-mobile:** `DropdownMobile` / `DropdownSheet` should enforce `l`-size for `DataList` regardless of textfield
  size ([#14484](https://github.com/taiga-family/taiga-ui/issues/14484))
  ([0595c77](https://github.com/taiga-family/taiga-ui/commit/0595c772c8d902910404c63453c3e31a69e58271))
- **core:** `Hint` close when host disappears ([#14486](https://github.com/taiga-family/taiga-ui/issues/14486))
  ([618213a](https://github.com/taiga-family/taiga-ui/commit/618213afb7fe51fe420e4d3456148d95d0755adf))
- **core:** `Textfield` fix items displaying over border
  ([#14496](https://github.com/taiga-family/taiga-ui/issues/14496))
  ([2cc8c38](https://github.com/taiga-family/taiga-ui/commit/2cc8c38698ca50c64a3fde047b39d44e199ba079))
- **core:** `TUI_DARK_MODE` persist first theme change on empty storage
  ([#14501](https://github.com/taiga-family/taiga-ui/issues/14501))
  ([23fdec8](https://github.com/taiga-family/taiga-ui/commit/23fdec82cd2cd95811cf5b7de4f9f55bba3c6cf9))
- **core:** fix `tuiSelectLike` on ios safari ([#14469](https://github.com/taiga-family/taiga-ui/issues/14469))
  ([e5613dc](https://github.com/taiga-family/taiga-ui/commit/e5613dc88ba64a12cd26421f7d62ab45b390af84))
- **kit:** `Pincode` ios animation ([#14477](https://github.com/taiga-family/taiga-ui/issues/14477))
  ([35565f7](https://github.com/taiga-family/taiga-ui/commit/35565f75ee290fd51f413fd8c5e1382bcac809d5))
- **layout:** `CardCollapsed` fix transition on Safari and Firefox
  ([#14495](https://github.com/taiga-family/taiga-ui/issues/14495))
  ([7da7420](https://github.com/taiga-family/taiga-ui/commit/7da742034445182faa6336dbfed2afa12e3cefce))

## [5.13.0](https://github.com/taiga-family/taiga-ui/compare/v5.12.0...v5.13.0) (2026-06-30)

### 🚀 Features

- **core:** `Carousel` add dynamic height ([#14444](https://github.com/taiga-family/taiga-ui/issues/14444))
  ([267f6d9](https://github.com/taiga-family/taiga-ui/commit/267f6d96eb9afef029ff50967bff84687540d162))
- **core:** `Root` apply inert to content under modals ([#14401](https://github.com/taiga-family/taiga-ui/issues/14401))
  ([2c5d878](https://github.com/taiga-family/taiga-ui/commit/2c5d8782a3af6126ea4319cf5ee149e2b077c267))
- **experimental:** `DatePicker` add new component ([#14464](https://github.com/taiga-family/taiga-ui/issues/14464))
  ([e3eeb63](https://github.com/taiga-family/taiga-ui/commit/e3eeb639cb68b7a6213e43ae07ad3e4118ec0a4c))
- **kit:** input for programmatically show/hide `line-clamp` hint
  ([#14304](https://github.com/taiga-family/taiga-ui/issues/14304))
  ([ff9dbca](https://github.com/taiga-family/taiga-ui/commit/ff9dbcac2087b0e9ac5c26ca73395eb66c37cd83))

### 🐞 Bug Fixes

- **core:** `Cell` fix margin inside `Label` ([#14433](https://github.com/taiga-family/taiga-ui/issues/14433))
  ([753d57d](https://github.com/taiga-family/taiga-ui/commit/753d57d8b757f69de51862b14593051b8117ef25))
- **core:** `Link` fix font icons ([#14399](https://github.com/taiga-family/taiga-ui/issues/14399))
  ([dfe010d](https://github.com/taiga-family/taiga-ui/commit/dfe010d7c0738f1961ea3e6fed5165c0b1f7be56))
- **core:** fix date-pickers on ios safari ([#14466](https://github.com/taiga-family/taiga-ui/issues/14466))
  ([238d6ba](https://github.com/taiga-family/taiga-ui/commit/238d6ba2aad72fc21f7c17aa1c8411a66320b62f))
- **core:** improve tree shaking of `Hint` entrypoint ([#14436](https://github.com/taiga-family/taiga-ui/issues/14436))
  ([4584b00](https://github.com/taiga-family/taiga-ui/commit/4584b006b086c8a90406b622c4c82eb41b795b36))
- **core:** prevent dropdown context position from leaking into nested dropdowns
  ([#14451](https://github.com/taiga-family/taiga-ui/issues/14451))
  ([d347031](https://github.com/taiga-family/taiga-ui/commit/d3470315cc80e46169b9a6f68427df2e586287c2))
- improve tree shaking of `TuiDay` class for unused `InputDate*` components
  ([#14432](https://github.com/taiga-family/taiga-ui/issues/14432))
  ([ba34a16](https://github.com/taiga-family/taiga-ui/commit/ba34a16361c34e3059051bb5005b39e6ce4486d2))
- **kit:** `InputColor` base color reset when using opacity slider in hexa
  ([#14287](https://github.com/taiga-family/taiga-ui/issues/14287))
  ([691b382](https://github.com/taiga-family/taiga-ui/commit/691b382c1700769307a7116b8c81d8feccec53cf))
- **kit:** `Textarea` hydration ([#14306](https://github.com/taiga-family/taiga-ui/issues/14306))
  ([dbf9a86](https://github.com/taiga-family/taiga-ui/commit/dbf9a86167d2f0da54d6eba04c84144505b4ba40))
- **kit:** `Tooltip` don't close on click with mouse ([#14400](https://github.com/taiga-family/taiga-ui/issues/14400))
  ([534010c](https://github.com/taiga-family/taiga-ui/commit/534010c23b6337add6b358c9ac9b17079b54ac6c))
- **kit:** flip chevron on native select interaction ([#14408](https://github.com/taiga-family/taiga-ui/issues/14408))
  ([79f7c65](https://github.com/taiga-family/taiga-ui/commit/79f7c65ca0443049df55adf7bce3f79c065b714e))
- **kit:** update unfinished validator on input changes
  ([#14420](https://github.com/taiga-family/taiga-ui/issues/14420))
  ([4a1024d](https://github.com/taiga-family/taiga-ui/commit/4a1024d3734dd4be8eb812dc55f58b244b297758))
- **layout:** `AppBar` fix back button appearance ([#14416](https://github.com/taiga-family/taiga-ui/issues/14416))
  ([5bf593f](https://github.com/taiga-family/taiga-ui/commit/5bf593f613f58939cf59c9e16a74d41397a7a6eb))
- **layout:** `InputSearch` hydration ([#14303](https://github.com/taiga-family/taiga-ui/issues/14303))
  ([fb94e9f](https://github.com/taiga-family/taiga-ui/commit/fb94e9f4485463ad16b2f23b7b43e04024166e7c))
- **schematics:** `tui-input-tag` self-closing migration preserves the rest of the template
  ([#14412](https://github.com/taiga-family/taiga-ui/issues/14412))
  ([24b3f04](https://github.com/taiga-family/taiga-ui/commit/24b3f0419b96fd5a3b23a94cd4a94b4275c2886c))

## [5.12.0](https://github.com/taiga-family/taiga-ui/compare/v5.11.0...v5.12.0) (2026-06-22)

### 🚀 Features

- **cdk:** `Id` add auto-id directive ([#14379](https://github.com/taiga-family/taiga-ui/issues/14379))
  ([cefd9fb](https://github.com/taiga-family/taiga-ui/commit/cefd9fb25184a2bb48aaab4948ae3c325d7ab6e3))
- **kit:** `ButtonSelect` allow date picking ([#14364](https://github.com/taiga-family/taiga-ui/issues/14364))
  ([7dc4899](https://github.com/taiga-family/taiga-ui/commit/7dc4899e1b688c8974a1316f42e6840ad7884392))
- **layout:** `AppBar` support liquid glass ([#14210](https://github.com/taiga-family/taiga-ui/issues/14210))
  ([4009f35](https://github.com/taiga-family/taiga-ui/commit/4009f35f3c0ca2f07c691a07f95ea0a5e589f99f))

### 🐞 Bug Fixes

- **core:** `Button` change button S border radius ([#14355](https://github.com/taiga-family/taiga-ui/issues/14355))
  ([5b0e6a2](https://github.com/taiga-family/taiga-ui/commit/5b0e6a2eb3ae046490d4addd05e773f6925a6c9d))
- **kit:** `CalendarRange` consider same day ranges unfinished only if from === to
  ([#14354](https://github.com/taiga-family/taiga-ui/issues/14354))
  ([d28aa4f](https://github.com/taiga-family/taiga-ui/commit/d28aa4ff357f12e64a4e5a71e55793ace7a313ba))
- **kit:** mirror fixed progress gradient in RTL ([#14348](https://github.com/taiga-family/taiga-ui/issues/14348))
  ([d0872b9](https://github.com/taiga-family/taiga-ui/commit/d0872b93676cd12cb11e7ea0ea69e6310c5832a7))
- **styles:** support RTL in date-picker ([#14378](https://github.com/taiga-family/taiga-ui/issues/14378))
  ([e0c87ef](https://github.com/taiga-family/taiga-ui/commit/e0c87ef5bf90fc1d1e1c5c27eb5eb78538e11bb3))

## [5.11.0](https://github.com/taiga-family/taiga-ui/compare/v5.10.0...v5.11.0) (2026-06-16)

### 🐞 Bug Fixes

- **addon-commerce:** keep thumbnails icons visible in disabled content
  ([#14296](https://github.com/taiga-family/taiga-ui/issues/14296))
  ([9984aef](https://github.com/taiga-family/taiga-ui/commit/9984aef6554b5d19e7ea2a4a8f8debf5bc9fe2fd))
- **addon-table:** signals are must be called to retrieve their value
  ([#14280](https://github.com/taiga-family/taiga-ui/issues/14280))
  ([edc5e83](https://github.com/taiga-family/taiga-ui/commit/edc5e83d7ff803d0f2f08f82fa54e6c4a3e84a1d))
- **core:** loader content overflow ([#14273](https://github.com/taiga-family/taiga-ui/issues/14273))
  ([39e31f5](https://github.com/taiga-family/taiga-ui/commit/39e31f51751b47b0d28efcc3870715ae8b735493))
- **kit:** `Badge` fix padding for size S according to specs
  ([#14274](https://github.com/taiga-family/taiga-ui/issues/14274))
  ([25dc9a4](https://github.com/taiga-family/taiga-ui/commit/25dc9a4dd699ae17a637d9c58c1f6e04a03e818d))
- **kit:** `Chip` fix XXS font size according to specs ([#14293](https://github.com/taiga-family/taiga-ui/issues/14293))
  ([2dc9b46](https://github.com/taiga-family/taiga-ui/commit/2dc9b4619fc692e94e65390d000737b83c783e55))
- **kit:** `InputColor` hydration ([#14213](https://github.com/taiga-family/taiga-ui/issues/14213))
  ([0cc6990](https://github.com/taiga-family/taiga-ui/commit/0cc699075492be611689d29c14e94e630b5f46d4))
- **kit:** `InputPhoneInternational` hydration ([#14217](https://github.com/taiga-family/taiga-ui/issues/14217))
  ([db58c54](https://github.com/taiga-family/taiga-ui/commit/db58c547e1f6daa3c78c54e78cd303e91ce5e4fe))
- **kit:** `InputPin` remove latest typed symbol ([#14219](https://github.com/taiga-family/taiga-ui/issues/14219))
  ([4c75250](https://github.com/taiga-family/taiga-ui/commit/4c7525010529e2caa0cf7cd14614fc0fc8eb4e7f))
- **kit:** `Textfield[multi]` cannot update viewed items when `updateOn: submit`
  ([#14275](https://github.com/taiga-family/taiga-ui/issues/14275))
  ([b6d98e6](https://github.com/taiga-family/taiga-ui/commit/b6d98e6f6d74f47cbc96c0e76f3ddf7089b73b25))
- **kit:** `Toast` fix line height on mobile ([#14295](https://github.com/taiga-family/taiga-ui/issues/14295))
  ([b311bc0](https://github.com/taiga-family/taiga-ui/commit/b311bc0e1dae1571a2d0b2b4cba5962964e51175))
- **kit:** prevent input date range from retriggering parent effects
  ([#14250](https://github.com/taiga-family/taiga-ui/issues/14250))
  ([ae2d96d](https://github.com/taiga-family/taiga-ui/commit/ae2d96d2416c2e46944fd2354a6762beef0f6674))
- **kit:** unsubscribe segmented controls on destroy ([#14294](https://github.com/taiga-family/taiga-ui/issues/14294))
  ([6c2bd8f](https://github.com/taiga-family/taiga-ui/commit/6c2bd8fedfdd819ec580bb61c00b4cdcec80c61d))
- **schematics:** exclude nested ignored dirs from schematics globs
  ([#14272](https://github.com/taiga-family/taiga-ui/issues/14272))
  ([b4fb16b](https://github.com/taiga-family/taiga-ui/commit/b4fb16b638df0c285f1dc92d4f8c128dd42428a4))

### 🚀 Features

- **addon-doc:** expose `TuiViewportScroller` ([#14292](https://github.com/taiga-family/taiga-ui/issues/14292))
  ([eed02d1](https://github.com/taiga-family/taiga-ui/commit/eed02d1a33de7776cef4ba00c13f6d2e0b8d6ec8))
- **core:** `Cell` allow nested `Title` ([#14334](https://github.com/taiga-family/taiga-ui/issues/14334))
  ([8f04272](https://github.com/taiga-family/taiga-ui/commit/8f042728aa66e03f2747966895db066a31a5b881))
- **core:** `CellResponsive` add directive ([#14336](https://github.com/taiga-family/taiga-ui/issues/14336))
  ([e347cb1](https://github.com/taiga-family/taiga-ui/commit/e347cb10194fdab70f21e7c0a8613ed1fe1794e7))
- **kit:** `Badge` add font scaling ([#14269](https://github.com/taiga-family/taiga-ui/issues/14269))
  ([f79b110](https://github.com/taiga-family/taiga-ui/commit/f79b11085eb2923c9bfec663ccb6e65f84b0a494))
- **kit:** `BadgeNotification` add font scaling ([#14263](https://github.com/taiga-family/taiga-ui/issues/14263))
  ([7fe9bba](https://github.com/taiga-family/taiga-ui/commit/7fe9bbad8782015816f633832b060ca041e8181c))
- **kit:** `Pin` add font scaling ([#14260](https://github.com/taiga-family/taiga-ui/issues/14260))
  ([d71a325](https://github.com/taiga-family/taiga-ui/commit/d71a325b7a2862899891ac9fc07310334206a4a3))
- **kit:** `Toast` add font scaling ([#14299](https://github.com/taiga-family/taiga-ui/issues/14299))
  ([e90ee5a](https://github.com/taiga-family/taiga-ui/commit/e90ee5a6c79a23a817ba469b1291f2ac9efd729f))

## [5.10.0](https://github.com/taiga-family/taiga-ui/compare/v5.9.0...v5.10.0) (2026-06-08)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCard` hydration ([#14220](https://github.com/taiga-family/taiga-ui/issues/14220))
  ([48be7dd](https://github.com/taiga-family/taiga-ui/commit/48be7dde21240467d28051df76997933e5b4f5a0))
- **addon-table:** `TuiTableExpand` throws error during hydration
  ([#14235](https://github.com/taiga-family/taiga-ui/issues/14235))
  ([2248a8a](https://github.com/taiga-family/taiga-ui/commit/2248a8ae27533a508644c2f08c1571f92880d7a5))
- **core:** `Button` fix font scaling ([#14238](https://github.com/taiga-family/taiga-ui/issues/14238))
  ([ce83afa](https://github.com/taiga-family/taiga-ui/commit/ce83afa7f336dd70e47957fea6b9eb2e1cc5684a))
- **core:** `Hint` fix positioning and focusing issue on mobile
  ([#14227](https://github.com/taiga-family/taiga-ui/issues/14227))
  ([d198bed](https://github.com/taiga-family/taiga-ui/commit/d198bedd7e1285fe95388f9dc5901e4a1c829e26))
- **core:** `Hint` prevent global options mutation in nested providers
  ([#14240](https://github.com/taiga-family/taiga-ui/issues/14240))
  ([c9c9c38](https://github.com/taiga-family/taiga-ui/commit/c9c9c38a1950e516f5d96e5896e08c7d37bb3852))
- **core:** `Icons` fix scaling in older browsers ([#14187](https://github.com/taiga-family/taiga-ui/issues/14187))
  ([627bd3c](https://github.com/taiga-family/taiga-ui/commit/627bd3c14760ea7ebfc62b23a6c9ea9ffa1d7f17))
- **core:** `Label` fix font scaling ([#14205](https://github.com/taiga-family/taiga-ui/issues/14205))
  ([fb3a3e0](https://github.com/taiga-family/taiga-ui/commit/fb3a3e01996c85151ca88ededa3a14b6ec1639b5))
- **core:** `Notification` fix font scaling ([#14223](https://github.com/taiga-family/taiga-ui/issues/14223))
  ([b7d253e](https://github.com/taiga-family/taiga-ui/commit/b7d253e31103407dd591f3ac37d18fb82e178f79))
- **kit:** `(tuiPresent)` looses initial emission after hydration
  ([#14237](https://github.com/taiga-family/taiga-ui/issues/14237))
  ([2420e4a](https://github.com/taiga-family/taiga-ui/commit/2420e4af92573a937c9a3d042d3d83a7c87a0f57))
- **kit:** `Block` fix alignment for custom line height
  ([#14218](https://github.com/taiga-family/taiga-ui/issues/14218))
  ([dbe21b8](https://github.com/taiga-family/taiga-ui/commit/dbe21b83184fd7d28497d895e2a5be346fe7ccc7))
- **kit:** `InputDate` hydration ([#14204](https://github.com/taiga-family/taiga-ui/issues/14204))
  ([d934f9b](https://github.com/taiga-family/taiga-ui/commit/d934f9b0255486060a4ffc3867b732dc2544fe80))
- **kit:** `InputDateTime` hydration ([#14206](https://github.com/taiga-family/taiga-ui/issues/14206))
  ([628b9b5](https://github.com/taiga-family/taiga-ui/commit/628b9b582d7675b81b4b9a65d3e53cf28241a601))
- **kit:** `InputMonth` hydration ([#14209](https://github.com/taiga-family/taiga-ui/issues/14209))
  ([1afdc7a](https://github.com/taiga-family/taiga-ui/commit/1afdc7afd0c8ab708e2f6a8fe7177912d2c99b9e))
- **kit:** `InputNumber` with `decimalMode=always` should not trim trailing zeroes on blur
  ([#14189](https://github.com/taiga-family/taiga-ui/issues/14189))
  ([c314d2c](https://github.com/taiga-family/taiga-ui/commit/c314d2cc0e6b27cd221df9e946917e2f462fbc34))
- **kit:** `InputPin` hydration ([#14193](https://github.com/taiga-family/taiga-ui/issues/14193))
  ([b490433](https://github.com/taiga-family/taiga-ui/commit/b490433d60dabfc6c7ceebe2271ebd4637ecf514))
- **kit:** `InputRange` throws
  `NG01350: ngModel cannot be used to register form controls with a parent formGroup directive`
  ([#14244](https://github.com/taiga-family/taiga-ui/issues/14244))
  ([2442313](https://github.com/taiga-family/taiga-ui/commit/24423131282f44cbcee6a49c5bde16815065fa5c))
- **kit:** `InputTime` hydration ([#14201](https://github.com/taiga-family/taiga-ui/issues/14201))
  ([e552305](https://github.com/taiga-family/taiga-ui/commit/e5523054355e6590e55de61701a8e3cf242707e7))
- **kit:** use CSS variable --tui-status-negative for tui-badge-notification background
  ([#14198](https://github.com/taiga-family/taiga-ui/issues/14198))
  ([1a3ee6a](https://github.com/taiga-family/taiga-ui/commit/1a3ee6a2704797664f1a88cc86dd2328c0750160))

### 🚀 Features

- **addon-commerce:** `ThumbnailCard` add font scaling ([#14203](https://github.com/taiga-family/taiga-ui/issues/14203))
  ([d8c8825](https://github.com/taiga-family/taiga-ui/commit/d8c8825e7308cdc22785fe6a4d7a2e8f5f107742))
- **addon-doc:** make API description visible on desktop
  ([#14243](https://github.com/taiga-family/taiga-ui/issues/14243))
  ([d3c9c5e](https://github.com/taiga-family/taiga-ui/commit/d3c9c5e82a4b37fbf9b9838e0abaefe91cfecfcd))
- **core:** `Cell` add stretch directive ([#14230](https://github.com/taiga-family/taiga-ui/issues/14230))
  ([e49051c](https://github.com/taiga-family/taiga-ui/commit/e49051c88b929ca72897fccf2f044df73005a921))
- **core:** `Error` improve a11y ([#14215](https://github.com/taiga-family/taiga-ui/issues/14215))
  ([6c00aef](https://github.com/taiga-family/taiga-ui/commit/6c00aef2178ad85882c9e8651bfcac844d5ec909))
- **kit:** `Chip` improve font scaling ([#14245](https://github.com/taiga-family/taiga-ui/issues/14245))
  ([90b2236](https://github.com/taiga-family/taiga-ui/commit/90b223632f6220091d094c74cf83f4868b51d3a6))
- **layout:** `CardMedium` add font scaling ([#14202](https://github.com/taiga-family/taiga-ui/issues/14202))
  ([c0c4a5d](https://github.com/taiga-family/taiga-ui/commit/c0c4a5d5bf9ebfeb5bd109da9b41e9ab9b8d9eac))
- **layout:** `Header` add wrapping mode ([#14229](https://github.com/taiga-family/taiga-ui/issues/14229))
  ([723db41](https://github.com/taiga-family/taiga-ui/commit/723db41ccff73a22177584264d324294f6471a88))

## [5.9.0](https://github.com/taiga-family/taiga-ui/compare/v5.8.0...v5.9.0) (2026-06-01)

### 🚀 Features

- **experimental:** `File` add new component ([#13613](https://github.com/taiga-family/taiga-ui/issues/13613))
  ([3573ec7](https://github.com/taiga-family/taiga-ui/commit/3573ec7321eb0131c48a65e8f9cd1ec2e9974fc6))
- **experimental:** `Popout` add configurable providers
  ([#13879](https://github.com/taiga-family/taiga-ui/issues/13879))
  ([#14170](https://github.com/taiga-family/taiga-ui/issues/14170))
  ([fa7f338](https://github.com/taiga-family/taiga-ui/commit/fa7f338d40e3e4d437b5b49e9e19ad258b3589af))
- **kit:** `Pincode` add component ([#14056](https://github.com/taiga-family/taiga-ui/issues/14056))
  ([5f069b5](https://github.com/taiga-family/taiga-ui/commit/5f069b52f1666ca1f2e89ffd5f4c8a904f431998))

### 🐞 Bug Fixes

- **cdk:** `ActiveZone` fix clicking disabled items ([#14164](https://github.com/taiga-family/taiga-ui/issues/14164))
  ([8eba901](https://github.com/taiga-family/taiga-ui/commit/8eba9011c56829fd03478422676b43fccf4dd4e7))
- **core:** `Cell` fix `Avatar` vertical margin and radius.
  ([#14159](https://github.com/taiga-family/taiga-ui/issues/14159))
  ([2b55438](https://github.com/taiga-family/taiga-ui/commit/2b5543803a1d3cd8c157cef958272b1f8e7ba2fd))
- **core:** `Cell` fix font according to specs ([#14165](https://github.com/taiga-family/taiga-ui/issues/14165))
  ([e48e459](https://github.com/taiga-family/taiga-ui/commit/e48e45930d4ec002c8812d79bf461d626ac5ea46))
- **core:** `Dropdown` fix pointer events during animation
  ([#14185](https://github.com/taiga-family/taiga-ui/issues/14185))
  ([5fcce21](https://github.com/taiga-family/taiga-ui/commit/5fcce213bf025276280248ad30e33a644692d458))
- **core:** `Textfield` fix change detection ([#14173](https://github.com/taiga-family/taiga-ui/issues/14173))
  ([20af36f](https://github.com/taiga-family/taiga-ui/commit/20af36f3a7af2fb4d1a848ab52ad9cdc33a0f29f))
- **kit:** `Connected` size ([#14186](https://github.com/taiga-family/taiga-ui/issues/14186))
  ([0cd6509](https://github.com/taiga-family/taiga-ui/commit/0cd6509f3a8299d1005a0b690e2cfebcc4052e08))

## [5.8.0](https://github.com/taiga-family/taiga-ui/compare/v5.7.0...v5.8.0) (2026-05-25)

### 🚀 Features

- **kit:** `Pin` add labeled mode ([#14152](https://github.com/taiga-family/taiga-ui/issues/14152))
  ([e0969f4](https://github.com/taiga-family/taiga-ui/commit/e0969f4365b835f9ce9705c0a95867941767a2d5))
- **kit:** `Select`, `SelectOption` remove stub from not selected option
  ([#13960](https://github.com/taiga-family/taiga-ui/issues/13960))
  ([#14147](https://github.com/taiga-family/taiga-ui/issues/14147))
  ([29abb72](https://github.com/taiga-family/taiga-ui/commit/29abb726dd7facbcedef9b9e64e96826d14e2d31))

### 🐞 Bug Fixes

- **core:** `Carousel` fix for zooms outside 100% ([#14145](https://github.com/taiga-family/taiga-ui/issues/14145))
  ([0581af3](https://github.com/taiga-family/taiga-ui/commit/0581af395c77877cb521c4b4f9e02c56dc86d9c9))
- **core:** `Notification` fix label overlapping close button on long text
  ([#14114](https://github.com/taiga-family/taiga-ui/issues/14114))
  ([#14137](https://github.com/taiga-family/taiga-ui/issues/14137))
  ([8feb493](https://github.com/taiga-family/taiga-ui/commit/8feb493ad09a12c6f9adcfd18a85fa2e5287e510))
- **kit:** `InputTime` incorrectly parses control value for `mode` without leading hours segment
  ([#14154](https://github.com/taiga-family/taiga-ui/issues/14154))
  ([765398f](https://github.com/taiga-family/taiga-ui/commit/765398f2ef7d4c57a2e7181e7f2a61579cc71681))
- **kit:** `Sensitive` fix mask-repeat ([#14149](https://github.com/taiga-family/taiga-ui/issues/14149))
  ([543bf95](https://github.com/taiga-family/taiga-ui/commit/543bf95bc501cbb174db88bf55b287f9bd2dbb7c))
- **kit:** `Textarea` fix font scaling ([#14155](https://github.com/taiga-family/taiga-ui/issues/14155))
  ([094480e](https://github.com/taiga-family/taiga-ui/commit/094480ea5597ee59972451807e5115ea1506f0bf))
- **kit:** apply overscroll-behavior only when there is an extra element inside the t-ghost
  ([#14142](https://github.com/taiga-family/taiga-ui/issues/14142))
  ([6a11e91](https://github.com/taiga-family/taiga-ui/commit/6a11e91aa875cd30007a456b225da5fd7434c96d))
- **kit:** improve example `Virtual scroll` for `ComboBox` to support paste of exact value
  ([#14148](https://github.com/taiga-family/taiga-ui/issues/14148))
  ([9ebd029](https://github.com/taiga-family/taiga-ui/commit/9ebd0292258890f7543be0d4bd516d995f845b7f))

## [5.7.0](https://github.com/taiga-family/taiga-ui/compare/v5.6.0...v5.7.0) (2026-05-18)

### 🐞 Bug Fixes

- change detection strategy to Default for modal and popups compon…
  ([#14098](https://github.com/taiga-family/taiga-ui/issues/14098))
  ([b9c4a25](https://github.com/taiga-family/taiga-ui/commit/b9c4a2570771ce2903c664129c6f890b5d1c5ba5))
- **core:** `TextfieldMulti` fix height growth in Firefox
  ([#14106](https://github.com/taiga-family/taiga-ui/issues/14106))
  ([46b360b](https://github.com/taiga-family/taiga-ui/commit/46b360be4b4e0ab2ebbbf55ebe58afc88b74611d))
- **kit:** `Block` fix icon size ([#14095](https://github.com/taiga-family/taiga-ui/issues/14095))
  ([aa2a7bc](https://github.com/taiga-family/taiga-ui/commit/aa2a7bc4b1abe93e085715f6be19ac81237310bc))
- **kit:** `InputFiles` fix mime type normalize ([#14119](https://github.com/taiga-family/taiga-ui/issues/14119))
  ([ab29e64](https://github.com/taiga-family/taiga-ui/commit/ab29e6477ce2e577d1d2944249c8e90a3ac0dd8e))
- **kit:** add missing empty metadata fields ([#14107](https://github.com/taiga-family/taiga-ui/issues/14107))
  ([6156b6e](https://github.com/taiga-family/taiga-ui/commit/6156b6ed7c822b1faeb22188ae833c4c107182e0))

### 🚀 Features

- **addon-commerce:** add new placeholder for expire field in `InputCardGroup`
  ([#14083](https://github.com/taiga-family/taiga-ui/issues/14083))
  ([a33170d](https://github.com/taiga-family/taiga-ui/commit/a33170dfb632cfca233c4e17592c45e8ff1eaeac))
- **core:** `ButtonX` add DI options ([#14101](https://github.com/taiga-family/taiga-ui/issues/14101))
  ([97d7337](https://github.com/taiga-family/taiga-ui/commit/97d73370f3fed34c429928850173c9a8b2315ce9))
- **kit:** support RTL for `tui-segmented` ([#14085](https://github.com/taiga-family/taiga-ui/issues/14085))
  ([a6f27ef](https://github.com/taiga-family/taiga-ui/commit/a6f27efee4c814fdb57ded73af00dd0fe799a756))

## [5.6.0](https://github.com/taiga-family/taiga-ui/compare/v5.5.0...v5.6.0) (2026-05-12)

### 🚀 Features

- **kit:** `InputDateMulti` add ability to use valueTransformer
  ([#14039](https://github.com/taiga-family/taiga-ui/issues/14039))
  ([5536ddd](https://github.com/taiga-family/taiga-ui/commit/5536dddc2e16d0aa4dafe3bfeaacc3101b0dc6e7))
- **kit:** remove empty labels with css ([#14000](https://github.com/taiga-family/taiga-ui/issues/14000))
  ([093c68b](https://github.com/taiga-family/taiga-ui/commit/093c68b3e95be80d40f275f8ea4893317bd80b88))

### 🐞 Bug Fixes

- **addon-charts:** fix hint type in line chart ([#13565](https://github.com/taiga-family/taiga-ui/issues/13565))
  ([187373b](https://github.com/taiga-family/taiga-ui/commit/187373bfaec4cf571d00a3fde60c1337552f85f7))
- **addon-mobile:** `Header` fix description font size according to specs
  ([#14048](https://github.com/taiga-family/taiga-ui/issues/14048))
  ([b492efa](https://github.com/taiga-family/taiga-ui/commit/b492efae74750e5776680d6478c97e21e16c0da7))
- **cdk:** use unique version key for leave animation ([#14050](https://github.com/taiga-family/taiga-ui/issues/14050))
  ([753671f](https://github.com/taiga-family/taiga-ui/commit/753671fe3219225ddf612dfdcd3e2382c71d9195))
- **core:** `Dialog` fix mobile fullscreen button size ([#14080](https://github.com/taiga-family/taiga-ui/issues/14080))
  ([ad18d2e](https://github.com/taiga-family/taiga-ui/commit/ad18d2eac51b3add7f8c16cf52f5b7c7f3049299))
- **core:** `Icons` fix mask for older browsers ([#14086](https://github.com/taiga-family/taiga-ui/issues/14086))
  ([6f520f1](https://github.com/taiga-family/taiga-ui/commit/6f520f16f08558a1f35ebdcec004e61045a75e11))
- **core:** `ModalService` destroying in zoneless with AngularAnimation engine
  ([#14065](https://github.com/taiga-family/taiga-ui/issues/14065))
  ([5aeb842](https://github.com/taiga-family/taiga-ui/commit/5aeb84227b84ce35787eb9293f1c38161c6a3409))
- **core:** correctly detect top root in fullscreen mode
  ([#14043](https://github.com/taiga-family/taiga-ui/issues/14043))
  ([e848761](https://github.com/taiga-family/taiga-ui/commit/e848761ae38b848470d7c910ab1de3045a0860cc))
- **kit:** `Skeleton` bump style specificity to accommodate `Textfield`
  ([#14082](https://github.com/taiga-family/taiga-ui/issues/14082))
  ([5de15bc](https://github.com/taiga-family/taiga-ui/commit/5de15bcaba6ef79da2d20494cc00ee281dedc73c))
- **kit:** `tuiComment` fix arrow color overlapping ([#13099](https://github.com/taiga-family/taiga-ui/issues/13099))
  ([#14064](https://github.com/taiga-family/taiga-ui/issues/14064))
  ([d14ae7a](https://github.com/taiga-family/taiga-ui/commit/d14ae7a5ff0c90d921d057bbc5a46e0272618fc8))
- **layout:** fix mobile styles for block-details ([#14069](https://github.com/taiga-family/taiga-ui/issues/14069))
  ([6fe1b34](https://github.com/taiga-family/taiga-ui/commit/6fe1b3479e9337dac59a1d0b173b7e0f4b87d1e9))
- **schematics:** add migration for `TuiTextfieldDropdownDirective`
  ([#14036](https://github.com/taiga-family/taiga-ui/issues/14036))
  ([e09ad91](https://github.com/taiga-family/taiga-ui/commit/e09ad91a7e31a86c9d7ccc996fa625db085c2aed))

## [5.5.0](https://github.com/taiga-family/taiga-ui/compare/v5.4.0...v5.5.0) (2026-05-04)

### 🚀 Features

- **cdk:** `tuiSum` supports `bigint` ([#13982](https://github.com/taiga-family/taiga-ui/issues/13982))
  ([bc50cf1](https://github.com/taiga-family/taiga-ui/commit/bc50cf1ef4ff98de3327b711bdd1ed90f657f33b))
- **kit:** support disabled state for `tui-segmented` ([#13756](https://github.com/taiga-family/taiga-ui/issues/13756))
  ([224f9c7](https://github.com/taiga-family/taiga-ui/commit/224f9c7413de09030f92dcacb0264cada05b0ab0))
- **layout:** add appearance to default options ([#14003](https://github.com/taiga-family/taiga-ui/issues/14003))
  ([fb8c19b](https://github.com/taiga-family/taiga-ui/commit/fb8c19bfd939aa27ef82e9cd56693bb6594f961d))

### 🐞 Bug Fixes

- **core:** `Icons` minimize specificity ([#13997](https://github.com/taiga-family/taiga-ui/issues/13997))
  ([3f4d116](https://github.com/taiga-family/taiga-ui/commit/3f4d11615788a88cc2480db5ba0bf95991d0236b))
- **core:** `Textfield` fix icons scaling ([#14001](https://github.com/taiga-family/taiga-ui/issues/14001))
  ([8018c34](https://github.com/taiga-family/taiga-ui/commit/8018c340326bd30a0430470b8bad16af6c8f3c27))
- **kit:** use background-color instead of background ([#14022](https://github.com/taiga-family/taiga-ui/issues/14022))
  ([9ca1c27](https://github.com/taiga-family/taiga-ui/commit/9ca1c27c9372d5fece5d0d652a1d91fcd2ea1d8c))
- **layout:** `CardLarge` fix nested cells selector ([#14006](https://github.com/taiga-family/taiga-ui/issues/14006))
  ([331df9b](https://github.com/taiga-family/taiga-ui/commit/331df9b8a3de2bc401e92763fd1e62a75769e34d))
- **schematics:** migrate `[disabled]`/`[readOnly]` from legacy controls to inner inputs
  ([#14002](https://github.com/taiga-family/taiga-ui/issues/14002))
  ([ea540d6](https://github.com/taiga-family/taiga-ui/commit/ea540d6e13615956892573d529c33604f9cad5e8))
- **schematics:** migration for `FilterByInput` supports signal-based arguments
  ([#13965](https://github.com/taiga-family/taiga-ui/issues/13965))
  ([406c7ad](https://github.com/taiga-family/taiga-ui/commit/406c7adefa2587de694f6d1aafb03046f6009569))
- **schematics:** migration for legacy `InputPassword` duplicates attribute `type="password"`
  ([#13998](https://github.com/taiga-family/taiga-ui/issues/13998))
  ([217eb00](https://github.com/taiga-family/taiga-ui/commit/217eb001227872e8c11c95ab5ac8ff490beebea6))
- **schematics:** migration for legacy `InputPassword` fails to handle `tuiHintContent`
  ([#14012](https://github.com/taiga-family/taiga-ui/issues/14012))
  ([5480eaa](https://github.com/taiga-family/taiga-ui/commit/5480eaa1527733b1c4f5a2c2b95ed80004b14fa1))
- **schematics:** migration leaves excessive comment `"class/style" is an unrecognized attribute`
  ([#13964](https://github.com/taiga-family/taiga-ui/issues/13964))
  ([7f10efe](https://github.com/taiga-family/taiga-ui/commit/7f10efeca2aee9c2d6262a257dac55ce11beb51a))
- **schematics:** preserve label content when migrating legacy control with inner `<input>`
  ([#14008](https://github.com/taiga-family/taiga-ui/issues/14008))
  ([e77e2ae](https://github.com/taiga-family/taiga-ui/commit/e77e2aed92898b2810f5164c8e1650c5738e8a5a))

## [5.4.0](https://github.com/taiga-family/taiga-ui/compare/v5.3.0...v5.4.0) (2026-04-28)

### 🐞 Bug Fixes

- **addon-doc:** use fallback to `heading` when `id` is not defined
  ([#13968](https://github.com/taiga-family/taiga-ui/issues/13968))
  ([7f9536c](https://github.com/taiga-family/taiga-ui/commit/7f9536c686316a8a48ef338f09573a4e1ad553be))
- **cdk:** `ng-add` add styles package for pnpm ([#13958](https://github.com/taiga-family/taiga-ui/issues/13958))
  ([17a2d96](https://github.com/taiga-family/taiga-ui/commit/17a2d96f98aa9f80a2eddfee487640204a355ce1))
- **cdk:** missed imports during `tui-input[tuiHintContent]` migration for inline templates
  ([#13963](https://github.com/taiga-family/taiga-ui/issues/13963))
  ([6057bad](https://github.com/taiga-family/taiga-ui/commit/6057badfbf21b33e98efc38db3755a9ae07507b3))
- **core:** `tuiPresent` fix dummy animation ([#13938](https://github.com/taiga-family/taiga-ui/issues/13938))
  ([9c8ba13](https://github.com/taiga-family/taiga-ui/commit/9c8ba13c07942389a1bf3c9c2b27b7921671cf1f))
- **core:** expose dropdown hover state via public getter
  ([#13815](https://github.com/taiga-family/taiga-ui/issues/13815))
  ([792730d](https://github.com/taiga-family/taiga-ui/commit/792730da8127cf2a1d11b8a6273604164387fedc))
- **kit:** `Toast` fix positioning on mobile ([#13936](https://github.com/taiga-family/taiga-ui/issues/13936))
  ([0bfb447](https://github.com/taiga-family/taiga-ui/commit/0bfb44753b9fb2f67af3860b56bff0676f0842d8))
- **layout:** fix textfield multi inside `CardLarge` ([#13979](https://github.com/taiga-family/taiga-ui/issues/13979))
  ([3d05842](https://github.com/taiga-family/taiga-ui/commit/3d058427abc69e0663739728ef605fd036203002))
- **schematics:** drop `@taiga-ui/tsconfig/ng-dev-mode` migration dependency
  ([#13977](https://github.com/taiga-family/taiga-ui/issues/13977))
  ([bccd09f](https://github.com/taiga-family/taiga-ui/commit/bccd09f7e2a28d72ebce26c6b679d9fcc5e1c89b))
- **schematics:** invalid migration for `[tuiCardLarge][tuiSurface="elevated"]`
  ([#13932](https://github.com/taiga-family/taiga-ui/issues/13932))
  ([8d0e4af](https://github.com/taiga-family/taiga-ui/commit/8d0e4af1718bc6d5f6e2ab45741fc23edc06a5ff))
- **schematics:** missed import `TuiIcon` during migration of `tuiTextfieldCustomContent`
  ([#13951](https://github.com/taiga-family/taiga-ui/issues/13951))
  ([59f7f59](https://github.com/taiga-family/taiga-ui/commit/59f7f59ad1839dcafe9c4f3b664b026008497872))
- **styles:** revert fonts ([#13916](https://github.com/taiga-family/taiga-ui/issues/13916))
  ([b03c8cd](https://github.com/taiga-family/taiga-ui/commit/b03c8cdc5b6a9e6a9749cb9de464b94b7bb6ffca))

### 🚀 Features

- **addon-commerce:** add sign parameter to tuiAmount ([#13744](https://github.com/taiga-family/taiga-ui/issues/13744))
  ([794c0cd](https://github.com/taiga-family/taiga-ui/commit/794c0cdabca3452e3c747539ad573d3088f58c9f))
- **addon-doc:** resize icon should be configurable ([#13967](https://github.com/taiga-family/taiga-ui/issues/13967))
  ([5bc122f](https://github.com/taiga-family/taiga-ui/commit/5bc122fdaceb5c7208216ec12b363fceecd5ad0d))
- **addon-doc:** unwrap default module for component outlet
  ([#13957](https://github.com/taiga-family/taiga-ui/issues/13957))
  ([c2165ee](https://github.com/taiga-family/taiga-ui/commit/c2165eef030c1827837eaca911294f0ee49dae8a))

## [5.3.0](https://github.com/taiga-family/taiga-ui/compare/v5.2.0...v5.3.0) (2026-04-21)

### 🚀 Features

- **styles:** change weight fonts ([#13871](https://github.com/taiga-family/taiga-ui/issues/13871))
  ([9673e73](https://github.com/taiga-family/taiga-ui/commit/9673e73b7810e494032e963d6fad9bbe655aebbc))

### 🐞 Bug Fixes

- **addon-doc:** `DocCode` displays raw content as a fallback during SSR
  ([#13797](https://github.com/taiga-family/taiga-ui/issues/13797))
  ([f7f0471](https://github.com/taiga-family/taiga-ui/commit/f7f047133cec1da3b11b015db632b2eb5fd8c32c))
- **addon-table:** `Table` does not display cell with default plain template
  ([#13888](https://github.com/taiga-family/taiga-ui/issues/13888))
  ([2850155](https://github.com/taiga-family/taiga-ui/commit/2850155360ff9f33f05b5752143fbf14565a7ad5))
- **core:** `IconButton` fix displaying font icons ([#13833](https://github.com/taiga-family/taiga-ui/issues/13833))
  ([ff72eb0](https://github.com/taiga-family/taiga-ui/commit/ff72eb08f76fcadc110bde024f8f3e8abc936608))
- **core:** `SelectLike` fails to clear value on Backspace/Delete if caret is at the beginning/end
  ([#13873](https://github.com/taiga-family/taiga-ui/issues/13873))
  ([2d922d7](https://github.com/taiga-family/taiga-ui/commit/2d922d7d274ba4b820511c4e5d2fa643f9de40ed))
- **core:** fix textfield-multi with label and chip ([#13884](https://github.com/taiga-family/taiga-ui/issues/13884))
  ([0d083ce](https://github.com/taiga-family/taiga-ui/commit/0d083cebe2bf2364bac8fe257147dc283b921041))
- **kit:** `InputNumber` is incompatible with postfix containing digits
  ([#13631](https://github.com/taiga-family/taiga-ui/issues/13631))
  ([8c1260f](https://github.com/taiga-family/taiga-ui/commit/8c1260f055448acc617935d2e34d58d0c3db24d9))
- **kit:** failed to execute setSelectionRange on HTMLInputElement
  ([#13878](https://github.com/taiga-family/taiga-ui/issues/13878))
  ([0c869ac](https://github.com/taiga-family/taiga-ui/commit/0c869acd9cdbbdb74fce4062869820b74a2862bb))
- **layout:** reset vertical margin on `tuiList` ([#13882](https://github.com/taiga-family/taiga-ui/issues/13882))
  ([c88cf43](https://github.com/taiga-family/taiga-ui/commit/c88cf435055f68aef7d1541520eff5602f8bc96d))
- **schematics:** incomplete migration for `tui-doc-documentation` => `table[tuiDocAPI]`
  ([#13897](https://github.com/taiga-family/taiga-ui/issues/13897))
  ([57e32f9](https://github.com/taiga-family/taiga-ui/commit/57e32f9f3012bd4aaab5bc8baa932dc9c838eb0a))
- **schematics:** invalid migration for `tuiTextfieldCustomContent`
  ([#13899](https://github.com/taiga-family/taiga-ui/issues/13899))
  ([66fe57b](https://github.com/taiga-family/taiga-ui/commit/66fe57bf72df492decdbf9b546c9706670570c55))

## [5.2.0](https://github.com/taiga-family/taiga-ui/compare/v5.1.0...v5.2.0) (2026-04-13)

### 🚀 Features

- **core:** add factory provider for tuiValidationErrorsProvider
  ([#13606](https://github.com/taiga-family/taiga-ui/issues/13606))
  ([eb7c152](https://github.com/taiga-family/taiga-ui/commit/eb7c1525fe5c9ca76340fabbf04593d705214928))
- **kit:** `InputNumber` supports `[tuiNumberFormat]="{negativePattern: 'minusFirst'}"`
  ([#13673](https://github.com/taiga-family/taiga-ui/issues/13673))
  ([09b77d3](https://github.com/taiga-family/taiga-ui/commit/09b77d30e85b9297660681a9f0ccadb4bf068544))

### 🐞 Bug Fixes

- **addon-doc:** `DocExample` has hydration problems ([#13736](https://github.com/taiga-family/taiga-ui/issues/13736))
  ([cfa05ad](https://github.com/taiga-family/taiga-ui/commit/cfa05ad1042dcb18a5b0679e80b2c1bcfa616553))
- **addon-table:** `TableTr` has hydration problems ([#13791](https://github.com/taiga-family/taiga-ui/issues/13791))
  ([e16f116](https://github.com/taiga-family/taiga-ui/commit/e16f116d476d861120395139ebd4c4a9e31fe3b3))
- **cdk:** `FontSize` fix on Android WebView ([#13806](https://github.com/taiga-family/taiga-ui/issues/13806))
  ([ec81d96](https://github.com/taiga-family/taiga-ui/commit/ec81d966c001ac111b7c616180ed75fa60ade1c9))
- **cdk:** `Truncate` fix styles ([#13848](https://github.com/taiga-family/taiga-ui/issues/13848))
  ([046e957](https://github.com/taiga-family/taiga-ui/commit/046e9571217bca97dc4ab2ceb6dbd850e91cc0b9))
- **core:** `Carousel` fix selection drag ([#13781](https://github.com/taiga-family/taiga-ui/issues/13781))
  ([4585382](https://github.com/taiga-family/taiga-ui/commit/4585382e48f8c586a593e17355c265240da8dc83))
- **core:** fix animating label in textfield multi caused chrome to crash
  ([#13808](https://github.com/taiga-family/taiga-ui/issues/13808))
  ([84bf47f](https://github.com/taiga-family/taiga-ui/commit/84bf47f81847a7bd45ec9751bb0148e40116911c))
- **kit:** `checkFormat` fix equality file type ([#13783](https://github.com/taiga-family/taiga-ui/issues/13783))
  ([f57f5c0](https://github.com/taiga-family/taiga-ui/commit/f57f5c03a4eef371b2b22d9970c75614d6f8571b))
- **kit:** fix native color picker in input-color ([#13814](https://github.com/taiga-family/taiga-ui/issues/13814))
  ([dbb8d1e](https://github.com/taiga-family/taiga-ui/commit/dbb8d1ed1d54d72232054d088af8503334f281be))
- **layout:** fix line heights in some components ([#13813](https://github.com/taiga-family/taiga-ui/issues/13813))
  ([aa72801](https://github.com/taiga-family/taiga-ui/commit/aa72801f8fc15f38d798cb5b6d021895a5b5baec))
- **legacy:** missed deprecated global styles ([#13772](https://github.com/taiga-family/taiga-ui/issues/13772))
  ([7ebc9ba](https://github.com/taiga-family/taiga-ui/commit/7ebc9bad272a530dcd6fd7eca3ce7dcf01608afb))
- **styles:** fix h1 font-size/line-height ([#13790](https://github.com/taiga-family/taiga-ui/issues/13790))
  ([8c964a2](https://github.com/taiga-family/taiga-ui/commit/8c964a265cc7752d89384480c15f8529b350a2dc))

## [5.1.0](https://github.com/taiga-family/taiga-ui/compare/v5.0.0...v5.1.0) (2026-04-06)

### 🚀 Features

- **cdk:** `WindowSize` add signal util ([#13731](https://github.com/taiga-family/taiga-ui/issues/13731))
  ([43ec25a](https://github.com/taiga-family/taiga-ui/commit/43ec25acc396ee2776de8931aae04e23f83c05e8))
- **layout:** `Header` add `Description` block ([#13730](https://github.com/taiga-family/taiga-ui/issues/13730))
  ([ff662e3](https://github.com/taiga-family/taiga-ui/commit/ff662e3153cc9adf57b69cf7a5c78639057389a8))

### 🐞 Bug Fixes

- **cdk:** fix loader migration ([#13711](https://github.com/taiga-family/taiga-ui/issues/13711))
  ([86852c9](https://github.com/taiga-family/taiga-ui/commit/86852c9a9499b1529ebba4f790d0871626778aa8))
- **core:** portals is incompatible with client hydration
  ([#13733](https://github.com/taiga-family/taiga-ui/issues/13733))
  ([fab72bb](https://github.com/taiga-family/taiga-ui/commit/fab72bb52627c848e87cb4be2bbc1b95db3bc5d6))
- **core:** remove `overflow` in `[tuiTitle]` ([#13716](https://github.com/taiga-family/taiga-ui/issues/13716))
  ([cd88b6c](https://github.com/taiga-family/taiga-ui/commit/cd88b6c88a94dca7262c18de246049eff7c56eb2))
- **kit:** `InputFiles` fix touched state ([#13745](https://github.com/taiga-family/taiga-ui/issues/13745))
  ([0889324](https://github.com/taiga-family/taiga-ui/commit/08893247c12d13488789f120a5836476ae45ed34))
- **kit:** `InputNumber` fix hydration ([#13743](https://github.com/taiga-family/taiga-ui/issues/13743))
  ([730c4ff](https://github.com/taiga-family/taiga-ui/commit/730c4ffe6901a29b71ac794854605ea54b9207e0))
- **layout:** `Navigation` fix styles for transparency ([#13749](https://github.com/taiga-family/taiga-ui/issues/13749))
  ([8d92409](https://github.com/taiga-family/taiga-ui/commit/8d92409ebcb1bd5dd70e3e9c6cdfcba125f879cc))

## [5.0.0](https://github.com/taiga-family/taiga-ui/compare/v4.52.0...v5.0.0) (2026-04-01)

### ⚠ BREAKING CHANGES

- new minimal browser support (#13041)
  ([27c6df8](https://github.com/taiga-family/taiga-ui/commit/27c6df80e8248fe13dee70bc6701675329912a4b))
- bump minimum required Maskito version (v3+ => v4+) (#12239)
  ([4aaefdc](https://github.com/taiga-family/taiga-ui/commit/4aaefdceea1e4b7a3f682c732310a0c6548eb58c))
- rearrange some secondary entry points (#12628)
  ([147cda8](https://github.com/taiga-family/taiga-ui/commit/147cda809ef1ca3344aa85f7918e77d0303f1fca))
- drop Angular animations (#12688)
  ([d8d716a](https://github.com/taiga-family/taiga-ui/commit/d8d716a34f69b14162ba7c301669c777e4a44167))
- rename some CSS variables (#13251)
  ([7dcdee7](https://github.com/taiga-family/taiga-ui/commit/7dcdee7eb4b8b2b8830aac49608c9d418b286963))
- use logical 'start'/'end' instead of 'left'/'right' (#12856)
  ([7d2dbac](https://github.com/taiga-family/taiga-ui/commit/7d2dbac8a0f913d11a52decefe87a318eebf50cd))
- **cdk:** drop utils and tokens in favor of @ng-web-apis/platform (#12905)
  ([41dfaca](https://github.com/taiga-family/taiga-ui/commit/41dfacacf609357b99f86f6198ea08b21aaedbff))
- **cdk:** drop all unused features (#12606)
  ([48056ab](https://github.com/taiga-family/taiga-ui/commit/48056ab166c2f9868d1416b8cc0e904c9118157d))
- **cdk:** `RepeatTimes` drop directive and pipe (#12600)
  ([ede8f14](https://github.com/taiga-family/taiga-ui/commit/ede8f14d1df927ddf25dd8dacded2b27ffd5e709))
- **cdk:** `Pure` deprecate and move to legacy (#12864)
  ([3aacfff](https://github.com/taiga-family/taiga-ui/commit/3aacfff36a94015396bda2b0ed9eecb9264f91af))
- **core:** `DropdownOpen` add selector alias (#12625)
  ([b34e23c](https://github.com/taiga-family/taiga-ui/commit/b34e23c3c533bd042ace76d1d862097cf1451538))
- **core:** `Button` make end icon same size as start except for `Chevron` (#12776)
  ([4c61a73](https://github.com/taiga-family/taiga-ui/commit/4c61a734a21d53077eacf164df602d7ff2bd5834))
- **core:** `Appearance` drop glass (#13575)
  ([347454e](https://github.com/taiga-family/taiga-ui/commit/347454e88d1a573fe57b843117b85bbd2e69578e))
- **core:** `Link` restyle according to the specs, drop `[pseudo]` input (#12691)
  ([e53e79e](https://github.com/taiga-family/taiga-ui/commit/e53e79e756f91682ab9fc62bb482a12a513337be))
- **core:** `Calendar` move `TUI_DAY_TYPE_HANDLER`/`TUI_FIRST_DAY_OF_WEEK` into options (#12676)
  ([00d8cc4](https://github.com/taiga-family/taiga-ui/commit/00d8cc4e0372d79bd9157c335e0b408e2761c88f))
- **core:** `Point` normalize to mean `[x,y]` (#12692)
  ([abf3e8c](https://github.com/taiga-family/taiga-ui/commit/abf3e8c08137961dfa4ef7eb32b0dd9b5d1ac23c))
- **core:** `CalendarSheet` remove deprecated `[single]` input (#13536)
  ([c43e302](https://github.com/taiga-family/taiga-ui/commit/c43e3021c9ec93c59b0eaff8cbe2902d72b7e975))
- **core:** `FilterByInput` pipe add configurable behavior on exact item match (#13423)
  ([477d537](https://github.com/taiga-family/taiga-ui/commit/477d53794d264f0b79a96c8a145b256b56527673))
- **core:** `Textfield` drop icon by size distinction (#13184)
  ([3420efb](https://github.com/taiga-family/taiga-ui/commit/3420efb3811947c9149ce43157613b698f2b8a9f))
- **core:** `Popups` use single portal container for **dropdowns**, **alerts**, **hints** and **modals** (#12195)
  ([0574645](https://github.com/taiga-family/taiga-ui/commit/057464561bae50279d5a2eb81f61ad2eb3f6d22d))
- **core:** `Alert` rename to `Notification` (#12501)
  ([cc93bb5](https://github.com/taiga-family/taiga-ui/commit/cc93bb57686560401888106d6567a3b8e794ae3b))
- **core:** `Error` automatically show control errors, drop `FieldError` pipe (#12041)
  ([77f8926](https://github.com/taiga-family/taiga-ui/commit/77f8926e709fb4f9c409a6c38cec424db82ad3ef))
- **core:** `Icon` move icon from `::after` to `::before` (#11884)
  ([f729878](https://github.com/taiga-family/taiga-ui/commit/f7298783ffc69ef90434e68e96fc1e5e9f5a8580))
- **core:** `Icons` load relative to the base href (#12432)
  ([82ae6ac](https://github.com/taiga-family/taiga-ui/commit/82ae6ac6559f419c2753a33072883449dbe01f63))
- **core:** `FormatNumber` pipe refactor to signal (#12441)
  ([a49d2bf](https://github.com/taiga-family/taiga-ui/commit/a49d2bf81a77cbabcde5cf5ac64d192f01cfca27))
- **core:** add `TUI_BREAKPOINT` token, drop `TuiBreakpointService` service (#12642)
  ([288a8d3](https://github.com/taiga-family/taiga-ui/commit/288a8d3f383ebcc16e5517de90079710cb2e135f))
- **core:** `Loader` rename `[showLoader]` input to `[loading]` (#12215)
  ([b4afe74](https://github.com/taiga-family/taiga-ui/commit/b4afe7471d716cf2752e0ffc5320bbeeb147293b))
- **core:** `TUI_NUMBER_FORMAT` refactor to signals (#12397)
  ([e10379c](https://github.com/taiga-family/taiga-ui/commit/e10379c837d0894601a472867f8b525864ab0788))
- **core:** `TUI_DATE_FORMAT` refactor to signals (#12373)
  ([9806e91](https://github.com/taiga-family/taiga-ui/commit/9806e912e30ca7a6cde7e082b4b9cc0db907e6c3))
- **kit:** `Slider` remove options in favor of CSS (#12965)
  ([322fcc1](https://github.com/taiga-family/taiga-ui/commit/322fcc16a425e034d9c56b4b8d6c58af2d973d4b))
- **kit:** `Slider` supports custom thumb radius customization (drop `[size]` & `--tui-thickness`) (#12739)
  ([dbff077](https://github.com/taiga-family/taiga-ui/commit/dbff0777f4458ce742afda8b5fd0ab63f5713ab9))
- **kit:** `Badge` drop tag selector in favor of attribute (#12895)
  ([d0b2607](https://github.com/taiga-family/taiga-ui/commit/d0b26079c7e1a5a7d050f72be1527d9c9e439b6f))
- **kit:** `Chip` drop tag selector in favor of attribute (#12898)
  ([90134f9](https://github.com/taiga-family/taiga-ui/commit/90134f9d28df8344d937c4f8017afd5daa797c1f))
- **kit:** `Avatar` drop tag selector in favor of attribute (#11920)
  ([698642f](https://github.com/taiga-family/taiga-ui/commit/698642f33aa8ace5b083b157fb001360b97e4fe0))
- **kit:** `Avatar` drop images in favor of nested `img` tag, drop `FallbackSrc` pipe (#11931)
  ([d07dd21](https://github.com/taiga-family/taiga-ui/commit/d07dd211c311ecde55b7742b0656ee5be001247e))
- **kit:** `Tabs`, `TabsWithMore`, `Stepper` remove redundant selectors (#12899)
  ([ef869ca](https://github.com/taiga-family/taiga-ui/commit/ef869ca0e6a580bd0fc5e7f568150124fa38242e))
- **kit:** move `Checkbox`, `Radio` and `Slider` to Core (#13221)
  ([7057bff](https://github.com/taiga-family/taiga-ui/commit/7057bff8dc909dc612bfbb21dd00e4ecafafeeed))
- **kit:** `InputNumber` add `BigInt` support (#12785)
  ([40f40e1](https://github.com/taiga-family/taiga-ui/commit/40f40e1438cc7771acb24da0da5b119b2e731ec9))
- **kit:** `Range` uses logical values for internal output `(activeThumbChange)` (#12125)
  ([821ecf6](https://github.com/taiga-family/taiga-ui/commit/821ecf6eb0b7839ffa0f25034f88d46389413f2a))
- **kit:** `InputPhoneInternational` graduate from experimental (#12147)
  ([97ccdb2](https://github.com/taiga-family/taiga-ui/commit/97ccdb24cabdc4ab4c627f869819d4c6dc0651b4))
- **kit:** `Accordion` and `Expand` graduate from experimental (#12115)
  ([7b16f44](https://github.com/taiga-family/taiga-ui/commit/7b16f44cb1d59703bd4cfa89b29625dc32809393))
- **kit:** `InputRange` uses new approach to implement negative values without the minus sign (#12796)
  ([1afa408](https://github.com/taiga-family/taiga-ui/commit/1afa408c3d237bbf0045c8e58926b97b5b0f9869))
- **kit:** `TUI_CALENDAR_DATE_STREAM` move to addon-mobile (#12790)
  ([1f47f12](https://github.com/taiga-family/taiga-ui/commit/1f47f12b5b052de7f4babd3516a1c8fa1a02aab9))
- **kit:** `FloatingContainer`, `ElasticContainer`, `Slides` move to layout (#12708)
  ([9b62bf7](https://github.com/taiga-family/taiga-ui/commit/9b62bf7b99186bd9d768958ef5ea770a45a69197))
- **kit:** drop the `s` size from `Pagination` in favor of `Pager` (#12602)
  ([cf98683](https://github.com/taiga-family/taiga-ui/commit/cf98683abd733a3f2c414d13db7341943eab9ece))
- **kit:** drop `ImgLazyLoading` (#12648)
  ([ca43bcb](https://github.com/taiga-family/taiga-ui/commit/ca43bcb62cec658dd03e123881a0b6695dcbf1d7))
- **kit:** drop `FormatDate` service and pipe in favor of angular `DatePipe` (#12607)
  ([6664575](https://github.com/taiga-family/taiga-ui/commit/6664575b38190aed30728ad2afaea8e12b4c8d9f))
- **i18n:** refactor to signals (#12271)
  ([f7d2773](https://github.com/taiga-family/taiga-ui/commit/f7d2773e735db4a454bccf48acc8c1d0c91babcb))
- **i18n:** use uppercase for date fillers (#13392)
  ([9d62e6f](https://github.com/taiga-family/taiga-ui/commit/9d62e6f94c45e93ec41975b3ce0b3d315da9731f))
- **i18n:** rename `TUI_JAPAN_LANGUAGE` => `TUI_JAPANESE_LANGUAGE` (#13334)
  ([e38696b](https://github.com/taiga-family/taiga-ui/commit/e38696b41785b80885b35341203937bc2432725a))
- **i18n:** delete invalid time mode `MM.SS.MSS` (#13333)
  ([be13112](https://github.com/taiga-family/taiga-ui/commit/be131128206e744f9126a541767c77f416802e6c))
- **addon-doc:** change design, add icons for sections (#12985)
  ([eb8b52f](https://github.com/taiga-family/taiga-ui/commit/eb8b52fe0af220e3750763bf9cfe1cf68a53ea8f))
- **addon-doc:** drop RTL and theme switch, move it to demo (#13675)
  ([a739e04](https://github.com/taiga-family/taiga-ui/commit/a739e0478e54a52a65aed5a15636c2e201b43738))
- **addon-charts:** `Axes` make the height of labels dynamic, include the main axis in lines count (#12844)
  ([298d519](https://github.com/taiga-family/taiga-ui/commit/298d5198f69cc47bcf96979249b2071a88ee41ec))
- **addon-commerce:** `Amount`, `Decimal` pipes refactor to signal (#12594)
  ([6308a08](https://github.com/taiga-family/taiga-ui/commit/6308a0810b580dfb8fe76ffad85074b1ce25d1cd))
- **addon-commerce:** `InputCard` drop options and `[icon]` input (#11940)
  ([6c67ccf](https://github.com/taiga-family/taiga-ui/commit/6c67ccfa3bb09c684b71fcd403e2a2b5fa3ca914))
- **addon-commerce:** `ThumbnailCard` drop `[monoHandler]` in favor of `@img.` prefix (#11919)
  ([432e963](https://github.com/taiga-family/taiga-ui/commit/432e963d2b9c9979df6e3df9a7b0eb7eef5d7cbe))
- **addon-mobile:** `DropdownSheet` move into a separate directive (#12214)
  ([24efa35](https://github.com/taiga-family/taiga-ui/commit/24efa35376de60c36e18247ec043a8fc9353be5b))
- **layout:** `Header` update size naming (#12812)
  ([1146e5f](https://github.com/taiga-family/taiga-ui/commit/1146e5f1bdde46cb03284e4337257b38bba859db))
- **layout:** move `Cell` to core, add appearance to `Card`, drop it from `Surface` (#12116)
  ([1ea42f6](https://github.com/taiga-family/taiga-ui/commit/1ea42f6fe13357058ea538ab54df4f711ef90d32))
- **legacy:** remove all previous legacy (#12611)
  ([10c4edc](https://github.com/taiga-family/taiga-ui/commit/10c4edc4fdec77689098764b0be6a6f2b22203fe))
- **legacy:** `@taiga-ui/styles` move deprecated styles to legacy (#12878)
  ([f7c41e6](https://github.com/taiga-family/taiga-ui/commit/f7c41e637d9eb485d2ef6ad00ae795baca3ca51a))

### 🚀 Features

- improve accessibility and RTL support
- add version encapsulation for all non-encapsulated styles (#13603)
  ([1dc63e4](https://github.com/taiga-family/taiga-ui/commit/1dc63e43aa0ad136e519c96a25ae0e90c48db923))
- move all shared styles to `@taiga-ui/styles` (#13189)
  ([7dd6a2d](https://github.com/taiga-family/taiga-ui/commit/7dd6a2d34bd01e11b8dcf6710e596dbc0abc8fd9))
- bump lucide-static pack to v1.7.0 (#13620)
  ([da47b2c](https://github.com/taiga-family/taiga-ui/commit/da47b2c69801a5159ae182281b43f2d71e69fa00))
- **cdk:** `FontSizeWatcher` support `env(preferred-text-scale)` (#13205)
  ([379aa0f](https://github.com/taiga-family/taiga-ui/commit/379aa0fa2b9d62ceefed53dc91cddc4f31468c84))
- **cdk:** `Portal` add new service (#12187)
  ([d74d4a7](https://github.com/taiga-family/taiga-ui/commit/d74d4a7e7b49fa6e89f7f0c179b520c73e72eae4))
- **cdk:** `SetSignal` add new util helper (#11914)
  ([160c125](https://github.com/taiga-family/taiga-ui/commit/160c125bbf93174c06daef858c6c67821db663b5))
- **core:** `provideTaiga` add helper (#12032)
  ([cfbced0](https://github.com/taiga-family/taiga-ui/commit/cfbced05e61f8d99a2e67745a05666e3d767658c))
- **core:** `Icon` allow setting thickness (#11624)
  ([6988082](https://github.com/taiga-family/taiga-ui/commit/69880824222d05a04c2c48748c3b97d195c2b8b0))
- **core:** `Textfield` add multiline label (#13546)
  ([8401828](https://github.com/taiga-family/taiga-ui/commit/8401828e1434d06e6559896c7a72612a4203d7a3))
- **core:** `Textfield` grow in height if font scaling used with label (#13383)
  ([1d0f0be](https://github.com/taiga-family/taiga-ui/commit/1d0f0beee75954e436191d01f514903932850861))
- **core:** `Textfield` use `Cell` in template (#13155)
  ([5ec6a23](https://github.com/taiga-family/taiga-ui/commit/5ec6a23676eeac245c23ed3d4adbfa3634903d60))
- **core:** `Carousel` add new component, deprecate old one (#13566)
  ([156cf91](https://github.com/taiga-family/taiga-ui/commit/156cf91a0236127d3a4c13cc469e7d46238a7154))
- **core:** bump small font to 14px (#13160)
  ([8b0b9ac](https://github.com/taiga-family/taiga-ui/commit/8b0b9ac68ca16a1e602f9b40ff31698e151699b1))
- **core:** `Icons` scale to 125% when font scaling is more than 10px (#12782)
  ([05275b1](https://github.com/taiga-family/taiga-ui/commit/05275b18bd105ca86813219509eb04370345179c))
- **core:** `Alert` make position configurable (#12209)
  ([1a48a6a](https://github.com/taiga-family/taiga-ui/commit/1a48a6a70ea321ea597543fff1a808107607377f))
- **kit:** `CalendarRange` add period list size input (#13531)
  ([7c1609c](https://github.com/taiga-family/taiga-ui/commit/7c1609c62dba77f0fef42d491d774b2d5b384b92))
- **kit:** `Timeline` add new component (#13373)
  ([3e212bd](https://github.com/taiga-family/taiga-ui/commit/3e212bd2d5593b471c08ff18f5280eb38a612c74))
- **kit:** `Tabs` improve underline performance (#11932)
  ([06f29db](https://github.com/taiga-family/taiga-ui/commit/06f29db709aef188c8843c60ee211bdeeb575912))
- **kit:** `Copy` work with `TextfieldMulti` (#13096)
  ([7bb8125](https://github.com/taiga-family/taiga-ui/commit/7bb8125e87093afb6b789b3b04827d09c94232d3))
- **kit:** `InputChip` scrolls to the last item on focus (#12443)
  ([61fea47](https://github.com/taiga-family/taiga-ui/commit/61fea47156958c72a7eb5e483348c8dec4799fb5))
- **kit:** add `TUI_PAGINATION_OPTIONS` token to customize button appearance in pagination (#12386)
  ([14ee4aa](https://github.com/taiga-family/taiga-ui/commit/14ee4aa0c9ed3acec8396750755f50ba1f66c2e6))
- **kit:** use `design-tokens` as peer dependency (#12131)
  ([692273c](https://github.com/taiga-family/taiga-ui/commit/692273c525de67d5b0ad26596c85e875e9f1450b))
- **kit:** `Chip` update according to specs (#12176)
  ([cda4eab](https://github.com/taiga-family/taiga-ui/commit/cda4eab0080b45912de594173d811eaa6db6dc26))
- **kit:** `Avatar` add `badge` input (#11963)
  ([a240121](https://github.com/taiga-family/taiga-ui/commit/a24012107103e951a7c9418a6c72cefbcd237977))
- **i18n:** add `addon-doc` translations to `@taiga-ui/i18n` package (#13641)
  ([8b3debb](https://github.com/taiga-family/taiga-ui/commit/8b3debbe6331d2068610fc93b1828635ead6f259))
- **i18n:** add `dayRangePeriod` locale (#12521)
  ([c287e2b](https://github.com/taiga-family/taiga-ui/commit/c287e2b170c0d2f49fcf3a98fcc8ab70aaafac1f))
- **addon-doc:** `TOC` add new table of contents component (#13002)
  ([f7d01f7](https://github.com/taiga-family/taiga-ui/commit/f7d01f741ef5260488e1e50a6fab4aea9542ec59))
- **addon-mobile:** `Switch` use native on iOS when supported (#12653)
  ([781d295](https://github.com/taiga-family/taiga-ui/commit/781d29515e49980b446dd47d1c8a2a028cae3a79))
- **addon-table:** `Sorter` add pipe (#13070)
  ([52cc60f](https://github.com/taiga-family/taiga-ui/commit/52cc60f46b577d255aba0b845e43db166ccfa36b))
- **layout:** `PdfViewer` add new component (#11898)
  ([11c7331](https://github.com/taiga-family/taiga-ui/commit/11c73313d74f60ff3d8a9eaad5e9d8b9907398a7))
- **layout:** `Form` add `legend` styles (#13222)
  ([47548da](https://github.com/taiga-family/taiga-ui/commit/47548da5343010295e35feb4865fd17f9e9bee3e))
- **experimental:** add `Popout` service (#13247)
  ([af7905d](https://github.com/taiga-family/taiga-ui/commit/af7905d82a8ca801c3079742e30b9136ca3ad165))

### 🐞 Bug Fixes

- **core:** `Group` fix mask (#13671)
  ([f4f53a9](https://github.com/taiga-family/taiga-ui/commit/f4f53a91bb7a4c349ed3d80190a83d2ddc2882e5))
- **core:** `Button` implement disabled state for links (#13535)
  ([a5c8447](https://github.com/taiga-family/taiga-ui/commit/a5c8447173dd774b80400b87ad21867379502a31))
- **core:** `Scrollbar` add vertical offset for bar to accommodate large border radii (#11890)
  ([2ace64b](https://github.com/taiga-family/taiga-ui/commit/2ace64b79a52b546683d5ddbce54d07ab65cf2ea))
- **core:** `DataList` fix spacings according to specs (#13183)
  ([4aef4fe](https://github.com/taiga-family/taiga-ui/commit/4aef4fe8825c431f760c113759a740c118cd44e7))
- **kit:** `ComboBox` should emit `(input)` event on erasing unmatched value on blur (#13008)
  ([8fabcdf](https://github.com/taiga-family/taiga-ui/commit/8fabcdf1581335478aff9767e392ad47f6a0c1e3))
- **kit:** `InputNumber` ignores `[tuiNumberFormat]="{rounding: '...'}"` (#13032)
  ([bc7abf2](https://github.com/taiga-family/taiga-ui/commit/bc7abf232712661efb7628be6201a826324f9ecf))
- **kit:** `LineClamp` react to font scaling (#13138)
  ([088b5cb](https://github.com/taiga-family/taiga-ui/commit/088b5cbb811033d1d1b9e9f151910193d2c314b7))
- **kit:** `Range` has unexpected shift on `pointerdown` without subsequent `pointermove` events (#13153)
  ([bc2703a](https://github.com/taiga-family/taiga-ui/commit/bc2703aae61f118635879239c8bc67b047302957))
- **kit:** `InputPin`: caret jumps two characters when the `ArrowLeft` event is triggered (#13684)
  ([11a5c17](https://github.com/taiga-family/taiga-ui/commit/11a5c17b047b0421a9e22019c22e6093c46c5b98))
- **kit:** `InputNumber` fails to update control value on insertion of decimal separator or negative sign (#13669)
  ([5592075](https://github.com/taiga-family/taiga-ui/commit/5592075395e55324fa5edca72f099dfcc131b005))
- **kit:** close `TabsWithMore` dropdown when `activeItemIndex` is updated externally (#13309)
  ([14fd5ac](https://github.com/taiga-family/taiga-ui/commit/14fd5ac1fab33b3e4a3a477bb25d4b676f651bb0))
- **kit:** `InputTime` should pad incomplete time string with zeroes on blur (#12156)
  ([0f678dc](https://github.com/taiga-family/taiga-ui/commit/0f678dc1e27a0a098d20bd739c1d39183a6cc20b))
- **layout:** `Surface` fix shadow for floating appearance (#13180)
  ([eda80e1](https://github.com/taiga-family/taiga-ui/commit/eda80e170639fe4a7cb96d4e2211f4885463b92e))
- **layout:** `Surface` update presets according to specs (#13126)
  ([5685440](https://github.com/taiga-family/taiga-ui/commit/5685440290fce6a7d18e783724953d4e164b80de))

### Migration guide

This release introduces a lot of breaking changes.<br/> Most of them can be solved automatically with the following
command:

**Angular CLI:**

```bash
ng update @taiga-ui/cdk
```

**Nx CLI:**

```bash
nx migrate @taiga-ui/cdk
nx migrate --run-migrations=migrations.json
```

## [4.x CHANGELOG...](https://github.com/taiga-family/taiga-ui/blob/v4.x/CHANGELOG.md)

## [3.x CHANGELOG...](https://github.com/taiga-family/taiga-ui/blob/v3.x/CHANGELOG.md)

## [2.x CHANGELOG...](https://github.com/taiga-family/taiga-ui/blob/v2.x/CHANGELOG.md)
