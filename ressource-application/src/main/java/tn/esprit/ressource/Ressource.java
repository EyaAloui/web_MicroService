package tn.esprit.ressource;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
public class Ressource implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Identifiant de la ressource

    private String nomRessource; // Nom de la ressource

    private String type; // Type de la ressource (ex. : "Livre", "Vidéo")

    private String url; // URL de la ressource (si applicable)

    private String description; // Description de la ressource

    // Constructeur sans paramètre
    public Ressource() {
        super();
    }

    // Constructeur avec paramètres
    public Ressource(String nomRessource, String type, String url, String description) {
        this.nomRessource = nomRessource;
        this.type = type;
        this.url = url;
        this.description = description;
    }

    // Getters et Setters
    public Long getId() {
        return id; // Renvoie l'ID
    }

    public void setId(Long id) {
        this.id = id; // Méthode pour définir l'ID
    }

    public String getNomRessource() {
        return nomRessource; // Renvoie le nom de la ressource
    }

    public void setNomRessource(String nomRessource) {
        this.nomRessource = nomRessource; // Méthode pour définir le nom de la ressource
    }

    public String getType() {
        return type; // Renvoie le type de la ressource
    }

    public void setType(String type) {
        this.type = type; // Méthode pour définir le type
    }

    public String getUrl() {
        return url; // Renvoie l'URL
    }

    public void setUrl(String url) {
        this.url = url; // Méthode pour définir l'URL
    }

    public String getDescription() {
        return description; // Renvoie la description
    }

    public void setDescription(String description) {
        this.description = description; // Méthode pour définir la description
    }

    // Méthode toString pour afficher les informations de la ressource
    @Override
    public String toString() {
        return "Ressource{" +
                "id=" + id +
                ", nomRessource='" + nomRessource + '\'' +
                ", type='" + type + '\'' +
                ", url='" + url + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
