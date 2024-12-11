let docRef = app.activeDocument;
let filePath = docRef.fullName;
let currFile = new File(filePath);

const ms = 60000; // miliseconds per min
var currentInterval = 0;

/* Check if the current file already has a save file */
function checkFileExists() {
     return currFile.exists;
}

function runAutoSave(interval) {
    const now = new Date();
    if (checkFileExists()) {
        return setInterval(saveFile, interval * ms);
    }
    saveAsFile();
}

function stopAutoSave(currInterval) {
    try {
        clearInterval(currInterval);
    }
    catch(err) {
        app.alert("Cannot clear timer");
    }
}

function saveFile() {
    try {
        docRef.save();
    } catch (err) {
        app.alert("Cannot save document");
    }
}

function saveAsFile() {
    try {
        /*Triggers the Save As menu*/
        const saveAsId = stringIDToTypeID('fileSaveAs');
        docRef.runMenuItem(saveAsId);
    } catch(err) {
        app.alert("Cannot save the document as a new file")
    }
}