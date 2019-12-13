package se.kth.sda6.skeleton.product;

import se.kth.sda6.skeleton.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Entity
@Table(name="product")
public class Product {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        @NotEmpty(message = "Please provide an Product Name")
        @Column(name = "productName")
        private String productName;
        @Column(name = "description")
        private String description;
        @Column(name = "price")
        private String price;
        @Column(name = "duration")
        private String duration;

        @ManyToOne
       // @PrimaryKeyJoinColumn(name="user_id")
        private User user;

        // Hibernate needs a default constructor to function
        public Product() {}

        public Product(@NotEmpty(message = "Please provide an Product Name") String productName, String description,
                       String price, String duration,User user) {
            this.productName = productName;
            this.description = description;
            this.price = price;
            this.duration = duration;
            this.user =user;
        }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getProductName() {
            return productName;
        }

        public void setProductName(String productName) {
            this.productName = productName;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getPrice() {
            return price;
        }

         public void setPrice(String price) {
            this.price = price;
        }

        public String getDuration() {
            return duration;
        }

        public void setDuration(String duration) {
            this.duration = duration;
        }

}


