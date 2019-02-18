// All zodiac information has been borrowed from https://www.chinahighlights.com/travelguide/chinese-zodiac/
// Images borrowed from https://www.yourchineseastrology.com/zodiac/

// List out Zodiac Animals with descriptions/personalities, lucky and unlucky things.
const zodiacInfo = [
	{
		name : 'Rat',
		image: 'assets/Rat.png',
		description: " Rats are quick-witted, resourceful, versatile, kind, smart, and lovely. With strong intuition and quick responses, Rats always easily adapt themselves to a new environment. With rich imaginations and sharp observations, they can take advantage of various opportunities well. Rats have strong curiosity, so they tend to try their hands at anything, and they can deal with tasks skillfully. ",
		luckyThings: "Lucky Things: <ul><li>Lucky numbers: 2, 3, and numbers containing them (like 23 and 32)</li><li>Lucky colors: blue, gold, green </li><li>Lucky flowers: Lily, African violet </li><li>Lucky direction: west, northwest and southwest </li></ul>",
		unluckyThings: "Unlucky Things: <ul><li>Unlucky color: yellow, brown </li><li>Unlucky numbers: 5 and 9 </li><li>Unlucky direction: south and southeast </li>"
	},
	{
		name: 'Ox',
		image: 'assets/Ox.png',
		description: " Oxes are known for diligence, dependability, strength and determination. Having an honest nature, Oxes are strongly patriotic, have ideals and ambitions for life, and attach importance to family and work. These reflect traditional conservative characteristics. Having great patience and a desire to make progress, Oxes can achieve their goals by consistent effort. They are not much influenced by others or the environment, but persist in doing things according to their ideals and capabilities. Before taking any action, Oxes will have a definite plan with detailed steps, to which they apply their strong faith and physical strength. As a result, people of the Ox zodiac sign often enjoy great success. Oxes are weakest in their communication skills. They are not good at communicating with others, and even think it is not worthwhile to exchange ideas with others. They are stubborn and stick to their own ways.  ",
		luckyThings: "Lucky Things: <ul><li>Lucky numbers: 1, 4, and numbers containing 1 and 4 (like 14 and 41) </li><li>Lucky colors: white, yellow, and green</li><li>Lucky flowers: Tulip, Morning Glory, and Peach Blossom </li><li>Lucky direction: north and south </li></ul>",
		unluckyThings: "Unlucky Things: <ul><li>Unlucky color: blue</li><li> Unlucky numbers: 5 and 6</li><li> Unlucky direction: southwest</li></ul>"
	},
	{
		name: 'Tiger',
		image: 'assets/Tiger.png',
		description: "Tigers are brave, competitive, unpredictable, and confident. They are very charming and well-liked by others. But sometimes they are likely to be impulsive, bad-tempered, and stubborn. With stubborn personalities and tough judgment, Tigers work actively and express themselves boldly, doing things in a high-handed manner. They are authoritative and never go back on what they have said. With great confidence and indomitable fortitude, they can be competent leaders. They will not make preparations for anything, but can handle anything that comes along. ",
		luckyThings: "Lucky Things: <ul><li>Lucky numbers: 1, 3, and 4 and numbers containing them (like 13 and 43)</li><li>Lucky colors: blue, gray, orange</li><li>Lucky flowers: Yellow Lily, Cineraria</li><li>Lucky direction: east, north, south</li>",
		unluckyThings: "Unlucky Things: <ul><li> Unlucky color: brown</li><li>Unlucky numbers: 6, 7, and 8</li><li>Unlucky direction: southwes</li></ul>"
	},
	{
		name: 'Rabbit',
		image: 'assets/Rabbit.png',
		description: "Rabbits tend to be gentle, quiet, elegant, and alert as well as quick, skillful, kind, patient, and very responsible. However, they might be superficial, stubborn, and overly-discreet. Rabbits are faithful to those around them but are reluctant to reveal their minds to others, and have a tendency to escape reality. They are too cautious and conservative, which means they miss good opportunities.",
		luckyThings: "Lucky Things: <ul><li> Lucky numbers: 3, 4, 6, and numbers containing them (like 34 and 46)</li><li>Lucky colors: red, pink, purple, blue</li><li>Lucky flowers: Plantain Lily, Jasmine</li><li>Lucky directions: east, south and northwest ",
		unluckyThings: "Unlucky Things: <ul><li> Unlucky colors: dark brown, dark yellow, white</li><li>Unlucky numbers: 1, 7, and 8</li><li>Unlucky directions: north, west, and southwest </li>"
	},
	{
		name: 'Dragon',
		image: 'assets/Dragon.png',
		description: "Among the Chinese zodiac animals, the dragon is the sole imaginary animal. The Chinese dragon is the most vital and powerful beast in the Chinese zodiac, although Dragons have an infamous reputation for being a hothead and possessing a sharp tongue. In ancient times, people thought that Dragons were best suited to be leaders of the world with their character traits of dominance and ambition. Gifted with innate courage, tenacity, and intelligence, Dragons are enthusiastic and confident. They are not afraid of challenges, and willing to take risks. However, Dragons are sometimes regarded as aggressive, and angry Dragons are not open to criticism. They don't consider themselves irritating and arrogant. Instead of following tradition, they strive for a smooth future.",
		luckyThings: "Lucky Things: <ul><li> Lucky numbers: 1, 6 and 7</li><li>Lucky colors: gold, silver, grayish white</li><li>Lucky flowers: Bleeding-heart Glory Bower, Dragon Flowers</li><li>Lucky direction: east, north, west</li> ",
		unluckyThings: "Unlucky Things: <ul><li> Unlucky colors: blue, green</li><li>Unlucky numbers: 3 and 8</li><li>Unlucky direction: northwest</li> "
	},
	{
		name: 'Snake',
		image: 'assets/Snake.png',
		description: " In Chinese culture, the Snake is the most enigmatic animal among the 12 zodiac animals. People born in a year of the Snake are supposed to be the most intuitive. Snakes tend to act according to their own judgments while remaining private and reticent. They are determined to accomplish their goals and hate to fail. Snakes represent the symbol of wisdom. They are intelligent and wise. They are good at communication but say little. Snakes are usually regarded as great thinkers. They love to possess the best of everything but they have no patience for shopping. Snake people prefer to work alone; therefore, they are easily stressed. If they seem unusually stressed, it is best to allow them their own space and time to return to normal. ",
		luckyThings: "Lucky Things: <ul><li> Lucky numbers: 2, 8, 9, and numbers containing them (like 28 and 89)</li><li>Lucky colors: black, red, and yellow</li><li>Lucky flowers: Orchid and Cactus</li><li>Lucky directions: east, west, and southwest</li></ul>",
		unluckyThings: "Unlucky Things: <ul><li> Unlucky colors: brown, gold, white</li><li>Unlucky numbers: 1, 6, and 7</li><li>Unlucky directions: northeast and northwest</li></ul>"
	},
	{
		name: 'Horse',
		image: 'assets/Horse.png',
		description: " People born in a year of the Horse are extremely animated, active and energetic. Horses love to be in a crowd, and they can usually be seen on such occasions as concerts, theater performances, meetings, sporting events, and parties. With a deft sense of humor, Horses are masters of repartee. They love to take center stage and delight audiences everywhere.  ",
		luckyThings: "Lucky Things: <ul><li> Lucky numbers: 2, 3, 7, and numbers containing them (like 23 and 37)<li>Lucky colors: yellow and green</li><li>Lucky flowers: Calla Lily and Jasmine</li><li>Lucky directions: east, west, and south </li><ul>",
		unluckyThings: "Unlucky Things: <ul><li> Unlucky color: blue, white</li><li>Unlucky numbers: 1, 5, and 6</li><li>Unlucky direction: north and northwest </li><ul>"
	},
	{
		name: 'Sheep',
		image: 'assets/Sheep.png',
		description: " People born in a year of the Sheep are generally believed to be gentle, mild-mannered, shy, stable, sympathetic, amicable, and brimming with a strong sense of kindheartedness and justice. They have very delicate thoughts, strong creativity, and perseverance, and acquire professional skills well. Although they look gentle on the surface, they are tough on the inside, always insisting on their own opinions in their minds. They have strong inner resilience and excellent defensive instincts. Although they prefer to be in groups, they do not want to be the center of attention. They are reserved and quiet, most likely because they like spending a lot of time in their own thoughts. Sheeps like to spend money on fashionable things that give them a first class appearance. Although Sheeps enjoy spending money on the finer things in life, they are not snobbish. ",
		luckyThings: "Lucky Things: <ul><li>	Lucky numbers: 2, 7, or numbers containing 2 and 7 (like 27 and 72)</li><li>Lucky colors: brown, red, and purple</li><li>Lucky flowers: Carnations and Primroses<li>Lucky direction: north	</li></ul>",
		unluckyThings: "Unlucky Things: <ul><li> Unlucky colors: blue and black. Goats should avoid wearing these colors.</li><li>Unlucky numbers: 4 and 9</li><li>	Unlucky direction: southwest </li><ul>"
	},
	{
		name: 'Monkey',
		image: 'assets/Monkey.png',
		description: " People born in a year of the Monkey have magnetic personalities and are witty and intelligent. Personality traits like mischievousness, curiosity, and cleverness make them very naughty. Monkeys are masters of practical jokes, because they like playing most of the time. Although they don't have bad intentions, their pranks sometimes hurt other people's feelings. Monkeys are fast learners and crafty opportunists. They have many interests and need partners who are capable of stimulating them. While some like the eccentric nature of Monkeys, others don't trust their sly, restless, and inquisitive nature. Although they are clever and creative, Monkeys can't always exhibit their talents properly. They like to accept challenges and prefer urban life to rural life. ",
		luckyThings: "Lucky Things: <ul><li> Lucky numbers: 4 and 9</li><li>Lucky colors: white, blue, gold</li>Lucky flowers: Chrysanthemum, Crape myrtle</li>Lucky directions: north, northwest, west </li></ul>",
		unluckyThings: "Unlucky Things: <ul><li> Unlucky numbers: 2 and 7</li><li>Unlucky colors: red, pink</li><li>Unlucky directions: south, southeast </li><ul>"
	},
	{
		name: 'Rooster',
		image: 'assets/Rooster.png',
		description: " People born in a year of the Rooster are very observant. Hardworking, resourceful, courageous, and talented, Roosters are very confident in themselves. Roosters are always active, amusing, and popular within a crowd. Roosters are talkative, outspoken, frank, open, honest, and loyal individuals. They like to be the center of attention and always appear attractive and beautiful. Roosters are happiest when they are surrounded by others, whether at a party or just a social gathering. They enjoy the spotlight and will exhibit their charm on any occasion. ",
		luckyThings: "Lucky Things: <ul><li> Lucky numbers: 5, 7, and 8</li><li>Lucky colors: gold, brown, and yellow</li><li>Lucky flowers: Gladiola, Cockscomb</li><li>Lucky directions: south, southeast </li><ul>",
		unluckyThings: "Unluck Things <ul><li> Unlucky color: red</li><li>Unlucky numbers: 1, 3, and 9<li>Unlucky direction: east </li><ul>"
	},
	{
		name: 'Dog',
		image: 'assets/Dog.png',
		description: " Dogs are loyal and honest, amiable and kind, cautious and prudent. Due to having a strong sense of loyalty and sincerity, Dogs will do everything for the person who they think is most important. As Dogs are not good at communication, it is difficult for them to convey their thoughts to others. Therefore, Dogs tend to leave others with the impression that they have a stubborn personality. Born with a good nature, Dogs do not tend to be criminals or seek dishonest gains. They just need a quiet life and a good family and, therefore, forget the ugliness in the world. Dogs are always ready to help others and do not care about their own interests; but, if they find themselves betrayed by cunning people they will feel shocked and hurt. When thrown into doubt, Dogs think the world is evil and complicated. Then they criticize sharply when making comments, and infer that all things are according to their pessimistic point of view.  ",
		luckyThings: "Lucky Things: <ul><li> Lucky numbers: 3, 4, 9, and numbers containing them (like 34 and 49)</li><li>Lucky colors: red, green, and purple</li><li>Lucky flowers: Rose, Cymbidium Orchids</li>Lucky directions: east, south, and northeast </li></ul>",
		unluckyThings: "Unlucky Things: <ul><li> Unlucky colors: blue, white, gold</li><li>Unlucky numbers: 1, 6, and 7</li><li>Unlucky direction: southeast </li></ul>"
	},
	{
		name: 'Pig',
		image: 'assets/Pig.png',
		description: " Pigs are diligent, compassionate, and generous. They have great concentration: once they set a goal, they will devote all their energy to achieving it. Though Pigs rarely seek help from others, they will not refuse to give others a hand. Pigs never suspect trickery, so they are easily fooled. General speaking, Pigs are relatively calm when facing trouble. No matter how difficult the problems are, they can handle things properly and carefully. They have a great sense of responsibility to finish what they are engaged in. ",
		luckyThings: "Lucky Things: <ul><li>Lucky numbers: 2, 5, 8, and numbers containing them (like 25 and 58)</li><li>Lucky colors: yellow, gray, brown, gold</li><li>Lucky flowers: Hydrangea and Daisy</li><li>Lucky direction: east and southwest </li></ul>",
		unluckyThings: "Unluck Things <ul><li> Unlucky color: red, blue, green</li><li>Unlucky numbers: 1, 7, and numbers containing them (like 17 and 71)</li><li>Unlucky direction: southeast </li><ul>"
	},
	
]
// List animals in index order, starting with the animal year that has a 0 remainder from % 12.
const animals = ['Monkey','Rooster','Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep'];

// Create function to return zodiac animal from user input year.
const getAnimalName = year => {
	if(year) {
		const animalIndex = year % 12;
		return animals[animalIndex];
	}
	
	return "";
}

// Create function to gather key values from zodiacInfo when zodiacInfo 'name' matches with name from getAnimalName function.
const getAnimalInfo = animalName => {
	let index = 0;
	
	while(index < zodiacInfo.length) {
		if(animalName == zodiacInfo[index].name) {
			return zodiacInfo[index];
		}
		
		index ++;
	}
	
	return {}
}

//  Create function to allocate key values to classes in HTML.
const showZodiacInfo = animalName => {
	const $info = $('.info');
	
	$info.find('.zodiac-animal').text(animalName);
	
	const animalInfo = getAnimalInfo(animalName);
	$info.find('img').attr('src', animalInfo['image']);
	$info.find('.personality').text(animalInfo['description']);
	$info.find('.lucky-things').html(animalInfo['luckyThings']);
	$info.find('.unlucky-things').html(animalInfo['unluckyThings']);
}

// Take user input from form submit, return value as a whole number from modulo calculation, match whole number with animals array index, input key values into corresponding HTML classes.
$('.year-of-birth').submit(function(e){
			
	const userYear = $('.year-value').val();
	const animalName = getAnimalName(userYear);
	showZodiacInfo(animalName);
	
	e.preventDefault();
});