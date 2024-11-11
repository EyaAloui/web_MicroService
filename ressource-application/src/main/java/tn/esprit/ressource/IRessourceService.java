package tn.esprit.ressource;

import jakarta.ws.rs.core.Response;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Optional;

@FeignClient(name = "RESSOURCE-S", url = "http://localhost:8087, configuration = FeignConfig.class")
public interface IRessourceService {
    Ressource createRessource(Ressource ressource); // Créer une nouvelle ressource
    List<Ressource> getAllRessources(); // Récupérer toutes les ressources
    Optional<Ressource> getRessourceById(Long id); // Récupérer une ressource par ID
    Ressource updateRessource(Long id, Ressource ressourceDetails); // Mettre à jour une ressource par ID
    void deleteRessource(Long id); // Supprimer une ressource par ID
}


