import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { filterAction } from "../redux/filterSlice";

export default function Filter() {
  const [keyword, setKeyword] = useState('');

  const dispatch = useDispatch();

  const onSearch = (event) => {
    event.preventDefault();
    dispatch(filterAction({keyword}));
  };

  return (
    <form className="form mb-3" onSubmit={onSearch}>
      <div className="row">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Add price"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          ></input>
        </div>
        <div className="col-auto">
          <button className="btn btn-success">Search </button>
        </div>
      </div>

    </form>
  );
}
