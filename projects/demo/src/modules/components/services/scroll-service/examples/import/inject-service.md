```ts
@Component({
  standalone: true,
  // ...
  providers: [TuiScrollService],
  // ...
})
export class MyComponent {
  private tuiScrollService = inject(TuiScrollService);

  ngOnInit() {
    this.tuiScrollService.scroll$(this.elementRef.nativeElement, 500).subscribe();
  }
}
```
