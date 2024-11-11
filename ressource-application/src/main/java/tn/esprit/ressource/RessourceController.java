package tn.esprit.ressource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.ressource.Ressource;
import tn.esprit.ressource.RessourceService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ressources")
public class RessourceController {

    @Autowired
    private RessourceService ressourceService;

    // Créer une nouvelle ressource
    @PostMapping
    public Ressource createRessource(@RequestBody Ressource ressource) {
        return ressourceService.createRessource(ressource);
    }

    // Récupérer toutes les ressources
    @GetMapping
    public List<Ressource> getAllRessources() {
        return ressourceService.getAllRessources();
    }

    // Récupérer une ressource par ID
    @GetMapping("/{id}")
    public Optional<Ressource> getRessourceById(@PathVariable Long id) {
        return ressourceService.getRessourceById(id);
    }

    // Mettre à jour une ressource par ID
    @PutMapping("/{id}")
    public Ressource updateRessource(@PathVariable Long id, @RequestBody Ressource ressourceDetails) {
        return ressourceService.updateRessource(id, ressourceDetails);
    }

    // Supprimer une ressource par ID
    @DeleteMapping("/{id}")
    public void deleteRessource(@PathVariable Long id) {
        ressourceService.deleteRessource(id);
    }
}
