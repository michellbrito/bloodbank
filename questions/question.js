module.exports = {
  loadOptions: [
    {
      type: 'list',
      name: 'choice',
      choices: [
        'SELECT',
        'INSERT',
        'UPDATE',
        'DELETE',
        'SELECT INNER JOINS',
        'QUIT',
      ],
      message: 'What would you like to do?',
    },
  ],
  loadSelect: [
    {
      type: 'list',
      name: 'choice',
      choices: ['blood bank', 'donor', 'hospital', 'patient', 'Quit'],
      message: 'Which table would you like to SELECT?',
    },
  ],
  loadInsert: [
    {
      type: 'list',
      name: 'choice',
      choices: ['blood bank', 'donor', 'hospital', 'patient', 'Quit'],
      message: 'Which table would you like to INSERT to?',
    },
  ],
  displayInsertIntoBloodBank: [
    {
      type: 'input',
      name: 'blood_bank_name',
      message: 'What is the name of the blood bank you would like to add?',
    },
    {
      type: 'input',
      name: 'street',
      message: 'What is the name of the street you would like to add?',
    },
    {
      type: 'input',
      name: 'city',
      message: 'What is the name of the city you would like to add?',
    },
    {
      type: 'input',
      name: 'zipcode',
      message: 'What is the zipcode you would like to add?',
    },
    {
      type: 'input',
      name: 'phone',
      message: 'What is the phone number you would like to add?',
    },
  ],
  displayInsertIntoDonor: [
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the first name you would to to add?',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the last name you would to to add?',
    },
    {
      type: 'input',
      name: 'blood_group',
      message: 'What is the blood group type you would like to add?',
    },
    {
      type: 'input',
      name: 'medical_report',
      message: 'What is the medical report you would like to add?',
    },
    {
      type: 'input',
      name: 'street',
      message: 'What is the name of the street you would like to add?',
    },
    {
      type: 'input',
      name: 'city',
      message: 'What is the name of the city you would like to add?',
    },
    {
      type: 'input',
      name: 'zipcode',
      message: 'What is the zipcode you would like to add?',
    },
    {
      type: 'input',
      name: 'phone',
      message: 'What is the phone number you would like to add?',
    },
  ],
  displayInsertIntoHospital: [
    {
      type: 'input',
      name: 'hospital_name',
      message: 'What is the name of the hospital you would to to add?',
    },
    {
      type: 'input',
      name: 'street',
      message: 'What is the name of the street you would like to add?',
    },
    {
      type: 'input',
      name: 'city',
      message: 'What is the name of the city you would like to add?',
    },
    {
      type: 'input',
      name: 'zipcode',
      message: 'What is the zipcode you would like to add?',
    },
    {
      type: 'input',
      name: 'phone',
      message: 'What is the phone number you would like to add?',
    },
  ],
  displayInsertIntoPatient: [
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the first name of the patient you would to to add?',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the last name of the patient you would to to add?',
    },
    {
      type: 'input',
      name: 'blood_group',
      message:
        'What is the blood group type of the patient you would like to add?',
    },
    {
      type: 'input',
      name: 'patient_disease',
      message: 'What is the disease of the patient you would like to add?',
    },
  ],
  displayUpdateBloodBank: [
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to update?',
      choices: ['blood_bank_name', 'street', 'city', 'zipcode', 'phone'],
    },
    {
      type: 'input',
      name: 'updatedValue',
      message: 'Enter value that you would like to be updated to',
    },
    {
      type: 'input',
      name: 'idValue',
      message: 'Enter id that you would like to be updated',
    },
  ],
  displayUpdateDonor: [
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to update?',
      choices: [
        'first_name',
        'last_name',
        'blood_group',
        'medical_report',
        'street',
        'city',
        'zipcode',
        'phone',
      ],
    },
    {
      type: 'input',
      name: 'updatedValue',
      message: 'Enter value that you would like to be updated to',
    },
    {
      type: 'input',
      name: 'idValue',
      message: 'Enter id that you would like to be updated',
    },
  ],
  displayUpdateHospital: [
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to update?',
      choices: ['hospital_name', 'street', 'city', 'zipcode', 'phone'],
    },
    {
      type: 'input',
      name: 'updatedValue',
      message: 'Enter value that you would like to be updated to',
    },
    {
      type: 'input',
      name: 'idValue',
      message: 'Enter id that you would like to be updated',
    },
  ],
  displayUpdatePatient: [
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to update?',
      choices: ['first_name', 'last_name', 'blood_group', 'patient_disease'],
    },
    {
      type: 'input',
      name: 'updatedValue',
      message: 'Enter value that you would like to be updated to',
    },
    {
      type: 'input',
      name: 'idValue',
      message: 'Enter id that you would like to be updated',
    },
  ],
  loadDelete: [
    {
      type: 'list',
      name: 'choice',
      choices: ['blood bank', 'donor', 'hospital', 'patient', 'Quit'],
      message: 'Which table would you like to DELETE from?',
    },
  ],
  displayDeleteBloodBank: [
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to delete from?',
      choices: ['blood_bank_name', 'street', 'city', 'zipcode', 'phone'],
    },
    {
      type: 'input',
      name: 'value',
      message: 'Enter value that you would like to be deleted',
    },
  ],
  displayDeleteDonor: [
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to delete from?',
      choices: [
        'first_name',
        'last_name',
        'blood_group',
        'medical_report',
        'street',
        'city',
        'zipcode',
        'phone',
      ],
    },
    {
      type: 'input',
      name: 'value',
      message: 'Enter value that you would like to be deleted',
    },
  ],
  displayDeleteHospital: [
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to delete from?',
      choices: ['hospital_name', 'street', 'city', 'zipcode', 'phone'],
    },
    {
      type: 'input',
      name: 'value',
      message: 'Enter value that you would like to be deleted',
    },
  ],
  displayDeletePatient: [
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to removes?',
      choices: ['first_name', 'last_name', 'blood_group', 'patient_disease'],
    },
    {
      type: 'input',
      name: 'value',
      message: 'Enter value that you would like to be removed',
    },
  ],
  loadInnerJoins: [
    {
      type: 'list',
      name: 'choice',
      choices: [
        'blood bank donations',
        'blood type compability',
        'hospital donations',
        'patient blood usage',
        'Quit',
      ],
      message: 'Which table would you like to SELECT INNER JOIN?',
    },
  ],
  loadUpdate: [
    {
      type: 'list',
      name: 'choice',
      choices: ['blood bank', 'donor', 'hospital', 'patient', 'Quit'],
      message: 'Which table would you like to UPDATE to?',
    },
  ],
};
