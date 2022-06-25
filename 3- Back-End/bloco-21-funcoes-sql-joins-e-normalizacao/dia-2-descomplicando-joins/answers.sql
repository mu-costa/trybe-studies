/* primeira questão */
SELECT mo.title, box.domestic_sales, box.international_sales 
FROM pixar.movies AS mo 
INNER JOIN pixar.box_office AS box 
ON mo.id = box.movie_id;

/* segunda questão */
SELECT mo.title, box.domestic_sales + box.international_sales AS total_vendas   
FROM pixar.movies AS mo    
INNER JOIN pixar.box_office AS box    
ON mo.id = box.movie_id   
WHERE box.international_sales > box.domestic_sales;

/* terceira questão */
SELECT mo.title, box.rating
FROM pixar.movies AS mo
INNER JOIN pixar.box_office AS box
ON mo.id = box.movie_id;

/* quarta questão */

SELECT  *
FROM pixar.theater AS thea
LEFT JOIN pixar.movies AS mov
ON thea.id = mov.theater_id
ORDER BY thea.name;

/* quinta questão */

SELECT  mov.*, thea.* FROM pixar.theater AS thea 
RIGHT JOIN pixar.movies AS mov 
ON mov.theater_id = thea.id 
ORDER BY thea.name;

/* sexta questão */
SELECT  mov.* 
FROM pixar.theater AS thea 
INNER JOIN pixar.movies AS mov  
ON mov.theater_id = thea.id  
INNER JOIN pixar.box_office AS box 
ON mov.id = box.movie_id 
WHERE (mov.theater_id IS NOT NULL ) AND (box.rating > 8);


