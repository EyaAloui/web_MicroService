package tn.esprit.ressource;

import feign.FeignException;
import feign.codec.ErrorDecoder;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class MyErrorDecoder implements ErrorDecoder {

    @Override
    public Exception decode(String methodKey, feign.Response response) {
        // Vérification du statut HTTP pour une erreur 404
        if (response.status() == HttpStatus.NOT_FOUND.value()) {
            return new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource not found");
        }
        // Autres codes d'erreur peuvent être gérés ici
        return new Exception("Generic error");
    }
}
