export const data = {
  questions: [
    {
      id: 1,
      slug: 'gender',
      type: 'singleSelect',
      question: 'Select your gender:',
      answers: [
        { value: 'Female', nextQuestionId: 2 },
        { value: 'Male', nextQuestionId: 2 },
      ],
    },
    {
      id: 2,
      type: 'singleSelect',
      slug: 'relationship-status',
      question: 'So we can get to know you better, tell us about your relationship status.',
      answers: [
        {
          value: 'Single',
          nextQuestionId: 3,
        },
        {
          value: 'In a relationship',
          nextQuestionId: 10,
        },
      ],
    },
    {
      id: 10,
      type: 'singleSelect',
      slug: 'parents',
      question: 'Are you a parent?',
      answers: [
        {
          value: 'Yes',
          nextQuestionId: 3,
        },
        {
          value: 'No',
          nextQuestionId: 11,
        },
      ],
    },
    {
      id: 11,
      type: 'singleSelect',
      slug: 'single-problem',
      question:
        'Single {gender} {who have children (if have children)} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
      variables: [
        {
          gender: {
            questionId: 1,
            answer: {
              Female: 'Female',
              Male: 'Male',
            },
          },
          ['{who have children (if have children)}']: {
            questionsId: 10,
            answers: {
              Yes: 'who have children',
              No: '',
            },
          },
        },
      ],
      variables2: {
        gender: {
          questionId: 1,
          answers: [
            {
              answer: 'Female',
              insert: 'Female',
            },
            {
              answer: 'Male',
              insert: 'Male',
            },
          ],
        },
        ['{who have children (if have children)}']: {
          questionsId: 10,
          answers: [
            {
              answer: 'Yes',
              insert: 'who have children',
            },
            {
              answer: 'No',
              insert: '',
            },
          ],
        },
      },
      answers: [
        {
          value: 'I was unhappy with low things were going in my relationship',
          nextQuestionId: 12,
        },
        {
          value: 'I was unhappy with parts of my relationship, but some thing were working',
          nextQuestionId: 12,
        },
        {
          value: 'I was generally happy with my relationship',
          nextQuestionId: 12,
        },
        {
          value: 'I’ve never been in a relationship',
          nextQuestionId: 12,
        },
      ],
    },
    {
      id: 12,
      slug: 'partner-introvert-or-extrovert',
      type: 'singleSelect',
      question: 'Is your partner an introvert or extrovert?',
      answers: [
        { value: 'Introvert', nextQuestionId: 13 },
        { value: 'Extrovert', nextQuestionId: 13 },
        { value: 'A bit of both', nextQuestionId: 13 },
      ],
    },
    {
      id: 13,
      slug: 'partner-gender',
      type: 'singleSelect',
      question: 'What is your partner’s gender?',
      answers: [
        { value: 'Male', nextQuestionId: 14 },
        { value: 'Female', nextQuestionId: 14 },
      ],
    },
    {
      id: 14,
      slug: 'partner-priority',
      type: 'singleSelect',
      question: 'Do you agree with the statement below?',
      additionalText: '“My partner and I make sex a priority in our relationship”',
      answers: [
        { value: 'Strongly agree', nextQuestionId: 15 },
        { value: 'Agree', nextQuestionId: 15 },
        { value: 'Neutral', nextQuestionId: 15 },
        { value: 'Disagee', nextQuestionId: 15 },
        { value: 'Strongly disagree', nextQuestionId: 15 },
      ],
    },
    {
      id: 15,
      slug: 'think-about-relationship-goals',
      type: 'singleSelect',
      question: 'When you think about your relationship goals, you feel...?',
      additionalInfo: '“My partner and I make sex a priority in our relationship”',
      answers: [
        { value: 'Strongly agree', nextQuestionId: 8 },
        { value: 'Agree', nextQuestionId: 8 },
        { value: 'Neutral', nextQuestionId: 8 },
        { value: 'Disagee', nextQuestionId: 8 },
        { value: 'Strongly disagree', nextQuestionId: 8 },
      ],
    },
    {
      id: 3,
      type: 'singleSelect',
      slug: 'single-parent',
      question: 'Are you single parent?',
      answers: [
        {
          value: 'Yes',
          nextQuestionId: 4,
        },
        {
          value: 'No',
          nextQuestionId: 4,
        },
      ],
    },
    {
      id: 4,
      type: 'singleSelect',
      slug: 'in-a-relationship-problem',
      question:
        '{Gender} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?',
      answers: [
        {
          value: 'I’m very unhappy with how things are going in my relationship',
          nextQuestionId: 5,
        },
        {
          value: 'I’m unhappy with parts of my relationship, but some things are working well',
          nextQuestionId: 5,
        },
        {
          value: 'I’m generally happy in my relationship',
          nextQuestionId: 5,
        },
      ],
    },
    {
      id: 5,
      type: 'singleSelect',
      slug: 'traits-tend-to-overthink',
      question: 'Do you tend to overthink?',
      answers: [
        {
          value: 'Yes',
          nextQuestionId: 6,
        },
        {
          value: 'No',
          nextQuestionId: 6,
        },
      ],
    },
    {
      id: 6,
      type: 'info',
      slug: 'how-it-works',
      question: 'So how does it work?',
      description:
        'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
      dependsOnAnswer: {
        id: 5,
        nextQuestionId: {
          Yes: 7,
          No: 9,
        },
      },
    },
    {
      id: 7,
      type: 'singleSelect',
      slug: 'traits-most-important',
      question: 'What is most important to you?',
      answers: [
        {
          value: 'Success',
          nextQuestionId: 8,
        },
        {
          value: 'Romance',
          nextQuestionId: 8,
        },
        {
          value: 'Stability',
          nextQuestionId: 8,
        },
        {
          value: 'Freedom',
          nextQuestionId: 8,
        },
      ],
    },
    {
      id: 8,
      type: 'singleSelect',
      slug: 'relationship-about-us',
      question: 'Where did you hear about us?',
      answers: [
        {
          value: 'Poster or Billboard',
        },
        {
          value: 'Friend or Family',
        },
        {
          value: 'Instagram',
        },
        {
          value: 'Direct Mail or Package Insert',
        },
        {
          value: 'Online TV or Streaming TV',
        },
        {
          value: 'TV',
        },
        {
          value: 'Search Engine (Google, Bing, etc.)',
        },
        { value: 'Newspaper or Magazine' },
        { value: 'Facebook' },
        { value: 'Blog Post or Website Review' },
        { value: 'Podcast' },
        { value: 'Influencer' },
        { value: 'Youtube' },
        { value: 'Pinterest' },
        { value: 'Other' },
      ],
    },
    {
      id: 9,
      type: 'singleSelect',
      slug: 'traits-emotional-control',
      question: 'Is emotional control tricky for you?',
      answers: [
        {
          value: 'Yes',
          nextQuestionId: 8,
        },
        {
          value: 'Sometimes',
          nextQuestionId: 8,
        },
        {
          value: 'Rarely',
          nextQuestionId: 8,
        },
        {
          value: 'Not at all',
          nextQuestionId: 8,
        },
      ],
    },
  ],
}
