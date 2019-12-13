package se.kth.sda6.skeleton.user;

import org.hibernate.validator.constraints.Length;
import se.kth.sda6.skeleton.accountinfo.AccountInfo;
import se.kth.sda6.skeleton.product.Product;
import se.kth.sda6.skeleton.transaction.Transaction;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Entity
@Table(name="user_info")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Email(message = "Invalid email address! Please provide a valid email address")
    @NotEmpty(message = "Please provide an email address")
    @Column(name = "email", unique = true)
    private String email;

    @Length(min = 5, max=100, message = "Password length most be between 5-100 characters")
    @Column(name = "password")
    private String password;

    @Length(min = 1, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "name")
    private String name;

    @Length(min = 10, max=10, message = "Phone no should be 10 digit long.")
    @NotEmpty(message = "Please provide a valid phone number")
    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

  // @OneToMany(cascade=CascadeType.ALL,fetch = FetchType.LAZY)
  // @JoinColumn(name="userId" )
   // private Set<Transaction> transactions;

    /*
    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
    */



    @OneToMany(mappedBy ="user",cascade=CascadeType.ALL)
    private Set<Product> products = new HashSet<>();

    // Hibernate needs a default constructor to function
    public User() {}

    public User(@Email(message = "Invalid email address! Please provide a valid email address")
                @NotEmpty(message = "Please provide an email address") String email, @Length(min = 5, max = 100,
                message = "Password length must be between 5-100 characters") String password,
                @Length(min = 3, max = 100, message = "Name must be between 3-100 characters") String name,
                @Length(min = 3, max = 300, message = "Address must be between 3-300 characters") String address,
                @Length(max = 30, message = "Name must be between 3-100 characters") String phone) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    public Long getUserId() {
        return userId;
    }

    public void setId(Long userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setName(String name) {
        this.name = name;
    }

}
