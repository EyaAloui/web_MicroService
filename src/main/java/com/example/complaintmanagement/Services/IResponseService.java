package com.example.complaintmanagement.Services;

import com.example.complaintmanagement.Entities.Complaint;
import com.example.complaintmanagement.Entities.Response;

import java.util.List;

public interface IResponseService {

    Response addResponse(Response response);
    List<Response> retrieveAllResponses();

    Response retrieveResponse(Long id);
    Response updateResponse(Response response, Long id);

    void deleteResponse(Long id);

}
