```ts
export class MyComponent {
  constructor(@Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService) {}

  show(actions: PolymorpheusContent<TuiPdfViewerOptions>) {
    this.pdfService
      .open('/assets/taiga.pdf', {
        label: 'Taiga UI',
        actions,
      })
      .subscribe();
  }
}
```
