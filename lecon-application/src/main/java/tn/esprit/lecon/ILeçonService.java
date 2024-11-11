package tn.esprit.lecon;

import java.util.List;
import java.util.Optional;

public interface ILeçonService {

    // Méthode pour récupérer toutes les leçons
    List<Leçon> getAllLeçons();

    // Méthode pour récupérer une leçon par ID
    Optional<Leçon> getLeçonById(Long id);

    // Méthode pour créer une nouvelle leçon
    Leçon createLeçon(Leçon leçon);

    // Méthode pour mettre à jour une leçon existante
    Leçon updateLeçon(Long id, Leçon leçonDetails);

    // Méthode pour supprimer une leçon
    void deleteLeçon(Long id);
}
