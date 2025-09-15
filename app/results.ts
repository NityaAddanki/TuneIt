
const emotion_vals: { [key: string]: {arousal: number; valence: number} } = {
    excited: { arousal: 1, valence: 1},
    energetic: { arousal: 0, valence: 1},
    happy: { arousal: 1, valence: 0},
    calm: { arousal: 1, valence: -1},
    sleepy: { arousal: 0, valence: -1},
    sad: { arousal: -1, valence: 0},
    bored: { arousal: -1, valence: -1},
    anxious: { arousal: -1, valence: 1}
};

export function calculateResult (selected: {[key:string]: string}) {
    let arousal = 0;
    let valence = 0;


    Object.values(selected).forEach((answer) => {
        const vals = emotion_vals[answer];
        arousal += vals.arousal;
        valence += vals.valence;
    });

    // ATP you should have the total arousal and valence for all the emotions:
}