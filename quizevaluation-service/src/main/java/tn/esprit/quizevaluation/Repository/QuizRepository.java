package tn.esprit.quizevaluation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.quizevaluation.Entity.Quiz;
@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
}
