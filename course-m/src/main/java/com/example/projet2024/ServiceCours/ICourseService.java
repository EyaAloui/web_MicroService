package com.example.projet2024.ServiceCours;

import com.example.projet2024.entite.Course;

import java.util.List;
import java.util.Optional;

public interface ICourseService {

    // Get all courses
    List<Course> getAllCourses();

    // Get a course by ID
    Optional<Course> getCourseById(Long id);

    // Create a new course
    Course createCourse(Course course);

    // Update an existing course
    Optional<Course> updateCourse(Long id, Course courseDetails);

    // Delete a course by ID
    boolean deleteCourse(Long id);
}
