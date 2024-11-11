package tn.esprit.lecon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableFeignClients
public class LeçonApplication {
    public static void main(String[] args) {
        SpringApplication.run(LeçonApplication.class, args);
    }

    @Autowired
    private LeçonRepository repository;

    @Bean
    ApplicationRunner init() {
        return (args) -> {
            // Enregistrer quelques leçons d'exemple
            repository.save(new Leçon("Mathématiques de base", "Introduction à l'algèbre et à la géométrie.", "Débutant"));
            repository.save(new Leçon("Physique avancée", "Plongée dans la mécanique quantique.", "Avancé"));
            repository.save(new Leçon("Histoire de Rome", "Exploration de l'Empire romain.", "Intermédiaire"));
            repository.save(new Leçon("Programmation 101", "Concepts de base en programmation Java.", "Débutant"));

            // Récupérer et imprimer toutes les leçons
            repository.findAll().forEach(System.out::println);
        };
    }

}

