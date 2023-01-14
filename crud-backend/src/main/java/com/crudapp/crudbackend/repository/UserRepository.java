package com.crudapp.crudbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crudapp.crudbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	

}
