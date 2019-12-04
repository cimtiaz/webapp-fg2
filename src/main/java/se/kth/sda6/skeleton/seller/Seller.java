package se.kth.sda6.skeleton.seller;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="product")
public class Seller {

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


        // Hibernate needs a default constructor to function
        public Seller() {}

        public Seller(@NotEmpty(message = "Please provide an Product Name") String productName, String description,
                      String price, String duration) {
            this.productName = productName;
            this.description = description;
            this.price = price;
            this.duration = duration;
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


