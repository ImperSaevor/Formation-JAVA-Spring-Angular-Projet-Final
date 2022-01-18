package com.projet.back.models;

import javax.persistence.Embeddable;
@Embeddable
public class Extra {
	
	private String nom;
	private double prix;
	private String type;
	
	public Extra() {
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Extra [nom=" + nom + ", prix=" + prix + ", type=" + type +"]";
	}

	
}

