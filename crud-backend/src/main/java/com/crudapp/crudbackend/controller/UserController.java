package com.crudapp.crudbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crudapp.crudbackend.exception.UserNotFoundException;
import com.crudapp.crudbackend.model.User;
import com.crudapp.crudbackend.repository.UserRepository;
import java.util.List;

import javax.websocket.server.PathParam;

@RestController
@CrossOrigin("http://localhost:3000")
 
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/test")
	public String myf() {
		return "KSHITIJ DHOBLE";
	}
	
	@GetMapping("/users") // GET ALL USERS
	List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@PostMapping("/adduser") // ADD USER
	User newUser(@RequestBody User newUser) {
		return userRepository.save(newUser);
	}
	
	@GetMapping("/user/{id}") // GET USER BY ID
	User getUserById(@PathVariable Long id) {
		return userRepository.findById(id)
				.orElseThrow(()->new UserNotFoundException(id));
	}
	
	@PutMapping("/updateuser/{id}") // UPDATE USER
	User updateUser(@RequestBody User newUser, @PathVariable Long id) {
		return userRepository.findById(id)
				.map(user -> {
					user.setUsername(newUser.getUsername());
					user.setName(newUser.getName());
					user.setEmail(newUser.getEmail());
					return userRepository.save(user);
				}).orElseThrow(()->new UserNotFoundException(id));
	}
	
	@DeleteMapping("/deleteuser/{id}") // DELETE USER
	String deleteUser(@PathVariable Long id) {
		if(!userRepository.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		userRepository.deleteById(id);
		return id+" DELETED SUCCESSFULLY!!";
	}
}
