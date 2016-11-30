// ===========================================
// Part 1: Declare object and create instances
// ===========================================
// Declare constructor City
function City(cityName, avatar, description) {
    this.cityName = cityName;
    this.avatar = avatar;
    this.description = description;
    this.source = '<li>' + this.cityName + '</li>';
}
// Instantiate instances
var cities = [];

cities.push(new City('Nanjing', 'nanjing.png', '(Wikipedia) Capital of China\'s eastern Jiangsu province and the second largest city in the east China region with a total population of over 8 million. Situated in the heartland of the Yangtze River Delta, it is roughly 300 km up the Yangtze River from Shanghai. Many monuments and landmarks remain, including Zhonghuamen (Gate of China), a preserved 14th-century section of the massive wall that contained the old city\'s southern entrance.'));

cities.push(new City('Heidelberg', 'heidelberg.png', '(Wikipedia) A town on the Neckar River in southwestern Germany, known for its distinguished 14th-century university. Built, destroyed and partially restored over several centuries, red-sandstone Heidelberg Castle stands beside the river on Königstuhl hill.'));

cities.push(new City('Málaga', 'malaga.png', '(Wikipedia) The southernmost large city in Europe, it lies on the Costa del Sol (Coast of the Sun) of the Mediterranean. Málaga\'s history spans about 2,800 years, making it one of the oldest cities in the world.'));

cities.push(new City('Rome', 'rome.png', '(Wikipedia) Ranked in 2014 as the 14th-most-visited city in the world, 3rd most visited in the European Union, and the most popular tourist attraction in Italy. Monuments and museums such as the Vatican Museums and the Colosseum are among the world\'s most visited tourist destinations with both locations receiving millions of tourists a year'));

cities.push(new City('Prague', 'prague.png', '(Wikipedia) Nicknamed "the City of a Hundred Spires", it is the capital and largest city of the Czech Republic. It is the 14th largest city in the European Union. Completed in 1402, pedestrian Charles Bridge is lined with 30 statues of saints.'));

cities.push(new City('Vienna', 'vienna.png', '(Wikipedia) Apart from being regarded as the City of Music, it is the capital and largest city of Austria. Until the beginning of the 20th century, it was the largest German-speaking city in the world.'));