function GetFrequencyFromNote(note){
    switch(note.toUpperCase()){
        case "E3":
            return 164.81;
        case "C4":
            return 261.63;
        case "C#4":
            return 277.18;
        case "D4":
            return 293.66;
        case "D#4":
            return 311.13;
        case "E4":
            return 329.63;
        case "F4":
            return 349.23;
        case "F#4":
            return 369.99;
        case "G4":
            return 392.00;
        case "G#4":
            return 415.30;
        case "A4":
            return 440;
        case "A#4":
            return 466.16;
        case "B4":
            return 493.88;
        case "C5":
            return 523.25; 
        case "D5":
            return 587.33;
        case "E5":
            return 659.25;
        case "G5":
            return 783.99;
        default:
            return 0;
    }
}

//note type is 1=Whole, 2=Half, 4=Quarter, 8=Eighth, 16=Sixteenth
function GetDurationOfNote(bpm, noteType){
    let numBeatsInSec = 60/bpm;
    let divisor = noteType / 4;
    return numBeatsInSec / divisor;
}


module.exports = {
    NewNote(note, noteType, bpm){
        return {
            freq: GetFrequencyFromNote(note),
            lengthInSecs: GetDurationOfNote(bpm, noteType),
            volume: 60
        }
    },
    SameNoteBreak(){
        return {
            freq: 0,
            lengthInSecs: .02,
            volume: 60
        }
    }
}