package com.projet.back.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Version;

@Entity
public class CinemaInfos {
	
	@Id
	private int id;
	private String image;
	private String nom;
	
	@Version
	private int version;
	
	public CinemaInfos(int id, String image, String nom) {
		this.id = id;
		this.image = image;
		this.nom = nom;
	}

	public CinemaInfos() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	@Override
	public String toString() {
		return "CinemaComplet [id=" + id + ", image=" + image + ", nom=" + nom + "]";
	}
	
	
	
	

}
