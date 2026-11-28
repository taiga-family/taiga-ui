# Media

- **Package**: `CDK`
- **Type**: directives

Directive for declarative work with HTML5 video and audio

### How to Use (Import)

```ts
import {TuiMedia} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiMedia,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<video
  tuiMedia
  controls
>
  <source
    *tuiHdpi
    src="4k.mp4"
    type="video/mp4"
  />
  <source
    src="1080p.mp4"
    type="video/mp4"
  />
</video>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| currentTime | `number` | Current time |
| paused | `boolean` | Paused state |
| playbackRate | `number` | Playback speed |
| volume | `number` | Volume |

### Usage Examples

#### Native controls

**Template:**
```html
<video controls tuiMedia width="320" class="video" [(currentTime)]="currentTime" [(paused)]="paused" [(volume)]="volume" >
<source *tuiHighDpi src="assets/media/bbb_dpi.ogv" type="video/ogg" />
<source src="assets/media/bbb.mp4" type="video/mp4" />
</video>
<p>currentTime: {{ currentTime }}</p>
<p>volume: {{ volume }}</p>
<p>paused: {{ paused }}</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHighDpi, TuiMedia} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiHighDpi, TuiMedia],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected currentTime = 0;
    protected volume = 1;
    protected paused = true;
}
```

**LESS:**
```less
:host {
    display: block;
}

.video {
    float: left;
    margin-inline-end: 1.5rem;

    // Safari 15+
    @supports (float: inline-start) {
        float: inline-start;
    }
}
```

#### Video

**Template:**
```html
<div class="player">
<video #video tuiMedia width="320" class="video" [(currentTime)]="currentTime" [(paused)]="paused" (click)="toggleState()" >
<source src="assets/media/bbb.mp4" type="video/mp4" />
</video>
<div class="controls">
<button appearance="glass" size="s" title="Play/Pause" tuiIconButton tuiTheme="dark" type="button" [iconStart]="icon" [style.border-radius.%]="100" (click)="toggleState()" ></button>
<input step="any" tuiSlider type="range" class="slider" [max]="video.duration" [(ngModel)]="currentTime" />
<div class="time">
<time [attr.datetime]="getTime(currentTime)"> {{ getTime(currentTime) }} </time> / <time [attr.datetime]="getTime(video.duration)"> {{ getTime(video.duration) }} </time>
</div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {SECONDS_IN_MINUTE, TuiMedia} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiSlider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiButton, TuiMedia, TuiSlider],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected currentTime = 0;
    protected paused = true;

    protected get icon(): string {
        return this.paused ? '@tui.play' : '@tui.pause';
    }

    protected getTime(time: number): string {
        const integer = Math.round(time || 0);
        const seconds = integer % SECONDS_IN_MINUTE;
        const minutes = (integer - seconds) / SECONDS_IN_MINUTE;
        const secondsString = String(seconds);
        const minutesString = String(minutes);
        const paddedSeconds =
            secondsString.length === 1 ? `0${secondsString}` : secondsString;
        const paddedMinutes =
            minutesString.length === 1 ? `0${minutesString}` : minutesString;

        return `${paddedMinutes}:${paddedSeconds}`;
    }

    protected toggleState(): void {
        this.paused = !this.paused;
    }
}
```

**LESS:**
```less
:host {
    display: block;
}

.video {
    display: block;
}

.player {
    position: relative;
    inline-size: 20rem;
}

.controls {
    position: absolute;
    bottom: 0;
    display: flex;
    inline-size: 100%;
    align-items: center;
    padding: 0.75rem 0.75rem 0.5rem;
    box-sizing: border-box;
    color: var(--tui-background-base);
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.56));
}

.slider {
    flex: 1;
    margin-inline-start: 0.75rem;
}

.time {
    flex-shrink: 0;
    margin-inline-start: 0.75rem;
    font-size: 0.8125rem;
}
```

#### Audio

**Template:**
```html
<div class="tui-player">
<audio #audio src="assets/media/strays.mp3" tuiMedia [(currentTime)]="currentTime" [(paused)]="paused" ></audio>
<button appearance="secondary" title="Play/Pause" tuiIconButton type="button" [iconStart]="icon" [style.border-radius.%]="100" (click)="toggleState()" ></button>
<div>
<a href="https://waterplea.bandcamp.com/" tuiLink > Waterplea </a> — Strays <input step="any" tuiSlider type="range" class="slider" [max]="audio.duration" [(ngModel)]="currentTime" />
</div>
</div>
```

**TypeScript:**
```ts
import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiMedia} from '@taiga-ui/cdk';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {TuiSlider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiButton, TuiLink, TuiMedia, TuiSlider],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected currentTime = 0;
    protected paused = true;

    protected get icon(): string {
        return this.paused ? '@tui.play' : '@tui.pause';
    }

    protected toggleState(): void {
        this.paused = !this.paused;
    }
}
```

**LESS:**
```less
.tui-player {
    display: flex;
    inline-size: 20rem;
    border-radius: 6.25rem;
    background: var(--tui-background-neutral-1);

    --tui-background-accent-1: var(--tui-text-action);
    --tui-background-accent-1-hover: var(--tui-text-action-hover);
    --tui-background-accent-1-pressed: var(--tui-text-action-hover);

    & > div {
        flex: 1;
        margin: 0.375rem 1.75rem 0 0.375rem;
    }
}
```
