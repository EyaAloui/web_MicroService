FROM openjdk:17-jdk-alpine

WORKDIR /app

ADD target/*.jar lecon-application.jar

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "lecon-application.jar"]
