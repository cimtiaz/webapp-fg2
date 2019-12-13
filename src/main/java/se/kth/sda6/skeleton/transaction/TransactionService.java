package se.kth.sda6.skeleton.transaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda6.skeleton.transaction.TransactionRepository;
import se.kth.sda6.skeleton.user.User;
import se.kth.sda6.skeleton.user.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service

public class TransactionService {

    /*
        @TODO Autowire the PostRepository and use it to implement all the service methods.
     */
    @Autowired
    private TransactionRepository transactionRepository;

    public List<Transaction> getAll() {
        // @TODO get all posts and return them as List<Post>
        return transactionRepository.findAll();
    }

    public Optional<Transaction> getByID(UUID id) {
        // @TODO get a post by ID if it exists
        return transactionRepository.findById(id);
    }

    public Transaction create(Transaction newTransaction) {

        // @TODO save the post to DB and return the saved post
        return transactionRepository.save(newTransaction);
    }

    public Transaction update(Transaction updatedTransaction) {
        // @TODO update the post if it exists in DB and return the updated post.
        return transactionRepository.save(updatedTransaction);
    }

    public void deleteById(UUID id) {
        // @TODO delete the post by id
        transactionRepository.deleteById(id);
    }

}