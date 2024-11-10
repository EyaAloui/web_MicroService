package tn.esprit.quizevaluation.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.quizevaluation.Entity.Quiz;
import tn.esprit.quizevaluation.Repository.QuizRepository;

@Service
public class QuizService {
    @Autowired
    QuizRepository quizRepository;
    // ** Add Quiz ** //
    public Quiz addQuiz (Quiz quiz){
     return   quizRepository.save(quiz);
    }
    // ** Update Quiz ** //
    public Quiz updateQuiz ( Long id, Quiz newQuiz){
        if(quizRepository.findById(id).isPresent()){
            Quiz existingQuiz = quizRepository.findById(id).get();
            existingQuiz.setDescription(newQuiz.getDescription());
            existingQuiz.setDuration(newQuiz.getDuration());
            existingQuiz.setMaxScore(newQuiz.getMaxScore());
            return quizRepository.save(existingQuiz);
        }
        return null;
    }
    // ** Delete Quiz ** //

    public String deleteQuiz (Long id){
        if (quizRepository.findById(id).isPresent()){
            quizRepository.deleteById(id);
            return "Quiz supprimé avec succees";
        } else
            return "Quiz non supprimé";
    }
}
