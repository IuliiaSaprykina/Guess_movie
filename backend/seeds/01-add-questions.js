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
        choiceB: "Fight Club (1999) ",
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
        shot_src: "https://m.media-amazon.com/images/M/MV5BNjI1ZDcyMDYtYmMxMC00ZjlhLTk1NmUtYWE4ZDcxZWQ1NTUxXkEyXkFqcGdeQXVyNjAwODA4Mw@@._V1_.jpg",
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
        shot_src: "https://m.media-amazon.com/images/M/MV5BYjE5ZmEyZjctZWNlYi00MzRkLTgzODktMzdhMTQ2ZjNjMTIwXkEyXkFqcGdeQXVyMjMzMDI4MjQ@._V1_SY1000_CR0,0,1329,1000_AL_.jpg",
        choiceA: "Saving Private Ryan (1998)",
        choiceB: "Modern Times (1936)",
        choiceC: "Terminator 2: Judgment Day (1991)",
        choiceD: "It's a Wonderful Life (1946)",
        correct: "It's a Wonderful Life (1946)"
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
        shot_src: "https://m.media-amazon.com/images/M/MV5BMTU1NjE1MTk4OF5BMl5BanBnXkFtZTgwMjA0MjQ3MjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
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
        shot_src: "https://m.media-amazon.com/images/M/MV5BYjFiOTE0MjUtMTY2Ny00ZjU3LTgwYTQtNDQ5ZGJkZTgzOTYxXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_.jpg",
        choiceA: "Once Upon a Time in the West (1968)",
        choiceB: "Paths of Glory (1957)",
        choiceC: "Rear Window (1954)",
        choiceD: "Witness for the Prosecution (1957)",
        correct: "Once Upon a Time in the West (1968)"
        }, {
        shot_src: "https://m.media-amazon.com/images/M/MV5BYjFiOTE0MjUtMTY2Ny00ZjU3LTgwYTQtNDQ5ZGJkZTgzOTYxXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_.jpg",
        choiceA: "Once Upon a Time in the West (1968)",
        choiceB: "Paths of Glory (1957) ",
        choiceC: "Rear Window (1954)",
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
        }]);
      });
};
