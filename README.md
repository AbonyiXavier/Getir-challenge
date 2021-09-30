# Getir-challenge

[![Build Status](https://app.travis-ci.com/AbonyiXavier/Gitr-challenge.svg?branch=main)](https://app.travis-ci.com/AbonyiXavier/Gitr-challenge)

# Getting Started

To obtain a copy of this app download or clone the repository at this [url](https://github.com/AbonyiXavier/Getir-challenge)

Postman collection documentation link [url](https://documenter.getpostman.com/view/7775892/UUy1fnS8)

# Prerequisites

You must have

- NodeJs Installed
- A browser Installed
- A REST API client(like POSTMAN) Installed
- An Internet connection to download the dependencies.

## Installing locally

- (If the repository wasn't cloned)Extract the contents of the downloaded zip file into any suitable location on the computer
- In the command prompt, cd to the root of the directory you extracted the app into
- Run 'npm install' to install all dependencies
- Run 'npm run dev' to start the application
- Run 'npm run test' to run test on the application
- In a browser address bar navigate to ''

# Using Getir Challenge API through a restful client

- Open any restful client application initially installed
- Select the appropriate http method. POST


- Use the POST method
- Use this url https://getir-challenge-apis.herokuapp.com/api/v1/records

- Test Data

```Bash
 {
	"startDate": "2015-01-26",
	"endDate": "2018-02-02",
	"minCount": 2700,
    "maxCount": 3000
}

## Built With

- NodeJs
- Express
- Mongodb(database)
- Mongoose (ODM)
- Mocha and Chai
- Travis CI

## Author

- AbonyiXavier