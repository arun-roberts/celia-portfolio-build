import React from 'react'

export default React.createContext({
    blogPosts: [
        {   img: {
                small: {
                    imgUrl: "https://www.dropbox.com/s/28he6g0hu7b49e6/YoghurtCakeS.JPG?raw=1",
                    imgWidth: 400,
                    imgHeight: 267
                },
                medium: {
                    imgUrl: "https://www.dropbox.com/s/wcz12h3oagtxrrr/YoghurtCakeM.JPG?raw=1",
                    imgWidth: 800,
                    imgHeight: 533
                },
                large: {
                    imgUrl: "https://www.dropbox.com/s/3w4a8h38yea7uxf/YoghurtCakeLGE.JPG?raw=1",
                    imgWidth: 2937,
                    imgHeight: 1958
                }
            },
            imgDescription: 'Lemon Yoghurt Cake with Pear Crisps',
            blogText: {
                heading: 'Lemon Yoghurt Cake with Pear Crisps',
                sectionHeadings: {
                    prepTime: 20,
                    cookTime: '1 hour for cake and 1 hour for crisps'
                },
                ingredients: {
                    main: [
                        '180g softened butter', 
                        '1 1/2 cups sugar', 
                        '2 teaspoons finely grated lemon zest', 
                        '3 eggs', 
                        '2 1/4 cups self raising flour', 
                        '280ml plain greek yogurt',
                        '2 teaspoons vanilla paste'
                    ]
                },
                extras: [
                    {title: 'Ingredients for Lemon icing', items: ['3 cups sifted icing sugar', '2 tablespoons lemon juice']},
                    {title: 'Ingredients for Pear Crisp garnish', items: ['1 firm corella pear', 'Juice of 1/2 a lemon']}
                ],
                method: [
                    'Preheat oven to 180°C.', 
                    'Grease a 2ltr capacity bunt or ring form with butter or cooking spray and dust with plain flour.',
                    'Cream butter and sugar in a mixer. With mixer on high speed, add zest and eggs one at a time and beat until mixture is pale and fluffy.',
                    'Turn down mixer to a slow speed and stir in the vanilla paste and then alternating spoonfuls of flour and yoghurt. Once  all ingredients are combined, turn mixer to a higher speed and beat until mixture is pale and creamy.',
                    'Spoon mixture into the prepared form.',
                    'Bake cake for approximately 1 hour or until a skewer comes out clean when tested.',
                    'Rest cake in pan for 5 minutes before turning out onto a wire rack to cool completely.',
                    'For the icing, mix together the icing sugar and lemon juice to form a thick paste and spoon over the top of the cake.'
                ],
                sides: [
                    {
                        title: 'Oven dried Pear Crisps:', 
                        method: [
                            'Preheat oven to 120°C. Cut the pear in half lengthways and starting with each cut slide, slice the pear into 2mm thin slices using a mandolin.',
                            'Dip the slices into lemon juice and arrange on a wire rack. Place rack in oven and dry out the slices for approximately 1 hour or until they feel dry and are starting to go crispy.',
                            'Cool completely before using to decorate the cake. Crisps can be stored in an airtight container for a few days.'
                        ]
                    }
                    
                ],
                serve: 'Spread hummus into a shallow bowl, drizzle with olive oil and top with garnishes and serve with pitta chips or warm bread.'
            },
            id: 3
        },
        {   img: {
                small: {
                    imgUrl: "https://www.dropbox.com/s/9o1sip44vkcoquw/BeetrootHummusRecipeS.jpg?raw=1",
                    imgWidth: 400,
                    imgHeight: 267
                },
                medium: {
                    imgUrl: "https://www.dropbox.com/s/msqgloeljc5nqg5/BeetrootHummusRecipeM.jpg?raw=1",
                    imgWidth: 800,
                    imgHeight: 533
                },
                large: {
                    imgUrl: "https://www.dropbox.com/s/67kk74uz35j2mi1/BeetrootHummusRecipeLGE.jpg?raw=1",
                    imgWidth: 2295,
                    imgHeight: 1531
                }
            },
            imgDescription: 'Beetroot & White Bean Hummus',
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
            img: {
                small: {
                    imgUrl: "https://www.dropbox.com/s/3gh5od1aow99gb5/ZucFrittersRecipe%20S.JPG?raw=1",
                    imgWidth: 400,
                    imgHeight: 267
                },
                medium: {
                    imgUrl: "https://www.dropbox.com/s/q8kkm3f4soaam4j/ZucFrittersRecipe%20M.JPG?raw=1",
                    imgWidth: 800,
                    imgHeight: 533
                },
                large: {
                    imgUrl: "https://www.dropbox.com/s/9t9wmozbr2n2wbj/ZucFrittersRecipe%20LGE.JPG?raw=1",
                    imgWidth: 2688,
                    imgHeight: 1792
                }
            },
            imgDescription: 'Zucchini Fritters',
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
            img: {
                small: {
                    imgUrl: "https://www.dropbox.com/s/9ocvmvybd4y8oau/ParsnipSoupRecipe%20S.jpg?raw=1",
                    imgWidth: 400,
                    imgHeight: 267
                },
                medium: {
                    imgUrl: "https://www.dropbox.com/s/czrtti0ct1qq4zb/ParsnipSoupRecipe%20M.jpg?raw=1",
                    imgWidth: 800,
                    imgHeight: 533
                },
                large: {
                    imgUrl: "https://www.dropbox.com/s/2mspsjkzju2szin/ParsnipSoupRecipe%20LGE.jpg?raw=1",
                    imgWidth: 2688,
                    imgHeight: 1792
                }
            },
            imgDescription: 'Parsnip Soup',
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