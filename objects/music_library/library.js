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
       playlists: { 
         p01: { 
           id: "p01",
             name: "Coding Music",
             tracks: ["t01", "t02"]
         },
         p02: {
           id: "p02",
           name: "Other Playlist",
           tracks: ["t03"]
         }
     
       },
       printPlaylists: function() {
         let keys = Object.keys(this.playlists);
         let tracks = "";
       
         for (const i in keys) {
           if (this.playlists[keys[i]].tracks.length == 1) {
             tracks = "track";
           } else {
             tracks = "tracks";
           }
           console.log(`${keys[i]}: ${this.playlists[keys[i]].name} - ${this.playlists[keys[i]].tracks.length} ${tracks}`);
         }
       
       },
       printTracks: function() {
         let keys = Object.keys(this.tracks);
         for (const i in keys) {
           console.log(`${keys[i]}: ${this.tracks[keys[i]].name} by ${this.tracks[keys[i]].artist} (${this.tracks[keys[i]].album})`);
         }
       },
       printSearchResults: function(query) {
         if (!query) {
           return "No search terms given";
         }
         let arr = [];
         for (const i in this.tracks) {
         
           if (this.tracks[i].name.toLowerCase().includes(query.toLowerCase()) || this.tracks[i].artist.toLowerCase().includes(query.toLowerCase()) || this.tracks[i].album.toLowerCase().includes(query.toLowerCase())) {
             arr.push(this.tracks[i].id);
           }
         }
         console.log("************************");
         console.log(`Results for: '${query}'`);
         console.log("************************");
         for (const i of arr) {
         
           console.log(`${this.tracks[i].name} by ${this.tracks[i].artist} (${this.tracks[i].album})`);
         }
         if (arr.length === 0) {
           console.log("No results found.");
         }
       
       },
       printPlaylist: function(playlistId) {
     
         let playlistObj = this.playlists[playlistId];
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
           console.log(`${playlistObj.tracks[i]}: ${this.tracks[playlistObj.tracks[i]].name} by ${this.tracks[playlistObj.tracks[i]].artist} (${this.tracks[playlistObj.tracks[i]].album})`);
         }
       
       },
       addTrackToPlaylist: function(trackId, playlistId) {
         if (this.playlists[playlistId] === undefined) {
           return "that playlist doesnt exist";
         }
         if (this.tracks[trackId] === undefined) {
           return 'that track doesnt exist';
         }
         this.playlists[playlistId].tracks.push(trackId);
       },
       generateUid: function() {
         return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },
       addTrack: function(name, artist, album) {
         const numTracks = Object.keys(this.tracks).length;
       
         let newTrackID = generateUid();
         this.tracks[newTrackID] = {};
         this.tracks[newTrackID].id = newTrackID;
         this.tracks[newTrackID].name = name;
         this.tracks[newTrackID].artist = artist;
         this.tracks[newTrackID].album = album;
       
       },
       addPlaylist: function(name) {
         const numPlaylists = Object.keys(this.playlists).length;
       
         let newPlaylistID = generateUid();
         this.playlists[newPlaylistID] = {};
         this.playlists[newPlaylistID].id = newPlaylistID;
         this.playlists[newPlaylistID].name = name;
         this.playlists[newPlaylistID].tracks = [];
       },
       getTrackIdByTrackName: function(trackName) {
         for (const i in this.tracks) {
           if (this.tracks[i].name === trackName) {
             return this.tracks[i].id;
           }
         }
         console.log("That track doesnt exist");
         return undefined;
       },
       getPlaylistIdByPlaylistName: function(playlistName) {
         for (const i in this.playlists) {
           //console.log(i);
           if (this.playlists[i].name === playlistName) {
             return this.playlists[i].id;
           }
         }
         console.log("That playlist doesnt exist");
         return undefined;
       },
     };
     
     
     const red = {
       name: "Red",
       album: "Red",
       artist: "Taylor Swift"
     };
     
     
     