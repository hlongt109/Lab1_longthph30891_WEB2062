const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dormund',
    players:[
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
                'Schulz',
                'Hummels',
                'Akanji',
                'Hakimi',
                'Weigl',
                'Witsel',
                'Hazard',
                'Brandt',
                'Sancho',
                'Gotze'
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date : 'Nov 9th 2032',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi")
for(const [i, player] of game.scored.entries()){
    console.log(`Goal ${i + 1} : ${player}`)
}

// 2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console
const odds = Object.values(game.odds);
let avarage = 0;
for (const odd of odds) avarage += odd;
avarage /= odds.length;
console.log(avarage);

// 3. 
for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`)
}