package tn.esprit.ressource;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RessourceRepository extends JpaRepository<Ressource, Long> {
    // JpaRepository fournit déjà les méthodes CRUD
}
