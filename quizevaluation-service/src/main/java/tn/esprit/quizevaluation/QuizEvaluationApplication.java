package tn.esprit.quizevaluation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import tn.esprit.quizevaluation.Entity.Quiz;
import tn.esprit.quizevaluation.Repository.QuizRepository;

@SpringBootApplication
@EnableDiscoveryClient
public class QuizEvaluationApplication {

    public static void main(String[] args) {
        SpringApplication.run(QuizEvaluationApplication.class, args);
    }
    @Autowired
    private QuizRepository quizRepository;
   @Bean
    ApplicationRunner init(){
       return (args) -> {
           quizRepository.save(new Quiz("Quiz1",21,20));
           quizRepository.save(new Quiz("Quiz2",30,25));
       quizRepository.findAll().forEach(System.out::println);

       };
   }

}
