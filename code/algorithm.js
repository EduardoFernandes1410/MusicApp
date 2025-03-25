notes = [['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab']]
justIntervals = [1, 4, 5, 8]
qualityDiminished = [0, 0, 0, 2, 3, 5, 7, 9, 10]

function getRandomItem(list) {
    if (!Array.isArray(list) || list.length === 0) {
        return undefined; // Return undefined for empty or invalid input
    }

    const randomIndex = Math.floor(Math.random() * list.length);
    return [randomIndex, list[randomIndex]];
}

function getQuantitativeInterval(note1, note2) {
    note_code_1 = note1.charCodeAt(0)
    note_code_2 = note2.charCodeAt(0)
    
    adj = note_code_2 > note_code_1 ? 1 : -1
    return ((note_code_2 - note_code_1 + adj) + 9) % 9
}

function getToneDistance(notePosition1, notePosition2) {
    return ((notePosition2 - notePosition1) + 12) % 12
}

function getQualitativeInterval(quantInterval, toneDistance) {
    diminishedDistance = (toneDistance - qualityDiminished[quantInterval] + 12) % 12
    quality = ''
    justQuality = ['mais que diminuta', 'diminuta', 'Justa', 'Aumentada', 'Mais que aumentada']
    majorQuality = ['diminuta', 'menor', 'Maior', 'Aumentada']
    if (justIntervals.includes(quantInterval)) {
        quality = justQuality[diminishedDistance]
    } else {
        quality = majorQuality[diminishedDistance]
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
