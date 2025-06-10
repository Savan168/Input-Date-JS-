var btn_add = document.getElementById("btn-Add");
var btn_Del = document.getElementById("btn-Delete");
var data = document.getElementById("Input_Dates");
ID = document.getElementById("ID");
Name = document.getElementById("Name");
Gender = document.getElementById("gender");
Score1 = document.getElementById("score1");
Score2 = document.getElementById("score2");
Score3 = document.getElementById("score3");
var txt = ``;
btn_add.addEventListener('click', function (event) {
    event.preventDefault();
    var getID = Number(ID.value);
    var getName = Name.value;
    var getGender = Gender.value;
    var getScore1 = Number(Score1.value);
    var getScore2 = Number(Score2.value);
    var getScore3 = Number(Score3.value);
    var Total = Number(getScore1 + getScore2 + getScore3);
    var avg = Number(Total / 3);
    var grade;
    if (ID.value.trim() === "") {
        ID.focus();
    } else if (Name.value.trim() === "") {
        Name.focus();
    } else if (Gender.value.trim() === "") {
        Gender.focus();
    } else if (Score1.value.trim() === "") {
        Score1.focus();
    } else if (Score2.value.trim() === "") {
        Score2.focus();
    } else if (Score3.value.trim() === "") {
        Score3.focus();
    }

    else {
        if (avg >= 90) {
            grade = "A";
        }
        else if (avg >= 80) {
            grade = "B";
        }
        else if (avg >= 70) {
            grade = "C";
        }
        else if (avg >= 60) {
            grade = "D";
        }
        else if (avg >= 50) {
            grade = "E";
        }
        else {
            grade = "F";
        }
        txt = `
        <tr>
            <td>IT00${getID}</td>
            <td>${getName}</td>
            <td>${getGender}</td>
            <td>${getScore1}</td>
            <td>${getScore2}</td>
            <td>${getScore3}</td>
            <td>${Total}</td>
            <td>${avg}</td>
            <td>${grade}</td>
        </tr>
    `;
        data.insertAdjacentHTML('beforeend', txt);
        ID.value = "";
        Name.value = "";
        Score1.value = "";
        Score2.value = "";
        Score3.value = "";

    }


})