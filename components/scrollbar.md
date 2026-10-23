# Scrollbar

- **Package**: `CORE`
- **Type**: components

`Scrollbar` implements a custom scrollbar in Taiga UI style. Native scrollbar is hidden to keep native platform scroll experience Use `TUI_SCROLL_REF` token to get a scrollable container. For example, when working with virtual scroll.

### Usage Examples

#### Vertical

**Template:**
```html
<tui-scrollbar class="box">
<div class="content">
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </p>
<p> Ab aperiam beatae consequatur magnam mollitia necessitatibus quam qui quibusdam soluta, suscipit. Aut doloremque eum, hic quae ratione sunt suscipit! Eaque esse illo libero minima molestiae neque, nobis velit voluptates? </p>
<p> Animi est facere maxime porro quae quibusdam quos totam? Consectetur eligendi, explicabo magnam maxime sit voluptatibus. Assumenda beatae deserunt dolorem earum et eum harum in maxime quae, quam quos rem. </p>
<p> Adipisci commodi consectetur id iure praesentium quam quisquam unde veniam. Corporis cum dicta distinctio error excepturi, impedit quidem veritatis? Cupiditate eos illum ipsum labore, modi omnis repudiandae velit veniam voluptatem. </p>
<p> Asperiores dolorum, ex facilis hic maiores modi neque nisi nobis nostrum numquam placeat quod repellendus sequi velit voluptate! Adipisci atque deleniti eligendi ex tenetur. Beatae cumque dolore impedit perferendis repellat. </p>
</div>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbar} from '@taiga-ui/core';

@Component({
    imports: [TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.box {
    inline-size: 16rem;
    block-size: 9.75rem;
    border: 1px solid;
}

.content {
    padding: 0 0.6875rem;
}
```

#### Horizontal

**Template:**
```html
<tui-scrollbar class="box">
<div class="line"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda delectus dolor eveniet maiores nobis quaerat quo velit vero voluptatem? Aliquam at deserunt excepturi id officiis porro quo quos voluptatum? </div>
<div class="line"> Ab aperiam beatae consequatur magnam mollitia necessitatibus quam qui quibusdam soluta, suscipit. Aut doloremque eum, hic quae ratione sunt suscipit! Eaque esse illo libero minima molestiae neque, nobis velit voluptates? </div>
<div class="line"> Animi est facere maxime porro quae quibusdam quos totam? Consectetur eligendi, explicabo magnam maxime sit voluptatibus. Assumenda beatae deserunt dolorem earum et eum harum in maxime quae, quam quos rem. </div>
<div class="line"> Adipisci commodi consectetur id iure praesentium quam quisquam unde veniam. Corporis cum dicta distinctio error excepturi, impedit quidem veritatis? Cupiditate eos illum ipsum labore, modi omnis repudiandae velit veniam voluptatem. </div>
<div class="line"> Asperiores dolorum, ex facilis hic maiores modi neque nisi nobis nostrum numquam placeat quod repellendus sequi velit voluptate! Adipisci atque deleniti eligendi ex tenetur. Beatae cumque dolore impedit perferendis repellat. </div>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbar} from '@taiga-ui/core';

@Component({
    imports: [TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.box {
    inline-size: 16rem;
    block-size: 16rem;
    border: 1px solid;
}

.line {
    padding: 0 0.6875rem;
    white-space: nowrap;
}
```

#### All

**Template:**
```html
<div>
<code>top: {{ scrollTop }}</code>
</div>
<div>
<code>left: {{ scrollLeft }}</code>
</div>
<button size="m" tuiButton type="button" class="tui-space_vertical-3" (click)="onClick()" > Scroll {{ scrollTop < someOffsetConst ? 'bottom' : 'top' }} </button>
<tui-scrollbar class="box">
<div class="content">
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos, doloremque. Aperiam assumenda atque aut blanditiis corporis, eum, facilis harum laudantium magni necessitatibus nobis quas repudiandae sint ut voluptatem! Optio. </p>
<p> Accusamus aperiam assumenda aut consectetur, corporis delectus, dolor eaque eius est hic impedit labore possimus provident quas rem, rerum sequi sint tempora tempore ut? Debitis esse neque odio odit provident? </p>
<p> Cum eum illo, ipsa iure nostrum ut voluptates? Autem blanditiis corporis debitis deserunt ex expedita facilis fuga, illum iusto magnam praesentium provident recusandae repudiandae, totam, voluptatem. Minima numquam sapiente sunt. </p>
<p> Beatae consectetur cupiditate dignissimos ducimus eos excepturi labore pariatur placeat quia similique. Architecto aspernatur cumque debitis distinctio esse, facere fugit harum ipsum libero minus neque numquam omnis quidem, tempora, ut! </p>
<p> Mollitia, perspiciatis sunt! Architecto aspernatur assumenda beatae, blanditiis commodi consequuntur debitis et id, laboriosam maxime molestiae neque nihil officiis omnis, quam quos sint veritatis voluptate? Alias deserunt distinctio modi perferendis? </p>
<p> Ab aspernatur aut cumque cupiditate deleniti, dolorem ducimus eligendi eos facere harum hic ipsam ipsum iste itaque modi nam necessitatibus nostrum nulla omnis quae repellat, sapiente sit tempore. Ipsam, quidem! </p>
<p> Ab debitis deleniti distinctio est ex facere magni nemo numquam placeat quia, quibusdam sequi! Aliquid at consectetur culpa ea enim facilis, harum hic, inventore iste possimus praesentium quas tempora voluptates. </p>
<p> Aliquam eligendi ipsam modi nemo numquam obcaecati officia, quidem unde? Accusantium amet, animi deleniti dolorum ea earum eos, expedita ipsa minima modi, pariatur perspiciatis porro quibusdam quo repellat tempore voluptates! </p>
<p> Ab assumenda fugiat magni natus officiis perferendis ratione rem repellendus tenetur. At commodi laudantium modi, natus nobis nulla odio odit sed sint tempora tenetur voluptas? At odio praesentium quas ut! </p>
<p> Atque aut consectetur consequuntur debitis eius facere ipsa ipsam maiores minima minus mollitia qui quos repudiandae sapiente, soluta? Ad, amet dolore doloribus ducimus eos exercitationem molestiae quisquam soluta ullam voluptate. </p>
</div>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {Component, ElementRef, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiScrollbar} from '@taiga-ui/core';

const SOME_OFFSET_CONST = 20;

@Component({
    imports: [TuiButton, TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly scrollBar = viewChild(TuiScrollbar, {read: ElementRef<HTMLElement>});

    protected someOffsetConst = SOME_OFFSET_CONST;

    protected get scrollTop(): number {
        return this.scrollBar()?.nativeElement.scrollTop ?? 0;
    }

    protected get scrollLeft(): number {
        return this.scrollBar()?.nativeElement.scrollLeft ?? 0;
    }

    protected onClick(): void {
        const scrollbar = this.scrollBar();

        if (!scrollbar) {
            return;
        }

        scrollbar.nativeElement.scrollTop =
            scrollbar.nativeElement.scrollTop < SOME_OFFSET_CONST
                ? scrollbar.nativeElement.scrollHeight
                : 0;
    }
}
```

**LESS:**
```less
.box {
    inline-size: 16rem;
    block-size: 16rem;
    border: 1px solid;
}

.content {
    padding: 0 0.6875rem;
}

p {
    white-space: nowrap;
}
```

#### Hidden

**Template:**
```html
<tui-scrollbar class="box">
<div class="content">
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos, doloremque. Aperiam assumenda atque aut blanditiis corporis, eum, facilis harum laudantium magni necessitatibus nobis quas repudiandae sint ut voluptatem! Optio. </p>
<p> Accusamus aperiam assumenda aut consectetur, corporis delectus, dolor eaque eius est hic impedit labore possimus provident quas rem, rerum sequi sint tempora tempore ut? Debitis esse neque odio odit provident? </p>
<p> Cum eum illo, ipsa iure nostrum ut voluptates? Autem blanditiis corporis debitis deserunt ex expedita facilis fuga, illum iusto magnam praesentium provident recusandae repudiandae, totam, voluptatem. Minima numquam sapiente sunt. </p>
<p> Beatae consectetur cupiditate dignissimos ducimus eos excepturi labore pariatur placeat quia similique. Architecto aspernatur cumque debitis distinctio esse, facere fugit harum ipsum libero minus neque numquam omnis quidem, tempora, ut! </p>
<p> Mollitia, perspiciatis sunt! Architecto aspernatur assumenda beatae, blanditiis commodi consequuntur debitis et id, laboriosam maxime molestiae neque nihil officiis omnis, quam quos sint veritatis voluptate? Alias deserunt distinctio modi perferendis? </p>
<p> Ab aspernatur aut cumque cupiditate deleniti, dolorem ducimus eligendi eos facere harum hic ipsam ipsum iste itaque modi nam necessitatibus nostrum nulla omnis quae repellat, sapiente sit tempore. Ipsam, quidem! </p>
<p> Ab debitis deleniti distinctio est ex facere magni nemo numquam placeat quia, quibusdam sequi! Aliquid at consectetur culpa ea enim facilis, harum hic, inventore iste possimus praesentium quas tempora voluptates. </p>
<p> Aliquam eligendi ipsam modi nemo numquam obcaecati officia, quidem unde? Accusantium amet, animi deleniti dolorum ea earum eos, expedita ipsa minima modi, pariatur perspiciatis porro quibusdam quo repellat tempore voluptates! </p>
<p> Ab assumenda fugiat magni natus officiis perferendis ratione rem repellendus tenetur. At commodi laudantium modi, natus nobis nulla odio odit sed sint tempora tenetur voluptas? At odio praesentium quas ut! </p>
<p> Atque aut consectetur consequuntur debitis eius facere ipsa ipsam maiores minima minus mollitia qui quos repudiandae sapiente, soluta? Ad, amet dolore doloribus ducimus eos exercitationem molestiae quisquam soluta ullam voluptate. </p>
</div>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbar, tuiScrollbarOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiScrollbarOptionsProvider({mode: 'hidden'})],
})
export default class Example {}
```

**LESS:**
```less
.box {
    inline-size: 16rem;
    block-size: 16rem;
    border: 1px solid;
}

.content {
    padding: 0 0.6875rem;
}

p {
    white-space: nowrap;
}
```

#### Light scrollbar

**Template:**
```html
<tui-scrollbar tuiTheme="dark" class="box" >
<div class="content">
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos, doloremque. Aperiam assumenda atque aut blanditiis corporis, eum, facilis harum laudantium magni necessitatibus nobis quas repudiandae sint ut voluptatem! Optio. </p>
<p> Accusamus aperiam assumenda aut consectetur, corporis delectus, dolor eaque eius est hic impedit labore possimus provident quas rem, rerum sequi sint tempora tempore ut? Debitis esse neque odio odit provident? </p>
<p> Cum eum illo, ipsa iure nostrum ut voluptates? Autem blanditiis corporis debitis deserunt ex expedita facilis fuga, illum iusto magnam praesentium provident recusandae repudiandae, totam, voluptatem. Minima numquam sapiente sunt. </p>
<p> Beatae consectetur cupiditate dignissimos ducimus eos excepturi labore pariatur placeat quia similique. Architecto aspernatur cumque debitis distinctio esse, facere fugit harum ipsum libero minus neque numquam omnis quidem, tempora, ut! </p>
<p> Mollitia, perspiciatis sunt! Architecto aspernatur assumenda beatae, blanditiis commodi consequuntur debitis et id, laboriosam maxime molestiae neque nihil officiis omnis, quam quos sint veritatis voluptate? Alias deserunt distinctio modi perferendis? </p>
<p> Ab aspernatur aut cumque cupiditate deleniti, dolorem ducimus eligendi eos facere harum hic ipsam ipsum iste itaque modi nam necessitatibus nostrum nulla omnis quae repellat, sapiente sit tempore. Ipsam, quidem! </p>
<p> Ab debitis deleniti distinctio est ex facere magni nemo numquam placeat quia, quibusdam sequi! Aliquid at consectetur culpa ea enim facilis, harum hic, inventore iste possimus praesentium quas tempora voluptates. </p>
<p> Aliquam eligendi ipsam modi nemo numquam obcaecati officia, quidem unde? Accusantium amet, animi deleniti dolorum ea earum eos, expedita ipsa minima modi, pariatur perspiciatis porro quibusdam quo repellat tempore voluptates! </p>
<p> Ab assumenda fugiat magni natus officiis perferendis ratione rem repellendus tenetur. At commodi laudantium modi, natus nobis nulla odio odit sed sint tempora tenetur voluptas? At odio praesentium quas ut! </p>
<p> Atque aut consectetur consequuntur debitis eius facere ipsa ipsam maiores minima minus mollitia qui quos repudiandae sapiente, soluta? Ad, amet dolore doloribus ducimus eos exercitationem molestiae quisquam soluta ullam voluptate. </p>
</div>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbar} from '@taiga-ui/core';

@Component({
    imports: [TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.box {
    inline-size: 16rem;
    block-size: 16rem;
    background: var(--tui-background-base-alt);
}

.content {
    padding: 0 0.6875rem;
}

p {
    color: fade(#fff, 72%);
    white-space: nowrap;
}
```

#### Virtual scroll

**Template:**
```html
<button type="button" (click)="add()" > Add </button>
<cdk-virtual-scroll-viewport itemSize="50" tuiScrollRef class="example-viewport" >
<tui-scroll-controls />
<div *cdkVirtualFor="let item of items" class="example-item" > {{ item }} </div>
</cdk-virtual-scroll-viewport>
```

**TypeScript:**
```ts
import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollControls, TuiScrollRef} from '@taiga-ui/core';

@Component({
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        TuiScrollControls,
        TuiScrollRef,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);

    protected add(): void {
        this.items = [...this.items, `Item #${this.items.length}`];
    }
}
```

**LESS:**
```less
.example-viewport {
    block-size: 12.5rem;
    border: 1px solid;
}

.example-item {
    block-size: 3.125rem;
}
```

#### Show scroll bars on hover

**Template:**
```html
<tui-scrollbar class="box">
<div class="content">
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos, doloremque. Aperiam assumenda atque aut blanditiis corporis, eum, facilis harum laudantium magni necessitatibus nobis quas repudiandae sint ut voluptatem! Optio. </p>
<p> Accusamus aperiam assumenda aut consectetur, corporis delectus, dolor eaque eius est hic impedit labore possimus provident quas rem, rerum sequi sint tempora tempore ut? Debitis esse neque odio odit provident? </p>
<p> Cum eum illo, ipsa iure nostrum ut voluptates? Autem blanditiis corporis debitis deserunt ex expedita facilis fuga, illum iusto magnam praesentium provident recusandae repudiandae, totam, voluptatem. Minima numquam sapiente sunt. </p>
<p> Beatae consectetur cupiditate dignissimos ducimus eos excepturi labore pariatur placeat quia similique. Architecto aspernatur cumque debitis distinctio esse, facere fugit harum ipsum libero minus neque numquam omnis quidem, tempora, ut! </p>
<p> Mollitia, perspiciatis sunt! Architecto aspernatur assumenda beatae, blanditiis commodi consequuntur debitis et id, laboriosam maxime molestiae neque nihil officiis omnis, quam quos sint veritatis voluptate? Alias deserunt distinctio modi perferendis? </p>
<p> Ab aspernatur aut cumque cupiditate deleniti, dolorem ducimus eligendi eos facere harum hic ipsam ipsum iste itaque modi nam necessitatibus nostrum nulla omnis quae repellat, sapiente sit tempore. Ipsam, quidem! </p>
<p> Ab debitis deleniti distinctio est ex facere magni nemo numquam placeat quia, quibusdam sequi! Aliquid at consectetur culpa ea enim facilis, harum hic, inventore iste possimus praesentium quas tempora voluptates. </p>
<p> Aliquam eligendi ipsam modi nemo numquam obcaecati officia, quidem unde? Accusantium amet, animi deleniti dolorum ea earum eos, expedita ipsa minima modi, pariatur perspiciatis porro quibusdam quo repellat tempore voluptates! </p>
<p> Ab assumenda fugiat magni natus officiis perferendis ratione rem repellendus tenetur. At commodi laudantium modi, natus nobis nulla odio odit sed sint tempora tenetur voluptas? At odio praesentium quas ut! </p>
<p> Atque aut consectetur consequuntur debitis eius facere ipsa ipsam maiores minima minus mollitia qui quos repudiandae sapiente, soluta? Ad, amet dolore doloribus ducimus eos exercitationem molestiae quisquam soluta ullam voluptate. </p>
</div>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbar, tuiScrollbarOptionsProvider} from '@taiga-ui/core';

@Component({
    selector: 'example-7',
    imports: [TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiScrollbarOptionsProvider({mode: 'hover'})],
})
export default class Example {}
```

**LESS:**
```less
.box {
    inline-size: 16rem;
    block-size: 16rem;
    border: 1px solid;
}

.content {
    padding: 0 0.6875rem;
}

p {
    white-space: nowrap;
}
```

#### Native scrollbar

**Template:**
```html
<tui-scrollbar class="box">
<div class="content">
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos, doloremque. Aperiam assumenda atque aut blanditiis corporis, eum, facilis harum laudantium magni necessitatibus nobis quas repudiandae sint ut voluptatem! Optio. </p>
<p> Accusamus aperiam assumenda aut consectetur, corporis delectus, dolor eaque eius est hic impedit labore possimus provident quas rem, rerum sequi sint tempora tempore ut? Debitis esse neque odio odit provident? </p>
<p> Cum eum illo, ipsa iure nostrum ut voluptates? Autem blanditiis corporis debitis deserunt ex expedita facilis fuga, illum iusto magnam praesentium provident recusandae repudiandae, totam, voluptatem. Minima numquam sapiente sunt. </p>
<p> Beatae consectetur cupiditate dignissimos ducimus eos excepturi labore pariatur placeat quia similique. Architecto aspernatur cumque debitis distinctio esse, facere fugit harum ipsum libero minus neque numquam omnis quidem, tempora, ut! </p>
<p> Mollitia, perspiciatis sunt! Architecto aspernatur assumenda beatae, blanditiis commodi consequuntur debitis et id, laboriosam maxime molestiae neque nihil officiis omnis, quam quos sint veritatis voluptate? Alias deserunt distinctio modi perferendis? </p>
<p> Ab aspernatur aut cumque cupiditate deleniti, dolorem ducimus eligendi eos facere harum hic ipsam ipsum iste itaque modi nam necessitatibus nostrum nulla omnis quae repellat, sapiente sit tempore. Ipsam, quidem! </p>
<p> Ab debitis deleniti distinctio est ex facere magni nemo numquam placeat quia, quibusdam sequi! Aliquid at consectetur culpa ea enim facilis, harum hic, inventore iste possimus praesentium quas tempora voluptates. </p>
<p> Aliquam eligendi ipsam modi nemo numquam obcaecati officia, quidem unde? Accusantium amet, animi deleniti dolorum ea earum eos, expedita ipsa minima modi, pariatur perspiciatis porro quibusdam quo repellat tempore voluptates! </p>
<p> Ab assumenda fugiat magni natus officiis perferendis ratione rem repellendus tenetur. At commodi laudantium modi, natus nobis nulla odio odit sed sint tempora tenetur voluptas? At odio praesentium quas ut! </p>
<p> Atque aut consectetur consequuntur debitis eius facere ipsa ipsam maiores minima minus mollitia qui quos repudiandae sapiente, soluta? Ad, amet dolore doloribus ducimus eos exercitationem molestiae quisquam soluta ullam voluptate. </p>
</div>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbar, tuiScrollbarOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiScrollbarOptionsProvider({mode: 'native'})],
})
export default class Example {}
```

**LESS:**
```less
.box {
    inline-size: 16rem;
    block-size: 16rem;
    border: 1px solid;
}

.content {
    padding: 0 0.6875rem;
}

p {
    white-space: nowrap;
}
```

#### Nested scrollbar

**Template:**
```html
<tui-scrollbar>
<p>Parent</p>
<child />
</tui-scrollbar>
```

**TypeScript:**
```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbar, tuiScrollbarOptionsProvider} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    selector: 'child',
    imports: [TuiFade, TuiScrollbar],
    template: `
        <tui-scrollbar>
            <div tuiFade="vertical">
                @for (
                    item of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
                    track $index
                ) {
                    <div [style.padding]="'1rem'">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium tempore sapiente nostrum, nulla autem, iste amet
                        ratione incidunt, quam obcaecati ipsa reiciendis modi quibusdam
                        at. Neque culpa excepturi repellat natus!
                    </div>
                }
            </div>
        </tui-scrollbar>
    `,
    styles: `
        :host {
            display: block;
            margin: 1.125rem;
        }

        tui-scrollbar {
            inline-size: 30rem;
            block-size: 30rem;
            outline: 1px solid;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiScrollbarOptionsProvider({mode: 'hover'})],
})
export class Child {}

@Component({
    imports: [Child, TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiScrollbarOptionsProvider({mode: 'always'})],
})
export default class Parent {}
```

**LESS:**
```less
p {
    margin: 1.125rem;
}

tui-scrollbar {
    outline: 1px solid;
    resize: block;
}
```
