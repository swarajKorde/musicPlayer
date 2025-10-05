console.log('this is atma of this program');


// declared variable
let bar = document.querySelector('#range');
let songlist = []
var songname;
let song;
let cover = document.querySelector("#mainimg")
let currentSong = 0;
// list of all the songs
let text = document.getElementById('title')
getSongs()

async function getSongs(params) {
    // fetch those songs in the programme
    const response = await fetch("songs.json")
    const songs = await response.json()
    songlist = songs
    text.innerText = songs[0].name
    cover.src=songs[0].image;
    song = new Audio(songlist[0].url)
    song.addEventListener('timeupdate', () => {
        bar.value = (song.currentTime / song.duration) * 100
    })
    // Propogated the Song names in the playlist
    let list = document.querySelector('.songs');

    // songs.forEach((element,index)=>{

    // })
    for (let i = 0; i < songs.length; i++) {
        let li = document.createElement('li');
        li.innerText = songs[i].name;
        li.classList.add("thisSong")

        // songs.forEach((element),index => {

        // });
        // 
        li.addEventListener("click", () => {
            song.src = songs[i].url
            text.innerText = songs[i].name
            play.src = "public/circle-pause-solid-full.svg"
            cover.src = songs[i].image
            currentSong = i;

            console.log(currentSong)
            song.play()
            console.log(songs[i])
            // console.log(songs[index].name)
            console.log('well well well')
        })
        list.appendChild(li);
    }
    console.log(songs)
}

// This is the old one 

// fetch('songs.json')
//     .then(response => response.json())
//     .then(data => {
//         songlist = data
//         // console.log(data)
//         let list = document.querySelector('.songs');

//         for (let i = 0; i < songlist.length; i++) {
//             let li = document.createElement('li');
//             li.innerText = songlist[i].name;
//             li.classList.add("thisSong")
//             list.appendChild(li);
//         }
//             console.log(songlist)
//             let choice = document.querySelectorAll('.thisSong')
//             choice.forEach((element,index) => {
//                 element.addEventListener('click',()=>{
//                     console.log(element)
//                     console.log(index)
//                     song.src=songlist[index].url
//                     text.innerText=songlist[index].name
//                     song.play()

//                 })
//             });
//             // choice.addEventListener('click',()=>{
//             //     console.log(choice);


//             // })

//     })



// connect the bar with the song
bar.addEventListener('change', () => {
    console.log(bar.value)
    song.currentTime = (bar.value / 100) * song.duration;
    // 
})


// play and pause song

let play = document.querySelector('#play');

play.addEventListener('click', () => {

    if (song.paused) {
        song.play()
        play.src = "public/circle-pause-solid-full.svg"
      
    }
    else {
        song.pause()
        play.src = "public/play-solid-full.svg"
    }
    console.log('i am being clicked')
})



// Controller for Nex and Prev Button 
let prev = document.querySelector('.prev');
console.log(prev);
let prevv = document.querySelector('.prev');
prev.addEventListener('click', () => {
    console.log('prev is being clicked')
    currentSong--;
    if(currentSong<=-1) song.currentTime=0*song.duration;
    song.src=songlist[currentSong].url
    text.innerText = songlist[currentSong].name
    cover.src = songlist[currentSong].image
    play.src = "public/circle-pause-solid-full.svg"
    song.play()
});
let next = document.querySelector('.next');
console.log(next);
prev.addEventListener('click', () => {
       
});

next.addEventListener('click', () => {
    // console.log('next is hit')
    // console.log(songlist.length)
    currentSong++;
    if (currentSong >= songlist.length) currentSong = 0;
    song.src = songlist[currentSong].url
    text.innerText = songlist[currentSong].name
    cover.src = songlist[currentSong].image
    play.src = "public/circle-pause-solid-full.svg"
    song.play()
});

//  To Implyment :- when on the song zero and the prev is pressed or clicked on the songs duration/ time/ bar will set on zero.

// To develop buttons ones for taking any song back to zero and.

//  Add file functionality to add the songs or to just update a file json to include the song name url and the image 

// if user puts the wrong url like unsported one then it shouldnt get add

// trynna make it responsive if possible and then push to github.