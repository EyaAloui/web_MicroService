package tn.esprit.quizevaluation.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Quiz {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idquiz;
    String description;
    int  duration;
    int maxScore ;

    public Quiz() {
    }

    public Quiz(Long idquiz, String description, int duration, int maxScore) {
        this.idquiz = idquiz;
        this.description = description;
        this.duration = duration;
        this.maxScore = maxScore;
    }

    public Quiz(String description, int duration, int maxScore) {
        this.description = description;
        this.duration = duration;
        this.maxScore = maxScore;
    }

    public Long getIdquiz() {
        return idquiz;
    }

    public void setIdquiz(Long idquiz) {
        this.idquiz = idquiz;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getMaxScore() {
        return maxScore;
    }

    public void setMaxScore(int maxScore) {
        this.maxScore = maxScore;
    }
}
