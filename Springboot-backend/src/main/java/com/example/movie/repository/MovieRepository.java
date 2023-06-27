package com.example.movie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.movie.entity.MovieEntity;

public interface MovieRepository extends JpaRepository<MovieEntity, Long> {
    // Custom query methods can go here
}
