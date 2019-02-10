CREATE DATABASE devops;
CREATE USER 'aghiles'@'localhost' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* TO 'aghiles'@'localhost';
USE devops;
FLUSH PRIVILEGES;
CREATE TABLE user (
first_name varchar(25),
last_name  varchar(25),
password varchar(255),
email  varchar(50)
);

INSERT INTO user (first_name, last_name, password, email) VALUES ('Aghiles', 'TIGHRINE', 'monPassword', 'aghiles.tighrine2@gmail.com');

