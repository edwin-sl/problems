const convo = [
    {
        state: "brussels",
        cards: [
            {
                id: "message",
                text: [
                    "Interested in a savory Brussels sprouts and bacon recipe that is sure to please your taste buds this season?"
                ],
                buttons: [
                    {
                        type: "answer",
                        title: "No thanks",
                        payload:{
                            nextState: "brussels.4"
                        }
                    }
                ]
            }
        ]
    },
    {
        state: "brussels.4",
        cards: [
            {
                id: "message",
                text: [
                    "No problem"
                ],
                buttons: [
                    {
                        type: "messageReceived",
                        payload:{
                            nextState: "brussels.11"
                        }
                    }
                ]
            }
        ]
    },
    {
        state: "brussels.5",
        cards: [
            {
                id: "message",
                text: [
                    "Then let's get cooking... clean & quarter 2lbs of fresh Brussels sprouts",
                    "Spread Brussel sprouts and 1 cup raw cranberries on a baking sheet, drizzle with olive oil & roast for 20-25 minutes",
                    "Then whip up an easy vinigrette (recipe in a sec), and toss in the roasted Brussels & 6 pieces cooked & crumbled bacon",
                    "Check out the full recipe & cooking video at https://bit.ly/2R9jZv1"
                ],
                buttons: [
                    {
                        type: "answer",
                        title: "Thanks",
                        payload:{
                            nextState: "brussels.10"
                        }
                    }
                ]
            }
        ]
    },
    {
        state: "brussels.10",
        cards: [
            {
                id: "message",
                text: [
                    "You bet... enjoy this at home or bring it to a gathering to get lots of ooohs and ahhhs!"
                ],
                buttons: [
                    {
                        type: "messageReceived",
                        payload:{
                            nextState: "brussels.11"
                        }
                    }
                ]
            }
        ]
    },
    {
        state: "brussels.11",
        cards: [
            {
                id: "message",
                text: [
                    "Keep in mind that the Brook Experts are available to chat, and share some additional recipe ideas, when you're ready"
                ],
                buttons: [
                    {
                        type: "messageReceived",
                        payload:{
                            nextState: "drm_convo"
                        }
                    }
                ]
            }
        ]
    },
]

let createButton = (state, text) => {
    state = typeof state === 'string' ? state : state.state
    return { type: text ? 'answer' : 'messageReceived', payload: {nextState: state}}
}

let createCard = (texts, buttons) => {
    if(!Array.isArray(texts))
        texts = [texts]
    return { id: 'message', text: texts, buttons}
}

let createState = (state, cards) => {
    return { state, cards }
}

const brussels = {
    'brussels.4': createState('brussels',
        createCard("No problem",[
            createButton('drm_convo', "No Thanks")
        ])),
    brussels: createState('brussels',
        createCard("Interested in a savory Brussels sprouts and bacon recipe that is sure to please your taste buds this season?",[
            createButton(this["brussels.4"], "No Thanks")
        ])),
}

console.log(JSON.stringify(brussels))
