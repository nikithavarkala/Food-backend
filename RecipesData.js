// const data=[
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c49964b969c1ab4c10819b9108d4968e",
//             "label": "Grilled Chicken With Lemon Basil Pasta",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/815/815cbc27aaa895218d47f83e0f934b23.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=91d4087d8c696e72006a27d6fb65c39b998945f8fe9fe5820178a4b7c0f9b43b",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/815/815cbc27aaa895218d47f83e0f934b23-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=878ea28bb3267859a1f18d44a72043b8f78e677538884fa9911d9a4a07ff1e93",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/815/815cbc27aaa895218d47f83e0f934b23-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b39bb2b90a86d70850219ceae427d5b3098d7200aad4ff05d5993c75e51923d9",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/815/815cbc27aaa895218d47f83e0f934b23.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=56f5ab803c3b68ba486ec0e3ec32739cf062d8331b32e242815f9ff640feb97a",
//                     "width": 300,
//                     "height": 300
//                 },
//                 "LARGE": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/815/815cbc27aaa895218d47f83e0f934b23-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=91280b8c30c93cd8611d381d6d76cb1d7c31410d1fa51752b9f93f6623733273",
//                     "width": 600,
//                     "height": 600
//                 }
//             },
//             "source": "Pioneer Woman",
//             "url": "http://thepioneerwoman.com/cooking/2010/07/grilled-chicken-with-lemon-basil-pasta",
//             "shareAs": "http://www.edamam.com/recipe/grilled-chicken-with-lemon-basil-pasta-c49964b969c1ab4c10819b9108d4968e/grilled+chicken",
//             "yield": 8,
//             "dietLabels": [],
//             "healthLabels": [
//                 "Sugar-Conscious",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free"
//             ],
//             "cautions": [
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "4 whole Grilled Chicken Breasts, Sliced",
//                 "1 lb Penne Pasta, Cooked Until Al Dente",
//                 "1/2 stick Butter",
//                 "3 whole Lemons, Juiced",
//                 "3/4 cup Heavy Cream",
//                 "1/4 cup Half and Half",
//                 "1 1/2 cup Grated Parmesan Cheese",
//                 "Salt and Freshly Ground Black Pepper",
//                 "20 whole Basil Leaves, Chopped"
//             ],
//             "ingredients": [
//                 {
//                     "text": "4 whole Grilled Chicken Breasts, Sliced",
//                     "quantity": 4,
//                     "measure": "<unit>",
//                     "food": "Grilled Chicken Breasts",
//                     "weight": 208,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bncmum7a55r0byaf6mm9xbnk39my",
//                     "image": "https://www.edamam.com/food-img/44c/44c95571e5b3071f266e0e742e670585.jpg"
//                 },
//                 {
//                     "text": "1 lb Penne Pasta, Cooked Until Al Dente",
//                     "quantity": 1,
//                     "measure": "pound",
//                     "food": "Pasta",
//                     "weight": 453.59237,
//                     "foodCategory": "grains",
//                     "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
//                     "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
//                 },
//                 {
//                     "text": "1/2 stick Butter",
//                     "quantity": 0.5,
//                     "measure": "stick",
//                     "food": "Butter",
//                     "weight": 56.5,
//                     "foodCategory": "Dairy",
//                     "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
//                     "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
//                 },
//                 {
//                     "text": "3 whole Lemons, Juiced",
//                     "quantity": 3,
//                     "measure": "<unit>",
//                     "food": "Lemons",
//                     "weight": 252,
//                     "foodCategory": "fruit",
//                     "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
//                     "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
//                 },
//                 {
//                     "text": "3/4 cup Heavy Cream",
//                     "quantity": 0.75,
//                     "measure": "cup",
//                     "food": "Heavy Cream",
//                     "weight": 178.5,
//                     "foodCategory": "Dairy",
//                     "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
//                     "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
//                 },
//                 {
//                     "text": "1/4 cup Half and Half",
//                     "quantity": 0.25,
//                     "measure": "cup",
//                     "food": "Half and Half",
//                     "weight": 60.5,
//                     "foodCategory": "Dairy",
//                     "foodId": "food_bhxfjwwbw6wqyjaxv9zugbqayb0p",
//                     "image": "https://www.edamam.com/food-img/8f6/8f6397fd80a05aa12ee3b990737388a5.jpg"
//                 },
//                 {
//                     "text": "1 1/2 cup Grated Parmesan Cheese",
//                     "quantity": 1.5,
//                     "measure": "cup",
//                     "food": "Parmesan Cheese",
//                     "weight": 223.05937500000002,
//                     "foodCategory": "Cheese",
//                     "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
//                     "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
//                 },
//                 {
//                     "text": "Salt and Freshly Ground Black Pepper",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "Salt",
//                     "weight": 8.65291047,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
//                     "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
//                 },
//                 {
//                     "text": "Salt and Freshly Ground Black Pepper",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "Black Pepper",
//                     "weight": 4.326455235,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
//                     "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
//                 },
//                 {
//                     "text": "20 whole Basil Leaves, Chopped",
//                     "quantity": 20,
//                     "measure": "leaf",
//                     "food": "Basil",
//                     "weight": 10,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
//                     "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
//                 }
//             ],
//             "calories": 4077.9198453398503,
//             "totalCO2Emissions": 15948.189964520368,
//             "co2EmissionsClass": "F",
//             "totalWeight": 1447.6454674175657,
//             "totalTime": 0,
//             "cuisineType": [
//                 "italian"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "main course"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 4077.9198453398503,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 188.21823097766102,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 110.3732060926665,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 2.49412,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 51.67050045688665,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 10.5736968337953,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 380.1050659044,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 357.279516889945,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 22.825549014455003,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 26.458720905004,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 214.46395264244,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 672.835375,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 3363.756125082488,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 3057.3263635148655,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 452.5149922236756,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 2447.0958461001055,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 12.361988470020968,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 15.609837313979067,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 3106.8824410713,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 1683.0810491634504,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 136.9755,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 0.8063738609037999,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 1.7877801664230002,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 37.40699778592901,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 2.419195181383851,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 151.48628023995005,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 151.48628023995005,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 3.8805125000000005,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 4.179296875,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 5.158527366444001,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 63.9184883304,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 642.5910985687402,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 203.89599226699252,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 289.56650919640157,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 551.8660304633325,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 126.7016886348,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 91.30219605782003,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 428.92790528488,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 224.27845833333336,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 140.1565052117703,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 305.7326363514866,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 107.74166481516087,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 52.065869065959696,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 68.67771372233871,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 141.90761194526425,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 443.8403487244714,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 187.0090054626056,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 152.19500000000002,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 67.19782174198333,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 137.5215512633077,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 233.7937361620563,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 186.09193702952697,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 37.87157005998751,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 161.68802083333335,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 27.86197916666667,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 34.39018244296001,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 53.265406942000006,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 188.21823097766102,
//                     "hasRDI": true,
//                     "daily": 289.56650919640157,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 110.3732060926665,
//                             "hasRDI": true,
//                             "daily": 551.8660304633325,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 2.49412,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 51.67050045688665,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 10.5736968337953,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 380.1050659044,
//                     "hasRDI": true,
//                     "daily": 126.7016886348,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 357.279516889945,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 22.825549014455003,
//                             "hasRDI": true,
//                             "daily": 91.30219605782003,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 26.458720905004,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 214.46395264244,
//                     "hasRDI": true,
//                     "daily": 428.92790528488,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 672.835375,
//                     "hasRDI": true,
//                     "daily": 224.27845833333336,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 3363.756125082488,
//                     "hasRDI": true,
//                     "daily": 140.1565052117703,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 3057.3263635148655,
//                     "hasRDI": true,
//                     "daily": 305.7326363514866,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 452.5149922236756,
//                     "hasRDI": true,
//                     "daily": 107.74166481516087,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 2447.0958461001055,
//                     "hasRDI": true,
//                     "daily": 52.065869065959696,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 12.361988470020968,
//                     "hasRDI": true,
//                     "daily": 68.67771372233871,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 15.609837313979067,
//                     "hasRDI": true,
//                     "daily": 141.90761194526425,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 3106.8824410713,
//                     "hasRDI": true,
//                     "daily": 443.8403487244714,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 1683.0810491634504,
//                     "hasRDI": true,
//                     "daily": 187.0090054626056,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 136.9755,
//                     "hasRDI": true,
//                     "daily": 152.19500000000002,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 0.8063738609037999,
//                     "hasRDI": true,
//                     "daily": 67.19782174198333,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 1.7877801664230002,
//                     "hasRDI": true,
//                     "daily": 137.5215512633077,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 37.40699778592901,
//                     "hasRDI": true,
//                     "daily": 233.7937361620563,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 2.419195181383851,
//                     "hasRDI": true,
//                     "daily": 186.09193702952697,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 151.48628023995005,
//                     "hasRDI": true,
//                     "daily": 37.87157005998751,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 151.48628023995005,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 3.8805125000000005,
//                     "hasRDI": true,
//                     "daily": 161.68802083333335,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 4.179296875,
//                     "hasRDI": true,
//                     "daily": 27.86197916666667,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 5.158527366444001,
//                     "hasRDI": true,
//                     "daily": 34.39018244296001,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 63.9184883304,
//                     "hasRDI": true,
//                     "daily": 53.265406942000006,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 642.5910985687402,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/c49964b969c1ab4c10819b9108d4968e?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_807650f42b7fb9d7244f264beed2f632",
//             "label": "Grilled Chicken and Cabbage Salad With Creamy Tahini Dressing Recipe",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c03/c038904fbae133bd9fadd65304e0f22b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d7100b6122ed78f70219e1686fc094f1adbfe904201820a90428d50570394df2",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c03/c038904fbae133bd9fadd65304e0f22b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=099ed2870da22be11b4c7246fbaf171c20e26b3064e044045a5dd2367195cf8b",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c03/c038904fbae133bd9fadd65304e0f22b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=35455a85f785fb3172c22ddcdfa1d9073a7a4cff1538575854f10cd03b4521ef",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c03/c038904fbae133bd9fadd65304e0f22b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d7100b6122ed78f70219e1686fc094f1adbfe904201820a90428d50570394df2",
//                     "width": 300,
//                     "height": 300
//                 },
//                 "LARGE": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c03/c038904fbae133bd9fadd65304e0f22b-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a708d5be3da6c67ebb5727263e2a60881cb5e5c993bf24f183e8706475971530",
//                     "width": 600,
//                     "height": 600
//                 }
//             },
//             "source": "Serious Eats",
//             "url": "http://www.seriouseats.com/recipes/2015/08/grilled-chicken-and-cabbage-salad-recipe.html",
//             "shareAs": "http://www.edamam.com/recipe/grilled-chicken-and-cabbage-salad-with-creamy-tahini-dressing-recipe-807650f42b7fb9d7244f264beed2f632/grilled+chicken",
//             "yield": 4,
//             "dietLabels": [
//                 "High-Fiber",
//                 "Low-Carb"
//             ],
//             "healthLabels": [
//                 "Paleo",
//                 "Mediterranean",
//                 "DASH",
//                 "Dairy-Free",
//                 "Gluten-Free",
//                 "Wheat-Free",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free",
//                 "Kosher",
//                 "Immuno-Supportive"
//             ],
//             "cautions": [
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "3/4 pound leftover grilled chicken breasts (about 2 breasts) or 3/4 pound picked cooked rotisserie chicken meat, shredded",
//                 "5 tablespoons extra-virgin olive oil, divided",
//                 "3 tablespoons fresh juice from 2 lemons, divided",
//                 "4 medium cloves garlic, finely minced (about 4 teaspoons), divided",
//                 "Kosher salt and freshly ground black pepper",
//                 "3/4 pound finely shredded red cabbage (about 1/2 head)",
//                 "1 small red onion, thinly sliced",
//                 "1/3 cup tahini paste",
//                 "1/2 cup roughly chopped fresh mint leaves",
//                 "1/2 cup roughly chopped fresh parsley leaves",
//                 "1/2 cup roughly chopped fresh cilantro leaves",
//                 "1 tablespoon roasted sesame seeds"
//             ],
//             "ingredients": [
//                 {
//                     "text": "3/4 pound leftover grilled chicken breasts (about 2 breasts) or 3/4 pound picked cooked rotisserie chicken meat, shredded",
//                     "quantity": 2,
//                     "measure": "breast",
//                     "food": "grilled chicken breasts",
//                     "weight": 344,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bncmum7a55r0byaf6mm9xbnk39my",
//                     "image": "https://www.edamam.com/food-img/44c/44c95571e5b3071f266e0e742e670585.jpg"
//                 },
//                 {
//                     "text": "5 tablespoons extra-virgin olive oil, divided",
//                     "quantity": 5,
//                     "measure": "tablespoon",
//                     "food": "extra-virgin olive oil",
//                     "weight": 67.5,
//                     "foodCategory": "Oils",
//                     "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
//                     "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
//                 },
//                 {
//                     "text": "3 tablespoons fresh juice from 2 lemons, divided",
//                     "quantity": 3,
//                     "measure": "tablespoon",
//                     "food": "lemons",
//                     "weight": 39.749999999327954,
//                     "foodCategory": "fruit",
//                     "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
//                     "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
//                 },
//                 {
//                     "text": "4 medium cloves garlic, finely minced (about 4 teaspoons), divided",
//                     "quantity": 4,
//                     "measure": "teaspoon",
//                     "food": "garlic",
//                     "weight": 11.2,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
//                     "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
//                 },
//                 {
//                     "text": "Kosher salt and freshly ground black pepper",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "Kosher salt",
//                     "weight": 6.732500000008709,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
//                     "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
//                 },
//                 {
//                     "text": "Kosher salt and freshly ground black pepper",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "black pepper",
//                     "weight": 3.3662500000043547,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
//                     "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
//                 },
//                 {
//                     "text": "3/4 pound finely shredded red cabbage (about 1/2 head)",
//                     "quantity": 0.5,
//                     "measure": "head",
//                     "food": "red cabbage",
//                     "weight": 417.0333333333333,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_as6y3qxbhlnjdbbt1z5xkb0ghgne",
//                     "image": "https://www.edamam.com/food-img/222/2227613966b545ff65df7c8c4b311fc1.jpg"
//                 },
//                 {
//                     "text": "1 small red onion, thinly sliced",
//                     "quantity": 1,
//                     "measure": "<unit>",
//                     "food": "red onion",
//                     "weight": 70,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
//                     "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
//                 },
//                 {
//                     "text": "1/3 cup tahini paste",
//                     "quantity": 0.3333333333333333,
//                     "measure": "cup",
//                     "food": "tahini",
//                     "weight": 80.00000000135256,
//                     "foodCategory": "plant-based protein",
//                     "foodId": "food_aa88tarawf1yl0bu5w3csaucrnx2",
//                     "image": "https://www.edamam.com/food-img/eed/eed4bb62c2763575b73a8f05963073fb.jpg"
//                 },
//                 {
//                     "text": "1/2 cup roughly chopped fresh mint leaves",
//                     "quantity": 0.5,
//                     "measure": "cup",
//                     "food": "mint leaves",
//                     "weight": 45.60000000077095,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_bxl4xoga4owdkeay51sy8anesxj5",
//                     "image": "https://www.edamam.com/food-img/7f0/7f01cc4f71c5c6ad31051ed74b9c058b.jpg"
//                 },
//                 {
//                     "text": "1/2 cup roughly chopped fresh parsley leaves",
//                     "quantity": 0.5,
//                     "measure": "cup",
//                     "food": "parsley",
//                     "weight": 30,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
//                     "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
//                 },
//                 {
//                     "text": "1/2 cup roughly chopped fresh cilantro leaves",
//                     "quantity": 0.5,
//                     "measure": "cup",
//                     "food": "cilantro leaves",
//                     "weight": 8,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
//                     "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
//                 },
//                 {
//                     "text": "1 tablespoon roasted sesame seeds",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "sesame seeds",
//                     "weight": 9,
//                     "foodCategory": "plant-based protein",
//                     "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
//                     "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
//                 }
//             ],
//             "calories": 1918.5191208415367,
//             "totalCO2Emissions": 5306.467507280886,
//             "co2EmissionsClass": "F",
//             "totalWeight": 1130.901591703479,
//             "totalTime": 15,
//             "cuisineType": [
//                 "mediterranean"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "salad"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 1918.5191208415367,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 128.92752308406477,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 19.75685437510312,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 71.68412508777472,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 31.240751341988354,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 71.93321666695839,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 46.968855416797894,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 24.964361250160497,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 20.811270666656522,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 132.627876666915,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 292.4,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 2617.2104970533856,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 868.9219695156262,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 338.6741409187445,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 2931.9282856777554,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 24.11462116949253,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 9.927293716772562,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 1649.3546750102626,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 503.7130541682667,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 315.57569999974635,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 1.6957548833501719,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 1.2479322500076204,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 54.78981258341374,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 3.5013434541693753,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 292.97676250206183,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 292.97676250206183,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 1.1696,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.34400000000000003,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 11.872630666669085,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 723.7647833333403,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 781.954218600174,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 95.92595604207683,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 198.3500355139458,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 98.7842718755156,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 23.977738888986128,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 99.85744500064199,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 265.25575333383,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 97.46666666666665,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 109.0504373772244,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 86.89219695156262,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 80.6367002187487,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 62.381452886760755,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 133.97011760829184,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 90.24812469793238,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 235.62209643003752,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 55.96811712980741,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 350.63966666638487,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 141.31290694584766,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 95.99478846212465,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 342.4363286463359,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 269.3341118591827,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 73.24419062551546,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 48.733333333333334,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 2.293333333333334,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 79.15087111112724,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 603.1373194444502,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 128.92752308406477,
//                     "hasRDI": true,
//                     "daily": 198.3500355139458,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 19.75685437510312,
//                             "hasRDI": true,
//                             "daily": 98.7842718755156,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 71.68412508777472,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 31.240751341988354,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 71.93321666695839,
//                     "hasRDI": true,
//                     "daily": 23.977738888986128,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 46.968855416797894,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 24.964361250160497,
//                             "hasRDI": true,
//                             "daily": 99.85744500064199,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 20.811270666656522,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 132.627876666915,
//                     "hasRDI": true,
//                     "daily": 265.25575333383,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 292.4,
//                     "hasRDI": true,
//                     "daily": 97.46666666666665,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 2617.2104970533856,
//                     "hasRDI": true,
//                     "daily": 109.0504373772244,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 868.9219695156262,
//                     "hasRDI": true,
//                     "daily": 86.89219695156262,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 338.6741409187445,
//                     "hasRDI": true,
//                     "daily": 80.6367002187487,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 2931.9282856777554,
//                     "hasRDI": true,
//                     "daily": 62.381452886760755,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 24.11462116949253,
//                     "hasRDI": true,
//                     "daily": 133.97011760829184,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 9.927293716772562,
//                     "hasRDI": true,
//                     "daily": 90.24812469793238,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 1649.3546750102626,
//                     "hasRDI": true,
//                     "daily": 235.62209643003752,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 503.7130541682667,
//                     "hasRDI": true,
//                     "daily": 55.96811712980741,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 315.57569999974635,
//                     "hasRDI": true,
//                     "daily": 350.63966666638487,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 1.6957548833501719,
//                     "hasRDI": true,
//                     "daily": 141.31290694584766,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 1.2479322500076204,
//                     "hasRDI": true,
//                     "daily": 95.99478846212465,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 54.78981258341374,
//                     "hasRDI": true,
//                     "daily": 342.4363286463359,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 3.5013434541693753,
//                     "hasRDI": true,
//                     "daily": 269.3341118591827,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 292.97676250206183,
//                     "hasRDI": true,
//                     "daily": 73.24419062551546,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 292.97676250206183,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 1.1696,
//                     "hasRDI": true,
//                     "daily": 48.733333333333334,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 0.34400000000000003,
//                     "hasRDI": true,
//                     "daily": 2.293333333333334,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 11.872630666669085,
//                     "hasRDI": true,
//                     "daily": 79.15087111112724,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 723.7647833333403,
//                     "hasRDI": true,
//                     "daily": 603.1373194444502,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 781.954218600174,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/807650f42b7fb9d7244f264beed2f632?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_33ab4c154ed7882fb921f1c8ea27ae7e",
//             "label": "Grilled Chicken & Feta Greek Salad",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/8dc/8dc437461945eded4ff46240bf93e415.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a89132ebb47f1873e0c6969d8d70f22e95d72913a8297a4efee97ce4c6f5f7e7",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8dc/8dc437461945eded4ff46240bf93e415-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b3ac135cad26fff6f9635f4ccedcac8615ae9701e69ed9001bd5ccbfad547ddf",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8dc/8dc437461945eded4ff46240bf93e415-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8894e20355ba78bb4c7667fcf279b0efd408350c0a151e5c49b56857580405df",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8dc/8dc437461945eded4ff46240bf93e415.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a89132ebb47f1873e0c6969d8d70f22e95d72913a8297a4efee97ce4c6f5f7e7",
//                     "width": 300,
//                     "height": 300
//                 },
//                 "LARGE": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8dc/8dc437461945eded4ff46240bf93e415-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=39cfe0b7b988e706820888eda5483061382ab42375d43ebe971cfc12aa855106",
//                     "width": 600,
//                     "height": 600
//                 }
//             },
//             "source": "EatingWell",
//             "url": "http://www.eatingwell.com/recipe/266432/grilled-chicken-feta-greek-salad/",
//             "shareAs": "http://www.edamam.com/recipe/grilled-chicken-feta-greek-salad-33ab4c154ed7882fb921f1c8ea27ae7e/grilled+chicken",
//             "yield": 1,
//             "dietLabels": [
//                 "High-Fiber"
//             ],
//             "healthLabels": [
//                 "Mediterranean",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free"
//             ],
//             "cautions": [
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "4 cups chopped romaine lettuce",
//                 "⅔ cup (3 ounces) grilled chicken breast strips",
//                 "¼ cup sliced red onion",
//                 "½ cup broccoli florets",
//                 "½ cup cauliflower florets",
//                 "1 pepperoncini pepper",
//                 "½ cup cucumber slices",
//                 "½ cup chopped tomato",
//                 "1 tablespoon feta cheese",
//                 "1½ tablespoons balsamic vinegar",
//                 "2 tablespoons roasted red pepper hummus",
//                 "2 breadsticks"
//             ],
//             "ingredients": [
//                 {
//                     "text": "4 cups chopped romaine lettuce",
//                     "quantity": 4,
//                     "measure": "cup",
//                     "food": "romaine lettuce",
//                     "weight": 188,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bfmb5cybk1o247bmrmry4a6jvp60",
//                     "image": "https://www.edamam.com/food-img/79e/79e8dd0ee229cbc32171ec362ce93a37.jpg"
//                 },
//                 {
//                     "text": "⅔ cup (3 ounces) grilled chicken breast strips",
//                     "quantity": 3,
//                     "measure": "ounce",
//                     "food": "grilled chicken breast",
//                     "weight": 85.048569375,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bncmum7a55r0byaf6mm9xbnk39my",
//                     "image": "https://www.edamam.com/food-img/44c/44c95571e5b3071f266e0e742e670585.jpg"
//                 },
//                 {
//                     "text": "¼ cup sliced red onion",
//                     "quantity": 0.25,
//                     "measure": "cup",
//                     "food": "red onion",
//                     "weight": 28.75,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
//                     "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
//                 },
//                 {
//                     "text": "½ cup broccoli florets",
//                     "quantity": 0.5,
//                     "measure": "cup",
//                     "food": "broccoli florets",
//                     "weight": 35.5,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_b5r3hr9b7kn0jtaegq6pgbgyr034",
//                     "image": "https://www.edamam.com/food-img/b11/b11b34a0dd535bf7aabeeb5413f24954.jpeg"
//                 },
//                 {
//                     "text": "½ cup cauliflower florets",
//                     "quantity": 0.5,
//                     "measure": "cup",
//                     "food": "cauliflower",
//                     "weight": 53.5,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_buqfaxubzh6hi5asev8a5aj9sr71",
//                     "image": "https://www.edamam.com/food-img/ca2/ca217d31067dffd35ce1215e7f336bd8.jpg"
//                 },
//                 {
//                     "text": "1 pepperoncini pepper",
//                     "quantity": 1,
//                     "measure": "<unit>",
//                     "food": "pepperoncini pepper",
//                     "weight": 8,
//                     "foodCategory": "canned vegetables",
//                     "foodId": "food_a1bb6oebsm1x27ap3gjd9aqdnsmv",
//                     "image": "https://www.edamam.com/food-img/5c7/5c7d5ccf804ea606016003b8b2edfad2.jpg"
//                 },
//                 {
//                     "text": "½ cup cucumber slices",
//                     "quantity": 0.5,
//                     "measure": "cup",
//                     "food": "cucumber",
//                     "weight": 52,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bv7aggjag9rxsaatklqzobca5fzn",
//                     "image": "https://www.edamam.com/food-img/501/5015da0e5fc2b384696b3d949aefef86.jpg"
//                 },
//                 {
//                     "text": "½ cup chopped tomato",
//                     "quantity": 0.5,
//                     "measure": "cup",
//                     "food": "tomato",
//                     "weight": 74.5,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
//                     "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
//                 },
//                 {
//                     "text": "1 tablespoon feta cheese",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "feta cheese",
//                     "weight": 15.33984374974065,
//                     "foodCategory": "Cheese",
//                     "foodId": "food_biry7gubtkpad3a7qkz6uba5acn9",
//                     "image": "https://www.edamam.com/food-img/37e/37ef3e404b1c02bf4707cb82010732b8.jpg"
//                 },
//                 {
//                     "text": "1½ tablespoons balsamic vinegar",
//                     "quantity": 1.5,
//                     "measure": "tablespoon",
//                     "food": "balsamic vinegar",
//                     "weight": 24,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_b1ic8tzapja8jubas1f8lbhpbn6x",
//                     "image": "https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg"
//                 },
//                 {
//                     "text": "2 tablespoons roasted red pepper hummus",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "red pepper hummus",
//                     "weight": 30,
//                     "foodCategory": "plant-based protein",
//                     "foodId": "food_bvver0jaktvay3amv02gval1xqnm",
//                     "image": "https://www.edamam.com/food-img/dd4/dd46febae7d039955a22d2e278293f41.jpg"
//                 },
//                 {
//                     "text": "2 breadsticks",
//                     "quantity": 2,
//                     "measure": "<unit>",
//                     "food": "breadsticks",
//                     "weight": 12,
//                     "foodCategory": "bread, rolls and tortillas",
//                     "foodId": "food_bybnoozab6dmr2ajy8rimbpvv50l",
//                     "image": "https://www.edamam.com/food-img/69d/69db19581463fc3ac7bc86e939996ed2.jpg"
//                 }
//             ],
//             "calories": 412.0657254055628,
//             "totalCO2Emissions": 1925.8822911108068,
//             "co2EmissionsClass": "F",
//             "totalWeight": 606.6384131247406,
//             "totalTime": 10,
//             "cuisineType": [
//                 "mediterranean",
//                 "greek"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "salad"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 412.0657254055628,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 13.91130033288174,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 4.054204769403007,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0.005699999999999999,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 3.874005541488018,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 4.297044960748468,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 35.80653593748994,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 26.22328593748994,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 9.58325,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 11.7684,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 38.20626431871318,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 85.94374490601919,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 612.8801600845434,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 228.11521509247137,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 118.72865543120072,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 1408.9550407248394,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 5.264439105873315,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 2.8618481937425306,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 462.6535116116261,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 878.7877188496758,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 83.903,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 0.44385235793710054,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 0.5726661503353111,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 14.40028685593493,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 1.0510373537489004,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 386.24819277491696,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 359.24819277491696,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 15.84,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 0.548408495245617,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.1464079443739626,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 1.551292856062033,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 222.2162628956204,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 512.4310595517319,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 20.60328627027814,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 21.402000512125753,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 20.271023847015034,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 11.935511979163312,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 38.333,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 76.41252863742636,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 28.64791496867306,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 25.536673336855973,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 22.811521509247136,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 28.268727483619216,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 29.977766823932754,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 29.246883921518418,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 26.01680176129573,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 66.09335880166087,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 97.64307987218619,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 93.22555555555557,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 36.98769649475838,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 44.05124233348547,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 90.00179284959331,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 80.84902721145387,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 96.56204819372924,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 22.850353968567376,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.9760529624930839,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 10.341952373746887,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 185.18021907968367,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 13.91130033288174,
//                     "hasRDI": true,
//                     "daily": 21.402000512125753,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 4.054204769403007,
//                             "hasRDI": true,
//                             "daily": 20.271023847015034,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0.005699999999999999,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 3.874005541488018,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 4.297044960748468,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 35.80653593748994,
//                     "hasRDI": true,
//                     "daily": 11.935511979163312,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 26.22328593748994,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 9.58325,
//                             "hasRDI": true,
//                             "daily": 38.333,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 11.7684,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 38.20626431871318,
//                     "hasRDI": true,
//                     "daily": 76.41252863742636,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 85.94374490601919,
//                     "hasRDI": true,
//                     "daily": 28.64791496867306,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 612.8801600845434,
//                     "hasRDI": true,
//                     "daily": 25.536673336855973,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 228.11521509247137,
//                     "hasRDI": true,
//                     "daily": 22.811521509247136,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 118.72865543120072,
//                     "hasRDI": true,
//                     "daily": 28.268727483619216,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 1408.9550407248394,
//                     "hasRDI": true,
//                     "daily": 29.977766823932754,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 5.264439105873315,
//                     "hasRDI": true,
//                     "daily": 29.246883921518418,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 2.8618481937425306,
//                     "hasRDI": true,
//                     "daily": 26.01680176129573,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 462.6535116116261,
//                     "hasRDI": true,
//                     "daily": 66.09335880166087,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 878.7877188496758,
//                     "hasRDI": true,
//                     "daily": 97.64307987218619,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 83.903,
//                     "hasRDI": true,
//                     "daily": 93.22555555555557,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 0.44385235793710054,
//                     "hasRDI": true,
//                     "daily": 36.98769649475838,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 0.5726661503353111,
//                     "hasRDI": true,
//                     "daily": 44.05124233348547,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 14.40028685593493,
//                     "hasRDI": true,
//                     "daily": 90.00179284959331,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 1.0510373537489004,
//                     "hasRDI": true,
//                     "daily": 80.84902721145387,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 386.24819277491696,
//                     "hasRDI": true,
//                     "daily": 96.56204819372924,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 359.24819277491696,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 15.84,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 0.548408495245617,
//                     "hasRDI": true,
//                     "daily": 22.850353968567376,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 0.1464079443739626,
//                     "hasRDI": true,
//                     "daily": 0.9760529624930839,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 1.551292856062033,
//                     "hasRDI": true,
//                     "daily": 10.341952373746887,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 222.2162628956204,
//                     "hasRDI": true,
//                     "daily": 185.18021907968367,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 512.4310595517319,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/33ab4c154ed7882fb921f1c8ea27ae7e?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_121df9a44fa6c9dc9f91d1b5096c83d3",
//             "label": "Honey-Mustard Chicken Sandwiches recipes",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/370/370fc5dbc3de65b91ef44c446f90ecc0?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=537ca6e62f41299599a5ece1025e53a8bfa8c3c57f3fedf74ae2bd8628245627",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/370/370fc5dbc3de65b91ef44c446f90ecc0-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b6339222d90745a0111fc26c1b7c85edfd49a97758eb699edc1b11a7ac830c1c",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/370/370fc5dbc3de65b91ef44c446f90ecc0-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8a9aa67f50a8db45b5ae1a2120c3900f38f73c82d8db3134323de8df2e79d164",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/370/370fc5dbc3de65b91ef44c446f90ecc0?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=537ca6e62f41299599a5ece1025e53a8bfa8c3c57f3fedf74ae2bd8628245627",
//                     "width": 300,
//                     "height": 300
//                 }
//             },
//             "source": "Martha Stewart",
//             "url": "http://www.marthastewart.com/851800/honey-mustard-chicken-sandwiches",
//             "shareAs": "http://www.edamam.com/recipe/honey-mustard-chicken-sandwiches-recipes-121df9a44fa6c9dc9f91d1b5096c83d3/grilled+chicken",
//             "yield": 4,
//             "dietLabels": [],
//             "healthLabels": [
//                 "Sugar-Conscious",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free"
//             ],
//             "cautions": [
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "2 reserved grilled chicken breasts",
//                 "1/2 cup reserved grilled onions",
//                 "2 tablespoons reserved honey mustard",
//                 "1 tablespoon mayonnaise",
//                 "1 baguette",
//                 "2 ounces sliced Swiss cheese",
//                 "2 cups baby spinach"
//             ],
//             "ingredients": [
//                 {
//                     "text": "2 reserved grilled chicken breasts",
//                     "quantity": 2,
//                     "measure": "<unit>",
//                     "food": "grilled chicken breasts",
//                     "weight": 104,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bncmum7a55r0byaf6mm9xbnk39my",
//                     "image": "https://www.edamam.com/food-img/44c/44c95571e5b3071f266e0e742e670585.jpg"
//                 },
//                 {
//                     "text": "1/2 cup reserved grilled onions",
//                     "quantity": 0.5,
//                     "measure": "cup",
//                     "food": "grilled onions",
//                     "weight": 43.5,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_b5pq504arby3emb1a2mjjaar54l8",
//                     "image": "https://www.edamam.com/food-img/5f1/5f18e93c02bcf4eab14620febb53b5a2.png"
//                 },
//                 {
//                     "text": "2 tablespoons reserved honey mustard",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "honey mustard",
//                     "weight": 31.1249999994738,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
//                     "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
//                 },
//                 {
//                     "text": "1 tablespoon mayonnaise",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "mayonnaise",
//                     "weight": 14.4374999997559,
//                     "foodCategory": "condiments and sauces",
//                     "foodId": "food_bu8t61zaplle7dbrzk81dbygq0qj",
//                     "image": "https://www.edamam.com/food-img/577/577308a0422357885c94cc9b5f1f1862.jpg"
//                 },
//                 {
//                     "text": "1 baguette",
//                     "quantity": 1,
//                     "measure": "<unit>",
//                     "food": "baguette",
//                     "weight": 300,
//                     "foodCategory": "bread, rolls and tortillas",
//                     "foodId": "food_bz1n7y8bupmgp0anvyqmda9dwufz",
//                     "image": "https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg"
//                 },
//                 {
//                     "text": "2 ounces sliced Swiss cheese",
//                     "quantity": 2,
//                     "measure": "ounce",
//                     "food": "Swiss cheese",
//                     "weight": 56.69904625,
//                     "foodCategory": "Cheese",
//                     "foodId": "food_am9c0zybyfhgn9brc0imabzslets",
//                     "image": "https://www.edamam.com/food-img/419/419f6ce36db411c072d0dbf6c8510897.jpg"
//                 },
//                 {
//                     "text": "2 cups baby spinach",
//                     "quantity": 2,
//                     "measure": "cup",
//                     "food": "spinach",
//                     "weight": 19.99999999999998,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
//                     "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
//                 }
//             ],
//             "calories": 1387.114751760495,
//             "totalCO2Emissions": 3309.882599448581,
//             "co2EmissionsClass": "E",
//             "totalWeight": 569.7615462492297,
//             "totalTime": 15,
//             "cuisineType": [
//                 "french"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "sandwiches"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 1387.114751760495,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 45.48195433729447,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 15.339946417470804,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0.5774208364874527,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 11.35513572306642,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 13.449049719633152,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 162.47615376596931,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 153.45165376599036,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 9.024499999978952,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 14.230349999995157,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 82.09806748748032,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 146.7607380124048,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 2435.6865914803034,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 724.3302616246685,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 179.5256852622474,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 874.8283132992001,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 14.045871260116527,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 7.034298321121633,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 935.3425254744317,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 264.8895031999736,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 6.496374999998416,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 2.3010431450865685,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 1.6482136196746318,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 29.08103863959703,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 1.1360888228371315,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 560.8086546249631,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 219.67865462496314,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 201,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 2.0885908152500003,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.10400000000000001,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 2.0648442774981053,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 109.63753664749252,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 267.36246638955953,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 69.35573758802475,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 69.97223744199148,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 76.69973208735402,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 54.158717921989776,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 36.09799999991581,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 164.19613497496067,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 48.92024600413493,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 101.4869413116793,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 72.43302616246685,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 42.74421077672558,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 18.613368368068087,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 78.0326181117585,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 63.94816655565121,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 133.62036078206168,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 29.43216702221929,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 7.218194444442684,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 191.7535954238807,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 126.78566305189476,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 181.75649149748142,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 87.39144791054858,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 140.20216365624077,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 87.02461730208334,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.6933333333333334,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 13.765628516654035,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 91.36461387291044,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 45.48195433729447,
//                     "hasRDI": true,
//                     "daily": 69.97223744199148,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 15.339946417470804,
//                             "hasRDI": true,
//                             "daily": 76.69973208735402,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0.5774208364874527,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 11.35513572306642,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 13.449049719633152,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 162.47615376596931,
//                     "hasRDI": true,
//                     "daily": 54.158717921989776,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 153.45165376599036,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 9.024499999978952,
//                             "hasRDI": true,
//                             "daily": 36.09799999991581,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 14.230349999995157,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 82.09806748748032,
//                     "hasRDI": true,
//                     "daily": 164.19613497496067,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 146.7607380124048,
//                     "hasRDI": true,
//                     "daily": 48.92024600413493,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 2435.6865914803034,
//                     "hasRDI": true,
//                     "daily": 101.4869413116793,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 724.3302616246685,
//                     "hasRDI": true,
//                     "daily": 72.43302616246685,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 179.5256852622474,
//                     "hasRDI": true,
//                     "daily": 42.74421077672558,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 874.8283132992001,
//                     "hasRDI": true,
//                     "daily": 18.613368368068087,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 14.045871260116527,
//                     "hasRDI": true,
//                     "daily": 78.0326181117585,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 7.034298321121633,
//                     "hasRDI": true,
//                     "daily": 63.94816655565121,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 935.3425254744317,
//                     "hasRDI": true,
//                     "daily": 133.62036078206168,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 264.8895031999736,
//                     "hasRDI": true,
//                     "daily": 29.43216702221929,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 6.496374999998416,
//                     "hasRDI": true,
//                     "daily": 7.218194444442684,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 2.3010431450865685,
//                     "hasRDI": true,
//                     "daily": 191.7535954238807,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 1.6482136196746318,
//                     "hasRDI": true,
//                     "daily": 126.78566305189476,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 29.08103863959703,
//                     "hasRDI": true,
//                     "daily": 181.75649149748142,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 1.1360888228371315,
//                     "hasRDI": true,
//                     "daily": 87.39144791054858,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 560.8086546249631,
//                     "hasRDI": true,
//                     "daily": 140.20216365624077,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 219.67865462496314,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 201,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 2.0885908152500003,
//                     "hasRDI": true,
//                     "daily": 87.02461730208334,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 0.10400000000000001,
//                     "hasRDI": true,
//                     "daily": 0.6933333333333334,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 2.0648442774981053,
//                     "hasRDI": true,
//                     "daily": 13.765628516654035,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 109.63753664749252,
//                     "hasRDI": true,
//                     "daily": 91.36461387291044,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 267.36246638955953,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/121df9a44fa6c9dc9f91d1b5096c83d3?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_903b64596b165c09702b829121ebb1b9",
//             "label": "Crispy Tortilla Pizza with Grilled Chicken",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/989/989103ed23e074505b87789fc8571cae.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bb008dc34404f4d6f47adce0dfb0248db861e2c1898dddeb2dea75247e781016",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/989/989103ed23e074505b87789fc8571cae-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65d450b733dccedf9dbe17cf3c8c7b1943d2c4d15d4ff1645fbaf9a588f3476e",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/989/989103ed23e074505b87789fc8571cae-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fbed534b3ad1be84b5af510b05233b546f62e43d2dac657f12ff4981b325cd50",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/989/989103ed23e074505b87789fc8571cae.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bb008dc34404f4d6f47adce0dfb0248db861e2c1898dddeb2dea75247e781016",
//                     "width": 300,
//                     "height": 300
//                 }
//             },
//             "source": "The Daily Meal",
//             "url": "http://www.thedailymeal.com/recipes/crispy-tortilla-pizza-grilled-chicken-recipe",
//             "shareAs": "http://www.edamam.com/recipe/crispy-tortilla-pizza-with-grilled-chicken-903b64596b165c09702b829121ebb1b9/grilled+chicken",
//             "yield": 1,
//             "dietLabels": [
//                 "High-Fiber"
//             ],
//             "healthLabels": [
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free"
//             ],
//             "cautions": [
//                 "Soy",
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "1 whole wheat tortilla",
//                 "5 grilled chicken strips",
//                 "4 Tablespoons salsa",
//                 "1 scallion, chopped (whites and greens separated)",
//                 "1/3 Cup monterey jack cheese, shredded",
//                 "1/4 avocado, diced",
//                 "3 grape tomatoes, sliced",
//                 "olive oil or ghee, for cooking"
//             ],
//             "ingredients": [
//                 {
//                     "text": "1 whole wheat tortilla",
//                     "quantity": 1,
//                     "measure": "<unit>",
//                     "food": "whole wheat tortilla",
//                     "weight": 49,
//                     "foodCategory": "bread, rolls and tortillas",
//                     "foodId": "food_btm0q4fagybgadbdm8wnwa0o2ytg",
//                     "image": "https://www.edamam.com/food-img/14d/14d5bc9ea70954d9ce2da19df7004507.jpg"
//                 },
//                 {
//                     "text": "5 grilled chicken strips",
//                     "quantity": 5,
//                     "measure": "<unit>",
//                     "food": "chicken strips",
//                     "weight": 150,
//                     "foodCategory": "sandwhiches",
//                     "foodId": "food_bpbsk7zaearxssa39q2fia84qudv",
//                     "image": "https://www.edamam.com/food-img/cc3/cc359f770f8f4d9ab2eeb40cc7bf6768.jpg"
//                 },
//                 {
//                     "text": "4 Tablespoons salsa",
//                     "quantity": 4,
//                     "measure": "tablespoon",
//                     "food": "salsa",
//                     "weight": 72,
//                     "foodCategory": "canned soup",
//                     "foodId": "food_b0t3obfawlm5k2b6erxscacez35u",
//                     "image": "https://www.edamam.com/food-img/995/995d0f166754a0475c181b9c156fec43.jpg"
//                 },
//                 {
//                     "text": "1 scallion, chopped (whites and greens separated)",
//                     "quantity": 1,
//                     "measure": "<unit>",
//                     "food": "scallion",
//                     "weight": 13.888888888888891,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
//                     "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
//                 },
//                 {
//                     "text": "1/3 Cup monterey jack cheese, shredded",
//                     "quantity": 0.3333333333333333,
//                     "measure": "cup",
//                     "food": "jack cheese",
//                     "weight": 37.666666666666664,
//                     "foodCategory": "Cheese",
//                     "foodId": "food_atp17pta7d5it2a80ct13ard6aj3",
//                     "image": "https://www.edamam.com/food-img/590/59062b9f8d57ebc7d831b7b7c231f726.jpg"
//                 },
//                 {
//                     "text": "1/4 avocado, diced",
//                     "quantity": 0.25,
//                     "measure": "<unit>",
//                     "food": "avocado",
//                     "weight": 50.25,
//                     "foodCategory": "fruit",
//                     "foodId": "food_b0yuze4b1g3afpanijno5abtiu28",
//                     "image": "https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg"
//                 },
//                 {
//                     "text": "3 grape tomatoes, sliced",
//                     "quantity": 3,
//                     "measure": "<unit>",
//                     "food": "grape tomatoes",
//                     "weight": 369,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_b14rghgav9zzw5a0a3j9daj3xhpf",
//                     "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
//                 },
//                 {
//                     "text": "olive oil or ghee, for cooking",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "olive oil",
//                     "weight": 10.088555555555557,
//                     "foodCategory": "Oils",
//                     "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
//                     "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
//                 }
//             ],
//             "calories": 953.8539422222221,
//             "totalCO2Emissions": 3498.394824785881,
//             "co2EmissionsClass": "G",
//             "totalWeight": 751.8941111111112,
//             "totalTime": 0,
//             "cuisineType": [
//                 "italian"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "main course"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 953.8539422222221,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 54.48929444444445,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 14.112563444444445,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0.08486,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 24.82307888888889,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 12.408679444444445,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 74.65380277777777,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 62.153941666666654,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 12.499861111111112,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 15.338894444444442,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 47.554,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 105.52333333333334,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 2279.391493333333,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 460.9942188888889,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 131.20027777777779,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 2009.856718888889,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 4.830126466666666,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 3.6069666666666667,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 838.1988888888889,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 261.08194444444445,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 61.20711111111111,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 0.6108763888888888,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 0.645746111111111,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 18.342056666666668,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 1.2391313888888889,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 241.2213888888889,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 143.4113888888889,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 58,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 0.5526333333333333,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.526,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 10.757849222222223,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 92.62247711111112,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 563.4755555555555,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 47.69269711111111,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 83.82968376068376,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 70.56281722222222,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 24.884600925925923,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 49.99944444444445,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 95.108,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 35.17444444444445,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 94.97464555555554,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 46.099421888888884,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 31.238161375661377,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 42.762908912529554,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 26.834035925925924,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 32.79060606060606,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 119.74269841269842,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 29.009104938271605,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 68.0079012345679,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 50.90636574074074,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 49.67277777777777,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 114.63785416666667,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 95.31779914529913,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 60.305347222222224,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 23.02638888888889,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 3.506666666666667,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 71.71899481481482,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 77.18539759259261,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 54.48929444444445,
//                     "hasRDI": true,
//                     "daily": 83.82968376068376,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 14.112563444444445,
//                             "hasRDI": true,
//                             "daily": 70.56281722222222,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0.08486,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 24.82307888888889,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 12.408679444444445,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 74.65380277777777,
//                     "hasRDI": true,
//                     "daily": 24.884600925925923,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 62.153941666666654,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 12.499861111111112,
//                             "hasRDI": true,
//                             "daily": 49.99944444444445,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 15.338894444444442,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 47.554,
//                     "hasRDI": true,
//                     "daily": 95.108,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 105.52333333333334,
//                     "hasRDI": true,
//                     "daily": 35.17444444444445,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 2279.391493333333,
//                     "hasRDI": true,
//                     "daily": 94.97464555555554,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 460.9942188888889,
//                     "hasRDI": true,
//                     "daily": 46.099421888888884,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 131.20027777777779,
//                     "hasRDI": true,
//                     "daily": 31.238161375661377,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 2009.856718888889,
//                     "hasRDI": true,
//                     "daily": 42.762908912529554,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 4.830126466666666,
//                     "hasRDI": true,
//                     "daily": 26.834035925925924,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 3.6069666666666667,
//                     "hasRDI": true,
//                     "daily": 32.79060606060606,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 838.1988888888889,
//                     "hasRDI": true,
//                     "daily": 119.74269841269842,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 261.08194444444445,
//                     "hasRDI": true,
//                     "daily": 29.009104938271605,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 61.20711111111111,
//                     "hasRDI": true,
//                     "daily": 68.0079012345679,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 0.6108763888888888,
//                     "hasRDI": true,
//                     "daily": 50.90636574074074,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 0.645746111111111,
//                     "hasRDI": true,
//                     "daily": 49.67277777777777,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 18.342056666666668,
//                     "hasRDI": true,
//                     "daily": 114.63785416666667,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 1.2391313888888889,
//                     "hasRDI": true,
//                     "daily": 95.31779914529913,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 241.2213888888889,
//                     "hasRDI": true,
//                     "daily": 60.305347222222224,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 143.4113888888889,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 58,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 0.5526333333333333,
//                     "hasRDI": true,
//                     "daily": 23.02638888888889,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 0.526,
//                     "hasRDI": true,
//                     "daily": 3.506666666666667,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 10.757849222222223,
//                     "hasRDI": true,
//                     "daily": 71.71899481481482,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 92.62247711111112,
//                     "hasRDI": true,
//                     "daily": 77.18539759259261,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 563.4755555555555,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/903b64596b165c09702b829121ebb1b9?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b2c4f54d7b7d75cf9caaf2db97dacf43",
//             "label": "Go-To Grilled Chicken",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/7b4/7b4c72c71a32de632a31fea10a510c1a.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d38327fde37995ac22735aacb2c8dcadc191281e7ab542b278359514357315d",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7b4/7b4c72c71a32de632a31fea10a510c1a-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=53209ba8166f79f1001b01657a7580d130d7e518fb24c51bd6149878e6a5c3b0",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7b4/7b4c72c71a32de632a31fea10a510c1a-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=400b053a2f01412642ea3a0230a1d71de2b7b307cf7821a2beb020ed83a25f58",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7b4/7b4c72c71a32de632a31fea10a510c1a.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d38327fde37995ac22735aacb2c8dcadc191281e7ab542b278359514357315d",
//                     "width": 300,
//                     "height": 300
//                 },
//                 "LARGE": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7b4/7b4c72c71a32de632a31fea10a510c1a-l.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d8888f633e28c97f8b725cdac5a86575427fe28546f2c1a780f1866f474561e2",
//                     "width": 600,
//                     "height": 600
//                 }
//             },
//             "source": "Food52",
//             "url": "https://food52.com/recipes/56243-go-to-grilled-chicken",
//             "shareAs": "http://www.edamam.com/recipe/go-to-grilled-chicken-b2c4f54d7b7d75cf9caaf2db97dacf43/grilled+chicken",
//             "yield": 8,
//             "dietLabels": [
//                 "Low-Carb"
//             ],
//             "healthLabels": [
//                 "Sugar-Conscious",
//                 "Keto-Friendly",
//                 "Paleo",
//                 "Mediterranean",
//                 "Dairy-Free",
//                 "Gluten-Free",
//                 "Wheat-Free",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free",
//                 "Kosher"
//             ],
//             "cautions": [],
//             "ingredientLines": [
//                 "1 tablespoon smoked Spanish paprika",
//                 "1 teaspoon ground cumin",
//                 "1 teaspoon ground fennel",
//                 "1 teaspoon ground coriander",
//                 "1 teaspoon garlic powder (I like Penzey\\\\'s roasted garlic powder)",
//                 "1/2 teaspoon kosher salt (plus more, to taste, to add before grilling)",
//                 "1 tablespoon Dijon or whole-grain mustard",
//                 "3 to 4 tablespoons olive oil, or enough to form a thick, spreadable paste",
//                 "About 4 pounds chicken (I prefer bone-in, skin-on chicken thighs for grilling)"
//             ],
//             "ingredients": [
//                 {
//                     "text": "1 tablespoon smoked Spanish paprika",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "paprika",
//                     "weight": 6.8,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
//                     "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
//                 },
//                 {
//                     "text": "1 teaspoon ground cumin",
//                     "quantity": 1,
//                     "measure": "teaspoon",
//                     "food": "cumin",
//                     "weight": 2.1,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
//                     "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
//                 },
//                 {
//                     "text": "1 teaspoon ground fennel",
//                     "quantity": 1,
//                     "measure": "teaspoon",
//                     "food": "fennel",
//                     "weight": 1.812500000091932,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_a4sdbkob8ixokpb07a42dbt3typw",
//                     "image": "https://www.edamam.com/food-img/038/038c19f86af781e925c97991e17b90ed.jpeg"
//                 },
//                 {
//                     "text": "1 teaspoon ground coriander",
//                     "quantity": 1,
//                     "measure": "teaspoon",
//                     "food": "coriander",
//                     "weight": 1.8,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_afpcy6rb44nx6gbfff63ga2cqksw",
//                     "image": "https://www.edamam.com/food-img/a90/a901cee0b9028841d258f5d07b5924e7.jpg"
//                 },
//                 {
//                     "text": "1 teaspoon garlic powder (I like Penzey\\\\'s roasted garlic powder)",
//                     "quantity": 1,
//                     "measure": "teaspoon",
//                     "food": "garlic powder",
//                     "weight": 3.1,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_boq94r1a036492bdup9u1beyph0l",
//                     "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
//                 },
//                 {
//                     "text": "1/2 teaspoon kosher salt (plus more, to taste, to add before grilling)",
//                     "quantity": 0.5,
//                     "measure": "teaspoon",
//                     "food": "kosher salt",
//                     "weight": 2.4270833334564377,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
//                     "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
//                 },
//                 {
//                     "text": "1 tablespoon Dijon or whole-grain mustard",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "mustard",
//                     "weight": 15.5624999997369,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
//                     "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
//                 },
//                 {
//                     "text": "3 to 4 tablespoons olive oil, or enough to form a thick, spreadable paste",
//                     "quantity": 3.5,
//                     "measure": "tablespoon",
//                     "food": "olive oil",
//                     "weight": 47.25,
//                     "foodCategory": "Oils",
//                     "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
//                     "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
//                 },
//                 {
//                     "text": "About 4 pounds chicken (I prefer bone-in, skin-on chicken thighs for grilling)",
//                     "quantity": 4,
//                     "measure": "pound",
//                     "food": "chicken thighs",
//                     "weight": 1814.36948,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bsarl08be0gwarb34bpviafna9d4",
//                     "image": "https://www.edamam.com/food-img/007/00792642367e1f55de680762f85cfb3b.jpg"
//                 }
//             ],
//             "calories": 4480.0219257998715,
//             "totalCO2Emissions": 18277.02827577112,
//             "co2EmissionsClass": "F",
//             "totalWeight": 1895.2215633332853,
//             "totalTime": 135,
//             "cuisineType": [
//                 "mediterranean"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "main course"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 4480.0219257998715,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 350.6472761799914,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 88.76833449599953,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 1.5436146829999766,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 161.40820191199435,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 68.67764583099813,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 13.419429949991375,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 9.11384244999905,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 4.305587499992326,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 1.0373862500011926,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 302.04587669999137,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 1778.0820904000002,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 2595.064612178252,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 189.08736359990885,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 362.50590223322394,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 3985.5191558666575,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 16.171859338996846,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 24.08354837533196,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 2918.300833599762,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 587.577105400031,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 0.9022875000102426,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 1.4056315953995435,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 2.7424074959998457,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 84.76939410099911,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 6.5134127205998595,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 61.00883440000641,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 61.00883440000641,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 11.249090776000001,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 1.8143694800000003,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 12.750213407999587,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 73.48858408005407,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 1222.5115358665296,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 224.0010962899936,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 539.4573479692176,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 443.84167247999767,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 4.4731433166637915,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 17.222349999969303,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 604.0917533999827,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 592.6940301333334,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 108.12769217409382,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 18.908736359990886,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 86.31092910314857,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 84.79827991205654,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 89.84366299442692,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 218.94134886665418,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 416.9001190856803,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 65.28634504444788,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 1.0025416666780473,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 117.13596628329529,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 210.9544227692189,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 529.8087131312444,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 501.0317477384507,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 15.252208600001602,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 468.7121156666667,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 12.095796533333335,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 85.00142271999724,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 61.24048673337839,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 350.6472761799914,
//                     "hasRDI": true,
//                     "daily": 539.4573479692176,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 88.76833449599953,
//                             "hasRDI": true,
//                             "daily": 443.84167247999767,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 1.5436146829999766,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 161.40820191199435,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 68.67764583099813,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 13.419429949991375,
//                     "hasRDI": true,
//                     "daily": 4.4731433166637915,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 9.11384244999905,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 4.305587499992326,
//                             "hasRDI": true,
//                             "daily": 17.222349999969303,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 1.0373862500011926,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 302.04587669999137,
//                     "hasRDI": true,
//                     "daily": 604.0917533999827,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 1778.0820904000002,
//                     "hasRDI": true,
//                     "daily": 592.6940301333334,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 2595.064612178252,
//                     "hasRDI": true,
//                     "daily": 108.12769217409382,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 189.08736359990885,
//                     "hasRDI": true,
//                     "daily": 18.908736359990886,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 362.50590223322394,
//                     "hasRDI": true,
//                     "daily": 86.31092910314857,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 3985.5191558666575,
//                     "hasRDI": true,
//                     "daily": 84.79827991205654,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 16.171859338996846,
//                     "hasRDI": true,
//                     "daily": 89.84366299442692,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 24.08354837533196,
//                     "hasRDI": true,
//                     "daily": 218.94134886665418,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 2918.300833599762,
//                     "hasRDI": true,
//                     "daily": 416.9001190856803,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 587.577105400031,
//                     "hasRDI": true,
//                     "daily": 65.28634504444788,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 0.9022875000102426,
//                     "hasRDI": true,
//                     "daily": 1.0025416666780473,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 1.4056315953995435,
//                     "hasRDI": true,
//                     "daily": 117.13596628329529,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 2.7424074959998457,
//                     "hasRDI": true,
//                     "daily": 210.9544227692189,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 84.76939410099911,
//                     "hasRDI": true,
//                     "daily": 529.8087131312444,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 6.5134127205998595,
//                     "hasRDI": true,
//                     "daily": 501.0317477384507,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 61.00883440000641,
//                     "hasRDI": true,
//                     "daily": 15.252208600001602,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 61.00883440000641,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 11.249090776000001,
//                     "hasRDI": true,
//                     "daily": 468.7121156666667,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 1.8143694800000003,
//                     "hasRDI": true,
//                     "daily": 12.095796533333335,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 12.750213407999587,
//                     "hasRDI": true,
//                     "daily": 85.00142271999724,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 73.48858408005407,
//                     "hasRDI": true,
//                     "daily": 61.24048673337839,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 1222.5115358665296,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/b2c4f54d7b7d75cf9caaf2db97dacf43?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_cfabe0d8a3ba296749be8bf91a569ad2",
//             "label": "Grilled-Chicken Citrus Salad",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6a7/6a7bae5d3c599b48bda2dc8b4d8452a0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d7aa5294432da964dd1268fc9c0b9d306c6ed784ceca3d531efb55745e9d67b4",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6a7/6a7bae5d3c599b48bda2dc8b4d8452a0-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c5b7e5f54892b157ac0571a5f4a674d4026c49b9894c64932d7a65a8245bcfeb",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6a7/6a7bae5d3c599b48bda2dc8b4d8452a0-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d2bd64d51cba258fe66c13999764c0fdf2b5d229b8ae4c097529d59917c2f2fa",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6a7/6a7bae5d3c599b48bda2dc8b4d8452a0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d7aa5294432da964dd1268fc9c0b9d306c6ed784ceca3d531efb55745e9d67b4",
//                     "width": 300,
//                     "height": 300
//                 },
//                 "LARGE": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6a7/6a7bae5d3c599b48bda2dc8b4d8452a0-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9706781a88c6d16d5864dedafd6192f5fec6118cab0267bfabe56767c8457c81",
//                     "width": 600,
//                     "height": 600
//                 }
//             },
//             "source": "Self",
//             "url": "http://www.self.com/challenge/2011/nutrition/recipe/lunches/grilled-chicken-citrus-salad",
//             "shareAs": "http://www.edamam.com/recipe/grilled-chicken-citrus-salad-cfabe0d8a3ba296749be8bf91a569ad2/grilled+chicken",
//             "yield": 4,
//             "dietLabels": [
//                 "Low-Carb"
//             ],
//             "healthLabels": [
//                 "Sugar-Conscious",
//                 "Kidney-Friendly",
//                 "Keto-Friendly",
//                 "Mediterranean",
//                 "Gluten-Free",
//                 "Wheat-Free",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free"
//             ],
//             "cautions": [
//                 "Sulfites",
//                 "FODMAP"
//             ],
//             "ingredientLines": [
//                 "2 cups baby spinach",
//                 "3 oz grilled chicken",
//                 "1/2 cup halved clementine sections",
//                 "1/2 cup sliced red onion",
//                 "1/3 cup cucumber slices",
//                 "1/4 cup reduced-fat feta",
//                 "2 tbsp sliced almonds",
//                 "1 tbsp orange juice",
//                 "1 tsp Dijon mustard",
//                 "1 tsp olive oil",
//                 "1 tsp white wine vinegar",
//                 "1/4 tsp garlic powder"
//             ],
//             "ingredients": [
//                 {
//                     "text": "2 cups baby spinach",
//                     "quantity": 2,
//                     "measure": "cup",
//                     "food": "spinach",
//                     "weight": 19.99999999999998,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
//                     "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
//                 },
//                 {
//                     "text": "3 oz grilled chicken",
//                     "quantity": 3,
//                     "measure": "ounce",
//                     "food": "chicken",
//                     "weight": 85.048569375,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
//                     "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
//                 },
//                 {
//                     "text": "1/2 cup halved clementine sections",
//                     "quantity": 0.5,
//                     "measure": "<unit>",
//                     "food": "clementine",
//                     "weight": 37,
//                     "foodCategory": "fruit",
//                     "foodId": "food_bsxqnbia2eaomrbzsi3eqb2i22sp",
//                     "image": "https://www.edamam.com/food-img/4b0/4b0e7d9985b55a58513f61cd02a5003c.jpg"
//                 },
//                 {
//                     "text": "1/2 cup sliced red onion",
//                     "quantity": 0.5,
//                     "measure": "cup",
//                     "food": "red onion",
//                     "weight": 57.5,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
//                     "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
//                 },
//                 {
//                     "text": "1/3 cup cucumber slices",
//                     "quantity": 0.3333333333333333,
//                     "measure": "cup",
//                     "food": "cucumber",
//                     "weight": 34.666666666666664,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bv7aggjag9rxsaatklqzobca5fzn",
//                     "image": "https://www.edamam.com/food-img/501/5015da0e5fc2b384696b3d949aefef86.jpg"
//                 },
//                 {
//                     "text": "1/4 cup reduced-fat feta",
//                     "quantity": 0.25,
//                     "measure": "cup",
//                     "food": "feta",
//                     "weight": 37.5,
//                     "foodCategory": "Cheese",
//                     "foodId": "food_biry7gubtkpad3a7qkz6uba5acn9",
//                     "image": "https://www.edamam.com/food-img/37e/37ef3e404b1c02bf4707cb82010732b8.jpg"
//                 },
//                 {
//                     "text": "2 tbsp sliced almonds",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "almonds",
//                     "weight": 17.87499999969778,
//                     "foodCategory": "plant-based protein",
//                     "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
//                     "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
//                 },
//                 {
//                     "text": "1 tbsp orange juice",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "orange juice",
//                     "weight": 15.499999999737943,
//                     "foodCategory": "100% juice",
//                     "foodId": "food_bn7zicravp7kdrb8h9knhadt6kei",
//                     "image": "https://www.edamam.com/food-img/011/011c0c3b0f3865bde575f57c556439e4.jpg"
//                 },
//                 {
//                     "text": "1 tsp Dijon mustard",
//                     "quantity": 1,
//                     "measure": "teaspoon",
//                     "food": "Dijon mustard",
//                     "weight": 5,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
//                     "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
//                 },
//                 {
//                     "text": "1 tsp olive oil",
//                     "quantity": 1,
//                     "measure": "teaspoon",
//                     "food": "olive oil",
//                     "weight": 4.5,
//                     "foodCategory": "Oils",
//                     "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
//                     "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
//                 },
//                 {
//                     "text": "1 tsp white wine vinegar",
//                     "quantity": 1,
//                     "measure": "teaspoon",
//                     "food": "white wine vinegar",
//                     "weight": 5,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_ai77igmb8f0rj6blsokr8bxx5n2n",
//                     "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
//                 },
//                 {
//                     "text": "1/4 tsp garlic powder",
//                     "quantity": 0.25,
//                     "measure": "teaspoon",
//                     "food": "garlic powder",
//                     "weight": 0.775,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_boq94r1a036492bdup9u1beyph0l",
//                     "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
//                 }
//             ],
//             "calories": 489.1359241543822,
//             "totalCO2Emissions": 1863.1815649063512,
//             "co2EmissionsClass": "D",
//             "totalWeight": 320.3652360411023,
//             "totalTime": 0,
//             "cuisineType": [
//                 "mediterranean"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "salad"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 489.1359241543822,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 34.757249808807,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 10.019269756717621,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0.08562836229370469,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 16.099710312237736,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 5.739966624108555,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 19.579824999907466,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 14.824866666612433,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 4.754958333295032,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 8.643928333298176,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 27.10201723701743,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 97.16142703125001,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 562.1860818958277,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 297.7980092970749,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 106.90563054082186,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 674.9830461160105,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 2.665953791029929,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 3.1105420921362734,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 391.38364697975175,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 179.07824677705702,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 38.03674377653563,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 0.2548241416241446,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 0.7074410332464759,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 7.379215050821343,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 0.6532629094786477,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 91.36383082895502,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 91.36383082895502,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 0.8974005650625001,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.32009713875,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 6.0779382080475255,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 107.26366187395796,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 234.83899745392193,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 24.456796207719112,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 53.47269201354924,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 50.09634878358811,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 6.526608333302489,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 19.019833333180127,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 54.20403447403486,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 32.38714234375001,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 23.42442007899282,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 29.77980092970749,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 25.453721557338536,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 14.361341406723628,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 14.810854394610718,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 28.277655383057034,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 55.91194956853596,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 19.89758297522856,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 42.263048640595144,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 21.235345135345383,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 54.41854101895968,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 46.120094067633396,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 50.25099303681906,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 22.840957707238754,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 37.391690210937504,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 2.1339809250000004,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 40.51958805365017,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 89.38638489496496,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 34.757249808807,
//                     "hasRDI": true,
//                     "daily": 53.47269201354924,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 10.019269756717621,
//                             "hasRDI": true,
//                             "daily": 50.09634878358811,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0.08562836229370469,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 16.099710312237736,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 5.739966624108555,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 19.579824999907466,
//                     "hasRDI": true,
//                     "daily": 6.526608333302489,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 14.824866666612433,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 4.754958333295032,
//                             "hasRDI": true,
//                             "daily": 19.019833333180127,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 8.643928333298176,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 27.10201723701743,
//                     "hasRDI": true,
//                     "daily": 54.20403447403486,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 97.16142703125001,
//                     "hasRDI": true,
//                     "daily": 32.38714234375001,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 562.1860818958277,
//                     "hasRDI": true,
//                     "daily": 23.42442007899282,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 297.7980092970749,
//                     "hasRDI": true,
//                     "daily": 29.77980092970749,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 106.90563054082186,
//                     "hasRDI": true,
//                     "daily": 25.453721557338536,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 674.9830461160105,
//                     "hasRDI": true,
//                     "daily": 14.361341406723628,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 2.665953791029929,
//                     "hasRDI": true,
//                     "daily": 14.810854394610718,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 3.1105420921362734,
//                     "hasRDI": true,
//                     "daily": 28.277655383057034,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 391.38364697975175,
//                     "hasRDI": true,
//                     "daily": 55.91194956853596,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 179.07824677705702,
//                     "hasRDI": true,
//                     "daily": 19.89758297522856,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 38.03674377653563,
//                     "hasRDI": true,
//                     "daily": 42.263048640595144,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 0.2548241416241446,
//                     "hasRDI": true,
//                     "daily": 21.235345135345383,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 0.7074410332464759,
//                     "hasRDI": true,
//                     "daily": 54.41854101895968,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 7.379215050821343,
//                     "hasRDI": true,
//                     "daily": 46.120094067633396,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 0.6532629094786477,
//                     "hasRDI": true,
//                     "daily": 50.25099303681906,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 91.36383082895502,
//                     "hasRDI": true,
//                     "daily": 22.840957707238754,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 91.36383082895502,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 0.8974005650625001,
//                     "hasRDI": true,
//                     "daily": 37.391690210937504,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 0.32009713875,
//                     "hasRDI": true,
//                     "daily": 2.1339809250000004,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 6.0779382080475255,
//                     "hasRDI": true,
//                     "daily": 40.51958805365017,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 107.26366187395796,
//                     "hasRDI": true,
//                     "daily": 89.38638489496496,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 234.83899745392193,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/cfabe0d8a3ba296749be8bf91a569ad2?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_bdbe1acb3c1b6509e20da0c283030c38",
//             "label": "Spinach and Grapefruit Salad with Wheat Berries and Grilled Chicken",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/faf/faf2e164f0331e33f9656c8107ac3ad0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0e4fdfe3c30d367596ed8be7c6a510c7080bf9fb72b5b1043963e3e95f6367ab",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/faf/faf2e164f0331e33f9656c8107ac3ad0-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bcadae0a0ae561b6c2ed7133743f99524816b35a6fbdbc36218d048b0f88236e",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/faf/faf2e164f0331e33f9656c8107ac3ad0-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=38b88669749c01f08cced9ee00973e076a97c548b08eb4b3d62bd63d75aba716",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/faf/faf2e164f0331e33f9656c8107ac3ad0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0e4fdfe3c30d367596ed8be7c6a510c7080bf9fb72b5b1043963e3e95f6367ab",
//                     "width": 300,
//                     "height": 300
//                 }
//             },
//             "source": "Men's Health",
//             "url": "https://www.menshealth.com/recipes/spinach-and-grapefruit-salad-with-wheat-berries-and-grilled-chicken",
//             "shareAs": "http://www.edamam.com/recipe/spinach-and-grapefruit-salad-with-wheat-berries-and-grilled-chicken-bdbe1acb3c1b6509e20da0c283030c38/grilled+chicken",
//             "yield": 4,
//             "dietLabels": [
//                 "Low-Sodium"
//             ],
//             "healthLabels": [
//                 "Sugar-Conscious",
//                 "Low Potassium",
//                 "Kidney-Friendly",
//                 "Mediterranean",
//                 "Dairy-Free",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free",
//                 "Kosher",
//                 "Immuno-Supportive"
//             ],
//             "cautions": [
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "1 tablespoon apple cider vinegar",
//                 "2 teaspoons olive oil",
//                 "1/4 teaspoon dried thyme",
//                 "1/4 teaspoon minced garlic",
//                 "2 cups baby spinach",
//                 "1 cup cooked wheat berries",
//                 "1/2 cup grapefruit segments",
//                 "3 ounces chopped grilled chicken"
//             ],
//             "ingredients": [
//                 {
//                     "text": "1 tablespoon apple cider vinegar",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "apple cider vinegar",
//                     "weight": 14.9,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_ar8m7esapmfvf8bnhfzdlabndh6v",
//                     "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
//                 },
//                 {
//                     "text": "2 teaspoons olive oil",
//                     "quantity": 2,
//                     "measure": "teaspoon",
//                     "food": "olive oil",
//                     "weight": 9,
//                     "foodCategory": "Oils",
//                     "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
//                     "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
//                 },
//                 {
//                     "text": "1/4 teaspoon dried thyme",
//                     "quantity": 0.25,
//                     "measure": "teaspoon",
//                     "food": "dried thyme",
//                     "weight": 0.25,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
//                     "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
//                 },
//                 {
//                     "text": "1/4 teaspoon minced garlic",
//                     "quantity": 0.25,
//                     "measure": "teaspoon",
//                     "food": "garlic",
//                     "weight": 0.7,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
//                     "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
//                 },
//                 {
//                     "text": "2 cups baby spinach",
//                     "quantity": 2,
//                     "measure": "cup",
//                     "food": "spinach",
//                     "weight": 19.99999999999998,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
//                     "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
//                 },
//                 {
//                     "text": "1 cup cooked wheat berries",
//                     "quantity": 1,
//                     "measure": "cup",
//                     "food": "cooked wheat berries",
//                     "weight": 107,
//                     "foodCategory": "grains",
//                     "foodId": "food_aup73tlbxslvhwa3ja27ca2gr51o",
//                     "image": "https://www.edamam.com/food-img/738/73846a8750bb3134aada6b711dc2919d.jpg"
//                 },
//                 {
//                     "text": "1/2 cup grapefruit segments",
//                     "quantity": 0.5,
//                     "measure": "cup",
//                     "food": "grapefruit",
//                     "weight": 115,
//                     "foodCategory": "fruit",
//                     "foodId": "food_a5jyw74bd45tgfazfags0akmsjlv",
//                     "image": "https://www.edamam.com/food-img/ac6/ac6139365343036d75bd5999cca5145f.jpg"
//                 },
//                 {
//                     "text": "3 ounces chopped grilled chicken",
//                     "quantity": 3,
//                     "measure": "ounce",
//                     "food": "chicken",
//                     "weight": 85.048569375,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
//                     "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
//                 }
//             ],
//             "calories": 469.25642415625,
//             "totalCO2Emissions": 1049.9174765132,
//             "co2EmissionsClass": "C",
//             "totalWeight": 351.89856937499997,
//             "totalTime": 5,
//             "cuisineType": [
//                 "american"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "salad"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 469.25642415625,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 23.887108975625004,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 5.2037513400624995,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0.08249711229375001,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 12.083552728999999,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 4.3715667908124995,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 43.13452,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 37.14932,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 5.9852,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 9.363875,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 23.661128903750004,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 63.78642703125001,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 80.79549856249999,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 63.99034263124997,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 102.40971387499998,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 561.07079611875,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 3.6189371243749995,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 2.7639662588125002,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 282.67689698125,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 131.4449134437499,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 45.619177109999995,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 0.278781641625,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 0.27055578324999996,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 9.603802717499999,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 0.49568499281249995,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 78.57891416249997,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 78.57891416249997,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 0.2636505650625,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.17009713875000002,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 2.3720057081249997,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 108.22262854062488,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 259.0189307875,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 23.4628212078125,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 36.74939842403847,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 26.018756700312498,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 14.378173333333335,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 23.9408,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 47.32225780750001,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 21.26214234375,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 3.3664791067708326,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 6.399034263124997,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 24.383265208333327,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 11.937676513164893,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 20.105206246527775,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 25.12696598920455,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 40.38241385446429,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 14.604990382638878,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 50.687974566666654,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 23.23180346875,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 20.811983326923073,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 60.023766984374994,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 38.12961483173076,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 19.644728540624993,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 10.985440210937501,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 1.1339809250000001,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 15.813371387499997,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 90.18552378385407,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 23.887108975625004,
//                     "hasRDI": true,
//                     "daily": 36.74939842403847,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 5.2037513400624995,
//                             "hasRDI": true,
//                             "daily": 26.018756700312498,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0.08249711229375001,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 12.083552728999999,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 4.3715667908124995,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 43.13452,
//                     "hasRDI": true,
//                     "daily": 14.378173333333335,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 37.14932,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 5.9852,
//                             "hasRDI": true,
//                             "daily": 23.9408,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 9.363875,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 23.661128903750004,
//                     "hasRDI": true,
//                     "daily": 47.32225780750001,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 63.78642703125001,
//                     "hasRDI": true,
//                     "daily": 21.26214234375,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 80.79549856249999,
//                     "hasRDI": true,
//                     "daily": 3.3664791067708326,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 63.99034263124997,
//                     "hasRDI": true,
//                     "daily": 6.399034263124997,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 102.40971387499998,
//                     "hasRDI": true,
//                     "daily": 24.383265208333327,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 561.07079611875,
//                     "hasRDI": true,
//                     "daily": 11.937676513164893,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 3.6189371243749995,
//                     "hasRDI": true,
//                     "daily": 20.105206246527775,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 2.7639662588125002,
//                     "hasRDI": true,
//                     "daily": 25.12696598920455,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 282.67689698125,
//                     "hasRDI": true,
//                     "daily": 40.38241385446429,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 131.4449134437499,
//                     "hasRDI": true,
//                     "daily": 14.604990382638878,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 45.619177109999995,
//                     "hasRDI": true,
//                     "daily": 50.687974566666654,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 0.278781641625,
//                     "hasRDI": true,
//                     "daily": 23.23180346875,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 0.27055578324999996,
//                     "hasRDI": true,
//                     "daily": 20.811983326923073,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 9.603802717499999,
//                     "hasRDI": true,
//                     "daily": 60.023766984374994,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 0.49568499281249995,
//                     "hasRDI": true,
//                     "daily": 38.12961483173076,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 78.57891416249997,
//                     "hasRDI": true,
//                     "daily": 19.644728540624993,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 78.57891416249997,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 0.2636505650625,
//                     "hasRDI": true,
//                     "daily": 10.985440210937501,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 0.17009713875000002,
//                     "hasRDI": true,
//                     "daily": 1.1339809250000001,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 2.3720057081249997,
//                     "hasRDI": true,
//                     "daily": 15.813371387499997,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 108.22262854062488,
//                     "hasRDI": true,
//                     "daily": 90.18552378385407,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 259.0189307875,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/bdbe1acb3c1b6509e20da0c283030c38?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_637ae2c10b1724deeb6c7e51f25c1620",
//             "label": "Peruvian Grilled Chicken",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b4f/b4fa53a30f13e83d7e4c2d4e77a31e57.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=451988c8738bad12fac394595d81aa82edce94d3cd3157f5b3d3fe80120f5c36",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b4f/b4fa53a30f13e83d7e4c2d4e77a31e57-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e2430e8eb69182229a63cc7c714dbb35dd88762139122c6127626ef0d7c561d5",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b4f/b4fa53a30f13e83d7e4c2d4e77a31e57-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=30a0aae4c4ac13bea9b9c9784cebc3d95735999b6052815135a55edbe275434b",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b4f/b4fa53a30f13e83d7e4c2d4e77a31e57.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=451988c8738bad12fac394595d81aa82edce94d3cd3157f5b3d3fe80120f5c36",
//                     "width": 300,
//                     "height": 300
//                 }
//             },
//             "source": "Epicurious",
//             "url": "https://www.epicurious.com/recipes/food/views/peruvian-grilled-chicken-239923",
//             "shareAs": "http://www.edamam.com/recipe/peruvian-grilled-chicken-637ae2c10b1724deeb6c7e51f25c1620/grilled+chicken",
//             "yield": 4,
//             "dietLabels": [
//                 "Low-Carb"
//             ],
//             "healthLabels": [
//                 "Sugar-Conscious",
//                 "Keto-Friendly",
//                 "Mediterranean",
//                 "Dairy-Free",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Kosher"
//             ],
//             "cautions": [
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "1/3 cup soy sauce",
//                 "2 tablespoons fresh lime juice",
//                 "5 garlic cloves",
//                 "2 teaspoons ground cumin",
//                 "1 teaspoon paprika",
//                 "1/2 teaspoon dried oregano",
//                 "1 tablespoon vegetable oil",
//                 "1 whole chicken (about 3 1/2 pounds), quartered",
//                 "Accompaniment: lime wedges"
//             ],
//             "ingredients": [
//                 {
//                     "text": "1/3 cup soy sauce",
//                     "quantity": 0.3333333333333333,
//                     "measure": "cup",
//                     "food": "soy sauce",
//                     "weight": 85,
//                     "foodCategory": "plant-based protein",
//                     "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
//                     "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
//                 },
//                 {
//                     "text": "2 tablespoons fresh lime juice",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "lime juice",
//                     "weight": 30.799999999479265,
//                     "foodCategory": "fruit",
//                     "foodId": "food_b0iywbmaujvd4eblrooo9bsvn7e6",
//                     "image": "https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg"
//                 },
//                 {
//                     "text": "5 garlic cloves",
//                     "quantity": 5,
//                     "measure": "clove",
//                     "food": "garlic",
//                     "weight": 15,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
//                     "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
//                 },
//                 {
//                     "text": "2 teaspoons ground cumin",
//                     "quantity": 2,
//                     "measure": "teaspoon",
//                     "food": "cumin",
//                     "weight": 4.2,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
//                     "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
//                 },
//                 {
//                     "text": "1 teaspoon paprika",
//                     "quantity": 1,
//                     "measure": "teaspoon",
//                     "food": "paprika",
//                     "weight": 2.3,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
//                     "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
//                 },
//                 {
//                     "text": "1/2 teaspoon dried oregano",
//                     "quantity": 0.5,
//                     "measure": "teaspoon",
//                     "food": "dried oregano",
//                     "weight": 0.5,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
//                     "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
//                 },
//                 {
//                     "text": "1 tablespoon vegetable oil",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "vegetable oil",
//                     "weight": 14,
//                     "foodCategory": "Oils",
//                     "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
//                     "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
//                 },
//                 {
//                     "text": "1 whole chicken (about 3 1/2 pounds), quartered",
//                     "quantity": 3.5,
//                     "measure": "pound",
//                     "food": "chicken",
//                     "weight": 1587.5732950000001,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
//                     "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
//                 },
//                 {
//                     "text": "Accompaniment: lime wedges",
//                     "quantity": 1,
//                     "measure": "wedge",
//                     "food": "lime",
//                     "weight": 8.375,
//                     "foodCategory": "fruit",
//                     "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
//                     "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
//                 }
//             ],
//             "calories": 2545.96565728987,
//             "totalCO2Emissions": 16041.758570201298,
//             "co2EmissionsClass": "G",
//             "totalWeight": 1747.7482949994794,
//             "totalTime": 0,
//             "cuisineType": [
//                 "south american"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "main course"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 2545.96565728987,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 178.86453593059963,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 47.641354629859954,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 1.154543345382,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 78.15509530343998,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 37.85937010137988,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 16.071134999956154,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 13.262234999958237,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 2.808899999997917,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 1.5039074999911997,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 209.97415535159783,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 809.66238045,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 5434.2633884199895,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 233.39523246592708,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 306.3424681199583,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 2648.7476987333907,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 14.739518565399532,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 15.404095411859585,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 1785.7277656819272,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 503.09193464598957,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 33.985522449443785,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 0.7508434043598698,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 1.503168808719922,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 75.89273516079926,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 4.178219692099802,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 83.60499043594793,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 83.60499043594793,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 3.34660450586,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 2.1590996812000003,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 7.289494521798855,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 21.866997608996876,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 817.8201897955271,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 127.29828286449349,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 275.17620912399946,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 238.20677314929975,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 5.357044999985385,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 11.235599999991669,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 419.94831070319566,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 269.88746015000004,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 226.42764118416622,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 23.33952324659271,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 72.93868288570437,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 56.35633401560406,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 81.88621425221963,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 140.0372310169053,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 255.10396652598962,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 55.89910384955439,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 37.761691610493095,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 62.57028369665583,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 115.62836990153245,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 474.3295947549954,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 321.40151477690785,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 20.90124760898698,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 139.44185441083332,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 14.393997874666669,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 48.5966301453257,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 18.222498007497396,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 178.86453593059963,
//                     "hasRDI": true,
//                     "daily": 275.17620912399946,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 47.641354629859954,
//                             "hasRDI": true,
//                             "daily": 238.20677314929975,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 1.154543345382,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 78.15509530343998,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 37.85937010137988,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 16.071134999956154,
//                     "hasRDI": true,
//                     "daily": 5.357044999985385,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 13.262234999958237,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 2.808899999997917,
//                             "hasRDI": true,
//                             "daily": 11.235599999991669,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 1.5039074999911997,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 209.97415535159783,
//                     "hasRDI": true,
//                     "daily": 419.94831070319566,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 809.66238045,
//                     "hasRDI": true,
//                     "daily": 269.88746015000004,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 5434.2633884199895,
//                     "hasRDI": true,
//                     "daily": 226.42764118416622,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 233.39523246592708,
//                     "hasRDI": true,
//                     "daily": 23.33952324659271,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 306.3424681199583,
//                     "hasRDI": true,
//                     "daily": 72.93868288570437,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 2648.7476987333907,
//                     "hasRDI": true,
//                     "daily": 56.35633401560406,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 14.739518565399532,
//                     "hasRDI": true,
//                     "daily": 81.88621425221963,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 15.404095411859585,
//                     "hasRDI": true,
//                     "daily": 140.0372310169053,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 1785.7277656819272,
//                     "hasRDI": true,
//                     "daily": 255.10396652598962,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 503.09193464598957,
//                     "hasRDI": true,
//                     "daily": 55.89910384955439,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 33.985522449443785,
//                     "hasRDI": true,
//                     "daily": 37.761691610493095,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 0.7508434043598698,
//                     "hasRDI": true,
//                     "daily": 62.57028369665583,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 1.503168808719922,
//                     "hasRDI": true,
//                     "daily": 115.62836990153245,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 75.89273516079926,
//                     "hasRDI": true,
//                     "daily": 474.3295947549954,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 4.178219692099802,
//                     "hasRDI": true,
//                     "daily": 321.40151477690785,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 83.60499043594793,
//                     "hasRDI": true,
//                     "daily": 20.90124760898698,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 83.60499043594793,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 3.34660450586,
//                     "hasRDI": true,
//                     "daily": 139.44185441083332,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 2.1590996812000003,
//                     "hasRDI": true,
//                     "daily": 14.393997874666669,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 7.289494521798855,
//                     "hasRDI": true,
//                     "daily": 48.5966301453257,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 21.866997608996876,
//                     "hasRDI": true,
//                     "daily": 18.222498007497396,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 817.8201897955271,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/637ae2c10b1724deeb6c7e51f25c1620?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_05f5f5e91e4553a7209739d6eaa9550d",
//             "label": "Grilled Chicken Chimichurri Recipe",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e1d/e1dea7bfbffa8a19757f32d881a47d6a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=965c5768605d32d9c59d49ca9ef757462bb57d27922ab259a5836088d8c8948b",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e1d/e1dea7bfbffa8a19757f32d881a47d6a-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f67b668c334b62d3403248a7c86841cc8cd3785a09d86d3e0834e0ea3b902267",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e1d/e1dea7bfbffa8a19757f32d881a47d6a-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fdb97fc741d153a46541b4f85af970657d24099f6cf7f41f3125273eb74bdc81",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e1d/e1dea7bfbffa8a19757f32d881a47d6a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=965c5768605d32d9c59d49ca9ef757462bb57d27922ab259a5836088d8c8948b",
//                     "width": 300,
//                     "height": 300
//                 },
//                 "LARGE": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e1d/e1dea7bfbffa8a19757f32d881a47d6a-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9acf9a9d7df766db0a7824c63f34c5b3673c4a5425b1a4954d1b19667692b9c0",
//                     "width": 600,
//                     "height": 600
//                 }
//             },
//             "source": "Food Republic",
//             "url": "http://www.foodrepublic.com/2011/06/21/grilled-chicken-chimichurri-recipe",
//             "shareAs": "http://www.edamam.com/recipe/grilled-chicken-chimichurri-recipe-05f5f5e91e4553a7209739d6eaa9550d/grilled+chicken",
//             "yield": 4,
//             "dietLabels": [
//                 "Low-Carb"
//             ],
//             "healthLabels": [
//                 "Sugar-Conscious",
//                 "Keto-Friendly",
//                 "Mediterranean",
//                 "Dairy-Free",
//                 "Gluten-Free",
//                 "Wheat-Free",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free",
//                 "Kosher"
//             ],
//             "cautions": [],
//             "ingredientLines": [
//                 "1/2 cup olive oil",
//                 "4 cloves garlic, peeled",
//                 "3 tablespoons red wine vinegar",
//                 "2 tablespoons fresh oregano",
//                 "1 cup fresh parsley",
//                 "Kosher salt and freshly ground black pepper to taste",
//                 "1 pound (4 individual breast) chicken breast",
//                 "vegetable oil, for prepping grill and oiling chicken",
//                 "Salt and pepper, for seasoning"
//             ],
//             "ingredients": [
//                 {
//                     "text": "1/2 cup olive oil",
//                     "quantity": 0.5,
//                     "measure": "cup",
//                     "food": "olive oil",
//                     "weight": 108,
//                     "foodCategory": "Oils",
//                     "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
//                     "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
//                 },
//                 {
//                     "text": "4 cloves garlic, peeled",
//                     "quantity": 4,
//                     "measure": "clove",
//                     "food": "garlic",
//                     "weight": 12,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
//                     "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
//                 },
//                 {
//                     "text": "3 tablespoons red wine vinegar",
//                     "quantity": 3,
//                     "measure": "tablespoon",
//                     "food": "red wine vinegar",
//                     "weight": 44.7,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_ad6iyy1anmzb49a817rgnabnz8c9",
//                     "image": "https://www.edamam.com/food-img/dc8/dc8e998b32b8d45ba15c1b1e6711e958.jpg"
//                 },
//                 {
//                     "text": "2 tablespoons fresh oregano",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "oregano",
//                     "weight": 5.999999999594229,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
//                     "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
//                 },
//                 {
//                     "text": "1 cup fresh parsley",
//                     "quantity": 1,
//                     "measure": "cup",
//                     "food": "parsley",
//                     "weight": 60,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
//                     "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
//                 },
//                 {
//                     "text": "Kosher salt and freshly ground black pepper to taste",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "Kosher salt",
//                     "weight": 4.105754219997566,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
//                     "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
//                 },
//                 {
//                     "text": "Kosher salt and freshly ground black pepper to taste",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "black pepper",
//                     "weight": 2.052877109998783,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
//                     "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
//                 },
//                 {
//                     "text": "1 pound (4 individual breast) chicken breast",
//                     "quantity": 1,
//                     "measure": "pound",
//                     "food": "chicken breast",
//                     "weight": 453.59237,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
//                     "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
//                 },
//                 {
//                     "text": "vegetable oil, for prepping grill and oiling chicken",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "vegetable oil",
//                     "weight": 9.30637623199448,
//                     "foodCategory": "Oils",
//                     "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
//                     "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
//                 },
//                 {
//                     "text": "Salt and pepper, for seasoning",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "Salt",
//                     "weight": 4.105754219997566,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
//                     "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
//                 },
//                 {
//                     "text": "Salt and pepper, for seasoning",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "pepper",
//                     "weight": 2.052877109998783,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
//                     "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
//                 }
//             ],
//             "calories": 1655.47765298195,
//             "totalCO2Emissions": 5319.699072448894,
//             "co2EmissionsClass": "F",
//             "totalWeight": 701.2475008236643,
//             "totalTime": 0,
//             "cuisineType": [
//                 "south american"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "condiments and sauces"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 1655.47765298195,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 130.11514391354902,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 18.30352011945452,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0.10313137159939767,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 88.91746384001893,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 15.082077411581073,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 14.652372700518866,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 8.831616883031934,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 5.820755817486931,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 0.9016768269913884,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 105.58836168884324,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 331.12243010000003,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 1622.497861710155,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 246.00042977739562,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 185.05013331882105,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 2044.5214869506212,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 9.026602404840297,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 4.092839591579135,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 1038.2548397669957,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 299.6318669390544,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 83.90549999999067,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 0.5170310423568791,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 0.9139288524938532,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 44.74007311808914,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 3.955781865475974,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 147.3012915164379,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 147.3012915164379,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 0.952543977,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 21.721207134388514,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 1093.2734369182722,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 438.21436670820367,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 82.7738826490975,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 200.1771444823831,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 91.5176005972726,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 4.884124233506288,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 23.28302326994772,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 211.17672337768647,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 110.37414336666669,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 67.60407757125645,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 24.600042977739562,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 44.05955555210025,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 43.50045716916215,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 50.14779113800165,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 37.207632650719404,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 148.32211996671367,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 33.292429659894935,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 93.22833333332295,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 43.0859201964066,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 70.3022194226041,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 279.6254569880571,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 304.29091272892106,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 36.82532287910948,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 39.689332375,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 144.8080475625901,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 911.0611974318934,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 130.11514391354902,
//                     "hasRDI": true,
//                     "daily": 200.1771444823831,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 18.30352011945452,
//                             "hasRDI": true,
//                             "daily": 91.5176005972726,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0.10313137159939767,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 88.91746384001893,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 15.082077411581073,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 14.652372700518866,
//                     "hasRDI": true,
//                     "daily": 4.884124233506288,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 8.831616883031934,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 5.820755817486931,
//                             "hasRDI": true,
//                             "daily": 23.28302326994772,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 0.9016768269913884,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 105.58836168884324,
//                     "hasRDI": true,
//                     "daily": 211.17672337768647,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 331.12243010000003,
//                     "hasRDI": true,
//                     "daily": 110.37414336666669,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 1622.497861710155,
//                     "hasRDI": true,
//                     "daily": 67.60407757125645,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 246.00042977739562,
//                     "hasRDI": true,
//                     "daily": 24.600042977739562,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 185.05013331882105,
//                     "hasRDI": true,
//                     "daily": 44.05955555210025,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 2044.5214869506212,
//                     "hasRDI": true,
//                     "daily": 43.50045716916215,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 9.026602404840297,
//                     "hasRDI": true,
//                     "daily": 50.14779113800165,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 4.092839591579135,
//                     "hasRDI": true,
//                     "daily": 37.207632650719404,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 1038.2548397669957,
//                     "hasRDI": true,
//                     "daily": 148.32211996671367,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 299.6318669390544,
//                     "hasRDI": true,
//                     "daily": 33.292429659894935,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 83.90549999999067,
//                     "hasRDI": true,
//                     "daily": 93.22833333332295,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 0.5170310423568791,
//                     "hasRDI": true,
//                     "daily": 43.0859201964066,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 0.9139288524938532,
//                     "hasRDI": true,
//                     "daily": 70.3022194226041,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 44.74007311808914,
//                     "hasRDI": true,
//                     "daily": 279.6254569880571,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 3.955781865475974,
//                     "hasRDI": true,
//                     "daily": 304.29091272892106,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 147.3012915164379,
//                     "hasRDI": true,
//                     "daily": 36.82532287910948,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 147.3012915164379,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 0.952543977,
//                     "hasRDI": true,
//                     "daily": 39.689332375,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": true,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 21.721207134388514,
//                     "hasRDI": true,
//                     "daily": 144.8080475625901,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 1093.2734369182722,
//                     "hasRDI": true,
//                     "daily": 911.0611974318934,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 438.21436670820367,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/05f5f5e91e4553a7209739d6eaa9550d?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b8fdff80b9935ad8ac8e35923903eb92",
//             "label": "Grilled Chicken with Lemon Basil Pasta recipes",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6d4/6d42f65bc96522823064338079aa4ce2?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aec23a52481476eb7fd321ae07b9043083bf69c97232499d5806c69580456ab6",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6d4/6d42f65bc96522823064338079aa4ce2-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=73c3bad77933a20576f204e0095bdf1c283a8c2545564a88e02ca0d7926fe6d3",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6d4/6d42f65bc96522823064338079aa4ce2-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c776778b60f8f4284759b4d37d7d40213d0748a88fb81f8d7eaeed1785064faf",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6d4/6d42f65bc96522823064338079aa4ce2?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aec23a52481476eb7fd321ae07b9043083bf69c97232499d5806c69580456ab6",
//                     "width": 300,
//                     "height": 300
//                 }
//             },
//             "source": "Pioneer Woman",
//             "url": "http://thepioneerwoman.com/cooking/grilled-chicken-with-lemon-basil-pasta/",
//             "shareAs": "http://www.edamam.com/recipe/grilled-chicken-with-lemon-basil-pasta-recipes-b8fdff80b9935ad8ac8e35923903eb92/grilled+chicken",
//             "yield": 8,
//             "dietLabels": [],
//             "healthLabels": [
//                 "Sugar-Conscious",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free"
//             ],
//             "cautions": [
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "4 whole Grilled Chicken Breasts, Sliced",
//                 "1 pound Penne Pasta, Cooked Until Al Dente",
//                 "1/2 stick Butter",
//                 "3 whole Lemons, Juiced",
//                 "3/4 cups Heavy Cream",
//                 "1/4 cup Half-and-half",
//                 "1-1/2 cup Grated Parmesan Cheese (or Romano)",
//                 "salt",
//                 "ground black pepper",
//                 "20 whole Basil Leaves, Chopped"
//             ],
//             "ingredients": [
//                 {
//                     "text": "4 whole Grilled Chicken Breasts, Sliced",
//                     "quantity": 4,
//                     "measure": "<unit>",
//                     "food": "Grilled Chicken Breasts",
//                     "weight": 208,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bncmum7a55r0byaf6mm9xbnk39my",
//                     "image": "https://www.edamam.com/food-img/44c/44c95571e5b3071f266e0e742e670585.jpg"
//                 },
//                 {
//                     "text": "1 pound Penne Pasta, Cooked Until Al Dente",
//                     "quantity": 1,
//                     "measure": "pound",
//                     "food": "Pasta",
//                     "weight": 453.59237,
//                     "foodCategory": "grains",
//                     "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
//                     "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
//                 },
//                 {
//                     "text": "1/2 stick Butter",
//                     "quantity": 0.5,
//                     "measure": "stick",
//                     "food": "Butter",
//                     "weight": 56.5,
//                     "foodCategory": "Dairy",
//                     "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
//                     "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
//                 },
//                 {
//                     "text": "3 whole Lemons, Juiced",
//                     "quantity": 3,
//                     "measure": "<unit>",
//                     "food": "Lemons",
//                     "weight": 252,
//                     "foodCategory": "fruit",
//                     "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
//                     "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
//                 },
//                 {
//                     "text": "3/4 cups Heavy Cream",
//                     "quantity": 0.75,
//                     "measure": "cup",
//                     "food": "Heavy Cream",
//                     "weight": 178.5,
//                     "foodCategory": "Dairy",
//                     "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
//                     "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
//                 },
//                 {
//                     "text": "1/4 cup Half-and-half",
//                     "quantity": 0.25,
//                     "measure": "cup",
//                     "food": "Half-and-half",
//                     "weight": 60.5,
//                     "foodCategory": "Dairy",
//                     "foodId": "food_bhxfjwwbw6wqyjaxv9zugbqayb0p",
//                     "image": "https://www.edamam.com/food-img/8f6/8f6397fd80a05aa12ee3b990737388a5.jpg"
//                 },
//                 {
//                     "text": "1-1/2 cup Grated Parmesan Cheese (or Romano)",
//                     "quantity": 1.5,
//                     "measure": "cup",
//                     "food": "Parmesan Cheese",
//                     "weight": 223.05937500000002,
//                     "foodCategory": "Cheese",
//                     "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
//                     "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
//                 },
//                 {
//                     "text": "salt",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "salt",
//                     "weight": 8.65291047,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
//                     "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
//                 },
//                 {
//                     "text": "ground black pepper",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "black pepper",
//                     "weight": 4.326455235,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
//                     "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
//                 },
//                 {
//                     "text": "20 whole Basil Leaves, Chopped",
//                     "quantity": 20,
//                     "measure": "leaf",
//                     "food": "Basil",
//                     "weight": 10,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
//                     "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
//                 }
//             ],
//             "calories": 4077.9198453398503,
//             "totalCO2Emissions": 15948.189964520368,
//             "co2EmissionsClass": "F",
//             "totalWeight": 1447.6454674175657,
//             "totalTime": 30,
//             "cuisineType": [
//                 "italian"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "main course"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 4077.9198453398503,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 188.21823097766102,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 110.3732060926665,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 2.49412,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 51.67050045688665,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 10.5736968337953,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 380.1050659044,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 357.279516889945,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 22.825549014455003,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 26.458720905004,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 214.46395264244,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 672.835375,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 3363.756125082488,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 3057.3263635148655,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 452.5149922236756,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 2447.0958461001055,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 12.361988470020968,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 15.609837313979067,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 3106.8824410713,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 1683.0810491634504,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 136.9755,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 0.8063738609037999,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 1.7877801664230002,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 37.40699778592901,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 2.419195181383851,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 151.48628023995005,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 151.48628023995005,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 3.8805125000000005,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 4.179296875,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 5.158527366444001,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 63.9184883304,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 642.5910985687402,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 203.89599226699252,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 289.56650919640157,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 551.8660304633325,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 126.7016886348,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 91.30219605782003,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 428.92790528488,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 224.27845833333336,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 140.1565052117703,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 305.7326363514866,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 107.74166481516087,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 52.065869065959696,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 68.67771372233871,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 141.90761194526425,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 443.8403487244714,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 187.0090054626056,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 152.19500000000002,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 67.19782174198333,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 137.5215512633077,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 233.7937361620563,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 186.09193702952697,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 37.87157005998751,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 161.68802083333335,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 27.86197916666667,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 34.39018244296001,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 53.265406942000006,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 188.21823097766102,
//                     "hasRDI": true,
//                     "daily": 289.56650919640157,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 110.3732060926665,
//                             "hasRDI": true,
//                             "daily": 551.8660304633325,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 2.49412,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 51.67050045688665,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 10.5736968337953,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 380.1050659044,
//                     "hasRDI": true,
//                     "daily": 126.7016886348,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 357.279516889945,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 22.825549014455003,
//                             "hasRDI": true,
//                             "daily": 91.30219605782003,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 26.458720905004,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 214.46395264244,
//                     "hasRDI": true,
//                     "daily": 428.92790528488,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 672.835375,
//                     "hasRDI": true,
//                     "daily": 224.27845833333336,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 3363.756125082488,
//                     "hasRDI": true,
//                     "daily": 140.1565052117703,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 3057.3263635148655,
//                     "hasRDI": true,
//                     "daily": 305.7326363514866,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 452.5149922236756,
//                     "hasRDI": true,
//                     "daily": 107.74166481516087,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 2447.0958461001055,
//                     "hasRDI": true,
//                     "daily": 52.065869065959696,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 12.361988470020968,
//                     "hasRDI": true,
//                     "daily": 68.67771372233871,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 15.609837313979067,
//                     "hasRDI": true,
//                     "daily": 141.90761194526425,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 3106.8824410713,
//                     "hasRDI": true,
//                     "daily": 443.8403487244714,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 1683.0810491634504,
//                     "hasRDI": true,
//                     "daily": 187.0090054626056,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 136.9755,
//                     "hasRDI": true,
//                     "daily": 152.19500000000002,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 0.8063738609037999,
//                     "hasRDI": true,
//                     "daily": 67.19782174198333,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 1.7877801664230002,
//                     "hasRDI": true,
//                     "daily": 137.5215512633077,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 37.40699778592901,
//                     "hasRDI": true,
//                     "daily": 233.7937361620563,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 2.419195181383851,
//                     "hasRDI": true,
//                     "daily": 186.09193702952697,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 151.48628023995005,
//                     "hasRDI": true,
//                     "daily": 37.87157005998751,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 151.48628023995005,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 3.8805125000000005,
//                     "hasRDI": true,
//                     "daily": 161.68802083333335,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 4.179296875,
//                     "hasRDI": true,
//                     "daily": 27.86197916666667,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 5.158527366444001,
//                     "hasRDI": true,
//                     "daily": 34.39018244296001,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 63.9184883304,
//                     "hasRDI": true,
//                     "daily": 53.265406942000006,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 642.5910985687402,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/b8fdff80b9935ad8ac8e35923903eb92?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_14b4ecf51010958145d0634f7953d43c",
//             "label": "Grilled Chicken Caesar",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e50/e50e6fd7700a93fec0bc5ffef83bb5ce.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=44c3a657ad06414e0e27db5731d78f9c37ada9f015dc37b772120a2688c57580",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e50/e50e6fd7700a93fec0bc5ffef83bb5ce-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7135d09b9c4087993990271d320c2ea95bda7abe8049f52cef1c38d23339b51e",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e50/e50e6fd7700a93fec0bc5ffef83bb5ce-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0e302d3043898c09fd55d59fe78ee2ad937cf04f5e11ee2edce5246f68dbecd6",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e50/e50e6fd7700a93fec0bc5ffef83bb5ce.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=44c3a657ad06414e0e27db5731d78f9c37ada9f015dc37b772120a2688c57580",
//                     "width": 300,
//                     "height": 300
//                 }
//             },
//             "source": "Food Network",
//             "url": "https://www.foodnetwork.com/recipes/ellie-krieger/grilled-chicken-caesar-recipe-1957615",
//             "shareAs": "http://www.edamam.com/recipe/grilled-chicken-caesar-14b4ecf51010958145d0634f7953d43c/grilled+chicken",
//             "yield": 4,
//             "dietLabels": [
//                 "Low-Carb"
//             ],
//             "healthLabels": [
//                 "Sugar-Conscious",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free",
//                 "Immuno-Supportive"
//             ],
//             "cautions": [
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "1/4 cup pasteurized egg product",
//                 "1 clove of garlic, minced (about 1/2 teaspoon)",
//                 "1 1/2 teaspoons anchovy paste",
//                 "1/2 teaspoon Dijon mustard",
//                 "1/4 teaspoon Worcestershire sauce",
//                 "2 tablespoons lemon juice",
//                 "2 tablespoons olive oil",
//                 "1/4 cup finely grated Parmesan",
//                 "Salt",
//                 "Freshly ground black pepper",
//                 "6 cups coarsely torn romaine lettuce",
//                 "2 cups of baby spinach leaves",
//                 "2 cups of whole-grain croutons",
//                 "4 grilled chicken breast halves (about 4 ounces each), sliced"
//             ],
//             "ingredients": [
//                 {
//                     "text": "1/4 cup pasteurized egg product",
//                     "quantity": 0.25,
//                     "measure": "cup",
//                     "food": "egg",
//                     "weight": 60.75,
//                     "foodCategory": "Eggs",
//                     "foodId": "food_bhpradua77pk16aipcvzeayg732r",
//                     "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
//                 },
//                 {
//                     "text": "1 clove of garlic, minced (about 1/2 teaspoon)",
//                     "quantity": 0.5,
//                     "measure": "teaspoon",
//                     "food": "garlic",
//                     "weight": 1.4,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
//                     "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
//                 },
//                 {
//                     "text": "1 1/2 teaspoons anchovy paste",
//                     "quantity": 1.5,
//                     "measure": "teaspoon",
//                     "food": "anchovy paste",
//                     "weight": 6,
//                     "foodCategory": "canned seafood",
//                     "foodId": "food_awzkfobba3yz6ebfpan4ka2ycs5r",
//                     "image": "https://www.edamam.com/food-img/903/903f0e875a690dce724b7f4b6f09f931.jpg"
//                 },
//                 {
//                     "text": "1/2 teaspoon Dijon mustard",
//                     "quantity": 0.5,
//                     "measure": "teaspoon",
//                     "food": "Dijon mustard",
//                     "weight": 2.5,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
//                     "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
//                 },
//                 {
//                     "text": "1/4 teaspoon Worcestershire sauce",
//                     "quantity": 0.25,
//                     "measure": "teaspoon",
//                     "food": "Worcestershire sauce",
//                     "weight": 1.432291666739314,
//                     "foodCategory": "canned soup",
//                     "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
//                     "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
//                 },
//                 {
//                     "text": "2 tablespoons lemon juice",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "lemon juice",
//                     "weight": 30.4999999994844,
//                     "foodCategory": "100% juice",
//                     "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
//                     "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
//                 },
//                 {
//                     "text": "2 tablespoons olive oil",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "olive oil",
//                     "weight": 27,
//                     "foodCategory": "Oils",
//                     "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
//                     "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
//                 },
//                 {
//                     "text": "1/4 cup finely grated Parmesan",
//                     "quantity": 0.25,
//                     "measure": "cup",
//                     "food": "Parmesan",
//                     "weight": 37.1765625,
//                     "foodCategory": "Cheese",
//                     "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
//                     "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
//                 },
//                 {
//                     "text": "Salt",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "Salt",
//                     "weight": 5.894107344997343,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
//                     "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
//                 },
//                 {
//                     "text": "Freshly ground black pepper",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "black pepper",
//                     "weight": 2.9470536724986713,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
//                     "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
//                 },
//                 {
//                     "text": "6 cups coarsely torn romaine lettuce",
//                     "quantity": 6,
//                     "measure": "cup",
//                     "food": "romaine lettuce",
//                     "weight": 282,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bfmb5cybk1o247bmrmry4a6jvp60",
//                     "image": "https://www.edamam.com/food-img/79e/79e8dd0ee229cbc32171ec362ce93a37.jpg"
//                 },
//                 {
//                     "text": "2 cups of baby spinach leaves",
//                     "quantity": 2,
//                     "measure": "cup",
//                     "food": "spinach",
//                     "weight": 19.99999999999998,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
//                     "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
//                 },
//                 {
//                     "text": "2 cups of whole-grain croutons",
//                     "quantity": 2,
//                     "measure": "cup",
//                     "food": "whole-grain croutons",
//                     "weight": 60,
//                     "foodCategory": "bread, rolls and tortillas",
//                     "foodId": "food_avw9vq0bec9nnsbe32ezzamb4hv3",
//                     "image": "https://www.edamam.com/food-img/a92/a926476114784bca74068f950ba49fe2.jpg"
//                 },
//                 {
//                     "text": "4 grilled chicken breast halves (about 4 ounces each), sliced",
//                     "quantity": 16,
//                     "measure": "ounce",
//                     "food": "grilled chicken breast",
//                     "weight": 453.59237,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bncmum7a55r0byaf6mm9xbnk39my",
//                     "image": "https://www.edamam.com/food-img/44c/44c95571e5b3071f266e0e742e670585.jpg"
//                 }
//             ],
//             "calories": 1338.2883298612476,
//             "totalCO2Emissions": 7679.218367298888,
//             "co2EmissionsClass": "F",
//             "totalWeight": 987.3588881080789,
//             "totalTime": 20,
//             "cuisineType": [
//                 "american"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "salad"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 1338.2883298612476,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 59.45697785320221,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 15.648470010687529,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0.02331,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 30.955102905999734,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 8.180028335556429,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 60.61304966287752,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 50.224545083736906,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 10.388504579140616,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 4.67315952891493,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 135.71590994093805,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 533.96859294,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 2291.2914391483932,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 715.3629597771948,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 205.00404015531143,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 1961.1968898831642,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 11.376192862885269,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 6.594237435888639,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 1314.2252981445504,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 1518.7829938339116,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 29.333997916476566,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 0.8832598359878923,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 1.2001139805731813,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 50.46942481470819,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 2.413800636461734,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 599.6509020885608,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 487.4509020885607,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 66,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 2.1499878717600005,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 1.8294693189000002,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 6.549512196306605,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 407.9203020212651,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 594.6367093167155,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 66.91441649306238,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 91.4722736203111,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 78.24235005343765,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 20.20434988762584,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 41.55401831656246,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 271.4318198818761,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 177.98953098,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 95.47047663118305,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 71.53629597771948,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 48.81048575126462,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 41.727593401769454,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 63.20107146047371,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 59.94761305353308,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 187.7464711635072,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 168.75366598154574,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 32.593331018307296,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 73.60498633232436,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 92.31646004409087,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 315.4339050919262,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 185.67697203551802,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 149.9127255221402,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 89.58282799000003,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 12.196462126000002,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 43.66341464204403,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 339.93358501772093,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 59.45697785320221,
//                     "hasRDI": true,
//                     "daily": 91.4722736203111,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 15.648470010687529,
//                             "hasRDI": true,
//                             "daily": 78.24235005343765,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0.02331,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 30.955102905999734,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 8.180028335556429,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 60.61304966287752,
//                     "hasRDI": true,
//                     "daily": 20.20434988762584,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 50.224545083736906,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 10.388504579140616,
//                             "hasRDI": true,
//                             "daily": 41.55401831656246,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 4.67315952891493,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 135.71590994093805,
//                     "hasRDI": true,
//                     "daily": 271.4318198818761,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 533.96859294,
//                     "hasRDI": true,
//                     "daily": 177.98953098,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 2291.2914391483932,
//                     "hasRDI": true,
//                     "daily": 95.47047663118305,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 715.3629597771948,
//                     "hasRDI": true,
//                     "daily": 71.53629597771948,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 205.00404015531143,
//                     "hasRDI": true,
//                     "daily": 48.81048575126462,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 1961.1968898831642,
//                     "hasRDI": true,
//                     "daily": 41.727593401769454,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 11.376192862885269,
//                     "hasRDI": true,
//                     "daily": 63.20107146047371,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 6.594237435888639,
//                     "hasRDI": true,
//                     "daily": 59.94761305353308,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 1314.2252981445504,
//                     "hasRDI": true,
//                     "daily": 187.7464711635072,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 1518.7829938339116,
//                     "hasRDI": true,
//                     "daily": 168.75366598154574,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 29.333997916476566,
//                     "hasRDI": true,
//                     "daily": 32.593331018307296,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 0.8832598359878923,
//                     "hasRDI": true,
//                     "daily": 73.60498633232436,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 1.2001139805731813,
//                     "hasRDI": true,
//                     "daily": 92.31646004409087,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 50.46942481470819,
//                     "hasRDI": true,
//                     "daily": 315.4339050919262,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 2.413800636461734,
//                     "hasRDI": true,
//                     "daily": 185.67697203551802,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 599.6509020885608,
//                     "hasRDI": true,
//                     "daily": 149.9127255221402,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 487.4509020885607,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 66,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 2.1499878717600005,
//                     "hasRDI": true,
//                     "daily": 89.58282799000003,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 1.8294693189000002,
//                     "hasRDI": true,
//                     "daily": 12.196462126000002,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 6.549512196306605,
//                     "hasRDI": true,
//                     "daily": 43.66341464204403,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 407.9203020212651,
//                     "hasRDI": true,
//                     "daily": 339.93358501772093,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 594.6367093167155,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/14b4ecf51010958145d0634f7953d43c?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ae1b336ff8aa2de127b16c0f1aaf9c3f",
//             "label": "Texmex Grilled Chicken Salad in Creamy Avocado Salsa Verde Dressing recipes",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/7d2/7d21b1a23ce9eaf50ce83fb8c6b58539?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bffcafd42961449b0324abf2beb7b3a6fb8d720fa7878d798809b3ee12bb3530",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7d2/7d21b1a23ce9eaf50ce83fb8c6b58539-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a04f9e68dccf6b961d3976125f74fb100856eea54ab6809476b7f4e864d1984d",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7d2/7d21b1a23ce9eaf50ce83fb8c6b58539-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=eed57d8378c18c8c613ea11999218c58ba91139da8a2e560db05232315667dbd",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7d2/7d21b1a23ce9eaf50ce83fb8c6b58539?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bffcafd42961449b0324abf2beb7b3a6fb8d720fa7878d798809b3ee12bb3530",
//                     "width": 300,
//                     "height": 300
//                 }
//             },
//             "source": "Closet Cooking",
//             "url": "http://www.closetcooking.com/2015/09/texmex-grilled-chicken-salad-in-creamy.html",
//             "shareAs": "http://www.edamam.com/recipe/texmex-grilled-chicken-salad-in-creamy-avocado-salsa-verde-dressing-recipes-ae1b336ff8aa2de127b16c0f1aaf9c3f/grilled+chicken",
//             "yield": 4,
//             "dietLabels": [
//                 "High-Fiber",
//                 "Low-Carb"
//             ],
//             "healthLabels": [
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free"
//             ],
//             "cautions": [
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "6 cups lettuce, sliced",
//                 "1 pound taco lime grilled chicken or cilantro lime grilled chicken",
//                 "1 cup tomato, diced",
//                 "1 cup corn, optionally grilled",
//                 "1 cup black beans",
//                 "1/4 red or green onion, diced or sliced",
//                 "1 avocado, diced or mashed",
//                 "4 strips bacon, cooked and crumbled",
//                 "1/4 cup cotija, queso fresco or feta, crumbled",
//                 "1/4 cup sour cream or greek yogurt (optional)",
//                 "1/4 cup creamy avocado salsa verde dressing",
//                 "1/4 cup cilantro, torn or chopped"
//             ],
//             "ingredients": [
//                 {
//                     "text": "6 cups lettuce, sliced",
//                     "quantity": 6,
//                     "measure": "cup",
//                     "food": "lettuce",
//                     "weight": 330,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bf5fxtkbc9alwoajuvsi7amonr5w",
//                     "image": "https://www.edamam.com/food-img/719/71996625d0cb47e197093ecd52c97dc2.jpg"
//                 },
//                 {
//                     "text": "1 pound taco lime grilled chicken or cilantro lime grilled chicken",
//                     "quantity": 1,
//                     "measure": "chicken",
//                     "food": "chicken",
//                     "weight": 1200,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
//                     "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
//                 },
//                 {
//                     "text": "1 cup tomato, diced",
//                     "quantity": 1,
//                     "measure": "cup",
//                     "food": "tomato",
//                     "weight": 149,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
//                     "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
//                 },
//                 {
//                     "text": "1 cup corn, optionally grilled",
//                     "quantity": 1,
//                     "measure": "cup",
//                     "food": "corn",
//                     "weight": 145,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_b4wvre6b14mmkpaa22d8ybup8q51",
//                     "image": "https://www.edamam.com/food-img/eb5/eb5e11afb9f697720b2de2e0e0e27d8d.jpg"
//                 },
//                 {
//                     "text": "1 cup black beans",
//                     "quantity": 1,
//                     "measure": "cup",
//                     "food": "black beans",
//                     "weight": 194,
//                     "foodCategory": "plant-based protein",
//                     "foodId": "food_bb53m3oaj7ee3fagvj9lka0r56t4",
//                     "image": "https://www.edamam.com/food-img/2e4/2e44213045c1ab7442ded5a81dbcbe0e.jpg"
//                 },
//                 {
//                     "text": "1/4 red or green onion, diced or sliced",
//                     "quantity": 0.25,
//                     "measure": "<unit>",
//                     "food": "green onion",
//                     "weight": 3.4722222222222228,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
//                     "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
//                 },
//                 {
//                     "text": "1 avocado, diced or mashed",
//                     "quantity": 1,
//                     "measure": "<unit>",
//                     "food": "avocado",
//                     "weight": 201,
//                     "foodCategory": "fruit",
//                     "foodId": "food_b0yuze4b1g3afpanijno5abtiu28",
//                     "image": "https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg"
//                 },
//                 {
//                     "text": "4 strips bacon, cooked and crumbled",
//                     "quantity": 4,
//                     "measure": "strip",
//                     "food": "bacon",
//                     "weight": 116,
//                     "foodCategory": "cured meats",
//                     "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
//                     "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
//                 },
//                 {
//                     "text": "1/4 cup cotija, queso fresco or feta, crumbled",
//                     "quantity": 0.25,
//                     "measure": "cup",
//                     "food": "cotija",
//                     "weight": 29.99999999847825,
//                     "foodCategory": "Cheese",
//                     "foodId": "food_a110xmrayekipqak9momtajc5q7l",
//                     "image": "https://www.edamam.com/food-img/4c9/4c92add72464b466263be2e2ff0876a7.jpg"
//                 },
//                 {
//                     "text": "1/4 cup sour cream or greek yogurt (optional)",
//                     "quantity": 0.25,
//                     "measure": "cup",
//                     "food": "sour cream",
//                     "weight": 57.5,
//                     "foodCategory": "Dairy",
//                     "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
//                     "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
//                 },
//                 {
//                     "text": "1/4 cup creamy avocado salsa verde dressing",
//                     "quantity": 0.25,
//                     "measure": "cup",
//                     "food": "salsa verde",
//                     "weight": 60.00000000101442,
//                     "foodCategory": "condiments and sauces",
//                     "foodId": "food_ax6tfr7a1hlbwpbkyaytlbkxaub2",
//                     "image": "https://www.edamam.com/food-img/205/205d9e349c3b7e60d4886c5ab4e27a92.jpg"
//                 },
//                 {
//                     "text": "1/4 cup cilantro, torn or chopped",
//                     "quantity": 0.25,
//                     "measure": "cup",
//                     "food": "cilantro",
//                     "weight": 4,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
//                     "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
//                 }
//             ],
//             "calories": 4461.921111105928,
//             "totalCO2Emissions": 16242.862331575307,
//             "co2EmissionsClass": "G",
//             "totalWeight": 2489.972222221715,
//             "totalTime": 30,
//             "cuisineType": [
//                 "mexican"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "condiments and sauces",
//                 "salad"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 4461.921111105928,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 280.2356972217747,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 82.99518111084478,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 1.7922200000000001,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 119.10979749987324,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 52.320289444426336,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 186.5423111111152,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 133.34503333331813,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 53.19727777779706,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 26.11955277781328,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 303.7534416663738,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 1040.4849999984783,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 2764.450555543442,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 843.6549999879172,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 788.3344444440589,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 8172.438333334058,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 27.88583888889548,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 28.52439166661031,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 3307.8747222115444,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 1304.0761111077377,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 91.41327777790256,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 3.4411997222222475,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 2.7555977777707477,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 99.31496416668138,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 6.2007730555556515,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 1436.2722222221512,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 1436.2722222221512,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 5.098749999965608,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 3.0139999999923917,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 10.83759722222278,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 449.060000000109,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 1695.0675555558855,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 223.0960555552964,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 431.1318418796534,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 414.9759055542239,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 62.18077037037173,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 212.78911111118825,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 607.5068833327476,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 346.8283333328261,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 115.18543981431009,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 84.36549999879172,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 187.69867724858545,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 173.8816666666821,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 154.92132716053047,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 259.3126515146392,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 472.5535317445063,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 144.89734567863752,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 101.57030864211396,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 286.76664351852065,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 211.96905982851905,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 620.7185260417587,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 476.9825427350501,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 359.0680555555378,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 212.44791666523366,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 20.09333333328261,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 72.25064814815187,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 374.2166666667575,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 280.2356972217747,
//                     "hasRDI": true,
//                     "daily": 431.1318418796534,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 82.99518111084478,
//                             "hasRDI": true,
//                             "daily": 414.9759055542239,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 1.7922200000000001,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 119.10979749987324,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 52.320289444426336,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 186.5423111111152,
//                     "hasRDI": true,
//                     "daily": 62.18077037037173,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 133.34503333331813,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 53.19727777779706,
//                             "hasRDI": true,
//                             "daily": 212.78911111118825,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 26.11955277781328,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 303.7534416663738,
//                     "hasRDI": true,
//                     "daily": 607.5068833327476,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 1040.4849999984783,
//                     "hasRDI": true,
//                     "daily": 346.8283333328261,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 2764.450555543442,
//                     "hasRDI": true,
//                     "daily": 115.18543981431009,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 843.6549999879172,
//                     "hasRDI": true,
//                     "daily": 84.36549999879172,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 788.3344444440589,
//                     "hasRDI": true,
//                     "daily": 187.69867724858545,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 8172.438333334058,
//                     "hasRDI": true,
//                     "daily": 173.8816666666821,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 27.88583888889548,
//                     "hasRDI": true,
//                     "daily": 154.92132716053047,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 28.52439166661031,
//                     "hasRDI": true,
//                     "daily": 259.3126515146392,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 3307.8747222115444,
//                     "hasRDI": true,
//                     "daily": 472.5535317445063,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 1304.0761111077377,
//                     "hasRDI": true,
//                     "daily": 144.89734567863752,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 91.41327777790256,
//                     "hasRDI": true,
//                     "daily": 101.57030864211396,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 3.4411997222222475,
//                     "hasRDI": true,
//                     "daily": 286.76664351852065,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 2.7555977777707477,
//                     "hasRDI": true,
//                     "daily": 211.96905982851905,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 99.31496416668138,
//                     "hasRDI": true,
//                     "daily": 620.7185260417587,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 6.2007730555556515,
//                     "hasRDI": true,
//                     "daily": 476.9825427350501,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 1436.2722222221512,
//                     "hasRDI": true,
//                     "daily": 359.0680555555378,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 1436.2722222221512,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 5.098749999965608,
//                     "hasRDI": true,
//                     "daily": 212.44791666523366,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 3.0139999999923917,
//                     "hasRDI": true,
//                     "daily": 20.09333333328261,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 10.83759722222278,
//                     "hasRDI": true,
//                     "daily": 72.25064814815187,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 449.060000000109,
//                     "hasRDI": true,
//                     "daily": 374.2166666667575,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 1695.0675555558855,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/ae1b336ff8aa2de127b16c0f1aaf9c3f?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c5d576e4cd258fb6839d581269f7e5cb",
//             "label": "Apricot-Mustard Sauce with Pork Chops",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f9c/f9c39011108fa945d013c856edc93f90.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ae37e3e0ff2e5ae258d4a493cb56e9df1687aa2f7d27e9a613a2fae36cda22ad",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f9c/f9c39011108fa945d013c856edc93f90-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f23268429bf0c211162a6da84eb07fda1d3f18dd3d2ee110b507e25904903a94",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f9c/f9c39011108fa945d013c856edc93f90-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0f126a3b63ce46be5604bcd20fe106914870cfb5ca8b3141549e33feb786c423",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f9c/f9c39011108fa945d013c856edc93f90.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ae37e3e0ff2e5ae258d4a493cb56e9df1687aa2f7d27e9a613a2fae36cda22ad",
//                     "width": 300,
//                     "height": 300
//                 }
//             },
//             "source": "PBS Food",
//             "url": "http://www.pbs.org/food/recipes/apricot-mustard-sauce-with-pork-chops/",
//             "shareAs": "http://www.edamam.com/recipe/apricot-mustard-sauce-with-pork-chops-c5d576e4cd258fb6839d581269f7e5cb/grilled+chicken",
//             "yield": 0.75,
//             "dietLabels": [
//                 "Low-Carb"
//             ],
//             "healthLabels": [
//                 "Gluten-Free",
//                 "Wheat-Free",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "No oil added"
//             ],
//             "cautions": [],
//             "ingredientLines": [
//                 "1/3 cup reduced-fat sour cream",
//                 "1 cup milk",
//                 "3 tablespoons whole-grain mustard",
//                 "2 tablespoons apricot jam",
//                 "Saut é ed pork chops grilled chicken, or turkey cutlets, (for serving with)"
//             ],
//             "ingredients": [
//                 {
//                     "text": "1/3 cup reduced-fat sour cream",
//                     "quantity": 0.3333333333333333,
//                     "measure": "cup",
//                     "food": "reduced-fat sour cream",
//                     "weight": 76.66666666666666,
//                     "foodCategory": "Dairy",
//                     "foodId": "food_ab2gbg1a463bhca1y3gqybp17eqm",
//                     "image": "https://www.edamam.com/food-img/0f5/0f5af0f498975dc7beaa817ffb500d51.jpg"
//                 },
//                 {
//                     "text": "1 cup milk",
//                     "quantity": 1,
//                     "measure": "cup",
//                     "food": "milk",
//                     "weight": 244,
//                     "foodCategory": "Milk",
//                     "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
//                     "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
//                 },
//                 {
//                     "text": "3 tablespoons whole-grain mustard",
//                     "quantity": 3,
//                     "measure": "tablespoon",
//                     "food": "mustard",
//                     "weight": 46.6874999992107,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
//                     "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
//                 },
//                 {
//                     "text": "2 tablespoons apricot jam",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "apricot jam",
//                     "weight": 40,
//                     "foodCategory": "sugars",
//                     "foodId": "food_ag744iyaqppxqha4dhdgpbubbryy",
//                     "image": "https://www.edamam.com/food-img/400/40071c4b8e57e31562145f69b4e75635.jpg"
//                 },
//                 {
//                     "text": "Saut é ed pork chops grilled chicken, or turkey cutlets, (for serving with)",
//                     "quantity": 1,
//                     "measure": "serving",
//                     "food": "pork",
//                     "weight": 300,
//                     "foodCategory": "meats",
//                     "foodId": "food_aisetlvawqaqp8a2uc28uaf46l5m",
//                     "image": "https://www.edamam.com/food-img/d55/d553f23d42b9c8fb314416ccd5cde3d2.jpg"
//                 }
//             ],
//             "calories": 1006.4191666661932,
//             "totalCO2Emissions": 6422.757967187582,
//             "co2EmissionsClass": "G",
//             "totalWeight": 707.3541666658773,
//             "totalTime": 10,
//             "cuisineType": [
//                 "american"
//             ],
//             "mealType": [
//                 "snack"
//             ],
//             "dishType": [
//                 "main course"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 1006.4191666661932,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 58.179362499973635,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 24.392311249998315,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0.004201874999928963,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 22.97240083331613,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 5.240494583327225,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 45.560547916620656,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 43.57304791665223,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 1.9874999999684282,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 30.341524999992735,
//                     "unit": "g"
//                 },
//                 "SUGAR.added": {
//                     "label": "Sugars, added",
//                     "quantity": 17.36,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 74.17877916663714,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 240.23333333333335,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 838.1491666579843,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 475.2331249995027,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 119.84333333295447,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 1653.6116666654666,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 3.4368687499872923,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 6.652599999994948,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 912.7491666658143,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 215.80770833329382,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 6.150062499997631,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 2.92854354166527,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 1.3818412499994475,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 14.289011041662206,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 1.5598545833327808,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 27.301458333278084,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 27.301458333278084,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 2.918,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 4.902,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 1.3275416666638251,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 1.9222916666556165,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 522.9747708326727,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 50.32095833330966,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 89.50671153842097,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 121.96155624999157,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 15.186849305540218,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 7.949999999873714,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 148.35755833327428,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 80.07777777777778,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 34.92288194408268,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 47.52331249995027,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 28.53412698403678,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 35.18322695032908,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 19.09371527770718,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 60.47818181813589,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 130.39273809511633,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 23.978634259254868,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 6.833402777775145,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 244.0452951387725,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 106.29548076918826,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 89.30631901038879,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 119.98881410252159,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 6.825364583319521,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 121.58333333333334,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 32.68,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 8.850277777758834,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 1.6019097222130136,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 58.179362499973635,
//                     "hasRDI": true,
//                     "daily": 89.50671153842097,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 24.392311249998315,
//                             "hasRDI": true,
//                             "daily": 121.96155624999157,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0.004201874999928963,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 22.97240083331613,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 5.240494583327225,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 45.560547916620656,
//                     "hasRDI": true,
//                     "daily": 15.186849305540218,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 43.57304791665223,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 1.9874999999684282,
//                             "hasRDI": true,
//                             "daily": 7.949999999873714,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 30.341524999992735,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 17.36,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 74.17877916663714,
//                     "hasRDI": true,
//                     "daily": 148.35755833327428,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 240.23333333333335,
//                     "hasRDI": true,
//                     "daily": 80.07777777777778,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 838.1491666579843,
//                     "hasRDI": true,
//                     "daily": 34.92288194408268,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 475.2331249995027,
//                     "hasRDI": true,
//                     "daily": 47.52331249995027,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 119.84333333295447,
//                     "hasRDI": true,
//                     "daily": 28.53412698403678,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 1653.6116666654666,
//                     "hasRDI": true,
//                     "daily": 35.18322695032908,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 3.4368687499872923,
//                     "hasRDI": true,
//                     "daily": 19.09371527770718,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 6.652599999994948,
//                     "hasRDI": true,
//                     "daily": 60.47818181813589,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 912.7491666658143,
//                     "hasRDI": true,
//                     "daily": 130.39273809511633,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 215.80770833329382,
//                     "hasRDI": true,
//                     "daily": 23.978634259254868,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 6.150062499997631,
//                     "hasRDI": true,
//                     "daily": 6.833402777775145,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 2.92854354166527,
//                     "hasRDI": true,
//                     "daily": 244.0452951387725,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 1.3818412499994475,
//                     "hasRDI": true,
//                     "daily": 106.29548076918826,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 14.289011041662206,
//                     "hasRDI": true,
//                     "daily": 89.30631901038879,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 1.5598545833327808,
//                     "hasRDI": true,
//                     "daily": 119.98881410252159,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 27.301458333278084,
//                     "hasRDI": true,
//                     "daily": 6.825364583319521,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 27.301458333278084,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 2.918,
//                     "hasRDI": true,
//                     "daily": 121.58333333333334,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 4.902,
//                     "hasRDI": true,
//                     "daily": 32.68,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 1.3275416666638251,
//                     "hasRDI": true,
//                     "daily": 8.850277777758834,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 1.9222916666556165,
//                     "hasRDI": true,
//                     "daily": 1.6019097222130136,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 522.9747708326727,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/c5d576e4cd258fb6839d581269f7e5cb?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0875dd8034a6dc0c8fdef519d9de351e",
//             "label": "Grilled Chicken Parmesan",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/98c/98c5a0f8577be04a2d843874a261c846.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a34107b8f27d859cdc6601514df664cd09528c7ec3bbf3fab3e7cbf5080e8553",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/98c/98c5a0f8577be04a2d843874a261c846-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f6f9e872325f3123d3e38208adf04e9fbdc6459e03bb5d84f06b88f61af99abe",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/98c/98c5a0f8577be04a2d843874a261c846-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=61aaf1fbfa2fe72fcb82a6d65f12d5e2bb6441543745a7b22998edb6bae1de8e",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/98c/98c5a0f8577be04a2d843874a261c846.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a34107b8f27d859cdc6601514df664cd09528c7ec3bbf3fab3e7cbf5080e8553",
//                     "width": 300,
//                     "height": 300
//                 }
//             },
//             "source": "Real Simple",
//             "url": "https://www.realsimple.com/food-recipes/browse-all-recipes/grilled-chicken-parmesan",
//             "shareAs": "http://www.edamam.com/recipe/grilled-chicken-parmesan-0875dd8034a6dc0c8fdef519d9de351e/grilled+chicken",
//             "yield": 4,
//             "dietLabels": [
//                 "High-Fiber",
//                 "Low-Carb"
//             ],
//             "healthLabels": [
//                 "Mediterranean",
//                 "Gluten-Free",
//                 "Wheat-Free",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free",
//                 "FODMAP-Free"
//             ],
//             "cautions": [
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "1 medium eggplant, cut into 1/4-inch-thick rounds",
//                 "4 tomatoes, cut into 1/2-inch-thick rounds",
//                 "5 tablespoons olive oil",
//                 "kosher salt and black pepper",
//                 "4 boneless, skinless chicken breasts",
//                 "2 ounces Parmesan, thinly sliced"
//             ],
//             "ingredients": [
//                 {
//                     "text": "1 medium eggplant, cut into 1/4-inch-thick rounds",
//                     "quantity": 1,
//                     "measure": "<unit>",
//                     "food": "eggplant",
//                     "weight": 548,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_ac9n68caswlpggbp7727varlyjk5",
//                     "image": "https://www.edamam.com/food-img/da5/da5978d61b89a363147a6d13c36e3b54.jpg"
//                 },
//                 {
//                     "text": "4 tomatoes, cut into 1/2-inch-thick rounds",
//                     "quantity": 4,
//                     "measure": "<unit>",
//                     "food": "tomatoes",
//                     "weight": 492,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
//                     "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
//                 },
//                 {
//                     "text": "5 tablespoons olive oil",
//                     "quantity": 5,
//                     "measure": "tablespoon",
//                     "food": "olive oil",
//                     "weight": 67.5,
//                     "foodCategory": "Oils",
//                     "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
//                     "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
//                 },
//                 {
//                     "text": "kosher salt and black pepper",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "kosher salt",
//                     "weight": 13.513194277499998,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
//                     "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
//                 },
//                 {
//                     "text": "kosher salt and black pepper",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "black pepper",
//                     "weight": 6.756597138749999,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
//                     "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
//                 },
//                 {
//                     "text": "4 boneless, skinless chicken breasts",
//                     "quantity": 4,
//                     "measure": "<unit>",
//                     "food": "boneless, skinless chicken breasts",
//                     "weight": 1088,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
//                     "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
//                 },
//                 {
//                     "text": "2 ounces Parmesan, thinly sliced",
//                     "quantity": 2,
//                     "measure": "ounce",
//                     "food": "Parmesan",
//                     "weight": 56.69904625,
//                     "foodCategory": "Cheese",
//                     "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
//                     "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
//                 }
//             ],
//             "calories": 2367.0793201182623,
//             "totalCO2Emissions": 13847.984020426338,
//             "co2EmissionsClass": "G",
//             "totalWeight": 2269.409885925889,
//             "totalTime": 25,
//             "cuisineType": [
//                 "italian"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "starter"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 2367.0793201182623,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 112.37102662922325,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 24.249895545228625,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0.07616,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 61.32521953085537,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 12.915508412607226,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 57.511131458049995,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 33.457712381946244,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 24.05341907610375,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 32.389611172562994,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 275.50094465993004,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 832.79535145,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 5253.156169587671,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 855.084489283576,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 472.08590388263394,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 6198.417203898346,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 8.147896761795185,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 10.761681520363267,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 2971.206804454225,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 429.23130696496247,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 79.46,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 1.44788975294735,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 2.4224027083997504,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 111.15767962271926,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 9.748857829761263,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 297.3975547510875,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 297.3975547510875,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 2.965188555,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.28349523125000003,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 20.308606511993002,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 110.7277030938,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 1792.6511970024183,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 118.35396600591311,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 172.8785025064973,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 121.24947772614311,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 19.170377152683333,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 96.213676304415,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 551.0018893198601,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 277.59845048333335,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 218.88150706615295,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 85.5084489283576,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 112.40140568634142,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 131.88121710422013,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 45.26609312108436,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 97.83346836693877,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 424.45811492203217,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 47.692367440551386,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 88.28888888888888,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 120.65747941227917,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 186.33866987690388,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 694.7354976419954,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 749.9121407508665,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 74.34938868777188,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 123.54952312500002,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 1.8899682083333336,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 135.39071007995335,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 92.2730859115,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 112.37102662922325,
//                     "hasRDI": true,
//                     "daily": 172.8785025064973,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 24.249895545228625,
//                             "hasRDI": true,
//                             "daily": 121.24947772614311,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0.07616,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 61.32521953085537,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 12.915508412607226,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 57.511131458049995,
//                     "hasRDI": true,
//                     "daily": 19.170377152683333,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 33.457712381946244,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 24.05341907610375,
//                             "hasRDI": true,
//                             "daily": 96.213676304415,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 32.389611172562994,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 275.50094465993004,
//                     "hasRDI": true,
//                     "daily": 551.0018893198601,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 832.79535145,
//                     "hasRDI": true,
//                     "daily": 277.59845048333335,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 5253.156169587671,
//                     "hasRDI": true,
//                     "daily": 218.88150706615295,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 855.084489283576,
//                     "hasRDI": true,
//                     "daily": 85.5084489283576,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 472.08590388263394,
//                     "hasRDI": true,
//                     "daily": 112.40140568634142,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 6198.417203898346,
//                     "hasRDI": true,
//                     "daily": 131.88121710422013,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 8.147896761795185,
//                     "hasRDI": true,
//                     "daily": 45.26609312108436,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 10.761681520363267,
//                     "hasRDI": true,
//                     "daily": 97.83346836693877,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 2971.206804454225,
//                     "hasRDI": true,
//                     "daily": 424.45811492203217,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 429.23130696496247,
//                     "hasRDI": true,
//                     "daily": 47.692367440551386,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 79.46,
//                     "hasRDI": true,
//                     "daily": 88.28888888888888,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 1.44788975294735,
//                     "hasRDI": true,
//                     "daily": 120.65747941227917,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 2.4224027083997504,
//                     "hasRDI": true,
//                     "daily": 186.33866987690388,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 111.15767962271926,
//                     "hasRDI": true,
//                     "daily": 694.7354976419954,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 9.748857829761263,
//                     "hasRDI": true,
//                     "daily": 749.9121407508665,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 297.3975547510875,
//                     "hasRDI": true,
//                     "daily": 74.34938868777188,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 297.3975547510875,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 2.965188555,
//                     "hasRDI": true,
//                     "daily": 123.54952312500002,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 0.28349523125000003,
//                     "hasRDI": true,
//                     "daily": 1.8899682083333336,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 20.308606511993002,
//                     "hasRDI": true,
//                     "daily": 135.39071007995335,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 110.7277030938,
//                     "hasRDI": true,
//                     "daily": 92.2730859115,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 1792.6511970024183,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/0875dd8034a6dc0c8fdef519d9de351e?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7cd8f6f6a75e7833d7f66add523fb5b0",
//             "label": "Balinese Grilled Chicken",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/635/635e97f9d2b42682cfad7068c4fe6a3c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=351a2af1de17321a490f4e5ada78f6dcc5b8e83b0800c56388851c69c5c94efe",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/635/635e97f9d2b42682cfad7068c4fe6a3c-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=eefbae7ef5b67963a5c9d8efcd40335faca8ae27b3887217daa4187e9924705a",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/635/635e97f9d2b42682cfad7068c4fe6a3c-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=24bec28ccf20c1e7fc8236a42173dac6e511d8518e645921e50157cedb389332",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/635/635e97f9d2b42682cfad7068c4fe6a3c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=351a2af1de17321a490f4e5ada78f6dcc5b8e83b0800c56388851c69c5c94efe",
//                     "width": 300,
//                     "height": 300
//                 },
//                 "LARGE": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/635/635e97f9d2b42682cfad7068c4fe6a3c-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e3fe2064c11b8840148f452eb36a75bab0cb0b47ee7179b5813a46ef2886e722",
//                     "width": 600,
//                     "height": 600
//                 }
//             },
//             "source": "Food & Wine",
//             "url": "http://www.foodandwine.com/recipes/balinese-grilled-chicken",
//             "shareAs": "http://www.edamam.com/recipe/balinese-grilled-chicken-7cd8f6f6a75e7833d7f66add523fb5b0/grilled+chicken",
//             "yield": 12,
//             "dietLabels": [
//                 "Low-Carb"
//             ],
//             "healthLabels": [
//                 "Sugar-Conscious",
//                 "Keto-Friendly",
//                 "Mediterranean",
//                 "Dairy-Free",
//                 "Gluten-Free",
//                 "Wheat-Free",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free",
//                 "Kosher",
//                 "Immuno-Supportive"
//             ],
//             "cautions": [
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "10 garlic cloves, halved",
//                 "3 fresh long red chiles, halved and seeded",
//                 "6 small shallots, halved",
//                 "2 tablespoons chopped fresh ginger",
//                 "1 teaspoon ground turmeric",
//                 "1/4 cup vegetable oil, plus more for brushing",
//                 "Salt and freshly ground pepper",
//                 "One 4-pound chicken, butterflied",
//                 "4 fresh bay leaves",
//                 "4 limes, halved"
//             ],
//             "ingredients": [
//                 {
//                     "text": "10 garlic cloves, halved",
//                     "quantity": 10,
//                     "measure": "clove",
//                     "food": "garlic",
//                     "weight": 30,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
//                     "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
//                 },
//                 {
//                     "text": "3 fresh long red chiles, halved and seeded",
//                     "quantity": 3,
//                     "measure": "<unit>",
//                     "food": "red chiles",
//                     "weight": 135,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_a6g98mqatzj7vca6ms3bnbzqxf3s",
//                     "image": "https://www.edamam.com/food-img/469/469213672957a242638e20c27e3e8acd.jpeg"
//                 },
//                 {
//                     "text": "6 small shallots, halved",
//                     "quantity": 6,
//                     "measure": "<unit>",
//                     "food": "shallots",
//                     "weight": 240,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
//                     "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
//                 },
//                 {
//                     "text": "2 tablespoons chopped fresh ginger",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "fresh ginger",
//                     "weight": 11.99999999979712,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
//                     "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
//                 },
//                 {
//                     "text": "1 teaspoon ground turmeric",
//                     "quantity": 1,
//                     "measure": "teaspoon",
//                     "food": "ground turmeric",
//                     "weight": 3,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
//                     "image": "https://www.edamam.com/food-img/03e/03eb469286b3caf1ae9c13e4eba13587.jpg"
//                 },
//                 {
//                     "text": "1/4 cup vegetable oil, plus more for brushing",
//                     "quantity": 0.25,
//                     "measure": "cup",
//                     "food": "vegetable oil",
//                     "weight": 56.00000000094679,
//                     "foodCategory": "Oils",
//                     "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
//                     "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
//                 },
//                 {
//                     "text": "Salt and freshly ground pepper",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "Salt",
//                     "weight": 15.364616880004464,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
//                     "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
//                 },
//                 {
//                     "text": "Salt and freshly ground pepper",
//                     "quantity": 0,
//                     "measure": null,
//                     "food": "pepper",
//                     "weight": 7.682308440002232,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
//                     "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
//                 },
//                 {
//                     "text": "One 4-pound chicken, butterflied",
//                     "quantity": 4,
//                     "measure": "pound",
//                     "food": "chicken",
//                     "weight": 1814.36948,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
//                     "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
//                 },
//                 {
//                     "text": "4 fresh bay leaves",
//                     "quantity": 4,
//                     "measure": "<unit>",
//                     "food": "bay leaves",
//                     "weight": 2.4,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
//                     "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
//                 },
//                 {
//                     "text": "4 limes, halved",
//                     "quantity": 4,
//                     "measure": "<unit>",
//                     "food": "limes",
//                     "weight": 268,
//                     "foodCategory": "fruit",
//                     "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
//                     "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
//                 }
//             ],
//             "calories": 3545.3027739526133,
//             "totalCO2Emissions": 18709.45962024157,
//             "co2EmissionsClass": "F",
//             "totalWeight": 2581.475950633569,
//             "totalTime": 0,
//             "cuisineType": [
//                 "mediterranean"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "main course"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 3545.3027739526133,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 244.4580414624893,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 57.24536480721724,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 1.6279581090152617,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 117.555628035413,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 50.23795069711281,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 101.14917740156532,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 79.81435336624881,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 21.334824035316508,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 31.22166677401256,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 243.28035190815655,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 925.3284348,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 5972.8832649831875,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 450.2892624194549,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 379.33123833424474,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 4189.900290922613,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 21.035373102359316,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 18.485246960468157,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 2137.733779543134,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 585.4964343028006,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 322.4253399423898,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 1.1351156409551517,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 1.763737650871935,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 87.0625230714145,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 6.403064879960081,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 216.56226721877803,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 216.56226721877803,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 3.82469086384,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 2.4675424928,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 17.7944097471819,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 54.45755453760347,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 1389.801919503226,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 177.26513869763068,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 376.0892945576758,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 286.2268240360862,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 33.71639246718844,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 85.33929614126605,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 486.5607038163131,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 308.44281159999997,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 248.87013604096612,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 45.02892624194549,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 90.31696150815351,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 89.14681470048112,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 116.86318390199621,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 168.0476996406196,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 305.39053993473345,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 65.05515936697785,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 358.2503777137665,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 94.59297007959597,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 135.67212699014883,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 544.1407691963407,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 492.54345230462167,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 54.14056680469451,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 159.36211932666666,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 16.45028328533333,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 118.629398314546,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 45.381295448002895,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 244.4580414624893,
//                     "hasRDI": true,
//                     "daily": 376.0892945576758,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 57.24536480721724,
//                             "hasRDI": true,
//                             "daily": 286.2268240360862,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 1.6279581090152617,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 117.555628035413,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 50.23795069711281,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 101.14917740156532,
//                     "hasRDI": true,
//                     "daily": 33.71639246718844,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 79.81435336624881,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 21.334824035316508,
//                             "hasRDI": true,
//                             "daily": 85.33929614126605,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 31.22166677401256,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 243.28035190815655,
//                     "hasRDI": true,
//                     "daily": 486.5607038163131,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 925.3284348,
//                     "hasRDI": true,
//                     "daily": 308.44281159999997,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 5972.8832649831875,
//                     "hasRDI": true,
//                     "daily": 248.87013604096612,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 450.2892624194549,
//                     "hasRDI": true,
//                     "daily": 45.02892624194549,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 379.33123833424474,
//                     "hasRDI": true,
//                     "daily": 90.31696150815351,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 4189.900290922613,
//                     "hasRDI": true,
//                     "daily": 89.14681470048112,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 21.035373102359316,
//                     "hasRDI": true,
//                     "daily": 116.86318390199621,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 18.485246960468157,
//                     "hasRDI": true,
//                     "daily": 168.0476996406196,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 2137.733779543134,
//                     "hasRDI": true,
//                     "daily": 305.39053993473345,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 585.4964343028006,
//                     "hasRDI": true,
//                     "daily": 65.05515936697785,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 322.4253399423898,
//                     "hasRDI": true,
//                     "daily": 358.2503777137665,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 1.1351156409551517,
//                     "hasRDI": true,
//                     "daily": 94.59297007959597,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 1.763737650871935,
//                     "hasRDI": true,
//                     "daily": 135.67212699014883,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 87.0625230714145,
//                     "hasRDI": true,
//                     "daily": 544.1407691963407,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 6.403064879960081,
//                     "hasRDI": true,
//                     "daily": 492.54345230462167,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 216.56226721877803,
//                     "hasRDI": true,
//                     "daily": 54.14056680469451,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 216.56226721877803,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 3.82469086384,
//                     "hasRDI": true,
//                     "daily": 159.36211932666666,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 2.4675424928,
//                     "hasRDI": true,
//                     "daily": 16.45028328533333,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 17.7944097471819,
//                     "hasRDI": true,
//                     "daily": 118.629398314546,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 54.45755453760347,
//                     "hasRDI": true,
//                     "daily": 45.381295448002895,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 1389.801919503226,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/7cd8f6f6a75e7833d7f66add523fb5b0?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1eb08b8eb8438de09744fd1e373d4f5a",
//             "label": "Grilled Chicken Teriyaki",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/522/522971a5f2fcf204150fe257af485012.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dbf4ab7390d71598cab8c25ddc6bc5de1ca279e5078dc9a2eb2d6738c7e14d8b",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/522/522971a5f2fcf204150fe257af485012-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=275a86a09f1a643bdeb1e92880e8f94c5ae5095bb637faf5217faaecb00b69d6",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/522/522971a5f2fcf204150fe257af485012-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c48f80c83a06e0aa855f1a5035b8011c005f7e5568f61e28d3d63167c350b873",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/522/522971a5f2fcf204150fe257af485012.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dbf4ab7390d71598cab8c25ddc6bc5de1ca279e5078dc9a2eb2d6738c7e14d8b",
//                     "width": 300,
//                     "height": 300
//                 }
//             },
//             "source": "Cookstr",
//             "url": "http://www.cookstr.com/recipes/grilled-chicken-teriyaki",
//             "shareAs": "http://www.edamam.com/recipe/grilled-chicken-teriyaki-1eb08b8eb8438de09744fd1e373d4f5a/grilled+chicken",
//             "yield": 4,
//             "dietLabels": [],
//             "healthLabels": [
//                 "Sugar-Conscious",
//                 "Dairy-Free",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Kosher"
//             ],
//             "cautions": [],
//             "ingredientLines": [
//                 "¾ cup soy sauce",
//                 "¼ cup sherry or dry white wine",
//                 "1 tablespoon vegetable oil",
//                 "1 tablespoon water",
//                 "2 garlic cloves, minced",
//                 "1 teaspoon sugar",
//                 "1 teaspoon peeled, grated fresh ginger, or ½ teaspoon ground ginger",
//                 "1 chicken (3½ to 4 pounds), cut into serving pieces, excess skin and fat removed",
//                 "1 cup long-grain white rice, cooked according to package directions (3 cups cooked)",
//                 "6 green onions, including some tender green tops, sliced"
//             ],
//             "ingredients": [
//                 {
//                     "text": "¾ cup soy sauce",
//                     "quantity": 0.75,
//                     "measure": "cup",
//                     "food": "soy sauce",
//                     "weight": 191.25,
//                     "foodCategory": "plant-based protein",
//                     "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
//                     "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
//                 },
//                 {
//                     "text": "¼ cup sherry or dry white wine",
//                     "quantity": 0.25,
//                     "measure": "cup",
//                     "food": "dry white wine",
//                     "weight": 58.8,
//                     "foodCategory": "wines",
//                     "foodId": "food_a656mk2a5dmqb2adiamu6beihduu",
//                     "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
//                 },
//                 {
//                     "text": "1 tablespoon vegetable oil",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "vegetable oil",
//                     "weight": 14,
//                     "foodCategory": "Oils",
//                     "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
//                     "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
//                 },
//                 {
//                     "text": "1 tablespoon water",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "water",
//                     "weight": 14.786764781,
//                     "foodCategory": "water",
//                     "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
//                     "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
//                 },
//                 {
//                     "text": "2 garlic cloves, minced",
//                     "quantity": 2,
//                     "measure": "clove",
//                     "food": "garlic",
//                     "weight": 6,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
//                     "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
//                 },
//                 {
//                     "text": "1 teaspoon sugar",
//                     "quantity": 1,
//                     "measure": "teaspoon",
//                     "food": "sugar",
//                     "weight": 4.2,
//                     "foodCategory": "sugars",
//                     "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
//                     "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
//                 },
//                 {
//                     "text": "1 teaspoon peeled, grated fresh ginger, or ½ teaspoon ground ginger",
//                     "quantity": 1,
//                     "measure": "teaspoon",
//                     "food": "ground ginger",
//                     "weight": 1.8,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a8l1yfna3fgp3ha4a5b5labyetgz",
//                     "image": "https://www.edamam.com/food-img/ee0/ee08c937de5c45a36bd0ad1eafc67496.jpg"
//                 },
//                 {
//                     "text": "1 chicken (3½ to 4 pounds), cut into serving pieces, excess skin and fat removed",
//                     "quantity": 3.75,
//                     "measure": "pound",
//                     "food": "chicken",
//                     "weight": 1700.9713875,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
//                     "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
//                 },
//                 {
//                     "text": "1 cup long-grain white rice, cooked according to package directions (3 cups cooked)",
//                     "quantity": 1,
//                     "measure": "cup",
//                     "food": "white rice",
//                     "weight": 195,
//                     "foodCategory": "grains",
//                     "foodId": "food_bpumdjzb5rtqaeabb0kbgbcgr4t9",
//                     "image": "https://www.edamam.com/food-img/0fc/0fc9fa8a3e0276198d75b2e259068f8a.jpg"
//                 },
//                 {
//                     "text": "6 green onions, including some tender green tops, sliced",
//                     "quantity": 6,
//                     "measure": "<unit>",
//                     "food": "green onions",
//                     "weight": 83.33333333333334,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
//                     "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
//                 }
//             ],
//             "calories": 3520.0493351916666,
//             "totalCO2Emissions": 17895.929339558665,
//             "co2EmissionsClass": "G",
//             "totalWeight": 2270.1414856143333,
//             "totalTime": 240,
//             "cuisineType": [
//                 "japanese"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "main course"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 3520.0493351916666,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 191.14152040183333,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 51.28998859151666,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 1.229340727195,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 82.8086499144,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 40.65270172171667,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 179.18389166666665,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 175.10742499999998,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 4.076466666666667,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 7.583766666666667,
//                     "unit": "g"
//                 },
//                 "SUGAR.added": {
//                     "label": "Sugars, added",
//                     "quantity": 4.1916,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 245.705511091,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 867.495407625,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 11329.650184374575,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 286.58476272843,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 469.1536430144767,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 3505.377927215,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 16.595663224833334,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 19.6107067963281,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 2281.9873322783333,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 515.9334895016666,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 36.057835362666665,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 0.9552101594333333,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 1.8830998188666666,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 86.696580958,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 4.780013235583334,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 168.05996594333334,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 168.05996594333334,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 3.58564768485,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 2.313321087,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 6.985114963833333,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 190.20150815250003,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 1069.1192300595521,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 176.00246675958334,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 294.06387754128207,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 256.4499429575833,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 59.72796388888888,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 16.305866666666667,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 491.411022182,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 289.165135875,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 472.06875768227394,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 28.658476272843,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 111.70324833678016,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 74.58250908968084,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 92.19812902685186,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 178.2791526938918,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 325.9981903254762,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 57.325943277962956,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 40.06426151407407,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 79.60084661944445,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 144.8538322205128,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 541.8536309875,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 367.6933258141026,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 42.014991485833335,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 149.40198686875001,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 15.422140579999999,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 46.567433092222224,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 158.50125679375003,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 191.14152040183333,
//                     "hasRDI": true,
//                     "daily": 294.06387754128207,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 51.28998859151666,
//                             "hasRDI": true,
//                             "daily": 256.4499429575833,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 1.229340727195,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 82.8086499144,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 40.65270172171667,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 179.18389166666665,
//                     "hasRDI": true,
//                     "daily": 59.72796388888888,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 175.10742499999998,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 4.076466666666667,
//                             "hasRDI": true,
//                             "daily": 16.305866666666667,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 7.583766666666667,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 4.1916,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 245.705511091,
//                     "hasRDI": true,
//                     "daily": 491.411022182,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 867.495407625,
//                     "hasRDI": true,
//                     "daily": 289.165135875,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 11329.650184374575,
//                     "hasRDI": true,
//                     "daily": 472.06875768227394,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 286.58476272843,
//                     "hasRDI": true,
//                     "daily": 28.658476272843,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 469.1536430144767,
//                     "hasRDI": true,
//                     "daily": 111.70324833678016,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 3505.377927215,
//                     "hasRDI": true,
//                     "daily": 74.58250908968084,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 16.595663224833334,
//                     "hasRDI": true,
//                     "daily": 92.19812902685186,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 19.6107067963281,
//                     "hasRDI": true,
//                     "daily": 178.2791526938918,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 2281.9873322783333,
//                     "hasRDI": true,
//                     "daily": 325.9981903254762,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 515.9334895016666,
//                     "hasRDI": true,
//                     "daily": 57.325943277962956,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 36.057835362666665,
//                     "hasRDI": true,
//                     "daily": 40.06426151407407,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 0.9552101594333333,
//                     "hasRDI": true,
//                     "daily": 79.60084661944445,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 1.8830998188666666,
//                     "hasRDI": true,
//                     "daily": 144.8538322205128,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 86.696580958,
//                     "hasRDI": true,
//                     "daily": 541.8536309875,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 4.780013235583334,
//                     "hasRDI": true,
//                     "daily": 367.6933258141026,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 168.05996594333334,
//                     "hasRDI": true,
//                     "daily": 42.014991485833335,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 168.05996594333334,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 3.58564768485,
//                     "hasRDI": true,
//                     "daily": 149.40198686875001,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 2.313321087,
//                     "hasRDI": true,
//                     "daily": 15.422140579999999,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 6.985114963833333,
//                     "hasRDI": true,
//                     "daily": 46.567433092222224,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 190.20150815250003,
//                     "hasRDI": true,
//                     "daily": 158.50125679375003,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 1069.1192300595521,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/1eb08b8eb8438de09744fd1e373d4f5a?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_bed494caad44a0b596fcd71e59084170",
//             "label": "Apricot-Mustard Sauce with Pork Chops",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ca0/ca05ab7eb1d9fa603924ae9eb770c095.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cfc6098a1a218744e43bb243d409cbdeafba3fd2f0edfdcbf0629187cee45510",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ca0/ca05ab7eb1d9fa603924ae9eb770c095-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8a2666dae1942d53716e95244f5e278a143b4351044ae3ef7cafa2f51977907e",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ca0/ca05ab7eb1d9fa603924ae9eb770c095-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8bc56a1a3c445f2fec455ffeac56bdefed44fe612f7dce43b5de00ab83019167",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ca0/ca05ab7eb1d9fa603924ae9eb770c095.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cfc6098a1a218744e43bb243d409cbdeafba3fd2f0edfdcbf0629187cee45510",
//                     "width": 300,
//                     "height": 300
//                 },
//                 "LARGE": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ca0/ca05ab7eb1d9fa603924ae9eb770c095-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6302ee98c7464214b1a2d5482eabfc47159cd203e3d2962db1bb6784296e1b52",
//                     "width": 600,
//                     "height": 600
//                 }
//             },
//             "source": "Martha Stewart",
//             "url": "http://www.marthastewart.com/343820/apricot-mustard-sauce-with-pork-chops",
//             "shareAs": "http://www.edamam.com/recipe/apricot-mustard-sauce-with-pork-chops-bed494caad44a0b596fcd71e59084170/grilled+chicken",
//             "yield": 4,
//             "dietLabels": [],
//             "healthLabels": [
//                 "Kidney-Friendly",
//                 "Gluten-Free",
//                 "Wheat-Free",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "No oil added"
//             ],
//             "cautions": [],
//             "ingredientLines": [
//                 "1/3 cup reduced-fat sour cream",
//                 "1/3 cup Dijon mustard",
//                 "3 tablespoons whole-grain mustard",
//                 "2 tablespoons apricot jam",
//                 "Sauteed Pork Chops, grilled chicken, or turkey cutlets (for serving)"
//             ],
//             "ingredients": [
//                 {
//                     "text": "1/3 cup reduced-fat sour cream",
//                     "quantity": 0.3333333333333333,
//                     "measure": "cup",
//                     "food": "reduced-fat sour cream",
//                     "weight": 76.66666666666666,
//                     "foodCategory": "Dairy",
//                     "foodId": "food_ab2gbg1a463bhca1y3gqybp17eqm",
//                     "image": "https://www.edamam.com/food-img/0f5/0f5af0f498975dc7beaa817ffb500d51.jpg"
//                 },
//                 {
//                     "text": "1/3 cup Dijon mustard",
//                     "quantity": 0.3333333333333333,
//                     "measure": "cup",
//                     "food": "Dijon mustard",
//                     "weight": 83,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
//                     "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
//                 },
//                 {
//                     "text": "3 tablespoons whole-grain mustard",
//                     "quantity": 3,
//                     "measure": "tablespoon",
//                     "food": "mustard",
//                     "weight": 46.6874999992107,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
//                     "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
//                 },
//                 {
//                     "text": "2 tablespoons apricot jam",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "apricot jam",
//                     "weight": 40,
//                     "foodCategory": "sugars",
//                     "foodId": "food_ag744iyaqppxqha4dhdgpbubbryy",
//                     "image": "https://www.edamam.com/food-img/400/40071c4b8e57e31562145f69b4e75635.jpg"
//                 },
//                 {
//                     "text": "Sauteed Pork Chops, grilled chicken, or turkey cutlets (for serving)",
//                     "quantity": 1,
//                     "measure": "cutlet",
//                     "food": "Pork",
//                     "weight": 117,
//                     "foodCategory": "meats",
//                     "foodId": "food_aisetlvawqaqp8a2uc28uaf46l5m",
//                     "image": "https://www.edamam.com/food-img/d55/d553f23d42b9c8fb314416ccd5cde3d2.jpg"
//                 }
//             ],
//             "calories": 545.0391666661931,
//             "totalCO2Emissions": 3467.8043749995813,
//             "co2EmissionsClass": "E",
//             "totalWeight": 363.35416666587736,
//             "totalTime": 10,
//             "cuisineType": [
//                 "french"
//             ],
//             "mealType": [
//                 "snack"
//             ],
//             "dishType": [
//                 "main course"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 545.0391666661931,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 29.963562499973634,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 12.05273124999831,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0.011671874999928963,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 12.534220833316127,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 2.9549145833272243,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 38.687447916620656,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 33.37994791665223,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 5.307499999968429,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 18.783124999992737,
//                     "unit": "g"
//                 },
//                 "SUGAR.added": {
//                     "label": "Sugars, added",
//                     "quantity": 17.36,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 33.545979166637146,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 100.54333333333332,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 1554.7291666579845,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 218.86312499950273,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 96.85333333295446,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 806.211666665467,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 3.254268749987293,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 3.0967999999949485,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 436.9191666658142,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 104.05770833329386,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 5.301062499997633,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 1.3143835416652696,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 0.5737412499994474,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 6.159401041662207,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 0.6663545833327809,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 19.08145833327808,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 19.08145833327808,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 0.8501,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.815,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 1.0712416666638251,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 2.352291666655616,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 255.05477083267272,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 27.251958333309652,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 46.09778846149789,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 60.26365624999155,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 12.895815972206885,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 21.229999999873716,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 67.09195833327429,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 33.51444444444444,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 64.78038194408269,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 21.88631249995027,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 23.060317460227253,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 17.15343971628653,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 18.079270833262736,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 28.15272727268135,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 62.417023809402025,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 11.561967592588207,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 5.890069444441814,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 109.53196180543912,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 44.1339423076498,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 38.49625651038879,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 51.25804487175237,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 4.77036458331952,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 35.420833333333334,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 5.433333333333334,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 7.141611111092167,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 1.9602430555463468,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 29.963562499973634,
//                     "hasRDI": true,
//                     "daily": 46.09778846149789,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 12.05273124999831,
//                             "hasRDI": true,
//                             "daily": 60.26365624999155,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0.011671874999928963,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 12.534220833316127,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 2.9549145833272243,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 38.687447916620656,
//                     "hasRDI": true,
//                     "daily": 12.895815972206885,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 33.37994791665223,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 5.307499999968429,
//                             "hasRDI": true,
//                             "daily": 21.229999999873716,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 18.783124999992737,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 17.36,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 33.545979166637146,
//                     "hasRDI": true,
//                     "daily": 67.09195833327429,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 100.54333333333332,
//                     "hasRDI": true,
//                     "daily": 33.51444444444444,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 1554.7291666579845,
//                     "hasRDI": true,
//                     "daily": 64.78038194408269,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 218.86312499950273,
//                     "hasRDI": true,
//                     "daily": 21.88631249995027,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 96.85333333295446,
//                     "hasRDI": true,
//                     "daily": 23.060317460227253,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 806.211666665467,
//                     "hasRDI": true,
//                     "daily": 17.15343971628653,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 3.254268749987293,
//                     "hasRDI": true,
//                     "daily": 18.079270833262736,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 3.0967999999949485,
//                     "hasRDI": true,
//                     "daily": 28.15272727268135,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 436.9191666658142,
//                     "hasRDI": true,
//                     "daily": 62.417023809402025,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 104.05770833329386,
//                     "hasRDI": true,
//                     "daily": 11.561967592588207,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 5.301062499997633,
//                     "hasRDI": true,
//                     "daily": 5.890069444441814,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 1.3143835416652696,
//                     "hasRDI": true,
//                     "daily": 109.53196180543912,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 0.5737412499994474,
//                     "hasRDI": true,
//                     "daily": 44.1339423076498,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 6.159401041662207,
//                     "hasRDI": true,
//                     "daily": 38.49625651038879,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 0.6663545833327809,
//                     "hasRDI": true,
//                     "daily": 51.25804487175237,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 19.08145833327808,
//                     "hasRDI": true,
//                     "daily": 4.77036458331952,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 19.08145833327808,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 0.8501,
//                     "hasRDI": true,
//                     "daily": 35.420833333333334,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 0.815,
//                     "hasRDI": true,
//                     "daily": 5.433333333333334,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 1.0712416666638251,
//                     "hasRDI": true,
//                     "daily": 7.141611111092167,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 2.352291666655616,
//                     "hasRDI": true,
//                     "daily": 1.9602430555463468,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 255.05477083267272,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/bed494caad44a0b596fcd71e59084170?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5a1a66b84cbdabc77452dd4fee8c44f6",
//             "label": "Moroccan Grilled Chicken Sandwich with Preserved Lemon Tapenade and Harissa Mayo recipes",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/84e/84e3385c612189842337584614705fb8?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4be69766920d02d182d364f9b95c58efd8ae6fd0df1d77d19444d44b5eb71e43",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/84e/84e3385c612189842337584614705fb8-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=86a09400c5a866d9fc03eb765d0a7d8763602539305df76003180a94c84a12b8",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/84e/84e3385c612189842337584614705fb8-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cf2d650fefb998fd3df0e9608a81d59d333bb3fbdaecc1ace2a2489d3f10f9d3",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/84e/84e3385c612189842337584614705fb8?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4be69766920d02d182d364f9b95c58efd8ae6fd0df1d77d19444d44b5eb71e43",
//                     "width": 300,
//                     "height": 300
//                 }
//             },
//             "source": "Closet Cooking",
//             "url": "http://www.closetcooking.com/2013/08/moroccan-grilled-chicken-sandwich-with.html",
//             "shareAs": "http://www.edamam.com/recipe/moroccan-grilled-chicken-sandwich-with-preserved-lemon-tapenade-and-harissa-mayo-recipes-5a1a66b84cbdabc77452dd4fee8c44f6/grilled+chicken",
//             "yield": 1,
//             "dietLabels": [],
//             "healthLabels": [
//                 "Sugar-Conscious",
//                 "Dairy-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Soy-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Sulfite-Free",
//                 "Kosher"
//             ],
//             "cautions": [
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "2 slices bread",
//                 "1/2 cup Moroccan grilled chicken",
//                 "2 tablespoons green olive tapenade with preserved lemon",
//                 "1 tablespoon pickled red onions",
//                 "1 tablespoon harissa mayo*",
//                 "1 handful baby spinach leaves"
//             ],
//             "ingredients": [
//                 {
//                     "text": "2 slices bread",
//                     "quantity": 2,
//                     "measure": "slice",
//                     "food": "bread",
//                     "weight": 58,
//                     "foodCategory": "bread, rolls and tortillas",
//                     "foodId": "food_a3049hmbqj5wstaeeb3udaz6uaqv",
//                     "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
//                 },
//                 {
//                     "text": "1/2 cup Moroccan grilled chicken",
//                     "quantity": 0.5,
//                     "measure": "cup",
//                     "food": "chicken",
//                     "weight": 70,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
//                     "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
//                 },
//                 {
//                     "text": "2 tablespoons green olive tapenade with preserved lemon",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "tapenade",
//                     "weight": 14.9999999997464,
//                     "foodCategory": "canned fruit",
//                     "foodId": "food_bbvzfl9a7708mib88hc30afzvjje",
//                     "image": "https://www.edamam.com/food-img/95c/95c706937e42a80661f12c094d551d95.jpg"
//                 },
//                 {
//                     "text": "1 tablespoon pickled red onions",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "red onions",
//                     "weight": 10,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
//                     "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
//                 },
//                 {
//                     "text": "1 tablespoon harissa mayo*",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "mayo",
//                     "weight": 14.4374999997559,
//                     "foodCategory": "condiments and sauces",
//                     "foodId": "food_bu8t61zaplle7dbrzk81dbygq0qj",
//                     "image": "https://www.edamam.com/food-img/577/577308a0422357885c94cc9b5f1f1862.jpg"
//                 },
//                 {
//                     "text": "1 handful baby spinach leaves",
//                     "quantity": 1,
//                     "measure": "handful",
//                     "food": "spinach",
//                     "weight": 1.2499999999999987,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
//                     "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
//                 }
//             ],
//             "calories": 435.3649999979432,
//             "totalCO2Emissions": 944.3862843373497,
//             "co2EmissionsClass": "E",
//             "totalWeight": 168.68749999950228,
//             "totalTime": 5,
//             "cuisineType": [
//                 "middle eastern"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "sandwiches"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 435.3649999979432,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 26.62414999977324,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 5.391059999966781,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0.08704,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 9.205822499924233,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 10.070987499883904,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 29.10537499999026,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 26.092874999998628,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 3.012499999991631,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 3.8336499999986304,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 19.526249999997386,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 58.13062499990481,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 642.0318749946354,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 91.53749999986812,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 41.4174999999721,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 241.9549999998935,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 2.8463749999987575,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 1.5498249999998985,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 181.83249999998986,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 37.56249999994928,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 2.3272500000000003,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 0.2891049999999467,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 0.23627249999998223,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 8.058399999999398,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 0.32846749999992136,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 66.3949999999924,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 46.67499999999239,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 11.6,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 0.21700000000000003,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.14,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 0.9190749999903378,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 10.179499999996445,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 87.96349999980903,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 21.768249999897158,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 40.96023076888191,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 26.955299999833905,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 9.701791666663421,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 12.049999999966523,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 39.05249999999477,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 19.37687499996827,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 26.751328124776474,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 9.153749999986813,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 9.86130952380288,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 5.147978723401989,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 15.81319444443754,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 14.089318181817259,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 25.976071428569977,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 4.173611111105476,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 2.5858333333333334,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 24.092083333328894,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 18.174807692306324,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 50.36499999999624,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 25.26673076922472,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 16.5987499999981,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 9.041666666666668,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.9333333333333335,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 6.1271666666022515,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 8.482916666663703,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 26.62414999977324,
//                     "hasRDI": true,
//                     "daily": 40.96023076888191,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 5.391059999966781,
//                             "hasRDI": true,
//                             "daily": 26.955299999833905,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0.08704,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 9.205822499924233,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 10.070987499883904,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 29.10537499999026,
//                     "hasRDI": true,
//                     "daily": 9.701791666663421,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 26.092874999998628,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 3.012499999991631,
//                             "hasRDI": true,
//                             "daily": 12.049999999966523,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 3.8336499999986304,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 0,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 19.526249999997386,
//                     "hasRDI": true,
//                     "daily": 39.05249999999477,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 58.13062499990481,
//                     "hasRDI": true,
//                     "daily": 19.37687499996827,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 642.0318749946354,
//                     "hasRDI": true,
//                     "daily": 26.751328124776474,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 91.53749999986812,
//                     "hasRDI": true,
//                     "daily": 9.153749999986813,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 41.4174999999721,
//                     "hasRDI": true,
//                     "daily": 9.86130952380288,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 241.9549999998935,
//                     "hasRDI": true,
//                     "daily": 5.147978723401989,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 2.8463749999987575,
//                     "hasRDI": true,
//                     "daily": 15.81319444443754,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 1.5498249999998985,
//                     "hasRDI": true,
//                     "daily": 14.089318181817259,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 181.83249999998986,
//                     "hasRDI": true,
//                     "daily": 25.976071428569977,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 37.56249999994928,
//                     "hasRDI": true,
//                     "daily": 4.173611111105476,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 2.3272500000000003,
//                     "hasRDI": true,
//                     "daily": 2.5858333333333334,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 0.2891049999999467,
//                     "hasRDI": true,
//                     "daily": 24.092083333328894,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 0.23627249999998223,
//                     "hasRDI": true,
//                     "daily": 18.174807692306324,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 8.058399999999398,
//                     "hasRDI": true,
//                     "daily": 50.36499999999624,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 0.32846749999992136,
//                     "hasRDI": true,
//                     "daily": 25.26673076922472,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 66.3949999999924,
//                     "hasRDI": true,
//                     "daily": 16.5987499999981,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 46.67499999999239,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 11.6,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 0.21700000000000003,
//                     "hasRDI": true,
//                     "daily": 9.041666666666668,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 0.14,
//                     "hasRDI": true,
//                     "daily": 0.9333333333333335,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 0.9190749999903378,
//                     "hasRDI": true,
//                     "daily": 6.1271666666022515,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 10.179499999996445,
//                     "hasRDI": true,
//                     "daily": 8.482916666663703,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 87.96349999980903,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/5a1a66b84cbdabc77452dd4fee8c44f6?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     },
//     {
//         "recipe": {
//             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_69c61525da0104c0530517128d79a321",
//             "label": "Cold Soba Noodle Salad with Chicken, Edamame, and Soy Vinaigrette recipes",
//             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/8c8/8c8f816aad29788b21e8d395ff4c5198?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=49f98622cbb139edf04af01503c15aadd5a06e44f5dc68ed734959821beed208",
//             "images": {
//                 "THUMBNAIL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8c8/8c8f816aad29788b21e8d395ff4c5198-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b432d0c34c5d8ec7e047561a0644c0008e103303581c9a52be7eaf73fff7439d",
//                     "width": 100,
//                     "height": 100
//                 },
//                 "SMALL": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8c8/8c8f816aad29788b21e8d395ff4c5198-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=59b43384fab579c424e34d57908420e96f3abd65794088b83ecdc07db56c3d98",
//                     "width": 200,
//                     "height": 200
//                 },
//                 "REGULAR": {
//                     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8c8/8c8f816aad29788b21e8d395ff4c5198?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDeMNm60t4r6rMcFytxkW7FqEHlwyXum882eWpySeN8mQIhAILxnta70%2FOZrBzOnppNhJmDI%2Bn2qW%2B0Zh8SC1jRi%2B0BKrkFCF0QABoMMTg3MDE3MTUwOTg2IgwlzET5vw7rsdaOoJkqlgUovFniE0risbBTiAuH4W%2FnyXlS2uCLWu3GMCoeoiUHB8%2BSXJimmrNkZGGhZMCVJLN8tKZMVuoSKVuV3TCkg7TKNNfHwmcBHOU6omViYA5Cvao9xJu0Yk4ucWneCFH5dB0YDpPa%2Fwuq4KtSeLjDf1ZABe0nSKamWLHWzslaKQJB5TkfA1yRGS4%2FVEMl2jpXYal6VCes8fTuCcWDT6wM%2BkO3f9L4ILMLPTOthH7GFu49nwP6lx32PYtmX%2F%2FFSTgL%2Ffx%2BK%2BMieihgJnE%2FgdGB8N9TjlGYrj%2BvVhU0oo10L%2Bywxnv19ajQWbfz%2FsSXvJabEcZkuI%2FaPQFCXKYJcKTn%2ByHvzeZEFV9p%2FyLeqSlNTzkT4IiVYgutj0%2BrJA0OBu4TEqMvOS1b3Kisv1i2fayUspz8d%2BLD1F%2F7rn52Umk99z7VRHPL2Ggnz9t0nx8qLvZG0ucM2Eql2dr58KW%2Bz6xsOQqhD1kGoOChOM8%2Bm07uIbXri%2BEB6EjvckzmjDmgucN09R516lTox1nP9wR8MMyf6yzKJm5ZW4LLi4fS7%2BQ%2BfLwls0UHPcbvJjoOICc2Bn9xx2apRwyQdKqVhPcjuDu9ZS%2BozyhO4aNdmCt%2Fs%2FhpJn8UnMrTTrIuNhubq0WDdH117ZkM%2BLz%2FfbNRsBSJKXWElvNHjRwvGQ23FtCsmQ2Fydd%2B48oAOgQAkMdG9X5w88nMIT9%2BiAdJOf5HLvGJq1ZQpc9%2BygUwzM6BSTQ60D%2FnWSISXXL%2FBvwiJ4bHjkIJY%2FgUkN7oDN51nUtNbpSHvIdVUvbpDVmjwsOEu%2BR5wzPjyGbfhuZjuFZompCvHr6t5jaWLwLXEX15nzr6rtTcjlYs0Hqs55KCIrtXDKAOc1BHteFrpomb6PK73DDeuNynBjqwAWAqLM3ksB0qVWlVL1E68rVz2wOX9ofmKPeHTicIpVp1mQVWvigfIO29p5rSh80a4oz5Sk8tG21Mqc%2BOUtg9%2BEF2faMj8%2B1vIecGa0N6utBza3nIOq2nOj6rmm096UQV1nTSEdXYolGl0Sb2SARGMdSr0LOATuJFPLt98qg0fE9HuIt%2FnXB%2BRGIo97gV38rmFCxXQu99G723lkunBWqp7hAc0fT9rRRNB%2FNPYMX%2FiH3Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230905T133320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGRLPPXFA%2F20230905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=49f98622cbb139edf04af01503c15aadd5a06e44f5dc68ed734959821beed208",
//                     "width": 300,
//                     "height": 300
//                 }
//             },
//             "source": "Goop",
//             "url": "http://goop.com/recipes/cold-soba-noodle-salad-with-chicken-edamame-and-soy-vinaigrette/",
//             "shareAs": "http://www.edamam.com/recipe/cold-soba-noodle-salad-with-chicken-edamame-and-soy-vinaigrette-recipes-69c61525da0104c0530517128d79a321/grilled+chicken",
//             "yield": 2,
//             "dietLabels": [],
//             "healthLabels": [
//                 "Dairy-Free",
//                 "Egg-Free",
//                 "Peanut-Free",
//                 "Tree-Nut-Free",
//                 "Fish-Free",
//                 "Shellfish-Free",
//                 "Pork-Free",
//                 "Red-Meat-Free",
//                 "Crustacean-Free",
//                 "Celery-Free",
//                 "Mustard-Free",
//                 "Sesame-Free",
//                 "Lupine-Free",
//                 "Mollusk-Free",
//                 "Alcohol-Free",
//                 "Kosher"
//             ],
//             "cautions": [
//                 "Gluten",
//                 "Wheat",
//                 "Sulfites"
//             ],
//             "ingredientLines": [
//                 "1 cup cold cooked soba noodles",
//                 "1/8 cup cooked edamame",
//                 "3 oz, diced grilled chicken",
//                 "2 tablespoons soy sauce",
//                 "2 tablespoons rice vinegar",
//                 "1 tablespoon honey",
//                 "1 tablespoon olive oil"
//             ],
//             "ingredients": [
//                 {
//                     "text": "1 cup cold cooked soba noodles",
//                     "quantity": 1,
//                     "measure": "cup",
//                     "food": "cooked soba noodles",
//                     "weight": 114,
//                     "foodCategory": "grains",
//                     "foodId": "food_bjqs981ba4brmoarvdtxaah1pgsl",
//                     "image": "https://www.edamam.com/food-img/25d/25d50c574c99a627c1b9ade0034fca12.jpg"
//                 },
//                 {
//                     "text": "1/8 cup cooked edamame",
//                     "quantity": 0.125,
//                     "measure": "cup",
//                     "food": "edamame",
//                     "weight": 14.75,
//                     "foodCategory": "vegetables",
//                     "foodId": "food_bx3fkcubyl2t7ha8jfdm5anoirlx",
//                     "image": "https://www.edamam.com/food-img/325/325e012901331f9860df07f755adf197.jpg"
//                 },
//                 {
//                     "text": "3 oz, diced grilled chicken",
//                     "quantity": 3,
//                     "measure": "ounce",
//                     "food": "chicken",
//                     "weight": 85.048569375,
//                     "foodCategory": "Poultry",
//                     "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
//                     "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
//                 },
//                 {
//                     "text": "2 tablespoons soy sauce",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "soy sauce",
//                     "weight": 32,
//                     "foodCategory": "plant-based protein",
//                     "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
//                     "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
//                 },
//                 {
//                     "text": "2 tablespoons rice vinegar",
//                     "quantity": 2,
//                     "measure": "tablespoon",
//                     "food": "rice vinegar",
//                     "weight": 29.8,
//                     "foodCategory": "Condiments and sauces",
//                     "foodId": "food_axlcd4tack2d20bveizm4ayu0h2w",
//                     "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
//                 },
//                 {
//                     "text": "1 tablespoon honey",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "honey",
//                     "weight": 21,
//                     "foodCategory": "sugar syrups",
//                     "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
//                     "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
//                 },
//                 {
//                     "text": "1 tablespoon olive oil",
//                     "quantity": 1,
//                     "measure": "tablespoon",
//                     "food": "olive oil",
//                     "weight": 13.5,
//                     "foodCategory": "Oils",
//                     "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
//                     "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
//                 }
//             ],
//             "calories": 517.29592415625,
//             "totalCO2Emissions": 1231.49286160165,
//             "co2EmissionsClass": "E",
//             "totalWeight": 310.098569375,
//             "totalTime": 25,
//             "cuisineType": [
//                 "asian"
//             ],
//             "mealType": [
//                 "lunch/dinner"
//             ],
//             "dishType": [
//                 "main course",
//                 "salad"
//             ],
//             "totalNutrients": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 517.29592415625,
//                     "unit": "kcal"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 27.336408975624998,
//                     "unit": "g"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 5.5736133400625,
//                     "unit": "g"
//                 },
//                 "FATRN": {
//                     "label": "Trans",
//                     "quantity": 0.08249711229375001,
//                     "unit": "g"
//                 },
//                 "FAMS": {
//                     "label": "Monounsaturated",
//                     "quantity": 15.219830729,
//                     "unit": "g"
//                 },
//                 "FAPU": {
//                     "label": "Polyunsaturated",
//                     "quantity": 4.2840687908124995,
//                     "unit": "g"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 44.411995000000005,
//                     "unit": "g"
//                 },
//                 "CHOCDF.net": {
//                     "label": "Carbohydrates (net)",
//                     "quantity": 43.405995000000004,
//                     "unit": "g"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 1.006,
//                     "unit": "g"
//                 },
//                 "SUGAR": {
//                     "label": "Sugars",
//                     "quantity": 17.74672,
//                     "unit": "g"
//                 },
//                 "SUGAR.added": {
//                     "label": "Sugars, added",
//                     "quantity": 17.241,
//                     "unit": "g"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 25.90723390375,
//                     "unit": "g"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 63.78642703125001,
//                     "unit": "mg"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 1887.3249985624998,
//                     "unit": "mg"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 36.508342631249995,
//                     "unit": "mg"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 60.665213875000006,
//                     "unit": "mg"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 422.5877961187501,
//                     "unit": "mg"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 2.260602124375,
//                     "unit": "mg"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 1.7732162588125002,
//                     "unit": "mg"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 232.42089698125002,
//                     "unit": "mg"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 34.86991344375,
//                     "unit": "µg"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 2.8965271099999996,
//                     "unit": "mg"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 0.190874141625,
//                     "unit": "mg"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 0.23156578325,
//                     "unit": "mg"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 7.230550217499999,
//                     "unit": "mg"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 0.41558249281250004,
//                     "unit": "mg"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 62.675414162500005,
//                     "unit": "µg"
//                 },
//                 "FOLFD": {
//                     "label": "Folate (food)",
//                     "quantity": 62.675414162500005,
//                     "unit": "µg"
//                 },
//                 "FOLAC": {
//                     "label": "Folic acid",
//                     "quantity": 0,
//                     "unit": "µg"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 0.2636505650625,
//                     "unit": "µg"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 0.17009713875000002,
//                     "unit": "µg"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 2.3053457081250004,
//                     "unit": "mg"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 14.034228540625001,
//                     "unit": "µg"
//                 },
//                 "WATER": {
//                     "label": "Water",
//                     "quantity": 205.06945578750003,
//                     "unit": "g"
//                 }
//             },
//             "totalDaily": {
//                 "ENERC_KCAL": {
//                     "label": "Energy",
//                     "quantity": 25.8647962078125,
//                     "unit": "%"
//                 },
//                 "FAT": {
//                     "label": "Fat",
//                     "quantity": 42.056013808653844,
//                     "unit": "%"
//                 },
//                 "FASAT": {
//                     "label": "Saturated",
//                     "quantity": 27.8680667003125,
//                     "unit": "%"
//                 },
//                 "CHOCDF": {
//                     "label": "Carbs",
//                     "quantity": 14.803998333333336,
//                     "unit": "%"
//                 },
//                 "FIBTG": {
//                     "label": "Fiber",
//                     "quantity": 4.024,
//                     "unit": "%"
//                 },
//                 "PROCNT": {
//                     "label": "Protein",
//                     "quantity": 51.8144678075,
//                     "unit": "%"
//                 },
//                 "CHOLE": {
//                     "label": "Cholesterol",
//                     "quantity": 21.26214234375,
//                     "unit": "%"
//                 },
//                 "NA": {
//                     "label": "Sodium",
//                     "quantity": 78.63854160677083,
//                     "unit": "%"
//                 },
//                 "CA": {
//                     "label": "Calcium",
//                     "quantity": 3.6508342631249993,
//                     "unit": "%"
//                 },
//                 "MG": {
//                     "label": "Magnesium",
//                     "quantity": 14.44409854166667,
//                     "unit": "%"
//                 },
//                 "K": {
//                     "label": "Potassium",
//                     "quantity": 8.991229704654256,
//                     "unit": "%"
//                 },
//                 "FE": {
//                     "label": "Iron",
//                     "quantity": 12.558900690972223,
//                     "unit": "%"
//                 },
//                 "ZN": {
//                     "label": "Zinc",
//                     "quantity": 16.120147807386363,
//                     "unit": "%"
//                 },
//                 "P": {
//                     "label": "Phosphorus",
//                     "quantity": 33.202985283035716,
//                     "unit": "%"
//                 },
//                 "VITA_RAE": {
//                     "label": "Vitamin A",
//                     "quantity": 3.8744348270833333,
//                     "unit": "%"
//                 },
//                 "VITC": {
//                     "label": "Vitamin C",
//                     "quantity": 3.218363455555555,
//                     "unit": "%"
//                 },
//                 "THIA": {
//                     "label": "Thiamin (B1)",
//                     "quantity": 15.906178468750001,
//                     "unit": "%"
//                 },
//                 "RIBF": {
//                     "label": "Riboflavin (B2)",
//                     "quantity": 17.812752557692306,
//                     "unit": "%"
//                 },
//                 "NIA": {
//                     "label": "Niacin (B3)",
//                     "quantity": 45.190938859374995,
//                     "unit": "%"
//                 },
//                 "VITB6A": {
//                     "label": "Vitamin B6",
//                     "quantity": 31.967884062500005,
//                     "unit": "%"
//                 },
//                 "FOLDFE": {
//                     "label": "Folate equivalent (total)",
//                     "quantity": 15.668853540625001,
//                     "unit": "%"
//                 },
//                 "VITB12": {
//                     "label": "Vitamin B12",
//                     "quantity": 10.985440210937501,
//                     "unit": "%"
//                 },
//                 "VITD": {
//                     "label": "Vitamin D",
//                     "quantity": 1.1339809250000001,
//                     "unit": "%"
//                 },
//                 "TOCPHA": {
//                     "label": "Vitamin E",
//                     "quantity": 15.368971387500004,
//                     "unit": "%"
//                 },
//                 "VITK1": {
//                     "label": "Vitamin K",
//                     "quantity": 11.695190450520835,
//                     "unit": "%"
//                 }
//             },
//             "digest": [
//                 {
//                     "label": "Fat",
//                     "tag": "FAT",
//                     "schemaOrgTag": "fatContent",
//                     "total": 27.336408975624998,
//                     "hasRDI": true,
//                     "daily": 42.056013808653844,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Saturated",
//                             "tag": "FASAT",
//                             "schemaOrgTag": "saturatedFatContent",
//                             "total": 5.5736133400625,
//                             "hasRDI": true,
//                             "daily": 27.8680667003125,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Trans",
//                             "tag": "FATRN",
//                             "schemaOrgTag": "transFatContent",
//                             "total": 0.08249711229375001,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Monounsaturated",
//                             "tag": "FAMS",
//                             "schemaOrgTag": null,
//                             "total": 15.219830729,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Polyunsaturated",
//                             "tag": "FAPU",
//                             "schemaOrgTag": null,
//                             "total": 4.2840687908124995,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Carbs",
//                     "tag": "CHOCDF",
//                     "schemaOrgTag": "carbohydrateContent",
//                     "total": 44.411995000000005,
//                     "hasRDI": true,
//                     "daily": 14.803998333333336,
//                     "unit": "g",
//                     "sub": [
//                         {
//                             "label": "Carbs (net)",
//                             "tag": "CHOCDF.net",
//                             "schemaOrgTag": null,
//                             "total": 43.405995000000004,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Fiber",
//                             "tag": "FIBTG",
//                             "schemaOrgTag": "fiberContent",
//                             "total": 1.006,
//                             "hasRDI": true,
//                             "daily": 4.024,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars",
//                             "tag": "SUGAR",
//                             "schemaOrgTag": "sugarContent",
//                             "total": 17.74672,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         },
//                         {
//                             "label": "Sugars, added",
//                             "tag": "SUGAR.added",
//                             "schemaOrgTag": null,
//                             "total": 17.241,
//                             "hasRDI": false,
//                             "daily": 0,
//                             "unit": "g"
//                         }
//                     ]
//                 },
//                 {
//                     "label": "Protein",
//                     "tag": "PROCNT",
//                     "schemaOrgTag": "proteinContent",
//                     "total": 25.90723390375,
//                     "hasRDI": true,
//                     "daily": 51.8144678075,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Cholesterol",
//                     "tag": "CHOLE",
//                     "schemaOrgTag": "cholesterolContent",
//                     "total": 63.78642703125001,
//                     "hasRDI": true,
//                     "daily": 21.26214234375,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Sodium",
//                     "tag": "NA",
//                     "schemaOrgTag": "sodiumContent",
//                     "total": 1887.3249985624998,
//                     "hasRDI": true,
//                     "daily": 78.63854160677083,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Calcium",
//                     "tag": "CA",
//                     "schemaOrgTag": null,
//                     "total": 36.508342631249995,
//                     "hasRDI": true,
//                     "daily": 3.6508342631249993,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Magnesium",
//                     "tag": "MG",
//                     "schemaOrgTag": null,
//                     "total": 60.665213875000006,
//                     "hasRDI": true,
//                     "daily": 14.44409854166667,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Potassium",
//                     "tag": "K",
//                     "schemaOrgTag": null,
//                     "total": 422.5877961187501,
//                     "hasRDI": true,
//                     "daily": 8.991229704654256,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Iron",
//                     "tag": "FE",
//                     "schemaOrgTag": null,
//                     "total": 2.260602124375,
//                     "hasRDI": true,
//                     "daily": 12.558900690972223,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Zinc",
//                     "tag": "ZN",
//                     "schemaOrgTag": null,
//                     "total": 1.7732162588125002,
//                     "hasRDI": true,
//                     "daily": 16.120147807386363,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Phosphorus",
//                     "tag": "P",
//                     "schemaOrgTag": null,
//                     "total": 232.42089698125002,
//                     "hasRDI": true,
//                     "daily": 33.202985283035716,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin A",
//                     "tag": "VITA_RAE",
//                     "schemaOrgTag": null,
//                     "total": 34.86991344375,
//                     "hasRDI": true,
//                     "daily": 3.8744348270833333,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin C",
//                     "tag": "VITC",
//                     "schemaOrgTag": null,
//                     "total": 2.8965271099999996,
//                     "hasRDI": true,
//                     "daily": 3.218363455555555,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Thiamin (B1)",
//                     "tag": "THIA",
//                     "schemaOrgTag": null,
//                     "total": 0.190874141625,
//                     "hasRDI": true,
//                     "daily": 15.906178468750001,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Riboflavin (B2)",
//                     "tag": "RIBF",
//                     "schemaOrgTag": null,
//                     "total": 0.23156578325,
//                     "hasRDI": true,
//                     "daily": 17.812752557692306,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Niacin (B3)",
//                     "tag": "NIA",
//                     "schemaOrgTag": null,
//                     "total": 7.230550217499999,
//                     "hasRDI": true,
//                     "daily": 45.190938859374995,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin B6",
//                     "tag": "VITB6A",
//                     "schemaOrgTag": null,
//                     "total": 0.41558249281250004,
//                     "hasRDI": true,
//                     "daily": 31.967884062500005,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Folate equivalent (total)",
//                     "tag": "FOLDFE",
//                     "schemaOrgTag": null,
//                     "total": 62.675414162500005,
//                     "hasRDI": true,
//                     "daily": 15.668853540625001,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folate (food)",
//                     "tag": "FOLFD",
//                     "schemaOrgTag": null,
//                     "total": 62.675414162500005,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Folic acid",
//                     "tag": "FOLAC",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin B12",
//                     "tag": "VITB12",
//                     "schemaOrgTag": null,
//                     "total": 0.2636505650625,
//                     "hasRDI": true,
//                     "daily": 10.985440210937501,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin D",
//                     "tag": "VITD",
//                     "schemaOrgTag": null,
//                     "total": 0.17009713875000002,
//                     "hasRDI": true,
//                     "daily": 1.1339809250000001,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Vitamin E",
//                     "tag": "TOCPHA",
//                     "schemaOrgTag": null,
//                     "total": 2.3053457081250004,
//                     "hasRDI": true,
//                     "daily": 15.368971387500004,
//                     "unit": "mg"
//                 },
//                 {
//                     "label": "Vitamin K",
//                     "tag": "VITK1",
//                     "schemaOrgTag": null,
//                     "total": 14.034228540625001,
//                     "hasRDI": true,
//                     "daily": 11.695190450520835,
//                     "unit": "µg"
//                 },
//                 {
//                     "label": "Sugar alcohols",
//                     "tag": "Sugar.alcohol",
//                     "schemaOrgTag": null,
//                     "total": 0,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 },
//                 {
//                     "label": "Water",
//                     "tag": "WATER",
//                     "schemaOrgTag": null,
//                     "total": 205.06945578750003,
//                     "hasRDI": false,
//                     "daily": 0,
//                     "unit": "g"
//                 }
//             ]
//         },
//         "_links": {
//             "self": {
//                 "href": "https://api.edamam.com/api/recipes/v2/69c61525da0104c0530517128d79a321?type=public&app_id=302a85e9&app_key=5d87bfb590713a27d78af1fca1664014",
//                 "title": "Self"
//             }
//         }
//     }
// ]

// module.exports= data;