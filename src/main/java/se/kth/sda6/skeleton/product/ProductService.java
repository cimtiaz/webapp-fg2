package se.kth.sda6.skeleton.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import se.kth.sda6.skeleton.user.User;
import se.kth.sda6.skeleton.user.UserRepository;
import se.kth.sda6.skeleton.user.UserService;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service

public class ProductService {

    /*
        @TODO Autowire the PostRepository and use it to implement all the service methods.
     */
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserService userService;

    public List<Product> getAll() {
        return productRepository.findAll();
        // @TODO get all posts and return them as List<Post>
    }

    public Optional<Product> getByID(Long id) {
        // @TODO get a post by ID if it exists
        return productRepository.findById(id);
    }

    public Product create(Product newProduct) {
        // @TODO save the post to DB and return the saved post
        return productRepository.save(newProduct);
    }

    public Product update(Product updatedProduct) {
        // @TODO update the post if it exists in DB and return the updated post.
        return productRepository.save(updatedProduct);
    }

    public void deleteById(Long id) {
        // @TODO delete the post by id
        productRepository.deleteById(id);
    }

}