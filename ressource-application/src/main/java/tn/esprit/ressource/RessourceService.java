package tn.esprit.ressource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class RessourceService implements IRessourceService {

    @Autowired
    private RessourceRepository ressourceRepository;
    // Créer une nouvelle ressource
    @Override
    public Ressource createRessource(Ressource ressource) {
        return ressourceRepository.save(ressource);
    }

    // Récupérer toutes les ressources
    @Override
    public List<Ressource> getAllRessources() {
        return ressourceRepository.findAll();
    }

    // Récupérer une ressource par ID
    @Override
    public Optional<Ressource> getRessourceById(Long id) {
        return ressourceRepository.findById(id);
    }

    // Mettre à jour une ressource par ID
    @Override
    public Ressource updateRessource(Long id, Ressource ressourceDetails) {
        Optional<Ressource> ressourceOpt = ressourceRepository.findById(id);
        if (ressourceOpt.isPresent()) {
            Ressource ressource = ressourceOpt.get();
            ressource.setNomRessource(ressourceDetails.getNomRessource());
            ressource.setType(ressourceDetails.getType());
            ressource.setUrl(ressourceDetails.getUrl());
            ressource.setDescription(ressourceDetails.getDescription());
            return ressourceRepository.save(ressource);
        }
        return null; // Or throw an exception if not found
    }

    // Supprimer une ressource par ID
    @Override
    public void deleteRessource(Long id) {
        ressourceRepository.deleteById(id);
    }
}
