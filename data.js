const verseEl = document.getElementById('verse');
const infoEL = document.getElementById('infoId');
const dayEL = document.getElementById('day');
const prevDayEL = document.getElementById('prevDayVerse');
const dateEL = document.getElementById('date');
const msgEL = document.getElementById('msg');

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
	msg: 'We are getting there 🥁🥁🥁',
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
	verse: 'Romans 12 - Romans 15',
	},
	{ 
	date: '11-3',
	day: 34,
	verse: 'Romans 16 - 1 Corinthians 1, 2, 3',
	},
	{ 
		date: '11-4',
		day: 35,
		verse: '1 Corinthians 4 - 1 Corinthians 7',
	},
	{ 
		date: '11-5',
		day: 36,
		verse: '1 Corinthians 8 - 1 Corinthians 11',
		msg: 'We are getting there 🥁🥁🥁',
	},
	{ 
		date: '11-6',
		day: 37,
		verse: '1 Corinthians 12 - 1 Corinthians 15',
	},
	{ 
		date: '11-7',
		day: 38,
		verse: '1 Corinthians 16 - 2 Corinthians 1, 2, 3',
	},
	{ 
		date: '11-8',
		day: 39,
		verse: '2 Corinthians 4 - 2 Corinthians 7',
	},
	{ 
		date: '11-9',
		day: 40,
		verse: '2 Corinthians 8 - 2 Corinthians 11',
		msg: 'We are getting there 🥁🥁🥁',
	},
	{ 
		date: '11-10',
		day: 41,
		verse: '2 Corinthians 12 - Galatians 1, 2',
	},
	{ 
		date: '11-11',
		day: 42,
		verse: 'Galatians 3 - Galatians 6',
		msg: 'We are getting there 🥁🥁🥁',
	},
	{ 
		date: '11-12',
		day: 43,
		verse: 'Ephesians 1 - Ephesians 4',
	},
	{ 
		date: '11-13',
		day: 44,
		verse: 'Ephesians 5 - Philippians 1, 2',
		msg: 'You are almost there 😊',
	},
	{ 
		date: '11-14',
		day: 45,
		verse: 'Philippians 3 - Colossians 1,  2',
	},
	{ 
		date: '11-15',
		day: 46,
		verse: 'Colossians 3 - 1 Thessalonians 1, 2',
	},
	{ 
		date: '11-16',
		day: 47,
		verse: '1 Thessalonians 3 - 2 Thessalonians 1',
	},
	{ 
		date: '11-17',
		day: 48,
		verse: '2 Thessalonians 2 - 1 Timothy 1,  2',
		msg: 'We are getting there 🥁🥁🥁',
	},
	{ 
		date: '11-18',
		day: 49,
		verse: '1 Timothy 3 - 1 Timothy 6',
	},
	{ 
		date: '11-19',
		day: 50,
		verse: '2 Timothy 1 - 2 Timothy 4',
	},
	{ 
		date: '11-20',
		day: 51,
		verse: 'Titus 1 -  Titus 2, 3, Philemon 1',
		msg: 'We are getting there 🥁🥁🥁',
	},
	{ 
		date: '11-21',
		day: 52,
		verse: 'Hebrews 1 -  Hebrews 4',
	},
	{ 
		date: '11-22',
		day: 53,
		verse: 'Hebrews 5 -  Hebrews 8',
		msg: 'Yeeeey, just a few more days. Treat yourself this weekend 🪔 Kakuku hivi 🍗',
	},
	{ 
		date: '11-23',
		day: 54,
		verse: 'Hebrews 9 -  Hebrews 12',
	},
	{ 
		date: '11-24',
		day: 55,
		verse: 'Hebrews 13 -  James, 1, 2, 3',
	},
	{ 
		date: '11-25',
		day: 56,
		verse: 'James 4 -  1 Peter 1, 2',
	},

	{ 
		date: '11-26',
		day: 57,
		verse: '1 Peter 3 -  2 Peter 1',
		msg: 'Tereeen 🥁🥁🥁 we are almost dooone.',
	},
	{ 
		date: '11-27',
		day: 58,
		verse: '2 Peter 2 -  1 John 1, 2',
		msg: '7 more days to go 🥳🥳🥳',
	},
	{ 
		date: '11-28',
		day: 59,
		verse: '1 John 3 -  2 John 1',
		msg: '6 more days to go 🥳🥳🥳',
	},
	{ 
		date: '11-29',
		day: 60,
		verse: '3 John 1 - Jude 1, Revelation 1, 2',
		msg: '5 more days to go 🥳🥳🥳',
	},
	{ 
		date: '11-30',
		day: 61,
		verse: 'Revelation 3 - Revelation 6',
		msg: '4 more days to go 🥳🥳🥳',
	},
	{ 
		date: '12-1',
		day: 62,
		verse: 'Revelation 7 - Revelation 10',
		msg: '3 more days to go 🥳🥳🥳',
	},
	{ 
		date: '12-2',
		day: 63,
		verse: 'Revelation 11 - Revelation 14',
		msg: '2 more days to go 🥳🥳🥳',
	},
	{ 
		date: '12-3',
		day: 64,
		verse: 'Revelation 15 - Revelation 18',
		msg: '1 more day to go champ 🥳🥳🥳',
	},
	{ 
		date: '12-4',
		day: 65,
		verse: 'Revelation 19 - Revelation 22',
		msg: 'And we are done 🥳🥳🥳',
	},

]


//Get Today's date
const today = new Date()
dateEL.textContent = today.toLocaleDateString()

const date = `${today.getMonth() + 1}-${today.getDate()}`

//Get Today's verse
const todaysVerse = data.find((verses) => verses.date === date)

let verseToRead = todaysVerse.verse

dayEL.textContent = `Day ${todaysVerse.day} - `

//Display todays verse
verseEl.textContent = verseToRead

rawFirstVerse = verseToRead.split('-')[0];
firstVerse = rawFirstVerse.replace(' ', '%20')

// Custom message
const funMsg = todaysVerse.msg ? todaysVerse.msg : "Scriptures for the day. You can do this 🥳🥳🥳";
msgEL.textContent = funMsg


// Verse link to read today's scripture
let link = `https://www.biblegateway.com/passage/?search=${firstVerse}&version=NIV`

infoEL.innerHTML = `<a href="${link}" target="_blank">Start reading</a>`



// Previous day verse
const prevdateString = new Date(today.setDate(today.getDate() - 1))
const prevDate = `${prevdateString.getMonth() + 1}-${prevdateString.getDate()}`

const prevVerse = data.find((verses) => verses.date == prevDate)

prevDayEL.textContent = prevVerse.verse

