import { audi_r8_images, bugatti_chiron_images, chevrolet_camaro_images, chevrolet_chevelle_ss_images, chevrolet_corvette_c7_zr1_images, dodge_challenger_hellcat_images, dodge_charger_daytona_images, dodge_demon_images, dodge_viper_images, ferrari_488_pista_images, ferrari_enzo_images, ferrari_f40_images, ferrari_laferrari_images, lamborghini_aventador_images, lamborghini_gallardo_images, lamborghini_revuelto_images, mclaren_650s_spider_images, mclaren_p1_images, nissan_gtr_nismo_images, pontiac_catalina_images, pontiac_firebird_images, porsche_911_turbo_images, porsche_911gt3_images, porsche_918_spyder_images } from "./images";
import { vehicle } from "./types";

const ferrari_f40: vehicle = {
    tag: 'ferrari-f40',
    manufacturer: 'Ferrari',
    model: 'F40',
    class: 'Sport',
    color: ['red', 'black', 'white'],
    price: 2500000,
    description: "The Ferrari F40 (Type F120) is a mid-engine, rear-wheel drive sports car engineered by Nicola Materazzi with styling by Pininfarina. It was built from 1987 until 1992, with the LM and GTE race car versions continuing production until 1994 and 1996 respectively. As the successor to the 288 GTO (also engineered by Materazzi), it was designed to celebrate Ferrari's 40th anniversary and was the last Ferrari automobile personally approved by Enzo Ferrari. At the time it was Ferrari's fastest, most powerful, and most expensive car for sale.",
    engine: '2.9 L V8',
    transmission: '5-speed manual',
    turbo: 'twin',
    hp: 471,
    rpm: 7000,
    mileage: 41441,
    top_speed: 367,
    images: ferrari_f40_images
}

const porsche_911_gt3: vehicle = {
    tag: 'porsche-911-gt3',
    manufacturer: 'Porsche',
    model: '911 GT3',
    class: 'Sport',
    color: ['red', 'blue', 'black', 'white', 'green'],
    price: 200000,
    description: "The Porsche 911 GT3 is a high-performance homologation model of the Porsche 911 sports car. It is a line of high-performance models, which began with the 1973 911 Carrera RS. The GT3 has had a successful racing career in the one-make national and regional Porsche Carrera Cup and GT3 Cup Challenge series, as well as the international Porsche Supercup supporting the FIA F1 World Championship.",
    engine: '3.6 L Flat-six',
    transmission: '6-speed manual',
    turbo: 'none',
    hp: 502,
    rpm: 8250,
    mileage: 56835,
    top_speed: 319,
    images: porsche_911gt3_images
}

const bugatti_chiron: vehicle = {
    tag: 'bugatti-chiron',
    manufacturer: 'Bugatti',
    model: 'Chiron',
    class: 'Super',
    color: ['red', 'sky', 'black', 'yellow', 'white'],
    price: 3300000,
    description: "The Bugatti Chiron is a mid-engine two-seater sports car designed and developed in Germany by Bugatti Engineering GmbH and manufactured in Molsheim, France, by French automobile manufacturer Bugatti Automobiles S.A.S. The successor to the Bugatti Veyron, the Chiron was first shown at the Geneva Motor Show on 1 March 2016. The car's design was initially previewed with the Bugatti Vision Gran Turismo concept car unveiled at the 2015 Frankfurt Auto Show.",
    engine: '8.0 L W-16',
    transmission: '7-speed automatic',
    turbo: 'quad',
    hp: 1500,
    rpm: 6700,
    mileage: 11526,
    top_speed: 440,
    images: bugatti_chiron_images
}

const lamborghini_aventador: vehicle = {
    tag: 'lamborghini-aventador',
    manufacturer: 'Lamborghini',
    model: 'Aventador',
    class: 'Super',
    color: ['black', 'blue', 'green', 'red', 'yellow'],
    price: 500000,
    description: "The Lamborghini Aventador is a mid-engine sports car that was produced by the Italian automotive manufacturer Lamborghini from 2011 until 2022. The Aventador’s namesake is a Spanish fighting bull that fought in Zaragoza, Aragón, in 1993. The Aventador was the successor to the Murciélago and was produced in Sant'Agata Bolognese, Italy.",
    engine: '6.5 L V-12',
    transmission: '7-speed auto/manual',
    turbo: 'none',
    hp: 769,
    rpm: 8500,
    mileage: 36891,
    top_speed: 350,
    images: lamborghini_aventador_images
}

const dodge_demon: vehicle = {
    tag: 'dodge-demon',
    manufacturer: 'Dodge',
    model: 'Demon',
    class: 'Muscle',
    color: ['black', 'blue', 'red'],
    price: 100000,
    description: "The Challenger SRT Demon is even mightier than the Hellcat version, boasting up to 840 horsepower and exclusive drag-racing equipment. Did we mention that it can do a wheelie, too? While the limited-edition Demon went out of production after the 2018 model year, it remains one of the coolest and craziest cars to ever wear a Dodge badge.",
    engine: '6.2 L V-8',
    transmission: '8-speed automatic',
    turbo: 'supercharger',
    hp: 808,
    rpm: 6500,
    mileage: 15287,
    top_speed: 243,
    images: dodge_demon_images
}

const audi_r8: vehicle = {
    tag: 'audi-r8',
    manufacturer: 'Audi',
    model: 'R8',
    class: 'Sport',
    color: ['white', 'blue', 'red', 'slate', 'yellow'],
    price: 200000,
    description: "The Audi R8 is a mid-engine, 2-seater sports car, which uses Audi's trademark quattro permanent all-wheel drive system. It was introduced by the German car manufacturer Audi AG in 2006. Production ended in the first quarter of 2024. The car is exclusively designed, developed, and manufactured by Audi AG's private subsidiary company manufacturing high performance automotive parts, Audi Sport GmbH (formerly quattro GmbH), and is based on the Lamborghini Gallardo and presently the Huracán platform.",
    engine: '5.2 L V-10',
    transmission: '7-speed automatic',
    turbo: 'twin',
    hp: 562,
    rpm: 8700,
    mileage: 62580,
    top_speed: 320,
    images: audi_r8_images
}

const chevrolet_corvette_c7_zr1: vehicle = {
    tag: 'chevrolet-corvette-c7-zr1',
    manufacturer: 'Chevrolet',
    model: 'Corvette C7 ZR1',
    class: 'Sport',
    color: ['white', 'blue', 'red', 'orange', 'yellow', 'black'],
    price: 170000,
    description: "The Chevrolet Corvette (C7) is the seventh generation of the Corvette sports car manufactured by American automobile manufacturer Chevrolet from 2014 until 2019. The first C7 Corvettes were delivered in the third quarter of 2013. The racing variants include the C7.R, which won the GTLM 24 Hours of Le Mans.",
    engine: '6.2 L V-8',
    transmission: '8-speed automatic',
    turbo: 'supercharger',
    hp: 755,
    rpm: 6400,
    mileage: 81253,
    top_speed: 341,
    images: chevrolet_corvette_c7_zr1_images
}

const dodge_viper: vehicle = {
    tag: 'dodge-viper',
    manufacturer: 'Dodge',
    model: 'Viper',
    class: 'Sport',
    color: ['white', 'blue', 'yellow', 'black'],
    price: 90000,
    description: "The Dodge Viper is a sports car that was manufactured by Dodge (by SRT for 2013 and 2014), a division of American car manufacturer Chrysler from 1992 until 2017, having taken a brief hiatus in 2007, and from 2010 to 2012. Production of the two-seat sports car began at New Mack Assembly Plant in 1991 and moved to Conner Avenue Assembly Plant in October 1995.",
    engine: '8.0 L V-10',
    transmission: '6-speed manual',
    turbo: 'none',
    hp: 645,
    rpm: 6200,
    mileage: 55556,
    top_speed: 332,
    images: dodge_viper_images
}

const ferrari_488_pista: vehicle = {
    tag: 'ferrari-488-pista',
    manufacturer: 'Ferrari',
    model: '488 Pista',
    class: 'Sport',
    color: ['red', 'blue', 'black'],
    price: 275000,
    description: "The Ferrari 488 (Type F142M) is a mid-engine sports car produced by the Italian automobile manufacturer Ferrari. The car replaced the 458, being the first mid-engine Ferrari to use a turbocharged V8 since the F40. It was succeeded by the Ferrari F8.",
    engine: '3.9 L V-8',
    transmission: '7-speed automatic',
    turbo: 'twin',
    hp: 710,
    rpm: 8000,
    mileage: 42683,
    top_speed: 340,
    images: ferrari_488_pista_images
}

const lamborghini_gallardo: vehicle = {
    tag: 'lamborghini-gallardo',
    manufacturer: "Lamborghini",
    model: "Gallardo",
    class: "Sport",
    color: ["yellow", "green", "blue", "orange"],
    price: 200000,
    description: "The Lamborghini Gallardo is a sports car built by the Italian automotive manufacturer Lamborghini from 2003 to 2013. It is Lamborghini's second car released under parent company Audi, and the best-selling model at the time with 14,022 built throughout its production run. Named after a famous breed of fighting bull, the V10 powered Gallardo has been Lamborghini's sales leader and stable-mate to a succession of V12 flagship models—first to the Murciélago (4,099 built between 2001 and 2010), then to the Aventador, being the first entry-level Lamborghini in one-and-half decades. On 25 November 2013, the last Gallardo was rolled off the production line. The Gallardo was replaced by the Huracán in 2014.",
    engine: "5.0 L V-10",
    transmission: "6-speed auto/manual",
    turbo: 'none',
    hp: 550,
    rpm: 8000,
    mileage: 77777,
    top_speed: 325,
    images: lamborghini_gallardo_images
}

const mclaren_650s_spider: vehicle = {
    tag: 'mclaren-650s-spider',
    manufacturer: "McLaren",
    model: "650S Spider",
    class: "Sport",
    color: ["white", "blue", "orange"],
    price: 280000,
    description: "The McLaren 650S is a British sports car designed and manufactured by British automobile manufacturer McLaren Automotive. It was announced in February 2014 as a new model, but based on the existing MP4-12C with 25% new parts, and was formally unveiled at the 2014 Geneva Motor Show.",
    engine: "3.8 L V-8",
    transmission: "7-speed automatic",
    turbo: 'twin',
    hp: 641,
    rpm: 7250,
    mileage: 56789,
    top_speed: 328,
    images: mclaren_650s_spider_images
}

const nissan_gtr_nismo: vehicle = {
    tag: 'nissan-gtr-nismo',
    manufacturer: "Nissan",
    model: "GT-R Nismo",
    class: "Sport",
    color: ["white", "black"],
    price: 210000,
    description: "The Nissan GT-R is a car built by Japanese marque Nissan since 2007. It has a 2+2 seating layout and is considered both a sports car and a grand tourer. The engine is front-mid mounted and drives all four wheels. It succeeds the Nissan Skyline GT-R, a faster variant of the Nissan Skyline. Although this model was the sixth-generation to bear the GT-R name, it is no longer part of the Skyline line-up. The car is built on the PM platform, derived from the FM platform used in the Skyline and Nissan Z models. Production is conducted in a shared production line at Nissan's Tochigi plant in Japan.",
    engine: "3.8 L V-6",
    transmission: "6-speed automatic",
    turbo: 'twin',
    hp: 600,
    rpm: 6800,
    mileage: 15951,
    top_speed: 330,
    images: nissan_gtr_nismo_images
}

const porsche_911_turbo: vehicle = {
    tag: 'porsche-911-turbo',
    manufacturer: "Porsche",
    model: "911 Turbo",
    class: "Sport",
    color: ["red", "green", "blue", "black", "white"],
    price: 180000,
    description: "The Porsche 911 Turbo is a turbocharged variant of the 911 model sports car manufactured by German automobile manufacturer Porsche between 1975 and 1989. It was the maker's top-of-the-range 911 model for its entire production duration and, at the time of its introduction, was the fastest production car available in Germany.",
    engine: "3.7 L Flat-6",
    transmission: "8-speed automatic",
    turbo: 'single',
    hp: 572,
    rpm: 6500,
    mileage: 132996,
    top_speed: 320,
    images: porsche_911_turbo_images
}

const mclaren_p1: vehicle = {
    tag: 'mclaren-p1',
    manufacturer: "McLaren",
    model: "P1",
    class: "Super",
    color: ["orange", 'yellow', 'black', 'blue'],
    price: 1500000,
    description: "The McLaren P1 is a flagship sports car produced by British marque McLaren Automotive. Styled by American car designer Frank Stephenson, it is the second installment in McLaren's Ultimate Series after the McLaren F1. Considered to be the spiritual successor to the F1, the P1 was one of the first high performance sports cars to be introduced incorporating hybrid technology; the Porsche 918 Spyder having begun taking orders the prior to the P1 and the LaFerrari introduced alongside it. First shown as a concept on the 20th anniversary of the F1 at the 2012 Paris Motor Show, the P1 made its debut at the 2013 Geneva International Motor Show.",
    engine: "3.8 L V-8 Hybrid",
    transmission: "7-speed automatic",
    turbo: 'twin',
    hp: 903,
    rpm: 7500,
    mileage: 11586,
    top_speed: 350,
    images: mclaren_p1_images
}

const ferrari_enzo: vehicle = {
    tag: 'ferrari-enzo',
    manufacturer: "Ferrari",
    model: "Enzo",
    class: "Super",
    color: ["red", "black", "white"],
    price: 2000000,
    description: "The Ferrari Enzo (Type F140), officially marketed as Enzo Ferrari, is a mid-engine sports car manufactured by Italian automobile manufacturer Ferrari and named after the company's founder, Enzo Ferrari. It was developed in 2002 using Formula One technology, such as a carbon-fibre body, F1-style automated-shift manual transmission, and carbon fibre-reinforced silicon carbide (C/SiC) ceramic composite disc brakes, as well as technologies not allowed in F1, such as active aerodynamics. The Enzo generates substantial amounts of downforce through its front underbody flaps, small adjustable rear spoiler and rear diffuser, which work in conjunction to produce 343 kilograms (756 lb) of downforce at 200 km/h (124 mph) and 775 kilograms (1,709 lb) of downforce at 300 km/h (186 mph), before decreasing to 585 kilograms (1,290 lb) at top speed.",
    engine: "6.0 L V-12",
    transmission: "6-speed auto/manual",
    turbo: 'none',
    hp: 651,
    rpm: 7800,
    mileage: 22358,
    top_speed: 350,
    images: ferrari_enzo_images
}

const porsche_918_spyder: vehicle = {
    tag: 'porshce-918-spyder',
    manufacturer: "Porsche",
    model: "918 Spyder",
    class: "Super",
    color: ['black', 'white', 'red'],
    price: 845000,
    description: "The Porsche 918 Spyder is a high performance sports car manufactured by German marque Porsche. The 918 Spyder is a plug-in hybrid powered by a mid-mounted naturally aspirated 4.6 L (4,593 cc) V8 engine, developing 447 kW (608 PS; 599 hp) at 8,700 RPM, with two electric motors delivering an additional 210 kW (286 PS; 282 hp) for a combined output of 652 kW (875 hp) and 1,280 N⋅m (944 lbf⋅ft) of torque. The 918 Spyder's 6.8 kWh lithium-ion battery pack delivers an all-electric range of 19 km (12 mi) under the US Environmental Protection Agency's five-cycle tests.",
    engine: "4.6 L V-8 hybrid",
    transmission: "7-speed automatic",
    turbo: 'none',
    hp: 887,
    rpm: 8500,
    mileage: 5689,
    top_speed: 214,
    images: porsche_918_spyder_images
}

const ferrari_laferrari: vehicle = {
    tag: 'ferrari-laferrari',
    manufacturer: "Ferrari",
    model: "LaFerrari",
    class: "Super",
    color: ['red', 'black'],
    price: 1400000,
    description: 'LaFerrari, project name F150, is a limited production mid-engine, mild hybrid sports car built by Italian automotive manufacturer Ferrari. LaFerrari means "The Ferrari" in Italian; this is intended to be the definitive Ferrari.',
    engine: "6.3 L V-12 hybrid",
    transmission: "7-speed automatic",
    turbo: 'none',
    hp: 950,
    rpm: 9000,
    mileage: 26895,
    top_speed: 350,
    images: ferrari_laferrari_images
}

const lamborghini_revuelto: vehicle = {
    tag: 'lamborghini-revuelto',
    manufacturer: "Lamborghini",
    model: "Revuelto",
    class: "Super",
    color: ['red', 'slate', 'yellow', 'white'],
    price: 600000,
    description: "The Lamborghini Revuelto is a mid-engine plug-in hybrid sports car produced by the Italian automobile manufacturer Lamborghini. It was officially unveiled on March 29, 2023 as a successor to the Aventador. The Revuelto’s namesake is a Spanish fighting bull that fought in the arena of Barcelona in the 1880s.",
    engine: "6.5 L V-12 Hybrid",
    transmission: "8-speed automatic",
    turbo: 'none',
    hp: 1001,
    rpm: 9250,
    mileage: 15547,
    top_speed: 350,
    images: lamborghini_revuelto_images
}

const chevrolet_chevelle_ss: vehicle = {
    tag: 'chevrolet-chevelle-ss',
    manufacturer: "Chevrolet",
    model: "Chevelle SS",
    class: "Muscle",
    color: ['black', 'red'],
    price: 100000,
    description: "The Chevelle Super Sport, or SS, represented Chevrolet's entry into the muscle car battle. In early 1964 and 1965, Chevelles had a Malibu SS badge on the rear quarter panel. Chevelles with the mid-1965 Z-16 option, priced at US$1,501 (~$14,512 in 2023) in 1965, had the emblem on the front fender as well as distinct in-house style numbers: 737 for the hardtop and 767 for the convertible.",
    engine: "6.5 L V-8",
    transmission: "4-speed manual",
    turbo: 'none',
    hp: 450,
    rpm: 5600,
    mileage: 162384,
    top_speed: 225,
    images: chevrolet_chevelle_ss_images
}

const chevrolet_camaro: vehicle = {
    tag: 'chevrolet-camaro',
    manufacturer: "Chevrolet",
    model: "Camaro",
    class: "Muscle",
    color: ['black', 'slate', 'yellow'],
    price: 40000,
    description: "The Chevrolet Camaro is a mid-size American automobile manufactured by Chevrolet, classified as a pony car. It first went on sale on September 29, 1966, for the 1967 model year and was designed to compete with the Ford Mustang. The Camaro shared its platform and major components with the Firebird, produced by General Motors' Pontiac division that was also introduced for the 1967 model year.",
    engine: "6.2 L V-8",
    transmission: "10-speed automatic",
    turbo: 'none',
    hp: 455,
    rpm: 6000,
    mileage: 124986,
    top_speed: 265,
    images: chevrolet_camaro_images
}

const dodge_charger_daytona: vehicle = {
    tag: 'dodge-charger-daytona',
    manufacturer: "Dodge",
    model: "Charger Daytona",
    class: "Muscle",
    color: ['red', 'orange', 'blue'],
    price: 350000,
    description: "Dodge produced three separate models with the name Dodge Charger Daytona, all of which were modified Dodge Chargers. The name was taken from Daytona Beach, Florida, which was an early center for auto racing and still hosts the Daytona 500, NASCAR's premier event. The original Dodge Charger Daytona was designed to beat the competition in NASCAR racing. It was the first NASCAR vehicle to reach 200 miles per hour, which was a major milestone at the time.",
    engine: "7.0 L V-8",
    transmission: "4-speed manual",
    turbo: 'none',
    hp: 425,
    rpm: 5000,
    mileage: 56879,
    top_speed: 300,
    images: dodge_charger_daytona_images
}

const dodge_challenger_hellcat: vehicle = {
    tag: 'dodge-challenger-hellcat',
    manufacturer: "Dodge",
    model: "Challenger Hellcat",
    class: "Muscle",
    color: ['red', 'white', 'blue', 'black'],
    price: 70000,
    description: "The Dodge Challenger Hellcat is a modern American muscle car that commands attention with its aggressive styling and formidable performance. Powered by a supercharged V8 engine, the Hellcat produces exhilarating horsepower, delivering raw, unbridled power to the rear wheels through a robust transmission. Its distinctive design pays homage to classic muscle car aesthetics while incorporating contemporary features and technologies for a thrilling driving experience. The Challenger Hellcat is not just a car; it's a symbol of relentless power and uncompromising performance, making it a favorite among enthusiasts seeking the ultimate thrill on both the road and the track.",
    engine: "6.2 L V-8",
    transmission: "8-speed automatic",
    turbo: 'supercharger',
    hp: 797,
    rpm: 6300,
    mileage: 23587,
    top_speed: 326,
    images: dodge_challenger_hellcat_images
}

const pontiac_firebird: vehicle = {
    tag: 'pontiac-firebird',
    manufacturer: "Pontiac",
    model: "Firebird",
    class: "Muscle",
    color: ['orange', 'slate', 'blue', 'black'],
    price: 50000,
    description: "The 1970 Pontiac Firebird represents a classic era of American muscle cars, renowned for its striking design and formidable performance. With its iconic split grille and aggressive stance, the Firebird exudes a blend of style and power that defined the muscle car culture of its time. Under the hood, it typically featured a range of potent V8 engines, offering impressive horsepower and torque that made it a standout performer on the streets and drag strips. Inside, the Firebird boasted a driver-focused cockpit with a sporty layout and amenities reflecting its era, providing both comfort and a sense of adventure. Its handling and ride were tuned to deliver a thrilling driving experience, whether cruising down the boulevard or pushing the limits on winding roads. The 1970 Pontiac Firebird remains a symbol of American automotive ingenuity and passion for performance, embodying the spirit of an era when muscle cars ruled the roads and captured the hearts of enthusiasts seeking both speed and style.",
    engine: "6.6 L V-8",
    transmission: "4-speed manual",
    turbo: 'none',
    hp: 330,
    rpm: 5500,
    mileage: 88889,
    top_speed: 212,
    images: pontiac_firebird_images
}

const pontiac_catalina: vehicle = {
    tag: 'pontiac-catalina',
    manufacturer: "Pontiac",
    model: "Catalina",
    class: "Muscle",
    color: ['red', 'black'],
    price: 30000,
    description: "The 1963 Pontiac Catalina embodies the essence of classic American full-size cars of its era, characterized by its sleek lines, spacious interior, and robust performance. As a flagship model in Pontiac's lineup, the Catalina offered a balance of comfort, style, and power that appealed to a wide range of drivers. Under the hood, the 1963 Catalina typically came equipped with Pontiac's powerful V8 engines, delivering ample horsepower and torque to provide a smooth and responsive driving experience. Its performance was complemented by advanced engineering for its time, including innovations in suspension and handling that enhanced both comfort and control. Overall, the 1963 Pontiac Catalina remains a beloved example of mid-century American automotive design and engineering, capturing the spirit of an era defined by style, performance, and the open road.",
    engine: "6.9 L V-8",
    transmission: "3-speed manual",
    turbo: 'none',
    hp: 370,
    rpm: 5200,
    mileage: 248963,
    top_speed: 212,
    images: pontiac_catalina_images
}

export const vehicles = [
    ferrari_f40,
    porsche_911_gt3,
    bugatti_chiron,
    lamborghini_aventador,
    dodge_demon,
    audi_r8,
    chevrolet_corvette_c7_zr1,
    dodge_viper,
    ferrari_488_pista,
    lamborghini_gallardo,
    mclaren_650s_spider,
    nissan_gtr_nismo,
    porsche_911_turbo,
    mclaren_p1,
    ferrari_enzo,
    porsche_918_spyder,
    ferrari_laferrari,
    lamborghini_revuelto,
    chevrolet_chevelle_ss,
    chevrolet_camaro,
    dodge_charger_daytona,
    dodge_challenger_hellcat,
    pontiac_firebird,
    pontiac_catalina
]