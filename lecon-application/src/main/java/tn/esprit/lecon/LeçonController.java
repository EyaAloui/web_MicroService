package tn.esprit.lecon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/lecons")
public class LeçonController {

    @Autowired
    private LeçonService leçonService;

    // Créer une nouvelle leçon
    @PostMapping
    public Leçon createLeçon(@RequestBody Leçon leçon) {
        return leçonService.createLeçon(leçon);
    }

    // Récupérer toutes les leçons
    @GetMapping
    public List<Leçon> getAllLeçons() {
        return leçonService. getAllLeçons();
    }

    // Récupérer une leçon par ID
    @GetMapping("/{id}")
    public Optional<Leçon> getLeçonById(@PathVariable Long id) {
        return leçonService.getLeçonById(id);
    }

    // Mettre à jour une leçon par ID
    @PutMapping("/{id}")
    public Leçon updateLeçon(@PathVariable Long id, @RequestBody Leçon leçonDetails) {
        return leçonService.updateLeçon(id, leçonDetails);
    }

    // Supprimer une leçon par ID
    @DeleteMapping("/{id}")
    public void deleteLeçon(@PathVariable Long id) {
        leçonService.deleteLeçon(id);
    }

//     Récupérer toutes les ressources (renommé pour éviter conflit avec la méthode de récupération de leçon)
    @GetMapping("/ressources")
    public List<Ressource> getAllRessources() {
        return leçonService.getAllRessources();
    }

    // Récupérer une ressource par ID (modifié pour ajouter /ressources pour éviter conflit avec la méthode de récupération de leçon)
    @GetMapping("/ressources/{id}")
    public Optional<Ressource> getRessourceById(@PathVariable Long id) {
        return leçonService.getRessourceById(id);

}

}