const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  let keys = Object.keys(library.playlists);
  let tracks = "";


  for (const i in keys) {
    //console.log(library.playlists[keys[i]].tracks.length);
    if (library.playlists[keys[i]].tracks.length == 1) {
      tracks = "track";
    } else {
      tracks = "tracks";
    }
    console.log(`${keys[i]}: ${library.playlists[keys[i]].name} - ${library.playlists[keys[i]].tracks.length} ${tracks}`);
  }

};


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  let keys = Object.keys(library.tracks);
  for (const i in keys) {
    console.log(`${keys[i]}: ${library.tracks[keys[i]].name} by ${library.tracks[keys[i]].artist} (${library.tracks[keys[i]].album})`);
  }
};


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {

  let playlistObj = library.playlists[playlistId];
  if (playlistObj === undefined) {
    return "That playlist doesnt exist";
  }
  let tracks = "";


  if (playlistObj.tracks.length == 1) {
    tracks = "track";
  } else {
    tracks = "tracks";
  }

  console.log(`${playlistObj.id}: ${playlistObj.name} - ${playlistObj.tracks.length} ${tracks}`);
  for (const i in playlistObj.tracks) {
    console.log(`${playlistObj.tracks[i]}: ${library.tracks[playlistObj.tracks[i]].name} by ${library.tracks[playlistObj.tracks[i]].artist} (${library.tracks[playlistObj.tracks[i]].album})`);
  }

};


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  if (library.playlists[playlistId] === undefined) {
    return "that playlist doesnt exist";
  }
  if (library.tracks[trackId] === undefined) {
    return 'that track doesnt exist';
  }
  library.playlists[playlistId].tracks.push(trackId);
};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  const numTracks = Object.keys(library.tracks).length;

  let newTrackID = generateUid();
  library.tracks[newTrackID] = {};
  library.tracks[newTrackID].id = newTrackID;
  library.tracks[newTrackID].name = name;
  library.tracks[newTrackID].artist = artist;
  library.tracks[newTrackID].album = album;

};


// adds a playlist to the library
const addPlaylist = function(name) {
  const numPlaylists = Object.keys(library.playlists).length;

  let newPlaylistID = generateUid();
  library.playlists[newPlaylistID] = {};
  library.playlists[newPlaylistID].id = newPlaylistID;
  library.playlists[newPlaylistID].name = name;
  library.playlists[newPlaylistID].tracks = [];
};

const getTrackIdByTrackName = function(trackName) {
  for (const i in library.tracks) {
    if (library.tracks[i].name === trackName) {
      return library.tracks[i].id;
    }
  }
  console.log("That track doesnt exist");
  return undefined;
};

const getPlaylistIdByPlaylistName = function(playlistName) {
  for (const i in library.playlists) {
    //console.log(i);
    if (library.playlists[i].name === playlistName) {
      return library.playlists[i].id;
    } 
  }
  console.log("That playlist doesnt exist");
  return undefined;
};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
  if (!query) {
    return "No search terms given";
  }
  let arr = [];
  for (const i in library.tracks) {
  
    if (library.tracks[i].name.toLowerCase().includes(query.toLowerCase()) || library.tracks[i].artist.toLowerCase().includes(query.toLowerCase()) || library.tracks[i].album.toLowerCase().includes(query.toLowerCase())) {
      arr.push(library.tracks[i].id);
    }
  }
  console.log("************************");
  console.log(`Results for: '${query}'`);
  console.log("************************");
  for (const i of arr) {
  
    console.log(`${library.tracks[i].name} by ${library.tracks[i].artist} (${library.tracks[i].album})`);
  }
  if (arr.length === 0) {
    console.log("No results found.");
  }

};


const red = {
  name: "Red",
  album: "Red",
  artist: "Taylor Swift"
};

printSearchResults("t");