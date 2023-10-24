-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb4 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`takes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`takes` (
  `studentID` INT NOT NULL,
  `courseID` VARCHAR(12) NOT NULL,
  `sectionID` VARCHAR(45) NOT NULL,
  `year` YEAR NOT NULL,
  `semester` INT NOT NULL,
  `grade` VARCHAR(2) NULL,
  `content` TEXT NULL,
  PRIMARY KEY (`courseID`, `sectionID`, `year`, `semester`),
    CONSTRAINT `takesFK`
    FOREIGN KEY (`studentID`)
    REFERENCES `mydb`.`user` (`studentID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE, 
  UNIQUE INDEX `courseID_UNIQUE` (`courseID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `studentID` INT NOT NULL,
  `userName` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`studentID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`profile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`profile` (
  `studentID` INT NOT NULL,
  `fullName` VARCHAR(45) NOT NULL,
  `dateOfBirth` DATE NOT NULL,
  `class` VARCHAR(15) NOT NULL,
  `gender` TINYINT NOT NULL DEFAULT 0,
  `address` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `image` VARCHAR(45) NULL,
  PRIMARY KEY (`studentID`),
  CONSTRAINT `profileFK`
    FOREIGN KEY (`studentID`)
    REFERENCES `mydb`.`user` (`studentID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`sections`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sections` (
  `courseID` VARCHAR(12) NOT NULL,
  `sectionID` VARCHAR(45) NOT NULL,
  `year` YEAR NOT NULL,
  `semester` INT NOT NULL,
  `building` VARCHAR(3) NULL,
  `roomNumber` VARCHAR(7) NULL,
  `teacherName` VARCHAR(45) NULL,
  PRIMARY KEY (`courseID`, `sectionID`, `year`, `semester`),
  CONSTRAINT `sectionsFK`
    FOREIGN KEY (`courseID`, `sectionID`, `year`, `semester`)
    REFERENCES `mydb`.`takes` (`courseID`, `sectionID`, `year`, `semester`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`prereq`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`prereq` (
  `courseID` VARCHAR(12),
  `prereqID` INT NULL,
  PRIMARY KEY (`courseID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`curriculum`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`curriculum` (
  `courseID` VARCHAR(12) NOT NULL,
  `status` VARCHAR(45) NULL,
  `updateDate` DATE NULL,
  `content` TEXT NULL,
  `downloadNumber` INT NULL,
  `textDescription` VARCHAR(45) NULL,
  `orderDate` DATE NULL,
  `priceEach` INT NULL,
  PRIMARY KEY (`courseID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`payments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`payments` (
  `studentID` INT NOT NULL,
  `balance` INT NULL,
  `debt` INT NULL,
  `amount` INT NULL,
  `paymentDate` DATE NULL,
  PRIMARY KEY (`studentID`),
  CONSTRAINT `paymentsFK`
    FOREIGN KEY (`studentID`)
    REFERENCES `mydb`.`user` (`studentID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`program`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`program` (
  `courseID` VARCHAR(12) NOT NULL,
  `semester` YEAR NULL,
  `mandatory` BLOB(2) NULL,
  `mark` BLOB(2) NULL,
  PRIMARY KEY (`courseID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`courses` (
  `courseID` VARCHAR(12) NOT NULL,
  `courseName` VARCHAR(45) NULL,
  `credits` VARCHAR(45) NULL,
  `practice` INT NULL,
  `theory` INT NULL,
  PRIMARY KEY (`courseID`),
  CONSTRAINT `coursesFK`
    FOREIGN KEY (`courseID`)
    REFERENCES `mydb`.`sections` (`courseID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `prereqFK`
    FOREIGN KEY (`courseID`)
    REFERENCES `mydb`.`prereq` (`courseID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `curriculumFK`
    FOREIGN KEY (`courseID`)
    REFERENCES `mydb`.`curriculum` (`courseID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `programFK`
    FOREIGN KEY (`courseID`)
    REFERENCES `mydb`.`program` (`courseID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`contact` (
  `studentID` INT NOT NULL,
  `instructorEmail` VARCHAR(45) NOT NULL,
  `title` TEXT NOT NULL,
  `content` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`instructorEmail`, `studentID`),
  INDEX `contactFK_idx` (`studentID` ASC) VISIBLE,
  CONSTRAINT `contactFK`
    FOREIGN KEY (`studentID`)
    REFERENCES `mydb`.`user` (`studentID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
