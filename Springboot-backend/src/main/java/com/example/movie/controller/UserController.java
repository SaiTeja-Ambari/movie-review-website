package com.example.movie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.movie.entity.UserEntity;
import com.example.movie.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
  
  @Autowired
  private UserService userService;

  @PostMapping("/postusers")
  public ResponseEntity<String> signup(@RequestBody UserEntity user) {
      try {
    	  System.out.print(user.getEmail());
          userService.saveUser(user);
          return new ResponseEntity<>("User successfully signed up", HttpStatus.CREATED);
      } catch (Exception e) {
          return new ResponseEntity<>("Error signing up", HttpStatus.BAD_REQUEST);
      }
  }

  @PostMapping("/getuser")
  public UserEntity getAllUsers(@RequestBody UserEntity user) {
      return userService.getAllUsers(user.getEmail(), user.getPassword());
  }


}
