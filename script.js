function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('jokeText').innerText = data.value;
        })
        .catch(error => {
            document.getElementById('jokeText').innerText = 'Oops! Something went wrong. Please try again.';
            console.error('Error fetching the joke:', error);
        });
}
document.getElementById('jokeButton').addEventListener('click', fetchJoke);