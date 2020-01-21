﻿--
-- Script was generated by Devart dbForge Studio 2019 for MySQL, Version 8.2.23.0
-- Product home page: http://www.devart.com/dbforge/mysql/studio
-- Script date 2020. 01. 21. 11:37:45
-- Server version: 5.5.5-10.4.6-MariaDB
-- Client version: 4.1
--

-- 
-- Disable foreign keys
-- 
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

-- 
-- Set SQL mode
-- 
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 
-- Set character set the client will use to send SQL statements to the server
--
SET NAMES 'utf8';

DROP DATABASE IF EXISTS kerekpardb;

CREATE DATABASE kerekpardb
	CHARACTER SET utf8
	COLLATE utf8_hungarian_ci;

--
-- Set default database
--
USE kerekpardb;

--
-- Create table `felniatmerok`
--
CREATE TABLE felniatmerok (
  id INT(11) NOT NULL AUTO_INCREMENT,
  meret VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 11,
AVG_ROW_LENGTH = 1638,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

DELIMITER $$

--
-- Create procedure `WheelDiameterUpdate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE WheelDiameterUpdate(IN paramId INT, IN paramSize VARCHAR(255))
BEGIN
UPDATE felniAtmerok
SET meret = paramSize
WHERE id = paramId;
END
$$

--
-- Create procedure `WheelDiameterGetById`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE WheelDiameterGetById(IN paramId INT)
BEGIN
SELECT
  *
FROM felniAtmerok
WHERE id = paramId;
END
$$

--
-- Create procedure `WheelDiameterGetAll`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE WheelDiameterGetAll()
BEGIN
SELECT
  *
FROM felniAtmerok;
END
$$

--
-- Create procedure `WheelDiameterDelete`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE WheelDiameterDelete(IN paramId INT)
BEGIN
DELETE
  FROM felniAtmerok
WHERE id = paramId;
END
$$

--
-- Create procedure `WheelDiameterCreate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE WheelDiameterCreate(IN paramSize VARCHAR(255))
BEGIN
INSERT INTO felniAtmerok (meret)
  VALUES (paramSize);
END
$$

DELIMITER ;

--
-- Create table `tipusok`
--
CREATE TABLE tipusok (
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  tipus VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 9,
AVG_ROW_LENGTH = 2048,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

DELIMITER $$

--
-- Create procedure `TypeUpdate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE TypeUpdate(IN paramId INT, IN paramTipus VARCHAR(255))
BEGIN
UPDATE tipusok
SET tipus = paramTipus
WHERE id = paramId;
END
$$

--
-- Create procedure `TypeGetById`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE TypeGetById(IN paramId INT)
BEGIN
SELECT
  *
FROM tipusok
WHERE id = paramId;
END
$$

--
-- Create procedure `TypeGetAll`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE TypeGetAll()
BEGIN
SELECT
  *
FROM tipusok;
END
$$

--
-- Create procedure `TypeDelete`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE TypeDelete(IN paramId INT)
BEGIN
DELETE
  FROM tipusok
WHERE id = paramId;
END
$$

--
-- Create procedure `TypeCreate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE TypeCreate(IN paramTipus VARCHAR(255))
BEGIN
INSERT INTO tipusok (tipus)
  VALUES (paramTipus);
END
$$

DELIMITER ;

--
-- Create table `valtok`
--
CREATE TABLE valtok (
  id INT(11) NOT NULL AUTO_INCREMENT,
  tipus VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 4,
AVG_ROW_LENGTH = 8192,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

DELIMITER $$

--
-- Create procedure `ShifterGetId`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE ShifterGetId(IN paramId INT)
BEGIN
SELECT
  *
FROM valtok
WHERE id = paramId;
END
$$

--
-- Create procedure `ShifterGetAll`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE ShifterGetAll()
BEGIN
SELECT
  *
FROM valtok;
END
$$

DELIMITER ;

--
-- Create table `vasarlas`
--
CREATE TABLE vasarlas (
  id INT(11) NOT NULL AUTO_INCREMENT,
  vasarloUniqId VARCHAR(255) DEFAULT NULL,
  termekKod VARCHAR(255) DEFAULT NULL,
  idopont DATETIME DEFAULT NULL,
  fizetesModja VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

DELIMITER $$

--
-- Create procedure `PurchaseGetById`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE PurchaseGetById(IN paramId VARCHAR(255))
BEGIN
SELECT
  *
FROM vasarlas
WHERE id = paramId;
END
$$

--
-- Create procedure `PurchaseGetAll`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE PurchaseGetAll()
BEGIN
SELECT
  *
FROM vasarlas;
END
$$

--
-- Create procedure `PurchaseCreate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE PurchaseCreate(IN paramUniqId VARCHAR(255), IN paramTermekKod VARCHAR(255), IN paramIdopont DATETIME, IN paramFizetesModja VARCHAR(255))
BEGIN
INSERT INTO vasarlas (vasarlo_uniq_id, termek_kod, idopont, fizetes_modja)
  VALUES (paramUniqId, paramTermekKod, paramIdopont, paramFizetesModja);
END
$$

DELIMITER ;

--
-- Create table `fizetesmodja`
--
CREATE TABLE fizetesmodja (
  id INT(11) NOT NULL AUTO_INCREMENT,
  `mod` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 4,
AVG_ROW_LENGTH = 8192,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

DELIMITER $$

--
-- Create procedure `PaymentMethodGetById`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE PaymentMethodGetById(IN paramId INT)
BEGIN
SELECT
  *
FROM fizetesModja
WHERE id = paramId;
END
$$

--
-- Create procedure `PaymentMethodGetAll`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE PaymentMethodGetAll()
BEGIN
SELECT
  *
FROM fizetesModja;
END
$$

DELIMITER ;

--
-- Create table `vazmeret`
--
CREATE TABLE vazmeret (
  id INT(11) NOT NULL AUTO_INCREMENT,
  meret VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 8,
AVG_ROW_LENGTH = 2340,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

DELIMITER $$

--
-- Create procedure `FrameSizeUpdate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE FrameSizeUpdate(IN paramId INT, IN paramMeret VARCHAR(255))
BEGIN
UPDATE vazmeret
SET meret = paramMeret
WHERE id = paramId;
END
$$

--
-- Create procedure `FrameSizeGetById`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE FrameSizeGetById(IN paramId INT)
BEGIN
SELECT
  *
FROM vazmeret
WHERE id = paramId;
END
$$

--
-- Create procedure `FrameSizeGetAll`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE FrameSizeGetAll()
BEGIN
SELECT
  *
FROM vazmeret;
END
$$

--
-- Create procedure `FrameSizeDelete`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE FrameSizeDelete(IN paramId INT)
BEGIN
DELETE
  FROM vazmeret
WHERE id = paramId;
END
$$

--
-- Create procedure `FrameSizeCreate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE FrameSizeCreate(IN paramMeret VARCHAR(255))
BEGIN
INSERT INTO vazmeret (meret)
  VALUES (paramMeret);
END
$$

DELIMITER ;

--
-- Create table `markak`
--
CREATE TABLE markak (
  id INT(11) NOT NULL AUTO_INCREMENT,
  marka VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 7,
AVG_ROW_LENGTH = 2730,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

DELIMITER $$

--
-- Create procedure `BrandUpdate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE BrandUpdate(IN paramId INT, IN paramMarka VARCHAR(255))
BEGIN
UPDATE markak
SET marka = paramMarka
WHERE id = paramId;
END
$$

--
-- Create procedure `BrandGetById`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE BrandGetById(IN paramId INT)
BEGIN
SELECT
  *
FROM markak
WHERE id = paramId;
END
$$

--
-- Create procedure `BrandGetAll`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE BrandGetAll()
BEGIN
SELECT
  *
FROM markak;
END
$$

--
-- Create procedure `BrandDelete`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE BrandDelete(IN paramId INT)
BEGIN
DELETE
  FROM markak
WHERE id = paramId;
END
$$

--
-- Create procedure `BrandCreate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE BrandCreate(IN paramMarka VARCHAR(255))
BEGIN
INSERT INTO markak (marka)
  VALUES (paramMarka);
END
$$

DELIMITER ;

--
-- Create table `kerekpar`
--
CREATE TABLE kerekpar (
  id INT(11) NOT NULL AUTO_INCREMENT,
  cikkszam CHAR(16) DEFAULT NULL,
  markaId INT(11) DEFAULT NULL,
  vazmeretId INT(11) DEFAULT NULL,
  felniAtmeroId INT(11) DEFAULT NULL,
  valtoTipus INT(11) DEFAULT NULL,
  tipusId INT(11) DEFAULT NULL,
  ar INT(11) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 7,
AVG_ROW_LENGTH = 2730,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

DELIMITER $$

--
-- Create procedure `BicycleUpdate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE BicycleUpdate(IN paramId INT, IN paramCikkszam CHAR(16), IN paramMarkaId INT, IN paramVazmeretId INT, IN paramFelniAtmeroId INT, IN paramValtoTipus INT, IN paramTipusId INT, IN paramAr INT)
BEGIN
UPDATE kerekpar
SET kerekpar.cikkszam = paramCikkszam,
    kerekpar.markaId = paramMarkaId,
    kerekpar.vazmeretId = paramVazmeretId,
    kerekpar.felniAtmeroId = paramFelniAtmeroId,
    kerekpar.valtoTipus = paramValtoTipus,
    kerekpar.tipusId = paramTipusId,
    kerekpar.ar = paramAr
WHERE kerekpar.id = paramId;
END
$$

--
-- Create procedure `BicycleSelectByItemNumber`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE BicycleSelectByItemNumber(IN paramCikkszam CHAR(16))
BEGIN
SELECT
  *
FROM kerekpar
WHERE cikkszam = paramCikkszam;
END
$$

--
-- Create procedure `BicycleSelectById`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE BicycleSelectById(IN paramID INT)
BEGIN
SELECT
  *
FROM kerekpar
WHERE id = paramId;
END
$$

--
-- Create procedure `BicycleGetAll`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE BicycleGetAll()
BEGIN
SELECT
  *
FROM kerekpar;
END
$$

--
-- Create procedure `BicycleDelete`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE BicycleDelete(IN paramId INT)
BEGIN
DELETE
  FROM kerekpar
WHERE kerekpar.id = paramId;
END
$$

--
-- Create procedure `BicycleCreate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE BicycleCreate(IN paramId INT, IN paramCikkszam CHAR(16), IN paramMarkaId INT, IN paramVazmeretId INT, IN paramFelniAtmeroId INT, IN paramValtoTipus INT, IN paramTipusId INT, IN paramAr INT)
BEGIN
INSERT INTO kerekpar (id, cikkszam, markaId, vazmeretId, felniAtmeroId, valtoTipus, tipusId, ar)
  VALUES (paramId, paramCikkszam, paramMarkaId, paramVazmeretId, paramFelniAtmeroId, paramValtoTipus, paramTipusId, paramAr);
END
$$

DELIMITER ;

--
-- Create table `user`
--
CREATE TABLE user (
  id INT(11) NOT NULL AUTO_INCREMENT,
  uniqId VARCHAR(255) DEFAULT NULL,
  nev VARCHAR(255) DEFAULT NULL,
  email VARCHAR(50) DEFAULT NULL,
  jelszo VARCHAR(255) DEFAULT NULL,
  role VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 9,
AVG_ROW_LENGTH = 2048,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

DELIMITER $$

--
-- Create procedure `UserUpdate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE UserUpdate(IN paramName VARCHAR(255), IN paramEmail VARCHAR(255), IN paramJelszo VARCHAR(255), IN paramRole VARCHAR(32))
BEGIN
UPDATE user
SET nev = paramName,
    email = paramEmail,
    jelszo = paramJelszo,
    role = paramRole;
END
$$

--
-- Create procedure `UserFindByUniqID`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE UserFindByUniqID(IN paramUniqId VARCHAR(255))
BEGIN
SELECT
  user.id,
  user.uniqId,
  user.nev,
  user.email,
  user.jelszo,
  user.role
FROM user
WHERE user.uniqId = paramUniqId;
END
$$

--
-- Create procedure `UserFindByEmail`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE UserFindByEmail(IN paramEmail VARCHAR(255))
BEGIN
SELECT
  user.id,
  user.uniqId,
  user.nev,
  user.email,
  user.jelszo,
  user.role
FROM user
WHERE user.email = paramEmail;
END
$$

--
-- Create procedure `UserFindByCredentials`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE UserFindByCredentials(IN paramEmail VARCHAR(255), IN paramJelszo VARCHAR(255))
BEGIN
SELECT
  user.id,
  user.uniqId,
  user.email,
  user.jelszo,
  user.role
FROM user
WHERE user.email = paramEmail
AND user.jelszo = paramJelszo;
END
$$

--
-- Create procedure `UserDelete`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE UserDelete(IN paramUniqId VARCHAR(255))
BEGIN
DELETE
  FROM user
WHERE user.uniqId = paramUniqId;
END
$$

--
-- Create procedure `UserCreate`
--
CREATE DEFINER = 'root'@'localhost'
PROCEDURE UserCreate(OUT paramId INT, IN paramUniqId VARCHAR(128), paramName VARCHAR(255), IN paramEmail VARCHAR(255), IN paramJelszo VARCHAR(255), IN paramRole VARCHAR(32))
BEGIN
INSERT INTO user (uniqId, nev, email, jelszo, role)
  VALUES (paramUniqId, paramName, paramEmail, paramJelszo, paramRole);


SELECT
  LAST_INSERTId() AS paramId;
END
$$

DELIMITER ;

-- 
-- Dumping data for table vazmeret
--
INSERT INTO vazmeret VALUES
(1, 'XXS'),
(2, 'XS'),
(3, 'S'),
(4, 'M'),
(5, 'L'),
(6, 'XL'),
(7, 'XXL');

-- 
-- Dumping data for table vasarlas
--
-- Table kerekpardb.vasarlas does not contain any data (it is empty)

-- 
-- Dumping data for table valtok
--
INSERT INTO valtok VALUES
(1, 'marok'),
(2, 'pillangó'),
(3, 'nincs');

-- 
-- Dumping data for table user
--
INSERT INTO user VALUES
(1, 'be5d0cd7-c121-4d29-b939-3cadd483be4e', NULL, 'wasyster@gmail.com', 'password', 'ROLE_ADMIN'),
(2, '1e735fd6-5032-43b8-848c-c1a3de40b8d8', NULL, 'elsoegon@test.com', 'password1', 'ROLE_CLIENT'),
(3, 'da893cb2-f8c7-4a0d-a4b5-8d0543c68867', NULL, 'masodikmiksa@test.com', 'password2', 'ROLE_CLIENT'),
(4, 'a52e9283-793c-41ec-b057-c24b256ed22e', NULL, 'harmadikhuba@test.com', 'password3', 'ROLE_CLIENT'),
(5, '12785bfc-fbef-4256-8118-8ebd2179d2d3', NULL, 'negyediknero@test.com', 'password4', 'ROLE_CLIENT'),
(6, 'd89ecc28-01a0-47eb-8aea-8d5f830f5eed', NULL, 'otodikodon@test.com', 'password5', 'ROLE_CLIENT'),
(7, 'fa2149af-4662-4089-b8de-63402efeb8c9', NULL, 'hatodikhanibal@test.com', 'password6', 'ROLE_CLIENT'),
(8, 'fa8e4ae6-5f54-4640-8f91-71c49a61b3a7', NULL, 'hetedikheraclius@test.com', 'password7', 'ROLE_CLIENT');

-- 
-- Dumping data for table tipusok
--
INSERT INTO tipusok VALUES
(1, 'városi'),
(2, 'túra'),
(3, 'BMX'),
(4, 'tandem'),
(5, 'fitnesz'),
(6, 'országúti'),
(7, 'dirt'),
(8, 'elektromos');

-- 
-- Dumping data for table markak
--
INSERT INTO markak VALUES
(1, 'Merida'),
(2, 'Scott'),
(3, 'Torpado'),
(4, 'Gepida'),
(5, 'Capriolo'),
(6, 'Woodlands');

-- 
-- Dumping data for table kerekpar
--
INSERT INTO kerekpar VALUES
(1, '6353223021', 3, 4, 4, 1, 1, 80000),
(2, '3006546592', 1, 1, 1, 3, 3, 50000),
(3, '4860030568', 2, 2, 2, 2, 6, 60000),
(4, '4860030568', 1, 3, 2, 2, 2, 70000),
(5, '7282042966', 4, 4, 5, 2, 4, 100000);

-- 
-- Dumping data for table fizetesmodja
--
INSERT INTO fizetesmodja VALUES
(1, 'készpénz átvételkor'),
(2, 'kártyás'),
(3, 'átutalás');

-- 
-- Dumping data for table felniatmerok
--
INSERT INTO felniatmerok VALUES
(1, '12” – 203 mm'),
(2, '14” – 254 mm'),
(3, '16” – 305 mm'),
(4, '18” – 355 mm'),
(5, '20” – 406 mm'),
(6, '24” – 507 mm'),
(7, '26” – 559 mm'),
(8, '27,5” – 584 mm – 650B'),
(9, '28” – 622 mm – 700c'),
(10, '29” – 622 mm');

-- 
-- Restore previous SQL mode
-- 
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

-- 
-- Enable foreign keys
-- 
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;