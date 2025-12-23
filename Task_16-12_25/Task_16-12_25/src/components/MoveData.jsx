import { useRef } from 'react';
import './MoveData.css';

const MoveData = () => {

    const leftBox = useRef(null);
    const rightBox = useRef(null);

    const MOveRight = () => {

        const inputs = leftBox.current.querySelectorAll("input");

        var selectedCheckboxes = [];

        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type == "checkbox" && inputs[i].checked) {
                selectedCheckboxes.push(inputs[i]);
            }
        }

        selectedCheckboxes.forEach(function (checkbox) {

            var text = checkbox.parentElement.textContent;

            const div = document.createElement("div");

            let newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            newCheckbox.className = "checkbox";
            newCheckbox.value = checkbox.value;

            div.appendChild(newCheckbox);
            div.appendChild(document.createTextNode(" " + text));

            rightBox.current.appendChild(div);
            leftBox.current.removeChild(checkbox.parentElement);
        });
    };

    const MOveLeft = () => {
        var inputs = rightBox.current.getElementsByTagName("input");

        var selectedCheckboxes = [];

        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type == "checkbox" && inputs[i].checked) {
                selectedCheckboxes.push(inputs[i]);
            }
        }

        selectedCheckboxes.forEach(function (checkbox) {

            var text = checkbox.parentElement.textContent;

            var div = document.createElement("div");

            var newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            newCheckbox.className = "checkbox";
            newCheckbox.value = checkbox.value;

            div.appendChild(newCheckbox);
            div.appendChild(document.createTextNode(text));

            leftBox.current.appendChild(div);
            rightBox.current.removeChild(checkbox.parentElement);
        });
    };

    return (
        <>
            <div className='leftBox' id='leftBox' ref={leftBox}>
                <div>
                    <input type="checkbox" id='checkbox' />item 1
                </div>
                <div>
                    <input type="checkbox" id='checkbox' />item 2
                </div>
                <div>
                    <input type="checkbox" id='checkbox' />item 3
                </div>
                <div>
                    <input type="checkbox" id='checkbox' />item 4
                </div>
                <div>
                    <input type="checkbox" id='checkbox' />item 5
                </div>
            </div>

            <div className='rightBox' id='rightBox' ref={rightBox} >

            </div>
            <div className='btn' id='btn'>
                <button onClick={MOveRight} >MoveRight</button>
                <button onClick={MOveLeft} >MoveLeft</button>
            </div>

        </>
    );
};

export default MoveData;