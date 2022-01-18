package com.projet.back.Repositories;

import com.projet.back.models.Client;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ClientRepository extends JpaRepository<Client, Integer>{

}