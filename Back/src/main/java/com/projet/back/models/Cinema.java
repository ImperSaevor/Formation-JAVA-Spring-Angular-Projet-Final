package com.projet.back.models;

import java.util.Collection;

import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Version;

@Entity
public class Cinema {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom;
	private String image;
	@ManyToMany(fetch = FetchType.LAZY,mappedBy="cinemas")
//	@ElementCollection(targetClass=Film.class)
	private Collection<Film> films;
    
    @ElementCollection(targetClass=Extra.class)
	@Embedded
    private Collection<Extra> extra;
    @ElementCollection(targetClass=Seance.class)
    @OneToMany(mappedBy="cinema")
	private Collection<Seance> seances;
	@Version
	private int version;
	
	public Cinema(int id, String nom, Collection<Film> films, Collection<Extra> extra) {
		this.id = id;
		this.nom = nom;
		this.films = films;
		this.extra = extra;
	}

	public Cinema() {
	}

	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
    //Film fort
	
	public Collection<Film> getFilms() {
		return films;
	}

	public void setFilms(Collection<Film> films) {
		this.films = films;
	}

    public Collection<Extra> getExtra() {
		return extra;
	}

	public void setExtra(Collection<Extra> extra) {
		this.extra = extra;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}
	
	public Collection<Seance> getSeances() {
		return seances;
	}

	public void setSeances(Collection<Seance> seances) {
		this.seances = seances;
	}

	@Override
	public String toString() {
		return "Cinema [id=" + id + ", nom=" + nom + ", image=" + image + ", extra=" + extra + "]";
	}
	
}


