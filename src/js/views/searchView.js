class SearchView {
  _parentEL = document.querySelector('.search');
  _searchField = this._parentEL.querySelector('.search__field');

  getQuery() {
    const query = this._searchField.value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._searchField.value = '';
  }

  addHandlerSearch(handler) {
    this._parentEL.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
