const genre = prompt("Введіть жанр музики:");
let playlistMessage;

switch (genre) {
    case "rock":
        playlistMessage = "Увімкнено рок-плейлист";
        break;

    case "pop":
        playlistMessage = "Увімкнено поп-плейлист";
        break;

    case "jazz":
        playlistMessage = "Увімкнено джаз-плейлист";
        break;

    case "classical":
        playlistMessage = "Увімкнено класичну музику";
        break;

    default:
        playlistMessage = "Жанр не знайдено";
}

console.log(playlistMessage);
alert(playlistMessage);
