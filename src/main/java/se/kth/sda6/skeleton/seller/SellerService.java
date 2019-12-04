package se.kth.sda6.skeleton.seller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class SellerService {

    /*
        @TODO Autowire the PostRepository and use it to implement all the service methods.
     */
    @Autowired
    private SellerRepository sellerRepository;

    public List<Seller> getAll() {
        // @TODO get all posts and return them as List<Post>
        return sellerRepository.findAll();
    }

    public Optional<Seller> getByID(Long id) {
        // @TODO get a post by ID if it exists
        return sellerRepository.findById(id);
    }

    public Seller create(Seller newSeller) {
        // @TODO save the post to DB and return the saved post
        return sellerRepository.save(newSeller);
    }

    public Seller update(Seller updatedSeller) {
        // @TODO update the post if it exists in DB and return the updated post.
        return sellerRepository.save(updatedSeller);
    }

    public void deleteById(Long id) {
        // @TODO delete the post by id
        sellerRepository.deleteById(id);
    }

}