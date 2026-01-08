import react, { use } from "react"
import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Searchbar() {

   const [keyword, setkeyword] = useState("");

   const navigate = useNavigate()

    const searchhaandler  = () => {
        navigate('/search?keyword=' + keyword)
    }

    return   <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              onChange={(e) => setkeyword (e.target.value)}
              placeholder="Enter Product Name ..."
              onBlur={searchhaandler}
            />
            <div className="input-group-append">
              <button onClick={searchhaandler} id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
   
}