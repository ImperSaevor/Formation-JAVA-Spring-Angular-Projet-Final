package com.projet.back.Repositories;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.projet.back.models.Film;
public interface FilmRepository extends JpaRepository<Film, Integer>{

    public List<Film> findById(int id);
  //si on met By dans le nom d'une methode, il faut donner un argument
    public List<Film> findAllByDateBetween(Timestamp dateOneWeekBefore, Timestamp dateActuelle);
//    public List<Film> findById(int id);
//  si on met By dans le nom d'une methode, il faut donner un argument
    @Query("SELECT  f FROM Film f WHERE f.date < CURRENT_TIMESTAMP ORDER BY f.date DESC") 
    public List<Film> findAllNouveautes();
    
    @Query("SELECT  f FROM Film f WHERE f.date > CURRENT_DATE ORDER BY f.date DESC") 
    public List<Film> findAllNextSorties();
    
//    @Query("SELECT  f FROM Film f WHERE f.date < CURRENT_TIMESTAMP ORDER BY f.date DESC") 
//    public List<Film> findAllNouveautes();
//    
//    @Query("SELECT  f FROM Film f WHERE f.date > CURRENT_DATE ORDER BY f.date DESC") 
//    public List<Film> findAllNextSorties();
    
//    public List<Seance> findSeanceByCinema(Cinema cinema);
    
}