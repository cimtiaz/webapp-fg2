package se.kth.sda6.skeleton.transaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda6.skeleton.product.Product;
import se.kth.sda6.skeleton.product.ProductService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/transaction")
public class TransactionController {


    /*
        @TODO AutoWire PostService and create the methods needed to implement the API.
        Don't forget to add necessary annotations.
     */


        @Autowired
        private TransactionService transactionService;
        @GetMapping("")
        public List<Transaction> getAllPosts(){
            return transactionService.getAll();
        }

        @GetMapping("/{id}")
        public Transaction getByID(@PathVariable UUID id){
            return transactionService.getByID(id)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        }

        @PostMapping("")
        public Transaction create(@RequestBody Transaction newTransaction){
            return transactionService.create(newTransaction);
        }

        @PutMapping ("")
        public Transaction update(@RequestBody Transaction updatedTransaction){
            return transactionService.update(updatedTransaction);
        }

        @DeleteMapping("/{id}")
        public void deleteById(@PathVariable UUID id){
            transactionService.deleteById(id);
        }

    }

