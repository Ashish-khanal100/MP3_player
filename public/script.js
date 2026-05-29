console.log("working...")


async function allfile() {
    const response = await fetch("/songs")
    const files = await response.json()
    console.log(files)

    return files

}


let nnn = document.querySelector(".sname")
let trk = document.querySelector(".track")
function gana(a) {
    nnn.innerHTML = a
    trk.src = "https://cdn.pixabay.com/animation/2025/09/20/15/04/15-04-49-14_512.gif"

}


let nxt = document.querySelector(".fa-forward-step")
let pre = document.querySelector(".fa-backward-step")
// function npbtn(a) {

// }



let bggif = document.querySelector(".gifbg")
let mongif = document.querySelector(".monkey")

let s = document.querySelector(".songs")
let ooo
async function out(a) {
    ooo = await a
    console.log(`oout : ${ooo}`)
    return a
}

function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);

    if (sec < 10) sec = "0" + sec;

    return `${min}:${sec}`;
}

let index

let seek = document.querySelector(".range");
let song
async function file_name() {
    let file_names = await allfile()
    let length = file_names.length
    console.log(`name: ${file_names}`)
    console.log(`Length:  ${length}`)
    for (let i = 0; i < length; i++) {
        let first = file_names[i].split(".")[0]
        console.log(first)
        // s.innerHTML = s.innerHTML + `<div class="list">${first}</div>`
        s.innerHTML = s.innerHTML + `<div class="all">
                        <img class="point" src="https://cdn-icons-png.flaticon.com/512/876/876817.png" alt="">
                        <div class="card">
                            <div class="name">${first}</div>
                        </div>
                    </div>`




    }

    let li = document.querySelectorAll(".name")
    let ct
    li.forEach(item => {
        item.addEventListener("click", (e) => {
            console.log("clicked..")
            let ctext = e.currentTarget.innerHTML
            // let ctext=  await li.innerHTML
            const clicked = "songs/" + ctext + ".mp3"
            console.log(clicked)

            for (let i = 0; i < length; i++) {
                if (file_names[i] == `${ctext}.mp3`) {
                    index = i
                    console.log("index ho: " + i)
                }

            }

            

            if (song) {
                song.pause();
                song.currentTime = 0;
                // timer(song)
            }
            
            
            song = new Audio(clicked)
            song.play()
            out(song)
            
            // nxt.addEventListener("click", () => {
            //     index+=1
            //     song.pause()
            //     // new Audio("songs/" +file_names[index]).play()
            //     song=new Audio("songs/" +file_names[index])
            //     song.play()
            // })
            // pre.addEventListener("click", () => {
            //     index-=1    
            //     song.pause()
            //     // new Audio("songs/" +file_names[index]).play()
            //     song=new Audio("songs/" +file_names[index])
            //     song.play()

            // })

            bggif.src = "https://cdn.pixabay.com/animation/2025/09/12/09/00/09-00-51-364_512.gif"
            mongif.src = "https://cdn.pixabay.com/animation/2025/01/29/20/09/20-09-41-525_512.gif"

            gana(ctext)

            song.addEventListener("loadedmetadata", () => {
                seek.max = song.duration;
            });

            song.addEventListener("timeupdate", () => {
                document.querySelector(".current").innerHTML = formatTime(song.currentTime)
                document.querySelector(".total").innerHTML = formatTime(song.duration)
                // ct=(song.currentTime / song.duration) * 100
                // seek.value=ct

                seek.value = song.currentTime;

                if (document.querySelector(".current").innerHTML == document.querySelector(".total").innerHTML) {
                    console.log("sakiyo!")
                    bggif.src = "https://cdn.pixabay.com/animation/2025/09/12/10/03/10-03-29-312__340.png"
                    mongif.src = "https://cdn.pixabay.com/animation/2025/01/30/03/05/03-05-06-386__340.png"

                    trk.src = "https://cdn.pixabay.com/animation/2025/09/20/15/04/15-04-57-434__340.png"
                }

            });

            seek.addEventListener("input", () => {
                song.currentTime = seek.value;
            });

            let volume = document.getElementById("volume");
            let volumeicn = document.querySelector(".volume-btn");

            volumeicn.addEventListener("click",()=>{
                if(song.volume>0){
                    song.volume=0
                     if (volumeicn.classList.contains("fa-volume-low") || volumeicn.classList.contains("fa-volume-high")) {
                        volumeicn.classList.remove("fa-volume-low");
                        volumeicn.classList.remove("fa-volume-high");
                        volumeicn.classList.add("fa-volume-xmark");
                    }
                }
                else if (song.volume==0){
                    song.volume=1
                    if (volumeicn.classList.contains("fa-volume-xmark") || volumeicn.classList.contains("fa-volume-low")) {
                        volumeicn.classList.remove("fa-volume-xmark");
                        volumeicn.classList.remove("fa-volume-low");
                        volumeicn.classList.add("fa-volume-high");
                    }
                }
                


            })

            volume.addEventListener("input", () => {

                song.volume = volume.value;
                // console.log(song.volume)
                if (song.volume == 0) {
                    if (volumeicn.classList.contains("fa-volume-low") || volumeicn.classList.contains("fa-volume-high")) {
                        volumeicn.classList.remove("fa-volume-low");
                        volumeicn.classList.remove("fa-volume-high");
                        volumeicn.classList.add("fa-volume-xmark");
                    }
                }
                else if (song.volume > 0 && 0.5 > song.volume) {
                    if (volumeicn.classList.contains("fa-volume-xmark") || volumeicn.classList.contains("fa-volume-high")) {
                        volumeicn.classList.remove("fa-volume-xmark");
                        volumeicn.classList.remove("fa-volume-high");
                        volumeicn.classList.add("fa-volume-low");
                    }
                }
                else if (song.volume > 0.5 && 1 > song.volume) {
                    if (volumeicn.classList.contains("fa-volume-xmark") || volumeicn.classList.contains("fa-volume-low")) {
                        volumeicn.classList.remove("fa-volume-xmark");
                        volumeicn.classList.remove("fa-volume-low");
                        volumeicn.classList.add("fa-volume-high");
                    }
                }

            });



            // let index=file_names.indexof(`${ctext}.mp3`)
            // console.log(`index of song : ${index}`)



        })
    });

    return li
}

file_name()

let chec = document.querySelector(".bb")
chec.addEventListener("click", () => {
    let playbtn = document.querySelector(".play")

    if (playbtn.classList.contains("fa-pause")) {
        chec.innerHTML = `<i class="fa-solid fa-play play play1"></i>`
        console.log("Pausee")
        ooo.pause()
        bggif.src = "https://cdn.pixabay.com/animation/2025/09/12/10/03/10-03-29-312__340.png"
        mongif.src = "https://cdn.pixabay.com/animation/2025/01/30/03/05/03-05-06-386__340.png"

        trk.src = "https://cdn.pixabay.com/animation/2025/09/20/15/04/15-04-57-434__340.png"
        return
    }
    else {
        chec.innerHTML = `<i class="fa-solid fa-pause play"></i>`
        console.log("playyy")
        ooo.play()

        bggif.src = "https://cdn.pixabay.com/animation/2025/09/12/09/00/09-00-51-364_512.gif"
        mongif.src = "https://cdn.pixabay.com/animation/2025/01/29/20/09/20-09-41-525_512.gif"

        trk.src = "https://cdn.pixabay.com/animation/2025/09/20/15/04/15-04-49-14_512.gif"
    }

})




