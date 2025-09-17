
const emotion_vals: { [key: string]: {arousal: number; valence: number} } = {
    excited: { arousal: 1, valence: 1 },
    happy: { arousal: 0.8, valence: 0.8 },
    energetic: { arousal: 0.7, valence: 0.9 },
    motivated: { arousal: 0.6, valence: 0.8 },
    relaxed: { arousal: -0.3, valence: 0.7 },
    calm: { arousal: -0.5, valence: 0.6 },
    content: { arousal: -0.2, valence: 0.5 },
    nostalgic: { arousal: -0.4, valence: 0.3 },
    anxious: { arousal: 0.8, valence: -0.6 },
    tense: { arousal: 0.7, valence: -0.5 },
    stressed: { arousal: 0.6, valence: -0.7 },
    bored: { arousal: -0.8, valence: -0.8 },
    sleepy: { arousal: -0.5, valence: -1 },
    sad: { arousal: -0.7, valence: -0.8 },
    melancholic: { arousal: -0.6, valence: -0.7 },
    frustrated: { arousal: 0.5, valence: -0.8 },
    overwhelmed: { arousal: 0.9, valence: -0.9 },
    joyful: { arousal: 0.9, valence: 0.9 },
    hopeful: { arousal: 0.4, valence: 0.7 },
    lonely: { arousal: -0.6, valence: -0.5 }
};

export function calculateResult (selected: {[key:string]: number}) {
    let totalArousal = 0;
    let totalValence = 0;

    for (const [key, value] of Object.entries(selected)) {
        const {arousal, valence} = emotion_vals[key];
        // scale value to (-1, 1)
        const scale = (value - 3)/2;
        totalArousal += (scale * arousal);
        totalValence += (scale * valence);
    } 

    // ATP you should have the total arousal and valence for all the emotions:
    // Find the average arousal and valence
    const averageArousal = totalArousal / Object.keys(selected).length;
    const averageValence = totalValence / Object.keys(selected).length;
}

export function findMood(avgArousal: number, avgValence: number) {

    let finalMood = "calm";

    for(const[key, value] of Object.entries(emotion_vals)) {
        const {arousal, valence} = emotion_vals[key];

        const finalMood_arousal = emotion_vals[finalMood].arousal;
        const finalMood_valence = emotion_vals[finalMood].valence;
        const arousal_diff = Math.abs(arousal - avgArousal);
        const valence_diff = Math.abs(valence - avgValence);

        
        
    }

}