function blackjackWinner(player1, player2) {
    const sum = (a, b) => a + b;
    const score1 = sum(...player1);
    const score2 = sum(...player2);

    if (score1 === score2) return "Draw";

    if (score1 === 21) return "Player1";
    if (score2 === 21) return "Player2";
    
    if (score1 > 21 && score2 <= 21) return "Player2";
    if (score2 > 21 && score1 <= 21) return "Player1";
    
    if (Math.abs(score1 - 21) < Math.abs(score2 - 21)) return "Player1";
    if (Math.abs(score2 - 21) < Math.abs(score1 - 21)) return "Player2";
}
