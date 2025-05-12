package main.java.com.faturaja.invoiceservice.model;

// Invoice.java
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Invoice {
    @Id
    private String id; // NFe ID

    private String issuerTaxId;
    private String recipientTaxId;
    private BigDecimal amount;
    private LocalDate emissionDate;
    private LocalDate dueDate;

    @Enumerated(EnumType.STRING)
    private InvoiceStatus status;

    @Lob
    private String xmlContent;

    @CreationTimestamp
    private LocalDateTime createdAt;
}

public enum InvoiceStatus {
    PENDING, VALID, INVALID, PROCESSED
}