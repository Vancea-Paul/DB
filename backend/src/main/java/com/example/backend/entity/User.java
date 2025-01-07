package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

@Entity
@Data
@Getter
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String email;
    private String phoneNumber;

//    public void setPassword(String encode) {
//
//    }
//
//    public CharSequence getPassword() {
//            return null;
//    }
//
//    // Getters and setters
}