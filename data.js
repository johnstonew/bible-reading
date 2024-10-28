const verseEl = document.getElementById('verse');
const infoEL = document.getElementById('infoId');
const dayEL = document.getElementById('day');
const prevDayEL = document.getElementById('prevDayVerse');
const dateEL = document.getElementById('date');

const data = [
	{ 
	date: '10-27',
	day: 27,
	verse: 'Acts 16 - Acts 19',
	},
	{ 
	date: '10-28',
	day: 28,
	verse: 'Acts 20 - Acts 23',
	},
	{ 
	date: '10-29',
	day: 29,
	verse: 'Acts 24 - Acts 27',
	},
	{ 
	date: '10-30',
	day: 30,
	verse: 'Acts 28 - Romans 1 - 3',
	},
	{ 
	date: '10-31',
	day: 31,
	verse: 'Romans 4 - Romans 7',
	},
	{ 
	date: '11-1',
	day: 32,
	verse: 'Romans 8 - Romans 11',
	},
	{ 
	date: '11-2',
	day: 33,
	verse: 'Romans 8 - Romans 11',
	},
	{ 
	date: '11-3',
	day: 34,
	verse: 'Romans 12 - Romans 15',
	},
	{ 
	date: '11-4',
	day: 35,
	verse: 'Romans 16 - 1 Corinthians 1 - 3',
	},
	
]


//Get Today's date
const today = new Date()
const date = today.toJSON().slice(5, 10)

//Get Today's verse
const todaysVerse = data.find((verses) => verses.date == date)

let verseToRead = todaysVerse.verse

dayEL.textContent = `Day ${todaysVerse.day} - `

//Display todays verse
verseEl.textContent = verseToRead

rawFirstVerse = verseToRead.split('-')[0];
firstVerse = rawFirstVerse.replace(' ', '%20')

// Verse link to read today's scripture
let link = `https://www.biblegateway.com/passage/?search=${firstVerse}&version=NIV`

infoEL.innerHTML = `<a href="${link}">Start reading</a>`



// Previous day verse
const prevdateString = new Date(today.setDate(today.getDate() - 1))
const prevDate = prevdateString.toJSON().slice(5, 10)

const prevVerse = data.find((verses) => verses.date == prevDate)

dateEL.textContent = today.toLocaleDateString()
prevDayEL.textContent = prevVerse.verse
