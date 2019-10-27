// Initializes the npm packages used
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",

  // Your database name
  database: "blood_bank_db"
});

// Creates the connection with the server and loads the options menu upon a successful connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  loadOptionsMenu();
});


function loadOptionsMenu() {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      choices: ["SELECT", "INSERT", "UPDATE", "DELETE", "SELECT INNER JOINS", "QUIT"],
      message: "What would you like to do?"
    })
    .then(function (val) {
      if (val.choice == "SELECT") {
        loadSelect();
      } else if (val.choice == "INSERT") {
        loadInsert();
      } else if (val.choice == "UPDATE") {
        loadUpdate();
      } else if (val.choice == "DELETE") {
        loadDelete();
      } else if (val.choice == "SELECT INNER JOINS") {
        loadInnerJoins();
      } else if (val.choice == "QUIT") {
        process.exit(0);

      }
    });
}

function loadSelect() {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      choices: ["blood bank", "donor", "hospital", "patient", "Quit"],
      message: "Which table would you like to SELECT?"
    })
    .then(function (val) {
      if (val.choice == "blood bank") {
        loadBloodBankOptions();
      } else if (val.choice == "donor") {
        loadDonorOptions();
      } else if (val.choice == "hospital") {
        loadHospitalOptions();
      } else if (val.choice == "patient") {
        loadPatientOptions();
      } else if (val.choice == "Quit") {
        process.exit(0);
      }
    });
}

function loadBloodBankOptions() {
  connection.query("SELECT * FROM blood_bank", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
}

function loadDonorOptions() {
  connection.query("SELECT * FROM donor", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
}

function loadHospitalOptions() {
  connection.query("SELECT * FROM hospital", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
}

function loadPatientOptions() {
  connection.query("SELECT * FROM patient", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
}

function loadInsert() {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      choices: ["blood bank", "donor", "hospital", "patient", "Quit"],
      message: "Which table would you like to INSERT to?"
    })
    .then(function (val) {
      if (val.choice == "blood bank") {
        displayInsertIntoBloodBank();
      } else if (val.choice == "donor") {
        displayInsertIntoDonor();
      } else if (val.choice == "hospital") {
        displayInsertIntoHospital();
      } else if (val.choice == "patient") {
        displayInsertIntoPatient();
      } else if (val.choice == "Quit") {
        process.exit(0);
      }
    });
}

function displayInsertIntoBloodBank() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "blood_bank_name",
        message: "What is the name of the blood bank you would like to add?"
      },
      {
        type: "input",
        name: "street",
        message: "What is the name of the street you would like to add?"
      },
      {
        type: "input",
        name: "city",
        message: "What is the name of the city you would like to add?"
      },
      {
        type: "input",
        name: "zipcode",
        message: "What is the zipcode you would like to add?"
      },
      {
        type: "input",
        name: "phone",
        message: "What is the phone number you would like to add?"
      }
    ])
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
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the first name you would to to add?"
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the last name you would to to add?"
      },
      {
        type: "input",
        name: "blood_group",
        message: "What is the blood group type you would like to add?"
      },
      {
        type: "input",
        name: "medical_report",
        message: "What is the medical report you would like to add?"
      },
      {
        type: "input",
        name: "street",
        message: "What is the name of the street you would like to add?"
      },
      {
        type: "input",
        name: "city",
        message: "What is the name of the city you would like to add?"
      },
      {
        type: "input",
        name: "zipcode",
        message: "What is the zipcode you would like to add?"
      },
      {
        type: "input",
        name: "phone",
        message: "What is the phone number you would like to add?"
      }
    ])
    .then(insertIntoDonor);
}

function insertIntoDonor(val) {
  connection.query(
    "INSERT INTO donor (first_name, last_name, blood_group, medical_report, street, city, zipcode, phone) VALUES (?, ?, ?, ?, ?, ?, ?,?)",
    [val.first_name, val.last_name, val.blood_group, val.medical_report, val.street, val.city, val.zipcode, val.phone],
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
  inquirer
    .prompt([
      {
        type: "input",
        name: "hospital_name",
        message: "What is the name of the hospital you would to to add?"
      },
      {
        type: "input",
        name: "street",
        message: "What is the name of the street you would like to add?"
      },
      {
        type: "input",
        name: "city",
        message: "What is the name of the city you would like to add?"
      },
      {
        type: "input",
        name: "zipcode",
        message: "What is the zipcode you would like to add?"
      },
      {
        type: "input",
        name: "phone",
        message: "What is the phone number you would like to add?"
      }
    ])
    .then(insertIntoHospital);
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
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the first name of the patient you would to to add?"
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the last name of the patient you would to to add?"
      },
      {
        type: "input",
        name: "blood_group",
        message: "What is the blood group type of the patient you would like to add?"
      },
      {
        type: "input",
        name: "patient_disease",
        message: "What is the disease of the patient you would like to add?"
      }
    ])
    .then(insertIntoPatient);
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
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      choices: ["blood bank", "donor", "hospital", "patient", "Quit"],
      message: "Which table would you like to UPDATE to?"
    })
    .then(function (val) {
      if (val.choice == "blood bank") {
        displayUpdateBloodBank();
      } else if (val.choice == "donor") {
        displayUpdateDonor();
      } else if (val.choice == "hospital") {
        displayUpdateHospital();
      } else if (val.choice == "patient") {
        displayUpdatePatient();
      } else if (val.choice == "Quit") {
        process.exit(0);
      }
    });
}

function displayUpdateBloodBank() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to update?",
        choices: ["blood_bank_name", "street", "city", "zipcode", "phone"]
      },
      {
        type: "input",
        name: "updatedValue",
        message: "Enter value that you would like to be updated to"
      },
      {
        type: "input",
        name: "idValue",
        message: "Enter id that you would like to be updated"
      }
    ])
    .then(updateBloodBank);
}

function updateBloodBank(val) {

  if (val.choice == "blood_bank_name") {
    connection.query(
      "UPDATE blood_bank SET blood_bank_name = ? WHERE blood_bank_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "street") {
    connection.query(
      "UPDATE blood_bank SET street = ? WHERE blood_bank_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "city") {
    connection.query(
      "UPDATE blood_bank SET city = ? WHERE blood_bank_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "zipcode") {
    connection.query(
      "UPDATE blood_bank SET zipcode = ? WHERE blood_bank_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "phone") {
    connection.query(
      "UPDATE blood_bank SET phone = ? WHERE blood_bank_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  }

}

function displayUpdateDonor() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to update?",
        choices: ["first_name", "last_name", "blood_group", "medical_report", "street", "city", "zipcode", "phone"]
      },
      {
        type: "input",
        name: "updatedValue",
        message: "Enter value that you would like to be updated to"
      },
      {
        type: "input",
        name: "idValue",
        message: "Enter id that you would like to be updated"
      }
    ])
    .then(updateDonor);
}

function updateDonor(val) {

  if (val.choice == "first_name") {
    connection.query(
      "UPDATE donor SET first_name = ? WHERE donor_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "last_name") {
    connection.query(
      "UPDATE donor SET last_name = ? WHERE donor_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "blood_group") {
    connection.query(
      "UPDATE donor SET blood_group = ? WHERE donor_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "medical_report") {
    connection.query(
      "UPDATE donor SET medical_report = ? WHERE donor_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "street") {
    connection.query(
      "UPDATE donor SET street = ? WHERE donor_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "city") {
    connection.query(
      "UPDATE donor SET city = ? WHERE donor_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "zipcode") {
    connection.query(
      "UPDATE donor SET zipcode = ? WHERE donor_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "phone") {
    connection.query(
      "UPDATE donor SET phone = ? WHERE donor_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  };
}

function displayUpdateHospital() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to update?",
        choices: ["hospital_name", "street", "city", "zipcode", "phone"]
      },
      {
        type: "input",
        name: "updatedValue",
        message: "Enter value that you would like to be updated to"
      },
      {
        type: "input",
        name: "idValue",
        message: "Enter id that you would like to be updated"
      }
    ])
    .then(updateHospital);
}

function updateHospital(val) {

  if (val.choice == "hospital_name") {
    connection.query(
      "UPDATE hospital SET hospital_name = ? WHERE hospital_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "street") {
    connection.query(
      "UPDATE hospital SET street = ? WHERE hospital_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "city") {
    connection.query(
      "UPDATE hospital SET city = ? WHERE hospital_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "zipcode") {
    connection.query(
      "UPDATE hospital SET zipcode = ? WHERE hospital_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "phone") {
    connection.query(
      "UPDATE hospital SET phone = ? WHERE hospital_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  };
}

function displayUpdatePatient() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to update?",
        choices: ["first_name", "last_name", "blood_group", "patient_disease"]
      },
      {
        type: "input",
        name: "updatedValue",
        message: "Enter value that you would like to be updated to"
      },
      {
        type: "input",
        name: "idValue",
        message: "Enter id that you would like to be updated"
      }
    ])
    .then(updatePatient);
}

function updatePatient(val) {

  if (val.choice == "first_name") {
    connection.query(
      "UPDATE patient SET first_name = ? WHERE patient_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "last_name") {
    connection.query(
      "UPDATE patient SET last_name = ? WHERE patient_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "blood_group") {
    connection.query(
      "UPDATE patient SET blood_group = ? WHERE patient_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  } else if (val.choice == "patient_disease") {
    connection.query(
      "UPDATE patient SET patient_disease = ? WHERE patient_id = ?",
      [val.updatedValue, val.idValue],
      function (err, res) {
        if (err) throw err;
        console.log("\nSuccessfully added");
        loadOptionsMenu();
      }
    );
  }
}

function loadDelete() {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      choices: ["blood bank", "donor", "hospital", "patient", "Quit"],
      message: "Which table would you like to DELETE from?"
    })
    .then(function (val) {
      if (val.choice == "blood bank") {
        displayDeleteBloodBank();
      } else if (val.choice == "donor") {
        displayDeleteDonor();
      } else if (val.choice == "hospital") {
        displayDeleteHospital();
      } else if (val.choice == "patient") {
        displayDeletePatient();
      } else if (val.choice == "Quit") {
        process.exit(0);
      }
    });
}

function displayDeleteBloodBank() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to delete from?",
        choices: ["blood_bank_name", "street", "city", "zipcode", "phone"]
      },
      {
        type: "input",
        name: "value",
        message: "Enter value that you would like to be deleted"
      }
    ])
    .then(deleteBloodBank);
}

function deleteBloodBank(val) {
  if (val.choice == "blood_bank_name") {
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
  } else if (val.choice == "street") {
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
  } else if (val.choice == "city") {
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
  } else if (val.choice == "zipcode") {
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
  } else if (val.choice == "phone") {
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
  }

}

function displayDeleteDonor() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to delete from?",
        choices: ["first_name", "last_name", "blood_group", "medical_report", "street", "city", "zipcode", "phone"]
      },
      {
        type: "input",
        name: "idValue",
        message: "Enter value that you would like to be deleted"
      }
    ])
    .then(deleteDonor);
}

function deleteDonor(val) {
  if (val.choice == "first_name") {
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
  } else if (val.choice == "last_name") {
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
  } else if (val.choice == "blood_group") {
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
  } else if (val.choice == "medical_report") {
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
  } else if (val.choice == "street") {
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
  } else if (val.choice == "city") {
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
  } else if (val.choice == "zipcode") {
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
  } else if (val.choice == "phone") {
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
  };
};

function displayDeleteHospital() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to delete from?",
        choices: ["hospital_name", "street", "city", "zipcode", "phone"]
      },
      {
        type: "input",
        name: "idValue",
        message: "Enter value that you would like to be deleted"
      }
    ])
    .then(deleteHospital);
}

function deleteHospital(val) {
  if (val.choice == "hospital_name") {
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
  } else if (val.choice == "street") {
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
  } else if (val.choice == "city") {
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
  } else if (val.choice == "zipcode") {
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
  } else if (val.choice == "phone") {
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
  };
};

function displayDeletePatient() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to update?",
        choices: ["first_name", "last_name", "blood_group", "patient_disease"]
      },
      {
        type: "input",
        name: "idValue",
        message: "Enter id that you would like to be updated"
      }
    ])
    .then(deletePatient);
}

function deletePatient(val) {
  if (val.choice == "first_name") {
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
  } else if (val.choice == "last_name") {
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
  } else if (val.choice == "blood_group") {
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
  } else if (val.choice == "patient_disease") {
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
  };
};

function loadInnerJoins() {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      choices: ["blood bank donations", "blood type compability", "hospital donations", "patient blood usage", "Quit"],
      message: "Which table would you like to SELECT INNER JOIN?"
    })
    .then(function (val) {
      if (val.choice == "blood bank donations") {
        loadBloodBankDonations();
      } else if (val.choice == "blood type compability") {
        loadBloodBankCompability();
      } else if (val.choice == "hospital donations") {
        loadHospitalDonations();
      } else if (val.choice == "patient blood usage") {
        loadPatientBloodUsage();
      } else if (val.choice == "Quit") {
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