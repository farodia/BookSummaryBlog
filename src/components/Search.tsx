import '../App.css';

const Search = () => {
    return (
        <div className="header-search">
            <div className="search-ajax">
                <input type="search" className="search-field" data-swplive="true" data-swpengine="supplemental"
                       name="s" placeholder="Search..." title="Search for:" autoComplete="off"
                       aria-autocomplete="both"/>
            </div>
        </div>
    );

}

export default Search;