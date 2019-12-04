package se.kth.sda6.skeleton.transaction;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import se.kth.sda6.skeleton.product.Product;
import se.kth.sda6.skeleton.user.User;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name="transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "transactionkey", updatable = false, nullable = false)
    private UUID TransactionKey;

    //buyer ID which is same as user ID of the buyer
    @ManyToOne
    @JoinColumn(name="userId")
    private User user;

    //the product ID will link to the seller ID so no need to add seller id
    @OneToOne
    @JoinColumn(name="productId")
    private Product product;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "contract_signed_date")
    private Date contractSignedDate;

    @Column(name = "contract_signed")
    private boolean contractSigned;

    public Transaction(){
    }

    public Transaction(User user, Product product, boolean contractSigned){
        this.user = user;
        this.product = product;
        this.contractSigned = contractSigned;
    }

    public UUID getTransactionKey() {
        return TransactionKey;
    }

    public void setTransactionKey(UUID transactionKey) {
        TransactionKey = transactionKey;
    }

    public Date getContractSignedDate() { return contractSignedDate; }

    public void setContractSignedDate(Date contractSignedDate) { this.contractSignedDate = contractSignedDate; }

    public boolean isContractSigned() { return contractSigned; }

    public void setContractSigned(boolean contractSigned) { this.contractSigned = contractSigned; }
}
