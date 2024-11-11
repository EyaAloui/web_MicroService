package com.example.complaintmanagement;
import com.example.complaintmanagement.Services.BadWordsFilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@EnableDiscoveryClient
public class ComplaintManagementApplication {

//    @Autowired
//    private BadWordsFilterService badWordsFilterService;

    public static void main(String[] args) {
        SpringApplication.run(ComplaintManagementApplication.class, args);
    }
   /* public static void main(String[] args) {
        BadWordsFilterService filterService = new BadWordsFilterService();
        String testText = "This is a test with bad words like damn and hell.";
        System.out.println(filterService.censorBadWords(testText));
    }*/



}
