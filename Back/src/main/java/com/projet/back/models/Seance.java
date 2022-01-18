package com.projet.back.models;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

@Entity
public class Seance {
	
	@Id
	private int id;
	private String horaire;
	private Date date;
	private final int pdispos=200;
	private int prest;
	@ManyToOne
	@JoinColumn(name="film_id")
	private Film film;
	@ManyToOne
	@JoinColumn(name="cinema_id")
	private Cinema cinema;
	
	@Version
	private int version;
	
		public Seance(int id, String horaire, Date date, int prest, Film film, Cinema cinema, int version) {
		this.id = id;
		this.horaire = horaire;
		this.date = date;
		this.prest = prest;
		this.film = film;
		this.cinema = cinema;
		this.version = version;
	}

	public Seance() {
	}
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public String getHoraire() {
		return horaire;
	}

	public void setHoraire(String horaire) {
		this.horaire = horaire;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getPrest() {
		return prest;
	}

	public void setPrest(int prest) {
		this.prest = prest;
	}

	public Film getFilm() {
		return film;
	}

	public void setFilm(Film film) {
		this.film = film;
	}

	public Cinema getCinema() {
		return cinema;
	}

	public void setCinema(Cinema cinema) {
		this.cinema = cinema;
	}

	public int getPdispos() {
		return pdispos;
	}

	@Override
	public String toString() {
		return "Seance [horaire=" + horaire + ", date=" + date + ", pdispos=" + pdispos + ", prest=" + prest +"]";
	}

	
}

