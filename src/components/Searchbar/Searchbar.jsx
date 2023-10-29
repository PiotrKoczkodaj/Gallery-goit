
export const Searchbar=({ changeFnc, handleSubmit } )=>{
    
  
    return (
      <header className="searchbar">
        <form
          style={{ backgroundColor: 'red' }}
          onSubmit={handleSubmit}
          className="form"
        >
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={changeFnc}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }

