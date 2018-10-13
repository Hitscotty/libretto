var player = require('./Music/MusicPlayer.js')
var mapper = require('./Music/NoteMapper.js')
//music.test();

const bpm = 190;

let allNotes = [
                mapper.NewNote('a4', 4, bpm),
                mapper.NewNote('g4', 4, bpm),
                mapper.NewNote('a4', 4, bpm),
                mapper.NewNote('c5', 2, bpm),

                mapper.NewNote('a4', 4, bpm),
                mapper.NewNote('g4', 4, bpm),
                mapper.NewNote('a4', 4, bpm),
                mapper.NewNote('d5', 2, bpm),
                mapper.SameNoteBreak(),
                mapper.NewNote('d5', 4, bpm),
                mapper.NewNote('e5', 4, bpm),
                mapper.NewNote('g5', 4, bpm),
                mapper.NewNote('e5', 8, bpm),
                mapper.NewNote('d5', 8, bpm),
                mapper.NewNote('c5', 4, bpm),

                mapper.NewNote('d5', 4, bpm),
                mapper.NewNote('g4', 4, bpm),
                mapper.NewNote('g4', 4, bpm),
                mapper.NewNote('g4', 4, bpm),
                
                mapper.NewNote('d5', 4, bpm),
                mapper.NewNote('f#4', 4, bpm),
                mapper.NewNote('f#4', 4, bpm),
                mapper.NewNote('f#4', 4, bpm),
                mapper.NewNote('e4', 4, bpm),
                mapper.SameNoteBreak(),
                mapper.NewNote('e4', 2, bpm),
                mapper.NewNote('e4', 4, bpm)
            ]
player.PlayMusic(allNotes);    

//console.log(NoteMapper.GetDurationOfNote(bpm, 1));
