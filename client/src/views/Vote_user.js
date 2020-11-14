import React, { useState } from "react";


class Vote_user extends React.Component {
        constructor(props) {
                super(props)
                this.state = {
                        vote: props.vote1
                }
        }
        render() {
                console.log("-------------------------Vote_user--------------------------------");
                console.log(this.state.vote);
                let vote = this.state.vote.map(vote => {
                        return (<td className="value" width="72px">
                                <p>{vote.vote_status}</p>
                        </td>)
                })
                return(
                        <div>{vote}</div>
                )
        }
}
export default Vote_user;