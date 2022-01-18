package com.projet.back.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projet.back.Repositories.CinemaRepository;
import com.projet.back.Repositories.FilmRepository;
import com.projet.back.Repositories.SeanceRepository;
import com.projet.back.models.Cinema;
import com.projet.back.models.Film;
import com.projet.back.models.Seance;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class SeanceControllerRest {
	
	@Autowired
    private SeanceRepository repose;
	
	@Autowired
	private FilmRepository repof;
	
	@Autowired
	private CinemaRepository repoc;
	
	@CrossOrigin
	@GetMapping("/seance")
	public List<Seance> findAll() {
				
		return repose.findAll();
	
	}
	
	@CrossOrigin
	@GetMapping("/seance/{nom}/{id}")
	public Collection<Seance> findById(@PathVariable(name = "nom") String cinema,
			@PathVariable(name = "id") int id) {
				
		Cinema c=repoc.findByNom(cinema);
		System.out.println("film selectionner : " + c);
		
		Collection<Film>liste=c.getFilms();
        System.out.println("Films : " + liste);


		Collection<Seance> listeSeance = repose.findAll();
		ArrayList<Seance> listeSeance2 = new ArrayList<Seance>();

		for (Seance seance : listeSeance) {
			if(seance.getCinema().getId() == c.getId() && seance.getFilm().getId() == id){
				listeSeance2.add(seance);
			}
		}

		for (Seance seance : listeSeance2) {
			seance.setCinema(null);
			seance.setFilm(null);
		}
		
		return listeSeance2;
	}
}
