import React, {Component} from "react";


class MultiTable extends Component {
    render() {
        var answer= "";
    function solutionOne() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (let x = 1; x <= 10; x++) {
            for (let n = 0; n < numbers.length; n++) {
                console.log(1 * numbers[n], 2 * numbers[n], 3 * numbers[n], 4 * numbers[n], 5 * numbers[n], 6 * numbers[n], 7 * numbers[n], 8 * numbers[n], 9 * numbers[n], 10 * numbers[n]);
                answer += (" " + 1 * numbers[n]+" " + 2 * numbers[n]+" " + 3 * numbers[n]+" " +
                    4 * numbers[n]+" " + 5 * numbers[n]+" " + 6 * numbers[n]+" " + 7 * numbers[n]+" " +
                        8 * numbers[n]+" " + 9 * numbers[n]+" " + 10 * numbers[n]+ " {<br>} ")
            }
            break;
        }
    }
        solutionOne();

        return <div className="setup">
            {answer}
        </div>
    }
}

export default MultiTable;