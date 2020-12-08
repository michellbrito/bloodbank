// Initializes the npm packages used
const inquirer = require("inquirer");
const questions = require("./questions/question");
const connection = require("./connection/connection");
require("dotenv").config();
require("console.table");

loadOptionsMenu();

function loadOptionsMenu() {
  inquirer.prompt(questions.loadOptions).then(function (val) {
    switch (val.choice) {
      case "SELECT":
        loadSelect();
        break;
      case "INSERT":
        loadInsert();
        break;
      case "UPDATE":
        loadUpdate();
        break;
      case "DELETE":
        loadDelete();
        break;
      case "SELECT INNER JOINS":
        loadInnerJoins();
        break;
      default:
        process.exit(0);
    }
  });
}

function loadSelect() {
  inquirer.prompt(questions.loadSelect).then(function (val) {
    switch (val.choice) {
      case "blood bank":
        loadBloodBankOptions();
        break;
      case "donor":
        loadDonorOptions();
        break;
      case "hospital":
        loadHospitalOptions();
        break;
      case "patient":
        loadPatientOptions();
        break;
      default:
        process.exit(0);
    }
  });
}

function loadBloodBankOptions() {
  connection.query("SELECT * FROM blood_bank", function (err, res) {
    if (err) throw err;
    console.table(res);
    loadOptionsMenu();
  });
}

function loadDonorOptions() {
  connection.query("SELECT * FROM donor", function (err, res) {
    if (err) throw err;
    console.table(res);
    loadOptionsMenu();
  });
}

function loadHospitalOptions() {
  connection.query("SELECT * FROM hospital", function (err, res) {
    if (err) throw err;
    console.table(res);
    loadOptionsMenu();
  });
}

function loadPatientOptions() {
  connection.query("SELECT * FROM patient", function (err, res) {
    if (err) throw err;
    console.table(res);
    loadOptionsMenu();
  });
}

function loadInsert() {
  inquirer.prompt(questions.loadInsert).then(function (val) {
    switch (val.choice) {
      case "blood bank":
        displayInsertIntoBloodBank();
        break;
      case "donor":
        displayInsertIntoDonor();
        break;
      case "hospital":
        displayInsertIntoHospital();
        break;
      case "patient":
        displayInsertIntoPatient();
        break;
      default:
        process.exit(0);
    }
  });
}

function displayInsertIntoBloodBank() {
  inquirer
    .prompt(questions.displayInsertIntoBloodBank)
    .then(insertIntoBloodBank);
}

function insertIntoBloodBank(val) {
  connection.query(
    "INSERT INTO blood_bank (blood_bank_name, street, city, zipcode, phone) VALUES (?, ?, ?, ?,?)",
    [val.blood_bank_name, val.street, val.city, val.zipcode, val.phone],
    function (err, res) {
      if (err) throw err;
      console.log("---------------------");
      console.log("ADDED TO BLOOD BANK!\n");
      console.log("---------------------");
      loadOptionsMenu();
    }
  );
}

function displayInsertIntoDonor() {
  inquirer.prompt(questions.displayInsertIntoDonor).then(insertIntoDonor);
}

function insertIntoDonor(val) {
  connection.query(
    "INSERT INTO donor (first_name, last_name, blood_group, medical_report, street, city, zipcode, phone) VALUES (?, ?, ?, ?, ?, ?, ?,?)",
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
    function (err, res) {
      if (err) throw err;
      console.log("---------------------");
      console.log("ADDED TO DONOR!\n");
      console.log("---------------------");
      loadOptionsMenu();
    }
  );
}

function displayInsertIntoHospital() {
  inquirer.prompt(questions.displayInsertIntoHospital).then(insertIntoHospital);
}

function insertIntoHospital(val) {
  connection.query(
    "INSERT INTO hospital (hospital_name, street, city, zipcode, phone) VALUES (?, ?, ?, ?,?)",
    [val.hospital_name, val.street, val.city, val.zipcode, val.phone],
    function (err, res) {
      if (err) throw err;
      console.log("---------------------");
      console.log("ADDED TO HOSPITAL!\n");
      console.log("---------------------");
      loadOptionsMenu();
    }
  );
}

function displayInsertIntoPatient() {
  inquirer.prompt(questions.displayInsertIntoPatient).then(insertIntoPatient);
}

function insertIntoPatient(val) {
  connection.query(
    "INSERT INTO patient (first_name, last_name, blood_group, patient_disease) VALUES (?, ?, ?, ?)",
    [val.first_name, val.last_name, val.blood_group, val.patient_disease],
    function (err, res) {
      if (err) throw err;
      console.log("---------------------");
      console.log("ADDED TO PATIENT!\n");
      console.log("---------------------");
      loadOptionsMenu();
    }
  );
}

function loadUpdate() {
  inquirer.prompt(questions.loadUpdate).then(function (val) {
    switch (val.choice) {
      case "blood bank":
        displayUpdateBloodBank();
        break;
      case "donor":
        displayUpdateDonor();
        break;
      case "hospital":
        displayUpdateHospital();
        break;
      case "patient":
        displayUpdatePatient();
        break;
      default:
        process.exit(0);
    }
  });
}

function displayUpdateBloodBank() {
  inquirer.prompt(questions.displayUpdateBloodBank).then(updateBloodBank);
}

function updateBloodBank(val) {
  switch (val.choice) {
    case "blood_bank_name":
      connection.query(
        "UPDATE blood_bank SET blood_bank_name = ? WHERE blood_bank_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "street":
      connection.query(
        "UPDATE blood_bank SET street = ? WHERE blood_bank_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "city":
      connection.query(
        "UPDATE blood_bank SET city = ? WHERE blood_bank_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "zipcode":
      connection.query(
        "UPDATE blood_bank SET zipcode = ? WHERE blood_bank_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "phone":
      connection.query(
        "UPDATE blood_bank SET phone = ? WHERE blood_bank_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    default:
      process.exit(0);
  }
}

function displayUpdateDonor() {
  inquirer.prompt(questions.displayUpdateDonor).then(updateDonor);
}

function updateDonor(val) {
  switch (val.choice) {
    case "first_name":
      connection.query(
        "UPDATE donor SET first_name = ? WHERE donor_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "last_name":
      connection.query(
        "UPDATE donor SET last_name = ? WHERE donor_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "blood_group":
      connection.query(
        "UPDATE donor SET blood_group = ? WHERE donor_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "medical_report":
      connection.query(
        "UPDATE donor SET medical_report = ? WHERE donor_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "street":
      connection.query(
        "UPDATE donor SET street = ? WHERE donor_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "city":
      connection.query(
        "UPDATE donor SET city = ? WHERE donor_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "zipcode":
      connection.query(
        "UPDATE donor SET zipcode = ? WHERE donor_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "phone":
      connection.query(
        "UPDATE donor SET phone = ? WHERE donor_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    default:
      process.exit(0);
  }
}

function displayUpdateHospital() {
  inquirer.prompt(questions.displayUpdateHospital).then(updateHospital);
}

function updateHospital(val) {
  switch (val.choice) {
    case "hospital_name":
      connection.query(
        "UPDATE hospital SET hospital_name = ? WHERE hospital_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;

    case "street":
      connection.query(
        "UPDATE hospital SET street = ? WHERE hospital_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "city":
      connection.query(
        "UPDATE hospital SET city = ? WHERE hospital_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "zipcode":
      connection.query(
        "UPDATE hospital SET zipcode = ? WHERE hospital_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "phone":
      connection.query(
        "UPDATE hospital SET phone = ? WHERE hospital_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    default:
      process.exit(0);
  }
}

function displayUpdatePatient() {
  inquirer.prompt(questions.displayUpdatePatient).then(updatePatient);
}

function updatePatient(val) {
  switch (val.choice) {
    case "first_name":
      connection.query(
        "UPDATE patient SET first_name = ? WHERE patient_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "last_name":
      connection.query(
        "UPDATE patient SET last_name = ? WHERE patient_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "blood_group":
      connection.query(
        "UPDATE patient SET blood_group = ? WHERE patient_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    case "patient_disease":
      connection.query(
        "UPDATE patient SET patient_disease = ? WHERE patient_id = ?",
        [val.updatedValue, val.idValue],
        function (err, res) {
          if (err) throw err;
          console.log("\nSuccessfully added");
          loadOptionsMenu();
        }
      );
      break;
    default:
      process.exit(0);
  }
}

function loadDelete() {
  inquirer.prompt(questions.loadDelete).then(function (val) {
    switch (val.choice) {
      case "blood bank":
        displayDeleteBloodBank();
        break;
      case "donor":
        displayDeleteDonor();
        break;
      case "hospital":
        displayDeleteHospital();
        break;
      case "patient":
        displayDeletePatient();
        break;
      default:
        process.exit(0);
    }
  });
}

function displayDeleteBloodBank() {
  inquirer.prompt(questions.displayDeleteBloodBank).then(deleteBloodBank);
}

function deleteBloodBank(val) {
  switch (val.choice) {
    case "blood_bank_name":
      connection.query(
        "DELETE FROM blood_bank WHERE blood_bank_name = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          console.log("---------------------");
          console.log("DELETED FROM BLOOD BANK!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "street":
      connection.query(
        "DELETE FROM blood_bank WHERE street = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          console.log("---------------------");
          console.log("DELETED FROM BLOOD BANK!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
    case "city":
      connection.query(
        "DELETE FROM blood_bank WHERE city = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          console.log("---------------------");
          console.log("DELETED FROM BLOOD BANK!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "zipcode":
      connection.query(
        "DELETE FROM blood_bank WHERE zipcode = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          console.log("---------------------");
          console.log("DELETED FROM BLOOD BANK!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "phone":
      connection.query(
        "DELETE FROM blood_bank WHERE phone = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          console.log("---------------------");
          console.log("DELETED FROM BLOOD BANK!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
    default:
      process.exit(0);
  }
}

function displayDeleteDonor() {
  inquirer.prompt(questions.displayDeleteDonor).then(deleteDonor);
}

function deleteDonor(val) {
  switch (val.choice) {
    case "first_name":
      connection.query(
        "DELETE FROM donor WHERE first_name = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM DONOR!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "last_name":
      connection.query(
        "DELETE FROM donor WHERE last_name = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM DONOR!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "blood_group":
      connection.query(
        "DELETE FROM donor WHERE blood_group = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM DONOR!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "medical_report":
      connection.query(
        "DELETE FROM donor WHERE medical_report = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM DONOR!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "street":
      connection.query(
        "DELETE FROM donor WHERE street = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM DONOR!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "city":
      connection.query(
        "DELETE FROM donor WHERE city = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM DONOR!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "zipcode":
      connection.query(
        "DELETE FROM donor WHERE zipcode = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM DONOR!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "phone":
      connection.query(
        "DELETE FROM donor WHERE phone = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM DONOR!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    default:
      process.exit(0);
  }
}

function displayDeleteHospital() {
  inquirer.prompt(questions.displayDeleteHospital).then(deleteHospital);
}

function deleteHospital(val) {
  switch (val.choice) {
    case "hospital_name":
      connection.query(
        "DELETE FROM hospital WHERE hospital_name = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM HOSPITAL!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "street":
      connection.query(
        "DELETE FROM hospital WHERE street = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM HOSPITAL!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "city":
      connection.query(
        "DELETE FROM hospital WHERE city = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM HOSPITAL!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "zipcode":
      connection.query(
        "DELETE FROM hospital WHERE zipcode = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM HOSPITAL!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "phone":
      connection.query(
        "DELETE FROM hospital WHERE phone = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM HOSPITAL!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    default:
      process.exit(0);
  }
}

function displayDeletePatient() {
  inquirer.prompt(questions.displayDeletePatient).then(deletePatient);
}

function deletePatient(val) {
  switch (val.choice) {
    case "first_name":
      connection.query(
        "DELETE FROM patient WHERE first_name = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM PATIENT!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "last_name":
      connection.query(
        "DELETE FROM patient WHERE last_name = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM PATIENT!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "blood_group":
      connection.query(
        "DELETE FROM patient WHERE blood_group = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM PATIENT!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    case "patient_disease":
      connection.query(
        "DELETE FROM patient WHERE patient_disease = ?",
        [val.value],
        function (err, res) {
          if (err) throw err;
          console.log("---------------------");
          console.log("DELETED FROM PATIENT!\n");
          console.log("---------------------");
          loadOptionsMenu();
        }
      );
      break;
    default:
      process.exit(0);
  }
}

function loadInnerJoins() {
  inquirer.prompt(questions.loadInnerJoins).then(function (val) {
    switch (val.choice) {
      case "blood bank donations":
        loadBloodBankDonations();
        break;
      case "blood type compability":
        loadBloodBankCompability();
        break;
      case "hospital donations":
        loadHospitalDonations();
        break;
      case "patient blood usage":
        loadPatientBloodUsage();
        break;
      default:
        process.exit(0);
    }
  });
}

function loadBloodBankDonations() {
  connection.query(
    "SELECT * FROM blood_bank_donations INNER JOIN donor ON blood_bank_donations.donor_id = donor.donor_id INNER JOIN blood_bank ON blood_bank_donations.blood_bank_id = blood_bank.blood_bank_id",
    function (err, res) {
      if (err) throw err;
      console.log("---------------------");
      console.log("SELECTED INNER JOIN FROM BLOOD BANK DONATIONS!\n");
      console.log("---------------------");
      console.table(res);
      loadOptionsMenu();
    }
  );
}

function loadBloodBankCompability() {
  connection.query(
    "SELECT * FROM blood_type_compability INNER JOIN patient ON blood_type_compability.patient_id = patient.patient_id INNER JOIN donor ON blood_type_compability.donor_id = donor.donor_id",
    function (err, res) {
      if (err) throw err;
      console.log("---------------------");
      console.log("SELECTED INNER JOIN FROM BLOOD BANK TYPE COMPABILITY!\n");
      console.log("---------------------");
      console.table(res);
      loadOptionsMenu();
    }
  );
}

function loadHospitalDonations() {
  connection.query(
    "SELECT * FROM hospital_donations INNER JOIN hospital ON hospital_donations.hospital_id = hospital.hospital_id INNER JOIN blood_bank ON hospital_donations.blood_bank_id = blood_bank.blood_bank_id",
    function (err, res) {
      if (err) throw err;
      console.log("---------------------");
      console.log("SELECTED INNER JOIN FROM HOSPITAL DONATIONS!\n");
      console.log("---------------------");
      console.table(res);
      loadOptionsMenu();
    }
  );
}

function loadPatientBloodUsage() {
  connection.query(
    "SELECT * FROM patient_blood_usage INNER JOIN patient ON patient_blood_usage.patient_id = patient.patient_id INNER JOIN hospital ON patient_blood_usage.hospital_id = hospital.hospital_id",
    function (err, res) {
      if (err) throw err;
      console.log("---------------------");
      console.log("SELECTED INNER JOIN FROM PATIENT BLOOD USAGE!\n");
      console.log("---------------------");
      console.table(res);
      loadOptionsMenu();
    }
  );
}
