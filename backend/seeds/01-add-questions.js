exports.seed = function(knex) {
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([{
        shot_src: "https://assets.www.warnerbros.com/drupal-root/public/shawshank_25th_01_0.jpg",
        choiceA: "The Godfather: Part II (1974)",
        choiceB: "The Shawshank Redemption (1994)",
        choiceC: "12 Angry Men ",
        choiceD: "Pulp Fiction (1994)",
        correct: "The Shawshank Redemption (1994)"
        }, {
        shot_src: "https://static.rogerebert.com/uploads/review/primary_image/reviews/great-movie-the-godfather-1972/EB19970316REVIEWS08401010321AR.jpg",
        choiceA: "The Matrix (1999)",
        choiceB: "Life Is Beautiful (1997)",
        choiceC: "The Godfather (1972)",
        choiceD: "Star Wars: Episode IV - A New Hope (1977)",
        correct: "The Godfather (1972)"
        }, {
        shot_src: "http://www.rellimzone.com/images/movies/the-dark-knight-2008-movie-02.jpg",
        choiceA: "The Dark Knight (2008)",
        choiceB: "Forrest Gump (1994)",
        choiceC: "Goodfellas (1990)",
        choiceD: "Seven Samurai (1954)",
        correct: "The Dark Knight (2008)"
        }, {
        shot_src: "https://static.rogerebert.com/uploads/review/primary_image/reviews/great-movie-12-angry-men-1957/EB20020929REVIEWS08209290301AR.jpg",
        choiceA: "The Good, the Bad and the Ugly (1966)",
        choiceB: "12 Angry Men (1957)",
        choiceC: "It's a Wonderful Life (1946)",
        choiceD: "Seven Samurai (1954)",
        correct: "12 Angry Men (1957)"  
        }, {
        shot_src: "https://cdn.britannica.com/21/77221-050-49199800/Steven-Spielberg-set-Liam-Neeson-Schindlers-List.jpg",
        choiceA: "Pulp Fiction (1994)",
        choiceB: "12 Angry Men (1957)",
        choiceC: "Schindler's List (1993)",
        choiceD: "City of God (2002)",
        correct: "Schindler's List (1993)"
        }, {
        shot_src: "https://www.eyeforfilm.co.uk/images/newsite/return_Irv2Dya_600.jpg",
        choiceA: "The Lord of the Rings: The Two Towers (2002)",
        choiceB: "Se7en (1995)",
        choiceC: "Life Is Beautiful (1997)",
        choiceD: "The Lord of the Rings: The Return of the King (2003)",
        correct: "The Lord of the Rings: The Return of the King (2003)" 
        }, {   
        shot_src: "http://lavitastella.com/wp-content/uploads/2013/01/pulp-fiction-dance-1024x528.jpg",
        choiceA: "Pulp Fiction (1994)",
        choiceB: "Fight Club (1999)",
        choiceC: "Spirited Away (2001)",
        choiceD: "Modern Times (1936)",
        correct: "Pulp Fiction (1994)"
        }, {
        shot_src: "https://cdn.britannica.com/75/176475-050-C55DEEA6/Eli-Wallach-Clint-Eastwood-The-Good-the.jpg",
        choiceA: "Witness for the Prosecution (1957)",
        choiceB: "The Good, the Bad and the Ugly (1966)",
        choiceC: "High and Low (1963)",
        choiceD: "Amadeus (1984)",
        correct: "The Good, the Bad and the Ugly (1966)"
        }, {
        shot_src: "http://basementrejects.com/wp-content/uploads/2011/12/lord-of-the-rings-the-fellowship-of-the-ring-2001-black-rider-ring-wraith-review.jpg",
        choiceA: "Star Wars: Episode V - The Empire Strikes Back (1980)",
        choiceB: "One Flew Over the Cuckoo's Nest (1975)",
        choiceC: "The Lord of the Rings: The Fellowship of the Ring (2001)",
        choiceD: "The Godfather (1972)",
        correct: "The Lord of the Rings: The Fellowship of the Ring (2001)"
        }, {
        shot_src: "https://www.tribute.ca/news/wp-content/uploads/2017/01/fight-club.jpg",
        choiceA: "Avengers: Infinity War (2018)",
        choiceB: "Once Upon a Time in America (1984)",
        choiceC: "Like Stars on Earth (2007)",
        choiceD: "Fight Club (1999)",
        correct: "Fight Club (1999)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BZDU0NTgwMGQtZDgwZS00YmQzLWE4Y2MtN2M1ZTYwNWNlMGVmXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
        choiceA: "Forrest Gump (1994)",
        choiceB: "Pulp Fiction (1994)",
        choiceC: "Interstellar (2014)",
        choiceD: "Fight Club (1999)",
        correct: "Forrest Gump (1994)"
        }, {
        shot_src: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        choiceA: "Star Wars: Episode V - The Empire Strikes Back (1980)",
        choiceB: "Inception (2010)",
        choiceC: "American History X (1998)",
        choiceD: "Casablanca (1942)",
        correct: "Inception (2010)"
        }, {
        shot_src: "https://miro.medium.com/max/1400/1*9EFpDQtzPZeXOxTS-a5YIg.png",
        choiceA: "The Intouchables (2011)",
        choiceB: "Sunset Blvd. (1950)",
        choiceC: "Star Wars: Episode V - The Empire Strikes Back (1980)",
        choiceD: "Coco (2017)",
        correct: "Star Wars: Episode V - The Empire Strikes Back (1980)"
        }, {
        shot_src: "https://www.cinemahumain.com/wp-content/uploads/2015/08/Saving-PR_Cover.png",
        choiceA: "Spirited Away (2001)",
        choiceB: "Sunset Blvd. (1950)",
        choiceC: "Inception (2010)",
        choiceD: "Saving Private Ryan (1998)",
        correct: "Saving Private Ryan (1998)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BODkzZWZkZjItNjY2Ni00OGM4LWFjZjMtYzlmZjI2Yzk4NWZhXkEyXkFqcGdeQXVyNjA5NDgxNTg@._V1_.jpg",
        choiceA: "Parasite (2019)",
        choiceB: "Life Is Beautiful (1997)",
        choiceC: "The Great Dictator (1940)",
        choiceD: "Oldboy (2003)",
        correct: "Parasite (2019)"
        }, {
        shot_src: "https://www.tasteofcinema.com/wp-content/uploads/2017/03/Spirited_Away.jpg",
        choiceA: "WALL·E (2008)",
        choiceB: "Spirited Away (2001)",
        choiceC: "Princess Mononoke (1997)",
        choiceD: "Your Name. (2016)",
        correct: "Spirited Away (2001)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BYzA4ZWRhNjktMTA3ZS00NDNiLThmMDMtNzdlYzk0ZjY2ZGFmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX1536_CR0,0,1536,999_AL_.jpg",
        choiceA: "Interstellar (2014)",
        choiceB: "Léon: The Professional (1994)",
        choiceC: "The Green Mile (1999)",
        choiceD: "Full Metal Jacket (1987)",
        correct: "The Green Mile (1999)"
        }, {
        shot_src: "https://img.cinemablend.com/cb/d/6/f/e/a/2/d6fea2d41ccd7eaf0dabea9ec22b0adb7eadf37b8a365a899f55ceaad0f6a9ea.jpg",
        choiceA: "Pulp Fiction (1994)",
        choiceB: "Whiplash (2014)",
        choiceC: "Alien (1979)",
        choiceD: "Interstellar (2014)",
        correct: "Interstellar (2014)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BZWQ1NWU5NzAtN2NmZi00NTQzLWEwNTYtMWJmZTFlNzA1NDAxXkEyXkFqcGdeQXVyMTAwMzgzNjIz._V1_SX1777_CR0,0,1777,740_AL_.jpg",
        choiceA: "Léon: The Professional (1994)",
        choiceB: "The Usual Suspects (1995)",
        choiceC: "Alien (1979)",
        choiceD: "The Lion King (1994)",
        correct: "Léon: The Professional (1994)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTYyNDUwMzU5OF5BMl5BanBnXkFtZTcwNjE4Mjg3NA@@._V1_.jpg",
        choiceA: "Léon: The Professional (1994)",
        choiceB: "The Usual Suspects (1995)",
        choiceC: "Pulp Fiction (1994)",
        choiceD: "The Godfather: Part II (1974)",
        correct: "The Usual Suspects (1995)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTUwMDc1MjY4MF5BMl5BanBnXkFtZTcwNTE5NjM5Ng@@._V1_SY1000_CR0,0,1415,1000_AL_.jpg",
        choiceA: "Once Upon a Time in America (1984)",
        choiceB: "Amadeus (1984)",
        choiceC: "Harakiri (1962)",
        choiceD: "Vertigo (1958)",
        correct: "Harakiri (1962)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTY3MDA0NzA2MV5BMl5BanBnXkFtZTcwODQ2NTI3Ng@@._V1_.jpg",
        choiceA: "Cinema Paradiso (1988)",
        choiceB: "Spider-Man: Into the Spider-Verse (2018)",
        choiceC: "Toy Story (1995)",
        choiceD: "The Lion King (1994)",
        correct: "The Lion King (1994)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTQ5MDQxMzQ3M15BMl5BanBnXkFtZTcwMjYxMTIyMw@@._V1_SY1000_CR0,0,1491,1000_AL_.jpg",
        choiceA: "The Pianist (2002)",
        choiceB: "Back to the Future (1985)",
        choiceC: "The Dark Knight (2008)",
        choiceD: "Witness for the Prosecution (1957)",
        correct: "The Pianist (2002)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjI3NTQ3MjgzM15BMl5BanBnXkFtZTcwNDIxODY3Mw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        choiceA: "Harakiri (1962)",
        choiceB: "American History X (1998)",
        choiceC: "Harakiri (1962)",
        choiceD: "Das Boot (1981)",
        correct: "American History X (1998)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BNjE4Mzk3NjM4MF5BMl5BanBnXkFtZTcwOTUxNDc0NA@@._V1_SY1000_CR0,0,1517,1000_AL_.jpg",
        choiceA: "Terminator 2: Judgment Day (1991)",
        choiceB: "The Lives of Others (2006)",
        choiceC: "Back to the Future (1985)",
        choiceD: "Das Boot (1981)",
        correct: "Back to the Future (1985)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BNTA0NTI4OTgxNF5BMl5BanBnXkFtZTcwMzE4MTc4Mw@@._V1_SY1000_CR0,0,1486,1000_AL_.jpg",
        choiceA: "One Flew Over the Cuckoo's Nest (1975)",
        choiceB: "The Matrix (1999)",
        choiceC: "Se7en (1995)",
        choiceD: "Terminator 2: Judgment Day (1991)",
        correct: "Terminator 2: Judgment Day (1991)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BNjBkYmJhNDktNjQ0Ny00ZWMzLWFlZjMtZjE1MWVmYTFjMWJlXkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_SY1000_CR0,0,1483,1000_AL_.jpg",
        choiceA: "Goodfellas (1990)",
        choiceB: "The Godfather (1972)",
        choiceC: "The Shining (1980)",
        choiceD: "American Beauty (1999)",
        correct: "Goodfellas (1990)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTMyMzc1OTI1MF5BMl5BanBnXkFtZTcwNjUzNTIwNA@@._V1_SY1000_CR0,0,1488,1000_AL_.jpg",
        choiceA: "The Silence of the Lambs (1991)",
        choiceB: "One Flew Over the Cuckoo's Nest (1975)",
        choiceC: "The Lord of the Rings: The Two Towers (2002)",
        choiceD: "American Beauty (1999)",
        correct: "One Flew Over the Cuckoo's Nest (1975)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BYjI5ODA3NzktMDBhZS00ZmNmLTk2ZDMtMjE0ZWI4MTRmNzNhXkEyXkFqcGdeQXVyNzM0MTUwNTY@._V1_.jpg",
        choiceA: "Harakiri (1962)",
        choiceB: "City Lights (1931)",
        choiceC: "Seven Samurai (1954)",
        choiceD: "High and Low (1963)",
        correct: "Seven Samurai (1954)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMzY0MDg5MTU5OV5BMl5BanBnXkFtZTcwMDUzNTIwNA@@._V1_SY1000_CR0,0,1488,1000_AL_.jpg",
        choiceA: "Life Is Beautiful (1997)",
        choiceB: "Léon: The Professional (1994)",
        choiceC: "American History X (1998)",
        choiceD: "Se7en (1995)",
        correct: "Se7en (1995)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BNmMzMDYyM2MtNjE5My00YjJjLThhYTYtM2I0OGEyZDNmYzk2XkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg",
        choiceA: "Life Is Beautiful (1997)",
        choiceB: "The Silence of the Lambs (1991)",
        choiceC: "Good Will Hunting (1997)",
        choiceD: "For a Few Dollars More (1965)",
        correct: "Life Is Beautiful (1997)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTc5MzkzNzk5MV5BMl5BanBnXkFtZTcwMjc4MTE5Ng@@._V1_SX1777_CR0,0,1777,993_AL_.jpg",
        choiceA: "Schindler's List (1993)",
        choiceB: "City of God (2002)",
        choiceC: "The Departed (2006)",
        choiceD: "The Green Mile (1999)",
        correct: "City of God (2002)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMDYwMjNmMDItMWQyMy00NWZiLWFlODktZjZmOWVjMzYwYzNiXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg",
        choiceA: "12 Angry Men (1957)",
        choiceB: "Se7en (1995)",
        choiceC: "The Silence of the Lambs (1991)",
        choiceD: "Parasite (2019)",
        correct: "The Silence of the Lambs (1991)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTc3OTc3NzUyOV5BMl5BanBnXkFtZTcwOTE4Mzg2OA@@._V1_.jpg",
        choiceA: "The Shining (1980)",
        choiceB: "Modern Times (1936)",
        choiceC: "Django Unchained (2012)",
        choiceD: "Raiders of the Lost Ark (1981)",
        correct: "Django Unchained (2012)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BYjE5ZmEyZjctZWNlYi00MzRkLTgzODktMzdhMTQ2ZjNjMTIwXkEyXkFqcGdeQXVyMjMzMDI4MjQ@._V1_SY1000_CR0,0,1329,1000_AL_.jpg",
        choiceA: "Saving Private Ryan (1998)",
        choiceB: "Modern Times (1936)",
        choiceC: "Terminator 2: Judgment Day (1991)",
        choiceD: "It's a Wonderful Life (1946)",
        correct: "It's a Wonderful Life (1946)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMGU3Zjg0YmMtMmEwOS00MDlkLWE3MjQtNTYzNmZiYzhkNDAzXkEyXkFqcGdeQXVyMTA2ODMzMDU@._V1_.jpg",
        choiceA: "Modern Times (1936)",
        choiceB: "Avengers: Infinity War (2018)",
        choiceC: "Django Unchained (2012)",
        choiceD: "The Great Dictator (1940)",
        correct: "Modern Times (1936)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjI5ODIzNTY3NF5BMl5BanBnXkFtZTYwNDcyNTQ2._V1_.jpg",
        choiceA: "Harakiri (1962)",
        choiceB: "Psycho (1960)",
        choiceC: "Grave of the Fireflies (1988)",
        choiceD: "Memento (2000)",
        correct: "Psycho (1960)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BNDMzNzkwNDgxMF5BMl5BanBnXkFtZTcwNzg0NjcxNA@@._V1_SY1000_CR0,0,1515,1000_AL_.jpg",
        choiceA: "Fight Club (1999)",
        choiceB: "The Usual Suspects (1995)",
        choiceC: "Gladiator (2000)",
        choiceD: "Indiana Jones and the Raiders of the Lost Ark (1981)",
        correct: "Gladiator (2000)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTM5MTM4NzQzNV5BMl5BanBnXkFtZTcwMzEzMDMyNw@@._V1_SY1000_CR0,0,1396,1000_AL_.jpg",
        choiceA: "Whiplash (2014)",
        choiceB: "Apocalypse Now (1979)",
        choiceC: "Avengers: Infinity War (2018)",
        choiceD: "City Lights (1931)",
        correct: "City Lights (1931)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BOTkzNjA2MDA4M15BMl5BanBnXkFtZTYwNzA4NjY3._V1_.jpg",
        choiceA: "The Departed (2006)",
        choiceB: "Snatch (2000)",
        choiceC: "Bicycle Thieves (1948)",
        choiceD: "Incendies (2010)",
        correct: "The Departed (2006)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BZDY4N2E5ZjUtOWZiOC00NjIyLWJmNzYtNWY1NmMzMDYzNGQ3XkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg",
        choiceA: "The Prestige (2006)",
        choiceB: "The Intouchables (2011)",
        choiceC: "The Lives of Others (2006)",
        choiceD: "Oldboy (2003)",
        correct: "The Intouchables (2011)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjM1MDU3NTM5M15BMl5BanBnXkFtZTgwOTkzMjQ3MjE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        choiceA: "The Hunt (2012)",
        choiceB: "A Separation (2011)",
        choiceC: "Whiplash (2014)",
        choiceD: "Come and See (1985)",
        correct: "Whiplash (2014)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTZiZDRiZjktNGQ5Mi00ZDJhLThjOGYtMWYzMmM3MGRjYzgwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
        choiceA: "Casablanca (1942)",
        choiceB: "The Usual Suspects (1995)",
        choiceC: "Alien (1979)",
        choiceD: "The Prestige (2006)",
        correct: "The Prestige (2006)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BNzFkOTFjN2EtZjIwYy00MmFlLTk1ODEtZTFkODdlM2UyMzhiXkEyXkFqcGdeQXVyNTgzMzk4NDQ@._V1_.jpg",
        choiceA: "Apocalypse Now (1979)",
        choiceB: "Paths of Glory (1957)",
        choiceC: "Rear Window (1954)",
        choiceD: "Witness for the Prosecution (1957)",
        correct: "Apocalypse Now (1979)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BYjFiOTE0MjUtMTY2Ny00ZjU3LTgwYTQtNDQ5ZGJkZTgzOTYxXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_.jpg",
        choiceA: "Once Upon a Time in the West (1968)",
        choiceB: "Memento (2000)",
        choiceC: "Joker (2019)",
        choiceD: "Witness for the Prosecution (1957)",
        correct: "Once Upon a Time in the West (1968)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BOWFhM2UyMDgtZGJiNi00ZTJhLTlmZDEtZDkwYjk3ZWRiMzc4XkEyXkFqcGdeQXVyNjQ2NDA2ODM@._V1_.jpg",
        choiceA: "The Prestige (2006)",
        choiceB: "Grave of the Fireflies (1988)",
        choiceC: "Paths of Glory (1957)",
        choiceD: "Oldboy (2003)",
        correct: "Grave of the Fireflies (1988)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTgyMDczNzM2NF5BMl5BanBnXkFtZTgwMTA1MTI2NDM@._V1_SY1000_CR0,0,1250,1000_AL_.jpg",
        choiceA: "Gladiator (2000)",
        choiceB: "Spirited Away (2001)",
        choiceC: "Casablanca (1942)",
        choiceD: "The Good, the Bad and the Ugly (1966)",
        correct: "Casablanca (1942)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjIwNzM0Mzc2MV5BMl5BanBnXkFtZTgwODAxODUyMTI@._V1_.jpg",
        choiceA: "Se7en (1995)",
        choiceB: "WALL·E (2008)",
        choiceC: "The Dark Knight Rises (2012)",
        choiceD: "Rear Window (1954)",
        correct: "Rear Window (1954)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BY2VjNjA1NmYtNWMwYy00NTBiLTg3NzMtNTc4OTRkNWFiZGFkXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg",
        choiceA: "Cinema Paradiso (1988)",
        choiceB: "Back to the Future (1985)",
        choiceC: "The Departed (2006)",
        choiceD: "The Lives of Others (2006)",
        correct: "Cinema Paradiso (1988)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTk3OTQwMjAyM15BMl5BanBnXkFtZTYwODk5ODk2._V1_.jpg",
        choiceA: "Joker (2019)",
        choiceB: "Alien (1979)",
        choiceC: "Psycho (1960)",
        choiceD: "The Lion King (1994)",
        correct: "Alien (1979)" 
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BZmE2NTgxYTYtNTY1Yi00Yzg1LWI5NjctYTY1MjEwNTg0MzEzXkEyXkFqcGdeQXVyMTI3MDk3MzQ@._V1_.jpg",
        choiceA: "Joker (2019)",
        choiceB: "Alien (1979)",
        choiceC: "Memento (2000)",
        choiceD: "Oldboy (2003)",
        correct: "Memento (2000)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMDYxMGJjYjUtMjY5YS00MDc5LWEwOGEtNzIyYTA0ZWFmODk2XkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg",
        choiceA: "Paths of Glory (1957)",
        choiceB: "Reservoir Dogs (1992)",
        choiceC: "Requiem for a Dream (2000)",
        choiceD: "The Lives of Others (2006)",
        correct: "The Lives of Others (2006)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjI0Nzk4ODctYWNlOC00Njg5LThiNTMtZDNjOTllODNlNWZlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX1500_AL_.jpg",
        choiceA: "Joker (2019)",
        choiceB: "Cinema Paradiso (1988)",
        choiceC: "Like Stars on Earth (2007)",
        choiceD: "The Lives of Others (2006)",
        correct: "Joker (2019)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BZGJmYzk0YmItNmEzNC00ZDdjLTlhZGMtZjk0MmFlNjVmMzI1XkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_.jpg",
        choiceA: "Apocalypse Now (1979)",
        choiceB: "Paths of Glory (1957)",
        choiceC: "The Hunt (2012)",
        choiceD: "Amélie (2001)",
        correct: "Paths of Glory (1957)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BY2U2YTYwN2MtYzUyNS00MDE2LTg3MTgtOWY2YmE3MTIwOGU5XkEyXkFqcGdeQXVyMjMzMDI4MjQ@._V1_SY1000_CR0,0,1775,1000_AL_.jpg",
        choiceA: "Das Boot (1981)",
        choiceB: "Toy Story (1995)",
        choiceC: "The Shining (1980)",
        choiceD: "High and Low (1963)",
        correct: "The Shining (1980)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjExNDU3ODAwMV5BMl5BanBnXkFtZTcwNTEwMzMzMw@@._V1_SX1777_CR0,0,1777,740_AL_.jpg",
        choiceA: "Green Book (2018)",
        choiceB: "Toy Story (1995)",
        choiceC: "Monty Python and the Holy Grail (1975)",
        choiceD: "WALL·E (2008)",
        correct: "WALL·E (2008)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BNDQ5MzE1NjY3OF5BMl5BanBnXkFtZTgwNjQzMjkxMzE@._V1_SY1000_CR0,0,1757,1000_AL_.jpg",
        choiceA: "Princess Mononoke (1997)",
        choiceB: "Casablanca (1942)",
        choiceC: "Oldboy (2003)",
        choiceD: "WALL·E (2008)",
        correct: "Princess Mononoke (1997)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjA0MTgwNTM5MV5BMl5BanBnXkFtZTgwOTgyODI4NjM@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        choiceA: "Princess Mononoke (1997)",
        choiceB: "Spider-Man: Into the Spider-Verse (2018)",
        choiceC: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)",
        choiceD: "Avengers: Infinity War (2018)	",
        correct: "Spider-Man: Into the Spider-Verse (2018)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTcxNDg4NTIzOV5BMl5BanBnXkFtZTgwODU4MjkzNTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        choiceA: "Amadeus (1984)",
        choiceB: "American Beauty (1999)",
        choiceC: "Avengers: Infinity War (2018)",
        choiceD: "Your Name. (2016)",
        correct: "Avengers: Infinity War (2018)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTUzNTk2NTE5OF5BMl5BanBnXkFtZTcwNjU4MTI2NQ@@._V1_SY1000_CR0,0,1519,1000_AL_.jpg",
        choiceA: "Avengers: Endgame (2019)",
        choiceB: "American Beauty (1999)",
        choiceC: "The Dark Knight Rises (2012)",
        choiceD: "Oldboy (2003)",
        correct: "Oldboy (2003)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BNzI1MTAxOTk1OF5BMl5BanBnXkFtZTcwMjcwMzQxOA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        choiceA: "The Dark Knight Rises (2012)",
        choiceB: "The Dark Knight (2008)",
        choiceC: "Saving Private Ryan (1998)",
        choiceD: "Oldboy (2003)",
        correct: "The Dark Knight Rises (2012)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BODEzNjAyNjk0OV5BMl5BanBnXkFtZTcwMDEyMzE0NA@@._V1_SY1000_CR0,0,1399,1000_AL_.jpg",
        choiceA: "Avengers: Endgame (2019)",
        choiceB: "Once Upon a Time in America (1984)",
        choiceC: "Saving Private Ryan (1998)",
        choiceD: "Aliens (1986)",
        correct: "Once Upon a Time in America (1984)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMzZmNDRmYWUtYzdhZi00Mjk0LWI0OTUtNjRkYTAzNTJhOTY4XkEyXkFqcGdeQXVyODE2MzM5OTM@._V1_SY1000_CR0,0,1333,1000_AL_.jpg",
        choiceA: "Your Name. (2016)",
        choiceB: "Once Upon a Time in America (1984)",
        choiceC: "Saving Private Ryan (1998)",
        choiceD: "American Beauty (1999)",
        correct: "Your Name. (2016)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTU4Njg3MDIxN15BMl5BanBnXkFtZTgwNDEzMjMyNDM@._V1_SX1777_CR0,0,1777,743_AL_.jpg",
        choiceA: "Your Name. (2016)",
        choiceB: "Coco (2017)",
        choiceC: "Braveheart (1995)",
        choiceD: "American Beauty (1999)",
        correct: "Coco (2017)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTM4NzU3NzM2N15BMl5BanBnXkFtZTcwOTEyODY3Mw@@._V1_SX1450_CR0,0,1450,999_AL_.jpg",
        choiceA: "Witness for the Prosecution (1957)",
        choiceB: "Coco (2017)",
        choiceC: "3 Idiots (2009)",
        choiceD: "American Beauty (1999)",
        correct: "American Beauty (1999)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BODYwNzcyMjIxNF5BMl5BanBnXkFtZTgwMDEyNzU5MTE@._V1_SY1000_CR0,0,1492,1000_AL_.jpg",
        choiceA: "Braveheart (1995)",
        choiceB: "Bicycle Thieves (1948)",
        choiceC: "For a Few Dollars More (1965)",
        choiceD: "Batman Begins (2005)",
        correct: "Braveheart (1995)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BYjEwNTA2MTQtMjRjYS00OTg0LWEzY2EtMDA0NmI1Y2QzMGU4XkEyXkFqcGdeQXVyMTAxNTY1Nzg1._V1_.jpg",
        choiceA: "The Dark Knight Rises (2012)",
        choiceB: "Das Boot (1981)",
        choiceC: "3 Idiots (2009)",
        choiceD: "Your Name. (2016)",
        correct: "3 Idiots (2009)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTQ5ODg4NzgyOV5BMl5BanBnXkFtZTcwNTEzMzc4Mg@@._V1_SY1000_CR0,0,1674,1000_AL_.jpg",
        choiceA: "Toy Story (1995)",
        choiceB: "High and Low (1963)",
        choiceC: "Inglourious Basterds (2009)",
        choiceD: "Your Name. (2016)",
        correct: "Toy Story (1995)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTUwODU0NjUyN15BMl5BanBnXkFtZTcwOTI5MTU4Mw@@._V1_SY1000_CR0,0,1278,1000_AL_.jpg",
        choiceA: "Star Wars: Episode VI - Return of the Jedi (1983)",
        choiceB: "High and Low (1963)",
        choiceC: "Good Will Hunting (1997)",
        choiceD: "Amadeus (1984)",
        correct: "High and Low (1963)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMWNmMzZhYzMtMWU5ZS00ZDk1LWJhYjMtNDc0MTFkZWYwNThkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjAwNTYwNDg@._V1_SX1777_CR0,0,1777,755_AL_.jpg",
        choiceA: "Star Wars: Episode VI - Return of the Jedi (1983)",
        choiceB: "High and Low (1963)",
        choiceC: "Like Stars on Earth (2007)",
        choiceD: "Once Upon a Time in America (1984)",
        correct: "Like Stars on Earth (2007)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTI3OTk5MjA1OF5BMl5BanBnXkFtZTYwNDg3MDk2._V1_.jpg",
        choiceA: "Full Metal Jacket (1987)",
        choiceB: "M (1931)",
        choiceC: "Capernaum (2018)",
        choiceD: "Amadeus (1984)",
        correct: "Amadeus (1984)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjI1OTIyMDkzM15BMl5BanBnXkFtZTcwNjgzMTY2Mw@@._V1_SY1000_CR0,0,1492,1000_AL_.jpg",
        choiceA: "Star Wars: Episode VI - Return of the Jedi (1983)",
        choiceB: "M (1931)",
        choiceC: "Reservoir Dogs (1992)	",
        choiceD: "Amadeus (1984)",
        correct: "Star Wars: Episode VI - Return of the Jedi (1983)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMDZjNzE1MmItYjBlOC00NDIyLTk3Y2UtZGYyM2Y4MjM2MmM2XkEyXkFqcGdeQXVyMzQ4NjI4MDM@._V1_SX1777_CR0,0,1777,760_AL_.jpg",
        choiceA: "Star Wars: Episode VI - Return of the Jedi (1983)",
        choiceB: "Reservoir Dogs (1992)",
        choiceC: "Toy Story (1995)",
        choiceD: "1917 (2019)",
        correct: "Reservoir Dogs (1992)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTU1Mzg1Mzk0Nl5BMl5BanBnXkFtZTcwNDE0OTY3Mg@@._V1_.jpg",
        choiceA: "Good Will Hunting (1997)",
        choiceB: "Like Stars on Earth (2007)",
        choiceC: "Inglourious Basterds (2009)",
        choiceD: "1917 (2019)",
        correct: "Inglourious Basterds (2009)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjI4MDAxNDI3N15BMl5BanBnXkFtZTcwODQ5MjU0NQ@@._V1_SY1000_CR0,0,1504,1000_AL_.jpg",
        choiceA: "Requiem for a Dream (2000)",
        choiceB: "Like Stars on Earth (2007)",
        choiceC: "Dangal (2016)",
        choiceD: "Good Will Hunting (1997)",
        correct: "Good Will Hunting (1997)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BZGY4ZDdkZjktNzdiNy00NDEzLWE1MTEtZTFlY2Y4NWQ4YjI2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX1777_CR0,0,1777,740_AL_.jpg",
        choiceA: "1917 (2019)",
        choiceB: "Like Stars on Earth (2007)",
        choiceC: "Dangal (2016)",
        choiceD: "Good Will Hunting (1997)",
        correct: "1917 (2019)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTQ0OTY4MjIzNV5BMl5BanBnXkFtZTcwOTUyNDMzNQ@@._V1_SX1777_CR0,0,1777,839_AL_.jpg",
        choiceA: "1917 (2019)",
        choiceB: "2001: A Space Odyssey (1968)",
        choiceC: "Dangal (2016)",
        choiceD: "Braveheart (1995)",
        correct: "2001: A Space Odyssey (1968)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMDNlYjQ1ZDktZThhNS00ZTg5LWI5ZDUtZDhmYTdkZmRmNzMxXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_.jpg",
        choiceA: "1917 (2019)",
        choiceB: "2001: A Space Odyssey (1968)",
        choiceC: "Capernaum (2018)",
        choiceD: "Inglourious Basterds (2009)",
        correct: "Capernaum (2018)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BOTk2MTk5OTEzNV5BMl5BanBnXkFtZTcwNDg3MjU4Mw@@._V1_SY1000_CR0,0,1452,1000_AL_.jpg",
        choiceA: "Das Boot (1981)",
        choiceB: "To Kill a Mockingbird (1962)",
        choiceC: "Oldboy (2003)",
        choiceD: "Vertigo (1958)",
        correct: "Vertigo (1958)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTgwNDU3ODk5M15BMl5BanBnXkFtZTgwNjU5OTIwMjE@._V1_SY1000_CR0,0,1517,1000_AL_.jpg",
        choiceA: "Requiem for a Dream (2000)",
        choiceB: "Avengers: Endgame (2019)",
        choiceC: "L.A. Confidential (1997)",
        choiceD: "A Separation (2011)",
        correct: "Requiem for a Dream (2000)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTk2MjMxMTk4Nl5BMl5BanBnXkFtZTgwMjU2MDg0MjE@._V1_.jpg",
        choiceA: "Spider-Man: Into the Spider-Verse (2018)",
        choiceB: "M (1931)",
        choiceC: "The Dark Knight Rises (2012)",
        choiceD: "Django Unchained (2012)",
        correct: "M (1931)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BZTkyZDNmOWEtOTcxNy00MTY4LWI0NTUtZjk1MDkwMjljODMwXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg",
        choiceA: "2001: A Space Odyssey (1968)",
        choiceB: "Children of Heaven (1997)",
        choiceC: "Dangal (2016)",
        choiceD: "The Gold Rush (1925)",
        correct: "Dangal (2016)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTg0MjgxMzA1OF5BMl5BanBnXkFtZTcwMjU5ODMyMw@@._V1_SX1777_CR0,0,1777,944_AL_.jpg",
        choiceA: "Raiders of the Lost Ark (1981)",
        choiceB: "Paths of Glory (1957)",
        choiceC: "Dangal (2016)",
        choiceD: "Eternal Sunshine of the Spotless Mind (2004)",
        correct: "Eternal Sunshine of the Spotless Mind (2004)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjA5OTA0MTkzNV5BMl5BanBnXkFtZTcwMjA4NTc3Nw@@._V1_SY1000_SX1500_AL_.jpg",
        choiceA: "The Hunt (2012)",
        choiceB: "Batman Begins (2005)",
        choiceC: "Ran (1985)",
        choiceD: "Howl's Moving Castle (2004)",
        correct: "The Hunt (2012)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTY1NTgyODA0NV5BMl5BanBnXkFtZTcwMTk3MTc4Mw@@._V1_SY1000_CR0,0,1316,1000_AL_.jpg",
        choiceA: "WALL·E (2008)",
        choiceB: "Citizen Kane (1941)",
        choiceC: "The Shining (1980)",
        choiceD: "Howl's Moving Castle (2004)",
        correct: "Citizen Kane (1941)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjMxNjA4NTQwNV5BMl5BanBnXkFtZTcwMTk4NDIwNA@@._V1_SY1000_CR0,0,1526,1000_AL_.jpg",
        choiceA: "Avengers: Endgame (2019)",
        choiceB: "Aliens (1986)",
        choiceC: "Full Metal Jacket (1987)",
        choiceD: "Braveheart (1995)",
        correct: "Full Metal Jacket (1987)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BZTlhYWM3NzctMTQ0OC00Mjc0LTlhNTQtNTRkOWQ1M2U4Yzg0XkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SX1545_CR0,0,1545,999_AL_.jpg",
        choiceA: "Monty Python and the Holy Grail (1975)",
        choiceB: "Rashomon (1950)",
        choiceC: "Bicycle Thieves (1948)",
        choiceD: "Green Book (2018)",
        correct: "Bicycle Thieves (1948)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjc1OTg2MDQ5MV5BMl5BanBnXkFtZTcwMDI2ODUwNA@@._V1_SY1000_CR0,0,1460,1000_AL_.jpg",
        choiceA: "A Separation (2011)",
        choiceB: "Toy Story 3 (2010)",
        choiceC: "The Apartment (1960)",
        choiceD: "North by Northwest (1959)",
        correct: "North by Northwest (1959)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTk2OTkwNDU5MV5BMl5BanBnXkFtZTcwMDEzNDMzNQ@@._V1_SY1000_CR0,0,1601,1000_AL_.jpg",
        choiceA: "A Clockwork Orange (1971)",
        choiceB: "Full Metal Jacket (1987)",
        choiceC: "Requiem for a Dream (2000)",
        choiceD: "Ikiru (1952)",
        correct: "A Clockwork Orange (1971)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BN2QxZTViZWMtMzgwNC00MmQyLWJhMGUtZmYwZDViNjQ5NzQwXkEyXkFqcGdeQXVyOTg5NzIwMDU@._V1_.jpg",
        choiceA: "A Clockwork Orange (1971)",
        choiceB: "The Kid (1921)",
        choiceC: "1917 (2019)",
        choiceD: "Incendies (2010)",
        correct: "The Kid (1921)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjIxMjAzMzUwNl5BMl5BanBnXkFtZTcwNDQ3OTczNQ@@._V1_SY1000_CR0,0,1487,1000_AL_.jpg",
        choiceA: "Up (2009)",
        choiceB: "Downfall (2004)",
        choiceC: "Snatch (2000)",
        choiceD: "A Beautiful Mind (2001)",
        correct: "Snatch (2000)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTg5MzI0NDY2NV5BMl5BanBnXkFtZTcwMjY5MzA3NA@@._V1_SY1000_CR0,0,1372,1000_AL_.jpg",
        choiceA: "Amélie (2001)",
        choiceB: "North by Northwest (1959)",
        choiceC: "Snatch (2000)",
        choiceD: "Singin' in the Rain (1952)",
        correct: "Singin' in the Rain (1952)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMmMxZmYyYzgtZTZiZC00OTI5LTkyMTYtZmM0ZDRlMjAzOWVhXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SX1516_CR0,0,1516,999_AL_.jpg",
        choiceA: "Scarface (1983)",
        choiceB: "To Kill a Mockingbird (1962)",
        choiceC: "Come and See (1985)",
        choiceD: "The Great Escape (1963)",
        correct: "Scarface (1983)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BODg4OTE4MzU4NV5BMl5BanBnXkFtZTgwNjQwNzg1MDI@._V1_SY1000_CR0,0,1250,1000_AL_.jpg",
        choiceA: "Toy Story 3 (2010)",
        choiceB: "Taxi Driver (1976)",
        choiceC: "Reservoir Dogs (1992)",
        choiceD: "The Great Escape (1963)",
        correct: "Taxi Driver (1976)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTg3OTAyNjg3Ml5BMl5BanBnXkFtZTcwNDI1NDc3Mw@@._V1_.jpg",
        choiceA: "The Elephant Man (1980)",
        choiceB: "No Country for Old Men (2007)",
        choiceC: "Amélie (2001)",
        choiceD: "Warrior (2011)",
        correct: "Amélie (2001)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BOTkyNzM0ODMwNF5BMl5BanBnXkFtZTYwOTY3Nzc2._V1_.jpg",
        choiceA: "Indiana Jones and the Last Crusade (1989)",
        choiceB: "No Country for Old Men (2007)",
        choiceC: "For a Few Dollars More (1965)",
        choiceD: "Lawrence of Arabia (1962)",
        correct: "Lawrence of Arabia (1962)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BNzI0OTQyMTE0N15BMl5BanBnXkFtZTcwMTU5MzU1Mw@@._V1_SX1777_CR0,0,1777,995_AL_.jpg",
        choiceA: "Toy Story 3 (2010)",
        choiceB: "L.A. Confidential (1997)",
        choiceC: "Die Hard (1988)",
        choiceD: "Rashomon (1950)",
        correct: "Toy Story 3 (2010)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BNzc3NTA3ODg5MV5BMl5BanBnXkFtZTYwMDQ1NjQ2._V1_.jpg",
        choiceA: "Gone Girl (2014)",
        choiceB: "The Sting (1973)",
        choiceC: "Persona (1966)",
        choiceD: "How to Train Your Dragon (2010)",
        correct: "The Sting (1973)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMzM3NTc3NzYtOTQ3Yi00ZjYyLWI0MDgtNGFiZTkyOGI1M2UzL2ltYWdlXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_.jpg",
        choiceA: "Pan's Labyrinth (2006)",
        choiceB: "All About Eve (1950)",
        choiceC: "Ikiru (1952)",
        choiceD: "My Neighbor Totoro (1988)",
        correct: "Ikiru (1952)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMjI2NjA1OTY1OV5BMl5BanBnXkFtZTgwMTc1MTEwMzE@._V1_.jpg",
        choiceA: "Sunset Blvd. (1950)",
        choiceB: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)",
        choiceC: "Witness for the Prosecution (1957)",
        choiceD: "Metropolis (1927)",
        correct: "Metropolis (1927)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTY4NDEyMjU5N15BMl5BanBnXkFtZTcwNjYxNzk4Ng@@._V1_SY1000_CR0,0,1494,1000_AL_.jpg",
        choiceA: "A Separation (2011)",
        choiceB: "The Secret in Their Eyes (2009)",
        choiceC: "There Will Be Blood (2007)",
        choiceD: "Metropolis (1927)",
        correct: "A Separation (2011)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTA5MzIwMDUzOTBeQTJeQWpwZ15BbWU3MDkzMjYzMjQ@._V1_.jpg",
        choiceA: "The Thing (1982)",
        choiceB: "For a Few Dollars More (1965)",
        choiceC: "Jurassic Park (1993)",
        choiceD: "Metropolis (1927)",
        correct: "For a Few Dollars More (1965)"
        }]);
      });
};
