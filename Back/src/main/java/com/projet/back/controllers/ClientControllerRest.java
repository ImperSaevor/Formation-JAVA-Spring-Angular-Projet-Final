package com.projet.back.controllers;

import com.projet.back.Repositories.ClientRepository;
import com.projet.back.models.Client;
import com.projet.back.models.Commande;

import java.util.ArrayList;
import java.util.Collection;
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

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ClientControllerRest {
    
    @Autowired
    private ClientRepository repo;
    
    @CrossOrigin
    @GetMapping("/client")
    public List<Client> findAll(){
    	return repo.findAll();
    }

    @CrossOrigin
    @GetMapping("/client/{id}")
    public Client findClientById(@PathVariable(value="id")int id){
    	return repo.findById(id).get();
    }

    @CrossOrigin
    @PostMapping("/client")
    public void createClient(@RequestBody Client client){
        System.out.println(client);
        repo.save(client);
    }

    @CrossOrigin
    @PutMapping("/clientCommande/{id}")
    public void updateClient(@PathVariable(value = "id")int id,@RequestBody Commande commande){
         
        Client updateClient = repo.findById(id).get();
        Commande newCommande = commande;
        updateClient.getCommande().add(newCommande);
        repo.save(updateClient);
    }
}