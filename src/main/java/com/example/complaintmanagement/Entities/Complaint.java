package com.example.complaintmanagement.Entities;
import java.net.URL;
import java.util.*;

import jakarta.persistence.*;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    @Enumerated(EnumType.STRING)
    private ComplaintCategory complaintCategory;
    private Long courseId;
    private String title;
    private String description;
    private Integer status;
    private Integer priority;
    private Date createdDate;
    private Date updatedDate;
    private Boolean badWordsFlagged;
    private String photoUrl;
    private String notificationEmail;
    private String notificationSMS;


}
