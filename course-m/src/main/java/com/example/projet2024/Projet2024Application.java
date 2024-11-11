package com.example.projet2024;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import java.util.Arrays;
@EnableDiscoveryClient
@SpringBootApplication
public class Projet2024Application {

    public static void main(String[] args) {
        SpringApplication.run(Projet2024Application.class, args);
    }


}
