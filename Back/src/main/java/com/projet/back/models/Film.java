package com.projet.back.models;

import java.sql.Date;
import java.util.Collection;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Version;


@Entity
@Embeddable
public class Film {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom;
	private String genre;
	private String limiteAge;
	private String duree;
	private String synopsis;
	private String image;
	private Date date;
	private String video;
	@OneToMany(mappedBy="cinema")
	private Collection<Seance> seances;
//	@Column
       
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name="CINEMA_FILM",
	joinColumns = @JoinColumn(name = 
	"Film_ID") ,inverseJoinColumns 
	= @JoinColumn(name = "Cinema_ID"))
//    @ElementCollection(targetClass=Cinema.class)
	private Collection<Cinema> cinemas;
	@Version
	private int version;
	
	public Film() {
	}

	public Film(int id, String nom, String genre, String limiteAge, String duree, String synopsis, String image,
			Date datesortie, String video, Collection<Seance> seances, Collection<Cinema> cinemas, int version) {
		this.id = id;
		this.nom = nom;
		this.genre = genre;
		this.limiteAge = limiteAge;
		this.duree = duree;
		this.synopsis = synopsis;
		this.image = image;
		
		this.video = video;
		this.seances = seances;
		this.cinemas = cinemas;
		this.version = version;
	}

	

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Collection<Seance> getSeances() {
		return seances;
	}

	public void setSeances(Collection<Seance> seances) {
		this.seances = seances;
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

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getLimiteAge() {
		return limiteAge;
	}

	public void setLimiteAge(String limiteAge) {
		this.limiteAge = limiteAge;
	}

	public String getDuree() {
		return duree;
	}

	public void setDuree(String duree) {
		this.duree = duree;
	}

	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getVideo() {
		return video;
	}

	public void setVideo(String video) {
		this.video = video;
	}

	public Collection<Cinema> getCinemas() {
		return cinemas;
	}

	public void setCinemas(Collection<Cinema> cinemas) {
		this.cinemas = cinemas;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	@Override
	public String toString() {
		return "Film [id=" + id + ", nom=" + nom + ", genre=" + genre + ", limiteAge=" + limiteAge + ", duree=" + duree
				+ ", synopsis=" + synopsis + ", image=" + image + ", date=" + date + ", video=" + video + ", seances="
				+ seances + ", cinemas=" + cinemas + "]";
	}




	

	
	
}

