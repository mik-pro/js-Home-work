const artists = [
    {
       name: "Michael Jackson",
       songs: ["smooth Criminal", "Billie Jean", "Beat It", "Earth Song"]
    },
    {
       name: "Billie Eilish",
       songs: ["Bad Guy", "Lovely", "Lunch", "Chihiro"]
    },
    {
       name: "Kairat Nurtas",
       songs: ["Auyrmaydy Zhurek", "Ol sen emes"]
    },
    {
      
    },
   
 ]
 let uzun = artists[1].songs.filter(songs=>songs.length<=6)
 artists[2].songs[1]="Baika"
 console.log(artists);
 console.log(artists[0].name);
 console.log(artists[0].songs[3]);
 console.log("Billie Eilish қысқа әндер:  " + uzun);
 
 