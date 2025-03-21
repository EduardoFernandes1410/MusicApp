notes = [['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab']]
justIntervals = [1, 4, 5]
qualityStart = [0, -1, 1, 3, 4, 6, 8, 9, 11]

function getRandomItem(list) {
    if (!Array.isArray(list) || list.length === 0) {
        return undefined; // Return undefined for empty or invalid input
    }

    const randomIndex = Math.floor(Math.random() * list.length);
    return [randomIndex, list[randomIndex]];
}

function getQuantitativeInterval(note1, note2) {
    adj = note2 >= note1 ? 1 : -1
    return ((note2.charCodeAt(0) - note1.charCodeAt(0) + adj) + 9) % 9
}

function getToneDistance(notePosition1, notePosition2) {
    return ((notePosition2 - notePosition1) + 12) % 12
}

function getQualitativeInterval(quantInterval, toneDistance) {
    minorDistance = toneDistance - qualityStart[quantInterval]
    quality = ''
    justQuality = ['diminuta', 'Justa', 'Aumentada']
    majorQuality = ['menor', 'Maior', 'Aumentada']
    seventhQuality = ['diminuta', 'menor', 'Maior', 'Aumentada']
    if (quantInterval == 7) {
        quality = seventhQuality[minorDistance]
    } else {
        if (justIntervals.includes(quantInterval)) {
            quality = justQuality[minorDistance]
        } else {
            quality = majorQuality[minorDistance]
        }
    }

    return quantInterval.toString() + ' ' + quality
}

function runQuestion() {
    noteObject1 = getRandomItem(notes)
    noteObject2 = getRandomItem(notes)

    console.log(noteObject1, noteObject2)
    
    notePosition1 = noteObject1[0]
    notePosition2 = noteObject2[0]

    console.log(notePosition1, notePosition2)
    
    note1 = getRandomItem(noteObject1[1])[1]
    note2 = getRandomItem(noteObject2[1])[1]

    console.log(note1, note2)
    
    quantInterval = getQuantitativeInterval(note1, note2)
    toneDistance = getToneDistance(notePosition1, notePosition2)
    
    console.log(quantInterval, toneDistance)

    qualInterval = getQualitativeInterval(quantInterval, toneDistance)
    console.log(qualInterval)
    return qualInterval
}
