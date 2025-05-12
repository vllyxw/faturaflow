package main.java.com.faturaja.invoiceservice.controller;

// InvoiceController.java
@RestController
@RequestMapping("/api/invoices")
@RequiredArgsConstructor
public class InvoiceController {

    private final InvoiceService invoiceService;

    @PostMapping("/import")
    public ResponseEntity<InvoiceResponse> importInvoice(@RequestBody InvoiceImportRequest request) {
        return ResponseEntity.ok(invoiceService.importInvoice(request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<InvoiceResponse> getInvoice(@PathVariable String id) {
        return ResponseEntity.ok(invoiceService.getInvoice(id));
    }
}