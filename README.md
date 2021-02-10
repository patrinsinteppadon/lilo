# lilo
## Winter Quarter 2021 - Spring Quarter 2021
Informatics Capstone project for Patrin Sinteppadon, Michelle Lee, Paola Vanegas, and Tiffany Wong.

Problem Statement:
How might people with limited English proficiency (LEP) achieve reliable and affordable translation help so that they can be more independent outside of help from family and friends?

Project Overview:
The purpose of this app is to provide live one-to-one translation and interpreting support to non-English speakers, by pairing them up with bilingual volunteers.

Notes on the algorithm for searching for translator:
input: 
- source material language, 
- translated language. 
- Not tracking proficiency yet
- Consider the timezone of the translator.
- Prioritize translators who have been called less (or just were pinged less, specifically)

output:
- a list of user profiles of translators who are eligible to be pinged next
- notifies the potential translator that someone is looking for help
- potential translator clicks on the notification to establish call
- webrtc uses that user's profile to set up a peer2peer call