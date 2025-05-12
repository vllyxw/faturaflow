package main.java.com.faturaja.invoiceservice.service;

// InvoiceService.java
@Service
@RequiredArgsConstructor
public class InvoiceService {

    private final InvoiceRepository invoiceRepository;
    private final FeignFactoringClient factoringClient;

    public InvoiceResponse importInvoice(InvoiceImportRequest request) {
        // Validação básica do XML
        if (!isValidXml(request.getXmlContent())) {
            throw new InvalidInvoiceException("Invalid XML content");
        }

        // Extrai dados do XML (simplificado)
        Invoice invoice = extractDataFromXml(request.getXmlContent());

        // Salva no banco de dados
        Invoice savedInvoice = invoiceRepository.save(invoice);

        return mapToResponse(savedInvoice);
    }

    private boolean isValidXml(String xmlContent) {
        // Implementar validação real do XML contra schema NFe
        return xmlContent != null && !xmlContent.isEmpty();
    }

    private Invoice extractDataFromXml(String xmlContent) {
        // Implementar parser real do XML
        return Invoice.builder()
                .id(UUID.randomUUID().toString())
                .issuerTaxId("12345678901234")
                .recipientTaxId("98765432109876")
                .amount(new BigDecimal("1000.00"))
                .emissionDate(LocalDate.now())
                .dueDate(LocalDate.now().plusDays(30))
                .status(InvoiceStatus.PENDING)
                .xmlContent(xmlContent)
                .build();
    }

    private InvoiceResponse mapToResponse(Invoice invoice) {
        return InvoiceResponse.builder()
                .id(invoice.getId())
                .issuerTaxId(invoice.getIssuerTaxId())
                .recipientTaxId(invoice.getRecipientTaxId())
                .amount(invoice.getAmount())
                .emissionDate(invoice.getEmissionDate())
                .dueDate(invoice.getDueDate())
                .status(invoice.getStatus())
                .build();
    }
}
