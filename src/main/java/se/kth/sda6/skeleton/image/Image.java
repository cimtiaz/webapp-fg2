package se.kth.sda6.skeleton.image;


import org.hibernate.annotations.Type;
import se.kth.sda6.skeleton.product.Product;

import javax.persistence.*;

@Entity
@Table(name="image")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "imageId")
    private Long imageId;

    @ManyToOne
    private Product product;

    @Lob
    @Type(type = "org.hibernate.type.BinaryType")
    @Column(name = "picture")
    private byte[] picture;

    public Image(){
    }

    public Image(Product product, byte[] picture){
        this.product = product;
        this.picture = picture;
    }

    public Long getImageId() {
        return imageId;
    }

    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }

    public byte[] getPicture() {
        return picture;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }
}
