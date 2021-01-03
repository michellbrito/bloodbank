/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

// Initializes the npm packages used
const inquirer = require('inquirer');
const questions = require('./questions/question');
const connection = require('./connection/connection');
require('dotenv').config();
require('console.table');

function loadDataBaseOptions(databaseName) {
  connection.query(`SELECT * FROM ${databaseName}`, (err, res) => {
    if (err) throw err;
    console.table(res);
    loadOptionsMenu();
  });
}

function loadSelect() {
  inquirer.prompt(questions.loadSelect).then((val) => {
    switch (val.choice) {
      case 'blood bank':
        loadDataBaseOptions('blood_bank');
        break;
      case 'donor':
        loadDataBaseOptions('donor');
        break;
      case 'hospital':
        loadDataBaseOptions('hospital');
        break;
      case 'patient':
        loadDataBaseOptions('patient');
        break;
      default:
        process.exit(0);
    }
  });
}

function insertIntoBloodBank(val) {
  connection.query(
    'INSERT INTO blood_bank (blood_bank_name, street, city, zipcode, phone) VALUES (?, ?, ?, ?,?)',
    [val.blood_bank_name, val.street, val.city, val.zipcode, val.phone],
    (err) => {
      if (err) throw err;
      console.log('---------------------');
      console.log('ADDED TO BLOOD BANK!\n');
      console.log('---------------------');
      loadOptionsMenu();
    },
  );
}

function displayInsertIntoBloodBank() {
  inquirer
    .prompt(questions.displayInsertIntoBloodBank)
    .then(insertIntoBloodBank);
}

function insertIntoDonor(val) {
  connection.query(
    'INSERT INTO donor (first_name, last_name, blood_group, medical_report, street, city, zipcode, phone) VALUES (?, ?, ?, ?, ?, ?, ?,?)',
    [
      val.first_name,
      val.last_name,
      val.blood_group,
      val.medical_report,
      val.street,
      val.city,
      val.zipcode,
      val.phone,
    ],
    (err) => {
      if (err) throw err;
      console.log('---------------------');
      console.log('ADDED TO DONOR!\n');
      console.log('---------------------');
      loadOptionsMenu();
    },
  );
}

function displayInsertIntoDonor() {
  inquirer.prompt(questions.displayInsertIntoDonor).then(insertIntoDonor);
}

function insertIntoHospital(val) {
  connection.query(
    'INSERT INTO hospital (hospital_name, street, city, zipcode, phone) VALUES (?, ?, ?, ?,?)',
    [val.hospital_name, val.street, val.city, val.zipcode, val.phone],
    (err) => {
      if (err) throw err;
      console.log('---------------------');
      console.log('ADDED TO HOSPITAL!\n');
      console.log('---------------------');
      loadOptionsMenu();
    },
  );
}

function displayInsertIntoHospital() {
  inquirer.prompt(questions.displayInsertIntoHospital).then(insertIntoHospital);
}

function insertIntoPatient(val) {
  connection.query(
    'INSERT INTO patient (first_name, last_name, blood_group, patient_disease) VALUES (?, ?, ?, ?)',
    [val.first_name, val.last_name, val.blood_group, val.patient_disease],
    (err) => {
      if (err) throw err;
      console.log('---------------------');
      console.log('ADDED TO PATIENT!\n');
      console.log('---------------------');
      loadOptionsMenu();
    },
  );
}

function displayInsertIntoPatient() {
  inquirer.prompt(questions.displayInsertIntoPatient).then(insertIntoPatient);
}

function loadInsert() {
  inquirer.prompt(questions.loadInsert).then((val) => {
    switch (val.choice) {
      case 'blood bank':
        displayInsertIntoBloodBank();
        break;
      case 'donor':
        displayInsertIntoDonor();
        break;
      case 'hospital':
        displayInsertIntoHospital();
        break;
      case 'patient':
        displayInsertIntoPatient();
        break;
      default:
        process.exit(0);
    }
  });
}

function updateTable(tableName, column, columnID, updatedValue, id) {
  connection.query(
    `UPDATE ${tableName} SET ${column} = ? WHERE ${columnID} = ?`,
    [updatedValue, id],
    (err) => {
      if (err) throw err;
      console.log('\nSuccessfully added');
      loadOptionsMenu();
    },
  );
}

function updateBloodBank(val) {
  switch (val.choice) {
    case 'blood_bank_name':
      updateTable(
        'blood_bank',
        'blood_bank_name',
        'blood_bank_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'street':
      updateTable(
        'blood_bank',
        'street',
        'blood_bank_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'city':
      updateTable(
        'blood_bank',
        'city',
        'blood_bank_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'zipcode':
      updateTable(
        'blood_bank',
        'zipcode',
        'blood_bank_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'phone':
      updateTable(
        'blood_bank',
        'phone',
        'blood_bank_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    default:
      process.exit(0);
  }
}

function displayUpdateBloodBank() {
  inquirer.prompt(questions.displayUpdateBloodBank).then(updateBloodBank);
}

function updateDonor(val) {
  switch (val.choice) {
    case 'first_name':
      updateTable(
        'donor',
        'first_name',
        'donor_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'last_name':
      updateTable(
        'donor',
        'last_name',
        'donor_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'blood_group':
      updateTable(
        'donor',
        'blood_group',
        'donor_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'medical_report':
      updateTable(
        'donor',
        'medical_report',
        'donor_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'street':
      updateTable('donor', 'street', 'donor_id', val.updatedValue, val.idValue);
      break;
    case 'city':
      updateTable('donor', 'city', 'donor_id', val.updatedValue, val.idValue);
      break;
    case 'zipcode':
      updateTable(
        'donor',
        'zipcode',
        'donor_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'phone':
      updateTable('donor', 'phone', 'donor_id', val.updatedValue, val.idValue);
      break;
    default:
      process.exit(0);
  }
}

function displayUpdateDonor() {
  inquirer.prompt(questions.displayUpdateDonor).then(updateDonor);
}

function updateHospital(val) {
  switch (val.choice) {
    case 'hospital_name':
      updateTable(
        'hospital',
        'hospital_name',
        'hospital_id',
        val.updatedValue,
        val.idValue,
      );
      break;

    case 'street':
      updateTable(
        'hospital',
        'street',
        'hospital_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'city':
      updateTable(
        'hospital',
        'city',
        'hospital_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'zipcode':
      updateTable(
        'hospital',
        'zipcode',
        'hospital_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'phone':
      updateTable(
        'hospital',
        'phone',
        'hospital_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    default:
      process.exit(0);
  }
}

function displayUpdateHospital() {
  inquirer.prompt(questions.displayUpdateHospital).then(updateHospital);
}

function updatePatient(val) {
  switch (val.choice) {
    case 'first_name':
      updateTable(
        'patient',
        'first_name',
        'patient_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'last_name':
      updateTable(
        'patient',
        'last_name',
        'patient_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'blood_group':
      updateTable(
        'patient',
        'blood_group',
        'patient_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    case 'patient_disease':
      updateTable(
        'patient',
        'patient_disease',
        'patient_id',
        val.updatedValue,
        val.idValue,
      );
      break;
    default:
      process.exit(0);
  }
}

function displayUpdatePatient() {
  inquirer.prompt(questions.displayUpdatePatient).then(updatePatient);
}

function loadUpdate() {
  inquirer.prompt(questions.loadUpdate).then((val) => {
    switch (val.choice) {
      case 'blood bank':
        displayUpdateBloodBank();
        break;
      case 'donor':
        displayUpdateDonor();
        break;
      case 'hospital':
        displayUpdateHospital();
        break;
      case 'patient':
        displayUpdatePatient();
        break;
      default:
        process.exit(0);
    }
  });
}

function deleteBloodBank(val) {
  switch (val.choice) {
    case 'blood_bank_name':
      connection.query(
        'DELETE FROM blood_bank WHERE blood_bank_name = ?',
        [val.value],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          console.log('---------------------');
          console.log('DELETED FROM BLOOD BANK!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'street':
      connection.query(
        'DELETE FROM blood_bank WHERE street = ?',
        [val.value],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          console.log('---------------------');
          console.log('DELETED FROM BLOOD BANK!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'city':
      connection.query(
        'DELETE FROM blood_bank WHERE city = ?',
        [val.value],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          console.log('---------------------');
          console.log('DELETED FROM BLOOD BANK!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'zipcode':
      connection.query(
        'DELETE FROM blood_bank WHERE zipcode = ?',
        [val.value],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          console.log('---------------------');
          console.log('DELETED FROM BLOOD BANK!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'phone':
      connection.query(
        'DELETE FROM blood_bank WHERE phone = ?',
        [val.value],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          console.log('---------------------');
          console.log('DELETED FROM BLOOD BANK!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    default:
      process.exit(0);
  }
}

function displayDeleteBloodBank() {
  inquirer.prompt(questions.displayDeleteBloodBank).then(deleteBloodBank);
}

function deleteDonor(val) {
  switch (val.choice) {
    case 'first_name':
      connection.query(
        'DELETE FROM donor WHERE first_name = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM DONOR!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'last_name':
      connection.query(
        'DELETE FROM donor WHERE last_name = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM DONOR!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'blood_group':
      connection.query(
        'DELETE FROM donor WHERE blood_group = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM DONOR!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'medical_report':
      connection.query(
        'DELETE FROM donor WHERE medical_report = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM DONOR!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'street':
      connection.query(
        'DELETE FROM donor WHERE street = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM DONOR!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'city':
      connection.query(
        'DELETE FROM donor WHERE city = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM DONOR!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'zipcode':
      connection.query(
        'DELETE FROM donor WHERE zipcode = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM DONOR!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'phone':
      connection.query(
        'DELETE FROM donor WHERE phone = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM DONOR!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    default:
      process.exit(0);
  }
}

function displayDeleteDonor() {
  inquirer.prompt(questions.displayDeleteDonor).then(deleteDonor);
}

function deleteHospital(val) {
  switch (val.choice) {
    case 'hospital_name':
      connection.query(
        'DELETE FROM hospital WHERE hospital_name = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM HOSPITAL!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'street':
      connection.query(
        'DELETE FROM hospital WHERE street = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM HOSPITAL!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'city':
      connection.query(
        'DELETE FROM hospital WHERE city = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM HOSPITAL!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'zipcode':
      connection.query(
        'DELETE FROM hospital WHERE zipcode = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM HOSPITAL!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'phone':
      connection.query(
        'DELETE FROM hospital WHERE phone = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM HOSPITAL!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    default:
      process.exit(0);
  }
}

function displayDeleteHospital() {
  inquirer.prompt(questions.displayDeleteHospital).then(deleteHospital);
}

function deletePatient(val) {
  switch (val.choice) {
    case 'first_name':
      connection.query(
        'DELETE FROM patient WHERE first_name = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM PATIENT!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'last_name':
      connection.query(
        'DELETE FROM patient WHERE last_name = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM PATIENT!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'blood_group':
      connection.query(
        'DELETE FROM patient WHERE blood_group = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM PATIENT!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    case 'patient_disease':
      connection.query(
        'DELETE FROM patient WHERE patient_disease = ?',
        [val.value],
        (err) => {
          if (err) throw err;
          console.log('---------------------');
          console.log('DELETED FROM PATIENT!\n');
          console.log('---------------------');
          loadOptionsMenu();
        },
      );
      break;
    default:
      process.exit(0);
  }
}

function displayDeletePatient() {
  inquirer.prompt(questions.displayDeletePatient).then(deletePatient);
}

function loadDelete() {
  inquirer.prompt(questions.loadDelete).then((val) => {
    switch (val.choice) {
      case 'blood bank':
        displayDeleteBloodBank();
        break;
      case 'donor':
        displayDeleteDonor();
        break;
      case 'hospital':
        displayDeleteHospital();
        break;
      case 'patient':
        displayDeletePatient();
        break;
      default:
        process.exit(0);
    }
  });
}

function loadBloodBankDonations() {
  connection.query(
    'SELECT * FROM blood_bank_donations INNER JOIN donor ON blood_bank_donations.donor_id = donor.donor_id INNER JOIN blood_bank ON blood_bank_donations.blood_bank_id = blood_bank.blood_bank_id',
    (err, res) => {
      if (err) throw err;
      console.log('---------------------');
      console.log('SELECTED INNER JOIN FROM BLOOD BANK DONATIONS!\n');
      console.log('---------------------');
      console.table(res);
      loadOptionsMenu();
    },
  );
}

function loadBloodBankCompability() {
  connection.query(
    'SELECT * FROM blood_type_compability INNER JOIN patient ON blood_type_compability.patient_id = patient.patient_id INNER JOIN donor ON blood_type_compability.donor_id = donor.donor_id',
    (err, res) => {
      if (err) throw err;
      console.log('---------------------');
      console.log('SELECTED INNER JOIN FROM BLOOD BANK TYPE COMPABILITY!\n');
      console.log('---------------------');
      console.table(res);
      loadOptionsMenu();
    },
  );
}

function loadHospitalDonations() {
  connection.query(
    'SELECT * FROM hospital_donations INNER JOIN hospital ON hospital_donations.hospital_id = hospital.hospital_id INNER JOIN blood_bank ON hospital_donations.blood_bank_id = blood_bank.blood_bank_id',
    (err, res) => {
      if (err) throw err;
      console.log('---------------------');
      console.log('SELECTED INNER JOIN FROM HOSPITAL DONATIONS!\n');
      console.log('---------------------');
      console.table(res);
      loadOptionsMenu();
    },
  );
}

function loadPatientBloodUsage() {
  connection.query(
    'SELECT * FROM patient_blood_usage INNER JOIN patient ON patient_blood_usage.patient_id = patient.patient_id INNER JOIN hospital ON patient_blood_usage.hospital_id = hospital.hospital_id',
    (err, res) => {
      if (err) throw err;
      console.log('---------------------');
      console.log('SELECTED INNER JOIN FROM PATIENT BLOOD USAGE!\n');
      console.log('---------------------');
      console.table(res);
      loadOptionsMenu();
    },
  );
}

function loadInnerJoins() {
  inquirer.prompt(questions.loadInnerJoins).then((val) => {
    switch (val.choice) {
      case 'blood bank donations':
        loadBloodBankDonations();
        break;
      case 'blood type compability':
        loadBloodBankCompability();
        break;
      case 'hospital donations':
        loadHospitalDonations();
        break;
      case 'patient blood usage':
        loadPatientBloodUsage();
        break;
      default:
        process.exit(0);
    }
  });
}

function loadOptionsMenu() {
  inquirer.prompt(questions.loadOptions).then((val) => {
    switch (val.choice) {
      case 'SELECT':
        loadSelect();
        break;
      case 'INSERT':
        loadInsert();
        break;
      case 'UPDATE':
        loadUpdate();
        break;
      case 'DELETE':
        loadDelete();
        break;
      case 'SELECT INNER JOINS':
        loadInnerJoins();
        break;
      default:
        process.exit(0);
    }
  });
}

loadOptionsMenu();
