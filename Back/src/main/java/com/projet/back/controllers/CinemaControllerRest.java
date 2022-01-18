package com.projet.back.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projet.back.Repositories.CinemaRepository;
import com.projet.back.models.Cinema;
import com.projet.back.models.Film;
import com.projet.back.models.Seance;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class CinemaControllerRest {
	
	@Autowired
	private CinemaRepository repoc;
	
	@CrossOrigin
	@GetMapping("/cinema")
	public List<Cinema> findAll() {
		return this.repoc.findAll();
	}

	@CrossOrigin
	@GetMapping("/cinemaSansFilm")
	public List<Cinema> findAllWithoutFilm() {

		List<Cinema> cinema = this.repoc.findAll();

		ArrayList<Film> films = new ArrayList<Film>();
		ArrayList<Seance> seances = new ArrayList<Seance>();

		for (Cinema cinema2 : cinema) {
			cinema2.setFilms(films);
			cinema2.setSeances(seances);
		}

		return cinema;
	}

	// @CrossOrigin
	// @GetMapping("/cinemaSansFilm")
	// public List<Object> findAllWithoutFilm() {
	// 	return this.repoc.getCinemaNomAndId();
	// }
	
	@CrossOrigin
	@GetMapping("/cinema/{id}")
	public Cinema findById(@PathVariable(name="id") int id) {
			
		return this.repoc.findById(id).get();	
	}

	@CrossOrigin
	@GetMapping("/cinemaAvecFilm/{id}")
	public Collection<Film> cinemaAvecFilmfindById(@PathVariable(name="id") int id) {
		Cinema cinema = this.repoc.findById(id).get();
		
		ArrayList<Seance> seances = new ArrayList<Seance>();
		ArrayList<Cinema> cinemas = new ArrayList<Cinema>();

		for (Film film : cinema.getFilms()) {
			film.setCinemas(cinemas);
			film.setSeances(seances);
		}

		Collection<Film> films = cinema.getFilms();

		return films;	
	}
	
	@CrossOrigin
	@GetMapping("/cinema/nom/{nom}")
	public Cinema findParName(@PathVariable(name="nom") String nom) {
			
		return this.repoc.findByNom(nom);	
	}
	
	@CrossOrigin
	@PostMapping("/cinema")
	public void create(@RequestBody Cinema cinema) {
		this.repoc.save(cinema);
	}

	
//	@CrossOrigin
//	@GetMapping("/cinema/seances")
//	public List<Seance> getSeances() {
//			
//		return this.repoc.findAllSeance();	
//	}
	
	@CrossOrigin
	@GetMapping("/cinema/noms")
	public ArrayList<String> getNom() {
		ArrayList<String> liste=new ArrayList<String>();
		ArrayList<Cinema> liste2=(ArrayList<Cinema>)this.repoc.findAll();
		for (Cinema c:liste2){
			String nom=c.getNom();
			liste.add(nom);
		}
		return 	liste;
	}
	
//	@CrossOrigin
//	@GetMapping("/cinema/seance/{cine}/{film}")
//	public ArrayList<Seance> getSeances(@PathVariable(name="cine") Cinema cine,
//			@PathVariable(name="film") Film film) {
//		ArrayList<Seance> liste=new ArrayList<Seance>();
//		film.getCinemas();
//		ArrayList<String> liste=new ArrayList<String>();
//		ArrayList<Cinema> liste2=(ArrayList<Cinema>)this.repoc.findAll();
//		for (Cinema c:liste2){
//			String nom=c.getNom();
//			liste.add(nom);
//		}
//		return 	liste;
//	}
	
	

}
