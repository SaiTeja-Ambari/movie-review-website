package com.example.movie.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.movie.repository.MovieRepository;
import com.example.movie.entity.MovieEntity;

@Service
@Transactional
public class MovieService {
    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    // Method to get all movies
    public List<MovieEntity> getAllMovies(String title) {
        if (title.equals("")) {
            return movieRepository.findAll();
        }
        else {
            return movieRepository.findByTitle(title);
        }
    }

    // More service methods...
}
