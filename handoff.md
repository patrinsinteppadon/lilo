# Wave Handoff Documentation

## Summary of project
A video call translation service that allows limited English proficient (LEP) users to request for language translation help from volunteers. A user indicates the languages they want help translating to/from, and then the app will notify any available translators who are bilingual in those languages.

## Summary of research 
Performed secondary research including market analysis with online sources. Research was conducted with primarily two main user groups in mind: LEP users and bilingual/multilingual users.

* We conducted the following with LEP users and bilingual/multilingual users:
  * Surveys
  * Interviews
  * Surveys and interviews  affirm and expand our initial findings.
    * LEP users are willing to receive translation help. There is a need for assistance with everyday tasks. Language barriers and limited experience with technology create stress
    * Bilingual/multilingual users include a wide range of translation experience and willingness to help
      
## Summary of design 
User research was synthesized to create and design:
* User flows & information architecture
* Wireframes
* Figma Prototypes
* 2 design flows, both mocked up using Figma:
  * One for LEP user group
  * Another for translator group
* Usability testing with stakeholder interviews
* Prototype designs were iterated after feedback from user tests
  * Main takeaway from user testing was a need for clear signifiers beyond the text itself (e.g. making it very clear which button to press)

## Summary of current code
The project is constructed using React Native, focused specifically on deploying for Android devices. The primary technology used for establishing calls is the WebRTC library.
Firebase is used for the database. 
There is currently no backend for the project, but it would eventually be necessary to have a search algorithm that can find and notify translators when someone is requesting for help.

## Future steps: 
* Create & use cloud server
* Build out full backend with API 
* Add algorithm for calling (selecting which translators to call)
* Remove hardcoded calling room id & use a random room id for every call 
* Utilize feedback data to categorize and direct calls based on topic of conversation (technical vs non-technical) and moderate app against potential misusage from users
* Perform user research with more target users to further validate the concept
* Refine the UI and user experience further
* Allow for users to indicate proficiency and direct calls accordingly
