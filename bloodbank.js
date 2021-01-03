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

function deleteTable(tableName, column, value) {
  connection.query(
    `DELETE FROM ${tableName} WHERE ${column} = ?`,
    [value],
    (err, res) => {
      if (err) throw err;
      console.table(res);
      console.log('---------------------');
      console.log(`DELETED ${column} FROM ${tableName}!\n`);
      console.log('---------------------');
      loadOptionsMenu();
    },
  );
}

function deleteBloodBank(val) {
  switch (val.choice) {
    case 'blood_bank_name':
      deleteTable('blood_bank', 'blood_bank_name', val.value);
      break;
    case 'street':
      deleteTable('blood_bank', 'street', val.value);
      break;
    case 'city':
      deleteTable('blood_bank', 'city', val.value);
      break;
    case 'zipcode':
      deleteTable('blood_bank', 'zipcode', val.value);
      break;
    case 'phone':
      deleteTable('blood_bank', 'phone', val.value);
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
      deleteTable('donor', 'first_name', val.value);
      break;
    case 'last_name':
      deleteTable('donor', 'last_name', val.value);
      break;
    case 'blood_group':
      deleteTable('donor', 'blood_group', val.value);
      break;
    case 'medical_report':
      deleteTable('donor', 'medical_report', val.value);
      break;
    case 'street':
      deleteTable('donor', 'street', val.value);
      break;
    case 'city':
      deleteTable('donor', 'city', val.value);
      break;
    case 'zipcode':
      deleteTable('donor', 'zipcode', val.value);
      break;
    case 'phone':
      deleteTable('donor', 'phone', val.value);
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
      deleteTable('hospital', 'hospital_name', val.value);
      break;
    case 'street':
      deleteTable('hospital', 'street', val.value);
      break;
    case 'city':
      deleteTable('hospital', 'city', val.value);
      break;
    case 'zipcode':
      deleteTable('hospital', 'zipcode', val.value);
      break;
    case 'phone':
      deleteTable('hospital', 'phone', val.value);
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
      deleteTable('patient', 'first_name', val.value);
      break;
    case 'last_name':
      deleteTable('patient', 'last_name', val.value);
      break;
    case 'blood_group':
      deleteTable('patient', 'blood_group', val.value);
      break;
    case 'patient_disease':
      deleteTable('patient', 'patient_disease', val.value);
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

function innerJoins(firstTable, secondTable, thirdTable, firstColumn, secondColumn) {
  connection.query(
    `SELECT * FROM ${firstTable} INNER JOIN ${secondTable} ON ${firstTable}.${firstColumn} = ${secondTable}.${firstColumn} INNER JOIN ${thirdTable} ON ${firstTable}.${secondColumn} = ${thirdTable}.${secondColumn}`,
    (err, res) => {
      if (err) throw err;
      console.log('---------------------');
      console.log(`SELECTED INNER JOIN FROM ${firstTable}, ${secondTable}, ${thirdTable}!\n`);
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
        innerJoins('blood_bank_donations', 'donor', 'blood_bank', 'donor_id', 'blood_bank_id');
        break;
      case 'blood type compability':
        innerJoins('blood_type_compability', 'patient', 'donor', 'patient_id', 'donor_id');
        break;
      case 'hospital donations':
        innerJoins('hospital_donations', 'hospital', 'blood_bank', 'hospital_id', 'blood_bank_id');
        break;
      case 'patient blood usage':
        innerJoins('patient_blood_usage', 'patient', 'hospital', 'patient_id', 'hospital_id');
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
