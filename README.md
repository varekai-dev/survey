# Survey App

## Installation

- `git clone` this repository
- `npm install`
- `npm run dev` start project

# Survey System

This project is designed to dynamically generate surveys based on a data.json file. The system supports multi-step surveys with conditional question flows and dynamic variables. Each survey consists of multiple screens, which can be either question pages (singleSelect) or informational pages (info).

```
{
  "surveys": {
    "survey-slug": {                           // Unique identifier for the survey, also used in the URL
      "title": "Survey Title",                 // Title displayed on the main page or survey header
      "slug": "survey-slug",                   // Same as "survey-slug", used for optimization and routing
      "screens": [                             // Array of screens that define the steps in the survey
        {
          "slug": "screen-slug",               // Unique identifier for each screen (question page)
          "firstScreen": true,                 // Indicates the starting screen. Only one per survey
          "type": "singleSelect",              // The type of screen. Available types:
                                               // - "singleSelect" for multiple-choice questions
                                               // - "info" for informational pages with no user input
          "question": "Question text here",    // (For singleSelect) The question that will be displayed to the user
          "additionalText": "Optional text",   // (Optional) Additional text or explanation for the question
          "nextQuestionSlug": "next-screen",   // (Optional) Determines the next screen based on user's choice
          "answers": [                         // Array of possible answers for a singleSelect question
            {
              "value": "Answer 1",             // The displayed answer choice
              "nextQuestionSlug": "next-slug"  // (Optional) The next screen slug based on this answer
            }
          ]
        },
        {
          "type": "info",                      // Informational screen type with no user input
          "slug": "info-screen-slug",          // Unique identifier for this informational screen
          "title": "Info Page Title",          // Title displayed on the info page
          "description": "Description here",   // Descriptive text explaining information to the user
          "dependsOnAnswer": {                 // (Optional) Dynamically displays this page based on previous answers
            "slug": "previous-question-slug",  // The slug of the previous question this info depends on
            "answers": [
              {
                "value": "Specific answer",    // The specific answer to trigger the display of this page
                "nextQuestionSlug": "next-slug"// The next screen to go after this info page is shown
              }
            ]
          }
        },
        {
          "type": "singleSelect",              // Another single-select question screen example
          "slug": "dynamic-question-slug",     // Unique identifier for this question screen
          "question": "{gender} {hasChildren} need a slightly different approach.",  // Uses dynamic variables from previous answers
          "variables": {                       // Variables based on earlier screens
            "gender": {
              "questionSlug": "gender",        // The question to retrieve the variable from
              "answers": [
                {
                  "answer": "Female",          // The specific answer to match
                  "insert": "female"           // The text to insert when this answer is chosen
                },
                {
                  "answer": "Male",
                  "insert": "male"
                }
              ]
            },
            "hasChildren": {
              "questionSlug": "parents",       // Retrieve from the "parents" question
              "answers": [
                {
                  "answer": "Yes",
                  "insert": "who have children"
                },
                {
                  "answer": "No",
                  "insert": ""
                }
              ]
            }
          },
          "nextQuestionSlug": "next-screen-slug",  // The next screen based on this question
          "answers": [                          // Available answers for this question
            {
              "value": "Answer text here",      // The text for each answer option
              "nextQuestionSlug": "next-slug"   // (Optional) Next screen slug based on this answer
            }
          ]
        }
      ]
    }
  }
}

```

## Features

- **Dynamic Question Flow**: Supports dynamic transitions between questions based on user responses.
- **Conditional Logic**: Allows certain screens to be shown based on answers from previous questions.
- **Dynamic Variables**: Inserts variables from previous answers into subsequent questions.
- **Informational Screens**: Supports non-interactive informational screens within surveys.
