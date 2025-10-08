const form=document.querySelector('form')
console.log(form)
form.addEventListener('submit',function(e){
    e.preventDefault()//this will not take any value
    const height=parseInt(document.querySelector('#height').value)
    // console.log(height)
    const weight=parseInt(document.querySelector('#weight').value)
    // 
    const results=document.getElementById('results')
    if(height==''|| height<0||isNaN(height)){
        results.innerHTML=`Please enter a valid height ${height}`
    }
    else if(weight==''|| weight<0||isNaN(weight)){
        results.innerHTML=`Please enter a valid weight ${weight}`
    }
    else{
        const bmi=(weight / ((height * height) / 10000)).toFixed(2);
       results.innerHTML = `<span>Your BMI Score is ${bmi}</span>`;
       const guide=(document.getElementById('weight-guide'))
       if(bmi<18.6){
        guide.innerHTML=`Under Weight`
       }
       else if(bmi=>18.6 && bmi<=24.9){
        guide.innerHTML=`Normal Range`
       }
       else{
        guide.innerHTML=`Overweight`
       }
    }
})