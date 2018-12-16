"use strict";

function calculator() {
    let calculator_array = new Array();
    let calcul = 0;
    let pas_ch = 0;

    function $id(id) {
        return document.getElementById(id);
    }

    function f_calc(id, n) {
        if (n === 'ce') {
            init_calc(id);
        }
        else if (n === '=') {
            if (calculator_array[id][0] !== '=' && calculator_array[id][1] !== 1) {
                eval('calcul=' + calculator_array[id][2] + calculator_array[id][0] + calculator_array[id][3] + ';');
                calculator_array[id][0] = '=';
                $id(id + '_result').value = calcul;
                calculator_array[id][2] = calcul;
                calculator_array[id][3] = 0;
            }
        }
        else if (n === '+-') {
            $id(id + '_result').value = $id(id + '_result').value * (-1);
            if (calculator_array[id][0] === '=') {
                calculator_array[id][2] = $id(id + '_result').value;
                calculator_array[id][3] = 0;
            }
            else {
                calculator_array[id][3] = $id(id + '_result').value;
            }
            pas_ch = 1;
        }
        else if (n === 'nbs') {
            if ($id(id + '_result').value < 10 && $id(id + '_result').value > -10) {
                $id(id + '_result').value = 0;
            }
            else {
                $id(id + '_result').value = $id(id + '_result').value.slice(0, $id(id + '_result').value.length - 1);
            }
            if (calculator_array[id][0] === '=') {
                calculator_array[id][2] = $id(id + '_result').value;
                calculator_array[id][3] = 0;
            }
            else {
                calculator_array[id][3] = $id(id + '_result').value;
            }
        }
        else {
            if (calculator_array[id][0] !== '=' && calculator_array[id][1] !== 1) {
                eval('calcul=' + calculator_array[id][2] + calculator_array[id][0] + calculator_array[id][3] + ';');
                $id(id + '_result').value = calcul;
                calculator_array[id][2] = calcul;
                calculator_array[id][3] = 0;
            }
            calculator_array[id][0] = n;
        }
        if (pas_ch === 0) {
            calculator_array[id][1] = 1;
        }
        else {
            pas_ch = 0;
        }
        document.getElementById(id + '_result').focus();
        return true;
    }

    function add_calc(id, n) {
        if (calculator_array[id][1] === 1) {
            $id(id + '_result').value = n;
        }
        else {
            $id(id + '_result').value += n;
        }
        if (calculator_array[id][0] === '=') {
            calculator_array[id][2] = $id(id + '_result').value;
            calculator_array[id][3] = 0;
        }
        else {
            calculator_array[id][3] = $id(id + '_result').value;
        }
        calculator_array[id][1] = 0;
        document.getElementById(id + '_result').focus();
        return true;
    }

    function init_calc(id) {
        $id(id + '_result').value = 0;
        calculator_array[id] = new Array('=', 1, '0', '0', 0);
        document.getElementById(id + '_result').focus();
        return true;
    }

    function key_detect_calc(id, evt) {
        if ((evt.keyCode > 95) && (evt.keyCode < 111)) {
            let nbr = evt.keyCode - 96;
            add_calc(id, nbr);
        }
        else if ((evt.keyCode > 47) && (evt.keyCode < 58)) {
            let nbr = evt.keyCode - 48;
            add_calc(id, nbr);
        }
        else if (evt.keyCode === 107) {
            f_calc(id, '+');
        }
        else if (evt.keyCode === 109) {
            f_calc(id, '-');
        }
        else if (evt.keyCode === 106) {
            f_calc(id, '*');
        }
        else if (evt.keyCode === 111) {
            f_calc(id, '/');
        }
        else if (evt.keyCode === 110) {
            add_calc(id, '.');
        }
        else if (evt.keyCode === 190) {
            add_calc(id, '.');
        }
        else if (evt.keyCode === 188) {
            add_calc(id, '.');
        }
        else if (evt.keyCode === 13) {
            f_calc(id, '=');
        }
        else if (evt.keyCode === 46) {
            f_calc(id, 'ce');
        }
        else if (evt.keyCode === 8) {
            f_calc(id, 'nbs');
        }
        else if (evt.keyCode === 27) {
            f_calc(id, 'ce');
        }
        return true;
    }
}
