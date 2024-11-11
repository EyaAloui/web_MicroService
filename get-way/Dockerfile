FROM openjdk:17-jdk-alpine

WORKDIR /app

ADD target/*.jar get-way.jar

EXPOSE 8085

ENTRYPOINT ["java", "-jar", "get-way.jar"]
