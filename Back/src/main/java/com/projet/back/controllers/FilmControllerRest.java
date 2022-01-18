package com.projet.back.controllers;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projet.back.Repositories.FilmRepository;
import com.projet.back.models.Cinema;
import com.projet.back.models.Film;
import com.projet.back.models.Seance;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class FilmControllerRest {
    
    @Autowired
    private FilmRepository repo;

    @CrossOrigin
    @GetMapping("/film")
    public List<Film> findFilm(){
        return repo.findAll();
    }

    @CrossOrigin
    @GetMapping("/filmSansCinema")
    public List<Film> findFilmSansCinema(){

        List<Film> films = repo.findAll();
        ArrayList<Cinema> cinemas = new ArrayList<Cinema>();
        ArrayList<Seance> seances = new ArrayList<Seance>();
        for (Film film : films) {
            film.setCinemas(cinemas);
            film.setSeances(seances);
        }
        return films;
    }


    @CrossOrigin
    @GetMapping("/filmNouveautesSansCinema")
    public List<Film> findAllNvx(){
        
    	Instant dateActuelle = Instant.now();
    	Instant dateOneWeekBefore = dateActuelle.minus(10,ChronoUnit.DAYS);
    	
    	Timestamp dateOneWeekBefore2 = Timestamp.from(dateOneWeekBefore);
    	Timestamp dateActuelle2 = Timestamp.from(dateActuelle);

        List<Film> films = repo.findAllByDateBetween(dateOneWeekBefore2,dateActuelle2);

        ArrayList<Cinema> cinemas = new ArrayList<Cinema>();
        ArrayList<Seance> seances = new ArrayList<Seance>();

        for (Film film : films) {
            film.setCinemas(cinemas);
            film.setSeances(seances);
        }
    	
        return films;
    }
    
    @CrossOrigin
    @GetMapping("/filmNextSorties")
    public List<Film> findAllNext(){
    	ArrayList<Film> liste1=new ArrayList<Film>();
    	ArrayList<Film> liste2=new ArrayList<Film>();
    	liste1=(ArrayList<Film>)repo.findAllNextSorties();
        for(Film f:liste1){
        	Film fnew=new Film();
        	int id=f.getId();
        	String image=f.getImage();
        	fnew.setImage(image);
        	String duree=f.getDuree();
        	fnew.setDuree(duree);
        	String genre=f.getGenre();
        	fnew.setGenre(genre);
        	String limiteAge=f.getLimiteAge();
        	fnew.setLimiteAge(limiteAge);
        	String nom=f.getNom();
        	fnew.setNom(nom);
        	String synopsis=f.getSynopsis();
        	fnew.setSynopsis(synopsis);
        	String video=f.getVideo();
        	fnew.setVideo(video);
        	fnew.setId(id);
        	liste2.add(fnew);
        }
        
        return liste2;
    }

    @CrossOrigin
    @GetMapping("/filmNextSortiesSansCinema")
    public List<Film> findAllNextSansCinema(){
        List<Film> films = repo.findAllNextSorties();
        ArrayList<Cinema> cinemas = new ArrayList<Cinema>();
        ArrayList<Seance> seances = new ArrayList<Seance>();
        for (Film film : films) {
            film.setCinemas(cinemas);
            film.setSeances(seances);
        }
        return films;
    }
    
    @CrossOrigin
	@PostMapping("/film")
	public void create(@RequestBody Film film) {
		//film.setDate((Date)film.getDate());
		this.repo.save(film);
	}
	
	@CrossOrigin
	@GetMapping("/film/{id}")
	public Film findById(@PathVariable(name = "id") Integer id) {
		Film film = this.repo.findById(id).get();
        ArrayList<Cinema> cinemas = new ArrayList<Cinema>();
        ArrayList<Seance> seances = new ArrayList<Seance>();

        film.setCinemas(cinemas);
        film.setSeances(seances);

        return film;
	}
	@CrossOrigin
	@PutMapping("/film")
	public void update(@RequestBody Film film) {

		this.repo.save(film);

	}
//	@CrossOrigin
//	@GetMapping("/film/seances")
//	public ArrayList<Seance> getSeances() {
//		ArrayList<Seance> liste=new ArrayList<Seance>();
//		ArrayList<Film> liste2=(ArrayList<Film>)this.repo.find();
//		for (Film c:liste2){
//			ArrayList<Seance> s=(ArrayList<Seance>)c.getSeances();
//			liste.add(s);
//		}
//		return 	liste;
//			
//	}
}
