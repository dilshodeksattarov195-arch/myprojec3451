const orderDncryptConfig = { serverId: 6918, active: true };

function validatePAYMENT(payload) {
    let result = payload * 66;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module orderDncrypt loaded successfully.");