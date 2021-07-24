export const increment = (steps) => {
    return {
        type: "INCREMENT",
        steps: steps
    };
};

export const decrement = (steps) => {
    return {
        type: "DECREMENT",
        steps: steps
    };
};

export const sing_in = (counter) => {
    return {
        type: "SIGN_IN",
        counter: counter
    };
};