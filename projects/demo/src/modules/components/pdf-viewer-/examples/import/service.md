```ts
export class Example {
  private readonly pdfService = inject(TuiPdfViewerService);

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
