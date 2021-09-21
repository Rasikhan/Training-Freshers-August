const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const movie = document.querySelectorAll('#movie');
container.addEventListener('click', (e) => {
if(e.target.classList.contains('seat') && !e.target.classList.contains('seat-occupied')) {
    e.target.classList.toggle('seat-selected') 
}
const selectedSeats = document.querySelectorAll('.row.seat.selected') 
    const ticketValue = movie.value

});