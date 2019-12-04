package se.kth.sda6.skeleton.seller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/seller")
public class SellerController {

    /*
        @TODO AutoWire PostService and create the methods needed to implement the API.
        Don't forget to add necessary annotations.
     */


        @Autowired
        private SellerService sellerService;
        @GetMapping("")
        public List<Seller> getAllPosts(){
            return sellerService.getAll();
        }

        @GetMapping("/{id}")
        public Seller getByID(@PathVariable Long id){
            return sellerService.getByID(id)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        }

        @PostMapping ("")
        public Seller create(@RequestBody Seller newSeller){
            return sellerService.create(newSeller);
        }

        @PutMapping ("")
        public Seller update(@RequestBody Seller updatedSeller){
            return sellerService.update(updatedSeller);
        }

        @DeleteMapping("/{id}")
        public void deleteById(@PathVariable Long id){
            sellerService.deleteById(id);
        }

    }

