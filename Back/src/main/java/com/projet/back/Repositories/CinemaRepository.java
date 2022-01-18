package com.projet.back.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projet.back.models.Cinema;
//import com.projet.back.models.Seance;

public interface CinemaRepository extends JpaRepository<Cinema,Integer>{
	
	public Cinema findByNom(String nom);

	// @Query(value="select c.id, c.nom from cinema c", nativeQuery=true)
	// public List<Object> getCinemaNomAndId();
	//public List<Seance> findAllSeance();

}
