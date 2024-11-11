package com.example.projet2024.ServiceCours;

import com.example.projet2024.entite.Course;
import com.example.projet2024.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService implements ICourseService {

    private final CourseRepo courseRepository;

    @Autowired
    public CourseService(CourseRepo courseRepository) {
        this.courseRepository = courseRepository;
    }

    // Get all courses
    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    // Get a course by ID
    @Override
    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }

    // Create a new course
    @Override
    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    // Update an existing course
    @Override
    public Optional<Course> updateCourse(Long id, Course courseDetails) {
        return courseRepository.findById(id).map(course -> {
            course.setTitle(courseDetails.getTitle());
            course.setDescription(courseDetails.getDescription());
            course.setStartDate(courseDetails.getStartDate());
            course.setEndDate(courseDetails.getEndDate());
            course.setPrice(courseDetails.getPrice());
            return courseRepository.save(course);
        });
    }

    // Delete a course by ID
    @Override
    public boolean deleteCourse(Long id) {
        if (courseRepository.existsById(id)) {
            courseRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
