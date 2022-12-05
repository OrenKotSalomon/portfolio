var gProjects = [
    {
        id: "tictactoe",
        name: "Tic tac toe",
        title: "Tic tac toe game",
        desc: "Basic Tic tac toe game, there is only one winner, coded with vanilla js.",
        url: "https://orenkotsalomon.github.io/Tic-Tac-Toe-2022/",
        publishedAt: 1666873748,
        labels: ["Matrixes"],
    },
    {
        id: "minesweeper",
        name: "Mine sweeper",
        title: "Mine sweeper with features",
        desc: "Mine sweeper game with few addOns features,you need to watch out from the mines! note that you have to flag all the mines in order to win, coded with vanilla js.",
        url: "https://orenkotsalomon.github.io/MineSweeper-2022/",
        publishedAt: 1669465933,
        labels: ["Matrixes"],
    },
    {
        id: "ca-pacman",
        name: "CA-PacMan",
        title: "Pacman game!",
        desc: "Pacman game, coded with vanilla js.",
        url: "https://orenkotsalomon.github.io/CA-PacMan/",
        publishedAt: 1669120333,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "ballboard",
        name: "Ball board game",
        title: "Ball board game ",
        desc: "Ball board game,needs to eat all the balls on the board and avoid the glue which will make him stuck for few seconds, coded with vanilla js.",
        url: "https://orenkotsalomon.github.io/Ball-board-game-2022/",
        publishedAt: 1668947533,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "touchthenums",
        name: "Touch the number",
        title: "Touch the number in order",
        desc: "Touch the number,in order to win you need to touch the numbers by order as soon as possible! to determine your best score , coded with vanilla js.",
        url: " https://orenkotsalomon.github.io/Touch-the-Numbers-2022/",
        publishedAt: 1668947533,
        labels: ["Matrixes"],
    },
    {
        id: "bookshop",
        name: "Book shop demo",
        title: "Book shop demo mannager",
        desc: "Book shop demo,enjoy with managin your book shop in the best way, via updating prices, delete book and add new ones, and of course your can rate them by your own order, coded with vanilla js.",
        url: "https://orenkotsalomon.github.io/Book-Shop-demo/",
        publishedAt: 1670070733,
        labels: ["Matrixes"],
    },
]



function getProject() {

    const projects = gProjects.filter(project => project)
    return projects

}

