package com.example.movie.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.movie.service.MovieService;
import com.example.movie.entity.MovieEntity;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MovieController {
    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/movies")
    public List<MovieEntity> getAllMovies(@RequestParam(defaultValue = "") String title) {

            return movieService.getAllMovies(title);

    }

}
