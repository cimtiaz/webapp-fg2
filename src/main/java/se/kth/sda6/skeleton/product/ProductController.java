package se.kth.sda6.skeleton.product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda6.skeleton.user.User;
import se.kth.sda6.skeleton.user.UserService;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    /*
        @TODO AutoWire PostService and create the methods needed to implement the API.
        Don't forget to add necessary annotations.
     */


        @Autowired
       private ProductService productService;
        @Autowired
        private UserService userService;
    /*        @GetMapping("")
           public List<Product> getAllPosts(){
               return productService.getAll();
           }
    */
        @GetMapping("/{id}")
        public Product getByID(@PathVariable Long id){
            return productService.getByID(id)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        }


      /*  public ResponseEntity<Product> create(@RequestBody Product product)
        {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (!(authentication instanceof AnonymousAuthenticationToken)) {
                // Find email of seller who is adding product from authorization token
                String email = authentication.getName();
                User user= userService.findUserByEmail  (email);
                // To set foreign key of user (Seller) in product table
                product.setUser(user);
                Product savedPost = productService.create(product);
                return new ResponseEntity<Product>(savedPost, HttpStatus.CREATED);
            }
            else
                throw new ResponseStatusException(HttpStatus.FORBIDDEN); // throw unauthorized error
        }*/

      @PostMapping("")
       public Product create(@RequestBody Product newProduct) {
          Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
          if (!(authentication instanceof AnonymousAuthenticationToken)) {
              // Find email of seller who is adding product from authorization token
              String email = authentication.getName();
              User user = userService.findUserByEmail (email);
              // To set foreign key of user (Seller) in product table
              newProduct.setUser(user);
          }
          else {
              throw new ResponseStatusException(HttpStatus.FORBIDDEN);
          }
              return productService.create(newProduct);

      }
        @PutMapping ("")
        public Product update(@RequestBody Product updatedProduct){
            return productService.update(updatedProduct);
        }

        @DeleteMapping("/{id}")
        public void deleteById(@PathVariable Long id){
            productService.deleteById(id);
        }

    }

