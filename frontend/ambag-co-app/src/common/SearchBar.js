import './SearchBar.css'

export default function SearchBar({ placeholder, data }) {
    return (
        <div className="col-sm-2 col-md-4 col-lg-5 ms-auto">
            <div className="input-group">
                <input className="form-control" type="text" placeholder={placeholder}/>
                <span>
                    <button className="btn search-btn" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>
     </div>
    )
}