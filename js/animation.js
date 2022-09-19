export function animateNext(i) {
    // console.log(i)
    let stop = document.querySelectorAll('.note').length;
    let notes = document.querySelectorAll('.note');
    let animated = document.querySelector(`#note${i}`);
    console.log()
    notes.forEach(note => {
        note.classList.remove("show")
    })
    animated.classList.add("animation")
    animated.addEventListener('animationend', () => {
        if (i === stop) {
            notes.forEach(note => {
                note.classList.add("show")
                note.classList.remove("animation")
            })
        } else {
            animateNext(i + 1);
        }
    });
}