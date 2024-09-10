

function showStep(stepNo){
    document.querySelectorAll('fieldset').forEach(fieldset=>{
        fieldset.style.display = 'none';
    });
 
    document.getElementById(`step${stepNo}`).style.display ='block';
}