package tn.esprit.quizevaluation.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.quizevaluation.Entity.Quiz;
import tn.esprit.quizevaluation.Service.QuizService;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    // ** Add Quiz ** //
    @PostMapping(value = "/addQuiz", consumes = MediaType.APPLICATION_XML_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Quiz> createQuiz(@RequestBody Quiz quiz){
        return new ResponseEntity<>(quizService.addQuiz(quiz),HttpStatus.OK);
    }

    // ** Update Quiz ** //
    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Quiz> updateQuiz(@PathVariable(value = "id") Long id ,
                                           @RequestBody Quiz quiz){
        return new ResponseEntity<>(quizService.updateQuiz(id, quiz), HttpStatus.OK);
    }

    //** Delete Quiz ** //
    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteQuiz (@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(quizService.deleteQuiz(id), HttpStatus.OK);
    }
}
