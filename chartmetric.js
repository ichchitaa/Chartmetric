function data_output(response) {
    var dictionary = {}
    for (let i = 0; i < response.length; i++) {
        curr = response[i]
        tracks = curr.tracks
        for (let j = 0; j < tracks.length; j++) {
            now = tracks[j]
            time = now[timestp] 
            title = now[trackName]
            if (dictionary.includes(time)) {
                dictionary[time].push(title) 
            } else {
                dictionary.push(time)
                dictionary[time] = [title]
            }
        }
    }
    const data = []
    for (let k = 0; k < dictionary.length; k++) {
        curr_time = dictionary[k]
        songs = dictionary[curr_time] 
        done = []
        str = ""
        for (let j = 0; j < songs.length; j++) {
            song = songs[j]
            if (done.includes(song)) {
                break;
            } else {
                num = songs.filter(x => x==song).length
                this_str = name + " (" + str(num) + "), "
                str += this_str
            }
        }
        spins = len(songs)
        now = {x: curr_time, y: spins, tooltip: str}
        data.push(now)
        }
    return data 
}