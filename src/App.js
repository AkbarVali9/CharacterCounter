import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here

class App extends Component {
  state = {
    searchInput: '',
    wordsList: [],
  }

  one = event => {
    this.setState({searchInput: event.target.value})
  }

  start = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const addedItems = {
      id: uuidv4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, addedItems],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsList} = this.state

    return (
      <div className="main-container">
        <div className="container-1">
          <div className="head-container">
            <h1 className="heading">
              Count the characters like a <br /> Boss...
            </h1>
          </div>

          <div className="container">
            {wordsList.length > 0 ? (
              <ul className="list-container">
                {wordsList.map(eachList => (
                  <li key={eachList.id}>
                    <p key={eachList.id} className="list-element">
                      {eachList.item}: {eachList.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="image"
                alt="no user inputs"
              />
            )}
          </div>
        </div>
        <div className="container-2">
          <h1 className="header">Character Counter</h1>
          <div className="kr">
            <form>
              <div className="input-container">
                <input
                  type="text"
                  className="input-name"
                  placeholder="Enter the characters here"
                  onChange={this.one}
                  value={searchInput}
                />
                <button
                  type="submit"
                  className="add-button"
                  onClick={this.start}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
