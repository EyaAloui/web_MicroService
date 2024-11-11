# Utilisation de l'image de base openjdk 17
FROM openjdk:17

# Expose le port 8089 pour la communication
EXPOSE 8089

# Copie le fichier JAR dans le conteneur
COPY target/course-m-0.0.1-SNAPSHOT.jar /course-m-0.0.1-SNAPSHOT.jar

# Commande de démarrage du conteneur
ENTRYPOINT ["java", "-jar", "/course-m-0.0.1-SNAPSHOT.jar"]
