guessLetterHandler = event => {
    const inputGiven = this.state.currentChosenLetter.length > 0
    const newLetter = !this.state.guessedLetters.includes(
        this.state.currentChosenLetter
    )
    if (inputGiven && newLetter) {
        const newGuessedLetters = [...this.state.guessedLetters]
        newGuessedLetters.push(this.state.currentChosenLetter)
        this.setState({
            guessedLetters: newGuessedLetters
        })
    }
    this.setState({currentChosenLetter: ''})
    event.preventDefault()
}
