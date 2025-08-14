// This file contains the logic to processing the mood questionnaire. We will
// analyze the valence and arousal of all moods and send back a predicted mood.
// This is based on Russell's Circumplex Model of Affect.


// use this to store the user's mood values for each emotion
const array: emotion_vals[];

// define the arousal and valence for all the emotions
const emotion_vals = {
    excited: { arousal: 1, valence: 1},
    energetic: { arousal: 0, valence: 1},
    happy: { arousal: 1, valence: 0},
    calm: { arousal: 1, valence: -1},
    sleepy: { arousal: 0, valence: -1},
    sad: { arousal: -1, valence: 0},
    bored: { arousal: -1, valence: -1},
    anxious: { arousal: -1, valence: 1}
}