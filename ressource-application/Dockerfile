FROM openjdk:17-jdk-alpine

WORKDIR /app

ADD target/*.jar ressource-application.jar

EXPOSE 8087

ENTRYPOINT ["java", "-jar", "ressource-application.jar"]
