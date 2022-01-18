package com.projet.back.models;

import javax.persistence.Embeddable;

@Embeddable
public class Commande {
    
    private int id;
    private String commandePlace;
    private String commandeExtra;
    private double prixTotal;

    public Commande(){

    }

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getCommandePlace(){
        return commandePlace;
    }

    public void setCommandePlace(String commandePlace){
        this.commandePlace = commandePlace;
    }

    public String getCommandeExtra(){
        return commandePlace;
    }

    public void setCommandeExtra(String commandeExtra){
        this.commandeExtra = commandeExtra;
    }

    public double getPrixTotal(){
        return prixTotal;
    }

    public void setPrixTotal(double prixTotal){
        this.prixTotal = prixTotal;
    }

    @Override
    public String toString(){
        return "Commande [id =" + id + ", commande Place = "+ commandePlace + ", commande Extra = " + commandeExtra + "]";
    }
}
