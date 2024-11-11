package tn.esprit.lecon;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Leçon implements Serializable {
    private static final long serialVersionUID = 6;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Identifiant de la leçon

    private String titre; // Titre de la leçon

    private String contenu; // Contenu de la leçon

    private String niveau; // Niveau de difficulté

    // Constructeur sans paramètre
    public Leçon() {
        super();
    }
    // Constructeur avec paramètres
    public Leçon(String titre, String contenu, String niveau) {
        this.titre = titre;
        this.contenu = contenu;
        this.niveau = niveau;
    }

    // Getters et Setters
    public Long getId() {
        return id; // Renvoie l'ID
    }

    public void setId(Long id) {
        this.id = id; // Méthode pour définir l'ID (non recommandé d'utiliser ce setter directement)
    }

    public String getTitre() {
        return titre; // Renvoie le titre
    }

    public void setTitre(String titre) {
        this.titre = titre; // Méthode pour définir le titre
    }

    public String getContenu() {
        return contenu; // Renvoie le contenu
    }

    public void setContenu(String contenu) {
        this.contenu = contenu; // Méthode pour définir le contenu
    }

    public String getNiveau() {
        return niveau; // Renvoie le niveau
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau; // Méthode pour définir le niveau
    }

    // Méthode toString pour afficher les informations de la leçon
    @Override
    public String toString() {
        return "Leçon{" +
                "id=" + id +
                ", titre='" + titre + '\'' +
                ", contenu='" + contenu + '\'' +
                ", niveau='" + niveau + '\'' +
                '}';
    }
}
