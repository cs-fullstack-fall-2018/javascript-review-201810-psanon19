import React, {Component} from "react";


class NumberRange extends Component {
    render() {
        var answer="";
        function solutionOne(x1, x2) {
            if (x2 < x1) {
                answer = -1
                // document.getElementById('q1').innerText="-1";
            }
            else {
                for (let i = x1 + 1; i < x2; i++) {
                    answer += i + "\n";

                    // document.getElementById('q1').innerHTML=("<p>"+i+"</p>");
                }
            }
        }
        solutionOne(15,20);

        return <div className="setup">
            {answer}
        </div>
    }
}

export default NumberRange;