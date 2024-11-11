package com.example.getway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;

@EnableDiscoveryClient
@SpringBootApplication
public class GetWayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GetWayApplication.class, args);
	}




}
