```ts
import formatDistance from 'date-fns/formatDistance';

@Injectable()
export class FormatService extends TuiFormatDateService {
  format(timestamp: number): Observable<string> {
    return timer(0, 1000).pipe(map(() => formatDistance(timestamp, Date.now())));
  }
}

@Component({
  // ...
  providers: [
    {
      provide: TuiFormatDateService,
      useClass: FormatService,
    },
  ],
})
export class MyComponent {}
```
