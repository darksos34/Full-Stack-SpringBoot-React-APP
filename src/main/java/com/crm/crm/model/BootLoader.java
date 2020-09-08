package com.crm.crm.model;

import lombok.RequiredArgsConstructor;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor //Generates a constructor with required arguments.
public class BootLoader implements CommandLineRunner {

    private final ContactRepository repository;

    @Override
    public void run(String... args) throws Exception {
        this.repository.save(new Contact("Jordy","Hamwijk","j.hamwijk34@gmail.com"));
    }
}
