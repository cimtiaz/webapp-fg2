package se.kth.sda6.skeleton.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda6.skeleton.user.User;

import java.util.List;

/*
    @TODO extend the appropriate JpaRepository to get common database operations for Post
    Add also the correct annotation to describe the Repository.
 */

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}