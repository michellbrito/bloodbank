DROP DATABASE IF EXISTS blood_bank_db;
CREATE DATABASE blood_bank_db;


-- hospital table
DROP TABLE IF EXISTS hospital; 
CREATE TABLE hospital (
    hospital_id INT AUTO_INCREMENT PRIMARY KEY,
    hospital_name VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zipcode INT NOT NULL,
    phone VARCHAR(255) NOT NULL
);

-- blood bank table
DROP TABLE IF EXISTS blood_bank; 
CREATE TABLE blood_bank (
    blood_bank_id INT AUTO_INCREMENT PRIMARY KEY,
    blood_bank_name VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zipcode INT NOT NULL,
    phone VARCHAR(255) NOT NULL
);

-- donor table
DROP TABLE IF EXISTS donor; 
CREATE TABLE donor (
    donor_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    blood_group VARCHAR(255) NOT NULL, 
    medical_report VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zipcode INT NOT NULL,
    phone VARCHAR(255) NOT NULL
);

-- patient table
DROP TABLE IF EXISTS patient; 
CREATE TABLE patient (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    blood_group VARCHAR(255) NOT NULL,
    patient_disease VARCHAR(255) NOT NULL
);

-- patient & hospital relation table
DROP TABLE IF EXISTS patient_blood_usage; 
CREATE TABLE patient_blood_usage (
    patient_blood_usage_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    hospital_id INT,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id)
);

-- hospital & blood bank relation table
DROP TABLE IF EXISTS hospital_donations; 
CREATE TABLE hospital_donations (
    hospital_donation_id INT AUTO_INCREMENT PRIMARY KEY,
    hospital_id INT,
    blood_bank_id INT,
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id),
    FOREIGN KEY (blood_bank_id) REFERENCES blood_bank(blood_bank_id)
);

-- blood bank & donor relation table
DROP TABLE IF EXISTS blood_bank_donations;
CREATE TABLE blood_bank_donations (
    blood_bank_donation_id INT AUTO_INCREMENT PRIMARY KEY,
    donor_id INT,
    blood_bank_id INT,
    FOREIGN KEY (donor_id) REFERENCES donor(donor_id),
    FOREIGN KEY (blood_bank_id) REFERENCES blood_bank(blood_bank_id)
);

-- donor & patient relation table
DROP TABLE IF EXISTS blood_type_compability;
CREATE TABLE blood_type_compability (
    blood_type_compability_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    donor_id INT,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    FOREIGN KEY (donor_id) REFERENCES donor(donor_id)
);