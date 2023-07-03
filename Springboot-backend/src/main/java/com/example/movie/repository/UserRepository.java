package com.example.movie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.movie.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	  // Add queries if needed
    UserEntity findByEmailAndPassword(String email, String password);

	}
