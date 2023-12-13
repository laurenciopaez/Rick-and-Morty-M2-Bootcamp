import React from "react";
import { Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { fetchReset } from "../redux/actions/actions";

const Filters = () => {
    const dispatch = useDispatch();

    const handleReset = (event) => {
        event.preventDefault();

        dispatch(fetchReset())
    }

    return (
        <>
        <div>
            <h1 className="text-2xl font-semibolg text-black">Filters</h1>
            <Button className="bg-blue-500 mt-1 mb-1" onClick={handleReset}>
                Reset
            </Button>
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps,{fetchReset})(Filters)