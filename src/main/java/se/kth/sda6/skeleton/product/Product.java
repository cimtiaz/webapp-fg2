package se.kth.sda6.skeleton.product;


import org.hibernate.annotations.CreationTimestamp;
import se.kth.sda6.skeleton.image.Image;
import se.kth.sda6.skeleton.transaction.Transaction;
import se.kth.sda6.skeleton.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="productInfo")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productId")
    private Long productId;

    @ManyToOne
    private User user;

    @NotEmpty(message = "Please provide a product name")
    @Column(name = "product_Name")
    private String productName;

    @NotEmpty(message = "Please provide a product details")
    @Column(name = "product_Details")
    private String productDescription;

    @NotEmpty(message = "Please provide a product price")
    @Column(name = "product_Price")
    private float productPrice;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "registered_date")
    private Date registeredDate;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="productId")
    private List<Image> images = new ArrayList<Image>();

    @OneToOne(mappedBy="product")
    private Transaction transaction;

    public Product(){
    }

    public Product(User user, String productName, float productPrice, String productDescription){
        this.user = user;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public float getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(float productPrice) {
        this.productPrice = productPrice;
    }

    public Date getRegisteredDate() {
        return registeredDate;
    }

    public void setRegisteredDate(Date registeredDate) {
        this.registeredDate = registeredDate;
    }
}

