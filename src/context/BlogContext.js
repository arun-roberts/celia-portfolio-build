import React from 'react'

export default React.createContext({
    blogPosts: [
        {
            imgUrl: "https://www.dropbox.com/s/7in21luz80daxpu/BeetrootHummusRecipe%20copy.jpg?raw=1",
            imgDescription: 'Beetroot & White Bean Hummus',
            imgWidth: '2295',
            imgHeight: '2918',
            blogText: { 
                heading: 'Beetroot & White Bean Hummus',
                sectionHeadings: {
                    prepTime: 10,
                },
                ingredients: {
                    main: [
                        '100g cooked beetroot, roughly chopped', 
                        '1 can white beans, drained and rinsed', 
                        '1 clove garlic, crushed', 
                        '2 tablespoons tahini', 
                        '2-4 tablespoons lemon juice', 
                        'Salt & pepper'
                    ]
                },
                extras: [
                    {title: 'To Garnish', items: ['Sprigs of mint']},
                    {title: 'To Serve', items: ['Crackers / bread']}
                ],
                method: [
                    'Place beetroot, beans, garlic, tahini and 2 tablespoons of lemon juice in a food processor and blend until smooth - add more lemon juice or water to achieve a smooth paste consistency.', 
                    'Season with salt and pepper.'
                ],
                serve: 'Spread hummus into a shallow bowl, drizzle with olive oil and top with garnishes and serve with pitta chips or warm bread.'
            },
            id: 2
        },
        {
            imgUrl: "https://www.dropbox.com/s/ri83miaeg5i36ar/ZucFrittersRecipe%20copy.JPG?raw=1",
            imgDescription: 'Zucchini Fritters',
            imgWidth: '2688',
            imgHeight: '4032',
            blogText: { 
                heading: 'Pea & Zucchini Fritters',
                subheading: 'with Avocado & Feta Whip',
                sectionHeadings: {
                    prepTime: 15,
                    cookTime: 15,
                    serves: '4',
                    side: 'Whip',
                },
                ingredients: {
                    main: ['2 cups frozen baby peas', '2 small zucchinis, grated', '1/2 cup roughly chopped mint', '80g parmesan, grated', '1 red chilli, finely chopped (optional)', '1/2 cup self raising flour', '2 large eggs, lightly beaten', 'Salt & pepper to taste', 'Olive oil for frying'],
                },
                extras: [
                    {title: 'Ingredients for Whip', items: ['1 large or 2 smaller avocados', '100g Danish feta']},
                    {title: 'To Garnish', items: ['Sprigs of mint']}
                ],
                method: [
                    'Place frozen peas into a saucepan and pour over enough boiling water to cover, let stand for a few minutes until the peas are bright green. Strain and then pulse blitz the peas in a food processor just until they are smashed up and some remain whole.', 
                    'In a bowl, gently mix together the smashed peas and the rest of the fritter ingredients until combined.', 
                    'Heat a light drizzle of olive oil in a non-stick pan on medium-high heat and place 1/4 cupfuls of the fritter mixture into the hot pan. Gently flatten and round each mound of mixture. Cook for 1-2 minutes on each side or until just golden. Repeat with any remaining mixture.', 
                    'For the whip - add the avocado flesh and crumbled feta to a small food processing bowl and blitz until smooth (add a little lemon juice if needed)'
                ],
                serve: 'Serve the fritters warm with a dollop of whip and extra sprigs of mint.'
            },
            id: 1
        },
        {
            imgUrl: "https://www.dropbox.com/s/3hdm9844tlhz7fk/ParsnipSoupRecipe%20copy.jpg?raw=1",
            imgDescription: 'Parsnip Soup',
            imgWidth: '4032',
            imgHeight: '2688',
            blogText: { 
                heading: 'Parsnip, Ginger & Turmeric Soup',
                sectionHeadings: {
                    prepTime: 15,
                    cookTime: 20,
                    serves: '3-4',
                    side: 'Parsnip Chips',
                },
                ingredients: {
                    main: ['1 tablespoon olive oil', '1 brown onion, roughly chopped', '800g parsnips, peeled and roughly chopped', '100g yellow cherry tomatoes', '1/2 teaspoon red chilli flakes (optional)', '50g fresh ginger, finely grated', '30g fresh turmeric, finely grated', '2 heaped teaspoons white miso paste', '1/2 cup coconut cream', 'Salt to taste'],
                },
                extras: [
                    {title: 'Ingredients for Parsnip Chips', items: ['1 small parsnip, skin on and peeled into thin lengths using a vegetable peeler', 'Oil for deep frying', 'Sea salt flakes']}
                ],
                method: [
                    'Heat olive oil in a saucepan over medium heat. Add onion and cook until soft.', 
                    'Add parsnips and chilli and cook stirring for 2 minutes. Add tomatoes, turmeric and ginger and cook a further minute.', 
                    'Add the miso paste and enough water to cover the parsnips. Bring to the boil, cover and cook until parsnips are tender.', 
                    'Remove from heat and leave to cool down and then use a stick blender to blend soup until smooth, add water if needed to achieve desired consistency.',
                    'Return soup to heat gently on a low heat and stir through the coconut cream.',
                    'Season to taste.',
                    'For the parsnip chips, heat oil in saucepan to 160oC. Add parsnip chips in small batches and fry until golden. Drain on absorbent paper and sprinkle with salt flakes.'
                ],
                serve: 'Serve warmed soup topped with parsnip chips'
            },
            id: 0
        },
        
    ]
})