model = {
    app: {
        page: 'assignment',
        loggedInUserId: null,
        selectedAssignmentId: null,
        selectedTermId: null,
        selectedWeeksId: null,
        selectedTopicId: null,
        selectedSubTopicId: null,
        tempTerm: [],
        tempWeeks: [],
        tempAssignment: [],
        tempTopics: [],
        tempSubTopics: [],
        editView: false
    },

    inputs: {
        login: {
            email: null,
            password: null
        },
        assignments: {
            assignmentId: 0,
            weeksId: 0,
            text: null,
            date: null,
        },
        topic: {
            topicId: 0,
            name: null, 
            text: null
        },
        subTopic: {
            topicId: 0,
            subTopicId: 0,
            name: null, 
            text: null
        },
        notes: {
            userNoteId: 0,
            text: null,
            rating: null
        }
    },
    data: {
        users: [
            {id: 1, email: 'geir@getacademy.no', password: '123', typeId: 1},
            {id: 2, email: 'per@getacademy.no', password: '1235', typeId: 2},
            {id: 3, email: 'rose@getacademy.no', password: 'a123', typeId: 2},
            {id: 4, email: 'bob@getacademy.no', password: 'a123', typeId: 2}
        ],
        userGroups: [
            {id: 1, type: 'teacher'},
            {id: 2, type: 'student'}
        ],
        terms: [
            {id: 1, name: 'emne 1'},
            {id: 2, name: 'emne 2'},
            {id: 3, name: 'emne 3'}
        ],
        weeks: [
            {id: 1, emneId: 1, name: 'Week 1'},
            {id: 2, emneId: 1, name: 'Week 2'},
            {id: 3, emneId: 1, name: 'Week 3'},
            {id: 4, emneId: 2, name: 'Week 4'},
            {id: 5, emneId: 2, name: 'Week 5'},
            {id: 6, emneId: 2, name: 'Week 6'},
            {id: 7, emneId: 3, name: 'Week 7'},
            {id: 8, emneId: 3, name: 'Week 8'},
            {id: 9, emneId: 3, name: 'Week 9'},
        ],
        assignments: [
            {id: 1, weeksId: 1, text: 'Sett deg et mål for dagen!', name: 'Ukas mål', date: '2025-03-27T08:55:00'},
            {id: 2, weeksId: 1, text: 'Husk å ta pauser og drikke vann.', name: 'Mandag', date: '2025-04-27T12:55:00'}, 
            {id: 3, weeksId: 2, text: 'En liten innsats hver dag gir store resultater.', name: 'Ukas mål', date: '2025-04-05T07:55'}, 
            {id: 4, weeksId: 2, text: 'Hva er den viktigste oppgaven din i dag?', name: 'mandag', date: '2025-04-06T07:55'}, 
            {id: 5, weeksId: 2, text: 'Start dagen med en positiv tanke!', name: 'tirsdag', date: '2025-04-07T07:55'}, 
            {id: 6, weeksId: 2, text: 'Gjør noe i dag som ditt fremtidige jeg vil takke deg for.', name: 'onsdag', date: '2025-04-08T07:55'}, 
            {id: 7, weeksId: 2, text: 'Fokusér på fremgang, ikke perfeksjon.', name: 'torsdag', date: '2025-04-09T07:55'}, 
            {id: 8, weeksId: 2, text: 'Hver dag er en ny sjanse til å bli litt bedre!', name: 'fredag', date: '2025-04-10T07:55'},
            {id: 9, weeksId: 3, text: 'Sett nye mål!', name: 'Ukas mål', date: '2025-04-12T07:55'},  
            {id: 10, weeksId: 3, text: 'Start uka sterkt!', name: 'mandag', date: '2025-04-13T07:55'},  
            {id: 11, weeksId: 3, text: 'Hold fokuset!', name: 'tirsdag', date: '2025-04-14T07:55'},  
            {id: 12, weeksId: 3, text: 'Halvveis der!', name: 'onsdag', date: '2025-04-15T07:55'},  
            {id: 13, weeksId: 3, text: 'Snart helg!', name: 'torsdag', date: '2025-04-16T07:55'},  
            {id: 14, weeksId: 3, text: 'Gi alt siste dag!', name: 'fredag', date: '2025-04-17T07:55'},  
            {id: 15, weeksId: 4, text: 'Nye utfordringer!', name: 'Ukas mål', date: '2025-04-19T07:55'},  
            {id: 16, weeksId: 4, text: 'Mandag er mulighetenes dag!', name: 'mandag', date: '2025-04-20T07:55'},  
            {id: 17, weeksId: 4, text: 'Du er på rett vei!', name: 'tirsdag', date: '2025-04-21T07:55'},  
            {id: 18, weeksId: 4, text: 'Hold ut, snart helg!', name: 'onsdag', date: '2025-04-22T07:55'},  
            {id: 19, weeksId: 4, text: 'Nesten ferdig, stå på!', name: 'torsdag', date: '2025-04-23T07:55'},  
            {id: 20, weeksId: 4, text: 'God innsats denne uka!', name: 'fredag', date: '2025-04-24T07:55'},  
            {id: 21, weeksId: 5, text: 'Nye mål, nye muligheter!', name: 'Ukas mål', date: '2025-04-26T07:55'},  
            {id: 22, weeksId: 5, text: 'Kom i gang!', name: 'mandag', date: '2025-04-27T07:55'},  
            {id: 23, weeksId: 5, text: 'Ikke gi opp!', name: 'tirsdag', date: '2025-04-28T07:55'},  
            {id: 24, weeksId: 5, text: 'Hold tempoet oppe!', name: 'onsdag', date: '2025-04-29T07:55'},  
            {id: 25, weeksId: 5, text: 'Snart der!', name: 'torsdag', date: '2025-04-30T07:55'},  
            {id: 26, weeksId: 5, text: 'Helg venter!', name: 'fredag', date: '2025-05-01T07:55'},  
            {id: 27, weeksId: 6, text: 'Hva vil du oppnå denne uka?', name: 'Ukas mål', date: '2025-05-03T07:55'},  
            {id: 28, weeksId: 6, text: 'Gi uka en god start!', name: 'mandag', date: '2025-05-04T07:55'},  
            {id: 29, weeksId: 6, text: 'Du er sterk!', name: 'tirsdag', date: '2025-05-05T07:55'},  
            {id: 30, weeksId: 6, text: 'Midtveis, fortsett!', name: 'onsdag', date: '2025-05-06T07:55'},  
            {id: 31, weeksId: 6, text: 'Helgen nærmer seg!', name: 'torsdag', date: '2025-05-07T07:55'},  
            {id: 32, weeksId: 6, text: 'Flott innsats!', name: 'fredag', date: '2025-05-08T07:55'},  
            {id: 33, weeksId: 7, text: 'En ny uke, en ny start!', name: 'Ukas mål', date: '2025-05-10T07:55'},  
            {id: 34, weeksId: 7, text: 'Gjør ditt beste!', name: 'mandag', date: '2025-05-11T07:55'},  
            {id: 35, weeksId: 7, text: 'Ikke se deg tilbake!', name: 'tirsdag', date: '2025-05-12T07:55'},  
            {id: 36, weeksId: 7, text: 'Du er på vei mot målet!', name: 'onsdag', date: '2025-05-13T07:55'},  
            {id: 37, weeksId: 7, text: 'Snart ferdig, hold ut!', name: 'torsdag', date: '2025-05-14T07:55'},  
            {id: 38, weeksId: 7, text: 'God helg!', name: 'fredag', date: '2025-05-15T07:55'},  
            {id: 39, weeksId: 8, text: 'Nye utfordringer venter!', name: 'Ukas mål', date: '2025-05-17T07:55'},  
            {id: 40, weeksId: 8, text: 'Mandag er her!', name: 'mandag', date: '2025-05-18T07:55'},  
            {id: 41, weeksId: 8, text: 'Stå på!', name: 'tirsdag', date: '2025-05-19T07:55'},  
            {id: 42, weeksId: 8, text: 'Halvveis, flott jobbet!', name: 'onsdag', date: '2025-05-20T07:55'},  
            {id: 43, weeksId: 8, text: 'Du klarer det!', name: 'torsdag', date: '2025-05-21T07:55'},  
            {id: 44, weeksId: 8, text: 'Enda en uke fullført!', name: 'fredag', date: '2025-05-22T07:55'},  
            {id: 45, weeksId: 9, text: 'Hva er dine mål denne uka?', name: 'Ukas mål', date: '2025-05-24T07:55'},  
            {id: 46, weeksId: 9, text: 'Gå for det!', name: 'mandag', date: '2025-05-25T07:55'},  
            {id: 47, weeksId: 9, text: 'Tirsdag er her, fortsett!', name: 'tirsdag', date: '2025-05-26T07:55'},  
            {id: 48, weeksId: 9, text: 'Midt i uka, imponerende!', name: 'onsdag', date: '2025-05-27T07:55'},  
            {id: 49, weeksId: 9, text: 'Snart helg, push gjennom!', name: 'torsdag', date: '2025-05-28T07:55'},  
            {id: 50, weeksId: 9, text: 'Fantastisk innsats denne uka!', name: 'fredag', date: '2025-05-29T07:55'}  
        ],
        userNotes: [
            {id: 1, assignmentId: 1, userId: 1, text: '', rating: '2'},
            {id: 2, assignmentId: 1, userId: 2, text: '', rating: '4'},
            {id: 3, assignmentId: 2, userId: 1, text: '', rating: '4'},
            {id: 4, assignmentId: 1, userId: 3, text: '', rating: '5'},
            {id: 5, assignmentId: 1, userId: 4, text: '', rating: '2'},
        ],
        topicAssignmentsConnections: [
            {id: 1, topicId: 1, assignmentId: 1},
            {id: 2, subTopicId: 5, assignmentId: 1,},
            {id: 3, subTopicId: 6, assignmentId: 1,},
            {id: 4, subTopicId: 3, assignmentId: 1,}
        ],
        topics: [
            {id: 1, name: 'Psykologisk trygghet', text: 'tekst til hovedtema om Psykologisk trygghet'},
            {id: 2, name: 'Growth Mindset', text: 'tekst til hovedtema om Growth Mindset'}
        ],
        subTopics: [
            {id: 1, topicId: 1, name: 'Bli kjent', text: 'tekst til undertema om Bli kjent'},
            {id: 2, topicId: 1, name: 'Signaturstyrker', text: 'tekst til undertema om Signaturstyrker'},
            {id: 3, topicId: 1, name: 'Lytting', text: 'tekst til undertema om Lytting'},
            {id: 4, topicId: 2, name: 'Morramøtet', text: 'tekst til undertema om Morramøtet'},
            {id: 5, topicId: 2, name: 'Feiling', text: 'tekst til undertema om Feiling'},
            {id: 6, topicId: 2, name: 'Fixed vs Growth mindset', text: 'tekst til undertema om Fixed vs Growth mindset'},
            {id: 7, topicId: 2, name: 'logg', text: 'tekst til undertema om logg'},
            {id: 8, topicId: 1, name: 'Kommunikasjon', text: 'tekst til undertema om Kommunikasjon'}
        ]
    }
}