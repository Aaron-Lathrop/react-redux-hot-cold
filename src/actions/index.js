export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guesses, feedback) => ({
    type: MAKE_GUESS,
    guesses,
    feedback
});

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAurualUpdate = auralStatus => ({
    type: GENERATE_AURAL_UPDATE,
    auralStatus
});