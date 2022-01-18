package com.projet.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projet.back.Repositories.CinemaInfosRepository;
import com.projet.back.models.CinemaInfos;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class CinemaInfosControllerRest {
	
	
	@Autowired
	CinemaInfosRepository repoci;
	
	@CrossOrigin
	@GetMapping("/cineinfos")
	public List<CinemaInfos> findAll() {
				
		return repoci.findAll();
	
	}
	
	

}
