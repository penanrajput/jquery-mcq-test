all_questions = [
    {
        'question': ' HTML stands for -',
        'choices': ['HighText Machine Language', 'HyperText and links Markup Language', 'HyperText Markup Language', 'None of these'],
        'answer': 3 // c

    },
    {
        'question': 'Which of the following attribute is used to        provide a unique name to an element?',
        'choices': ['class', 'id', 'type', 'None of the above'],
        'answer': 2
    },
    {
        'question': ' Which of the following HTML attribute is used to define inline styles?',
        'choices': ['style',
            'type',
            'class',
            'None of the above'],
        'answer': 1
    },
    {
        'question': 'A program in HTML can be rendered and read by -',
        'choices': ['Web browser',
            'Server',
            'Interpreter',
            'None of the above'],
        'answer': 1
    },
    {
        'question': 'What does CSS stand for?',
        'choices': [' Computer Style Sheets', ' Creative Style Sheets', ' Cascading Style Sheets', ' Colorful Style Sheets', 'c c c'],
        'answer': 3
    }
]
var firstSuccess = false;
function displayAnswer() {
    firstSuccess = true;
    for (var i = 0; i < all_questions.length; i++) {

        $('.option' + (i) + (all_questions[i].answer - 1)).addClass("correct");
        if ($(".selected").hasClass("correct")) {
            // $(".selected").removeClass('wrong');
        }
        else {
            $(".selected").addClass('wrong');
        }
    }
    if ($(".correct").hasClass("wrong")) {
        $(".correct").removeClass("wrong")
    }

}


function showQuestion() {
    var h3 = document.createElement("H3")
    h3.innerHTML = 'Questions are as follows :'

    document.getElementById("ques").appendChild(h3)


    for (var i = 0; i < all_questions.length; i++) {
        var div = document.createElement("ol");
        div.setAttribute("id", "ques" + i);
        div.setAttribute("type", "a");
        div.setAttribute("styles", "transform: scale(.95);");

        var p = document.createElement("p");
        p.innerHTML = (i + 1) + ". " + all_questions[i].question;

        div.appendChild(p);

        for (var j = 0; j < all_questions[i].choices.length; j++) {
            var li = document.createElement("LI");

            var label = document.createElement("LABEL")
            label.setAttribute("for", "option" + (i) + (j))
            label.innerHTML = "   " + all_questions[i].choices[j]
            // label.setAttribute("class", "experiment")
            label.setAttribute("class", "option" + (i) + (j))

            var input = document.createElement("INPUT")
            input.setAttribute("TYPE", "radio")
            input.setAttribute("NAME", "option" + (i))
            input.setAttribute("VALUE", all_questions[i].choices[j])
            input.setAttribute("Id", "option" + (i) + (j))

            var span = document.createElement("span");
            span.setAttribute("for", "option" + (i) + (j))
            span.innerHTML = "   " + all_questions[i].choices[j]

            // var p = document.createElement("span")
            // p.innerHTML = "<hr>"

            // // li.appendChild(input)

            // label.appendChild(input) // for radio
            // label.appendChild(li)
            // label.appendChild(span) // for text 
            // label.appendChild(p) // for new line

            // div.appendChild(label)
            // div.appendChild(li)

            li.appendChild(input);
            // li.appendChild(span)
            li.appendChild(label)


            div.appendChild(li)



        }
        var line = document.createElement("p");
        line.innerHTML = '-----------------------------------------------------------------------------------------------';
        document.getElementById("ques").appendChild(line)

        div.appendChild(line)
        document.getElementById("ques").appendChild(div);
    }




}

$(document).ready(function () {


    // showQuestion();
    var start = document.createElement('button')
    start.setAttribute("id", "start");
    start.innerHTML = "start exam"
    start.style.margin = "20px"

    var submit = document.createElement('button')
    submit.setAttribute("id", "start");
    submit.innerHTML = "submit exam"

    document.getElementById("ques").appendChild(start);
    start.addEventListener("click", function () {
        $(this).hide()
        showQuestion();

        document.getElementById("ques").appendChild(submit);

    });
    submit.addEventListener("click", function () {
        displayAnswer()
    })




});

// document.getElementById("start").addEventListener('click', function () {
//     ();
// })


$(document).on("click", "label", function () {
    // window.confirm("Done");

    // $(this).parent().children().removeClass('selected')


    if (firstSuccess) {
        // window.confirm("firstSuccess if ");
        firstSuccess = false;
        // $('*').removeClass("selected")
        // $('*').removeClass("correct")
        // $('*').removeClass("wrong")
        // $('ol > li > label').removeClass(" correct wrong")
        // $('label').removeClass()


        // var fullHTML;
        // $('li > label').each(function () {
        //     fullHTML += $(this).html();
        // })
        // alert(fullHTML)
        $('li > label').removeClass("correct wrong")
        $(this).parent().parent().children().children().removeClass('selected');

        // var fullHTML;
        // $(this).parent().parent().children().children().each(function () {
        //     fullHTML += $(this).html();
        // })
        // alert(fullHTML)
        $(this).addClass('selected');

    }
    else {


        // alert('not has class selected')
        $(this).parent().parent().children().children().removeClass('selected correct wrong');

        $(this).addClass('selected');




        // window.confirm("firstSuccess else ");
        // $(this).parent().parent().children().children().removeClass('selected');
        // $(this).parent().parent().children().children().removeClass('correct');
        // $(this).parent().parent().children().children().removeClass('wrong');

        // $('label').removeClass('selected');
        // $('label').removeClass('wrong');
        // $('label').removeClass('correct');


    }
    // $(this).addClass('selected');

    // $(this).find("*").removeClass('selected');
    // $(this).parent().removeClass('wrong');
    // $(this).parent().removeClass('correct');
    // $(this).addClass('selected');
    // $(this).parent().
    // $(this).parent().children().removeClass('selected');
    // $(this).parent().css("background-color", "red")

    // $(this).parent().children.css("border-bottom", "3px double red");

});