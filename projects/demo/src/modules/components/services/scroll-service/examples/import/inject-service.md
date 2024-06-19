```ts
@Component({
  standalone: true,
  // ...
  providers: [TuiScrollService],
  // ...
})
export class Example {
  private tuiScrollService = inject(TuiScrollService);

  ngOnInit() {
    this.tuiScrollService.scroll$(this.elementRef.nativeElement, 500).subscribe();
  }
}
```
