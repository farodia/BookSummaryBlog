import '../App.css';
const SearchComponent=()=>{
    return(
        <div id="header-search">
            <div className="search-ajax">
                <form role="search" method="get" action="/">
                    <div>

                        <input type="search" className="search-field" data-swplive="true" data-swpengine="supplemental"
                               name="s" placeholder="Search..." value="" title="Search for:" autoComplete="off"
                               aria-owns="searchwp_live_search_results_61420268408f4" aria-autocomplete="both"
                               aria-label="When autocomplete results are available use up and down arrows to review and enter to go to the desired page. Touch device users, explore by touch or with swipe gestures."/>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default SearchComponent;