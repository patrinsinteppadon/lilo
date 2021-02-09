# lilo
## Winter Quarter 2021 - Spring Quarter 2021
Informatics Capstone project for Patrin Sinteppadon, Michelle Lee, Paola Vanegas, and Tiffany Wong.

Problem Statement:
How might people with limited English proficiency (LEP) achieve reliable and affordable translation help so that they can be more independent outside of help from family and friends?

Project Overview:
The purpose of this app is to provide live one-to-one translation and interpreting support to non-English speakers, by pairing them up with bilingual volunteers.

### Technical Overview
#### Data Models 
**User**
* User ID: int 
* Name: text
* Email: text
* Phone Number: text
* Username: text
* Password Hash: text
* Languages Spoken (?): list?
* Languages Need Help With (?): list?  

**History**
* History ID: int 
* User ID (requestor ID?): int
* Language Spoken: text
* Language Translated To: text
* Date: datetime 
* Call Length: int (min) or float (hr)
* Start Time (?): timestamp (?) or int (HHMM)
* End Time (?): timestamp (?) or int (HHMM)

**Review**
* Review ID: int
* Volunteer User ID (volunteer translator): int
* Requestor User ID: int
* ...each question asked...: text, int

**Languages**
* Language ID: int
* Language Name: text

If we implement our own sign-in 
**New User** 
* Email: text
* Phone Number: text 
* Username: text
* Password: text
* Password Confirmation: text
* Name: text

**Credentials** 
* Email || Phone Number || Username: text
* Password: text

#### API Endpoints
**User**
`/user`
* `GET`: to get a specific user account based on User ID
    * 200: Successful response with user information 
    * 400: Bad request if ID is not in valid format 
    * 401: Cannot verify user ID
    * 404: user is not found with given id 
    * 405: method is not ‘GET’

<----IF WE DON'T USE FIREBASE SIGN-IN---->
* `POST`: create new user account (sign-up)
    * 200: created new user account 
    * 400: bad request if user account already exists, incorrect body
    * 401: unauthorized user information access
    * 405: method is not ‘POST’
    * 415: content-type is not ‘application/json’
* `PATCH`: update user credentials (email, phone number, username, password)
    * 200: Successful response with updated user information 
    * 400: Bad request if ID is not in valid format, cannot decode body 
    * 401: Unauthorized user information access
    * 405: Method is not ‘PATCH’
* `DELETE`: delete user account based on user ID
    * 200: Successful response (text)
    * 400: Bad request if ID is not in valid format
    * 401: Unauthorized user information access 
    * 405: Method is not ‘DELETE’
    * 415: Receive unsupported body, unable to update user
<---------------------------------------->

**Calling**
`/requestorCall`
* `GET`: get available translators 
* `POST`: requestor starts new call

`/translatorCall`
* GET: pick-up incoming call
* Don't know where I was going with this...
* Action when translator picks up call?
