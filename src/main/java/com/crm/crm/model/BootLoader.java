package com.crm.crm.model;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class BootLoader implements CommandLineRunner {

    private  ContactRepository repository;

    //Replaced autowired with a Constructor
    //Difference needs to be tested
    //Autowired or empty Constructor
    private BootLoader(){
    }

    public BootLoader(ContactRepository repository){
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.repository.save(new Contact("Jordy","Hamwijk","j.hamwijk34@gmail.com"));
    }
}
