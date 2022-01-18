package com.projet.back.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projet.back.models.Seance;

public interface SeanceRepository extends JpaRepository<Seance, Integer>{
	
//	public ArrayList<Seance> findByFilmAndCinema(Film film ,Cinema cinema);
	
	 
//    public List<Film> findAllNouveautes(int id,String nom);

}
