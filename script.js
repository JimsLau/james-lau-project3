const zodiacInfo = [
	{
		name : 'rat',
		image: 'assets/Rat.png',
		description: "Rat-forthright, generous, outgoing, loves money, hates waste"
	},
	{
		name: 'ox',
		image: 'assets/Ox.png',
		description: "Ox-calm, dependable, obstinate, reliable, proud, and can be uncompromising"
	},
	{
		name: 'tiger',
		image: 'assets/Tiger.png',
		description: "Tiger-loving, giving, optimistic, idealistic, stubborn, self-centered, emotional"
	},
	{
		name: 'rabbit',
		image: 'assets/Rabbit.png',
		description: " Rabbit-careful, systematic, considerate, can be indifferent, temperamental, shrewd"
	},
	{
		name: 'dragon',
		image: 'assets/Dragon.png',
		description: "Dragon- strong, energetic, proud, confident, but can be illogical and obsessive. Read about the dragon boat festival "
	},
	{
		name: 'snake',
		image: 'assets/Snake.png',
		description: "Snake-intellectual, superstitious, independent, private, cautious"
	},
	{
		name: 'horse',
		image: 'assets/Horse.png',
		description: "Horse-cheerful, lively, impulsive, manipulative, friendly, self-reliant "
	},
	{
		name: 'sheep',
		image: 'assets/Sheep.png',
		description: "Sheep- good-natured, timid, emotional, pessimistic, mild, forgiving"
	},
	{
		name: 'monkey',
		image: 'assets/Monkey.png',
		description: "Monkey-successful, charming, crafty, can be dishonest, self-centered, inquisitive "
	},
	{
		name: 'rooster',
		image: 'assets/Rooster.png',
		description: "Rooster-conservative, aggressive, decisive, logical, can be overly critical"
	},
	{
		name: 'dog',
		image: 'assets/Dog.png',
		description: "Dog-clever, willing to help others, open-minded, practical, can be belligerent "
	},
	{
		name: 'pig',
		image: 'assets/Pig.png',
		description: "Pig-zhū brave, trustworthy, patient, diplomatic, can be hot-tempered"
	},
	
]

let zodiacAnimals = ['monkey','rooster','dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep'];

function getAnimalName(year) {
	if(year) {
		let animalIndex = year % 12;
		return zodiacAnimals[animalIndex];
	}
	
	return "";
}

function getAnimalInformation(animalName) {
	let index = 0;
	
	while(index < zodiacInfo.length) {
		if(animalName == zodiacInfo[index].name) {
			return zodiacInfo[index];
		}
		
		index ++;
	}
	
	return {}
}

function showZodiacInformation(animalName) {
	let $information = $('.information');
	
	$information.find('h2').text(animalName);
	
	let animalInformation = getAnimalInformation(animalName);
	$information.find('img').attr('src', animalInformation['image']);
	$information.find('p').text(animalInformation['description']);
}

$('.yearOfBirth').submit(function(event){
			
	let chosenYear = $('.yearValue').val();
	let animalName = getAnimalName(chosenYear);
	console.log(chosenYear);
	console.log(getAnimalName(chosenYear));
	showZodiacInformation(animalName);
	
	event.preventDefault();
});