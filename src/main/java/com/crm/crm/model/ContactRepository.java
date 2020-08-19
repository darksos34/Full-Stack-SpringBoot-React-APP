package com.crm.crm.model;

import org.springframework.stereotype.Repository;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {

}
