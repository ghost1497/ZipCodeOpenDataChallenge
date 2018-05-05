package com.gitzipcode.DataControllerBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class DataControllerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(DataControllerBackendApplication.class, args);
	}
}
