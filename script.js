function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('jokeText').innerText = data.value;
        })
        .catch(error => {
            document.getElementById('jokeText').innerText = 'Something went wrong.';
            console.error('Error fetching the joke:', error);
        });
}
document.getElementById('jokeButton').addEventListener('click', fetchJoke);