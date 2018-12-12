export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess, guesses, feedback) => ({
    type: MAKE_GUESS,
    guesses,
    feedback,
    correctAnswer
});

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAurualUpdate = auralStatus => ({
    type: GENERATE_AURAL_UPDATE,
    auralStatus
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
    type: RESTART_GAME,
});