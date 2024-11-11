package tn.esprit.lecon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LeçonService implements ILeçonService {

    @Autowired
    private LeçonRepository leçonRepository;

    @Autowired
    private RessourceRepository ressourceRepository;

    // Récupérer toutes les leçons
    @Override
    public List<Leçon> getAllLeçons() {
        return leçonRepository.findAll();
    }

    // Récupérer une leçon par ID
    @Override
    public Optional<Leçon> getLeçonById(Long id) {
        return leçonRepository.findById(id);
    }

    // Créer une nouvelle leçon
    @Override
    public Leçon createLeçon(Leçon leçon) {
        return leçonRepository.save(leçon);
    }

    // Mettre à jour une leçon par ID
    @Override
    public Leçon updateLeçon(Long id, Leçon leçonDetails) {
        Leçon leçon = leçonRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Leçon not found"));
        leçon.setTitre(leçonDetails.getTitre());
        leçon.setContenu(leçonDetails.getContenu());
        leçon.setNiveau(leçonDetails.getNiveau());
        return leçonRepository.save(leçon);
    }

    // Supprimer une leçon par ID
    @Override
    public void deleteLeçon(Long id) {
        leçonRepository.deleteById(id);
    }


    public List<Ressource> getAllRessources() {
        List<Ressource> ressources = ressourceRepository.findAll();
        System.out.println("Ressources trouvées : " + ressources); // Pour vérifier que la liste n'est pas vide
        return ressources;
    }

    // Récupérer une ressource par ID (en utilisant la méthode findById() fournie par JpaRepository)
    public Optional<Ressource> getRessourceById(Long id) {
        return ressourceRepository.findById(id);
    }
}
