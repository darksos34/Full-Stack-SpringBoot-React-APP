package com.crm.crm.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

//Remove AutoWired  makes the application slow
@Component
public class BootLoader implements CommandLineRunner {

    private final ContactRepository repository;

    @Autowired
    public BootLoader(ContactRepository repository){
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.repository.save(new Contact("Jordy","Hamwijk","j.hamwijk34@gmail.com"));
    }
}
