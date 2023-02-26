import View from './view.js';
import previeView from './previeView.js';
import icons from 'url:../../img/icons.svg';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previeView.render(result, false)).join('');
  }
}

export default new ResultView();
