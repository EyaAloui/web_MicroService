#FROM ubuntu:latest
#LABEL authors="Yasmine"

#ENTRYPOINT ["top", "-b"]
FROM openjdk:17
EXPOSE 8083
ADD target/ComplaintManagement-0.0.1.jar ComplaintManagement.jar
ENTRYPOINT ["java", "-jar", "ComplaintManagement.jar"]