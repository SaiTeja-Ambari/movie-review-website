package com.example.movie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.movie.entity.UserEntity;
import com.example.movie.repository.UserRepository;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  public void saveUser(UserEntity user) throws Exception {
    // Add logic here for password hashing before saving user to database
    userRepository.save(user);
  }

  public UserEntity getAllUsers(String email, String password) {
    return userRepository.findByEmailAndPassword(email, password);
  }
}
