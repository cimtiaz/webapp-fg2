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
    @Column(name = "transactionKey", updatable = false, nullable = false)
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
    @Column(name = "start_date")
    private Date startDate;


    public Transaction(){
    }

    public Transaction(User user, Product product, Date endDate){
        this.user = user;
        this.product = product;
    }

    public UUID getTransactionKey() {
        return TransactionKey;
    }

    public void setTransactionKey(UUID transactionKey) {
        TransactionKey = transactionKey;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
