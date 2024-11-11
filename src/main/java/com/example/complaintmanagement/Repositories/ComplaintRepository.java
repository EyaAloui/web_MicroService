package com.example.complaintmanagement.Repositories;

import com.example.complaintmanagement.Entities.Complaint;
import com.example.complaintmanagement.Entities.ComplaintCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint, Long> {

 /*   @Query(INSERT c Set title =:title)
    void specialAdd(Complaint complaint);

    @Query("UPDATE Complaints SET title = :title, complaint_category = :complaintCategory, description = :description, " +
            " updated_date = CASE WHEN status = 'Open' THEN CURRENT_TIMESTAMP ELSE updated_date END " + "WHERE complaint_id = :id  AND status = 'Open' ")
    void update(int id, String title, ComplaintCategory complaintCategory, String description);
*/

    // Custom method for adding a new complaint with default values
   /* @Transactional
    @Modifying
    @Query(value = "INSERT INTO complaint (user_id, complaint_category, course_id, title, description, " +
            "status, created_date) " +
            "VALUES (:userId, :complaintCategory, " +
            "CASE WHEN :complaintCategory = 'COURSE_CONTENT' THEN :courseId ELSE NULL END, " +
            ":title, :description, 0, CURRENT_TIMESTAMP, :badWordsFlagged, :photoUrl, :notificationEmail, :notificationSMS)",
            nativeQuery = true)
    void addComplaint(Long userId, ComplaintCategory complaintCategory, Long courseId, String title,
                      String description, Boolean badWordsFlagged, String photoUrl,
                      String notificationEmail, String notificationSMS);

*/

    @Transactional
    @Modifying
    @Query("UPDATE Complaint c SET c.priority = :priority, c.status = 1 WHERE c.id = :complaintId")
    void setPriority(Long complaintId, Integer priority);


    // Method for user update (only allowed if status is 0)
    @Transactional
    @Modifying
    @Query("UPDATE Complaint c SET c.title = :title, c.complaintCategory = :complaintCategory, " +
            "c.description = :description, c.courseId = :courseId, c.updatedDate = CURRENT_TIMESTAMP " +
            "WHERE c.id = :complaintId AND c.status = 0")
    void specialUpdate(Long complaintId, String title, ComplaintCategory complaintCategory,
                       String description, Long courseId);


    @Query("SELECT c FROM Complaint c ORDER BY c.createdDate ASC")
    List<Complaint> findAllByCreatedDateAsc();

    @Query("SELECT c FROM Complaint c ORDER BY c.priority ASC")
    List<Complaint> findAllByOrderByPriorityAsc();

    @Query("SELECT c FROM Complaint c WHERE (:status IS NULL OR c.status = :status)")
    List<Complaint> findComplaintsByStatus(@Param("status") String status);

    @Query("SELECT c FROM Complaint c WHERE (:status IS NULL OR c.complaintCategory = :complaintCategory)")
    List<Complaint> findComlaintsByStatus(@Param("complaintCategory") String complaintCategory);
    /*


    /*

    @Query("SELECT c FROM Complaint c WHERE " +
            "(:status IS NULL OR c.status = :status) AND " +
            "(:category IS NULL OR c.category = :category) AND " +
            "(:description IS NULL OR LOWER(c.description) LIKE LOWER(CONCAT('%', :description, '%')))")
    List<Complaint> findComplaintsByFilters(
            @Param("status") String status,
            @Param("category") String category,
            @Param("description") String description
    );

    ///////////

        @Query("SELECT c FROM Complaint c WHERE " +
           "(:status IS NULL OR c.status = :status) AND " +
           "(:category IS NULL OR c.category = :category) AND " +
           "(:description IS NULL OR LOWER(c.description) LIKE LOWER(CONCAT('%', :description, '%')))")
    List<Complaint> findComplaintsByFilters(
        @Param("status") String status,
        @Param("category") String category,
        @Param("description") String description
    );

    */

    //List<Complaint> findByDescription(String Description, String descriptionSearch);

}
