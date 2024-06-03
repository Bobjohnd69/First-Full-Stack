/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.firstProject.fullstackbackend.repository;
import com.firstProject.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author minht
 */
public interface UserRepository extends JpaRepository<User, Long>{
    
}
