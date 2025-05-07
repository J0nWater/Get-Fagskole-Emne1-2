const model = {
    app: {
        activeTab: '',
        tabs: {
            recipes: 'recipes',
            addRecipe: 'addRecipe'
        },
        tempRecipes: [],
        selectedTag: null,
        tagActive: false,
        searchInput: ''
    },
    recipes: [
        {
            id: 1,
            title: 'Pannekaker',
            addedByUser: 1,
            ingredients: [
                '3 dl hvetemel',
                '4 egg',
                '6 dl melk',
                '1 ss sukker',
                '½ ts salt',
                'Smør til steking'
            ],
            instructions: [
                'Bland mel, sukker og salt i en bolle.',
                'Visp inn egg og tilsett gradvis melk mens du fortsetter å vispe.',
                'La røren hvile i 30 minutter.',
                'Smelt smør i en stekepanne og stek pannekakene på middels varme til de er gylne på begge sider.'
            ],
            tags: [
                'Frokost',
                'Enkel'
            ]           
        },
        {
            id: 2,
            title: 'Hjemmelaget Pizza',
            addedByUser: 1,
            ingredients: [
                '500g hvetemel',
                '1 pose tørrgjær',
                '3 dl lunkent vann',
                '2 ss olivenolje',
                '1 ts salt',
                '200g tomatsaus',
                '250g mozzarella',
                'Fyll etter eget ønske (pepperoni, sopp, paprika, osv.)'
            ],
            instructions: [
                'Bland mel, gjær og salt i en stor bolle.',
                'Tilsett vann og olivenolje, og elt til en smidig deig.',
                'La deigen heve tildekket i ca. 1 time.',
                'Kjevle ut deigen, legg på tomatsaus, ost og ønsket fyll.',
                'Stek pizzaen på 250°C i ca. 10-12 minutter.'
            ],
            tags: [
                'Middag',
                'Italiensk',
                'Familie'
            ]           
        },
        {
            id: 3,
            title: 'Kylling Curry',
            addedByUser: 2,
            ingredients: [
                '500g kyllingbryst, i biter',
                '2 ss vegetabilsk olje',
                '1 stor løk, finhakket',
                '3 fedd hvitløk, hakket',
                '1 ss ingefær, revet',
                '2 ss karripulver',
                '1 ts gurkemeie',
                '1 boks (400ml) kokosmelk',
                '2 ss tomatpuré',
                'Salt og pepper etter smak',
                'Frisk koriander til pynt',
                'Ris til servering'
            ],
            instructions: [
                'Varm olje i en stor panne på middels varme.',
                'Tilsett løk og stek til den er myk.',
                'Tilsett hvitløk og ingefær, stek i 1 minutt til det dufter.',
                'Tilsett kylling og stek til den er brunet på alle sider.',
                'Rør inn karripulver og gurkemeie, stek i 1 minutt.',
                'Tilsett kokosmelk og tomatpuré, bring til småkoking.',
                'Reduser varmen og la det småkoke i 15-20 minutter til kyllingen er gjennomstekt og sausen tykner.',
                'Smak til med salt og pepper.',
                'Pynt med frisk koriander og server med ris.'
            ],
            tags: [
                'Middag',
                'Indisk',
                'Sterk'
            ]           
        },
        {
            id: 4,
            title: 'Klassisk Cæsarsalat',
            addedByUser: 3,
            ingredients: [
                '1 stort romanosalathode, hakket',
                '100g krutonger',
                '50g parmesanost, i flak',
                '2 fedd hvitløk, hakket',
                '2 ansjosfilleter, hakket (valgfritt)',
                '1 eggeplomme',
                '1 ss dijonsennep',
                '2 ss sitronsaft',
                '120ml olivenolje',
                'Salt og svart pepper etter smak'
            ],
            instructions: [
                'For dressingen, visp sammen hvitløk, ansjos, eggeplomme, sennep og sitronsaft.',
                'Hell i olivenoljen i en tynn stråle mens du visper kontinuerlig for å emulgere.',
                'Smak til med salt og pepper.',
                'I en stor bolle, vend salaten med nok dressing til å dekke.',
                'Tilsett krutonger og vend forsiktig.',
                'Topp med parmesanflak og server umiddelbart.'
            ],
            tags: [
                'Salat',
                'Lunsj',
                'Vegetarisk'
            ]           
        },
        {
            id: 5,
            title: 'Sjokoladekjeks',
            addedByUser: 1,
            ingredients: [
                '225g smør, myknet',
                '200g hvitt sukker',
                '200g brunt sukker',
                '2 store egg',
                '1 ts vaniljeekstrakt',
                '350g hvetemel',
                '1 ts bakepulver',
                '½ ts salt',
                '300g sjokoladebiter',
                '100g hakkede nøtter (valgfritt)'
            ],
            instructions: [
                'Forvarm ovnen til 190°C.',
                'I en stor bolle, rør sammen smør, hvitt sukker og brunt sukker til det er glatt.',
                'Rør inn eggene ett om gangen, deretter vanilje.',
                'I en separat bolle, bland mel, bakepulver og salt. Rør gradvis inn i smørblandingen.',
                'Vend inn sjokoladebiter og nøtter hvis du bruker det.',
                'Plasser avrundede spiseskjeer med deig på stekebrett uten fett.',
                'Stek i 9-11 minutter eller til gyllenbrune.',
                'La kjeksene avkjøles på stekebrettet i 2 minutter før du flytter dem til et avkjølingsrist.'
            ],
            tags: [
                'Dessert',
                'Baking',
                'Søtt'
            ]           
        },
        {
            id: 6,
            title: 'Biff Wok',
            addedByUser: 2,
            ingredients: [
                '500g biffkjøtt, tynt skåret',
                '2 ss vegetabilsk olje',
                '1 rød paprika, i strimler',
                '1 gul paprika, i strimler',
                '1 brokkoli, delt i buketter',
                '2 gulrøtter, julienne',
                '3 fedd hvitløk, hakket',
                '1 ss ingefær, revet',
                '3 ss soyasaus',
                '1 ss østerssaus',
                '1 ts sesamolje',
                '1 ss maisenna blandet med 2 ss vann',
                'Vårløk til pynt',
                'Ris til servering'
            ],
            instructions: [
                'Varm 1 ss olje i en wok eller stor stekepanne på høy varme.',
                'Tilsett biffkjøttet og wok i 2-3 minutter til det er brunet. Ta ut og sett til side.',
                'Tilsett resten av oljen i woken. Tilsett grønnsaker og stek i 3-4 minutter til de er sprø-møre.',
                'Tilsett hvitløk og ingefær, stek i 30 sekunder til det dufter.',
                'Ha kjøttet tilbake i woken. Tilsett soyasaus og østerssaus.',
                'Hell i maisennamiksen og kok, under omrøring, til sausen tykner.',
                'Drypp med sesamolje og bland godt.',
                'Pynt med vårløk og server over ris.'
            ],
            tags: [
                'Middag',
                'Asiatisk',
                'Rask'
            ]           
        },
        {
            id: 7,
            title: 'Guacamole',
            addedByUser: 3,
            ingredients: [
                '3 modne avokadoer',
                '1 lime, presset',
                '1 liten rødløk, finhakket',
                '2 tomater, i terninger',
                '2 ss frisk koriander, hakket',
                '1 jalapeño, uten frø og finhakket',
                '1 fedd hvitløk, hakket',
                'Salt og pepper etter smak',
                'Tortillachips til servering'
            ],
            instructions: [
                'Del avokadoene i to, fjern steinene og skrap kjøttet ut i en bolle.',
                'Mos avokadoene med en gaffel, men la det være litt klumpete.',
                'Tilsett limesaft og bland forsiktig.',
                'Vend inn løk, tomater, koriander, jalapeño og hvitløk.',
                'Smak til med salt og pepper.',
                'Dekk med plastfolie presset direkte på overflaten for å hindre bruning.',
                'Avkjøl i minst 30 minutter før servering.',
                'Server med tortillachips.'
            ],
            tags: [
                'Forrett',
                'Meksikansk',
                'Vegetarisk',
                'Vegansk'
            ]           
        },
        {
            id: 8,
            title: 'Bærsmootie Bowl',
            addedByUser: 2,
            ingredients: [
                '2 frosne bananer',
                '200g frosne bær (jordbær, blåbær, bringebær)',
                '120ml mandelmelk',
                '1 ss honning eller lønnesirup',
                'Topping: ferske bær, granola, chiafrø, mandler i skiver, kokosfill'
            ],
            instructions: [
                'Ha frosne bananer, frosne bær, mandelmelk og søtningsmiddel i en blender.',
                'Kjør til det blir jevnt, tilsett mer mandelmelk om nødvendig for å oppnå ønsket konsistens.',
                'Hell i en bolle.',
                'Pynt med toppingen på en dekorativ måte.',
                'Server umiddelbart.'
            ],
            tags: [
                'Frokost',
                'Sunn',
                'Vegansk',
                'Glutenfri'
            ]           
        }
    ],
    users: [
        {
            id: 1,
            name: 'Dag'
        },
        {
            id: 2,
            name: 'Emma'
        },
        {
            id: 3,
            name: 'Michael'
        }
    ],
}