# migrate-mongodb-to-firestore

A shell script file with node scripts to migrate MongoDB collections into the cloud firestore.

# Installation

## **Step-1**
Install the below dependencies modules first (if not installed).

- [Node.js](https://nodejs.org/en/) - to run **Node Scripts**.
- [MongoDB](https://www.mongodb.com/download-center/community) - to run **mongodb export command**.
- [Git Bash](https://gitforwindows.org/) - to run **shell script in Windows machine**.

## **Step-2**
- Create a database in MongoDB with name **`testdb`**
- Create a database in Cloud Firestore with the same name **`testdb`**
- Create 2 collections in MongoDB **`students`** and **`teachers`** with the below structure -

Collection: `student`
```json
{
  {
    "firstName": "Prasenjit",
    "lastName": "Saha",
    "role": "student",
    "studentId": 001
  },
  {
    "firstName": "Amit Kr",
    "lastName": "Shil",
    "role": "student",
    "studentId": 002
  }
}
```

Collection: `teacher`
```json
{
  {
    "firstName": "Ranit",
    "lastName": "Das",
    "role": "teacher",
    "teacherId": 001
  },
  {
    "firstName": "Goutam",
    "lastName": "Singha",
    "role": "teacher",
    "teacherId": 002
  }
}
```

## **Step-3**

Install this package manager [node-firestore-import-export](https://www.npmjs.com/package/node-firestore-import-export) to import JSON data into Firestore.

```bash
npm install -g node-firestore-import-export
```

## **Step-4**

- Download the service account file of your Firebase Project.
- Open that file with any editor.
- Copy that JSON code.
- Navigate to the config folder.
- Open gcpserviceacccount.json with any editor.
- Paste your JSON code here.

Sample service account file - 
**gcpserviceacccount.json**

```json
{
  "type": "service_account",
  "project_id": "samplae-project-id",
  "private_key_id": "********************",
  "client_email": "*************",
  "client_id": "****************",
  "auth_uri": "https://*************",
  "token_uri": "https://**************",
  "auth_provider_x509_cert_url":"**********",
  "client_x509_cert_url": "********",
  "private_key": "**********************"
}
```

## **Step-5**

Run the below command to start the migration.

```bash
sh migrate.sh
```

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.