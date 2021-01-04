
function getmarks(){
    var maths =Number(document.getElementById('maths').value) ;
  

    var physics =Number(document.getElementById('physics').value) ;
    

    var chemistry =Number(document.getElementById('chemistry').value) ;
    

    var English =Number(document.getElementById('English').value) ;

    var total = 400;
    var marks = (maths+physics+chemistry+English);
    var presentage = (marks)/(total )*100;

    document.getElementById('presentage').innerHTML =  presentage +"%";
   
    if(presentage>75){
        grade = 'A';
    }
    else if (presentage<75 && presentage>60){
        grade = 'B';

    }
else if(presentage<60 && presentage > 50){
    grade = "C"
}
    else if (presentage<50 && presentage>35){
        grade='S'
    }
    else{
        grade = "F"
    }
    document.getElementById('grade').innerHTML =  grade;


    if(presentage>35){
        result = "Congratulation,You have been Pass";
    }
    else {
        result ="Sorry, Please Try again";
    }
    document.getElementById('result').innerHTML =  result  ;
}